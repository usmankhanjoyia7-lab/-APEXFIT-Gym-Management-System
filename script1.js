'use strict';

/* ── WHATSAPP HELPERS ── */
const WA_NUMBER = '923703523316';

function openWhatsApp(msg) {
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
}

function sendWhatsApp() {
  const name = document.getElementById('wa-name').value.trim();
  const phone = document.getElementById('wa-phone').value.trim();
  const plan = document.getElementById('wa-plan').value;
  const msg = document.getElementById('wa-msg').value.trim();

  if (!name) { alert('Please enter your name.'); return; }
  if (!phone) { alert('Please enter your phone number.'); return; }

  const defaultMsg = plan
    ? `Hi, I am interested in the ${plan} at APEXFIT gym.`
    : 'Hi, I want information about APEXFIT gym membership.';

  const fullMsg =
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    (plan ? `Plan: ${plan}\n` : '') +
    `Message: ${msg || defaultMsg}`;

  openWhatsApp(fullMsg);
}

/* ── NAV SCROLL ── */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── HAMBURGER ── */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

/* ── FADE-UP OBSERVER ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── PARALLAX HERO ── */
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg && scroll < window.innerHeight) {
    heroBg.style.transform = `translateY(${scroll * 0.35}px)`;
  }
}, { passive: true });
