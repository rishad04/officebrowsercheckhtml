// Basic interactivity: responsive nav, smooth scroll, testimonials carousel, year injection

document.addEventListener('DOMContentLoaded', () => {
  // NAV toggle (accessible)
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');

  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close nav on link click (mobile)
  document.querySelectorAll('#site-nav a').forEach(a => {
    a.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (ev) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        ev.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Testimonials carousel (simple)
  const track = document.getElementById('testi-track');
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById('testi-prev');
  const nextBtn = document.getElementById('testi-next');
  let index = 0;
  let autoplay = true;
  let interval = null;
  const slideTo = i => {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  prevBtn.addEventListener('click', () => { slideTo(index - 1); resetAutoplay(); });
  nextBtn.addEventListener('click', () => { slideTo(index + 1); resetAutoplay(); });

  // autoplay
  const startAutoplay = () => {
    interval = setInterval(() => slideTo(index + 1), 4500);
  };
  const stopAutoplay = () => { clearInterval(interval); interval = null; };
  const resetAutoplay = () => { stopAutoplay(); startAutoplay(); };

  track.addEventListener('mouseenter', () => stopAutoplay());
  track.addEventListener('mouseleave', () => startAutoplay());

  // start if more than 1 slide
  if (slides.length > 1) startAutoplay();

  // Inject current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Accessibility: close nav with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
