const films = [
  { title: 'Вам письмо' },
  { title: 'Отпуск по обмену' },
  { title: 'Пока ты спал' },
  { title: 'Замёрзшая из Майами' },
  { title: 'Четыре Рождества' },
  { title: 'Семьянин' },
  { title: 'Семья напрокат' },
  { title: 'Привет семье' },
  { title: 'Вонка', note: 'с Тимоти Шаламе' },
  { title: 'Красный', note: 'с Райаном Рейнольдсом' },
  { title: 'Рождественская история' },
  { title: 'Эбенезер Скрудж', note: '2026' },
  { title: 'Полярный экспресс' },
  { title: 'Один дома' },
  { title: 'Плохой Санта' }
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
  button.setAttribute('aria-label', `Открыть фильм: ${film.title}${film.note ? `, ${film.note}` : ''}`);
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
  const label = document.createElement('small');
  label.textContent = 'ФИЛЬМ НА ВЕЧЕР';
  const title = document.createElement('strong');
  title.textContent = film.title;
  back.append(label, title);
  if (film.note) {
    const note = document.createElement('span');
    note.textContent = film.note;
    back.append(note);
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
