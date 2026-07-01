/**
 * chakridev.dev — Portfolio JavaScript
 * Chakravarthy Amajala | AWS Cloud DevOps Engineer
 *
 * All logic is also embedded inline in index.html for zero-dependency loading.
 * This file is the extracted standalone companion for reference and tooling.
 */

// ─── Loader ───
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 1900);
});

// ─── Particles Canvas ───
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0;
  const particles = [];
  const PARTICLE_COUNT = 80;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 1.5 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.5 + 0.1;
      const hues = ['99,102,241', '139,92,246', '59,130,246', '6,182,212'];
      this.color = hues[Math.floor(Math.random() * hues.length)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
  }

  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99,102,241,${0.05 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    connect();
    requestAnimationFrame(animate);
  }

  init();
  animate();
  window.addEventListener('resize', resize);
})();

// ─── Typewriter Effect ───
(function initTypewriter() {
  const phrases = [
    'AWS Cloud DevOps Engineer',
    'CI/CD Pipeline Architect',
    'Kubernetes Platform Engineer',
    'Infrastructure as Code Specialist',
    'Production Systems Engineer',
    'Immediate Joiner · Open to Opportunities'
  ];
  let pi = 0, ci = 0, deleting = false;
  const el = document.getElementById('typewriter');
  if (!el) return;

  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      ci++;
      el.innerHTML = phrase.slice(0, ci) + '<span class="cursor"></span>';
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
    } else {
      ci--;
      el.innerHTML = phrase.slice(0, ci) + '<span class="cursor"></span>';
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
      }
    }
    setTimeout(type, deleting ? 40 : 70);
  }
  setTimeout(type, 1000);
})();

// ─── Navbar Scroll Behavior ───
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  const btn = document.getElementById('back-to-top');
  if (window.scrollY > 80) {
    if (nav) nav.classList.add('scrolled');
    if (btn) btn.classList.add('visible');
  } else {
    if (nav) nav.classList.remove('scrolled');
    if (btn) btn.classList.remove('visible');
  }
});

// ─── Mobile Menu ───
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('open');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.remove('open');
}

// ─── Scroll Reveal ───
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── Counter Animation ───
function animateCounter(el, target, decimals) {
  const duration = 2000;
  const start = performance.now();
  const isDecimal = decimals > 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = eased * target;
    el.textContent = isDecimal ? val.toFixed(1) : Math.round(val);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const target = parseFloat(e.target.dataset.target);
      const decimals = String(target).includes('.') ? 1 : 0;
      animateCounter(e.target, target, decimals);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// ─── Resume Download ───
function downloadResume() {
  const a = document.createElement('a');
  a.href = 'Chakravarthy-Resume.pdf';
  a.download = 'Chakravarthy_Amajala_DevOps_Resume.pdf';
  a.click();
}

// ─── Contact Form → Mailto ───
function sendEmail() {
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const subject = document.getElementById('contact-subject').value;
  const message = document.getElementById('contact-message').value;

  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
  const subj = encodeURIComponent(subject || 'Portfolio Inquiry');
  window.open(`mailto:chakridevops16@gmail.com?subject=${subj}&body=${body}`);
}
