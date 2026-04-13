// ===========================
// CUSTOM CURSOR
// ===========================
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = curX + 'px';
  cursor.style.top = curY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Scale cursor on hover
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%, -50%) scale(1.8)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');
});

// ===========================
// SCROLL REVEAL
// ===========================
const revealEls = document.querySelectorAll(
  '.skill-card, .project-card, .timeline-item, .about-grid, .section-title, .section-label'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// Stagger skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});

// ===========================
// ACTIVE NAV LINK
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});

// ===========================
// SMOOTH SCROLL FOR ANCHORS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===========================
// HERO TEXT TYPING EFFECT (optional)
// ===========================
// Uncomment to add a typed subtitle effect
/*
const phrases = ["Full Stack Developer", "UI/UX Enthusiast", "Open Source Contributor"];
let phraseIdx = 0, charIdx = 0, deleting = false;
const tag = document.querySelector('.hero-tag');
if (tag) {
  function typeEffect() {
    const current = "✦ " + phrases[phraseIdx];
    tag.textContent = deleting ? current.substring(0, charIdx--) : current.substring(0, charIdx++);
    if (!deleting && charIdx === current.length + 1) { deleting = true; setTimeout(typeEffect, 1500); return; }
    if (deleting && charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
    setTimeout(typeEffect, deleting ? 40 : 80);
  }
  typeEffect();
}
*/
