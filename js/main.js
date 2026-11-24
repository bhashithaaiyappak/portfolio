// Small progressive enhancements. The site works fully without this file.
(function () {
  document.documentElement.classList.add('js');

  // Current year in footer
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Nav gets a border/shadow once the page scrolls
  var nav = document.querySelector('.site-nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Highlight the nav link of the section in view
  var links = Array.prototype.slice.call(document.querySelectorAll('nav.top ul a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  // Graphs modal: lock page scroll while open, close with Escape
  var modal = document.getElementById('thesis-graphs');
  function syncModal() {
    var open = location.hash === '#thesis-graphs';
    document.body.classList.toggle('modal-open', open);
    if (open && modal) {
      var close = modal.querySelector('.close');
      if (close) close.focus({ preventScroll: true });
    }
  }
  window.addEventListener('hashchange', syncModal);
  syncModal();

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && location.hash === '#thesis-graphs') {
      location.hash = '#research';
    }
  });
})();
