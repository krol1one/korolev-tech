# Cloudflare Worker для заявок

Worker принимает заявки с сайта и отправляет их владельцу в Telegram через Telegram Bot API.

Секреты не хранятся во frontend, HTML, JavaScript сайта или Git-репозитории. Используйте только Cloudflare Worker secrets.

## Установка

```bash
npm install
```

## Локальный запуск

```bash
npx wrangler dev
```

Endpoint локально:

```text
http://localhost:8787/lead
```

## Секреты

Добавьте секреты в Cloudflare:

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_CHAT_ID
```

Не добавляйте реальные значения секретов в файлы проекта, README, `.env`, frontend-код или историю Git.

## Деплой

```bash
npx wrangler deploy
```

После деплоя Wrangler покажет URL Worker. Вставьте полный endpoint с `/lead` в `../js/app.js`:

```javascript
const API_CONFIG = {
  leadEndpoint: "https://your-worker.your-subdomain.workers.dev/lead"
};
```

## Проверка

```bash
curl -i -X POST "https://your-worker.your-subdomain.workers.dev/lead" \
  -H "Origin: https://vladislavkorolev.ru" \
  -H "Content-Type: application/json" \
  --data "{\"name\":\"Тест\",\"contact\":\"@client\",\"description\":\"Тестовая заявка для проверки отправки в Telegram.\",\"website\":\"\"}"
```

Worker принимает запросы только с:

- `https://vladislavkorolev.ru`
- `https://www.vladislavkorolev.ru`
- `http://localhost`
- `http://127.0.0.1`

Поле `website` является honeypot. Если оно заполнено, Worker вернёт успешный ответ и не отправит сообщение в Telegram.
