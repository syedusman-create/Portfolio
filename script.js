const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#primary-navigation');
const navLinks = document.querySelectorAll('#primary-navigation a');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navList?.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    navList?.classList.remove('open');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    navToggle?.setAttribute('aria-expanded', 'false');
    navList?.classList.remove('open');
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}
