(() => {
  'use strict';

  // ── Floating sticky bar: appear after the hero scrolls past ──
  const stickyBar = document.querySelector('[data-sticky-bar]');
  const hero = document.querySelector('.tile--hero');

  if (stickyBar && hero && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      ([entry]) => stickyBar.classList.toggle('is-visible', !entry.isIntersecting),
      { rootMargin: '-44px 0px 0px 0px', threshold: 0 }
    );
    observer.observe(hero);
  }

  // ── Smooth scroll offset (compensate for the two sticky nav rows) ──
  const NAV_OFFSET = 96; // 44 + 52
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (id.length <= 1) return;
    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
})();
