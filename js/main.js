/* ============================================================
   Dulce Hogar — Repostería, Postres y Bebidas
   HTML + CSS + JavaScript puro (sin frameworks, sin npm)

   Para editar: busca CONFIG, PRODUCTS y TESTIMONIALS más abajo.
   ============================================================ */

/* ==================== CONFIG ==================== */
const CONFIG = {
  name: 'Dulce Hogar',
  email: 'pedidos@dulcehogar.com',
  phone: '+503 7700 0000',
  whatsapp: '50377000000',
  address: 'Col. Escalón, San Salvador, El Salvador',
  hours: 'Lun-Sáb: 8:00 AM - 7:00 PM',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
    whatsapp: 'https://wa.me/50377000000',
  },
};

/* ==================== PRODUCTOS ==================== */
const CATEGORIES = ['Todo', 'Postres', 'Repostería', 'Bebidas'];
let activeCategory = 'Todo';

const PRODUCTS = [
  {
    name: 'Pastel de Chocolate Triple',
    description: 'Tres capas de bizcocho de chocolate intenso con relleno de ganache y frutos rojos.',
    price: '$18.50',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Bestseller',
    tagType: 'bestseller',
    category: 'Postres',
  },
  {
    name: 'Cheesecake de Frutos Rojos',
    description: 'Tarta de queso cremosa con cobertura de fresas, frambuesas y moras frescas.',
    price: '$15.00',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Postres',
  },
  {
    name: 'Tarta de Frutas Frescas',
    description: 'Base crujiente de vainilla con crema pastelera y frutas de temporada.',
    price: '$14.50',
    image: 'https://images.pexels.com/photos/1157835/pexels-photo-1157835.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Nuevo',
    tagType: 'new',
    category: 'Postres',
  },
  {
    name: 'Cupcakes Rosados con Chispas',
    description: 'Six cupcakes de vainilla con buttercream rosa y chispas decorativas.',
    price: '$9.90',
    image: 'https://images.pexels.com/photos/11128671/pexels-photo-11128671.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Repostería',
  },
  {
    name: 'Cupcakes de Frutas Rojas',
    description: 'Four cupcakes con crema batida, fresas, moras y arándanos frescos.',
    price: '$8.50',
    image: 'https://images.pexels.com/photos/4109792/pexels-photo-4109792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Repostería',
  },
  {
    name: 'Cupcakes Cream & Marshmallow',
    description: 'Cupcakes esponjosos con crema de malvavisco tostada y decoración.',
    price: '$7.90',
    image: 'https://images.pexels.com/photos/7016191/pexels-photo-7016191.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Repostería',
  },
  {
    name: 'Selección de Pastelitos',
    description: 'Caja variada de mini pastelitos: chocolate, frutas y crema. Ideal para regalar.',
    price: '$22.00',
    image: 'https://images.pexels.com/photos/13914952/pexels-photo-13914952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Edición especial',
    tagType: 'new',
    category: 'Repostería',
  },
  {
    name: 'Latte de Vainilla',
    description: 'Espresso suave con leche vaporizada y esencia de vainilla. Arte en cada taza.',
    price: '$4.50',
    image: 'https://images.pexels.com/photos/34452163/pexels-photo-34452163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Favorito',
    tagType: 'bestseller',
    category: 'Bebidas',
  },
  {
    name: 'Cappuccino Clásico',
    description: 'Café espresso con espuma de leche cremosa. Espolvoreado con cacao salvadoreño.',
    price: '$3.90',
    image: 'https://images.pexels.com/photos/7225739/pexels-photo-7225739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Bebidas',
  },
];

/* ==================== OPINIONES ==================== */
const TESTIMONIALS = [
  {
    name: 'María Fernanda',
    role: 'Cliente desde 2022',
    text: 'El pastel de chocolate triple es el mejor que he probado en mi vida. Lo pedí para el cumpleaños de mi hija y todos quedaron encantados. ¡Sabor de verdad!',
    color: '#F07A4D',
  },
  {
    name: 'Carlos Ernesto',
    role: 'Cliente desde 2021',
    text: 'Los cupcakes son una obra de arte. Se nota que cada uno está hecho con amor. La atención por WhatsApp fue rápida y el pedido llegó perfecto.',
    color: '#E87B8B',
  },
  {
    name: 'Andrea Guadalupe',
    role: 'Cliente desde 2023',
    text: 'Pedí una selección de pastelitos para un evento en la oficina. No duraron ni diez minutos. El latte de vainilla es el mejor de San Salvador.',
    color: '#D09B66',
  },
];

/* ==================== ICONOS ==================== */
const SOCIAL_ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
};

const SOCIAL_LIST = [
  { key: 'instagram', label: 'Instagram' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'tiktok', label: 'TikTok' },
  { key: 'whatsapp', label: 'WhatsApp' },
];

const CART_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>';
const STAR_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';

/* ==================== RENDER ==================== */
function renderSocialIcons(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = SOCIAL_LIST.map(function (s) {
    return '<a href="' + CONFIG.social[s.key] + '" target="_blank" rel="noopener noreferrer" aria-label="' + s.label + '">' + SOCIAL_ICONS[s.key] + '</a>';
  }).join('');
}

function renderFilters() {
  var container = document.getElementById('filters');
  if (!container) return;
  container.innerHTML = CATEGORIES.map(function (cat) {
    return '<button class="filter-btn' + (cat === activeCategory ? ' active' : '') + '" data-category="' + cat + '">' + cat + '</button>';
  }).join('');
  container.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      activeCategory = btn.dataset.category;
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts() {
  var grid = document.getElementById('productsGrid');
  if (!grid) return;
  var filtered = activeCategory === 'Todo'
    ? PRODUCTS
    : PRODUCTS.filter(function (p) { return p.category === activeCategory; });

  grid.innerHTML = filtered.map(function (p) {
    var tagHtml = p.tag
      ? '<span class="product-tag ' + (p.tagType || '') + '">' + p.tag + '</span>'
      : '';
    return '' +
      '<article class="product-card reveal" data-reveal data-reveal-anim="scale">' +
        '<div class="product-image-wrap">' +
          '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" />' +
          tagHtml +
          '<button class="product-add">' + CART_ICON + ' Ordenar</button>' +
        '</div>' +
        '<div class="product-info">' +
          '<p class="product-category">' + p.category + '</p>' +
          '<h3 class="product-name">' + p.name + '</h3>' +
          '<p class="product-description">' + p.description + '</p>' +
          '<p class="product-price">' + p.price + '</p>' +
        '</div>' +
      '</article>';
  }).join('');
  observeReveals();
}

function renderTestimonials() {
  var grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  var stars = STAR_ICON.repeat(5);
  grid.innerHTML = TESTIMONIALS.map(function (t) {
    var initials = t.name.split(' ').map(function (n) { return n[0]; }).join('').slice(0, 2);
    return '' +
      '<div class="testimonial-card reveal" data-reveal>' +
        '<div class="testimonial-stars">' + stars + '</div>' +
        '<p class="testimonial-text">"' + t.text + '"</p>' +
        '<div class="testimonial-author">' +
          '<span class="testimonial-avatar" style="background:' + t.color + '">' + initials + '</span>' +
          '<div>' +
            '<p class="testimonial-name">' + t.name + '</p>' +
            '<p class="testimonial-role">' + t.role + '</p>' +
          '</div>' +
        '</div>' +
      '</div>';
  }).join('');
  observeReveals();
}

function renderMobileMenu() {
  var container = document.querySelector('.mobile-menu-links');
  if (!container) return;
  var navLinks = document.querySelectorAll('#navLinks a');
  container.innerHTML = '';
  navLinks.forEach(function (link) {
    var clone = link.cloneNode(true);
    clone.onclick = closeMobileMenu;
    container.appendChild(clone);
  });
}

/* ==================== SCROLL REVEAL ==================== */
var revealObserver = null;

function observeReveals() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    if (!el.classList.contains('is-visible')) revealObserver.observe(el);
  });
}

/* ==================== NAVBAR SCROLL ==================== */
function setupNavbarScroll() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;
  function onScroll() {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ==================== MOBILE MENU ==================== */
function toggleMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var menuIcon = document.getElementById('menuIcon');
  var closeIcon = document.getElementById('closeIcon');
  if (!menu) return;
  var isOpen = menu.classList.contains('open');
  if (isOpen) {
    menu.classList.remove('open');
    document.body.style.overflow = '';
    if (menuIcon) menuIcon.style.display = 'block';
    if (closeIcon) closeIcon.style.display = 'none';
  } else {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (menuIcon) menuIcon.style.display = 'none';
    if (closeIcon) closeIcon.style.display = 'block';
  }
}

function closeMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var menuIcon = document.getElementById('menuIcon');
  var closeIcon = document.getElementById('closeIcon');
  if (menu) menu.classList.remove('open');
  document.body.style.overflow = '';
  if (menuIcon) menuIcon.style.display = 'block';
  if (closeIcon) closeIcon.style.display = 'none';
}

/* ==================== ORDER FORM ==================== */
function setupOrderForm() {
  var form = document.getElementById('orderForm');
  var success = document.getElementById('formSuccess');
  if (!form || !success) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('orderName');
    var phone = document.getElementById('orderPhone');
    var details = document.getElementById('orderDetails');
    if (name.value.trim() && phone.value.trim() && details.value.trim()) {
      success.classList.add('show');
      form.reset();
      setTimeout(function () { success.classList.remove('show'); }, 4000);
    }
  });
}

/* ==================== FOOTER YEAR ==================== */
function setFooterYear() {
  var el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ==================== INIT ==================== */
document.addEventListener('DOMContentLoaded', function () {
  renderSocialIcons('contactSocial');
  renderSocialIcons('footerSocial');
  renderMobileMenu();
  renderFilters();
  renderProducts();
  renderTestimonials();
  setupNavbarScroll();
  setupOrderForm();
  setFooterYear();
  observeReveals();
});
