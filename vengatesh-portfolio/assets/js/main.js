// ===================================================================
// VENGATESH — PORTFOLIO — interactivity
// Work is segregated into fixed categories: Badges, Certificates,
// Design Digital, Emailers, Logo, Newsletter, Social Media,
// Standees, Team Background, Web Ads.
// ===================================================================

const REGMARK = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.3"/>
  <line class="arm" x1="12" y1="0" x2="12" y2="24" stroke="currentColor" stroke-width="1.1"/>
  <line class="arm" x1="0" y1="12" x2="24" y2="12" stroke="currentColor" stroke-width="1.1"/>
  <circle cx="12" cy="12" r="1.6" fill="currentColor"/>
</svg>`;
document.querySelectorAll('.regmark').forEach(el => el.innerHTML = REGMARK);

// ---- mobile nav ----
const navToggle = document.querySelector('.nav-toggle');
const topnav = document.querySelector('.topnav');
if (navToggle) {
  navToggle.addEventListener('click', () => topnav.classList.toggle('open'));
  topnav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => topnav.classList.remove('open')));
}

// ---- scroll reveal (defined early so it's ready before cards render) ----
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
function observeReveal(el) { io.observe(el); }

// ---- build a lookup of image works for the lightbox (index by slug) ----
const IMAGE_WORKS = WORKS.filter(w => w.type === 'image');

// ---- category index (table of contents) ----
const indexEl = document.getElementById('cat-index');
indexEl.innerHTML = CATS.map((cat, i) => {
  const count = WORKS.filter(w => w.cat === cat).length;
  return `<a href="#${cat}"><span class="n">${String(i + 1).padStart(2, '0')}</span>${CAT_LABELS[cat]}<span class="count">(${count})</span></a>`;
}).join('');

// ---- render each category block ----
const blocksEl = document.getElementById('cat-blocks');

function cardHTML(w) {
  if (w.type === 'image') {
    const idx = IMAGE_WORKS.indexOf(w);
    return `
    <div class="card reveal" data-lightbox="${idx}">
      <div class="card-media" style="aspect-ratio:${w.w}/${Math.min(w.h, w.w * 1.6)}">
        <img src="assets/img/thumb/${w.slug}.jpg" alt="${w.title}" loading="lazy">
      </div>
      <div class="card-reg regmark">${REGMARK}</div>
      <div class="card-body">
        <p class="card-title">${w.title}</p>
        <p class="card-spec">${w.spec}</p>
      </div>
    </div>`;
  }
  // pdf
  return `
    <a class="card deck reveal" href="assets/pdf/${w.slug}.pdf" target="_blank" rel="noopener">
      <div class="card-media" style="aspect-ratio:1.55/1">
        <img src="assets/pdf_thumb/${w.slug}.jpg" alt="${w.title}" loading="lazy">
      </div>
      <div class="card-reg regmark">${REGMARK}</div>
      <div class="card-body">
        <div>
          <p class="card-title">${w.title}</p>
          <p class="card-spec">${w.spec}</p>
        </div>
        <span class="deck-tag">${w.pages}pp · ${w.size_mb}MB</span>
      </div>
    </a>`;
}

blocksEl.innerHTML = CATS.map((cat, i) => {
  const items = WORKS.filter(w => w.cat === cat);
  const num = String(i + 1).padStart(2, '0');
  const body = items.length
    ? `<div class="grid">${items.map(cardHTML).join('')}</div>`
    : `<div class="empty-state"><strong>No ${CAT_LABELS[cat]} files yet</strong>Nothing in this batch matched — drop artwork into this category and it'll show up here.</div>`;
  return `
    <div class="cat-block" id="${cat}">
      <div class="cat-block-head">
        <span class="tag">${num}</span>
        <h3>${CAT_LABELS[cat]}</h3>
        <span class="cnt">${items.length} item${items.length === 1 ? '' : 's'}</span>
      </div>
      ${body}
    </div>`;
}).join('');

// wire up lightbox + reveal on generated cards
blocksEl.querySelectorAll('.card[data-lightbox]').forEach(card => {
  card.addEventListener('click', () => openLightbox(parseInt(card.dataset.lightbox)));
});
blocksEl.querySelectorAll('.reveal').forEach(observeReveal);

// ---- lightbox ----
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbCap = document.getElementById('lightbox-cap');

function openLightbox(index) {
  const w = IMAGE_WORKS[index];
  lbImg.src = `assets/img/full/${w.slug}.jpg`;
  lbImg.alt = w.title;
  lbCap.innerHTML = `<strong>${w.title}</strong>${w.spec} · ${w.w}×${w.h}px`;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
