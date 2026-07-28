# Korolev Tech — портфолио технического специалиста

Одностраничный статический сайт-портфолио Владислава Королева: автоматизация бизнес-процессов, GetCourse, amoCRM / Kommo, Telegram-боты, интеграции, серверы, сети и внутренние IT-системы.

Проект не использует фреймворки, сборщик, backend, базы данных и платные API. Его можно разместить на GitHub Pages или Cloudflare Pages.

## Контакты

Контактные данные находятся в начале `js/app.js`:

```javascript
const CONTACTS = {
  telegram: "https://t.me/KROL1ONE",
  email: "i@korolev-tech.ru",
  github: "https://github.com/krol1one"
};
```

Основной контакт сайта — Telegram `@KROL1ONE`. Email используется как дополнительный способ связи. GitHub оставлен только небольшой ссылкой в footer.

После публикации замените `SITE_URL` в `index.html` на реальный адрес сайта.

## Структура

```text
portfolio/
├── .gitignore
├── .nojekyll
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── data/
│   └── cases.json
├── assets/
│   ├── images/
│   ├── icons/
│   └── screenshots/
├── favicon.svg
└── README.md
```

## Как открыть локально

Из папки `portfolio` запустите:

```bash
python -m http.server 8080
```

После запуска откройте:

```text
http://localhost:8080
```

Страницу можно открыть и двойным кликом по `index.html`. В этом режиме некоторые браузеры блокируют загрузку `./data/cases.json` через `fetch`, поэтому в `js/app.js` есть резервная копия кейсов для просмотра через `file://`.

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

В текущей версии сайт не использует фотографии людей и чужие логотипы. Интерфейс держится на типографике, карточках и CSS-схеме технической системы.

## Публикация в новый GitHub-репозиторий

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

Ожидаемый временный адрес сайта:

```text
https://krol1one.github.io/korolev-tech/
```

## Cloudflare Pages

1. Создайте новый Pages-проект.
2. Подключите репозиторий `krol1one/korolev-tech`.
3. Build command оставьте пустым.
4. Build output directory укажите `/`.
5. Сохраните настройки и запустите деплой.

## Проверка перед публикацией

- В `index.html` заменён `SITE_URL` после публикации.
- В `data/cases.json` нет лишних запятых и JSON валиден.
- Все Telegram-ссылки ведут на `https://t.me/KROL1ONE`.
- Все email-ссылки используют `mailto:i@korolev-tech.ru`.
- Контактная форма копирует сообщение и открывает Telegram.
- Пути к CSS, JS, JSON и favicon относительные: `./css/style.css`, `./js/app.js`, `./data/cases.json`, `./favicon.svg`.
- Сайт проверен на ширине 320 px, планшете и десктопе.
- В консоли браузера нет ошибок.
