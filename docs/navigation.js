/* Native scrolling and anchor links are preserved. This only reports position. */
function sectionReadingState(tops, scrollY, viewportHeight, maxScroll) {
  if (!tops.length) return { index: -1, progress: 0 };
  const y = Math.max(0, Math.min(scrollY, Math.max(0, maxScroll)));
  if (maxScroll > 0 && y >= maxScroll - 2) {
    return { index: tops.length - 1, progress: 1 };
  }
  const offset = Math.min(200, Math.max(82, viewportHeight * 0.25));
  let index = 0;
  for (let i = 1; i < tops.length; i++) {
    if (tops[i] <= y + offset) index = i;
  }
  const start = Math.max(0, tops[index] - offset);
  const end = index + 1 < tops.length
    ? Math.max(start + 1, tops[index + 1] - offset)
    : Math.max(start + 1, maxScroll);
  const progress = Math.max(0, Math.min(1, (y - start) / (end - start)));
  return { index, progress };
}

(function initializeSectionNavigation() {
  if (typeof document === 'undefined') return;
  const links = Array.from(document.querySelectorAll('.rail-link[data-section-key]'));
  if (!links.length) return;
  const isHome = document.body.classList.contains('portfolio-home');
  const sections = (isHome
    ? ['overview', 'work', 'experience', 'publications', 'contact'].map(key => ({ key, element: document.getElementById(key) }))
    : [{ key: 'work', element: document.getElementById('main') }, { key: 'contact', element: document.getElementById('contact') }]
  ).filter(section => section.element);
  let framePending = false;

  function update() {
    framePending = false;
    const y = Math.max(0, window.scrollY || 0);
    const viewport = window.innerHeight;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - viewport);
    const tops = sections.map(section => section.element.getBoundingClientRect().top + y);
    const state = sectionReadingState(tops, y, viewport, maxScroll);
    const active = sections[state.index];
    if (!active) return;

    links.forEach(link => {
      const key = link.dataset.sectionKey;
      const index = sections.findIndex(section => section.key === key);
      const current = key === active.key;
      if (current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
      const complete = isHome && index >= 0 && index < state.index;
      link.classList.toggle('is-complete', complete);
      const progress = complete ? 1 : current ? state.progress : 0;
      link.style.setProperty('--read-progress', progress.toFixed(4));
    });
  }

  function scheduleUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  window.addEventListener('load', scheduleUpdate);
  window.addEventListener('pageshow', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  document.addEventListener('toggle', scheduleUpdate, true);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleUpdate);
  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(scheduleUpdate);
    const main = document.getElementById('main');
    const contact = document.getElementById('contact');
    if (main) observer.observe(main);
    if (contact) observer.observe(contact);
  }
  scheduleUpdate();
})();
