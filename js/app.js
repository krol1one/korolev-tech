const CONTACTS = {
  telegram: "https://t.me/KROL1ONE",
  email: "i@korolev-tech.ru",
  github: "https://github.com/krol1one"
};

const CASES_FALLBACK = [
  {
    id: "getcourse-access-questionnaires",
    title: "Обязательные анкеты и управление доступом в GetCourse",
    category: "GetCourse",
    summary: "Настроена последовательная логика прохождения модулей через обязательные анкеты и автоматическое добавление пользователей в группы.",
    task: "Сделать так, чтобы ученики не могли перейти к следующему модулю, пока не заполнят обязательную анкету.",
    done: ["Создана система групп для каждого пройденного модуля.", "Настроены ограничения доступа.", "Проверена логика под тестовым учеником.", "Найдена и исправлена ошибка с неверно назначенной группой.", "Восстановлена корректная последовательность открытия модулей."],
    solution: "Логика доступа построена на группах GetCourse: после выполнения обязательного действия пользователь автоматически переводится в следующую группу, а материалы следующего модуля открываются только при наличии нужного условия.",
    result: "Ученики проходят курс строго по заданной логике, а доступ к следующему модулю открывается автоматически после выполнения обязательного действия.",
    stack: ["GetCourse", "Группы", "Процессы", "Анкеты", "Тестирование доступа"]
  },
  {
    id: "getcourse-sheets-export",
    title: "Автоматический экспорт анкет GetCourse в Google Sheets",
    category: "Автоматизация",
    summary: "Разработан серверный сервис для автоматической выгрузки ответов из GetCourse в Google Sheets.",
    task: "Убрать ручное скачивание анкет из GetCourse и перенос ответов в рабочую таблицу.",
    done: ["Настроено получение выгрузок из GetCourse.", "Данные сохраняются в SQLite.", "Реализована передача данных в Google Sheets.", "Добавлен автоматический запуск каждые 15 минут.", "Сервис размещён на Linux-сервере.", "Настроен systemd.", "Создан Git-репозиторий проекта."],
    solution: "Сервис регулярно получает новые данные, нормализует их в локальном хранилище и отправляет в нужную таблицу Google Sheets. Запуск контролируется системным сервисом, чтобы процесс не зависел от ручных действий.",
    result: "Ответы учеников автоматически попадают в рабочую таблицу без ручного скачивания и переноса файлов.",
    stack: ["Python", "SQLite", "Google Sheets API", "Linux", "systemd", "cron", "GetCourse"]
  },
  {
    id: "telegram-html-salebot",
    title: "Telegram-бот для подготовки HTML под SaleBot",
    category: "Telegram",
    summary: "Создан Telegram-бот, который преобразует сообщения Telegram в HTML-разметку, совместимую с SaleBot.",
    task: "Автоматизировать подготовку сложных сообщений для SaleBot без ручного написания HTML.",
    done: ["Бот принимает обычные и пересланные сообщения.", "Сохраняет жирный текст, курсив, подчёркивания и ссылки.", "Поддерживает зачёркивание, скрытый текст, код и цитаты.", "Поддерживает premium emoji.", "Формирует готовый HTML.", "Формирует код для поля «Калькулятор».", "Обрабатывает изображения и видео.", "Выдаёт Telegram file_id.", "Работает как systemd-сервис.", "Запускается автоматически после перезагрузки сервера."],
    solution: "Бот анализирует entities входящего сообщения Telegram, преобразует форматирование в HTML и дополнительно готовит технические значения, которые нужны для вставки в SaleBot.",
    result: "Подготовка сложных сообщений для SaleBot выполняется автоматически через Telegram без ручного написания HTML.",
    stack: ["Python", "Telegram Bot API", "Linux", "systemd", "HTML"]
  },
  {
    id: "crm-investment-project",
    title: "CRM для инвестиционного проекта",
    category: "CRM",
    summary: "Настроена CRM-логика для работы с базой инвесторов и повторными касаниями.",
    task: "Организовать обработку базы инвесторов, этапы коммуникации и повторные касания в CRM.",
    done: ["Импортирована база из 324 контактов.", "Добавлено 11 пользовательских полей.", "Настроены теги.", "Создана воронка.", "Организована сегментация базы.", "Настроены этапы обработки.", "Выделены повторные касания.", "Создана логика работы с ответами и переводами между этапами."],
    solution: "CRM-структура разделяет контакты по статусам и реакции на коммуникацию. Поля, теги и этапы воронки помогают быстро видеть контекст контакта и планировать следующий шаг.",
    result: "Отправлено 111 сообщений, получено 47 ответов, 36 контактов переведены на следующие этапы, сформирован отдельный сегмент повторных касаний.",
    stack: ["amoCRM", "Kommo", "Воронки", "Пользовательские поля", "Сегментация"]
  },
  {
    id: "kommo-bitrix24-migration",
    title: "Миграция Kommo в Bitrix24",
    category: "CRM",
    summary: "Проведён анализ структуры Kommo перед переносом CRM-процессов в Bitrix24 для компании в сфере недвижимости.",
    task: "Подготовить безопасный перенос CRM-структуры, данных и процессов из Kommo в Bitrix24.",
    done: ["Проанализированы воронки.", "Изучены карточки и пользовательские поля.", "Проверены активные и нереализованные сделки.", "Проанализированы задачи и переписки.", "Изучены источники лидов.", "Подготовлена структура переноса.", "Сформирована предварительная оценка проекта."],
    solution: "Перед миграцией описана текущая логика Kommo, выделены сущности для переноса и риски потери контекста. Это позволило строить миграцию не как простой экспорт, а как перенос бизнес-процесса.",
    result: "Подготовлен план безопасной миграции данных и бизнес-процессов из Kommo в Bitrix24.",
    stack: ["Kommo", "Bitrix24", "CRM-аудит", "Миграция данных", "Бизнес-процессы"]
  },
  {
    id: "specnms-monitoring",
    title: "Система мониторинга SpecNMS",
    category: "Разработка",
    summary: "Разработана внутренняя система мониторинга сетевой инфраструктуры, устройств, ИБП, резервных копий и инцидентов.",
    task: "Собрать контроль сетевой инфраструктуры, аварий, резервных копий и технических задач в одной внутренней системе.",
    done: ["Мониторинг устройств через SNMP.", "Контроль доступности.", "Сбор метрик.", "Мониторинг трафика.", "Интерактивная карта сети.", "Хранение резервных копий конфигураций.", "Сравнение версий конфигураций.", "Мониторинг ИБП.", "Центр событий.", "Система проблем и аварий.", "Service Desk.", "Контроль состояния самой системы.", "Уведомления в Telegram.", "Документация.", "Управление стойками и физическими подключениями."],
    solution: "Внутренний сервис объединяет SNMP-мониторинг, события, резервные копии конфигураций, карту сети и рабочие задачи. Уведомления отправляются в Telegram, а состояние инфраструктуры доступно из единой панели.",
    result: "Сетевые устройства, аварии, изменения конфигураций, ИБП и технические задачи контролируются из одной внутренней системы.",
    stack: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "Jinja2", "Bootstrap", "SNMP", "Linux", "systemd", "Docker"]
  },
  {
    id: "instagram-ai-agent",
    title: "AI-агент для Instagram",
    category: "Автоматизация",
    summary: "Разработан AI-агент для обработки входящих сообщений Instagram и автоматизации первичного общения с клиентами.",
    task: "Автоматизировать первичную обработку входящих сообщений Instagram и сохранить историю диалогов для дальнейшей работы.",
    done: ["Подключена обработка Instagram Direct.", "Настроен backend на FastAPI.", "Подключены PostgreSQL и Redis.", "Система развёрнута в Docker.", "Подключена локальная языковая модель через Ollama.", "Создана административная панель.", "Реализовано сохранение диалогов.", "Подготовлена логика квалификации заявок."],
    solution: "Сообщения проходят через backend, сохраняются в базе и обрабатываются локальной моделью. Административная панель позволяет отслеживать диалоги и работу квалификации.",
    result: "Первичная коммуникация с клиентами стала управляемой: сообщения сохраняются, обрабатываются и могут передаваться дальше по сценарию.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Ollama", "Meta API", "Python"]
  },
  {
    id: "job-search-automation-bot",
    title: "Бот для автоматизации поиска работы",
    category: "Telegram",
    summary: "Разработана система для сбора вакансий, фильтрации подходящих предложений и автоматизации работы с откликами.",
    task: "Сократить ручной просмотр вакансий и быстрее находить релевантные предложения.",
    done: ["Telegram-бот.", "Backend.", "Frontend.", "Scheduler.", "Worker.", "Redis.", "PostgreSQL.", "Docker.", "Nginx.", "Система фильтрации вакансий.", "Уведомления о подходящих заказах."],
    solution: "Система разделена на сбор данных, фоновую обработку, фильтрацию и уведомления. Telegram-бот используется как быстрый интерфейс получения подходящих предложений.",
    result: "Подходящие вакансии и заказы собираются и фильтруются автоматически, а уведомления приходят в Telegram.",
    stack: ["Telegram Bot API", "Python", "PostgreSQL", "Redis", "Docker", "Nginx", "Frontend"]
  }
];

const state = {
  cases: [],
  activeFilter: "Все",
  lastFocusedElement: null
};

const selectors = {
  header: document.querySelector("[data-header]"),
  nav: document.querySelector("[data-nav]"),
  menuToggle: document.querySelector("[data-menu-toggle]"),
  cases: document.querySelector("[data-cases]"),
  modal: document.querySelector("[data-modal]"),
  modalPanel: document.querySelector(".modal-panel"),
  modalContent: document.querySelector("[data-modal-content]"),
  toTop: document.querySelector("[data-to-top]"),
  form: document.querySelector("[data-contact-form]"),
  formStatus: document.querySelector("[data-form-status]")
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  setupContacts();
  setupMenu();
  setupScrollState();
  setupReveal();
  setupFilters();
  setupModal();
  setupForm();
  loadCases();
  document.querySelector("[data-year]").textContent = new Date().getFullYear();
}

async function loadCases() {
  try {
    const response = await fetch("./data/cases.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Cases JSON is unavailable");
    state.cases = await response.json();
  } catch (error) {
    state.cases = CASES_FALLBACK;
    console.info("Кейсы загружены из встроенного резервного набора. Для проверки JSON откройте проект через локальный сервер.");
  }

  renderCases();
}

function setupContacts() {
  document.querySelectorAll("[data-contact-link]").forEach((link) => {
    applyContactLink(link);
  });
}

function applyContactLink(link) {
  const type = link.dataset.contactLink;
  const value = CONTACTS[type];

  if (isPlaceholder(value)) {
    link.href = "#contacts";
    link.title = "Заглушка. Замените значение в js/app.js перед публикацией.";
    link.dataset.placeholderLink = type;
    link.setAttribute("aria-label", `${link.textContent.trim()}. Сейчас используется заглушка.`);
    link.addEventListener("click", showPlaceholderNotice);
    return;
  }

  link.href = type === "email" ? `mailto:${value}` : value;
  if (type !== "email") {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
}

function isPlaceholder(value) {
  return !value || value.includes("_");
}

function showPlaceholderNotice(event) {
  event.preventDefault();
  const status = selectors.formStatus;
  if (status) {
    status.textContent = "Ссылка пока является заглушкой. Замените CONTACTS в js/app.js перед публикацией.";
  }
  document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
}

function setupMenu() {
  selectors.menuToggle.addEventListener("click", () => {
    const isOpen = selectors.nav.classList.toggle("is-open");
    selectors.menuToggle.setAttribute("aria-expanded", String(isOpen));
    selectors.menuToggle.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  });

  selectors.nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });
}

function closeMenu() {
  selectors.nav.classList.remove("is-open");
  selectors.menuToggle.setAttribute("aria-expanded", "false");
  selectors.menuToggle.setAttribute("aria-label", "Открыть меню");
}

function setupScrollState() {
  const navLinks = [...selectors.nav.querySelectorAll("a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const update = () => {
    selectors.header.classList.toggle("is-scrolled", window.scrollY > 8);
    selectors.toTop.classList.toggle("visible", window.scrollY > 650);

    let currentId = sections[0]?.id;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 140) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  };

  window.addEventListener("scroll", update, { passive: true });
  selectors.toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  update();
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));
}

function setupFilters() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      renderCases();
    });
  });
}

function renderCases() {
  const visibleCases = state.activeFilter === "Все"
    ? state.cases
    : state.cases.filter((item) => {
        if (state.activeFilter === "Инфраструктура") {
          return item.category === "Инфраструктура" || item.stack.some((tag) => ["Linux", "Docker", "SNMP", "MikroTik", "Proxmox", "Nginx"].includes(tag));
        }
        return item.category === state.activeFilter;
      });

  if (!visibleCases.length) {
    selectors.cases.innerHTML = '<p class="empty-state">Для выбранного фильтра пока нет кейсов.</p>';
    return;
  }

  selectors.cases.innerHTML = visibleCases.map((item) => `
    <article class="case-card reveal in-view">
      <div class="case-meta">
        <span class="case-category">${escapeHtml(item.category)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <div class="case-tags">
        ${item.stack.slice(0, 4).map((tag) => `<span class="case-tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <p class="case-result"><strong>Результат:</strong> ${escapeHtml(item.result)}</p>
      <button class="button secondary" type="button" data-case-id="${escapeHtml(item.id)}">Подробнее</button>
    </article>
  `).join("");

  selectors.cases.querySelectorAll("[data-case-id]").forEach((button) => {
    button.addEventListener("click", () => openModal(button.dataset.caseId));
  });
}

function setupModal() {
  selectors.modal.addEventListener("click", (event) => {
    if (event.target.matches("[data-modal-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && selectors.modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function openModal(caseId) {
  const item = state.cases.find((caseItem) => caseItem.id === caseId);
  if (!item) return;

  state.lastFocusedElement = document.activeElement;
  selectors.modalContent.innerHTML = `
    <p class="eyebrow">${escapeHtml(item.category)}</p>
    <h2 id="modal-title">${escapeHtml(item.title)}</h2>
    <p>${escapeHtml(item.summary)}</p>
    ${modalSection("Задача", `<p>${escapeHtml(item.task)}</p>`)}
    ${modalSection("Что было сделано", `<ul>${item.done.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>`)}
    ${modalSection("Техническое решение", `<p>${escapeHtml(item.solution)}</p>`)}
    ${modalSection("Результат", `<p>${escapeHtml(item.result)}</p>`)}
    ${modalSection("Стек", `<div class="case-tags">${item.stack.map((tag) => `<span class="case-tag">${escapeHtml(tag)}</span>`).join("")}</div>`)}
    <a class="button primary" href="${escapeAttribute(CONTACTS.telegram)}" target="_blank" rel="noopener noreferrer" data-contact-link="telegram">Связаться</a>
  `;
  selectors.modalContent.querySelectorAll("[data-contact-link]").forEach((link) => applyContactLink(link));

  selectors.modal.classList.add("is-open");
  selectors.modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  selectors.modalPanel.focus();
}

function closeModal() {
  selectors.modal.classList.remove("is-open");
  selectors.modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (state.lastFocusedElement) {
    state.lastFocusedElement.focus();
  }
}

function modalSection(title, body) {
  return `<section class="modal-section"><h3>${title}</h3>${body}</section>`;
}

function setupForm() {
  selectors.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(selectors.form);
    const text = [
      "Здравствуйте! Хочу обсудить проект.",
      "",
      `Имя: ${formData.get("name")}`,
      `Способ связи: ${formData.get("contact")}`,
      "",
      "Задача:",
      formData.get("message")
    ].join("\n");

    const copied = await copyMessage(text);

    if (copied) {
      selectors.formStatus.textContent = "Описание задачи скопировано. Сейчас откроется Telegram — вставьте сообщение в чат.";
      window.open(CONTACTS.telegram, "_blank", "noopener,noreferrer");
      return;
    }

    selectors.formStatus.innerHTML = `Не удалось скопировать сообщение автоматически. Скопируйте текст вручную и отправьте его в Telegram: <br><textarea class="copy-fallback" readonly>${escapeHtml(text)}</textarea>`;
    window.open(CONTACTS.telegram, "_blank", "noopener,noreferrer");
  });
}

async function copyMessage(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  } catch (error) {
    console.info("Буфер обмена недоступен, показан резервный вариант.");
    return false;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value || "#");
}
