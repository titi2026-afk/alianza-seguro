document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const menuBtn = document.getElementById('menu-btn');
  const mobMenu = document.getElementById('mob-menu');
  if (menuBtn && mobMenu) {
    menuBtn.addEventListener('click', () => mobMenu.classList.toggle('hidden'));
  }
  // Scroll-triggered reveal animations
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -100px 0px' });
    reveals.forEach((el) => io.observe(el));
  }
});
