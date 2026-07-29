# Korolev Tech — портфолио технического специалиста

Одностраничный статический сайт-портфолио Владислава Королева: автоматизация бизнес-процессов, GetCourse, amoCRM / Kommo, Telegram-боты, интеграции, серверы, сети и внутренние IT-системы.

Основной домен:

```text
https://vladislavkorolev.ru
```

Проект не использует frontend-фреймворки, сборщик, backend на сервере, базы данных и платные API. Заявки отправляются через отдельный Cloudflare Worker.

## Контакты

Контактные данные находятся в начале `js/app.js`:

```javascript
const CONTACTS = {
  telegram: "https://t.me/KROL1ONE",
  email: "i@korolev-tech.ru",
  github: "https://github.com/krol1one"
};
```

Основной контакт сайта — Telegram `@KROL1ONE`. Email используется как дополнительная текстовая ссылка. GitHub оставлен только небольшой ссылкой в footer.

URL Worker находится там же:

```javascript
const API_CONFIG = {
  leadEndpoint: "CLOUDFLARE_WORKER_URL"
};
```

После деплоя Worker вставьте сюда полный endpoint вида:

```text
https://your-worker.your-subdomain.workers.dev/lead
```

## Структура

```text
portfolio/
├── .gitignore
├── .nojekyll
├── CNAME
├── README.md
├── favicon.svg
├── index.html
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── images/
│   ├── icons/
│   └── screenshots/
├── cloudflare-worker/
│   ├── package.json
│   ├── wrangler.jsonc
│   ├── README.md
│   └── src/
│       └── index.js
├── css/
│   └── style.css
├── data/
│   └── cases.json
└── js/
    └── app.js
```

## Как открыть сайт локально

Из папки `portfolio` запустите:

```bash
python -m http.server 8080
```

После запуска откройте:

```text
http://localhost:8080
```

Страницу можно открыть и двойным кликом по `index.html`. В этом режиме некоторые браузеры блокируют загрузку `./data/cases.json` через `fetch`, поэтому в `js/app.js` есть резервная копия кейсов для просмотра через `file://`.

## CNAME

Файл `CNAME` должен находиться в корне проекта и содержать строго одну строку:

```text
vladislavkorolev.ru
```

Не удаляйте этот файл при дальнейших изменениях.

## Как добавить новый кейс

Откройте `data/cases.json` и добавьте новый объект в массив:

```json
{
  "id": "unique-case-id",
  "title": "Название кейса",
  "category": "CRM",
  "summary": "Краткое описание для карточки.",
  "task": "Какая задача стояла.",
  "done": ["Что было сделано"],
  "solution": "Как было устроено техническое решение.",
  "result": "Что получилось в результате.",
  "stack": ["Python", "API", "Docker"]
}
```

Поддерживаемые фильтры: `GetCourse`, `CRM`, `Telegram`, `Автоматизация`, `Инфраструктура`, `Разработка`. Фильтр `Инфраструктура` также показывает кейсы, где в стеке есть Linux, Docker, SNMP, MikroTik, Proxmox или Nginx.

## Как добавить изображения

Положите изображения в `assets/screenshots/` или `assets/images/`.

Рекомендации:

- Скриншоты интерфейсов: 1440×900 px или 1280×800 px.
- Превью кейсов: 1200×800 px.
- Формат: WebP для публикации, PNG для скриншотов с текстом.
- Вес одного изображения: желательно до 300–500 KB.

## Публикация сайта в GitHub Pages

Терминал должен быть открыт внутри папки `portfolio`.

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/krol1one/korolev-tech.git
git push -u origin main
```

После push:

1. Откройте репозиторий на GitHub.
2. Перейдите в `Settings`.
3. Откройте `Pages`.
4. В разделе источника публикации выберите `Deploy from a branch`.
5. Выберите ветку `main`.
6. Выберите папку `/(root)`.
7. Сохраните настройки.
8. В разделе custom domain укажите `vladislavkorolev.ru`.

## Cloudflare Worker для заявок

Worker находится в папке `cloudflare-worker/`. Он принимает `POST /lead`, валидирует данные, проверяет honeypot и отправляет заявку в Telegram через секреты окружения.

Frontend никогда не должен содержать:

- Telegram bot token;
- Telegram chat id;
- значения секретов Worker.

## Как установить Wrangler

Перейдите в папку Worker:

```bash
cd cloudflare-worker
npm install
```

Wrangler уже указан в `devDependencies`, поэтому его можно запускать через `npx`.

## Как авторизоваться в Cloudflare

```bash
npx wrangler login
```

## Как создать и настроить Worker

Конфигурация Worker уже находится в `cloudflare-worker/wrangler.jsonc`.

Добавьте секреты:

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_CHAT_ID
```

Команды запросят значения в терминале. Не вставляйте реальные секреты в файлы проекта.

## Как задеплоить Worker

```bash
npx wrangler deploy
```

После деплоя Wrangler покажет URL Worker. В `js/app.js` замените:

```javascript
const API_CONFIG = {
  leadEndpoint: "CLOUDFLARE_WORKER_URL"
};
```

на полный endpoint с `/lead`, например:

```javascript
const API_CONFIG = {
  leadEndpoint: "https://korolev-tech-leads.example.workers.dev/lead"
};
```

## Как проверить отправку заявки

После деплоя Worker и добавления секретов:

1. Вставьте Worker endpoint в `js/app.js`.
2. Откройте сайт через локальный сервер или опубликованный домен.
3. Заполните форму.
4. Нажмите `Отправить заявку`.
5. При успехе появится сообщение: `Заявка отправлена. Я свяжусь с вами в ближайшее время.`
6. Проверьте, что заявка пришла в Telegram.

Проверка через curl:

```bash
curl -i -X POST "https://your-worker.your-subdomain.workers.dev/lead" \
  -H "Origin: https://vladislavkorolev.ru" \
  -H "Content-Type: application/json" \
  --data "{\"name\":\"Тест\",\"contact\":\"@client\",\"description\":\"Тестовая заявка для проверки отправки в Telegram.\",\"website\":\"\"}"
```

## Как протестировать локально

В одном терминале запустите Worker:

```bash
cd cloudflare-worker
npx wrangler dev
```

Во втором терминале из папки `portfolio` запустите сайт:

```bash
python -m http.server 8080
```

В `js/app.js` временно укажите:

```javascript
const API_CONFIG = {
  leadEndpoint: "http://localhost:8787/lead"
};
```

Перед коммитом верните production endpoint или placeholder, если Worker ещё не опубликован.

## Как не допустить попадания токена в Git

- Не добавляйте токен и chat id в `js/app.js`, `index.html`, README или `.env`.
- Используйте только `npx wrangler secret put`.
- Перед коммитом проверяйте поиск по проекту.
- Не коммитьте вывод терминала с секретами.

## Проверка перед публикацией

- `CNAME` содержит `vladislavkorolev.ru`.
- Canonical и Open Graph указывают на `https://vladislavkorolev.ru/`.
- JSON-LD содержит `https://vladislavkorolev.ru`.
- Временный placeholder адреса сайта отсутствует.
- Старый GitHub Pages URL отсутствует в SEO
- Telegram token и chat id отсутствуют в репозитории
- Форма использует Worker endpoint из `API_CONFIG.leadEndpoint`.
- Honeypot-поле скрыто.
- Валидация работает на frontend и Worker.
- Worker обрабатывает CORS, OPTIONS и ошибки Telegram API.
