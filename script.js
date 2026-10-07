document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');

  const setHeader = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  };
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  const closeMenu = () => {
    if (!nav || !menuButton) return;
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
  };

  const openMenu = () => {
    if (!nav || !menuButton) return;
    nav.classList.add('open');
    document.body.classList.add('menu-open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close navigation menu');
  };

  menuButton?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    nav?.classList.contains('open') ? closeMenu() : openMenu();
  });

  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  const demoInquiry = document.querySelector('[data-demo-inquiry]');
  demoInquiry?.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = demoInquiry.querySelector('[data-form-status]');
    if (!demoInquiry.checkValidity()) {
      demoInquiry.reportValidity();
      if (status) status.textContent = 'Please complete the required fields.';
      return;
    }
    if (status) status.textContent = 'Thanks — this is the demo form. Final submission to Aisle Planner will be connected after approval.';
  });
});
