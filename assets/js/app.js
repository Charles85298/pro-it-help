document.getElementById('year')?.append(new Date().getFullYear());
const menu=document.querySelector('.menu');const nav=document.querySelector('.nav-links');menu?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
