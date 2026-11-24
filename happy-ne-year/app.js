const films = [
  { title: 'Вам письмо', year: 1998 },
  { title: 'Отпуск по обмену', year: 2006 },
  { title: 'Пока ты спал', year: 1995 },
  { title: 'Замёрзшая из Майами', year: 2009 },
  { title: 'Четыре Рождества', year: 2008 },
  { title: 'Семьянин', year: 2000 },
  { title: 'Семья напрокат', year: 1997 },
  { title: 'Привет семье', year: 2005 },
  { title: 'Вонка', year: 2023, note: 'с Тимоти Шаламе' },
  { title: 'Красное уведомление', year: 2021, note: 'с Райаном Рейнольдсом' },
  { title: 'Рождественская история', year: 2009 },
  { title: 'Эбенезер Скрудж', year: 2026 },
  { title: 'Полярный экспресс', year: 2004 },
  { title: 'Один дома', year: 1990 },
  { title: 'Плохой Санта', year: 2003 }
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
const opened = new Set();
let selected = null;

films.forEach((film, index) => {
  const [x, y] = positions[index];
  const [light, dark, glow] = palettes[index % palettes.length];
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'ornament';
  button.style.setProperty('--x', `${x}%`);
  button.style.setProperty('--y', `${y}%`);
  button.style.setProperty('--ball-light', light);
  button.style.setProperty('--ball-dark', dark);
  button.style.setProperty('--ball-glow', glow);
  button.style.setProperty('--open-x-mobile', x < 40 ? '-24%' : x > 60 ? '-76%' : '-50%');
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
  container.append(button);
});

function selectFilm(index) {
  const buttons = [...container.children];
  if (selected === index) {
    buttons[index].classList.remove('is-open');
    buttons[index].setAttribute('aria-expanded', 'false');
    selected = null;
    return;
  }
  if (selected !== null) {
    buttons[selected].classList.remove('is-open');
    buttons[selected].setAttribute('aria-expanded', 'false');
  }
  selected = index;
  const image = buttons[index].querySelector('.film-mirror img');
  if (!image.src) image.src = image.dataset.src;
  buttons[index].classList.add('is-open');
  buttons[index].setAttribute('aria-expanded', 'true');
  opened.add(index);
  progress.textContent = `Открыто ${opened.size} из ${films.length} фильмов`;
}

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
