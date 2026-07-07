/* ============================================
   EXION DealerFlow — Shared Application JS
   Saudi Kitchen Accessories Edition
   ============================================ */

var CURRENCY = 'SAR';
var VAT_RATE = 15;

var CUSTOMERS = [
  { id: 1, company: 'Al Muhaidib Kitchens', contact: 'Khalid Al Muhaidib', phone: '+966 13 812 3456', email: 'khalid@almuhaidib.com.sa', address: 'King Fahd Road, Al Khobar 31952', notes: 'Premium kitchen projects. Net 30 terms.', orders: 22 },
  { id: 2, company: 'Raha Kitchen Solutions', contact: 'Faisal Al Ghamdi', phone: '+966 13 823 4567', email: 'faisal@raha-kitchens.sa', address: 'Prince Sultan Road, Dammam 32211', notes: 'Bulk orders for apartment complexes.', orders: 31 },
  { id: 3, company: 'Eastern Kitchens Factory', contact: 'Omar Al Dossari', phone: '+966 13 834 5678', email: 'omar@eastern-kitchens.sa', address: 'Industrial Area 3, Dammam 31412', notes: 'Own manufacturing. Requires quality certifications.', orders: 15 },
  { id: 4, company: 'Gulf Modular Kitchens', contact: 'Sultan Al Harbi', phone: '+966 13 845 6789', email: 'sultan@gulfmodular.sa', address: 'Corniche Road, Al Khobar 34712', notes: 'Prefers imported European hardware.', orders: 19 },
  { id: 5, company: 'Al Jazeera Kitchen World', contact: 'Mohammed Al Qahtani', phone: '+966 13 856 7890', email: 'mohammed@aljazeerakitchen.sa', address: 'King Abdullah Street, Al Khobar 34614', notes: 'Price-sensitive. Requests detailed quotations.', orders: 27 },
  { id: 6, company: 'Dammam Interior Works', contact: 'Abdullah Al Shamrani', phone: '+966 13 867 8901', email: 'abdullah@dammaminterior.sa', address: 'Al Faisaliyah District, Dammam 32215', notes: 'Interior fit-out company. Regular monthly orders.', orders: 8 },
  { id: 7, company: 'Crystal Kitchen Systems', contact: 'Turki Al Otaibi', phone: '+966 13 878 9012', email: 'turki@crystalkitchens.sa', address: 'Shaikh Jaber Street, Al Khobar 34722', notes: 'High-end residential projects only.', orders: 12 },
  { id: 8, company: 'Al Khobar Kitchen Showroom', contact: 'Ibrahim Al Mutairi', phone: '+966 13 889 0123', email: 'ibrahim@khobarkitchen.sa', address: 'Dhahran Street, Al Khobar 34622', notes: 'Showroom and retail. Small quantity orders.', orders: 34 },
  { id: 9, company: 'Saudi Kitchen Supply Co.', contact: 'Ahmed Al Zahrani', phone: '+966 13 890 1234', email: 'ahmed@sdkitchen.sa', address: '3rd Industrial City, Dammam 31413', notes: 'Distributor. Large volume, tight margins.', orders: 41 },
  { id: 10, company: 'Royal Kitchen Fittings', contact: 'Bandar Al Subaie', phone: '+966 13 901 2345', email: 'bandar@royalkitchen.sa', address: 'Al Shati District, Dammam 32216', notes: 'New customer since Q3 2024.', notes: 'New customer since Q3 2024.', orders: 3 }
];

var PRODUCTS = [
  { id: 1, name: 'Soft Close Hinges', sku: 'HNG-110', price: 18.00, category: 'Hinges', stock: 'in', image: 'https://placehold.co/400x280/dbeafe/1e40af?text=Soft+Close+Hinges' },
  { id: 2, name: 'Drawer Channels', sku: 'DRW-220', price: 45.00, category: 'Channels', stock: 'in', image: 'https://placehold.co/400x280/dbeafe/1e40af?text=Drawer+Channels' },
  { id: 3, name: 'Pull Out Basket', sku: 'BSK-330', price: 85.00, category: 'Storage', stock: 'in', image: 'https://placehold.co/400x280/dbeafe/1e40af?text=Pull+Out+Basket' },
  { id: 4, name: 'Pantry Unit', sku: 'PNT-440', price: 120.00, category: 'Storage', stock: 'low', image: 'https://placehold.co/400x280/fef3c7/92400e?text=Pantry+Unit' },
  { id: 5, name: 'Cutlery Tray', sku: 'CTR-550', price: 35.00, category: 'Organizers', stock: 'in', image: 'https://placehold.co/400x280/dbeafe/1e40af?text=Cutlery+Tray' },
  { id: 6, name: 'Magic Corner', sku: 'MGC-660', price: 150.00, category: 'Storage', stock: 'in', image: 'https://placehold.co/400x280/dbeafe/1e40af?text=Magic+Corner' },
  { id: 7, name: 'Bottle Pull Out', sku: 'BTL-770', price: 95.00, category: 'Storage', stock: 'in', image: 'https://placehold.co/400x280/dbeafe/1e40af?text=Bottle+Pull+Out' },
  { id: 8, name: 'Dish Drying Rack', sku: 'DRY-880', price: 75.00, category: 'Organizers', stock: 'low', image: 'https://placehold.co/400x280/fef3c7/92400e?text=Dish+Drying+Rack' },
  { id: 9, name: 'Lift System', sku: 'LFT-990', price: 130.00, category: 'Mechanisms', stock: 'in', image: 'https://placehold.co/400x280/dbeafe/1e40af?text=Lift+System' },
  { id: 10, name: 'Waste Bin System', sku: 'WBS-100', price: 65.00, category: 'Organizers', stock: 'out', image: 'https://placehold.co/400x280/fee2e2/991b1b?text=Waste+Bin+System' }
];

var REQUESTS = [
  { id: 'REQ-2024-0047', customer: 'Al Muhaidib Kitchens', contact: 'Khalid Al Muhaidib', date: '2024-12-18', salesperson: 'Sarah Al Rashid', status: 'submitted', items: 4, total: 312.00, remarks: 'Urgent — client site visit tomorrow' },
  { id: 'REQ-2024-0046', customer: 'Raha Kitchen Solutions', contact: 'Faisal Al Ghamdi', date: '2024-12-17', salesperson: 'Marcus Al Harbi', status: 'preparing', items: 7, total: 685.00, remarks: 'Al Rashed compound phase 2 order' },
  { id: 'REQ-2024-0045', customer: 'Saudi Kitchen Supply Co.', contact: 'Ahmed Al Zahrani', date: '2024-12-16', salesperson: 'Sarah Al Rashid', status: 'sent', items: 12, total: 1540.00, remarks: 'Quotation sent via WhatsApp' },
  { id: 'REQ-2024-0044', customer: 'Gulf Modular Kitchens', contact: 'Sultan Al Harbi', date: '2024-12-15', salesperson: 'Priya Nair', status: 'confirmed', items: 3, total: 195.00, remarks: 'Client confirmed at showroom' },
  { id: 'REQ-2024-0043', customer: 'Eastern Kitchens Factory', contact: 'Omar Al Dossari', date: '2024-12-14', salesperson: 'Marcus Al Harbi', status: 'completed', items: 5, total: 490.00, remarks: 'Delivered and invoiced' },
  { id: 'REQ-2024-0042', customer: 'Al Khobar Kitchen Showroom', contact: 'Ibrahim Al Mutairi', date: '2024-12-13', salesperson: 'Sarah Al Rashid', status: 'completed', items: 6, total: 540.00, remarks: '' },
  { id: 'REQ-2024-0041', customer: 'Crystal Kitchen Systems', contact: 'Turki Al Otaibi', date: '2024-12-12', salesperson: 'Priya Nair', status: 'submitted', items: 2, total: 95.00, remarks: 'First order from this customer' },
  { id: 'REQ-2024-0040', customer: 'Al Jazeera Kitchen World', contact: 'Mohammed Al Qahtani', date: '2024-12-11', salesperson: 'Marcus Al Harbi', status: 'preparing', items: 8, total: 875.00, remarks: 'Villa project in Al Khobar' },
  { id: 'REQ-2024-0039', customer: 'Dammam Interior Works', contact: 'Abdullah Al Shamrani', date: '2024-12-10', salesperson: 'Sarah Al Rashid', status: 'sent', items: 4, total: 415.00, remarks: 'Office fit-out project' },
  { id: 'REQ-2024-0038', customer: 'Royal Kitchen Fittings', contact: 'Bandar Al Subaie', date: '2024-12-09', salesperson: 'Priya Nair', status: 'draft', items: 1, total: 120.00, remarks: 'Pending client confirmation on quantity' }
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
  submitted: 'Submitted',
  preparing: 'Quotation Preparing',
  sent: 'Quotation Sent',
  confirmed: 'Order Confirmed',
  completed: 'Completed'
};

function statusBadge(status) {
  return '<span class="badge badge-' + status + '">' + (STATUS_LABELS[status] || status) + '</span>';
}

function stockHTML(stock) {
  if (stock === 'in') return '<div class="stock-in">In Stock</div>';
  if (stock === 'low') return '<div class="stock-low">Low Stock</div>';
  return '<div class="stock-out">Out of Stock</div>';
}

function fmtPrice(amount) {
  return CURRENCY + ' ' + amount.toFixed(2);
}

/* ---- Cart ---- */
function getCart() { try { return JSON.parse(sessionStorage.getItem('df_cart')) || []; } catch(e) { return []; } }
function setCart(cart) { sessionStorage.setItem('df_cart', JSON.stringify(cart)); }
function addToCart(productId, qty) {
  if (!qty || qty < 1) qty = 1;
  var p = PRODUCTS.find(function(x) { return x.id === productId; });
  if (p && p.stock === 'out') { showToast('This item is out of stock', 'error'); return; }
  var cart = getCart();
  var existing = cart.find(function(x) { return x.id === productId; });
  if (existing) { existing.qty += qty; } else if (p) { cart.push({ id: p.id, name: p.name, sku: p.sku, price: p.price, qty: qty }); }
  setCart(cart); updateCartBadge(); updateProductsCounter();
  showToast('Item added to cart', 'success');
}
function removeFromCart(productId) { setCart(getCart().filter(function(x) { return x.id !== productId; })); updateCartBadge(); updateProductsCounter(); }
function updateCartQty(productId, delta) {
  var cart = getCart(); var item = cart.find(function(x) { return x.id === productId; });
  if (item) { item.qty += delta; if (item.qty <= 0) { removeFromCart(productId); return; } }
  setCart(cart); updateCartBadge(); updateProductsCounter();
}
function getCartTotal() { return getCart().reduce(function(s, i) { return s + (i.price * i.qty); }, 0); }
function getCartCount() { return getCart().reduce(function(s, i) { return s + i.qty; }, 0); }
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
    selected.innerHTML = '<div style="display:flex;align-items:center;justify-content:space-between;padding:16px;background:var(--success-light);border:1px solid #A7F3D0;border-radius:var(--radius-md);"><div><div style="font-size:15px;font-weight:700;color:var(--success-text);">' + customer.company + '</div><div style="font-size:13px;color:var(--gray-600);margin-top:2px;">' + customer.contact + ' · ' + customer.phone + '</div><div style="font-size:12px;color:var(--gray-500);margin-top:2px;">' + customer.email + '</div></div><button class="btn btn-sm btn-secondary" onclick="deselectCustomer()">Change</button></div>';
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
    var customer = { id: Date.now(), company: form.querySelector('[name="company"]').value, contact: form.querySelector('[name="contact"]').value, phone: form.querySelector('[name="phone"]').value, email: form.querySelector('[name="email"]').value, address: form.querySelector('[name="address"]').value, notes: form.querySelector('[name="notes"]').value, orders: 0 };
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
    if (filter) filtered = filtered.filter(function(p) { return p.name.toLowerCase().includes(filter.toLowerCase()) || p.sku.toLowerCase().includes(filter.toLowerCase()); });
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
          '<div class="product-card-sku">SKU: ' + p.sku + '</div>' +
          '<div class="product-card-price">' + fmtPrice(p.price) + '</div>' +
          '<div class="product-card-stock">' + stockHTML(p.stock) + '</div>' +
          '<div class="product-card-footer">' +
            '<div class="product-card-qty"><button onclick="this.nextElementSibling.value=Math.max(1,parseInt(this.nextElementSibling.value||1)-1)">−</button><input type="number" value="1" min="1" max="99" class="pc-qty-input" data-pid="' + p.id + '"><button onclick="this.previousElementSibling.value=Math.min(99,parseInt(this.previousElementSibling.value||1)+1)">+</button></div>' +
            '<button class="product-card-add" onclick="addToCart(' + p.id + ',parseInt(this.closest(\'.product-card\').querySelector(\'.pc-qty-input\').value||1))">Add</button>' +
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
  var totalEl = document.getElementById('cartTotal');
  var countEl = document.getElementById('cartCount');
  var emptyEl = document.getElementById('cartEmpty');
  var cartContent = document.getElementById('cartContent');
  if (!container) return;
  var cart = getCart();
  if (cart.length === 0) { if (emptyEl) emptyEl.classList.remove('hidden'); if (cartContent) cartContent.classList.add('hidden'); return; }
  if (emptyEl) emptyEl.classList.add('hidden');
  if (cartContent) cartContent.classList.remove('hidden');
  container.innerHTML = cart.map(function(item) {
    return '<div class="cart-item"><div class="cart-item-info"><div class="cart-item-name">' + item.name + '</div><div class="cart-item-sku">SKU: ' + item.sku + ' · ' + fmtPrice(item.price) + ' each</div></div><div class="qty-control"><button class="qty-btn" onclick="updateCartQty(' + item.id + ',-1);renderCart();"><i class="fas fa-minus"></i></button><div class="qty-value">' + item.qty + '</div><button class="qty-btn" onclick="updateCartQty(' + item.id + ',1);renderCart();"><i class="fas fa-plus"></i></button></div><div class="cart-item-price">' + fmtPrice(item.price * item.qty) + '</div><button class="cart-item-remove" onclick="removeFromCart(' + item.id + ');renderCart();"><i class="fas fa-trash-alt"></i></button></div>';
  }).join('');
  if (totalEl) totalEl.textContent = fmtPrice(getCartTotal());
  if (countEl) countEl.textContent = cart.reduce(function(s, i) { return s + i.qty; }, 0) + ' item(s)';
}

/* ---- Review Page ---- */
function initReviewPage() {
  var customer = getSessionData('selected_customer');
  var custEl = document.getElementById('reviewCustomer');
  if (custEl && customer) { custEl.innerHTML = '<div class="detail-value" style="font-size:16px;">' + customer.company + '</div><div style="font-size:13px;color:var(--gray-500);margin-top:4px;">' + customer.contact + ' · ' + customer.phone + '</div><div style="font-size:13px;color:var(--gray-500);">' + customer.email + '</div>' + (customer.address ? '<div style="font-size:13px;color:var(--gray-500);">' + customer.address + '</div>' : ''); }
  var itemsEl = document.getElementById('reviewItems');
  var totalEl = document.getElementById('reviewTotal');
  var cart = getCart();
  if (itemsEl && cart.length > 0) {
    itemsEl.innerHTML = cart.map(function(item, idx) { return '<tr><td>' + (idx + 1) + '</td><td><strong>' + item.name + '</strong><br><span class="text-muted" style="font-size:12px;">SKU: ' + item.sku + '</span></td><td class="text-right">' + item.qty + '</td><td class="text-right">' + fmtPrice(item.price) + '</td><td class="text-right font-bold">' + fmtPrice(item.price * item.qty) + '</td></tr>'; }).join('');
  }
  if (totalEl) totalEl.textContent = fmtPrice(getCartTotal());
  var remarksEl = document.getElementById('reviewRemarks');
  var savedRemarks = getSessionData('order_remarks');
  if (remarksEl && savedRemarks) remarksEl.textContent = savedRemarks;
  renderStatusFlow('submitted');
}

function submitOrder() { clearCart(); sessionStorage.removeItem('df_selected_customer'); sessionStorage.removeItem('df_order_remarks'); sessionStorage.removeItem('df_visit_purpose'); showToast('Order request submitted successfully!', 'success'); setTimeout(function() { window.location.href = 'my-requests.html'; }, 800); }

/* ---- Status Flow ---- */
function renderStatusFlow(status) {
  var el = document.getElementById('statusFlow');
  if (!el) return;
  var steps = ['Draft', 'Submitted', 'Quotation Preparing', 'Quotation Sent', 'Order Confirmed', 'Completed'];
  var order = { draft: 0, submitted: 1, preparing: 2, sent: 3, confirmed: 4, completed: 5 };
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
  var order = { draft: 0, submitted: 1, preparing: 2, sent: 3, confirmed: 4, completed: 5 };
  var current = order[status] !== undefined ? order[status] : 0;
  var items = [
    { label: 'Draft Created', desc: 'Request created by salesperson', icon: 'fa-file' },
    { label: 'Submitted', desc: 'Request submitted to office', icon: 'fa-paper-plane' },
    { label: 'Quotation Preparing', desc: 'Office is preparing quotation', icon: 'fa-cog' },
    { label: 'Quotation Sent', desc: 'Quotation sent to customer', icon: 'fa-envelope' },
    { label: 'Order Confirmed', desc: 'Customer confirmed the order', icon: 'fa-check-double' },
    { label: 'Completed', desc: 'Order delivered and closed', icon: 'fa-check' }
  ];
  var times = ['18 Dec 2024, 09:14 AM', '18 Dec 2024, 09:15 AM', '—', '—', '—', '—'];
  var html = '';
  items.forEach(function(item, i) {
    var cls = i < current ? 'completed' : (i === current ? 'active' : 'pending');
    var iconHtml = i < current ? '<i class="fas fa-check"></i>' : (i === current ? '<i class="fas ' + item.icon + '"></i>' : '');
    html += '<div class="timeline-item ' + cls + '"><div class="timeline-dot ' + cls + '">' + iconHtml + '</div><div class="timeline-label">' + item.label + '</div><div class="timeline-time">' + (i <= current ? times[i] : 'Pending') + '</div><div class="timeline-desc">' + item.desc + '</div></div>';
  });
  el.innerHTML = html;
}

/* ---- Sales Request Details ---- */
function loadSalesRequestDetails() {
  var params = new URLSearchParams(window.location.search);
  var reqId = params.get('id') || 'REQ-2024-0047';
  var req = REQUESTS.find(function(r) { return r.id === reqId; }) || REQUESTS[0];
  var customer = CUSTOMERS.find(function(c) { return c.company === req.customer; }) || CUSTOMERS[0];
  var el = function(id) { return document.getElementById(id); };
  if (el('srdId')) el('srdId').textContent = req.id;
  if (el('srdDate')) el('srdDate').textContent = req.date;
  if (el('srdSalesperson')) el('srdSalesperson').textContent = req.salesperson;
  if (el('srdStatus')) el('srdStatus').innerHTML = statusBadge(req.status);
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
    var runningTotal = 0;
    itemsEl.innerHTML = items.map(function(p, i) {
      var qty = [2, 1, 3, 5, 1, 2, 4, 1, 2, 3][i % 10];
      var lineTotal = p.price * qty; runningTotal += lineTotal;
      return '<tr><td>' + (i + 1) + '</td><td><strong>' + p.name + '</strong><br><span class="text-muted" style="font-size:12px;">' + p.sku + '</span></td><td class="text-right">' + qty + '</td><td class="text-right">' + fmtPrice(p.price) + '</td><td class="text-right font-bold">' + fmtPrice(lineTotal) + '</td></tr>';
    }).join('');
    if (el('srdTotal')) el('srdTotal').textContent = fmtPrice(runningTotal);
  }
}

/* ---- Admin Request Details ---- */
function loadRequestDetails() {
  var params = new URLSearchParams(window.location.search);
  var reqId = params.get('id') || 'REQ-2024-0047';
  var req = REQUESTS.find(function(r) { return r.id === reqId; }) || REQUESTS[0];
  var customer = CUSTOMERS.find(function(c) { return c.company === req.customer; }) || CUSTOMERS[0];
  var el = function(id) { return document.getElementById(id); };
  if (el('reqId')) el('reqId').textContent = req.id;
  if (el('reqDate')) el('reqDate').textContent = req.date;
  if (el('reqSalesperson')) el('reqSalesperson').textContent = req.salesperson;
  if (el('reqStatus')) el('reqStatus').innerHTML = statusBadge(req.status);
  if (el('custCompany')) el('custCompany').textContent = customer.company;
  if (el('custContact')) el('custContact').textContent = customer.contact;
  if (el('custPhone')) el('custPhone').textContent = customer.phone;
  if (el('custEmail')) el('custEmail').textContent = customer.email;
  if (el('custAddress')) el('custAddress').textContent = customer.address;
  if (el('reqRemarks')) el('reqRemarks').textContent = req.remarks || '—';
  var items = PRODUCTS.slice(0, req.items);
  var itemsEl = el('reqItems');
  if (itemsEl) {
    var runningTotal = 0;
    itemsEl.innerHTML = items.map(function(p, i) {
      var qty = [2, 1, 3, 5, 1, 2, 4, 1, 2, 3][i % 10];
      var lineTotal = p.price * qty; runningTotal += lineTotal;
      return '<tr><td>' + (i + 1) + '</td><td><strong>' + p.name + '</strong><br><span class="text-muted" style="font-size:12px;">' + p.sku + '</span></td><td class="text-right">' + qty + '</td><td class="text-right">' + fmtPrice(p.price) + '</td><td class="text-right font-bold">' + fmtPrice(lineTotal) + '</td></tr>';
    }).join('');
    if (el('reqTotal')) el('reqTotal').textContent = fmtPrice(runningTotal);
  }
  setSessionData('current_request', Object.assign({}, req, { customer: customer, items: items }));
}

/* ---- Quotation Form ---- */
function initQuotationForm() {
  var req = getSessionData('current_request');
  if (!req) return;
  var el = function(id) { return document.getElementById(id); };
  if (el('qReqId')) el('qReqId').textContent = req.id;
  if (el('qCustomer')) el('qCustomer').textContent = req.customer;
  var today = new Date();
  if (el('qDate')) el('qDate').value = today.toISOString().split('T')[0];
  var validUntil = new Date(today); validUntil.setDate(validUntil.getDate() + 30);
  if (el('qValidity')) el('qValidity').value = validUntil.toISOString().split('T')[0];
  if (el('qRef')) el('qRef').value = 'QT-' + today.getFullYear() + '-' + String(Math.floor(Math.random() * 9000) + 1000);
  if (el('qTax')) el('qTax').value = VAT_RATE;
  var itemsEl = el('qItems');
  if (itemsEl && req.items) {
    var runningTotal = 0;
    itemsEl.innerHTML = req.items.map(function(p, i) {
      var qty = [2, 1, 3, 5, 1, 2, 4, 1, 2, 3][i % 10];
      var lineTotal = p.price * qty; runningTotal += lineTotal;
      return '<tr><td>' + (i + 1) + '</td><td>' + p.name + '<br><span class="text-muted" style="font-size:12px;">' + p.sku + '</span></td><td class="text-right">' + qty + '</td><td class="text-right">' + fmtPrice(p.price) + '</td><td class="text-right font-bold">' + fmtPrice(lineTotal) + '</td></tr>';
    }).join('');
    if (el('qSubtotal')) el('qSubtotal').textContent = fmtPrice(runningTotal);
    if (el('qGrandTotal')) el('qGrandTotal').textContent = fmtPrice(runningTotal);
    setSessionData('quotation_subtotal', runningTotal);
  }
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

/* ---- Quotation Preview ---- */
function loadQuotationPreview() {
  var req = getSessionData('current_request');
  if (!req) return;
  var el = function(id) { return document.getElementById(id); };
  if (el('qpNumber')) el('qpNumber').textContent = document.getElementById('qRef') ? document.getElementById('qRef').value : 'QT-2024-1234';
  if (el('qpDate')) el('qpDate').textContent = new Date().toLocaleDateString('en-SA', { year: 'numeric', month: 'long', day: 'numeric' });
  if (el('qpValidity')) el('qpValidity').textContent = document.getElementById('qValidity') ? document.getElementById('qValidity').value : '2025-01-18';
  if (el('qpPayment')) el('qpPayment').textContent = document.getElementById('qPayment') ? document.getElementById('qPayment').value : 'Net 30';
  if (el('qpBillCompany')) el('qpBillCompany').textContent = req.customer.company;
  if (el('qpBillContact')) el('qpBillContact').textContent = req.customer.contact;
  if (el('qpBillAddress')) el('qpBillAddress').textContent = req.customer.address;
  if (el('qpBillPhone')) el('qpBillPhone').textContent = 'Tel: ' + req.customer.phone;
  if (el('qpBillEmail')) el('qpBillEmail').textContent = 'Email: ' + req.customer.email;
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
    if (el('qpDiscount')) { el('qpDiscount').textContent = '-' + fmtPrice(discountAmt); el('qpDiscount').closest('.qp-totals-row').style.display = discount > 0 ? 'flex' : 'none'; }
    if (el('qpTax')) el('qpTax').textContent = fmtPrice(taxAmt);
    if (el('qpGrand')) el('qpGrand').textContent = fmtPrice(grand);
  }
}

function markAsSent() { showToast('Quotation marked as sent', 'success'); setTimeout(function() { window.location.href = 'requests.html'; }, 1000); }
function markCompleted() { showToast('Request marked as completed', 'success'); setTimeout(function() { window.location.href = 'requests.html'; }, 1000); }
function sendWhatsApp() { showToast('Opening WhatsApp...', 'info'); setTimeout(function() { showToast('Quotation sent via WhatsApp (simulated)', 'success'); }, 1500); }

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

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', function() {
  initSidebar();
  initActiveNav();
  initNotifications();
  initTabs();
  initToggles();
  updateCartBadge();
  initClickableRows();

  if (document.getElementById('customerSearchInput')) initCustomerSearch();
  if (document.getElementById('newCustomerForm')) initAddCustomerForm();
  if (document.getElementById('customerTableSearch')) initCustomerTableSearch();
  if (document.getElementById('productGrid')) initProductCatalog();
  if (document.getElementById('cartItems')) initCartPage();
  if (document.getElementById('reviewItems')) initReviewPage();
  if (document.getElementById('srdId')) loadSalesRequestDetails();
  if (document.getElementById('reqId')) loadRequestDetails();
  if (document.getElementById('qReqId')) initQuotationForm();
  if (document.getElementById('qpNumber')) loadQuotationPreview();
  if (document.getElementById('adminProductCategory')) initAdminProductFilter();
  if (document.getElementById('visitDate')) initVisitFields();

  var searchBox = document.getElementById('customerSearchBox');
  if (searchBox) { var sc = getSessionData('selected_customer'); if (sc) selectCustomer(sc); }

  var qD = document.getElementById('qDiscount');
  var qT = document.getElementById('qTax');
  if (qD) qD.addEventListener('input', updateQuotationTotals);
  if (qT) qT.addEventListener('input', updateQuotationTotals);
});