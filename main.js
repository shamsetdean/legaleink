// ── LÉGALEINK — main.js ──

document.addEventListener('DOMContentLoaded', () => {

  // ── Active nav ──
  const links = document.querySelectorAll('.nav-links a');
  const page = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Mobile nav ──
  const toggle = document.querySelector('.nav-mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target))
        navLinks.classList.remove('open');
    });
  }

  // ── Scroll reveal ──
  const reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => obs.observe(el));
  }

  // ── Contact form ──
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const msg = document.getElementById('form-success');
      btn.disabled = true;
      btn.textContent = 'Envoi…';
      // → Remplacer par votre endpoint (Formspree, backend, etc.)
      await new Promise(r => setTimeout(r, 1100));
      btn.textContent = 'Message envoyé ✓';
      if (msg) msg.style.display = 'block';
      form.reset();
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Envoyer le message';
        if (msg) msg.style.display = 'none';
      }, 5000);
    });
  }

  // ── Nav scroll ──
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 20 ? '0 1px 12px rgba(22,24,15,0.08)' : 'none';
    }, { passive: true });
  }

});
