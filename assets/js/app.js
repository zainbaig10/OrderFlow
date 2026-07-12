/* ============================================
   EXION OrderFlow — Shared Application JS
   Saudi Kitchen Accessories Edition
   ============================================ */

var CURRENCY = 'SAR';
var VAT_RATE = 15;
var MAX_DISCOUNT = 5;
/* ---- Document Branding (Quotation & Delivery Note) ---- */
/* ---- Document Branding (Quotation & Delivery Note) ---- */
var DOCUMENT_COMPANY = {
  logoTextLeft: 'W',
  logoTextRight: 'W',
  name: 'WALEED MOHAMMED ALSUWAT HOLDING CO.',
  subtitle: 'Holding Company',
  address: 'Bldg. 7041, Fayd Al Samaa St., Ext. 3628, Al Ruwais District, Jeddah 23213, KSA',
  email: 'Sales@alswatlogistics.com',
  website: 'www.alswatlogistics.com',
  crNumber: '7051466428',
  vatNumber: '314190882700003'
};

function applyDocumentBranding() {
  var c = DOCUMENT_COMPANY;
  var imgBase = (window.location.pathname.indexOf('/sales/') !== -1 || window.location.pathname.indexOf('/admin/') !== -1) ? '../assets/img/' : 'assets/img/';

  var boxStyle = 'width:56px;height:56px;background:#F3F4F6;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:800;color:#1E5AA8;flex-shrink:0;';

  function rebuildHeader(header, pfx, docTitle) {
    var numEl = header.querySelector('.' + pfx + '-doc-number');
    var numId = numEl ? numEl.id : '';
    var numText = numEl ? numEl.textContent : '';

    header.innerHTML =
      '<div style="' + boxStyle + '" id="logoLeft_' + pfx + '">' + c.logoTextLeft + '</div>' +
      '<div style="flex:1;text-align:center;min-width:0;">' +
        '<div style="font-size:20px;font-weight:800;color:#0A1628;">' + c.name + '</div>' +
        '<div style="font-size:11px;color:#6B7280;margin-top:2px;">' + c.subtitle + '</div>' +
      '</div>' +
      '<div style="display:flex;align-items:center;gap:16px;flex-shrink:0;">' +
        '<div style="' + boxStyle + '" id="logoRight_' + pfx + '">' + c.logoTextRight + '</div>' +
        '<div style="text-align:right;">' +
          '<div style="font-size:26px;font-weight:800;color:#1E5AA8;letter-spacing:3px;">' + docTitle + '</div>' +
          '<div style="font-size:13px;font-weight:600;color:#374151;margin-top:4px;"' + (numId ? ' id="' + numId + '"' : '') + '>' + numText + '</div>' +
        '</div>' +
      '</div>';

    header.style.cssText = 'display:flex;align-items:center;gap:20px;padding:24px 40px;background:#FFFFFF;';

    // Try loading left logo
    var leftImg = new Image();
    leftImg.onload = function() {
      var el = document.getElementById('logoLeft_' + pfx);
      if (el) {
        el.innerHTML = '';
        el.style.cssText = 'width:auto;height:52px;max-width:120px;object-fit:contain;display:flex;align-items:center;';
        el.appendChild(leftImg);
      }
    };
    leftImg.src = imgBase + 'logo-left.png';

    // Try loading right logo
    var rightImg = new Image();
    rightImg.onload = function() {
      var el = document.getElementById('logoRight_' + pfx);
      if (el) {
        el.innerHTML = '';
        el.style.cssText = 'width:auto;height:52px;max-width:120px;object-fit:contain;display:flex;align-items:center;';
        el.appendChild(rightImg);
      }
    };
    rightImg.src = imgBase + 'logo-right.png';
  }

  document.querySelectorAll('.qt2-header-band').forEach(function(h) { rebuildHeader(h, 'qt2', 'QUOTATION'); });
  document.querySelectorAll('.dn-header-band').forEach(function(h) { rebuildHeader(h, 'dn', 'DELIVERY NOTE'); });

  document.querySelectorAll('.qt2-footer-company, .dn-footer-company').forEach(function(el) {
    el.innerHTML = '<strong>' + c.name + '</strong><br>' + c.address + '<br>Email: ' + c.email + ' · Web: ' + c.website;
  });
  document.querySelectorAll('.qt2-footer-nums, .dn-footer-nums').forEach(function(el) {
    el.innerHTML = '<strong>CR No:</strong> ' + c.crNumber + '<br><strong>VAT No:</strong> ' + c.vatNumber;
  });
}

var CUSTOMERS = [
  { id: 1, company: 'Al Muhaidib Kitchens', contact: 'Khalid Al Muhaidib', phone: '+966 13 812 3456', email: 'khalid@almuhaidib.com.sa', address: 'King Fahd Road, Al Khobar 31952', notes: 'Premium kitchen projects. Net 30 terms.', orders: 22, lastVisit: '2024-12-18', lastSalesperson: 'Sarah Al Rashid' },
  { id: 2, company: 'Raha Kitchen Solutions', contact: 'Faisal Al Ghamdi', phone: '+966 13 823 4567', email: 'faisal@raha-kitchens.sa', address: 'Prince Sultan Road, Dammam 32211', notes: 'Bulk orders for apartment complexes.', orders: 31, lastVisit: '2024-12-17', lastSalesperson: 'Marcus Al Harbi' },
  { id: 3, company: 'Eastern Kitchens Factory', contact: 'Omar Al Dossari', phone: '+966 13 834 5678', email: 'omar@eastern-kitchens.sa', address: 'Industrial Area 3, Dammam 31412', notes: 'Own manufacturing. Requires quality certifications.', orders: 15, lastVisit: '2024-12-14', lastSalesperson: 'Marcus Al Harbi' },
  { id: 4, company: 'Gulf Modular Kitchens', contact: 'Sultan Al Harbi', phone: '+966 13 845 6789', email: 'sultan@gulfmodular.sa', address: 'Corniche Road, Al Khobar 34712', notes: 'Prefers imported European hardware.', orders: 19, lastVisit: '2024-12-15', lastSalesperson: 'Priya Nair' },
  { id: 5, company: 'Al Jazeera Kitchen World', contact: 'Mohammed Al Qahtani', phone: '+966 13 856 7890', email: 'mohammed@aljazeerakitchen.sa', address: 'King Abdullah Street, Al Khobar 34614', notes: 'Price-sensitive. Requests detailed quotations.', orders: 27, lastVisit: '2024-12-11', lastSalesperson: 'Marcus Al Harbi' },
  { id: 6, company: 'Dammam Interior Works', contact: 'Abdullah Al Shamrani', phone: '+966 13 867 8901', email: 'abdullah@dammaminterior.sa', address: 'Al Faisaliyah District, Dammam 32215', notes: 'Interior fit-out company. Regular monthly orders.', orders: 8, lastVisit: '2024-12-10', lastSalesperson: 'Sarah Al Rashid' },
  { id: 7, company: 'Crystal Kitchen Systems', contact: 'Turki Al Otaibi', phone: '+966 13 878 9012', email: 'turki@crystalkitchens.sa', address: 'Shaikh Jaber Street, Al Khobar 34722', notes: 'High-end residential projects only.', orders: 12, lastVisit: '2024-12-12', lastSalesperson: 'Priya Nair' },
  { id: 8, company: 'Al Khobar Kitchen Showroom', contact: 'Ibrahim Al Mutairi', phone: '+966 13 889 0123', email: 'ibrahim@khobarkitchen.sa', address: 'Dhahran Street, Al Khobar 34622', notes: 'Showroom and retail. Small quantity orders.', orders: 34, lastVisit: '2024-12-13', lastSalesperson: 'Sarah Al Rashid' },
  { id: 9, company: 'Saudi Kitchen Supply Co.', contact: 'Ahmed Al Zahrani', phone: '+966 13 890 1234', email: 'ahmed@sdkitchen.sa', address: '3rd Industrial City, Dammam 31413', notes: 'Distributor. Large volume, tight margins.', orders: 41, lastVisit: '2024-12-16', lastSalesperson: 'Sarah Al Rashid' },
  { id: 10, company: 'Royal Kitchen Fittings', contact: 'Bandar Al Subaie', phone: '+966 13 901 2345', email: 'bandar@royalkitchen.sa', address: 'Al Shati District, Dammam 32216', notes: 'New customer since Q3 2024.', orders: 3, lastVisit: '2024-12-09', lastSalesperson: 'Priya Nair' }
];

var PRODUCTS = [
  { id: 1, name: 'Dinner Plate 11"', nameAr: 'طبق عشاء 11 بوصة', sku: 'DP-110', price: 12.50, category: 'Dinner Plates', stock: 'in', frequent: true, image: 'https://placehold.co/400x280/f5f0eb/8b7355?text=Dinner+Plate+11%E2%80%B3' },
  { id: 2, name: 'Deep Plate 9"', nameAr: 'طبق عميق 9 بوصة', sku: 'DP-090', price: 10.00, category: 'Dinner Plates', stock: 'in', frequent: true, image: 'https://placehold.co/400x280/f5f0eb/8b7355?text=Deep+Plate+9%E2%80%B3' },
  { id: 3, name: 'Soup Bowl', nameAr: 'طبق شوربة', sku: 'SB-200', price: 8.50, category: 'Bowls', stock: 'in', frequent: true, image: 'https://placehold.co/400x280/e8f0f5/557788?text=Soup+Bowl' },
  { id: 4, name: 'Serving Bowl', nameAr: 'طبق تقديم كبير', sku: 'SB-300', price: 22.00, category: 'Bowls', stock: 'in', frequent: false, image: 'https://placehold.co/400x280/e8f0f5/557788?text=Serving+Bowl' },
  { id: 5, name: 'Matt Bowl 7"', nameAr: 'طبق مات 7 بوصة', sku: 'MB-210', price: 9.00, category: 'Bowls', stock: 'out', frequent: false, image: 'https://placehold.co/400x280/e8f0f5/557788?text=Matt+Bowl+7%E2%80%B3' },
  { id: 6, name: 'Oval Platter 14"', nameAr: 'طبق بيضاوي 14 بوصة', sku: 'OP-350', price: 28.00, category: 'Platters', stock: 'in', frequent: false, image: 'https://placehold.co/400x280/f0f5f0/558855?text=Oval+Platter+14%E2%80%B3' },
  { id: 7, name: 'Leaf Platter 12"', nameAr: 'طبق ورقة 12 بوصة', sku: 'LP-360', price: 32.00, category: 'Platters', stock: 'low', frequent: false, image: 'https://placehold.co/400x280/f0f5f0/558855?text=Leaf+Platter+12%E2%80%B3' },
  { id: 8, name: 'Serving Plate 10"', nameAr: 'طبق تقديم 10 بوصة', sku: 'SP-320', price: 25.00, category: 'Serving', stock: 'in', frequent: true, image: 'https://placehold.co/400x280/faf5ef/887755?text=Serving+Plate+10%E2%80%B3' },
  { id: 9, name: 'Serving Platter 15"', nameAr: 'طبق تقديم كبير 15 بوصة', sku: 'SPL-380', price: 42.00, category: 'Serving', stock: 'in', frequent: false, image: 'https://placehold.co/400x280/faf5ef/887755?text=Serving+Platter+15%E2%80%B3' },
  { id: 10, name: 'Sauce Bowl Set', nameAr: 'طقم أطباق صوص', sku: 'SBS-160', price: 18.00, category: 'Serving', stock: 'low', frequent: false, image: 'https://placehold.co/400x280/faf5ef/887755?text=Sauce+Bowl+Set' },
  { id: 11, name: 'Round Tray 10"', nameAr: 'صينية دائرية 10 بوصة', sku: 'RT-280', price: 18.00, category: 'Trays', stock: 'in', frequent: true, image: 'https://placehold.co/400x280/f5f0f5/885588?text=Round+Tray+10%E2%80%B3' },
  { id: 12, name: 'Square Tray 10"', nameAr: 'صينية مربعة 10 بوصة', sku: 'ST-290', price: 20.00, category: 'Trays', stock: 'in', frequent: false, image: 'https://placehold.co/400x280/f5f0f5/885588?text=Square+Tray+10%E2%80%B3' },
  { id: 13, name: 'Serving Tray 14"', nameAr: 'صينية تقديم 14 بوصة', sku: 'STR-400', price: 35.00, category: 'Trays', stock: 'low', frequent: false, image: 'https://placehold.co/400x280/f5f0f5/885588?text=Serving+Tray+14%E2%80%B3' },
  { id: 14, name: 'Cup & Saucer Set', nameAr: 'فنجان وصحن', sku: 'CS-150', price: 14.00, category: 'Accessories', stock: 'in', frequent: true, image: 'https://placehold.co/400x280/f5f5f0/777766?text=Cup+%26+Saucer' },
  { id: 15, name: 'Tumbler Glass 300ml', nameAr: 'كأس شفاف 300 مل', sku: 'TG-300', price: 6.50, category: 'Accessories', stock: 'in', frequent: false, image: 'https://placehold.co/400x280/f0f5f5/557777?text=Tumbler+300ml' },
  { id: 16, name: 'Salad Server Set', nameAr: 'طقم سلطات', sku: 'SSS-170', price: 16.00, category: 'Accessories', stock: 'in', frequent: false, image: 'https://placehold.co/400x280/f5f5f0/777766?text=Salad+Server+Set' }
];

var REQUESTS = [
  { id: 'QT-2024-0047', customer: 'Al Muhaidib Kitchens', contact: 'Khalid Al Muhaidib', date: '2024-12-18', salesperson: 'Sarah Al Rashid', status: 'generated', items: 4, total: 312.00, discount: 0, remarks: 'Urgent — client site visit tomorrow' },
  { id: 'QT-2024-0046', customer: 'Raha Kitchen Solutions', contact: 'Faisal Al Ghamdi', date: '2024-12-17', salesperson: 'Marcus Al Harbi', status: 'pending-approval', items: 7, total: 685.00, discount: 8, remarks: 'Customer requested 8% discount on bulk order' },
  { id: 'QT-2024-0045', customer: 'Saudi Kitchen Supply Co.', contact: 'Ahmed Al Zahrani', date: '2024-12-16', salesperson: 'Sarah Al Rashid', status: 'sent', items: 12, total: 1540.00, discount: 3, remarks: 'Quotation sent via WhatsApp' },
  { id: 'QT-2024-0044', customer: 'Gulf Modular Kitchens', contact: 'Sultan Al Harbi', date: '2024-12-15', salesperson: 'Priya Nair', status: 'accepted', items: 3, total: 195.00, discount: 0, remarks: 'Customer accepted at showroom' },
  { id: 'QT-2024-0043', customer: 'Eastern Kitchens Factory', contact: 'Omar Al Dossari', date: '2024-12-14', salesperson: 'Marcus Al Harbi', status: 'completed', items: 5, total: 490.00, discount: 2, remarks: 'Delivered and invoiced' },
  { id: 'QT-2024-0042', customer: 'Al Khobar Kitchen Showroom', contact: 'Ibrahim Al Mutairi', date: '2024-12-13', salesperson: 'Sarah Al Rashid', status: 'completed', items: 6, total: 540.00, discount: 0, remarks: '' },
  { id: 'QT-2024-0041', customer: 'Crystal Kitchen Systems', contact: 'Turki Al Otaibi', date: '2024-12-12', salesperson: 'Priya Nair', status: 'generated', items: 2, total: 95.00, discount: 0, remarks: 'First order from this customer' },
  { id: 'QT-2024-0040', customer: 'Al Jazeera Kitchen World', contact: 'Mohammed Al Qahtani', date: '2024-12-11', salesperson: 'Marcus Al Harbi', status: 'pending-approval', items: 8, total: 875.00, discount: 10, remarks: 'Villa project — customer negotiating hard' },
  { id: 'QT-2024-0039', customer: 'Dammam Interior Works', contact: 'Abdullah Al Shamrani', date: '2024-12-10', salesperson: 'Sarah Al Rashid', status: 'sent', items: 4, total: 415.00, discount: 5, remarks: 'Office fit-out project' },
  { id: 'QT-2024-0038', customer: 'Royal Kitchen Fittings', contact: 'Bandar Al Subaie', date: '2024-12-09', salesperson: 'Priya Nair', status: 'draft', items: 1, total: 120.00, discount: 0, remarks: 'Pending client confirmation on quantity' }
];

var USERS = [
  { id: 1, name: 'Sarah Al Rashid', email: 'sarah@exion.sa', role: 'Sales Manager', status: 'active', lastLogin: '2024-12-18 09:14' },
  { id: 2, name: 'Marcus Al Harbi', email: 'marcus@exion.sa', role: 'Senior Sales', status: 'active', lastLogin: '2024-12-18 08:45' },
  { id: 3, name: 'Priya Nair', email: 'priya@exion.sa', role: 'Sales Executive', status: 'active', lastLogin: '2024-12-17 17:30' },
  { id: 4, name: 'Andrew Teo', email: 'andrew@exion.sa', role: 'Office Manager', status: 'active', lastLogin: '2024-12-18 09:00' },
  { id: 5, name: 'Diana Koh', email: 'diana@exion.sa', role: 'Office Staff', status: 'active', lastLogin: '2024-12-18 08:52' },
  { id: 6, name: 'Rami Al Shammari', email: 'rami@exion.sa', role: 'Sales Executive', status: 'inactive', lastLogin: '2024-11-28 16:10' }
];

var STATUS_LABELS = {
  draft: 'Draft',
  generated: 'Quotation Generated',
  'pending-approval': 'Pending Discount Approval',
  approved: 'Approved — Ready to Send',
  sent: 'Quotation Sent',
  accepted: 'Customer Accepted',
  completed: 'Completed'
};

function getEffectiveStatus(reqId, originalStatus) {
  try {
    var approved = JSON.parse(sessionStorage.getItem('df_approved_quotes') || '[]');
    var rejected = JSON.parse(sessionStorage.getItem('df_rejected_quotes') || '[]');
    if (approved.indexOf(reqId) !== -1) return 'approved';
    if (rejected.indexOf(reqId) !== -1) return 'generated';
  } catch(e) {}
  return originalStatus;
}

function statusBadge(status) {
  var cls = status === 'approved' ? 'approved-ready' : status;
  return '<span class="badge badge-' + cls + '">' + (STATUS_LABELS[status] || status) + '</span>';
}

function stockHTML(stock) {
  if (stock === 'in') return '<div class="stock-in">In Stock</div>';
  if (stock === 'low') return '<div class="stock-low">Low Stock</div>';
  return '<div class="stock-out">Out of Stock</div>';
}

function fmtPrice(amount) {
  return CURRENCY + ' ' + amount.toFixed(2);
}

function fmtDate(dateStr) {
  if (!dateStr) return '—';
  var d = new Date(dateStr);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

/* ---- Cart ---- */
function getCart() { try { return JSON.parse(sessionStorage.getItem('df_cart')) || []; } catch(e) { return []; } }
function setCart(cart) { sessionStorage.setItem('df_cart', JSON.stringify(cart)); }
function addToCart(productId, qty, discount) {
  if (!qty || qty < 1) qty = 1;
  if (typeof discount !== 'number' || discount < 0) discount = 0;
  var p = PRODUCTS.find(function(x) { return x.id === productId; });
  if (p && p.stock === 'out') { showToast('This item is out of stock', 'error'); return; }
  var cart = getCart();
  var existing = cart.find(function(x) { return x.id === productId; });
  if (existing) { existing.qty += qty; existing.discount = discount; } else if (p) { cart.push({ id: p.id, name: p.name, sku: p.sku, price: p.price, qty: qty, discount: discount }); }
  setCart(cart); updateCartBadge(); updateProductsCounter();
  showToast('Item added to cart', 'success');
}
function removeFromCart(productId) { setCart(getCart().filter(function(x) { return x.id !== productId; })); updateCartBadge(); updateProductsCounter(); }
function updateCartQty(productId, delta) {
  var cart = getCart(); var item = cart.find(function(x) { return x.id === productId; });
  if (item) { item.qty += delta; if (item.qty <= 0) { removeFromCart(productId); return; } }
  setCart(cart); updateCartBadge(); updateProductsCounter();
}
function getCartSubtotal() { return getCart().reduce(function(s, i) { return s + (i.price * i.qty); }, 0); }
function getCartDiscountTotal() { return getCart().reduce(function(s, i) { return s + (i.price * i.qty * (i.discount || 0) / 100); }, 0); }
function getCartNet() { return getCartSubtotal() - getCartDiscountTotal(); }
function getCartVAT() { return getCartNet() * (VAT_RATE / 100); }
function getCartGrandTotal() { return getCartNet() + getCartVAT(); }
function getCartCount() { return getCart().reduce(function(s, i) { return s + i.qty; }, 0); }
function getCartMaxDiscount() { var cart = getCart(); if (!cart.length) return 0; return Math.max.apply(null, cart.map(function(i) { return i.discount || 0; })); }
function clearCart() { sessionStorage.removeItem('df_cart'); updateCartBadge(); updateProductsCounter(); }
function updateCartBadge() {
  var badge = document.getElementById('cartBadge');
  if (badge) { var c = getCartCount(); badge.textContent = c; badge.style.display = c > 0 ? 'flex' : 'none'; }
}
function updateProductsCounter() {
  var el = document.getElementById('productsCounter');
  if (el) el.textContent = getCartCount();
}

/* ---- Session ---- */
function setSessionData(key, value) { sessionStorage.setItem('df_' + key, JSON.stringify(value)); }
function getSessionData(key) { try { return JSON.parse(sessionStorage.getItem('df_' + key)); } catch(e) { return null; } }

/* ---- Toast ---- */
function showToast(message, type) {
  type = type || 'info';
  var container = document.querySelector('.toast-container');
  if (!container) { container = document.createElement('div'); container.className = 'toast-container'; document.body.appendChild(container); }
  var icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
  var toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = '<i class="fas ' + (icons[type] || icons.info) + '"></i><span>' + message + '</span>';
  container.appendChild(toast);
  setTimeout(function() { toast.style.animation = 'toastOut 0.3s ease forwards'; setTimeout(function() { toast.remove(); }, 300); }, 3000);
}

/* ---- Sidebar ---- */
function initSidebar() {
  var toggle = document.getElementById('sidebarToggle');
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('sidebarOverlay');
  if (toggle && sidebar) { toggle.addEventListener('click', function() { sidebar.classList.toggle('open'); if (overlay) overlay.classList.toggle('open'); }); }
  if (overlay) { overlay.addEventListener('click', function() { sidebar.classList.remove('open'); overlay.classList.remove('open'); }); }
}

function initActiveNav() {
  var path = window.location.pathname;
  var filename = path.substring(path.lastIndexOf('/') + 1);
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(function(item) {
    if (item.getAttribute('href') === filename) item.classList.add('active'); else item.classList.remove('active');
  });
}

function initNotifications() {
  var btn = document.getElementById('notifBtn');
  var dropdown = document.getElementById('notifDropdown');
  if (btn && dropdown) {
    btn.addEventListener('click', function(e) { e.stopPropagation(); dropdown.classList.toggle('show'); });
    document.addEventListener('click', function() { dropdown.classList.remove('show'); });
    dropdown.addEventListener('click', function(e) { e.stopPropagation(); });
  }
}

function initTabs() {
  document.querySelectorAll('.tabs').forEach(function(tg) {
    tg.querySelectorAll('.tab-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var target = btn.dataset.tab;
        tg.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var container = tg.closest('.card') || tg.parentElement;
        container.querySelectorAll('.tab-content').forEach(function(tc) { tc.classList.remove('active'); });
        var el = container.querySelector('#' + target);
        if (el) el.classList.add('active');
      });
    });
  });
}

function initToggles() { document.querySelectorAll('.toggle').forEach(function(t) { t.addEventListener('click', function() { t.classList.toggle('on'); }); }); }

function initClickableRows() {
  document.querySelectorAll('tr.clickable').forEach(function(row) {
    row.addEventListener('click', function(e) {
      if (e.target.closest('a') || e.target.closest('button')) return;
      var href = row.getAttribute('data-href');
      if (href) window.location.href = href;
    });
  });
}

function handleLogin(e) {
  e.preventDefault();
  var role = document.getElementById('loginRole') ? document.getElementById('loginRole').value : 'sales';
  if (role === 'admin') window.location.href = 'admin/dashboard.html';
  else window.location.href = 'sales/dashboard.html';
}

/* ---- Customer Search ---- */
function initCustomerSearch() {
  var input = document.getElementById('customerSearchInput');
  var list = document.getElementById('customerSearchList');
  if (!input || !list) return;
  input.addEventListener('input', function() {
    var q = input.value.toLowerCase().trim();
    if (q.length < 1) { list.classList.remove('show'); return; }
    var results = CUSTOMERS.filter(function(c) { return c.company.toLowerCase().includes(q) || c.contact.toLowerCase().includes(q) || c.phone.includes(q); });
    if (results.length > 0) {
      list.innerHTML = results.map(function(c) { return '<div class="search-dropdown-item" data-id="' + c.id + '"><div class="name">' + c.company + '</div><div class="detail">' + c.contact + ' · ' + c.phone + '</div></div>'; }).join('');
      list.classList.add('show');
      list.querySelectorAll('.search-dropdown-item').forEach(function(item) {
        item.addEventListener('click', function() { selectCustomer(CUSTOMERS.find(function(c) { return c.id === parseInt(item.dataset.id); })); });
      });
    } else {
      list.innerHTML = '<div class="search-dropdown-empty">No customer found. <a href="#" id="showAddCustomer" style="color:var(--primary-500);font-weight:600;">+ Create New Customer</a></div>';
      list.classList.add('show');
      var addLink = document.getElementById('showAddCustomer');
      if (addLink) addLink.addEventListener('click', function(e) { e.preventDefault(); list.classList.remove('show'); document.getElementById('customerSearchBox').classList.add('hidden'); document.getElementById('addCustomerForm').classList.remove('hidden'); });
    }
  });
  input.addEventListener('focus', function() { if (input.value.trim().length >= 1) input.dispatchEvent(new Event('input')); });
  document.addEventListener('click', function(e) { if (!input.contains(e.target) && !list.contains(e.target)) list.classList.remove('show'); });
}

function selectCustomer(customer) {
  setSessionData('selected_customer', customer);
  var list = document.getElementById('customerSearchList');
  if (list) list.classList.remove('show');
  var input = document.getElementById('customerSearchInput');
  if (input) input.value = '';
  var selected = document.getElementById('selectedCustomer');
  if (selected) {
    selected.classList.remove('hidden');
    selected.innerHTML = '<div style="display:flex;align-items:center;justify-content:space-between;padding:16px;background:var(--success-light);border:1px solid #A7F3D0;border-radius:var(--radius-md);"><div><div style="font-size:15px;font-weight:700;color:var(--success-text);">' + customer.company + '</div><div style="font-size:13px;color:var(--gray-600);margin-top:2px;">' + customer.contact + ' · ' + customer.phone + '</div><div style="font-size:12px;color:var(--gray-500);margin-top:2px;">' + (customer.email || '') + '</div></div><button class="btn btn-sm btn-secondary" onclick="deselectCustomer()">Change</button></div>';
  }
}

function deselectCustomer() {
  sessionStorage.removeItem('df_selected_customer');
  var selected = document.getElementById('selectedCustomer');
  if (selected) { selected.classList.add('hidden'); selected.innerHTML = ''; }
  var searchBox = document.getElementById('customerSearchBox');
  var addForm = document.getElementById('addCustomerForm');
  if (searchBox) searchBox.classList.remove('hidden');
  if (addForm) addForm.classList.add('hidden');
}

function initAddCustomerForm() {
  var form = document.getElementById('newCustomerForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var customer = { id: Date.now(), company: form.querySelector('[name="company"]').value, contact: form.querySelector('[name="contact"]').value, phone: form.querySelector('[name="phone"]').value, email: form.querySelector('[name="email"]').value, address: form.querySelector('[name="address"]').value, notes: form.querySelector('[name="notes"]').value, orders: 0, lastVisit: new Date().toISOString().split('T')[0], lastSalesperson: 'Sarah Al Rashid' };
    selectCustomer(customer);
    showToast('New customer added successfully', 'success');
  });
  var cancelBtn = document.getElementById('cancelAddCustomer');
  if (cancelBtn) cancelBtn.addEventListener('click', function(e) { e.preventDefault(); document.getElementById('customerSearchBox').classList.remove('hidden'); document.getElementById('addCustomerForm').classList.add('hidden'); });
}

function initCustomerTableSearch() {
  var input = document.getElementById('customerTableSearch');
  var noResults = document.getElementById('customerNoResults');
  if (!input) return;
  input.addEventListener('input', function() {
    var q = input.value.toLowerCase().trim();
    var rows = document.querySelectorAll('#customerTableBody tr');
    var visible = 0;
    rows.forEach(function(row) { if (row.textContent.toLowerCase().includes(q)) { row.style.display = ''; visible++; } else { row.style.display = 'none'; } });
    if (noResults) noResults.style.display = (visible === 0 && q.length > 0) ? 'block' : 'none';
  });
}

function initVisitFields() {
  var now = new Date();
  var dateEl = document.getElementById('visitDate');
  var timeEl = document.getElementById('visitTime');
  if (dateEl) dateEl.value = now.toISOString().split('T')[0];
  if (timeEl) timeEl.value = now.toTimeString().substring(0, 5);
}

/* ---- Product Catalog ---- */
function initProductCatalog() {
  var grid = document.getElementById('productGrid');
  if (!grid) return;
  var activeCategory = 'All';
  var sortMode = 'name-asc';

  function renderProducts(filter, category, sort) {
    filter = filter || ''; category = category || 'All'; sort = sort || 'name-asc';
    var filtered = PRODUCTS.slice();
    if (category !== 'All') filtered = filtered.filter(function(p) { return p.category === category; });
    if (filter) filtered = filtered.filter(function(p) { return p.name.toLowerCase().includes(filter.toLowerCase()) || p.sku.toLowerCase().includes(filter.toLowerCase()) || (p.nameAr || '').includes(filter); });
    if (sort === 'name-asc') filtered.sort(function(a, b) { return a.name.localeCompare(b.name); });
    else if (sort === 'name-desc') filtered.sort(function(a, b) { return b.name.localeCompare(a.name); });
    else if (sort === 'price-asc') filtered.sort(function(a, b) { return a.price - b.price; });
    else if (sort === 'price-desc') filtered.sort(function(a, b) { return b.price - a.price; });
    if (filtered.length === 0) { grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1;"><i class="fas fa-box-open"></i><h3>No products found</h3><p>Try adjusting your search or filter.</p></div>'; return; }
    grid.innerHTML = filtered.map(function(p) {
      return '<div class="product-card">' +
        '<div class="product-card-img"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy"></div>' +
        '<div class="product-card-body">' +
          '<div class="product-card-name">' + p.name + '</div>' +
          '<div class="pc-name-ar" dir="rtl">' + (p.nameAr || '') + '</div>' +
          '<div class="product-card-sku">SKU: ' + p.sku + '</div>' +
          '<div style="margin-bottom:6px;"><span class="chip" style="pointer-events:none;font-size:10px;padding:2px 10px;">' + p.category + '</span></div>' +
          '<div class="product-card-price">' + fmtPrice(p.price) + '</div>' +
          '<div class="product-card-stock">' + stockHTML(p.stock) + '</div>' +
          '<div class="product-card-discount"><label>Discount</label><input type="number" value="0" min="0" max="100" class="pc-discount-input" data-pid="' + p.id + '"><span>%</span></div>' +
          '<div class="product-card-footer">' +
            '<div class="product-card-qty"><button onclick="this.nextElementSibling.value=Math.max(1,parseInt(this.nextElementSibling.value||1)-1)">−</button><input type="number" value="1" min="1" max="999" class="pc-qty-input" data-pid="' + p.id + '"><button onclick="this.previousElementSibling.value=Math.min(999,parseInt(this.previousElementSibling.value||1)+1)">+</button></div>' +
            '<button class="product-card-add" onclick="addToCart(' + p.id + ',parseInt(this.closest(\'.product-card\').querySelector(\'.pc-qty-input\').value||1),parseFloat(this.closest(\'.product-card\').querySelector(\'.pc-discount-input\').value)||0)">Add</button>' +
          '</div>' +
        '</div></div>';
    }).join('');
  }

  var searchInput = document.getElementById('productSearch');
  if (searchInput) searchInput.addEventListener('input', function() { renderProducts(searchInput.value, activeCategory, sortMode); });
  var sortSelect = document.getElementById('productSort');
  if (sortSelect) sortSelect.addEventListener('change', function() { sortMode = sortSelect.value; renderProducts(searchInput ? searchInput.value : '', activeCategory, sortMode); });
  document.querySelectorAll('.chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      document.querySelectorAll('.chip').forEach(function(c) { c.classList.remove('active'); });
      chip.classList.add('active');
      activeCategory = chip.dataset.category;
      renderProducts(searchInput ? searchInput.value : '', activeCategory, sortMode);
    });
  });
  renderProducts('', 'All', 'name-asc');
  updateProductsCounter();
}

/* ---- Cart Page ---- */
function initCartPage() { renderCart(); renderCartCustomer(); }
function renderCartCustomer() {
  var el = document.getElementById('cartCustomerSummary');
  if (!el) return;
  var customer = getSessionData('selected_customer');
  if (customer) {
    var initials = customer.company.split(' ').map(function(w) { return w[0]; }).join('').substring(0, 2).toUpperCase();
    el.innerHTML = '<div class="ccs-avatar">' + initials + '</div><div class="ccs-info"><div class="ccs-name">' + customer.company + '</div><div class="ccs-detail">' + customer.contact + ' · ' + customer.phone + '</div></div><a href="new-order.html" class="btn btn-sm btn-secondary" style="margin-left:auto;">Change</a>';
    el.style.display = 'flex';
  } else { el.style.display = 'none'; }
}
function renderCart() {
  var container = document.getElementById('cartItems');
  var countEl = document.getElementById('cartCount');
  var emptyEl = document.getElementById('cartEmpty');
  var cartContent = document.getElementById('cartContent');
  if (!container) return;
  var cart = getCart();
  if (cart.length === 0) { if (emptyEl) emptyEl.classList.remove('hidden'); if (cartContent) cartContent.classList.add('hidden'); return; }
  if (emptyEl) emptyEl.classList.add('hidden');
  if (cartContent) cartContent.classList.remove('hidden');
  container.innerHTML = cart.map(function(item) {
    var discountLabel = item.discount > 0 ? '<div class="cart-item-discount">' + item.discount + '% discount</div>' : '';
    var lineTotal = item.price * item.qty * (1 - (item.discount || 0) / 100);
    return '<div class="cart-item"><div class="cart-item-info"><div class="cart-item-name">' + item.name + '</div><div class="cart-item-sku">SKU: ' + item.sku + ' · ' + fmtPrice(item.price) + ' each</div>' + discountLabel + '</div><div class="qty-control"><button class="qty-btn" onclick="updateCartQty(' + item.id + ',-1);renderCart();"><i class="fas fa-minus"></i></button><div class="qty-value">' + item.qty + '</div><button class="qty-btn" onclick="updateCartQty(' + item.id + ',1);renderCart();"><i class="fas fa-plus"></i></button></div><div class="cart-item-price">' + fmtPrice(lineTotal) + '</div><button class="cart-item-remove" onclick="removeFromCart(' + item.id + ');renderCart();"><i class="fas fa-trash-alt"></i></button></div>';
  }).join('');
  if (countEl) countEl.textContent = cart.reduce(function(s, i) { return s + i.qty; }, 0) + ' item(s)';
  renderCartSummary();
}
function renderCartSummary() {
  var el = document.getElementById('cartSummaryRows');
  if (!el) return;
  var subtotal = getCartSubtotal();
  var discountTotal = getCartDiscountTotal();
  var net = getCartNet();
  var vat = getCartVAT();
  var grand = getCartGrandTotal();
  el.innerHTML =
    '<div class="cart-summary-row"><span>Subtotal</span><span class="font-bold">' + fmtPrice(subtotal) + '</span></div>' +
    '<div class="cart-summary-row"><span>Discount</span><span class="text-danger">-' + fmtPrice(discountTotal) + '</span></div>' +
    '<div class="cart-summary-row"><span>Net Amount</span><span class="font-bold">' + fmtPrice(net) + '</span></div>' +
    '<div class="cart-summary-row"><span>VAT (' + VAT_RATE + '%)</span><span>' + fmtPrice(vat) + '</span></div>' +
    '<div class="cart-summary-row total"><span>Grand Total</span><span>' + fmtPrice(grand) + '</span></div>';
}

/* ---- Review / Generate Quotation Page ---- */
function initReviewPage() {
  var customer = getSessionData('selected_customer');
  var custEl = document.getElementById('reviewCustomer');
  if (custEl && customer) {
    custEl.innerHTML = '<div class="detail-value" style="font-size:16px;">' + customer.company + '</div><div style="font-size:13px;color:var(--gray-500);margin-top:4px;">' + customer.contact + ' · ' + customer.phone + '</div><div style="font-size:13px;color:var(--gray-500);">' + (customer.email || '') + '</div>' + (customer.address ? '<div style="font-size:13px;color:var(--gray-500);">' + customer.address + '</div>' : '');
  }
  var itemsEl = document.getElementById('reviewItems');
  var cart = getCart();
  if (itemsEl && cart.length > 0) {
    itemsEl.innerHTML = cart.map(function(item, idx) {
      var lineTotal = item.price * item.qty * (1 - (item.discount || 0) / 100);
      var discountCol = item.discount > 0 ? '<td class="text-right text-warning">' + item.discount + '%</td>' : '<td class="text-right text-muted">—</td>';
      return '<tr><td>' + (idx + 1) + '</td><td><strong>' + item.name + '</strong><br><span class="text-muted" style="font-size:12px;">SKU: ' + item.sku + '</span></td><td class="text-right">' + item.qty + '</td><td class="text-right">' + fmtPrice(item.price) + '</td>' + discountCol + '<td class="text-right font-bold">' + fmtPrice(lineTotal) + '</td></tr>';
    }).join('');
  }
  renderReviewSummary();
  renderDiscountWarning();
  var remarksEl = document.getElementById('reviewRemarks');
  var savedRemarks = getSessionData('order_remarks');
  if (remarksEl && savedRemarks) remarksEl.textContent = savedRemarks;
  renderStatusFlow('generated');
}

function renderReviewSummary() {
  var el = document.getElementById('reviewSummaryRows');
  if (!el) return;
  var subtotal = getCartSubtotal();
  var discountTotal = getCartDiscountTotal();
  var net = getCartNet();
  var vat = getCartVAT();
  var grand = getCartGrandTotal();
  el.innerHTML =
    '<div class="cart-summary-row"><span>Subtotal</span><span class="font-bold">' + fmtPrice(subtotal) + '</span></div>' +
    '<div class="cart-summary-row"><span>Discount</span><span class="text-danger">-' + fmtPrice(discountTotal) + '</span></div>' +
    '<div class="cart-summary-row"><span>Net Amount</span><span class="font-bold">' + fmtPrice(net) + '</span></div>' +
    '<div class="cart-summary-row"><span>VAT (' + VAT_RATE + '%)</span><span>' + fmtPrice(vat) + '</span></div>' +
    '<div class="cart-summary-row total"><span>Grand Total</span><span>' + fmtPrice(grand) + '</span></div>';
  var totalEl = document.getElementById('reviewTotal');
  if (totalEl) totalEl.textContent = fmtPrice(grand);
}

function renderDiscountWarning() {
  var warningEl = document.getElementById('discountWarning');
  var normalActions = document.getElementById('normalActions');
  var approvalActions = document.getElementById('approvalActions');
  var maxDisc = getCartMaxDiscount();
  if (!warningEl) return;
  if (maxDisc > MAX_DISCOUNT) {
    warningEl.classList.remove('hidden');
    warningEl.innerHTML = '<i class="fas fa-exclamation-triangle"></i><div><div class="dw-text">Discount exceeds your approval limit.</div><div class="dw-desc">Maximum allowed discount is ' + MAX_DISCOUNT + '%. This quotation requires admin approval before sending. Status will be set to: Pending Discount Approval.</div></div>';
    if (normalActions) normalActions.classList.add('hidden');
    if (approvalActions) approvalActions.classList.remove('hidden');
  } else {
    warningEl.classList.add('hidden');
    if (normalActions) normalActions.classList.remove('hidden');
    if (approvalActions) approvalActions.classList.add('hidden');
  }
}

function generateQuotation() {
  setSessionData('quotation_data', {
    customer: getSessionData('selected_customer'),
    items: getCart(),
    subtotal: getCartSubtotal(),
    discountTotal: getCartDiscountTotal(),
    net: getCartNet(),
    vat: getCartVAT(),
    grandTotal: getCartGrandTotal(),
    maxDiscount: getCartMaxDiscount(),
    remarks: getSessionData('order_remarks'),
    date: new Date().toISOString()
  });
  var reviewSection = document.getElementById('reviewSection');
  var previewSection = document.getElementById('previewSection');
  if (reviewSection && previewSection) {
    reviewSection.classList.add('hidden');
    previewSection.classList.remove('hidden');
    loadSalesQuotationPreview();
    window.scrollTo(0, 0);
    setTimeout(function() { applyDocumentBranding(); }, 150);
  } else {
    showToast('Quotation generated successfully!', 'success');
    setTimeout(function() { window.location.href = 'my-requests.html'; }, 800);
  }
}

function submitForApproval() {
  setSessionData('quotation_data', {
    customer: getSessionData('selected_customer'),
    items: getCart(),
    subtotal: getCartSubtotal(),
    discountTotal: getCartDiscountTotal(),
    net: getCartNet(),
    vat: getCartVAT(),
    grandTotal: getCartGrandTotal(),
    maxDiscount: getCartMaxDiscount(),
    remarks: getSessionData('order_remarks'),
    date: new Date().toISOString()
  });
  showToast('Quotation submitted for discount approval', 'info');
  clearCart(); sessionStorage.removeItem('df_selected_customer'); sessionStorage.removeItem('df_order_remarks'); sessionStorage.removeItem('df_visit_purpose');
  setTimeout(function() { window.location.href = 'my-requests.html'; }, 1000);
}

function sendQuotationWhatsApp() {
  showToast('Opening WhatsApp...', 'info');
  setTimeout(function() { showToast('Quotation PDF sent via WhatsApp (simulated)', 'success'); }, 1500);
  setTimeout(function() { window.location.href = 'my-requests.html'; }, 2500);
}

function loadSalesQuotationPreview() {
  var data = getSessionData('quotation_data');
  if (!data) return;
  var el = function(id) { return document.getElementById(id); };
  var qtNum = 'QT-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 9000) + 1000);
  if (el('sqpNumber')) el('sqpNumber').textContent = qtNum;
  if (el('sqpDate')) el('sqpDate').textContent = new Date().toLocaleDateString('en-SA', { year: 'numeric', month: 'long', day: 'numeric' });
  var validUntil = new Date(); validUntil.setDate(validUntil.getDate() + 30);
  if (el('sqpValidity')) el('sqpValidity').textContent = validUntil.toLocaleDateString('en-SA', { year: 'numeric', month: 'long', day: 'numeric' });
  if (el('sqpPayment')) el('sqpPayment').textContent = 'Net 30';
  if (data.customer) {
    if (el('sqpBillCompany')) el('sqpBillCompany').textContent = data.customer.company;
    if (el('sqpBillContact')) el('sqpBillContact').textContent = data.customer.contact;
    if (el('sqpBillAddress')) el('sqpBillAddress').textContent = data.customer.address || '—';
    if (el('sqpBillPhone')) el('sqpBillPhone').textContent = 'Tel: ' + data.customer.phone;
    if (el('sqpBillEmail')) el('sqpBillEmail').textContent = 'Email: ' + (data.customer.email || '—');
  }
  var itemsEl = el('sqpItems');
  if (itemsEl && data.items) {
    itemsEl.innerHTML = data.items.map(function(item, i) {
      var lineTotal = item.price * item.qty * (1 - (item.discount || 0) / 100);
      var discCol = item.discount > 0 ? '<td class="text-right">' + item.discount + '%</td>' : '<td class="text-right">—</td>';
      return '<tr><td>' + (i + 1) + '</td><td>' + item.name + '</td><td class="text-right">' + item.qty + '</td><td class="text-right">' + fmtPrice(item.price) + '</td>' + discCol + '<td class="text-right">' + fmtPrice(lineTotal) + '</td></tr>';
    }).join('');
  }
  if (el('sqpSubtotal')) el('sqpSubtotal').textContent = fmtPrice(data.subtotal);
  if (el('sqpDiscount')) {
    el('sqpDiscount').textContent = '-' + fmtPrice(data.discountTotal);
    var row = el('sqpDiscount').closest('.qp-totals-row');
    if (row) row.style.display = data.discountTotal > 0 ? 'flex' : 'none';
  }
  if (el('sqpTax')) el('sqpTax').textContent = fmtPrice(data.vat);
  if (el('sqpGrand')) el('sqpGrand').textContent = fmtPrice(data.grandTotal);
}

/* ---- Status Flow ---- */
function renderStatusFlow(status) {
  var el = document.getElementById('statusFlow');
  if (!el) return;
  var hasApproval = (status === 'pending-approval' || status === 'approved');
  var steps, order;
  if (hasApproval) {
    steps = ['Draft', 'Pending Approval', 'Approved', 'Quotation Sent', 'Customer Accepted', 'Completed'];
    order = { draft: 0, 'pending-approval': 1, approved: 2, sent: 3, accepted: 4, completed: 5 };
  } else {
    steps = ['Draft', 'Quotation Generated', 'Quotation Sent', 'Customer Accepted', 'Completed'];
    order = { draft: 0, generated: 1, sent: 2, accepted: 3, completed: 4 };
  }
  var current = order[status] !== undefined ? order[status] : 0;
  var html = '';
  steps.forEach(function(s, i) {
    var cls = i < current ? 'done' : (i === current ? 'active' : '');
    html += '<div class="status-flow-step ' + cls + '"><div class="sf-dot"></div><span class="sf-label">' + s + '</span></div>';
    if (i < steps.length - 1) html += '<span class="status-flow-arrow"><i class="fas fa-chevron-right"></i></span>';
  });
  el.innerHTML = html;
}

/* ---- Timeline ---- */
function renderTimeline(status) {
  var el = document.getElementById('requestTimeline');
  if (!el) return;
  var hasApproval = (status === 'pending-approval' || status === 'approved');
  var items, order;
  if (hasApproval) {
    items = [
      { label: 'Draft Created', desc: 'Quotation draft created by salesperson', icon: 'fa-file' },
      { label: 'Pending Approval', desc: 'Awaiting admin discount approval', icon: 'fa-clock' },
      { label: 'Approved', desc: 'Discount approved by admin', icon: 'fa-check-circle' },
      { label: 'Quotation Sent', desc: 'Quotation sent to customer', icon: 'fa-envelope' },
      { label: 'Customer Accepted', desc: 'Customer accepted the quotation', icon: 'fa-check-double' },
      { label: 'Completed', desc: 'Order delivered and closed', icon: 'fa-check' }
    ];
    order = { draft: 0, 'pending-approval': 1, approved: 2, sent: 3, accepted: 4, completed: 5 };
  } else {
    items = [
      { label: 'Draft Created', desc: 'Quotation draft created by salesperson', icon: 'fa-file' },
      { label: 'Quotation Generated', desc: 'Quotation generated and ready to send', icon: 'fa-file-invoice' },
      { label: 'Quotation Sent', desc: 'Quotation sent to customer via WhatsApp', icon: 'fa-paper-plane' },
      { label: 'Customer Accepted', desc: 'Customer accepted the quotation', icon: 'fa-check-double' },
      { label: 'Completed', desc: 'Order delivered and closed', icon: 'fa-check' }
    ];
    order = { draft: 0, generated: 1, sent: 2, accepted: 3, completed: 4 };
  }
  var current = order[status] !== undefined ? order[status] : 0;
  var times = ['18 Dec 2024, 09:14 AM', '18 Dec 2024, 09:15 AM', '—', '—', '—', '—'];
  var html = '';
  items.forEach(function(item, i) {
    var cls = i < current ? 'completed' : (i === current ? 'active' : 'pending');
    var iconHtml = i < current ? '<i class="fas fa-check"></i>' : (i === current ? '<i class="fas ' + item.icon + '"></i>' : '');
    html += '<div class="timeline-item ' + cls + '"><div class="timeline-dot ' + cls + '">' + iconHtml + '</div><div class="timeline-label">' + item.label + '</div><div class="timeline-time">' + (i <= current ? (times[i] || '—') : 'Pending') + '</div><div class="timeline-desc">' + item.desc + '</div></div>';
  });
  el.innerHTML = html;
}

/* ---- Sales Quotation Details ---- */
function loadSalesQuotationDetails() {
  var params = new URLSearchParams(window.location.search);
  var reqId = params.get('id') || 'QT-2024-0047';
  var req = REQUESTS.find(function(r) { return r.id === reqId; }) || REQUESTS[0];
  req.status = getEffectiveStatus(req.id, req.status);
  var customer = CUSTOMERS.find(function(c) { return c.company === req.customer; }) || CUSTOMERS[0];
  var el = function(id) { return document.getElementById(id); };
  if (el('srdId')) el('srdId').textContent = req.id;
  if (el('srdDate')) el('srdDate').textContent = fmtDate(req.date);
  if (el('srdSalesperson')) el('srdSalesperson').textContent = req.salesperson;
  if (el('srdStatus')) el('srdStatus').innerHTML = statusBadge(req.status);
  if (el('srdDiscount')) el('srdDiscount').textContent = req.discount > 0 ? req.discount + '%' : 'None';
  if (el('srdCustCompany')) el('srdCustCompany').textContent = customer.company;
  if (el('srdCustContact')) el('srdCustContact').textContent = customer.contact;
  if (el('srdCustPhone')) el('srdCustPhone').textContent = customer.phone;
  if (el('srdCustEmail')) el('srdCustEmail').textContent = customer.email;
  if (el('srdRemarks')) el('srdRemarks').textContent = req.remarks || '—';
  renderTimeline(req.status);
  renderStatusFlow(req.status);
  var items = PRODUCTS.slice(0, req.items);
  var itemsEl = el('srdItems');
  if (itemsEl) {
    var origSubtotal = 0;
    itemsEl.innerHTML = items.map(function(p, i) {
      var qty = [2, 1, 3, 5, 1, 2, 4, 1, 2, 3][i % 10];
      var lineTotal = p.price * qty * (1 - (req.discount || 0) / 100);
      origSubtotal += p.price * qty;
      var discCol = req.discount > 0 ? '<td class="text-right text-warning">' + req.discount + '%</td>' : '<td class="text-right text-muted">—</td>';
      return '<tr><td>' + (i + 1) + '</td><td><strong>' + p.name + '</strong><br><span class="text-muted" style="font-size:12px;">' + p.sku + '</span></td><td class="text-right">' + qty + '</td><td class="text-right">' + fmtPrice(p.price) + '</td>' + discCol + '<td class="text-right font-bold">' + fmtPrice(lineTotal) + '</td></tr>';
    }).join('');
    var discountAmt = origSubtotal * (req.discount || 0) / 100;
    var net = origSubtotal - discountAmt;
    var vat = net * (VAT_RATE / 100);
    var grand = net + vat;
    if (el('srdSummaryRows')) {
      el('srdSummaryRows').innerHTML =
        '<div class="cart-summary-row"><span>Subtotal</span><span class="font-bold">' + fmtPrice(origSubtotal) + '</span></div>' +
        (req.discount > 0 ? '<div class="cart-summary-row"><span>Discount (' + req.discount + '%)</span><span class="text-danger">-' + fmtPrice(discountAmt) + '</span></div>' : '') +
        '<div class="cart-summary-row"><span>VAT (' + VAT_RATE + '%)</span><span>' + fmtPrice(vat) + '</span></div>' +
        '<div class="cart-summary-row total"><span>Grand Total</span><span>' + fmtPrice(grand) + '</span></div>';
    }
  }
  var whatsappBtn = el('srdWhatsAppBtn');
  if (whatsappBtn) {
    if (req.status === 'generated' || req.status === 'approved') { whatsappBtn.style.display = ''; }
    else { whatsappBtn.style.display = 'none'; }
  }
  var pendingMsg = el('srdPendingMsg');
  if (pendingMsg) {
    if (req.status === 'pending-approval') { pendingMsg.classList.remove('hidden'); }
    else { pendingMsg.classList.add('hidden'); }
  }
}

/* ---- Admin Quotation Details ---- */
function loadAdminQuotationDetails() {
  var params = new URLSearchParams(window.location.search);
  var reqId = params.get('id') || 'QT-2024-0047';
  var req = REQUESTS.find(function(r) { return r.id === reqId; }) || REQUESTS[0];
  req.status = getEffectiveStatus(req.id, req.status);
  var customer = CUSTOMERS.find(function(c) { return c.company === req.customer; }) || CUSTOMERS[0];
  var el = function(id) { return document.getElementById(id); };
  if (el('reqId')) el('reqId').textContent = req.id;
  if (el('reqId2')) el('reqId2').textContent = req.id;
  if (el('reqDate')) el('reqDate').textContent = fmtDate(req.date);
  if (el('reqSalesperson')) el('reqSalesperson').textContent = req.salesperson;
  if (el('reqStatus')) el('reqStatus').innerHTML = statusBadge(req.status);
  if (el('reqDiscount')) el('reqDiscount').textContent = req.discount > 0 ? req.discount + '%' : 'None';
  if (el('custCompany')) el('custCompany').textContent = customer.company;
  if (el('custContact')) el('custContact').textContent = customer.contact;
  if (el('custPhone')) el('custPhone').textContent = customer.phone;
  if (el('custEmail')) el('custEmail').textContent = customer.email;
  if (el('custAddress')) el('custAddress').textContent = customer.address || '—';
  if (el('reqRemarks')) el('reqRemarks').textContent = req.remarks || '—';
  renderTimeline(req.status);
  renderStatusFlow(req.status);
  var items = PRODUCTS.slice(0, req.items);
  var itemsEl = el('reqItems');
  if (itemsEl) {
    var origSubtotal = 0;
    itemsEl.innerHTML = items.map(function(p, i) {
      var qty = [2, 1, 3, 5, 1, 2, 4, 1, 2, 3][i % 10];
      var lineTotal = p.price * qty * (1 - (req.discount || 0) / 100);
      origSubtotal += p.price * qty;
      var discCol = req.discount > 0 ? '<td class="text-right text-warning">' + req.discount + '%</td>' : '<td class="text-right text-muted">—</td>';
      return '<tr><td>' + (i + 1) + '</td><td><strong>' + p.name + '</strong><br><span class="text-muted" style="font-size:12px;">' + p.sku + '</span></td><td class="text-right">' + qty + '</td><td class="text-right">' + fmtPrice(p.price) + '</td>' + discCol + '<td class="text-right font-bold">' + fmtPrice(lineTotal) + '</td></tr>';
    }).join('');
    var discountAmt = origSubtotal * (req.discount || 0) / 100;
    var net = origSubtotal - discountAmt;
    var vat = net * (VAT_RATE / 100);
    var grand = net + vat;
    if (el('reqSummaryRows')) {
      el('reqSummaryRows').innerHTML =
        '<div class="cart-summary-row"><span>Subtotal</span><span class="font-bold">' + fmtPrice(origSubtotal) + '</span></div>' +
        (req.discount > 0 ? '<div class="cart-summary-row"><span>Discount (' + req.discount + '%)</span><span class="text-danger">-' + fmtPrice(discountAmt) + '</span></div>' : '') +
        '<div class="cart-summary-row"><span>VAT (' + VAT_RATE + '%)</span><span>' + fmtPrice(vat) + '</span></div>' +
        '<div class="cart-summary-row total"><span>Grand Total</span><span>' + fmtPrice(grand) + '</span></div>';
    }
  }
  setSessionData('current_request', Object.assign({}, req, { customer: customer, items: items }));
  /* Admin approval actions */
  var approvalSection = el('adminApprovalSection');
  if (approvalSection) {
    var isRejected = false;
    try { var rejected = JSON.parse(sessionStorage.getItem('df_rejected_quotes') || '[]'); isRejected = rejected.indexOf(req.id) !== -1; } catch(e) {}
    if (req.status === 'pending-approval' && !isRejected) { approvalSection.classList.remove('hidden'); }
    else { approvalSection.classList.add('hidden'); }
  }
}

function approveDiscount() {
  var req = getSessionData('current_request');
  if (req) {
    var approved = JSON.parse(sessionStorage.getItem('df_approved_quotes') || '[]');
    if (approved.indexOf(req.id) === -1) approved.push(req.id);
    sessionStorage.setItem('df_approved_quotes', JSON.stringify(approved));
  }
  showToast('Discount approved successfully', 'success');
  setTimeout(function() { window.location.href = 'requests.html'; }, 1000);
}

function rejectDiscount() {
  var req = getSessionData('current_request');
  if (req) {
    var rejected = JSON.parse(sessionStorage.getItem('df_rejected_quotes') || '[]');
    if (rejected.indexOf(req.id) === -1) rejected.push(req.id);
    sessionStorage.setItem('df_rejected_quotes', JSON.stringify(rejected));
  }
  showToast('Discount rejected. Salesperson has been notified.', 'error');
  setTimeout(function() { window.location.href = 'requests.html'; }, 1000);
}
/* ---- Admin Quotation Form ---- */
function initQuotationForm() {
  var req = getSessionData('current_request');
  if (!req) return;
  var el = function(id) { return document.getElementById(id); };
  if (el('qReqId')) el('qReqId').textContent = req.id;
  if (el('qCustomer')) el('qCustomer').textContent = req.customer.company || req.customer;
  var today = new Date();
  if (el('qDate')) el('qDate').value = today.toISOString().split('T')[0];
  var validUntil = new Date(today); validUntil.setDate(validUntil.getDate() + 30);
  if (el('qValidity')) el('qValidity').value = validUntil.toISOString().split('T')[0];
  if (el('qRef')) el('qRef').value = 'QT-' + today.getFullYear() + '-' + String(Math.floor(Math.random() * 9000) + 1000);
  if (el('qTax')) el('qTax').value = VAT_RATE;
  if (el('qDiscount')) el('qDiscount').value = req.discount || 0;
  var itemsEl = el('qItems');
  if (itemsEl && req.items) {
    var runningTotal = 0;
    itemsEl.innerHTML = req.items.map(function(p, i) {
      var qty = [2, 1, 3, 5, 1, 2, 4, 1, 2, 3][i % 10];
      var lineTotal = p.price * qty; runningTotal += lineTotal;
      return '<tr><td>' + (i + 1) + '</td><td>' + p.name + '<br><span class="text-muted" style="font-size:12px;">' + p.sku + '</span></td><td class="text-right">' + qty + '</td><td class="text-right">' + fmtPrice(p.price) + '</td><td class="text-right font-bold">' + fmtPrice(lineTotal) + '</td></tr>';
    }).join('');
    if (el('qSubtotal')) el('qSubtotal').textContent = fmtPrice(runningTotal);
    setSessionData('quotation_subtotal', runningTotal);
  }
  updateQuotationTotals();
}

function updateQuotationTotals() {
  var subtotal = getSessionData('quotation_subtotal') || 0;
  var discount = parseFloat(document.getElementById('qDiscount') ? document.getElementById('qDiscount').value : 0) || 0;
  var tax = parseFloat(document.getElementById('qTax') ? document.getElementById('qTax').value : VAT_RATE) || VAT_RATE;
  var discountAmt = subtotal * (discount / 100);
  var afterDiscount = subtotal - discountAmt;
  var taxAmt = afterDiscount * (tax / 100);
  var grand = afterDiscount + taxAmt;
  var el = function(id) { return document.getElementById(id); };
  if (el('qDiscountAmt')) el('qDiscountAmt').textContent = '-' + fmtPrice(discountAmt);
  if (el('qTaxAmt')) el('qTaxAmt').textContent = fmtPrice(taxAmt);
  if (el('qGrandTotal')) el('qGrandTotal').textContent = fmtPrice(grand);
}

function saveQuotationDraft() { showToast('Quotation saved as draft', 'success'); }
function sendQuotationDirect() { showToast('Quotation sent to customer', 'success'); setTimeout(function() { window.location.href = 'requests.html'; }, 1000); }

/* ---- Admin Quotation Preview ---- */
function loadQuotationPreview() {
  var req = getSessionData('current_request');
  if (!req) return;
  var el = function(id) { return document.getElementById(id); };
  if (el('qpNumber')) el('qpNumber').textContent = document.getElementById('qRef') ? document.getElementById('qRef').value : 'QT-2024-1234';
  if (el('qpDate')) el('qpDate').textContent = new Date().toLocaleDateString('en-SA', { year: 'numeric', month: 'long', day: 'numeric' });
  if (el('qpValidity')) el('qpValidity').textContent = document.getElementById('qValidity') ? document.getElementById('qValidity').value : '2025-01-18';
  if (el('qpPayment')) el('qpPayment').textContent = document.getElementById('qPayment') ? document.getElementById('qPayment').value : 'Net 30';
  var cust = req.customer;
  if (typeof cust === 'object') {
    if (el('qpBillCompany')) el('qpBillCompany').textContent = cust.company;
    if (el('qpBillContact')) el('qpBillContact').textContent = cust.contact;
    if (el('qpBillAddress')) el('qpBillAddress').textContent = cust.address || '—';
    if (el('qpBillPhone')) el('qpBillPhone').textContent = 'Tel: ' + cust.phone;
    if (el('qpBillEmail')) el('qpBillEmail').textContent = 'Email: ' + (cust.email || '—');
  }
  var itemsEl = el('qpItems');
  if (itemsEl && req.items) {
    var runningTotal = 0;
    itemsEl.innerHTML = req.items.map(function(p, i) {
      var qty = [2, 1, 3, 5, 1, 2, 4, 1, 2, 3][i % 10];
      var lineTotal = p.price * qty; runningTotal += lineTotal;
      return '<tr><td>' + (i + 1) + '</td><td>' + p.name + '</td><td class="text-right">' + qty + '</td><td class="text-right">' + fmtPrice(p.price) + '</td><td class="text-right">' + fmtPrice(lineTotal) + '</td></tr>';
    }).join('');
    var subtotal = runningTotal;
    var discount = parseFloat(document.getElementById('qDiscount') ? document.getElementById('qDiscount').value : 0) || 0;
    var tax = parseFloat(document.getElementById('qTax') ? document.getElementById('qTax').value : VAT_RATE) || VAT_RATE;
    var discountAmt = subtotal * (discount / 100);
    var afterDiscount = subtotal - discountAmt;
    var taxAmt = afterDiscount * (tax / 100);
    var grand = afterDiscount + taxAmt;
    if (el('qpSubtotal')) el('qpSubtotal').textContent = fmtPrice(subtotal);
    if (el('qpDiscount')) { el('qpDiscount').textContent = '-' + fmtPrice(discountAmt); var row = el('qpDiscount').closest('.qp-totals-row'); if (row) row.style.display = discount > 0 ? 'flex' : 'none'; }
    if (el('qpTax')) el('qpTax').textContent = fmtPrice(taxAmt);
    if (el('qpGrand')) el('qpGrand').textContent = fmtPrice(grand);
  }
}

function markAsSent() { showToast('Quotation marked as sent', 'success'); setTimeout(function() { window.location.href = 'requests.html'; }, 1000); }
function markCompleted() { showToast('Quotation marked as completed', 'success'); setTimeout(function() { window.location.href = 'requests.html'; }, 1000); }
function sendWhatsApp() { showToast('Opening WhatsApp...', 'info'); setTimeout(function() { showToast('Quotation sent via WhatsApp (simulated)', 'success'); }, 1500); }

/* ---- Customer History ---- */
function loadCustomerHistory() {
  var params = new URLSearchParams(window.location.search);
  var custId = parseInt(params.get('id')) || 1;
  var customer = CUSTOMERS.find(function(c) { return c.id === custId; }) || CUSTOMERS[0];
  var el = function(id) { return document.getElementById(id); };

  if (el('chCompany')) el('chCompany').textContent = customer.company;
  if (el('chContact')) el('chContact').textContent = customer.contact;
  if (el('chPhone')) el('chPhone').textContent = customer.phone;
  if (el('chEmail')) el('chEmail').textContent = customer.email || '—';
  if (el('chAddress')) el('chAddress').textContent = customer.address || '—';
  if (el('chNotes')) el('chNotes').textContent = customer.notes || '—';
  if (el('chLastVisit')) el('chLastVisit').textContent = customer.lastVisit ? fmtDate(customer.lastVisit) : '—';
  if (el('chLastSalesperson')) el('chLastSalesperson').textContent = customer.lastSalesperson || '—';
  if (el('chTotalOrders')) el('chTotalOrders').textContent = customer.orders;

  var custQuotes = REQUESTS.filter(function(r) { return r.customer === customer.company; });
  var quotesEl = el('chQuotations');
  if (quotesEl) {
    if (custQuotes.length === 0) {
      quotesEl.innerHTML = '<div class="empty-state" style="padding:24px;"><i class="fas fa-file-alt"></i><h3>No quotations found</h3></div>';
    } else {
      quotesEl.innerHTML = custQuotes.map(function(q) {
        return '<tr class="clickable" data-href="' + (window.location.pathname.indexOf('/admin/') > -1 ? '' : '../') + 'request-details.html?id=' + q.id + '"><td><strong class="text-primary">' + q.id + '</strong></td><td>' + q.salesperson + '</td><td>' + fmtDate(q.date) + '</td><td>' + fmtPrice(q.total) + '</td><td>' + (q.discount > 0 ? '<span class="text-warning">' + q.discount + '%</span>' : '—') + '</td><td>' + statusBadge(q.status) + '</td></tr>';
      }).join('');
    }
  }
}

/* ---- Admin Products Category Filter ---- */
function initAdminProductFilter() {
  var filter = document.getElementById('adminProductCategory');
  if (!filter) return;
  filter.addEventListener('change', function() {
    var cat = filter.value;
    document.querySelectorAll('#adminProductTableBody tr').forEach(function(row) {
      row.style.display = (cat === 'All' || row.dataset.category === cat) ? '' : 'none';
    });
  });
}
/* ============================================
   Translation System — English / Arabic
   ============================================ */

var CURRENT_LANG = localStorage.getItem('df_lang') || 'en';

var AR = {
  'Replace paper-based dealer order collection with a digital workflow integrated into office quotation management.': 'استبدل جمع طلبات الوكيل الورقية بسير عمل رقمي مدمج في إدارة عروض الأسعار بالمكتب.',
  'Submit orders from the field in seconds': 'إرسال الطلبات من الميدان في ثوانٍ',
  'Auto-generate professional quotations': 'إنشاء عروض أسعار احترافية تلقائياً',
  'Real-time request tracking & status': 'تتبع الطلبات وحالتها في الوقت الفعلي',
  'Manage customers, products & team': 'إدارة العملاء والمنتجات والفريق',
  'Welcome back': 'مرحباً بعودتك',
  'Sign in to your OrderFlow account': 'سجّل الدخول إلى حسابك في أوردر فلو',
  'Email Address': 'البريد الإلكتروني',
  'Password': 'كلمة المرور',
  'Remember me': 'تذكّرني',
  'Forgot password?': 'نسيت كلمة المرور؟',
  'Sign in as': 'تسجيل الدخول كـ',
  'Salesperson': 'مندوب مبيعات',
  'Office / Admin': 'المكتب / الإدارة',
  'Sign In': 'تسجيل الدخول',
  'Password reset email sent (simulated)': 'تم إرسال بريد إعادة تعيين كلمة المرور (محاكاة)',
  'Dashboard': 'لوحة التحكم',
  'Customers': 'العملاء',
  'New Quotation': 'عرض سعر جديد',
  'My Quotations': 'عروض الأسعار',
  'Profile': 'الملف الشخصي',
  'Admin Portal': 'بوابة الإدارة',
  'Sales Portal': 'بوابة المبيعات',
  'Sign Out': 'تسجيل الخروج',
  'Quotations': 'عروض الأسعار',
  'Products': 'المنتجات',
  'Users': 'المستخدمون',
  'Settings': 'الإعدادات',
  'Requests': 'الطلبات',
  'Search...': 'بحث...',
  'Search customers, quotations...': 'البحث عن عملاء، عروض أسعار...',
  'Search customers...': 'البحث عن عملاء...',
  'Search quotations...': 'البحث عن عروض أسعار...',
  'Search products...': 'البحث عن منتجات...',
  'Search users...': 'البحث عن مستخدمين...',
  'Search settings...': 'البحث عن إعدادات...',
  'View All': 'عرض الكل',
  'Back': 'رجوع',
  'Cancel': 'إلغاء',
  'Save Changes': 'حفظ التغييرات',
  'Save': 'حفظ',
  'Edit': 'تعديل',
  'Delete': 'حذف',
  'Add': 'إضافة',
  'Submit': 'إرسال',
  'Send': 'إرسال',
  'Close': 'إغلاق',
  'Mark all read': 'تعليم الكل كمقروء',
  'Draft': 'مسودة',
  'Quotation Generated': 'تم إنشاء عرض السعر',
  'Pending Discount Approval': 'بانتظار موافقة الخصم',
  'Approved': 'موافقة',
  'Approved — Ready to Send': 'موافقة — جاهز للإرسال',
  'Quotation Sent': 'تم إرسال عرض السعر',
  'Customer Accepted': 'قبل العميل',
  'Completed': 'مكتمل',
  'In Stock': 'متوفر',
  'Low Stock': 'مخزون منخفض',
  'Out of Stock': 'غير متوفر',
  "Welcome back, Sarah. Here's your overview.": 'مرحباً بعودتك، سارة. إليك نظرة عامة.',
  "Today's Quotations": 'عروض الأسعار اليوم',
  'Pending Discount Approvals': 'بانتظار موافقة الخصم',
  'Search customer, add products, generate quotation': 'البحث عن عميل، إضافة منتجات، إنشاء عرض سعر',
  'New Customer': 'عميل جديد',
  'Add a new customer to the system': 'إضافة عميل جديد إلى النظام',
  'Recent Quotations': 'أحدث عروض الأسعار',
  'customers in your territory': 'عملاء في منطقتك',
  'registered customers': 'عملاء مسجلون',
  'Use New Quotation flow for inline customer creation': 'استخدم تدفق عرض السعر الجديد لإنشاء عميل',
  'Search by company, contact, or phone...': 'البحث بالشركة، جهة الاتصال، أو رقم الهاتف...',
  'Company': 'الشركة',
  'Contact Person': 'جهة الاتصال',
  'Phone': 'الهاتف',
  'Email': 'البريد الإلكتروني',
  'Orders': 'الطلبات',
  'View': 'عرض',
  'No customer found': 'لم يتم العثور على عميل',
  'Try a different search term or create a new customer.': 'جرّب مصطلح بحث مختلف أو أنشئ عميلاً جديداً.',
  'Create New Customer': 'إنشاء عميل جديد',
  'Customer Details': 'تفاصيل العميل',
  'Customer Information': 'معلومات العميل',
  'Address': 'العنوان',
  'Notes': 'ملاحظات',
  'Summary': 'ملخص',
  'Total Orders': 'إجمالي الطلبات',
  'Last Visit': 'آخر زيارة',
  'Last Salesperson': 'آخر مندوب مبيعات',
  'Previous Quotations': 'عروض أسعار سابقة',
  'Date': 'التاريخ',
  'Value': 'القيمة',
  'Discount': 'الخصم',
  'Status': 'الحالة',
  'Frequently Purchased Products': 'منتجات مشتراة بشكل متكرر',
  'No purchase history': 'لا يوجد سجل مشتريات',
  'Products will appear here after the first order.': 'ستظهر المنتجات هنا بعد الطلب الأول.',
  'Call Customer': 'اتصال بالعميل',
  'WhatsApp Customer': 'واتساب العميل',
  'Lifetime Value': 'القيمة الإجمالية',
  'Total purchase value across all orders': 'إجمالي قيمة المشتريات عبر جميع الطلبات',
  'Completed Orders': 'طلبات مكتملة',
  'No completed orders': 'لا توجد طلبات مكتملة',
  'No quotations found': 'لم يتم العثور على عروض أسعار',
  'Step 1 of 3 — Select Customer': 'الخطوة 1 من 3 — اختيار العميل',
  'Step 2 of 3 — Select Products': 'الخطوة 2 من 3 — اختيار المنتجات',
  'Step 3 of 3 — Generate': 'الخطوة 3 من 3 — الإنشاء',
  'Search Existing Customer': 'البحث عن عميل موجود',
  'Type company name, contact person, or phone...': 'اكتب اسم الشركة، جهة الاتصال، أو رقم الهاتف...',
  'No customer found.': 'لم يتم العثور على عميل.',
  '+ Create New Customer': '+ إنشاء عميل جديد',
  'Customer not found — Create new customer below': 'لم يتم العثور على العميل — أنشئ عميلاً جديداً أدناه',
  'Company Name *': 'اسم الشركة *',
  'Contact Person *': 'جهة الاتصال *',
  'Full address': 'العنوان الكامل',
  'Any special notes...': 'أي ملاحظات خاصة...',
  'Add Customer & Continue': 'إضافة العميل والمتابعة',
  'OR': 'أو',
  'Visit Details': 'تفاصيل الزيارة',
  'Visit Date': 'تاريخ الزيارة',
  'Visit Time': 'وقت الزيارة',
  'Purpose': 'الغرض',
  'New Order': 'طلب جديد',
  'Follow-up': 'متابعة',
  'Product Demo': 'عرض منتج',
  'Inquiry': 'استفسار',
  'Complaint': 'شكوى',
  'Continue to Products': 'المتابعة إلى المنتجات',
  'Please select or add a customer first': 'يرجى اختيار أو إضافة عميل أولاً',
  'Products in cart:': 'منتجات في السلة:',
  'View Cart': 'عرض السلة',
  'Frequently Ordered': 'المنتجات المطلوبة بشكل متكرر',
  'Click to add to cart': 'انقر للإضافة إلى السلة',
  'Sort:': 'ترتيب:',
  'Name A-Z': 'الاسم أ-ي',
  'Name Z-A': 'الاسم ي-أ',
  'Price Low-High': 'السعر من الأقل للأعلى',
  'Price High-Low': 'السعر من الأعلى للأقل',
  'No products found': 'لم يتم العثور على منتجات',
  'Try adjusting your search or filter.': 'جرّب تعديل البحث أو الفلتر.',
  'Back to Customer': 'العودة للعميل',
  'Review Cart': 'مراجعة السلة',
  'Search by name, SKU, or Arabic...': 'البحث بالاسم، SKU، أو بالعربي...',
  'Shopping Cart': 'سلة التسوق',
  'item(s)': 'عنصر(عناصر)',
  'Your cart is empty': 'سلة التسوق فارغة',
  'Browse the product catalog to add items to your quotation.': 'تصفّح كتالوج المنتجات لإضافة عناصر لعرض السعر.',
  'Browse Products': 'تصفّح المنتجات',
  'Cart Items': 'عناصر السلة',
  'Remarks & Attachments': 'ملاحظات ومرفقات',
  'Order Remarks': 'ملاحظات الطلب',
  'Any special instructions...': 'أي تعليمات خاصة...',
  'Attach Photos (optional)': 'إرفاق صور (اختياري)',
  'Click to upload': 'انقر للرفع',
  'or drag and drop': 'أو اسحب وأفلت',
  'PNG, JPG up to 10MB': 'PNG، JPG حتى 10 ميجابايت',
  'Continue Shopping': 'متابعة التسوق',
  'Review & Generate Quotation': 'مراجعة وإنشاء عرض السعر',
  'Back to Cart': 'العودة للسلة',
  'Customer': 'العميل',
  'Quotation Items': 'عناصر عرض السعر',
  'No items in cart': 'لا توجد عناصر في السلة',
  'Qty': 'الكمية',
  'Unit Price': 'سعر الوحدة',
  'Amount': 'المبلغ',
  'No remarks provided.': 'لم يتم تقديم ملاحظات.',
  'Edit Quotation': 'تعديل عرض السعر',
  'Generate Quotation': 'إنشاء عرض السعر',
  'Submit for Discount Approval': 'إرسال للموافقة على الخصم',
  'Status Preview': 'معاينة الحالة',
  'This shows the expected workflow after generation.': 'يوضح هذا سير العمل المتوقع بعد الإنشاء.',
  'Quotation Preview': 'معاينة عرض السعر',
  'Download PDF': 'تحميل PDF',
  'Send Quotation via WhatsApp': 'إرسال عرض السعر عبر واتساب',
  'Create Delivery Note': 'إنشاء إشارة تسليم',
  'Bill To': 'فاتورة إلى',
  'Delivery Note': 'إشارة تسليم',
  'Back to Quotation': 'العودة لعرض السعر',
  'Send via WhatsApp': 'الإرسال عبر واتساب',
  'Deliver To': 'التسليم إلى',
  'Contact Person': 'جهة الاتصال',
  'Product Name': 'اسم المنتج',
  'Quantity': 'الكمية',
  'Driver Name': 'اسم السائق',
  'Enter driver name...': 'أدخل اسم السائق...',
  'No special remarks.': 'لا توجد ملاحظات خاصة.',
  'Receiver Signature': 'توقيع المستلم',
  'Name & Date': 'الاسم والتاريخ',
  'Driver Signature': 'توقيع السائق',
  'Company Signature': 'توقيع الشركة',
  'Authorized Signatory': 'مفوض بالتوقيع',
  'Confirm & Save': 'تأكيد وحفظ',
  'Track all your quotations': 'تتبع جميع عروض الأسعار',
  'All': 'الكل',
  'Pending Approval': 'بانتظار الموافقة',
  'Generated': 'تم الإنشاء',
  'Sent': 'مرسل',
  'None': 'لا يوجد',
  'Quotation Details': 'تفاصيل عرض السعر',
  'Details': 'التفاصيل',
  'Quotation Info': 'معلومات عرض السعر',
  'Quotation ID': 'رقم عرض السعر',
  'Salesperson': 'مندوب المبيعات',
  'Remarks': 'ملاحظات',
  'Waiting for discount approval.': 'بانتظار موافقة الخصم.',
  'This quotation exceeds the 5% discount limit. You can send it via WhatsApp once the admin approves the discount.': 'يتجاوز هذا العرض حد الخصم 5%. يمكنك إرساله عبر واتساب بعد موافقة الإدارة على الخصم.',
  'Send via WhatsApp': 'الإرسال عبر واتساب',
  'My Profile': 'ملفي الشخصي',
  'Manage your account settings': 'إدارة إعدادات حسابك',
  'Personal Information': 'المعلومات الشخصية',
  'First Name': 'الاسم الأول',
  'Last Name': 'اسم العائلة',
  'Role': 'الدور',
  'Employee ID': 'رقم الموظف',
  'Change Password': 'تغيير كلمة المرور',
  'Current Password': 'كلمة المرور الحالية',
  'Enter current password': 'أدخل كلمة المرور الحالية',
  'New Password': 'كلمة المرور الجديدة',
  'Enter new password': 'أدخل كلمة المرور الجديدة',
  'Confirm New Password': 'تأكيد كلمة المرور الجديدة',
  'Confirm new password': 'تأكيد كلمة المرور الجديدة',
  'Update Password': 'تحديث كلمة المرور',
  'Activity': 'النشاط',
  'Action': 'الإجراء',
  'Signed in': 'تسجيل دخول',
  'Joined March 2022': 'انضم في مارس 2022',
  'Admin Dashboard': 'لوحة تحكم الإدارة',
  'Overview of all operations — December 2024': 'نظرة عامة على جميع العمليات — ديسمبر 2024',
  'View All Quotations': 'عرض جميع عروض الأسعار',
  'Quotation Value': 'قيمة عروض الأسعار',
  'By Status': 'حسب الحالة',
  'Top Salespeople': 'أفضل مندوبي المبيعات',
  'quotations': 'عروض أسعار',
  'value': 'قيمة',
  'need your attention': 'تحتاج انتباهك',
  '2 Pending Approvals': 'موافقتان معلّقتان',
  'needs discount approval': 'يحتاج موافقة خصم',
  'All Quotations': 'جميع عروض الأسعار',
  'total quotations': 'إجمالي عروض الأسعار',
  'Actions': 'الإجراءات',
  'Quotation': 'عرض السعر',
  'Review and adjust before generating': 'راجع وعدّل قبل الإنشاء',
  'Quotation Settings': 'إعدادات عرض السعر',
  'Quotation Reference': 'مرجع عرض السعر',
  'Related Quotation': 'عرض السعر المرتبط',
  'Quotation Date': 'تاريخ عرض السعر',
  'Valid Until': 'صالح حتى',
  'Payment Terms': 'شروط الدفع',
  'Currency': 'العملة',
  'Line Items': 'بنود الخط',
  'Subtotal': 'المجموع الفرعي',
  'Discount (%)': 'الخصم (%)',
  'Discount Amount': 'مبلغ الخصم',
  'VAT Amount': 'مبلغ ضريبة القيمة المضافة',
  'Grand Total': 'المجموع الكلي',
  'Terms & Notes': 'الشروط والملاحظات',
  'Internal Notes (not shown on quotation)': 'ملاحظات داخلية (لا تظهر في عرض السعر)',
  'Terms & Conditions': 'الشروط والأحكام',
  'Save Draft': 'حفظ كمسودة',
  'Preview': 'معاينة',
  'Customer requested urgent processing. Check stock availability before confirming.': 'طلب العميل معالجة عاجلة. تحقق من توفر المخزون قبل التأكيد.',
  'Mark as Sent': 'تحديد كمرسل',
  'products across 6 categories': 'منتجات عبر 6 فئات',
  'Add Product': 'إضافة منتج',
  'Category:': 'الفئة:',
  'All Categories': 'جميع الفئات',
  'Product Name': 'اسم المنتج',
  'Default Price (SAR)': 'السعر الافتراضي (ريال)',
  'Stock Status': 'حالة المخزون',
  'Add New Product': 'إضافة منتج جديد',
  'Edit Product': 'تعديل المنتج',
  'Select category': 'اختر الفئة',
  'Image URL': 'رابط الصورة',
  'Product added successfully': 'تمت إضافة المنتج بنجاح',
  'Product updated successfully': 'تم تحديث المنتج بنجاح',
  'team members': 'أعضاء الفريق',
  'active': 'نشط',
  'Add User': 'إضافة مستخدم',
  'Total Users': 'إجمالي المستخدمين',
  'Inactive': 'غير نشط',
  'Edit user form': 'نموذج تعديل المستخدم',
  'Configure your OrderFlow instance': 'تكوين نسخة أوردر فلو',
  'Company Information': 'معلومات الشركة',
  'These details appear on all quotations and documents.': 'تظهر هذه التفاصيل في جميع عروض الأسعار والمستندات.',
  'Company Name': 'اسم الشركة',
  'CR Number': 'رقم السجل التجاري',
  'VAT Number': 'الرقم الضريبي',
  'Website': 'الموقع الإلكتروني',
  'Company information saved': 'تم حفظ معلومات الشركة',
  'Quotation Defaults': 'الإعدادات الافتراضية لعروض الأسعار',
  'Default values when generating quotations.': 'القيم الافتراضية عند إنشاء عروض الأسعار.',
  'Default Payment Terms': 'شروط الدفع الافتراضية',
  'Default Validity Period': 'فترة الصلاحية الافتراضية',
  'days': 'أيام',
  'Default VAT Rate (%)': 'نسبة ضريبة القيمة المضافة الافتراضية (%)',
  'Quotation defaults saved': 'تم حفظ الإعدادات الافتراضية',
  'Notifications': 'الإشعارات',
  'Control which notifications are sent to users.': 'التحكم في الإشعارات المرسلة للمستخدمين.',
  'New Quotation Generated': 'تم إنشاء عرض سعر جديد',
  'Notify office staff when a salesperson generates a new quotation': 'إشعار موظفي المكتب عند إنشاء مندوب مبيعات لعرض سعر جديد',
  'Quotation Sent': 'عرض سعر مرسل',
  'Notify when a quotation is sent to a customer': 'إشعار عند إرسال عرض سعر لعميل',
  'Discount Approval Required': 'موافقة الخصم مطلوبة',
  'Notify admin when a quotation exceeds 5% discount': 'إشعار الإدارة عند تجاوز عرض السعر 5% خصم',
  'Customer Accepted': 'قبل العميل',
  'Notify when a customer accepts the quotation': 'إشعار عند قبول العميل لعرض السعر',
  'Daily Summary Email': 'بريد ملخص يومي',
  'Send a daily email summary of all activities': 'إرسال بريد إلكتروني يومي بملخص جميع الأنشطة',
  'Overdue Quotations': 'عروض أسعار منتهية الصلاحية',
  'Alert when a quotation has expired without response': 'تنبيه عند انتهاء صلاحية عرض سعر بدون رد',
  'Integrations': 'التكاملات',
  'Connect with external services.': 'الاتصال بالخدمات الخارجية.',
  'WhatsApp Business': 'واتساب بزنس',
  'Send quotations directly to customers via WhatsApp': 'إرسال عروض الأسعار مباشرة للعملاء عبر واتساب',
  'Odoo ERP': 'أودو ERP',
  'Sync customers, products, and orders with Odoo': 'مزامنة العملاء والمنتجات والطلبات مع أودو',
  'Email (SMTP)': 'البريد الإلكتروني (SMTP)',
  'Send quotations via email as PDF attachments': 'إرسال عروض الأسعار عبر البريد الإلكتروني كمرفقات PDF',
  'Danger Zone': 'منطقة الخطر',
  'Irreversible actions — proceed with caution.': 'إجراءات لا رجعة فيها — توخّ الحذر.',
  'Reset All Data': 'إعادة تعيين جميع البيانات',
  'Permanently delete all quotations, customers, and products': 'حذف جميع عروض الأسعار والعملاء والمنتجات نهائياً',
  'This action is disabled in the demo': 'هذا الإجراء معطّل في النسخة التجريبية',
  'Reset Data': 'إعادة تعيين البيانات',
  'QUOTATION': 'عرض سعر',
  'Delivery Terms': 'شروط التسليم',
  '5-7 Working Days': '5-7 أيام عمل',
  'Net 30': 'صافي 30 يوماً',
  'Net 15': 'صافي 15 يوماً',
  'Net 45': 'صافي 45 يوماً',
  'Cash on Delivery': 'الدفع عند التسليم',
  'VAT (15%)': 'ضريبة القيمة المضافة (15%)',
  'Prices are valid for 30 days from the date of this quotation.': 'الأسعار صالحة لمدة 30 يوماً من تاريخ هذا العرض.',
  'Delivery within 5-7 working days upon order confirmation.': 'التسليم خلال 5-7 أيام عمل بعد تأكيد الطلب.',
  'Payment terms: Net 30 days from invoice date.': 'شروط الدفع: صافي 30 يوماً من تاريخ الفاتورة.',
  'Goods remain the property of EXION Trading Est. until full payment is received.': 'تبقى البضائع ملكاً لمؤسسة إكسيون للتجارة حتى يتم استلام الدفع الكامل.',
  'All prices are in Saudi Riyals (SAR) and inclusive of 15% VAT unless stated otherwise.': 'جميع الأسعار بالريال السعودي وتشمل 15% ضريبة القيمة المضافة ما لم يُذكر غير ذلك.',
  'Claims for damaged goods must be reported within 48 hours of delivery.': 'يجب الإبلاغ عن البضائع التالفة خلال 48 ساعة من التسليم.',
  'Prepared By': 'أعدّ بواسطة',
  'Sales Manager': 'مدير المبيعات',
  'Approved By': 'وافق بواسطة',
  'Accepted By': 'قبل بواسطة',
  'Customer Signature & Stamp': 'توقيع وختم العميل',
  'DELIVERY NOTE': 'إشارة تسليم',
  'Quotation Ref': 'مرجع عرض السعر',
  'Melamine Tableware Manufacturer & Distributor': 'مصنّع وموزّع أطباق الميلامين',
  'Item added to cart': 'تمت إضافة العنصر إلى السلة',
  'This item is out of stock': 'هذا العنصر غير متوفر',
  'New customer added successfully': 'تمت إضافة العميل الجديد بنجاح',
  'Quotation generated successfully!': 'تم إنشاء عرض السعر بنجاح!',
  'Quotation submitted for discount approval': 'تم إرسال عرض السعر للموافقة على الخصم',
  'Opening WhatsApp...': 'جاري فتح واتساب...',
  'Quotation PDF sent via WhatsApp (simulated)': 'تم إرسال عرض السعر PDF عبر واتساب (محاكاة)',
  'Delivery Note PDF download simulated': 'محاكاة تحميل إشارة التسليم PDF',
  'Delivery Note sent via WhatsApp (simulated)': 'تم إرسال إشارة التسليم عبر واتساب (محاكاة)',
  'PDF download simulated': 'محاكاة تحميل PDF',
  'Quotation marked as sent': 'تم تحديد عرض السعر كمرسل',
  'Quotation marked as completed': 'تم تحديد عرض السعر كمكتمل',
  'Discount approved successfully': 'تمت الموافقة على الخصم بنجاح',
  'Discount rejected. Salesperson has been notified.': 'تم رفض الخصم. تم إبلاغ مندوب المبيعات.',
  'Profile updated successfully': 'تم تحديث الملف الشخصي بنجاح',
  'Password changed successfully': 'تم تغيير كلمة المرور بنجاح',
  'Delivery Note created and saved': 'تم إنشاء وحفظ إشارة التسليم',
  'Photo upload simulated — 1 file attached': 'محاكاة رفع صورة — تم إرفاق ملف واحد',
  'Discount exceeds your approval limit.': 'الخصم يتجاوز حد الموافقة الخاص بك.',
  'Maximum allowed discount is': 'الحد الأقصى المسموح به للخصم هو',
  'This quotation requires admin approval before sending. Status will be set to: Pending Discount Approval.': 'يتطلب هذا العرض موافقة الإدارة قبل الإرسال. سيتم تعيين الحالة إلى: بانتظار موافقة الخصم.',
  'Draft Created': 'إنشاء المسودة',
  'Quotation draft created by salesperson': 'تم إنشاء مسودة عرض السعر بواسطة مندوب المبيعات',
  'Pending Approval': 'بانتظار الموافقة',
  'Awaiting admin discount approval': 'بانتظار موافقة الإدارة على الخصم',
  'Discount approved by admin': 'تمت الموافقة على الخصم بواسطة الإدارة',
  'Quotation sent to customer': 'تم إرسال عرض السعر للعميل',
  'Quotation sent to customer via WhatsApp': 'تم إرسال عرض السعر للعميل عبر واتساب',
  'Customer accepted the quotation': 'قبل العميل عرض السعر',
  'Order delivered and closed': 'تم تسليم الطلب وإغلاقه',
  'Quotation generated and ready to send': 'تم إنشاء عرض السعر وجاهز للإرسال',
  'Pending': 'معلّق',
  'Products': 'المنتجات',
  'Generate': 'الإنشاء',
  'Change': 'تغيير',
  'each': 'لكل',
  'discount': 'خصم',
  'View Quotation': 'عرض عرض السعر',
  'Preview PDF': 'معاينة PDF',
  'Send WhatsApp': 'إرسال واتساب',
  'Mark Completed': 'تحديد كمكتمل',
  'This quotation requires discount approval.': 'يتطلب هذا العرض موافقة على الخصم.',
  'Salesperson has requested a discount above the 5% limit. Review the quotation and approve or reject.': 'طلب مندوب المبيعات خصماً يتجاوز الحد 5%. راجع عرض السعر ووافق أو ارفض.',
  'Approve Discount': 'موافقة على الخصم',
  'Reject Discount': 'رفض الخصم',
  'Status Flow': 'سير الحالة',
  'Timeline': 'الجدول الزمني',
  '14 days': '14 يوماً',
  '30 days': '30 يوماً',
  '60 days': '60 يوماً',
  '90 days': '90 يوماً',
  'Select payment terms': 'اختر شروط الدفع',
  'Select validity period': 'اختر فترة الصلاحية',
  'generated successfully': 'تم الإنشاء بنجاح',
  'accepted by': 'تم القبول بواسطة',
  'submitted for discount approval': 'تم الإرسال للموافقة على الخصم'
};

var STATUS_LABELS_AR = {
  draft: 'مسودة',
  generated: 'تم إنشاء عرض السعر',
  'pending-approval': 'بانتظار موافقة الخصم',
  approved: 'موافقة — جاهز للإرسال',
  sent: 'تم إرسال عرض السعر',
  accepted: 'قبل العميل',
  completed: 'مكتمل'
};

var TEXTAREA_REPLACEMENTS = [
  ['1. Prices are valid for 30 days from the date of this quotation.', '1. الأسعار صالحة لمدة 30 يوماً من تاريخ هذا العرض.'],
  ['2. Delivery within 5-7 working days upon order confirmation.', '2. التسليم خلال 5-7 أيام عمل بعد تأكيد الطلب.'],
  ['3. Payment terms: Net 30 days from invoice date.', '3. شروط الدفع: صافي 30 يوماً من تاريخ الفاتورة.'],
  ['4. Goods remain the property of EXION until full payment is received.', '4. تبقى البضائع ملكاً لإكسيون حتى يتم استلام الدفع الكامل.'],
  ['5. All prices are in Saudi Riyals (SAR) and inclusive of 15% VAT unless stated otherwise.', '5. جميع الأسعار بالريال السعودي وتشمل 15% ضريبة القيمة المضافة ما لم يُذكر غير ذلك.'],
  ['6. Claims for damaged goods must be reported within 48 hours of delivery.', '6. يجب الإبلاغ عن البضائع التالفة خلال 48 ساعة من التسليم.'],
  ['Customer requested urgent processing. Check stock availability before confirming.', 'طلب العميل معالجة عاجلة. تحقق من توفر المخزون قبل التأكيد.']
];

function injectLangSwitcher() {
  var actions = document.querySelector('.topbar-actions');
  if (!actions || document.getElementById('langSwitcher')) return;
  var userEl = actions.querySelector('.topbar-user');
  if (!userEl) return;
  var s = document.createElement('button');
  s.id = 'langSwitcher';
  s.className = 'lang-switcher';
  s.onclick = function() { CURRENT_LANG = CURRENT_LANG === 'en' ? 'ar' : 'en'; localStorage.setItem('df_lang', CURRENT_LANG); location.reload(); };
  s.innerHTML = '<span class="' + (CURRENT_LANG === 'en' ? 'lang-active' : '') + '">EN</span><span class="lang-sep">|</span><span class="' + (CURRENT_LANG === 'ar' ? 'lang-active' : '') + '">العربية</span>';
  actions.insertBefore(s, userEl);
}

function applyTranslations() {
  if (CURRENT_LANG !== 'ar') return;
  document.documentElement.setAttribute('dir', 'rtl');
  document.documentElement.setAttribute('lang', 'ar');

  for (var key in STATUS_LABELS_AR) { if (STATUS_LABELS_AR.hasOwnProperty(key)) STATUS_LABELS[key] = STATUS_LABELS_AR[key]; }

  var keys = Object.keys(AR).sort(function(a, b) { return b.length - a.length; });
  var sel = 'h1,h2,h3,h4,h5,h6,p,span,label,li,a,button,td,th,b,strong,em,.page-subtitle,.card-title,.detail-label,.stat-card-label,.setting-label,.setting-desc,.step-label,.sf-label,.timeline-label,.timeline-desc,.status-text,.dn-section-label,.dn-remarks-label,.qt2-section-label,.qt2-terms h4,.qp-terms h4,.tab-btn,.chip,.empty-state h3,.empty-state p,.search-no-results h4,.search-no-results p,.notif-dropdown-header h4,.nav-item span,.dw-text,.dw-desc,.login-brand p,.login-form-box .subtitle,.login-brand-features li,.or-divider span,.qap-text,.qap-desc,.ccs-name,.cart-item-name,.cart-item-sku,.cart-item-discount,.product-card-name,.product-card-sku,.fp-name,.freq-product-name,.freq-product-meta,.qp-company-sub,.dn-company-sub,.qt2-company-sub,.dn-remarks-box,.search-dropdown-empty,.notif-text,.notif-time,.cart-summary-row span:first-child,.qp-terms li,.qt2-terms li';

  document.querySelectorAll(sel).forEach(function(el) {
    if (el.closest('tbody')) return;
    var text = el.textContent.trim();
    if (!text || text.length < 2) return;
    if (/^[\d\s.,;:\/\-\+\(\)%*#@$&!]+$/.test(text)) return;
    if (/^SAR\s/.test(text)) return;
    if (/^(QT-|DN-)/.test(text)) return;
    if (/@/.test(text) && /\./.test(text)) return;
    if (/^\+?\d{5,}/.test(text)) return;
    if (/^https?:\/\//.test(text)) return;
    if (/^(www\.)/.test(text)) return;
    if (el.tagName === 'TD' && /^\d/.test(text)) return;
    for (var i = 0; i < keys.length; i++) {
      if (text === keys[i]) { el.textContent = AR[keys[i]]; break; }
    }
  });

  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(function(el) {
    var ph = el.getAttribute('placeholder');
    if (ph && AR[ph]) el.setAttribute('placeholder', AR[ph]);
  });

  document.querySelectorAll('textarea').forEach(function(el) {
    if (!el.value) return;
    var v = el.value;
    TEXTAREA_REPLACEMENTS.forEach(function(r) { v = v.replace(r[0], r[1]); });
    el.value = v;
  });

  document.querySelectorAll('.badge').forEach(function(badge) {
    var m = badge.className.match(/badge-(\S[\w-]*)/);
    if (m && m[1] && STATUS_LABELS[m[1]]) badge.textContent = STATUS_LABELS[m[1]];
  });

  document.querySelectorAll('.stock-in').forEach(function(el) { var t = el.childNodes[el.childNodes.length - 1]; if (t && t.nodeType === 3) t.textContent = ' ' + (AR['In Stock'] || 'In Stock'); });
  document.querySelectorAll('.stock-low').forEach(function(el) { var t = el.childNodes[el.childNodes.length - 1]; if (t && t.nodeType === 3) t.textContent = ' ' + (AR['Low Stock'] || 'Low Stock'); });
  document.querySelectorAll('.stock-out').forEach(function(el) { var t = el.childNodes[el.childNodes.length - 1]; if (t && t.nodeType === 3) t.textContent = ' ' + (AR['Out of Stock'] || 'Out of Stock'); });
}
/* ---- Document Branding Injector ---- */
function applyDocumentBranding() {
  var c = DOCUMENT_COMPANY;
  var imgBase = (window.location.pathname.indexOf('/sales/') !== -1 || window.location.pathname.indexOf('/admin/') !== -1) ? '../assets/img/' : 'assets/img/';

  function loadLogo(selector, src) {
    var img = new Image();
    img.onload = function() {
      document.querySelectorAll(selector).forEach(function(el) {
        el.innerHTML = '';
        el.style.cssText = 'width:auto;height:52px;max-width:120px;object-fit:contain;display:flex;align-items:center;background:transparent;border-radius:0;';
        el.appendChild(img.cloneNode());
      });
    };
    img.src = src;
  }

  loadLogo('.qt2-logo-box, .dn-logo-box', imgBase + 'logo-left.png');
  loadLogo('.qt2-logo-right, .dn-logo-right', imgBase + 'logo-right.png');
  document.querySelectorAll('.qt2-company-name, .dn-company-name').forEach(function(el) { el.textContent = c.name; });
  document.querySelectorAll('.qt2-company-sub, .dn-company-sub').forEach(function(el) { el.textContent = c.subtitle; });
  document.querySelectorAll('.qt2-footer-company, .dn-footer-company').forEach(function(el) {
    var contactParts = [];
    if (c.tel) contactParts.push('Tel: ' + c.tel);
    if (c.fax) contactParts.push('Fax: ' + c.fax);
    if (c.phone) contactParts.push('Tel: ' + c.phone);
    el.innerHTML = '<strong>' + c.name + '</strong><br>' + c.address + (contactParts.length ? '<br>' + contactParts.join(' · ') : '') + '<br>Email: ' + c.email + ' · Web: ' + c.website;
  });
  document.querySelectorAll('.qt2-footer-nums, .dn-footer-nums').forEach(function(el) {
    el.innerHTML = '<strong>CR No:</strong> ' + c.crNumber + '<br><strong>VAT No:</strong> ' + c.vatNumber;
  });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', function() {
  initSidebar();
  initActiveNav();
  initNotifications();
  initTabs();
  initToggles();
  updateCartBadge();
  injectLangSwitcher();
  applyTranslations();
  applyDocumentBranding();
  initClickableRows();

  if (document.getElementById('customerSearchInput')) initCustomerSearch();
  if (document.getElementById('newCustomerForm')) initAddCustomerForm();
  if (document.getElementById('customerTableSearch')) initCustomerTableSearch();
  if (document.getElementById('productGrid')) initProductCatalog();
  if (document.getElementById('cartItems')) initCartPage();
  if (document.getElementById('reviewItems')) initReviewPage();
  if (document.getElementById('srdId')) loadSalesQuotationDetails();
  if (document.getElementById('reqId')) loadAdminQuotationDetails();
  if (document.getElementById('qReqId')) initQuotationForm();
  if (document.getElementById('qpNumber')) loadQuotationPreview();
  if (document.getElementById('adminProductCategory')) initAdminProductFilter();
  if (document.getElementById('visitDate')) initVisitFields();
  if (document.getElementById('chCompany')) loadCustomerHistory();

  var searchBox = document.getElementById('customerSearchBox');
  if (searchBox) { var sc = getSessionData('selected_customer'); if (sc) selectCustomer(sc); }

  var qD = document.getElementById('qDiscount');
  var qT = document.getElementById('qTax');
  if (qD) qD.addEventListener('input', updateQuotationTotals);
  if (qT) qT.addEventListener('input', updateQuotationTotals);
});

function loadFrequentProducts() {
  var grid = document.getElementById('frequentProductsGrid');
  if (!grid) return;
  var frequent = PRODUCTS.filter(function(p) { return p.frequent; });
  grid.innerHTML = frequent.map(function(p) {
    return '<div class="fp-card" onclick="addToCart(' + p.id + ',1,0)">' +
      '<div class="fp-img"><img src="' + p.image + '" alt="' + p.name + '"></div>' +
      '<div class="fp-info">' +
        '<div class="fp-name">' + p.name + '</div>' +
        '<div class="fp-ar" dir="rtl">' + (p.nameAr || '') + '</div>' +
        '<div class="fp-meta"><span class="fp-sku">' + p.sku + '</span><span class="fp-price">' + fmtPrice(p.price) + '</span></div>' +
      '</div>' +
      '<div class="fp-add"><i class="fas fa-plus"></i></div>' +
    '</div>';
  }).join('');
}