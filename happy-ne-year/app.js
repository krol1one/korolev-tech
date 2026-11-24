const films = [
  { title: 'Вам письмо', year: 1998, trailer: 'bjP4s7UUnK8' },
  { title: 'Отпуск по обмену', year: 2006, trailer: 'wk9caHO3pW0' },
  { title: 'Пока ты спал', year: 1995, trailer: 'rezsRA-vzPQ' },
  { title: 'Замёрзшая из Майами', year: 2009, trailer: 'XoQn5IDmSlk' },
  { title: 'Четыре Рождества', year: 2008, trailer: '6veo6Js7HUE' },
  { title: 'Семьянин', year: 2000, trailer: 'OnouJoQs52c' },
  { title: 'Семья напрокат', year: 1997, trailer: '058eb33e19171589e34d3fb5bd9dba35', provider: 'rutube' },
  { title: 'Привет семье', year: 2005, trailer: 'ps8DhuMfScQ' },
  { title: 'Вонка', year: 2023, note: 'с Тимоти Шаламе', trailer: 'otNh9bTjXWg' },
  { title: 'Красное уведомление', year: 2021, note: 'с Райаном Рейнольдсом', trailer: 'Pj0wz7zu3Ms' },
  { title: 'Рождественская история', year: 2009, trailer: '_fYOIO84eV4' },
  { title: 'Эбенезер Скрудж', year: 2026, trailer: 'A7lyvgnDuDE' },
  { title: 'Полярный экспресс', year: 2004, trailer: 'f0oyHtZiJJs' },
  { title: 'Один дома', year: 1990, trailer: 'jEDaVHmw7r4' },
  { title: 'Плохой Санта', year: 2003, trailer: 'cvXyEiIoH2c' }
];

const positions = [
  [50, 25],
  [42, 34], [58, 34],
  [34, 44], [50, 43], [66, 44],
  [29, 54], [42, 53], [57, 54], [71, 54],
  [24, 65], [37, 63], [50, 66], [63, 63], [76, 65]
];

const palettes = [
  ['#b94b51', '#721e2b', '#f3a2a2'],
  ['#dcb366', '#906032', '#f5d08f'],
  ['#a5bdd1', '#4c718b', '#a6d8f2'],
  ['#c35d51', '#833530', '#eea18d'],
  ['#b7a0c8', '#684d82', '#e2bce8']
];

const container = document.querySelector('#ornaments');
const progress = document.querySelector('#progress');
const trailerLink = document.querySelector('#trailer-link');
const stillButton = document.querySelector('#still-button');
const trailerActions = document.querySelector('.trailer-actions');
const opened = new Set();
let selected = null;

films.forEach((film, index) => {
  const [x, y] = positions[index];
  const [light, dark, glow] = palettes[index % palettes.length];
  const button = document.createElement('div');
  button.setAttribute('role', 'button');
  button.tabIndex = 0;
  button.className = 'ornament';
  button.style.setProperty('--x', `${x}%`);
  button.style.setProperty('--y', `${y}%`);
  button.style.setProperty('--ball-light', light);
  button.style.setProperty('--ball-dark', dark);
  button.style.setProperty('--ball-glow', glow);
  button.style.setProperty('--open-x-mobile', x < 40 ? '-24%' : x > 60 ? '-76%' : '-50%');
  button.style.setProperty('--open-y-mobile', y < 40 ? '-18%' : y > 60 ? '-82%' : '-50%');
  button.setAttribute('aria-label', `Открыть фильм: ${film.title}, ${film.year}${film.note ? `, ${film.note}` : ''}`);
  button.setAttribute('aria-expanded', 'false');

  const inner = document.createElement('span');
  inner.className = 'ornament-inner';
  const front = document.createElement('span');
  front.className = 'ornament-front';
  front.setAttribute('aria-hidden', 'true');
  front.textContent = '✦';
  const back = document.createElement('span');
  back.className = 'ornament-back';
  back.setAttribute('aria-hidden', 'true');
  const title = document.createElement('strong');
  title.textContent = film.title;
  const year = document.createElement('span');
  year.className = 'film-year';
  year.textContent = film.year;
  const mirror = document.createElement('span');
  mirror.className = 'film-mirror';
  const image = document.createElement('img');
  image.alt = '';
  image.decoding = 'async';
  image.dataset.src = `images/${String(index + 1).padStart(2, '0')}.jpg`;
  mirror.append(image);
  back.append(title, year, mirror);
  if (film.note) {
    const note = document.createElement('span');
    note.className = 'film-note';
    note.textContent = film.note;
    back.classList.add('has-note');
    back.insertBefore(note, mirror);
  }
  inner.append(front, back);
  button.append(inner);
  button.addEventListener('click', () => selectFilm(index));
  button.addEventListener('keydown', event => {
    if (event.target === button && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      selectFilm(index);
    }
  });
  container.append(button);
});

function selectFilm(index) {
  const buttons = [...container.children];
  if (selected === index) {
    closeFilm(index);
    selected = null;
    return;
  }
  if (selected !== null) {
    closeFilm(selected);
  }
  selected = index;
  const image = buttons[index].querySelector('.film-mirror img');
  if (!image.src) image.src = image.dataset.src;
  buttons[index].classList.add('is-open');
  buttons[index].setAttribute('aria-expanded', 'true');
  buttons[index].setAttribute('aria-label', `Закрыть фильм: ${films[index].title}, ${films[index].year}`);
  buttons[index].querySelector('.ornament-back').removeAttribute('aria-hidden');
  const film = films[index];
  const frame = document.createElement('iframe');
  frame.className = 'film-trailer';
  frame.title = `Мини-трейлер: ${film.title}`;
  frame.allow = 'autoplay; encrypted-media; picture-in-picture';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.src = film.provider === 'rutube'
    ? `https://rutube.ru/play/embed/${film.trailer}/?autostartmute=true`
    : `https://www.youtube-nocookie.com/embed/${film.trailer}?autoplay=1&mute=1&playsinline=1&rel=0&start=8`;
  buttons[index].querySelector('.film-mirror').append(frame);
  trailerLink.href = film.provider === 'rutube'
    ? `https://rutube.ru/video/${film.trailer}/`
    : `https://www.youtube.com/watch?v=${film.trailer}`;
  trailerLink.hidden = false;
  stillButton.hidden = false;
  trailerActions.hidden = false;
  opened.add(index);
  progress.textContent = `Открыто ${opened.size} из ${films.length} фильмов`;
}

function closeFilm(index) {
  const button = container.children[index];
  button.querySelector('.film-trailer')?.remove();
  button.classList.remove('is-open');
  button.setAttribute('aria-expanded', 'false');
  const film = films[index];
  button.setAttribute('aria-label', `Открыть фильм: ${film.title}, ${film.year}${film.note ? `, ${film.note}` : ''}`);
  button.querySelector('.ornament-back').setAttribute('aria-hidden', 'true');
  trailerLink.hidden = true;
  stillButton.hidden = true;
  trailerActions.hidden = true;
}

stillButton.addEventListener('click', () => {
  if (selected === null) return;
  container.children[selected].querySelector('.film-trailer')?.remove();
  stillButton.hidden = true;
});

document.querySelector('#random-film').addEventListener('click', () => {
  const unopened = films.map((_, index) => index).filter(index => !opened.has(index));
  const pool = unopened.length ? unopened : films.map((_, index) => index).filter(index => index !== selected);
  const choice = pool[Math.floor(Math.random() * pool.length)];
  selectFilm(choice);
  container.children[choice].focus({ preventScroll: true });
});

fetch('image-sources.json')
  .then(response => response.ok ? response.json() : Promise.reject())
  .then(sources => {
    const list = document.querySelector('#image-credits');
    sources.forEach(source => {
      const link = document.createElement('a');
      link.href = source.source;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = source.title;
      list.append(link);
    });
  })
  .catch(() => {});
