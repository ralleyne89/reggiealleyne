import { emptySnapshot, money, filterProducts, addToBag, setQuantity, bagTotal, restoreSnapshot, placeOrder, lineID } from './model.js';

const $ = (selector) => document.querySelector(selector);
const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const paths = {
  menu: '<path d="M4 7h16M4 12h10M4 17h16"/>',
  bag: '<path d="M5 7h14l1 14H4L5 7Z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/>',
  discover: '<path d="m12 3 3 6 6 3-6 3-3 6-3-6-6-3 6-3Z"/>',
  shop: '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>',
  designers: '<path d="M5 20V4h6a4 4 0 0 1 0 8H5m6 0 8 8"/>',
  journal: '<path d="M12 5c-3-2-7-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-2-1-6-1-9 1Zm0 0v15"/>',
  saved: '<path d="M19 21 12 17 5 21V4h14v17Z"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  back: '<path d="M19 12H5m6-6-6 6 6 6"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  filter: '<path d="M4 7h16M4 17h16M8 4v6m8 4v6"/>',
  plus: '<path d="M5 12h14M12 5v14"/>',
  minus: '<path d="M5 12h14"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  play: '<path d="m9 5 11 7-11 7V5Z"/>',
  zoom: '<path d="M4 9V4h5m6 0h5v5m0 6v5h-5m-6 0H4v-5"/>',
};
const icon = (name, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.discover}</svg>`;
const btn = (action, text, cls = 'secondary', attrs = '') => `<button class="${cls}" data-action="${action}" ${attrs}>${text}</button>`;
const image = (name, alt, eager = false) => `<img src="./assets/${escape(name)}.jpg" alt="${escape(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
const storageKey = 'technoir:web:v1';
let catalog, snapshot = emptySnapshot(), route = { type: 'discover' }, history = [], activeTab = 'discover';
let filters = { query: '', category: 'All', designer: 'All designers', sort: 'Curated' };
let selectedSize, selectedColor, latestOrder, toastTimer, photoURL, dialogReturn, storageUnavailable = false;
const content = $('#content'), dialog = $('#dialog');
if (new URLSearchParams(location.search).get('embedded') === '1') document.documentElement.classList.add('embedded');
$('.masthead > button:first-child').innerHTML = icon('menu');
$('.bag-button').insertAdjacentHTML('afterbegin', icon('bag'));

function artwork(p) {
  if (p.image) return image(p.image, p.name);
  const ring = '<ellipse cx="100" cy="105" rx="51" ry="65" fill="none" stroke="#55514a" stroke-width="22"/><ellipse cx="96" cy="100" rx="51" ry="65" fill="none" stroke="#b2afa6" stroke-width="19"/><path d="M60 57c20-21 44-26 65-8" fill="none" stroke="#f5f2e9" stroke-width="6"/>';
  const glasses = '<path d="m17 86 9-20h49l16 18h18l16-18h49l9 20-14 36h-42l-18-27H91l-18 27H31L17 86Z" fill="#161719" stroke="#777" stroke-width="3"/><path d="m25 74 12 35h30l14-30M119 79l14 30h30l12-35" fill="#6d736b"/><path d="m18 83-12-7m177 7 12-7" stroke="#222" stroke-width="7"/>';
  return `<div class="product-art"><svg viewBox="0 0 200 200" role="img" aria-label="${escape(p.name)} illustration">${p.id === 'orbit' ? ring : glasses}</svg></div>`;
}
function fittingArt(p) {
  const shape = p.id === 'nocturne' ? '<rect x="39" y="0" width="22" height="100" rx="6" fill="#222"/><rect x="25" y="30" width="50" height="43" rx="12" fill="#b6b3a9"/><rect x="29" y="34" width="42" height="35" rx="9" fill="#121316"/><path d="M50 39v13l12 5" stroke="#ded7bd" fill="none" stroke-width="2"/>' : p.id === 'frame' ? '<path d="M3 32h38l7 8h6l7-8h36l-6 33H64L54 47h-6L38 65H10Z" fill="#191a1c" stroke="#aaa" stroke-width="2"/>' : p.id === 'orbit' ? '<ellipse cx="50" cy="50" rx="29" ry="39" fill="none" stroke="#bbb4a1" stroke-width="13"/>' : '<path d="M16 30h68v62H16Z" fill="#17181a" stroke="#c5b897" stroke-width="2"/><path d="M35 32V20a15 15 0 0 1 30 0v12" fill="none" stroke="#c5b897" stroke-width="3"/>';
  return `<svg viewBox="0 0 100 100" aria-hidden="true">${shape}</svg>`;
}
function save() {
  try { localStorage.setItem(storageKey, JSON.stringify(snapshot)); } catch { storageUnavailable = true; }
  updateChrome();
}
function notify(message) {
  const toast = $('#toast'); toast.textContent = message; toast.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { toast.hidden = true; }, 2400);
}
function updateChrome() {
  const count = snapshot.bag.reduce((sum, l) => sum + l.quantity, 0);
  $('#bag-count').textContent = count; $('#bag-count').hidden = count === 0;
  $('#tabs').innerHTML = ['discover', 'shop', 'designers', 'journal', 'saved'].map((tab) => btn('tab', `${icon(tab)}<span>${tab[0].toUpperCase() + tab.slice(1)}</span>`, '', `data-tab="${tab}" ${tab === activeTab ? 'aria-current="page"' : ''}`)).join('');
}
function go(next, tab) {
  history.push({ route, scroll: content.scrollTop });
  route = next; if (tab) { activeTab = tab; history = []; }
  if (next.type === 'product') { const p = product(next.id); selectedSize = p.sizes[0]; selectedColor = p.colors[0]; }
  render(); content.scrollTop = 0; content.focus({ preventScroll: true });
}
const product = (id) => catalog.products.find((p) => p.id === id);
const backRow = (label) => `<div class="back-row">${btn('back', `${icon('back')} Back`, '')}<span>${escape(label)}</span></div>`;
const section = (number, title, action = '', attrs = '') => `<div class="section-heading"><span>${number}</span><h2 class="grow">${title}</h2>${action ? btn(action, icon('arrow'), 'circle-link', `${attrs} aria-label="Explore ${title.toLowerCase()}"`) : ''}</div>`;
const empty = (title, description, action = 'shop', label = 'EXPLORE THE COLLECTION') => `<div class="empty-state">${icon('saved')}<h2>${title}</h2><p>${description}</p>${btn(action, label)}</div>`;
function card(p) {
  const saved = snapshot.saved.includes(p.id);
  return `<article class="product-card"><div class="product-image-wrap">${btn('product', artwork(p), 'product-image', `data-id="${p.id}" aria-label="View ${escape(p.name)}"`)}${btn('save', icon('saved'), 'save-button', `data-id="${p.id}" aria-label="${saved ? 'Unsave' : 'Save'} ${escape(p.name)}" aria-pressed="${saved}"`)}</div>${btn('product', `<span class="designer">${escape(p.designer)}</span><strong>${escape(p.name)}</strong><span class="price">${money(p.price)}</span>`, 'product-copy', `data-id="${p.id}"`)}</article>`;
}
const grid = (products) => `<div class="product-grid">${products.map(card).join('')}</div>`;
const articleCard = (a) => btn('article', `${image(a.image, '')}<span class="article-copy"><span class="kicker">${escape(a.category)}</span><span class="serif">${escape(a.title)}</span><small>${escape(a.readingTime)} &nbsp; ↗</small></span>`, 'article-row', `data-id="${a.id}"`);
function discover() {
  return `<div class="edition"><span>FASHION, INTELLIGENTLY.</span><span>THE CONNECTED EDITION / 01</span></div>${btn('article', `${image('hero', 'Fashion editorial in dark sculptural clothing', true)}<span class="cover-copy"><span class="kicker">THE ART OF WEARING TECHNOLOGY</span><h1>Connected,<br>after dark.</h1><span class="row">A new way to wear what’s next ${icon('arrow')}</span></span>`, 'cover', 'data-id="after-dark"')}<div class="page stack"><p class="editorial-lead">Technology you wear.<br>Style you make your own.</p><p class="body-copy">Discover considered objects, designer collections, and new ways to wear them.</p>${section('01', 'New objects', 'shop')}<div class="product-rail">${catalog.products.filter((p) => p.isNew).map(card).join('')}</div>${section('02', 'Designer focus')}${btn('designer', `${image('collection', 'Sculptural fashion collection')}<span class="cover-copy"><span class="kicker">ARCHITECTURE FOR THE BODY</span><h2>Gareth Pugh</h2><span class="row">Explore the collection ${icon('arrow')}</span></span>`, 'feature-designer', 'data-name="GARETH PUGH"')}${section('03', 'The journal', 'journal')}${catalog.articles.map(articleCard).join('')}<div class="footer-note"><span>TECHNOIR / DEMONSTRATION</span><span>CURATED WITH INTENT</span></div></div>`;
}
function shop() {
  return `<div class="page stack"><span class="kicker">THE COLLECTION</span><h1>Objects of<br>intention.</h1><label class="search">${icon('search')}<span class="sr-only">Search the collection</span><input id="search" type="search" placeholder="Search pieces, designers…" value="${escape(filters.query)}" autocomplete="off"></label><div class="categories" aria-label="Product categories">${catalog.categories.map((c) => btn('category', escape(c), '', `data-category="${c}" aria-pressed="${filters.category === c}"`)).join('')}</div><div class="row spread"><span class="results-label" id="result-count"></span>${btn('filters', `${icon('filter')} Filter & sort`, 'filter-button')}</div>${filters.designer !== 'All designers' ? btn('clear-filters', `${escape(filters.designer)} ×`, 'chip', 'aria-label="Clear designer filter"') : ''}<div id="shop-results"></div></div>`;
}
function shopResults() {
  const products = filterProducts(catalog.products, filters);
  $('#result-count').textContent = `${products.length} PIECE${products.length === 1 ? '' : 'S'} / ${filters.sort.toUpperCase()}`;
  $('#shop-results').innerHTML = products.length ? grid(products) : empty('No pieces found.', 'Try another search or clear your filters.', 'clear-all', 'CLEAR SEARCH & FILTERS');
}
function detail(p) {
  return `${backRow(p.designer)}${btn('zoom', `${artwork(p)}<span class="zoom-affordance">${icon('zoom')}</span>`, 'product-hero', `data-id="${p.id}" aria-label="Enlarge ${escape(p.name)} image"`)}<div class="page stack"><div class="row spread"><span class="kicker">${escape(p.designer)}</span><span class="detail-price">${money(p.price)}</span></div><h1>${escape(p.name)}</h1><p class="material">${escape(p.material)}</p><p class="body-copy">${escape(p.detail)}</p><span class="choice-label">Size</span><div class="choice-group" aria-label="Size">${p.sizes.map((s) => btn('size', escape(s), '', `data-value="${escape(s)}" aria-pressed="${s === selectedSize}"`)).join('')}</div><span class="choice-label">Finish</span><div class="choice-group" aria-label="Finish">${p.colors.map((c) => btn('color', escape(c), '', `data-value="${escape(c)}" aria-pressed="${c === selectedColor}"`)).join('')}</div>${btn('add', `ADD TO BAG — ${money(p.price)}`, 'primary', `data-id="${p.id}"`)}<div class="row">${btn('try-on', `${icon('discover')} ILLUSTRATIVE TRY-ON`, 'secondary', `data-id="${p.id}"`)}${btn('save-detail', icon('saved'), 'icon-button', `data-id="${p.id}" aria-label="${snapshot.saved.includes(p.id) ? 'Unsave' : 'Save'} ${escape(p.name)}" aria-pressed="${snapshot.saved.includes(p.id)}"`)}</div><small>Sample inventory. No purchase or payment will be made.</small>${section('01', 'How to wear')}<p class="body-copy">${escape(p.styling)}</p>${btn('film', `${icon('play')} WATCH THE STYLE FILM`)}<details class="disclosure"><summary>Materials & care</summary><p>${escape(p.material)}. Wipe gently with a soft, dry cloth. Product details are illustrative sample content.</p></details><details class="disclosure"><summary>Delivery & returns</summary><p>Demo delivery is free. Checkout creates a local sample order. No item is shipped and no charge is made.</p></details>${section('02', 'Wear it with')}${grid(catalog.products.filter((x) => x.id !== p.id).slice(0, 2))}</div>`;
}
function designers() {
  return `<div class="page stack"><span class="kicker">THE DIRECTORY</span><h1>Designers<br>& makers.</h1><p class="body-copy">Distinct points of view. A shared curiosity for what comes next.</p>${catalog.designers.map((d) => btn('designer', `${image(d.image, d.name)}<span class="kicker">${escape(d.name)}</span><h2>${escape(d.subtitle)}</h2>`, 'designer-card', `data-name="${d.name}"`)).join('')}</div>`;
}
function designer(name) {
  const d = catalog.designers.find((x) => x.name === name);
  return `${backRow('DESIGNER COLLECTION')}<div class="wide-image">${image(d.image, d.name, true)}</div><div class="page stack"><span class="kicker">${escape(d.name)}</span><h1>${escape(d.subtitle)}</h1><p class="body-copy">${escape(d.description)}</p>${section('01', 'The collection')}${grid(catalog.products.filter((p) => p.designer === name))}<small>Archive-inspired sample collection. This demonstration is not a retail store or brand partnership.</small></div>`;
}
function journal() {
  return `<div class="page stack"><span class="kicker">IDEAS FOR A CONNECTED WARDROBE</span><h1>The journal.</h1><p class="body-copy">Stories about fashion, technology, and the way we wear them.</p>${catalog.articles.map(articleCard).join('')}${btn('film', `${icon('play')} THE STYLE FILM`)}</div>`;
}
function article(id) {
  const a = catalog.articles.find((x) => x.id === id);
  return `${backRow('THE JOURNAL')}<div class="wide-image">${image(a.image, a.title, true)}</div><div class="page stack"><span class="kicker">${escape(a.category)} / ${escape(a.readingTime)}</span><h1>${escape(a.title)}</h1><p class="body-copy">${escape(a.intro)}</p>${btn('film', `${icon('play')} WATCH THE STYLE FILM`)}${a.sections.map((s) => { const [title, ...body] = s.split('\n'); return `<section class="article-section"><h2>${escape(title)}</h2><p>${escape(body.join('\n'))}</p></section>`; }).join('')}${section('01', 'Shop the story')}${grid(a.productIDs.map(product))}</div>`;
}
function bag() {
  if (!snapshot.bag.length) return `${backRow('SHOPPING BAG')}<div class="page stack"><span class="kicker">YOUR EDIT</span><h1>The bag.</h1>${empty('Room for something new.', 'Your chosen pieces will appear here.')}${snapshot.orders.length ? btn('orders', 'VIEW DEMO ORDERS') : ''}</div>`;
  return `${backRow('SHOPPING BAG')}<div class="page stack"><span class="kicker">YOUR EDIT</span><h1>The bag.</h1>${snapshot.bag.map((line) => { const p = product(line.productID), id = escape(lineID(line)); return `<article class="bag-line"><div class="mini-art">${artwork(p)}</div><div class="bag-line-info"><span class="kicker">${escape(p.designer)}</span><h3>${escape(p.name)}</h3><span class="variant">${escape(line.size)} / ${escape(line.color)}</span><span class="price">${money(p.price * line.quantity)}</span><div class="quantity-row">${btn('quantity', icon('minus'), '', `data-line="${id}" data-quantity="${line.quantity - 1}" aria-label="Decrease ${escape(p.name)} quantity"`)}<span aria-label="Quantity ${line.quantity}">${line.quantity}</span>${btn('quantity', icon('plus'), '', `data-line="${id}" data-quantity="${line.quantity + 1}" aria-label="Increase ${escape(p.name)} quantity" ${line.quantity >= 9 ? 'disabled' : ''}`)}${btn('quantity', icon('close'), 'remove', `data-line="${id}" data-quantity="0" aria-label="Remove ${escape(p.name)}"`)}</div></div></article>`; }).join('')}<div class="row spread order-line"><span>Demo delivery</span><span>Complimentary</span></div><div class="row spread total-line"><span>Total</span><strong>${money(bagTotal(snapshot.bag, catalog.products))}</strong></div>${btn('checkout', 'CONTINUE TO DEMO CHECKOUT', 'primary')}<small>No payment details needed. No order will be placed with a retailer.</small></div>`;
}
function checkout() {
  return `${backRow('DEMO CHECKOUT')}<div class="page stack"><span class="kicker">A CONSIDERED FINISH</span><h1>Make it<br>yours.</h1><span class="status-pill">SIMULATED CHECKOUT</span><p class="body-copy">Use the sample details below to complete the experience. Your order stays in this browser.</p><section class="stack"><span class="choice-label">Sample recipient</span><h3>Alex Morgan</h3><p class="body-copy">120 Spring Street<br>New York, NY 10012<br>United States</p></section><label class="field">Delivery<select id="delivery"><option>Standard · 3–5 days</option><option>Express · 1–2 days</option></select></label><hr class="rule"><div class="row spread"><span>Payment</span><span class="muted">Demo mode / no charge</span></div><div class="row spread total-line"><span>Demo total</span><strong>${money(bagTotal(snapshot.bag, catalog.products))}</strong></div>${btn('place-order', 'PLACE DEMO ORDER', 'primary')}<small>This creates a sample confirmation. No payment is collected and no item is shipped.</small></div>`;
}
function confirmation(order) {
  return `<div class="page stack">${icon('check', 'confirmation-icon')}<span class="kicker">DEMO COMPLETE</span><h1>A little<br>future, yours.</h1><p class="body-copy">Your sample order is saved in this browser. No payment was made.</p><div class="status-pill">${escape(order.id)}</div>${order.items.map((l) => `<div class="row spread order-line"><span>${escape(product(l.productID).name)} × ${l.quantity}</span><span>${money(product(l.productID).price * l.quantity)}</span></div>`).join('')}<hr class="rule"><div class="row spread total-line"><span>Demo total</span><strong>${money(bagTotal(order.items, catalog.products))}</strong></div><small>${escape(order.delivery)} · illustrative delivery only</small>${btn('shop', 'CONTINUE EXPLORING', 'primary')}${btn('orders', 'VIEW DEMO ORDERS')}</div>`;
}
function orders() {
  return `${backRow('LOCAL DEMO HISTORY')}<div class="page stack"><span class="kicker">YOUR DEMONSTRATION</span><h1>Past edits.</h1>${snapshot.orders.length ? snapshot.orders.map((o) => `<article class="history-card"><strong>${escape(o.id)} / ${new Date(o.date).toLocaleDateString()}</strong><p>${o.items.map((l) => `${escape(product(l.productID).name)} × ${l.quantity}`).join('<br>')}</p><p>${money(bagTotal(o.items, catalog.products))} · ${escape(o.delivery)}</p><small>Sample order / no payment</small></article>`).join('') : empty('A fresh start.', 'Complete a demo checkout to see a sample order here.')}</div>`;
}
function render() {
  updateChrome();
  const views = { discover, shop, designers, journal, saved: () => `<div class="page stack"><span class="kicker">YOUR PRIVATE EDIT</span><h1>Saved pieces.</h1>${snapshot.saved.length ? grid(snapshot.saved.map(product)) : empty('Keep what catches your eye.', 'Save pieces as you explore, then return to your personal edit.')}</div>`, product: () => detail(product(route.id)), designer: () => designer(route.name), article: () => article(route.id), bag, checkout, confirmation: () => confirmation(latestOrder), orders };
  content.innerHTML = views[route.type]();
  if (route.type === 'shop') shopResults();
}
function openDialog(title, body) {
  dialogReturn = document.activeElement;
  $('#dialog-content').innerHTML = `<div class="sheet-header"><h2 id="dialog-title">${title}</h2>${btn('close', icon('close'), 'icon-button', 'aria-label="Close dialog"')}</div>${body}`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}
function cleanupDialog() {
  dialog.querySelector('video')?.pause();
  if (photoURL) { URL.revokeObjectURL(photoURL); photoURL = undefined; }
  $('#dialog-content').innerHTML = '';
  if (dialogReturn?.isConnected) dialogReturn.focus({ preventScroll: true });
}
dialog.addEventListener('close', cleanupDialog);
dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
function guide() {
  openDialog('About this demonstration', `<div class="sheet-body"><span class="kicker">TECHNOIR / CLIENT PREVIEW</span><h2>Explore the experience.</h2><p class="body-copy">This browser demo recreates the new native Tech Noir demonstration. The original mobile application shipped in 2016.</p>${[['01','Discover products and designer collections.'],['02','Read the styling stories and watch the short film.'],['03','Try an illustrative overlay, save pieces, then complete a sample checkout.']].map(([n,t]) => `<div class="guide-step"><span>${n}</span><p>${t}</p></div>`).join('')}<hr class="rule"><p class="body-copy">All inventory and prices are samples. Try-on uses a movable illustration, without body tracking. Photos stay in this page and are cleared when you close try-on. No payment or real order is made.</p><small>Saved pieces, bag, and demo orders are stored only in this browser.${storageUnavailable ? ' Browser storage is unavailable; changes will last for this visit only.' : ''}</small>${btn('orders-dialog', 'VIEW DEMO ORDERS')}${btn('reset-confirm', 'RESET DEMONSTRATION')}</div>`);
}
function tryOn(p) {
  const glasses = p.id === 'frame', ring = p.id === 'orbit';
  openDialog('Illustrative try-on', `<div class="sheet-body"><span class="kicker">${escape(p.name)}</span><p class="body-copy">Position the illustration with the sliders, or drag it over the image. This is a visual concept, without tracking or fit measurement.</p><div class="fitting-scene"><img id="fitting-photo" src="./assets/${glasses ? 'portrait' : 'dress'}.jpg" alt="Sample styling photograph"><div class="try-on-overlay ${glasses ? 'glasses' : ring ? 'ring' : p.id === 'nocturne' ? '' : 'other'}" id="try-on-overlay" style="left:${glasses ? 50 : 78}%;top:${glasses ? 26 : 70}%">${fittingArt(p)}</div><span class="scene-note">ILLUSTRATIVE OVERLAY / NO BODY TRACKING</span></div><div class="photo-control secondary"><label for="local-photo">USE YOUR OWN PHOTO</label><input id="local-photo" type="file" accept="image/jpeg,image/png,image/webp" aria-label="Choose a local photo"></div><small>Your photo stays on this page. It is not uploaded or saved.</small>${[['x','Horizontal position',glasses ? 50 : 78,0,100],['y','Vertical position',glasses ? 26 : 70,0,100],['scale','Size',100,40,250],['rotation','Rotation',0,-180,180]].map(([id,label,value,min,max]) => `<label class="field">${label}<input type="range" id="fit-${id}" min="${min}" max="${max}" value="${value}" aria-label="${label}"></label>`).join('')}<p class="error-text" id="photo-error" role="status"></p></div>`);
  const overlay = $('#try-on-overlay'), scene = $('.fitting-scene');
  let dragging = false;
  overlay.addEventListener('pointerdown', (e) => { dragging = true; overlay.setPointerCapture(e.pointerId); });
  overlay.addEventListener('pointerup', () => { dragging = false; });
  overlay.addEventListener('pointercancel', () => { dragging = false; });
  overlay.addEventListener('pointermove', (e) => { if (!dragging) return; const rect = scene.getBoundingClientRect(); $('#fit-x').value = Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100)); $('#fit-y').value = Math.max(0, Math.min(100, (e.clientY - rect.top) / rect.height * 100)); updateFitting(); });
}
function updateFitting() {
  $('#try-on-overlay').style.left = `${$('#fit-x').value}%`; $('#try-on-overlay').style.top = `${$('#fit-y').value}%`;
  $('#try-on-overlay').style.transform = `translate(-50%,-50%) rotate(${$('#fit-rotation').value}deg) scale(${$('#fit-scale').value / 100})`;
}
document.addEventListener('input', (e) => {
  if (e.target.id === 'search') { filters.query = e.target.value; shopResults(); }
  if (e.target.id.startsWith('fit-')) updateFitting();
});
document.addEventListener('change', (e) => {
  if (e.target.id !== 'local-photo') return;
  const file = e.target.files[0]; if (!file) return;
  if (!['image/jpeg','image/png','image/webp'].includes(file.type) || file.size > 12 * 1024 * 1024) { $('#photo-error').textContent = 'Choose a JPG, PNG, or WebP image under 12 MB.'; e.target.value = ''; return; }
  if (photoURL) URL.revokeObjectURL(photoURL);
  photoURL = URL.createObjectURL(file); $('#fitting-photo').src = photoURL; $('#fitting-photo').alt = 'Your local styling photograph'; $('#photo-error').textContent = '';
});
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]'); if (!target || !catalog) return;
  const { action, id } = target.dataset;
  if (action === 'tab') { go({ type: target.dataset.tab }, target.dataset.tab); return; }
  if (['shop','journal','designers'].includes(action)) { go({ type: action }, action); return; }
  if (action === 'back') { const previous = history.pop(); if (previous) { route = previous.route; if (route.type === 'product') { const p = product(route.id); selectedSize = p.sizes[0]; selectedColor = p.colors[0]; } render(); content.scrollTop = previous.scroll; content.focus({ preventScroll: true }); } else go({type: activeTab}); return; }
  if (action === 'product' || action === 'article') { go({ type: action, id }); return; }
  if (action === 'designer') { go({ type: action, name: target.dataset.name }); return; }
  if (action === 'save' || action === 'save-detail') { const isSaved = snapshot.saved.includes(id); snapshot.saved = isSaved ? snapshot.saved.filter((x) => x !== id) : [...snapshot.saved, id]; save(); if (route.type === 'saved') render(); else { target.setAttribute('aria-pressed', String(!isSaved)); target.setAttribute('aria-label', `${isSaved ? 'Save' : 'Unsave'} ${product(id).name}`); } notify(isSaved ? 'Removed from your edit' : 'Saved to your edit'); return; }
  if (action === 'category') { filters.category = target.dataset.category; const scroll = $('.categories').scrollLeft; render(); $('.categories').scrollLeft = scroll; return; }
  if (action === 'clear-filters' || action === 'clear-all') { filters = { ...filters, designer:'All designers', ...(action === 'clear-all' ? { query:'',category:'All',sort:'Curated' } : {}) }; render(); return; }
  if (action === 'filters') { openDialog('Filter & sort', `<div class="sheet-body"><label class="field">Designer<select id="designer-filter">${['All designers', ...catalog.designers.map((d) => d.name)].map((x) => `<option ${filters.designer === x ? 'selected' : ''}>${escape(x)}</option>`).join('')}</select></label><label class="field">Sort by<select id="sort-filter">${['Curated','Price: low to high','Price: high to low','New arrivals'].map((x) => `<option ${filters.sort === x ? 'selected' : ''}>${x}</option>`).join('')}</select></label>${btn('apply-filters','SHOW PIECES','primary')}</div>`); return; }
  if (action === 'apply-filters') { filters.designer = $('#designer-filter').value; filters.sort = $('#sort-filter').value; dialog.close(); render(); return; }
  if (action === 'size' || action === 'color') { if (action === 'size') selectedSize = target.dataset.value; else selectedColor = target.dataset.value; target.parentElement.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === target))); return; }
  if (action === 'add') { snapshot.bag = addToBag(snapshot.bag, product(id), selectedSize, selectedColor); save(); notify('Added to your bag'); return; }
  if (action === 'bag') { go({type:'bag'}); return; }
  if (action === 'quantity') { snapshot.bag = setQuantity(snapshot.bag, target.dataset.line, Number(target.dataset.quantity)); save(); const scroll = content.scrollTop; render(); content.scrollTop = scroll; return; }
  if (action === 'checkout') { if (snapshot.bag.length) go({type:'checkout'}); return; }
  if (action === 'place-order') { if (!snapshot.bag.length) return; const result = placeOrder(snapshot, $('#delivery').value); snapshot = result.snapshot; latestOrder = result.order; save(); go({type:'confirmation'}); return; }
  if (action === 'guide') { guide(); return; }
  if (action === 'orders' || action === 'orders-dialog') { if (dialog.open) dialog.close(); go({type:'orders'}); return; }
  if (action === 'close') { dialog.close(); return; }
  if (action === 'film') { openDialog('How to wear / style film', `<video src="./assets/style-film.mp4" poster="./assets/hero.jpg" controls playsinline aria-label="Tech Noir editorial style film"></video><div class="sheet-body"><h2>Objects. In motion.</h2><p class="body-copy">A 12-second, silent editorial slideshow using the native demonstration’s archive images.</p></div>`); return; }
  if (action === 'zoom') { const p = product(id); openDialog(p.name, `<div class="zoom-viewport"><div class="zoom-picture" id="zoom-picture">${artwork(p)}</div></div><div class="sheet-body"><label class="field">Magnification<input id="zoom-range" type="range" min="100" max="250" value="100" aria-label="Image magnification"></label></div>`); $('#zoom-range').addEventListener('input', (e) => { $('#zoom-picture').style.width = `${e.target.value}%`; }); return; }
  if (action === 'try-on') { tryOn(product(id)); return; }
  if (action === 'reset-confirm') { openDialog('Reset demonstration?', `<div class="sheet-body"><p class="body-copy">This clears the saved pieces, bag, and sample orders in this browser.</p>${btn('reset','CLEAR DEMO DATA','primary')}${btn('close','KEEP EXPLORING')}</div>`); return; }
  if (action === 'reset') { snapshot = emptySnapshot(); save(); dialog.close(); go({type:'discover'},'discover'); notify('Demo reset'); return; }
  if (action === 'retry') load();
});
async function load() {
  try {
    const response = await fetch('./catalog.json'); if (!response.ok) throw new Error('Catalog unavailable');
    catalog = await response.json();
    try { snapshot = restoreSnapshot(JSON.parse(localStorage.getItem(storageKey)), catalog.products); } catch { snapshot = emptySnapshot(); }
    render();
  } catch {
    content.innerHTML = `<div class="loading"><span class="loading-mark">T</span><h2>The collection couldn’t load.</h2><p>Check your connection and try again.</p>${btn('retry','TRY AGAIN')}</div>`;
    // A retry must also work before catalog has loaded.
    content.querySelector('[data-action="retry"]').addEventListener('click', load, { once: true });
  }
}
load();
