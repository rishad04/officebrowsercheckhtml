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
const track = document.querySelector(".testimonial-track");
const slides = Array.from(track.children);
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dotsNav = document.querySelector(".testimonial-dots");

let currentIndex = 0;

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  if (index === 0) dot.classList.add("active");
  dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);

function updateSlider(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentIndex = index;
}

nextBtn.addEventListener("click", () => {
  let newIndex = (currentIndex + 1) % slides.length;
  updateSlider(newIndex);
});

prevBtn.addEventListener("click", () => {
  let newIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider(newIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => updateSlider(index));
});

// Auto-play
setInterval(() => {
  let newIndex = (currentIndex + 1) % slides.length;
  updateSlider(newIndex);
}, 5000);


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
