/* ============================================
   STUDYBRIDGE GLOBAL — Main JS
   ============================================ */

// ── Navigation & Routing ────────────────────
const nav = document.getElementById('mainNav');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const allLinks = document.querySelectorAll('[data-page]');
const sections = document.querySelectorAll('.page-section');

function navigateTo(pageId) {
  sections.forEach(s => s.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Update active link
  allLinks.forEach(l => l.classList.remove('active'));
  allLinks.forEach(l => { if (l.dataset.page === pageId) l.classList.add('active'); });
  // Update URL hash
  history.pushState(null, '', '#' + pageId);
  // Close mobile nav
  mobileNav.classList.remove('open');
  // Trigger animations for new page
  setTimeout(triggerReveal, 100);
  // Re-run counters if going to home or about
  if (pageId === 'home') setTimeout(animateCounters, 300);
}

// Attach click handlers to all nav links
allLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

// Handle hash on load
window.addEventListener('load', () => {
  const hash = location.hash.replace('#', '') || 'home';
  navigateTo(hash);
});

window.addEventListener('popstate', () => {
  const hash = location.hash.replace('#', '') || 'home';
  navigateTo(hash);
});

// ── Navbar scroll effect ─────────────────────
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// ── Mobile menu toggle ───────────────────────
hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// ── Scroll Reveal ────────────────────────────
function triggerReveal() {
  const reveals = document.querySelectorAll('.page-section.active .reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => {
    r.classList.remove('visible');
    observer.observe(r);
  });
}

// ── Counter Animation ────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target.toLocaleString() + suffix;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString() + suffix;
    }
  }, 16);
}

function animateCounters() {
  const counters = document.querySelectorAll('.page-section.active .counter[data-target]');
  counters.forEach(c => animateCounter(c));
}

// ── Subject Badge Selection ──────────────────
document.addEventListener('click', e => {
  if (e.target.classList.contains('subject-badge')) {
    // Toggle selection
    e.target.classList.toggle('selected');
    // Update hidden input
    const selected = Array.from(document.querySelectorAll('.subject-badge.selected'))
      .map(b => b.textContent.trim()).join(', ');
    const hiddenInput = document.getElementById('selectedSubjects');
    if (hiddenInput) hiddenInput.value = selected;
  }
});

// ── Form Submissions ─────────────────────────
function handleFormSubmit(formId, successId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const successMsg = document.getElementById(successId);
    if (successMsg) {
      successMsg.classList.add('show');
      form.reset();
      document.querySelectorAll('.subject-badge').forEach(b => b.classList.remove('selected'));
      setTimeout(() => successMsg.classList.remove('show'), 6000);
    }
  });
}

handleFormSubmit('helpForm', 'helpSuccess');
handleFormSubmit('volunteerForm', 'volunteerSuccess');
handleFormSubmit('contactForm', 'contactSuccess');
handleFormSubmit('eventForm', 'eventSuccess');

// ── Accordion ────────────────────────────────
document.addEventListener('click', e => {
  const header = e.target.closest('.accordion-header');
  if (!header) return;
  const item = header.closest('.accordion-item');
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
  // Toggle clicked
  if (!isOpen) item.classList.add('open');
});

// ── Blog Search ──────────────────────────────
const blogSearch = document.getElementById('blogSearchInput');
if (blogSearch) {
  blogSearch.addEventListener('input', () => {
    const query = blogSearch.value.toLowerCase();
    document.querySelectorAll('.blog-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });
}

const blogSearchBtn = document.getElementById('blogSearchBtn');
if (blogSearchBtn) {
  blogSearchBtn.addEventListener('click', () => {
    if (blogSearch) blogSearch.dispatchEvent(new Event('input'));
  });
}

// ── Impact counters on stats-strip ──────────
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.counter[data-target]');
      counters.forEach(c => animateCounter(c));
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stats-strip, .stats-section').forEach(s => statsObserver.observe(s));

// ── Smooth Page Transitions ──────────────────
// (handled by CSS reveal + navigateTo above)

console.log('🎓 StudyBridge Global website loaded successfully!');
