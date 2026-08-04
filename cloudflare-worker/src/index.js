const ALLOWED_ORIGINS = new Set([
  "https://vladislavkorolev.ru",
  "https://www.vladislavkorolev.ru"
]);

const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1"]);

const LIMITS = {
  name: 100,
  contact: 200,
  description: 3000,
  maxBodyBytes: 12000
};

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const corsHeaders = getCorsHeaders(origin);

    if (request.method === "OPTIONS") {
      return handleOptions(corsHeaders);
    }

    if (!corsHeaders) {
      return jsonResponse({ ok: false, error: "Forbidden" }, 403);
    }

    if (new URL(request.url).pathname !== "/lead") {
      return jsonResponse({ ok: false, error: "Not found" }, 404, corsHeaders);
    }

    if (request.method !== "POST") {
      return jsonResponse({ ok: false, error: "Method not allowed" }, 405, {
        ...corsHeaders,
        Allow: "POST, OPTIONS"
      });
    }

    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return jsonResponse({ ok: false, error: "Content-Type must be application/json" }, 415, corsHeaders);
    }

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > LIMITS.maxBodyBytes) {
      return jsonResponse({ ok: false, error: "Payload too large" }, 413, corsHeaders);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse({ ok: false, error: "Invalid JSON" }, 400, corsHeaders);
    }

    const lead = normalizeLead(payload);

    if (lead.website) {
      return jsonResponse({ ok: true }, 200, corsHeaders);
    }

    const validationError = validateLead(lead);
    if (validationError) {
      return jsonResponse({ ok: false, error: validationError }, 400, corsHeaders);
    }

    if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
      return jsonResponse({ ok: false, error: "Lead delivery is not configured" }, 500, corsHeaders);
    }

    const telegramResponse = await sendTelegramMessage(env, formatLeadMessage(lead));
    if (!telegramResponse.ok) {
      return jsonResponse({ ok: false, error: "Lead delivery failed" }, 502, corsHeaders);
    }

    return jsonResponse({ ok: true }, 200, corsHeaders);
  }
};

function handleOptions(corsHeaders) {
  if (!corsHeaders) {
    return new Response(null, { status: 403 });
  }
  return new Response(null, { status: 204, headers: corsHeaders });
}

function getCorsHeaders(origin) {
  if (!isAllowedOrigin(origin)) return null;

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

function isAllowedOrigin(origin) {
  if (ALLOWED_ORIGINS.has(origin)) return true;

  try {
    const url = new URL(origin);
    return url.protocol === "http:" && LOCAL_HOSTNAMES.has(url.hostname);
  } catch {
    return false;
  }
}

function normalizeLead(payload) {
  return {
    name: normalizeText(payload?.name),
    contact: normalizeText(payload?.contact),
    description: normalizeText(payload?.description),
    website: normalizeText(payload?.website)
  };
}

function normalizeText(value) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .replace(/\r\n/g, "\n")
    .trim();
}

function validateLead(lead) {
  if (!lead.name || !lead.contact || !lead.description) {
    return "Required fields are missing";
  }
  if (lead.name.length > LIMITS.name) {
    return "Name is too long";
  }
  if (lead.contact.length > LIMITS.contact) {
    return "Contact is too long";
  }
  if (lead.description.length > LIMITS.description) {
    return "Description is too long";
  }
  return "";
}

function formatLeadMessage(lead) {
  return [
    "🔔 Новая заявка с сайта",
    "",
    "👤 Имя:",
    lead.name,
    "",
    "📞 Связь:",
    lead.contact,
    "",
    "📝 Задача:",
    lead.description,
    "",
    "🌐 Источник:",
    "vladislavkorolev.ru",
    "",
    "🕒 Время:",
    formatMoscowTime()
  ].join("\n");
}

function formatMoscowTime() {
  return new Intl.DateTimeFormat("ru-RU", {
    timeZone: "Europe/Moscow",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(new Date());
}

async function sendTelegramMessage(env, text) {
  const response = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text,
      disable_web_page_preview: true
    })
  });

  if (!response.ok) {
    return { ok: false };
  }

  const data = await response.json().catch(() => null);
  return { ok: Boolean(data?.ok) };
}

function jsonResponse(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...headers
    }
  });
}
