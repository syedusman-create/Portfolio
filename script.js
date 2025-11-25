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

const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    event.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth' });
    targetElement.focus?.({ preventScroll: true });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.section').forEach((section) => {
  section.classList.add('fade-in');
  observer.observe(section);
});

const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

