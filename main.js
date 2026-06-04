/* ============================================
   STUDYBRIDGE GLOBAL — Main Stylesheet
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

/* ---- CSS Variables ---- */
:root {
  --navy: #1a3a6b;
  --blue: #2563b0;
  --sky: #4aabe8;
  --light-sky: #c8e6f7;
  --mint: #4caf88;
  --green: #3d9970;
  --pastel-bg: #f0f7ff;
  --pastel-mint: #e8f7f0;
  --white: #ffffff;
  --gray-50: #f8fafc;
  --gray-100: #f1f5f9;
  --gray-200: #e2e8f0;
  --gray-600: #475569;
  --gray-800: #1e293b;
  --shadow-sm: 0 2px 8px rgba(26,58,107,0.08);
  --shadow-md: 0 8px 30px rgba(26,58,107,0.12);
  --shadow-lg: 0 20px 60px rgba(26,58,107,0.18);
  --radius: 16px;
  --radius-sm: 8px;
  --radius-lg: 24px;
  --transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}

/* ---- Reset & Base ---- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; font-size: 16px; }

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--gray-800);
  background: var(--white);
  line-height: 1.6;
  overflow-x: hidden;
}

a { text-decoration: none; color: inherit; }
ul { list-style: none; }
img { max-width: 100%; height: auto; }
input, textarea, select {
  font-family: inherit;
  font-size: inherit;
}

/* ---- Typography ---- */
h1, h2, h3, h4 {
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
  color: var(--navy);
}
h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.6rem, 3.5vw, 2.5rem); }
h3 { font-size: clamp(1.2rem, 2.5vw, 1.6rem); }
h4 { font-size: 1.1rem; }

p { color: var(--gray-600); line-height: 1.75; }

.section-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--sky);
  margin-bottom: 0.6rem;
  display: block;
}

/* ---- Layout Utilities ---- */
.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

.section { padding: 88px 0; }
.section-alt { background: var(--pastel-bg); }
.section-navy { background: var(--navy); }

.text-center { text-align: center; }
.text-white { color: var(--white) !important; }
.text-white p { color: rgba(255,255,255,0.8) !important; }
.text-white h2 { color: var(--white) !important; }

.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }

/* ---- Buttons ---- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  border: none;
  transition: var(--transition);
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.btn-primary {
  background: linear-gradient(135deg, var(--blue), var(--sky));
  color: var(--white);
  box-shadow: 0 4px 20px rgba(37,99,176,0.35);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(37,99,176,0.45);
}

.btn-secondary {
  background: var(--white);
  color: var(--navy);
  border: 2px solid var(--light-sky);
}
.btn-secondary:hover {
  background: var(--pastel-bg);
  border-color: var(--sky);
  transform: translateY(-2px);
}

.btn-outline-white {
  background: transparent;
  color: var(--white);
  border: 2px solid rgba(255,255,255,0.5);
}
.btn-outline-white:hover {
  background: rgba(255,255,255,0.15);
  border-color: var(--white);
}

.btn-green {
  background: linear-gradient(135deg, var(--green), var(--mint));
  color: var(--white);
  box-shadow: 0 4px 20px rgba(61,153,112,0.35);
}
.btn-green:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(61,153,112,0.45);
}

/* ---- Navigation ---- */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 0 24px;
  transition: var(--transition);
}

nav.scrolled {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-sm);
}

.nav-inner {
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-logo img {
  height: 44px;
  width: auto;
}

.nav-logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.nav-logo-text .brand-main {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--navy);
}

.nav-logo-text .brand-sub {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--mint);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-links a {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--gray-600);
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.nav-links a:hover, .nav-links a.active {
  color: var(--blue);
  background: var(--pastel-bg);
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 8px;
  background: none;
  border: none;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--navy);
  border-radius: 2px;
  transition: var(--transition);
}

/* ---- Mobile Nav Drawer ---- */
.mobile-nav {
  display: none;
  position: fixed;
  top: 76px;
  left: 0;
  right: 0;
  background: var(--white);
  border-top: 1px solid var(--gray-200);
  padding: 20px 24px;
  z-index: 998;
  box-shadow: var(--shadow-md);
  flex-direction: column;
  gap: 4px;
}
.mobile-nav.open { display: flex; }
.mobile-nav a {
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  font-weight: 500;
  color: var(--gray-800);
  transition: var(--transition);
}
.mobile-nav a:hover { background: var(--pastel-bg); color: var(--blue); }
.mobile-nav .mobile-cta {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ---- Hero Section ---- */
#home .hero {
  min-height: 100vh;
  background: linear-gradient(155deg, #0e2859 0%, #1a3a6b 40%, #2563b0 75%, #4aabe8 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 76px;
}

.hero-bg-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
}
.hero-bg-circle.c1 { width: 600px; height: 600px; top: -200px; right: -150px; }
.hero-bg-circle.c2 { width: 400px; height: 400px; bottom: -100px; left: -80px; }
.hero-bg-circle.c3 { width: 250px; height: 250px; top: 50%; right: 25%; background: rgba(74,171,232,0.1); }

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1180px;
  margin: 0 auto;
  padding: 80px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-text .tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50px;
  padding: 6px 16px;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.hero-text .tag span { 
  width: 6px; height: 6px; 
  background: var(--mint);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.hero-text h1 {
  color: var(--white);
  margin-bottom: 20px;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
}

.hero-text h1 .accent { color: var(--sky); }

.hero-text p {
  color: rgba(255,255,255,0.8);
  font-size: 1.1rem;
  margin-bottom: 36px;
  max-width: 500px;
}

.hero-buttons { display: flex; gap: 14px; flex-wrap: wrap; }

.hero-stats {
  display: flex;
  gap: 28px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.15);
}

.hero-stat .num {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
}

.hero-stat .num .counter { display: inline; }

.hero-stat .lbl {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.65);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Hero illustration panel */
.hero-visual {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 2;
}

.hero-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.hero-card {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  border-radius: var(--radius);
  padding: 20px;
  color: white;
  transition: var(--transition);
}

.hero-card:hover {
  background: rgba(255,255,255,0.16);
  transform: translateY(-4px);
}

.hero-card .icon {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.hero-card .card-title {
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
  margin-bottom: 4px;
}

.hero-card p {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.65);
}

.hero-card.featured {
  grid-column: span 2;
  background: rgba(76,175,136,0.2);
  border-color: rgba(76,175,136,0.35);
  display: flex;
  align-items: center;
  gap: 16px;
}

/* ---- Cards ---- */
.card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 32px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-200);
  transition: var(--transition);
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
  border-color: var(--light-sky);
}

.card-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-sm);
  background: var(--pastel-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.card-icon.green { background: var(--pastel-mint); }

/* ---- Stats Strip ---- */
.stats-strip {
  background: linear-gradient(135deg, var(--navy), var(--blue));
  padding: 56px 24px;
}

.stats-grid {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  text-align: center;
}

.stat-item .number {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1;
  margin-bottom: 6px;
}

.stat-item .label {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.7);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ---- Forms ---- */
.form-section {
  background: var(--pastel-bg);
  border-radius: var(--radius-lg);
  padding: 48px;
  border: 1px solid var(--light-sky);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 6px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 13px 18px;
  border: 1.5px solid var(--gray-200);
  border-radius: var(--radius-sm);
  background: var(--white);
  color: var(--gray-800);
  font-size: 0.95rem;
  transition: var(--transition);
  outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--sky);
  box-shadow: 0 0 0 3px rgba(74,171,232,0.12);
}

.form-group textarea { resize: vertical; min-height: 120px; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

.form-note {
  font-size: 0.8rem;
  color: var(--gray-600);
  margin-top: 16px;
}

/* ---- Success Message ---- */
.success-msg {
  display: none;
  background: var(--pastel-mint);
  border: 1.5px solid var(--mint);
  border-radius: var(--radius-sm);
  padding: 16px 20px;
  color: var(--green);
  font-weight: 600;
  font-size: 0.95rem;
  margin-top: 16px;
  align-items: center;
  gap: 10px;
}
.success-msg.show { display: flex; }

/* ---- Team Cards ---- */
.team-card {
  text-align: center;
  padding: 32px 24px;
}

.team-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: linear-gradient(135deg, var(--sky), var(--blue));
  color: white;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.6rem;
}

.team-card .role {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--sky);
  margin-bottom: 4px;
}

.team-card h4 { color: var(--navy); margin-bottom: 8px; }
.team-card p { font-size: 0.875rem; }

/* ---- Projects ---- */
.project-card {
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-200);
  transition: var(--transition);
}

.project-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.project-img {
  height: 220px;
  background: linear-gradient(135deg, var(--pastel-bg), var(--light-sky));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
  overflow: hidden;
}

.project-img::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(26,58,107,0.08));
}

.project-body {
  background: var(--white);
  padding: 24px;
}

.project-body .tag-pill {
  display: inline-block;
  background: var(--pastel-bg);
  color: var(--blue);
  border-radius: 50px;
  padding: 4px 14px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}

.project-body h3 { color: var(--navy); margin-bottom: 8px; font-size: 1.1rem; }
.project-body p { font-size: 0.875rem; }

/* ---- Blog Cards ---- */
.blog-card {
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--white);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-200);
  transition: var(--transition);
}
.blog-card:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); }

.blog-img {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  background: linear-gradient(135deg, var(--light-sky), var(--pastel-bg));
}

.blog-body { padding: 24px; }
.blog-body .meta {
  font-size: 0.75rem;
  color: var(--sky);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}
.blog-body h3 { font-size: 1rem; color: var(--navy); margin-bottom: 8px; }
.blog-body p { font-size: 0.83rem; }

/* ---- Testimonials ---- */
.testimonial {
  background: var(--white);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-200);
  position: relative;
}

.testimonial::before {
  content: '"';
  position: absolute;
  top: 12px;
  left: 20px;
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  color: var(--light-sky);
  line-height: 1;
}

.testimonial p {
  font-size: 0.9rem;
  font-style: italic;
  padding-top: 16px;
  margin-bottom: 16px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 10px;
}

.t-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--sky), var(--navy));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
}

.t-name { font-weight: 700; font-size: 0.88rem; color: var(--navy); }
.t-role { font-size: 0.75rem; color: var(--gray-600); }

/* ---- Page Banners (inner pages) ---- */
.page-banner {
  background: linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%);
  padding: 120px 24px 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-banner::before {
  content: '';
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  background: rgba(255,255,255,0.03);
  top: -200px; right: -100px;
}

.page-banner h1, .page-banner h2 { color: var(--white); margin-bottom: 12px; }
.page-banner p { color: rgba(255,255,255,0.75); max-width: 600px; margin: 0 auto; }

/* ---- Benefits List ---- */
.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid var(--gray-200);
}
.benefit-item:last-child { border-bottom: none; }
.benefit-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--pastel-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}
.benefit-text h4 { color: var(--navy); margin-bottom: 4px; }
.benefit-text p { font-size: 0.875rem; }

/* ---- Contact Section ---- */
.contact-info-card {
  background: linear-gradient(135deg, var(--navy), var(--blue));
  border-radius: var(--radius);
  padding: 40px;
  color: white;
  height: 100%;
}

.contact-info-card h3 { color: white; margin-bottom: 8px; }
.contact-info-card p { color: rgba(255,255,255,0.75); margin-bottom: 28px; }

.contact-item {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}
.contact-item .ci-icon {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-sm);
  background: rgba(255,255,255,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}
.contact-item .ci-info .ci-label { font-size: 0.72rem; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; }
.contact-item .ci-info .ci-val { color: white; font-weight: 500; font-size: 0.9rem; }

.social-links { display: flex; gap: 10px; margin-top: 28px; }
.social-btn {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-sm);
  background: rgba(255,255,255,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  transition: var(--transition);
  cursor: pointer;
}
.social-btn:hover { background: rgba(255,255,255,0.22); transform: translateY(-2px); }

/* ---- Footer ---- */
footer {
  background: #0c1f42;
  color: rgba(255,255,255,0.7);
  padding: 64px 0 0;
}

.footer-grid {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.footer-brand .logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: white;
  margin-bottom: 4px;
}
.footer-brand .logo-sub {
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--mint);
  margin-bottom: 16px;
}
.footer-brand p { font-size: 0.875rem; line-height: 1.7; max-width: 280px; margin-bottom: 20px; }

.footer-col h5 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.4);
  margin-bottom: 16px;
}
.footer-col a {
  display: block;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.65);
  margin-bottom: 10px;
  transition: var(--transition);
}
.footer-col a:hover { color: var(--sky); padding-left: 4px; }

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 20px 24px;
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
}

/* ---- Page Sections ---- */
.page-section {
  display: none;
}
.page-section.active {
  display: block;
}

/* ---- Accordion (FAQ) ---- */
.accordion-item {
  border: 1.5px solid var(--gray-200);
  border-radius: var(--radius-sm);
  margin-bottom: 10px;
  overflow: hidden;
  transition: var(--transition);
}
.accordion-item.open { border-color: var(--sky); }

.accordion-header {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: var(--white);
  transition: var(--transition);
}
.accordion-header:hover { background: var(--pastel-bg); }
.accordion-header h4 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem; font-weight: 600; color: var(--navy); }
.accordion-arrow { transition: var(--transition); color: var(--sky); font-size: 1.2rem; }
.accordion-item.open .accordion-arrow { transform: rotate(180deg); }
.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}
.accordion-item.open .accordion-body { max-height: 300px; }
.accordion-body p { padding: 0 20px 20px; font-size: 0.875rem; }

/* ---- Animations ---- */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-fade-up {
  animation: fadeUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }
.delay-5 { animation-delay: 0.5s; }

/* ---- Scroll Reveal ---- */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: none;
}

/* ---- Search Bar ---- */
.search-bar {
  display: flex;
  max-width: 500px;
  margin: 24px auto 0;
}
.search-bar input {
  flex: 1;
  padding: 14px 20px;
  border: 2px solid var(--gray-200);
  border-right: none;
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  outline: none;
  font-size: 0.95rem;
}
.search-bar input:focus { border-color: var(--sky); }
.search-bar button {
  padding: 0 24px;
  background: var(--blue);
  color: white;
  border: none;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  cursor: pointer;
  font-weight: 600;
  transition: var(--transition);
}
.search-bar button:hover { background: var(--navy); }

/* ---- Impact Counter ---- */
.impact-counter {
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: var(--navy);
}

/* ---- Subject Badges ---- */
.subject-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}
.subject-badge {
  padding: 8px 18px;
  border-radius: 50px;
  background: var(--pastel-bg);
  border: 1.5px solid var(--light-sky);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--blue);
  cursor: pointer;
  transition: var(--transition);
}
.subject-badge:hover, .subject-badge.selected {
  background: var(--blue);
  color: white;
  border-color: var(--blue);
}

/* ---- Breadcrumb ---- */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.6);
  margin-bottom: 12px;
}
.breadcrumb span { cursor: pointer; transition: var(--transition); }
.breadcrumb span:hover { color: white; }
.breadcrumb .sep { opacity: 0.4; }

/* ---- Responsive ---- */
@media (max-width: 1024px) {
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
}

@media (max-width: 768px) {
  .nav-links, .nav-cta .btn { display: none; }
  .hamburger { display: flex; }
  .hero-content { grid-template-columns: 1fr; text-align: center; padding: 60px 24px; }
  .hero-text p { margin: 0 auto 36px; }
  .hero-buttons { justify-content: center; }
  .hero-stats { justify-content: center; }
  .hero-visual { display: none; }
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; gap: 24px; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
  .form-row { grid-template-columns: 1fr; }
  .section { padding: 60px 0; }
  .form-section { padding: 28px 20px; }
  .contact-info-card { padding: 28px 20px; }
}

/* ---- Misc ---- */
.divider {
  height: 1px;
  background: var(--gray-200);
  margin: 48px 0;
}

.badge-new {
  display: inline-block;
  background: var(--mint);
  color: white;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 2px 8px;
  border-radius: 4px;
  vertical-align: middle;
  margin-left: 6px;
}

.highlight-box {
  background: linear-gradient(135deg, var(--pastel-bg), var(--pastel-mint));
  border-radius: var(--radius);
  padding: 32px;
  border-left: 4px solid var(--mint);
}

.highlight-box h3 { color: var(--navy); margin-bottom: 8px; }

/* Cookie-cutter bottom CTA */
.cta-section {
  background: linear-gradient(135deg, var(--navy), #2563b0);
  padding: 80px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.cta-section::before {
  content: '';
  position: absolute;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
  bottom: -150px; right: -100px;
}
.cta-section h2 { color: white; margin-bottom: 12px; }
.cta-section p { color: rgba(255,255,255,0.75); max-width: 560px; margin: 0 auto 32px; }
.cta-section .cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
