document.getElementById('year')?.append(new Date().getFullYear());

// Light / dark theme control. The choice is saved for every page.
const themeButton = document.createElement('button');
themeButton.className = 'theme-toggle';
themeButton.type = 'button';
themeButton.setAttribute('aria-label', 'Switch color theme');
themeButton.innerHTML = '<span class="theme-icon" aria-hidden="true"></span><span class="theme-label"></span>';
document.body.append(themeButton);

const themeMeta = document.querySelector('meta[name="theme-color"]');
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
  const isLight = theme === 'light';
  themeButton.querySelector('.theme-icon').textContent = isLight ? '☾' : '☀';
  themeButton.querySelector('.theme-label').textContent = isLight ? 'Dark' : 'Light';
  themeButton.setAttribute('aria-pressed', String(isLight));
  themeButton.title = `Switch to ${isLight ? 'dark' : 'light'} mode`;
  themeMeta?.setAttribute('content', isLight ? '#f8fafc' : '#0a192f');
}
applyTheme(document.documentElement.dataset.theme || 'dark');
themeButton.addEventListener('click', () => {
  applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
});

const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

if(document.body.classList.contains('portfolio-home')){
  window.addEventListener('pointermove',e=>{
    document.documentElement.style.setProperty('--mouse-x',`${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y',`${e.clientY}px`);
  });
  const sections=[...document.querySelectorAll('.content-section[id]')];
  const links=[...document.querySelectorAll('.section-nav a')];
  const activeObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));
      }
    });
  },{rootMargin:'-20% 0px -65% 0px'});
  sections.forEach(section=>activeObserver.observe(section));
}
