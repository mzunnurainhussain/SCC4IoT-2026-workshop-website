const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.textContent = open ? '×' : '☰';
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
  if (navToggle) navToggle.textContent = '☰';
}));
const topButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => { topButton.style.display = window.scrollY > 700 ? 'block' : 'none'; });
topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
