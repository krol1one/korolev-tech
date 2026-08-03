const CONTACTS = {
  telegram: "https://t.me/KROL1ONE",
  email: "i@korolev-tech.ru",
  github: "https://github.com/krol1one"
};

const API_CONFIG = {
  leadEndpoint: "https://subsection-aud-firewall-bedford.trycloudflare.com/lead"
};

const FORM_LIMITS = {
  name: 100,
  contact: 200,
  description: 3000,
  minDescription: 20,
  minFillTimeMs: 3000,
  successCooldownMs: 10000
};

const CASES_FALLBACK = [
  {
    "id": "getcourse-access-questionnaires",
    "title": "Обязательные анкеты и управление доступом в GetCourse",
    "category": "GetCourse",
    "summary": "Настроена последовательная логика прохождения модулей через обязательные анкеты и автоматическое добавление пользователей в группы.",
    "task": "Сделать так, чтобы ученики не могли перейти к следующему модулю, пока не заполнят обязательную анкету.",
    "done": [
      "Создана система групп для каждого пройденного модуля.",
      "Настроены ограничения доступа.",
      "Проверена логика под тестовым учеником.",
      "Найдена и исправлена ошибка с неверно назначенной группой.",
      "Восстановлена корректная последовательность открытия модулей."
    ],
    "solution": "Логика доступа построена на группах GetCourse: после выполнения обязательного действия пользователь автоматически переводится в следующую группу, а материалы следующего модуля открываются только при наличии нужного условия.",
    "result": "Ученики проходят курс строго по заданной логике, а доступ к следующему модулю открывается автоматически после выполнения обязательного действия.",
    "stack": [
      "GetCourse",
      "Группы",
      "Процессы",
      "Анкеты",
      "Тестирование доступа"
    ]
  },
  {
    "id": "getcourse-sheets-export",
    "title": "Автоматический экспорт анкет GetCourse в Google Sheets",
    "category": "Автоматизация",
    "summary": "Разработан серверный сервис для автоматической выгрузки ответов из GetCourse в Google Sheets.",
    "task": "Убрать ручное скачивание анкет из GetCourse и перенос ответов в рабочую таблицу.",
    "done": [
      "Настроено получение выгрузок из GetCourse.",
      "Данные сохраняются в SQLite.",
      "Реализована передача данных в Google Sheets.",
      "Добавлен автоматический запуск каждые 15 минут.",
      "Сервис размещён на Linux-сервере.",
      "Настроен systemd.",
      "Создан Git-репозиторий проекта."
    ],
    "solution": "Сервис регулярно получает новые данные, нормализует их в локальном хранилище и отправляет в нужную таблицу Google Sheets. Запуск контролируется системным сервисом, чтобы процесс не зависел от ручных действий.",
    "result": "Ответы учеников автоматически попадают в рабочую таблицу без ручного скачивания и переноса файлов.",
    "stack": [
      "Python",
      "SQLite",
      "Google Sheets API",
      "Linux",
      "systemd",
      "cron",
      "GetCourse"
    ]
  },
  {
    "id": "telegram-html-salebot",
    "title": "Telegram-бот для подготовки HTML под SaleBot",
    "category": "Telegram",
    "summary": "Разработан и развернут Telegram-бот, который преобразует обычные и Rich Message сообщения из Telegram в готовую HTML-разметку для SaleBot.",
    "task": "Сократить ручную работу при переносе сложных Telegram-постов в SaleBot, сохранить структуру текста, медиа и расширенную разметку.",
    "done": [
      "Обработка обычных Telegram-сообщений и пересланных постов.",
      "Сохранение форматирования: жирный, курсив, подчёркивание, зачёркивание, скрытый текст, код, ссылки и цитаты.",
      "Поддерживает premium emoji.",
      "Поддержка Rich Message.",
      "Подготовка HTML-разметки для SaleBot.",
      "Генерация готового кода для поля «Калькулятор».",
      "Обработка медиа и подготовка file_id для фото и видео.",
      "Inline-кнопки «Сообщение» и «Калькулятор».",
      "Команды /start, /rich_message, /functions, /edit_functions.",
      "Хранение пользовательских данных и последних сообщений.",
      "Запуск в Docker-контейнере.",
      "Развёртывание на сервере в production-среде."
    ],
    "solution": "Бот анализирует входящие Telegram-сообщения и Rich Message-структуры, сохраняет форматирование, готовит HTML для поля «Сообщение» и отдельный код для поля «Калькулятор» SaleBot.",
    "result": "Бот работает в production и помогает быстро готовить сложные Telegram-посты для отправки через SaleBot, включая расширенную разметку, медиа и Rich Message-структуру.",
    "stack": [
      "Telegram Bot API",
      "Node.js",
      "Docker",
      "Docker Compose",
      "SQLite",
      "SaleBot Rich Message API",
      "Linux server",
      "polling"
    ],
    "projectUrl": "https://t.me/html_to_salebot",
    "projectLabel": "Открыть бота"
  },
  {
    "id": "crm-investment-project",
    "title": "CRM для инвестиционного проекта",
    "category": "CRM",
    "summary": "Настроена CRM-логика для работы с базой инвесторов и повторными касаниями.",
    "task": "Организовать обработку базы инвесторов, этапы коммуникации и повторные касания в CRM.",
    "done": [
      "Импортирована база из 324 контактов.",
      "Добавлено 11 пользовательских полей.",
      "Настроены теги.",
      "Создана воронка.",
      "Организована сегментация базы.",
      "Настроены этапы обработки.",
      "Выделены повторные касания.",
      "Создана логика работы с ответами и переводами между этапами."
    ],
    "solution": "CRM-структура разделяет контакты по статусам и реакции на коммуникацию. Поля, теги и этапы воронки помогают быстро видеть контекст контакта и планировать следующий шаг.",
    "result": "Отправлено 111 сообщений, получено 47 ответов, 36 контактов переведены на следующие этапы, сформирован отдельный сегмент повторных касаний.",
    "stack": [
      "amoCRM",
      "Kommo",
      "Воронки",
      "Пользовательские поля",
      "Сегментация"
    ]
  },
  {
    "id": "kommo-bitrix24-migration",
    "title": "Миграция Kommo в Bitrix24",
    "category": "CRM",
    "summary": "Проведён анализ структуры Kommo перед переносом CRM-процессов в Bitrix24 для компании в сфере недвижимости.",
    "task": "Подготовить безопасный перенос CRM-структуры, данных и процессов из Kommo в Bitrix24.",
    "done": [
      "Проанализированы воронки.",
      "Изучены карточки и пользовательские поля.",
      "Проверены активные и нереализованные сделки.",
      "Проанализированы задачи и переписки.",
      "Изучены источники лидов.",
      "Подготовлена структура переноса.",
      "Сформирована предварительная оценка проекта."
    ],
    "solution": "Перед миграцией описана текущая логика Kommo, выделены сущности для переноса и риски потери контекста. Это позволило строить миграцию не как простой экспорт, а как перенос бизнес-процесса.",
    "result": "Подготовлен план безопасной миграции данных и бизнес-процессов из Kommo в Bitrix24.",
    "stack": [
      "Kommo",
      "Bitrix24",
      "CRM-аудит",
      "Миграция данных",
      "Бизнес-процессы"
    ]
  },
  {
    "id": "specnms-monitoring",
    "title": "Система мониторинга SpecNMS",
    "category": "Разработка",
    "summary": "Разработана внутренняя система мониторинга сетевой инфраструктуры, устройств, ИБП, резервных копий и инцидентов.",
    "task": "Собрать контроль сетевой инфраструктуры, аварий, резервных копий и технических задач в одной внутренней системе.",
    "done": [
      "Мониторинг устройств через SNMP.",
      "Контроль доступности.",
      "Сбор метрик.",
      "Мониторинг трафика.",
      "Интерактивная карта сети.",
      "Хранение резервных копий конфигураций.",
      "Сравнение версий конфигураций.",
      "Мониторинг ИБП.",
      "Центр событий.",
      "Система проблем и аварий.",
      "Service Desk.",
      "Контроль состояния самой системы.",
      "Уведомления в Telegram.",
      "Документация.",
      "Управление стойками и физическими подключениями."
    ],
    "solution": "Внутренний сервис объединяет SNMP-мониторинг, события, резервные копии конфигураций, карту сети и рабочие задачи. Уведомления отправляются в Telegram, а состояние инфраструктуры доступно из единой панели.",
    "result": "Сетевые устройства, аварии, изменения конфигураций, ИБП и технические задачи контролируются из одной внутренней системы.",
    "stack": [
      "Python",
      "FastAPI",
      "SQLite",
      "SQLAlchemy",
      "Jinja2",
      "Bootstrap",
      "SNMP",
      "Linux",
      "systemd",
      "Docker"
    ]
  },
  {
    "id": "instagram-ai-agent",
    "title": "AI-агент для Instagram",
    "category": "Автоматизация",
    "summary": "Разработан AI-агент для обработки входящих сообщений Instagram и автоматизации первичного общения с клиентами.",
    "task": "Автоматизировать первичную обработку входящих сообщений Instagram и сохранить историю диалогов для дальнейшей работы.",
    "done": [
      "Подключена обработка Instagram Direct.",
      "Настроен backend на FastAPI.",
      "Подключены PostgreSQL и Redis.",
      "Система развёрнута в Docker.",
      "Подключена локальная языковая модель через Ollama.",
      "Создана административная панель.",
      "Реализовано сохранение диалогов.",
      "Подготовлена логика квалификации заявок."
    ],
    "solution": "Сообщения проходят через backend, сохраняются в базе и обрабатываются локальной моделью. Административная панель позволяет отслеживать диалоги и работу квалификации.",
    "result": "Первичная коммуникация с клиентами стала управляемой: сообщения сохраняются, обрабатываются и могут передаваться дальше по сценарию.",
    "stack": [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Ollama",
      "Meta API",
      "Python"
    ]
  },
  {
    "id": "job-search-automation-bot",
    "title": "Бот для автоматизации поиска работы",
    "category": "Telegram",
    "summary": "Разработана система для сбора вакансий, фильтрации подходящих предложений и автоматизации работы с откликами.",
    "task": "Сократить ручной просмотр вакансий и быстрее находить релевантные предложения.",
    "done": [
      "Telegram-бот.",
      "Backend.",
      "Frontend.",
      "Scheduler.",
      "Worker.",
      "Redis.",
      "PostgreSQL.",
      "Docker.",
      "Nginx.",
      "Система фильтрации вакансий.",
      "Уведомления о подходящих заказах."
    ],
    "solution": "Система разделена на сбор данных, фоновую обработку, фильтрацию и уведомления. Telegram-бот используется как быстрый интерфейс получения подходящих предложений.",
    "result": "Подходящие вакансии и заказы собираются и фильтруются автоматически, а уведомления приходят в Telegram.",
    "stack": [
      "Telegram Bot API",
      "Python",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Nginx",
      "Frontend"
    ]
  },
  {
    "id": "two-tuna-tea-bot",
    "title": "Telegram-бот для проекта «2 Туна»",
    "category": "Telegram",
    "summary": "Разработан Telegram-бот-помощник для чайного проекта: подбор чая, гайды по завариванию, выбор посуды, таймер и стикеры-маскоты.",
    "task": "Сделать удобного Telegram-помощника для информационного чайного проекта «2 Туна», чтобы пользователь мог быстро выбрать чай, получить рекомендации и запустить таймер заваривания.",
    "done": [
      "Главное меню с быстрым доступом к чаям, гайдам, поиску, каталогу и таймеру.",
      "Выбор категории чая.",
      "Карточки чаёв с описанием вкуса, аромата, крепости и назначения.",
      "Гайды по завариванию.",
      "Выбор способа заваривания: гайвань, типот, чайник, френч-пресс, колба, термос.",
      "Подсказки по граммовке и воде.",
      "Ориентиры без весов: ложка, ладонь, кусочек прессованного чая.",
      "Настраиваемый таймер с ручным вводом времени.",
      "Визуальный прогресс таймера.",
      "Финальное сообщение после завершения заваривания.",
      "Интеграция с набором стикеров Iroh.",
      "Защита управления стикерами по Telegram ID владельца.",
      "Хранение пользовательских состояний и таймеров в SQLite.",
      "Запуск бота через отдельный systemd-сервис."
    ],
    "solution": "Бот построен как сценарный Telegram-интерфейс с состояниями пользователя, чайным каталогом, гайдами, таймерами и отдельными owner-only командами для управления стикерами.",
    "result": "Пользователь получает быстрый путь от выбора чая до заваривания: категория, карточка, рекомендации по посуде и воде, запуск таймера и финальное сообщение.",
    "stack": [
      "Node.js",
      "Telegram Bot API",
      "SQLite",
      "systemd",
      "Next.js",
      "TypeScript"
    ],
    "projectUrl": "https://t.me/proliv_tea_bot",
    "projectLabel": "Открыть бота"
  },
  {
    "id": "telegram-video-circle-bot",
    "title": "Telegram Video Circle Bot",
    "category": "Telegram",
    "summary": "Production-ready Telegram-бот для конвертации обычных видео в Telegram video notes — «кружочки».",
    "task": "Сделать стабильный бот, который принимает пользовательские видео разных форматов, обрабатывает их через FFmpeg и возвращает готовый Telegram video note.",
    "done": [
      "Приём видео как обычного Telegram video и как document.",
      "Проверка MIME type, расширения, размера файла и наличия видеопотока.",
      "Конвертация видео в квадратный MP4 640x640.",
      "Поддержка H.264, AAC, yuv420p, faststart, FPS до 30.",
      "Корректная обработка видео без аудио.",
      "Ограничение длительности кружочка до 60 секунд.",
      "Режимы кадрирования: center crop, fit с размытым фоном, top crop, bottom crop.",
      "Обработка длинных видео: первые 60 секунд, выбор старта, разделение на части.",
      "Асинхронная очередь обработки с лимитом одновременных FFmpeg-задач.",
      "Ограничение одной активной задачи на пользователя.",
      "SQLite-хранилище пользователей и истории конвертаций.",
      "Админ-команды /stats, /health, /broadcast.",
      "Docker/Docker Compose деплой на VPS.",
      "Healthcheck, cleanup временных файлов, graceful shutdown.",
      "Тесты, линтинг и type checking."
    ],
    "solution": "Проект разделён на Telegram handlers, сервис обработки видео, сервис загрузки файлов, очередь задач, слой базы данных и репозитории. FFmpeg запускается через безопасный asyncio.create_subprocess_exec без shell=True, с timeout, захватом stderr и отдельной обработкой ошибок.",
    "result": "Бот развёрнут на VPS в Docker-контейнере и работает через long polling. Пользовательский сценарий сводится к минимуму: /start → отправить видео → получить готовый кружочек.",
    "stack": [
      "Python 3.12",
      "aiogram 3",
      "asyncio",
      "FFmpeg",
      "ffprobe",
      "SQLAlchemy 2 async",
      "SQLite",
      "Alembic",
      "pydantic-settings",
      "Docker",
      "Docker Compose",
      "pytest",
      "ruff",
      "mypy",
      "structlog"
    ],
    "projectUrl": "https://t.me/krug_in_bot",
    "projectLabel": "Открыть бота"
  },
  {
    "id": "two-tuna-telegram-mini-app",
    "title": "2 Туна: Telegram Mini App для чайных рекомендаций",
    "category": "Telegram",
    "summary": "Разработан MVP информационного чайного сервиса в формате Telegram Mini App и веб-сайта для подбора чая, рекомендаций и консультаций.",
    "task": "Сделать не интернет-магазин, а информационный сервис, который помогает пользователю подобрать чай по категории, вкусу, крепости и настроению, получить рекомендации по завариванию и быстро задать вопрос команде.",
    "done": [
      "Адаптивный каталог чая внутри Telegram Mini App.",
      "Фильтрация по категории и крепости.",
      "Карточки чая с описанием, вкусом, ароматом и рекомендациями.",
      "Подробная страница позиции.",
      "Чайный таймер в Telegram-боте.",
      "Выбор способа заваривания: гайвань, чайник, типот, френч-пресс, колба, термос.",
      "Подсказки по граммовке, температуре воды и времени настоя.",
      "Консультации через Telegram-бота и Mini App.",
      "Передача обращений в закрытую Telegram-группу команды.",
      "Возможность отвечать пользователю из группы обычным reply.",
      "Закрытая админка для управления чаем, остатками, лидами и контентом.",
      "Локальное хранение данных в SQLite с архитектурой под дальнейший переход на PostgreSQL."
    ],
    "solution": "Публичная часть сделана как Telegram Mini App и веб-интерфейс на Next.js: пользователь подбирает чай и изучает рекомендации, а обращения уходят в закрытую Telegram-группу команды. Админская часть отделена от публичного каталога и позволяет управлять чаем, остатками, лидами и контентом.",
    "result": "Получился MVP чайного информационного сервиса без цен, корзины, оплаты и оформления заказа. Фокус сделан на рекомендациях, контенте, подборе чая и живой консультации.",
    "stack": [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "App Router",
      "Telegram Bot API",
      "Telegram Mini Apps",
      "SQLite",
      "Node.js",
      "systemd",
      "Cloudflare Tunnel"
    ],
    "projectUrl": "https://t.me/proliv_tea_bot",
    "projectLabel": "Открыть Mini App"
  },
  {
    "id": "max-messenger-monitoring-bot",
    "title": "Бот для мессенджера MAX: система мониторинга и уведомлений",
    "category": "Инфраструктура",
    "summary": "Разработан бот для мессенджера MAX, который отправляет уведомления о состоянии узлов мониторинга: host, IP, время проверки и статус up/down.",
    "task": "Сделать простой канал оперативных уведомлений для мониторинга инфраструктуры, чтобы ответственные быстро видели падения и восстановления узлов прямо в мессенджере MAX.",
    "done": [
      "Настроена отправка уведомлений в чат мессенджера MAX.",
      "Сформирован компактный формат сообщения: время, host, IP и статус.",
      "Добавлены события status down и status up для отслеживания падений и восстановления.",
      "Поддержана отправка повторных уведомлений по нескольким объектам мониторинга.",
      "Сообщения сгруппированы так, чтобы их было удобно читать с телефона.",
      "Подготовлена логика для дальнейшего расширения под новые хосты и типы проверок."
    ],
    "solution": "Бот получает события мониторинга и отправляет в MAX короткие технические уведомления по каждому изменению состояния. В сообщении фиксируются время проверки, имя узла, IP-адрес и итоговый статус, чтобы проблему можно было быстро локализовать без входа в отдельную панель.",
    "result": "Команда видит падения и восстановления инфраструктуры в привычном мессенджере. Это ускоряет реакцию на инциденты и помогает контролировать состояние узлов без постоянной ручной проверки.",
    "stack": [
      "MAX Messenger",
      "Monitoring",
      "Notifications",
      "Python",
      "Webhooks",
      "Linux",
      "systemd"
    ]
  },
  {
    "id": "portfolio-minisite-github-domain",
    "title": "Минисайт портфолио с доменом на GitHub Pages",
    "category": "Разработка",
    "summary": "Разработан статический минисайт-портфолио с кейсами, адаптивным интерфейсом, SEO, собственным доменом и отправкой заявок в Telegram.",
    "task": "Собрать готовое портфолио технического специалиста, которое можно разместить на GitHub Pages, подключить к домену и использовать для получения заявок.",
    "done": [
      "Одностраничный сайт на HTML, CSS и JavaScript без фреймворков и сборщика.",
      "Тёмный адаптивный интерфейс с карточками направлений и кейсов.",
      "Загрузка кейсов из отдельного JSON-файла.",
      "Фильтрация кейсов и модальные окна с подробным описанием.",
      "Контактная форма с frontend-валидацией, honeypot и состояниями отправки.",
      "Отдельная серверная часть для доставки заявок в Telegram без хранения секретов во frontend.",
      "SEO-разметка: canonical, Open Graph, JSON-LD, sitemap.xml и robots.txt.",
      "Подключение домена через CNAME для GitHub Pages.",
      "README с инструкциями по публикации и настройке."
    ],
    "solution": "Сайт остаётся полностью статическим и размещается на GitHub Pages, а отправка заявок вынесена в отдельный API-слой. Пути к ресурсам сделаны относительными, чтобы проект корректно работал как в корне домена, так и при локальной проверке.",
    "result": "Портфолио опубликовано как самостоятельный сайт с собственным доменом, готовой структурой кейсов, контактным блоком и архитектурой для безопасной отправки заявок.",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "JSON",
      "GitHub Pages",
      "CNAME",
      "SEO",
      "Telegram Bot API",
      "Python",
      "systemd"
    ],
    "projectUrl": "https://vladislavkorolev.ru",
    "projectLabel": "Открыть сайт"
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
  submitButton: document.querySelector("[data-submit-button]"),
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
  if (window.location.protocol === "file:") {
    state.cases = CASES_FALLBACK;
    renderCases();
    return;
  }

  try {
    const response = await fetch("./data/cases.json?v=20260803-max-monitoring", { cache: "no-store" });
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
      <div class="case-actions">
        <button class="button secondary" type="button" data-case-id="${escapeHtml(item.id)}">Подробнее</button>
        ${item.projectUrl ? `<a class="button primary" href="${escapeAttribute(item.projectUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.projectLabel || "Открыть проект")}</a>` : ""}
      </div>
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
    <div class="case-actions modal-actions">
      ${item.projectUrl ? `<a class="button primary" href="${escapeAttribute(item.projectUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.projectLabel || "Открыть проект")}</a>` : ""}
      <a class="button secondary" href="${escapeAttribute(CONTACTS.telegram)}" target="_blank" rel="noopener noreferrer" data-contact-link="telegram">Связаться</a>
    </div>
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
  const formStartedAt = Date.now();
  let isSubmitting = false;
  let cooldownUntil = 0;
  const defaultButtonText = selectors.submitButton.textContent;

  selectors.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const now = Date.now();
    if (now < cooldownUntil) {
      setFormStatus("Заявка уже отправлена. Если нужно добавить детали, напишите мне напрямую в Telegram: @KROL1ONE", "success");
      return;
    }

    const formData = new FormData(selectors.form);
    const payload = {
      name: normalizeField(formData.get("name")),
      contact: normalizeField(formData.get("contact")),
      description: normalizeField(formData.get("description")),
      website: normalizeField(formData.get("website"))
    };

    const validationError = validateLead(payload, Date.now() - formStartedAt);
    if (validationError) {
      setFormStatus(validationError, "error");
      return;
    }

    if (isPlaceholder(API_CONFIG.leadEndpoint)) {
      setFormStatus("Форма почти готова: добавьте URL Cloudflare Worker в js/app.js. Пока можно написать напрямую в Telegram: @KROL1ONE", "error");
      return;
    }

    isSubmitting = true;
    setFormBusy(true, "Отправляем…");
    setFormStatus("", "");

    try {
      const response = await fetch(API_CONFIG.leadEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Lead endpoint returned an error");
      }

      selectors.form.reset();
      cooldownUntil = Date.now() + FORM_LIMITS.successCooldownMs;
      setFormStatus("Заявка отправлена. Я свяжусь с вами в ближайшее время.", "success");
    } catch (error) {
      setFormStatus("Не удалось отправить заявку. Напишите мне напрямую в Telegram: @KROL1ONE", "error");
    } finally {
      isSubmitting = false;
      setFormBusy(false, defaultButtonText);
    }
  });
}

function normalizeField(value) {
  return String(value || "").trim();
}

function validateLead(payload, fillTimeMs) {
  if (payload.website) return null;
  if (!payload.name || !payload.contact || !payload.description) {
    return "Заполните имя, способ связи и описание задачи.";
  }
  if (payload.name.length > FORM_LIMITS.name) {
    return "Имя слишком длинное. Укажите до 100 символов.";
  }
  if (payload.contact.length > FORM_LIMITS.contact) {
    return "Способ связи слишком длинный. Укажите до 200 символов.";
  }
  if (payload.description.length < FORM_LIMITS.minDescription) {
    return "Опишите задачу чуть подробнее: минимум 20 символов.";
  }
  if (payload.description.length > FORM_LIMITS.description) {
    return "Описание слишком длинное. Укажите до 3000 символов.";
  }
  if (fillTimeMs < FORM_LIMITS.minFillTimeMs) {
    return "Проверьте данные и отправьте форму ещё раз через несколько секунд.";
  }
  return null;
}

function setFormBusy(isBusy, buttonText) {
  selectors.submitButton.disabled = isBusy;
  selectors.submitButton.textContent = buttonText;
  selectors.form.classList.toggle("is-sending", isBusy);
}

function setFormStatus(message, type) {
  selectors.formStatus.textContent = message;
  selectors.formStatus.dataset.status = type;
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
