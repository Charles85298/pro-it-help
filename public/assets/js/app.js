document.getElementById('year')?.append(new Date().getFullYear());

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  nav?.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));

const themeButton = document.querySelector('[data-theme-toggle]');
const updateThemeButton = () => {
  if (!themeButton) return;
  const light = document.documentElement.dataset.theme === 'light';
  themeButton.querySelector('span').textContent = light ? '☾' : '☀';
  themeButton.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
};
updateThemeButton();
themeButton?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('cf-theme', next);
  updateThemeButton();
});

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  }
}), { threshold: 0.1, rootMargin: '0px 0px -40px' });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const hashLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sections = hashLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if (sections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    hashLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
  }, { rootMargin: '-28% 0px -58% 0px', threshold: [0.05, 0.25, 0.5] });
  sections.forEach((section) => sectionObserver.observe(section));
}

window.addEventListener('pointermove', (event) => {
  document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
  document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
}, { passive: true });
