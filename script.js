/*****************************************
 * CONFIGURATION
 *****************************************/
const NUMERO_WHATSAPP = "22670619396"; // ton numéro

const produits = [
  { id:1, nom: "Gourde Mixeur Portable", prix: 4500, cat:"gourde", image:"https://i.postimg.cc/HkFyXvjq/Gemini-Generated-Image-fbysrwfbysrwfbys.png" },
  { id:2, nom: "Gourde Thermos Intelligente", prix: 5000, cat:"gourde", image:"https://i.postimg.cc/RFgCQqXt/Gemini-Generated-Image-fbh6adfbh6adfbh6.png" },
  { id:3, nom: "Écouteurs Sans Fil (AirPods)", prix: 6500, cat:"audio", image:"https://i.postimg.cc/Z5zxrQGS/Gemini-Generated-Image-do7btcdo7btcdo7b.png" },
  { id:4, nom: "Porte Ordinateur (Ventilé)", prix: 14500, cat:"pc", image:"https://i.postimg.cc/4NrMMZ0R/Gemini-Generated-Image-t5a89xt5a89xt5a8.png" },
  { id:5, nom: "Smart Scalp Massager", prix: 8000, cat:"bem", image:"https://i.postimg.cc/hvxDFMKQ/Gemini-Generated-Image-vq1rcfvq1rcfvq1r.png" },
  { id:6, nom: "Massage Stick Pro", prix: 7000, cat:"bem", image:"https://i.postimg.cc/SRmTqxhv/Gemini-Generated-Image-o5z450o5z450o5z4.png" },
  { id:7, nom: "Socle pour téléphone (360°)", prix: 4000, cat:"autre", image:"https://i.postimg.cc/qqZ8YJMN/Gemini-Generated-Image-nf9zxjnf9zxjnf9z.png" },
  { id:8, nom: "Lumière Pro", prix: 7000, cat:"autre", image:"https://i.postimg.cc/BvYT1vY4/Gemini-Generated-Image-4569n24569n24569.png" },
  { id:9, nom: "Éclat Pro", prix: 9500, cat:"autre", image:"https://i.postimg.cc/LXkmbJrv/Gemini-Generated-Image-fmp4h4fmp4h4fmp4.png" },
  { id: 10, nom: "Bouilloire chauffante électrique", prix: 12500, cat:"autre", image:"https://i.postimg.cc/rFrfX5hq/Gemini-Generated-Image-7yfrky7yfrky7yfr.png" },
  { id: 11, nom: "Tondeuse SONAR 3-en-1", prix: 8500, cat:"coiffure", image:"https://i.postimg.cc/prg7N8m7/Gemini-Generated-Image-5g3xxc5g3xxc5g3x.png" },
  { id: 12, nom: "Perceuse Sans Fil avec Coffret", prix: 14500, cat:"bricolage", image:"https://i.postimg.cc/3rvQ1J0R/Gemini-Generated-Image-hhjj4ihhjj4ihhjj.png" },
  { id: 13, nom: "Planche de Pompes Pliable", prix: 9000, cat:"sport", image:"https://i.postimg.cc/cLJDDXkk/Gemini-Generated-Image-5d0prs5d0prs5d0p.png" },
  { id: 14, nom: "Sèche-Cheveux POREE", prix: 11500, cat:"coiffure", image:"https://i.postimg.cc/zG2yPhrC/Gemini-Generated-Image-kojvifkojvifkojv.png" },
  { id: 15, nom: "Aspirateur SOKANY", prix: 39000, cat:"maison", image:"https://i.postimg.cc/vHT9kkMZ/Gemini-Generated-Image-8r12n58r12n58r12.png" },
  { id: 16, nom: "Mini Ventilateur Portable", prix: 2000, cat:"bem", image:"https://i.postimg.cc/sf6GYmSx/Gemini-Generated-Image-v8hv8v8hv8v8hv8v.png" },
  { id: 17, nom: "Presse-Agrumes SILVER LOVE", prix: 6500, cat:"cuisine", image:"https://i.postimg.cc/fR4LCrbn/Gemini-Generated-Image-k30ae0k30ae0k30a.png" },
  { id: 18, nom: "Tondeuse Daling Sans Fil", prix: 7500, cat:"coiffure", image:"https://i.postimg.cc/QN9Kq5qj/Gemini-Generated-Image-agnus9agnus9agnu.png" },
  { id: 19, nom: "Ultra Série 3", prix: 11500, cat:"autre", image:"https://i.postimg.cc/fT7LHvSD/Gemini-Generated-Image-9nxfzh9nxfzh9nxf.png" },
   { id: 20, nom: "Ventilateur de Bureau", prix: 5500, cat:"bem", image:"https://i.postimg.cc/L8KP5VG0/Gemini-Generated-Image-mptnszmptnszmptn.png" },
  { id: 21, nom: "Kit Karaoké Sans Fil | 2 Micros", prix: 4000, cat:"audio", image:"https://i.postimg.cc/Jh7W599H/Gemini-Generated-Image-nj1wgznj1wgznj1w.png" },
  { id: 22, nom: "Ventilateur Humidificateur LED", prix: 5500, cat:"bem", image:"https://i.postimg.cc/W3wVms4p/Gemini-Generated-Image-z8h7k1z8h7k1z8h7.png" }
];

/*****************************************
 * STATE & STORAGE
 *****************************************/
const LS_CART = 'lumora_cart_v1';
const LS_FAVS = 'lumora_favs_v1';

let state = {
  cart: JSON.parse(localStorage.getItem(LS_CART) || '[]'),
  favs: JSON.parse(localStorage.getItem(LS_FAVS) || '[]'),
  filter: 'all',
  query: '',
  sortedByPrice: false,
  slideIndex: 0
};

/*****************************************
 * UTILS
 *****************************************/
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

function formatPrice(n){ return new Intl.NumberFormat('fr-FR').format(n) + ' FCFA'; }
function saveState(){
  localStorage.setItem(LS_CART, JSON.stringify(state.cart));
  localStorage.setItem(LS_FAVS, JSON.stringify(state.favs));
  updateBadges();
}
function toast(msg){
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=> t.classList.remove('show'), 2200);
}
function genWhatsAppLink(p){
  const msg = `Bonjour, je suis intéressé par : ${p.nom} au prix de ${formatPrice(p.prix)}.`;
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

/*****************************************
 * RENDER PRODUITS
 *****************************************/
const grid = $('#grid-produits');
const resultCount = $('#result-count');

function getFilteredProducts(){
  let list = produits.slice();
  if(state.filter !== 'all') list = list.filter(p=>p.cat===state.filter);
  if(state.query) list = list.filter(p=>p.nom.toLowerCase().includes(state.query.toLowerCase()));
  if(state.sortedByPrice) list.sort((a,b)=>a.prix-b.prix);
  return list;
}

function renderProducts(){
  const list = getFilteredProducts();
  grid.innerHTML = '';
  resultCount.textContent = list.length;

  list.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-image" data-id="${p.id}">
        <img src="${p.image}" alt="${p.nom}">
      </div>
      <div class="card-body">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div class="product-title">${p.nom}</div>
            <div class="product-price">${formatPrice(p.prix)}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end">
            <button class="fav-btn" data-id="${p.id}">${state.favs.includes(p.id)?'💖':'🤍'}</button>
            <button class="btn btn-quick" data-id="${p.id}">Ajouter</button>
          </div>
        </div>
        <div style="display:flex;gap:8px;margin-top:6px">
          <a class="btn btn-whatsapp" href="${genWhatsAppLink(p)}" target="_blank">Commander</a>
          <button class="btn btn-quick view-btn" data-id="${p.id}">Voir</button>
        </div>
      </div>
    `;
    grid.appendChild(card);

    card.querySelector('.card-image img').addEventListener('click', ()=> openLightboxForId(p.id));
  });

  $$('.btn-quick').forEach(b=>b.onclick = ()=> addToCart(Number(b.dataset.id)));
  $$('.fav-btn').forEach(b=>b.onclick = ()=>{
    toggleFav(Number(b.dataset.id));
    renderProducts();
  });
  $$('.view-btn').forEach(b=>b.onclick = ()=> openLightboxForId(Number(b.dataset.id)));
}

/*****************************************
 * CART
 *****************************************/
function addToCart(id, qty=1){
  const item = state.cart.find(x=>x.id===id);
  if(item){ item.qty += qty; }
  else state.cart.push({id, qty});
  saveState();
  updateCartCount();
  renderCartItems();
  toast('Ajouté au panier');
}
function removeFromCart(id){ state.cart = state.cart.filter(i=>i.id!==id); saveState(); renderCartItems(); updateCartCount(); }
function changeQty(id, delta){
  const it = state.cart.find(i=>i.id===id);
  if(!it) return;
  it.qty = Math.max(1, it.qty+delta);
  saveState(); renderCartItems(); updateCartCount();
}
function cartTotal(){ return state.cart.reduce((s,it)=>{ const p=produits.find(x=>x.id===it.id); return s+(p?p.prix*it.qty:0); },0); }
function updateCartCount(){ $('#cart-count').textContent=state.cart.reduce((s,i)=>s+i.qty,0); $('#cart-total').textContent=formatPrice(cartTotal()); }
function renderCartItems(){
  const listEl = $('#cart-items');
  listEl.innerHTML='';
  if(state.cart.length===0){ listEl.innerHTML='<div style="padding:18px;color:#666">Panier vide</div>'; return; }
  state.cart.forEach(it=>{
    const p=produits.find(x=>x.id===it.id);
    if(!p) return;
    const div = document.createElement('div');
    div.className='cart-item';
    div.innerHTML=`
      <img src="${p.image}" alt="${p.nom}">
      <div style="flex:1">
        <div style="font-weight:700">${p.nom}</div>
        <div style="color:#666">${formatPrice(p.prix)} x ${it.qty}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <button class="chip" data-action="plus" data-id="${p.id}">+</button>
        <button class="chip" data-action="minus" data-id="${p.id}">-</button>
        <button class="chip" data-action="remove" data-id="${p.id}">Supprimer</button>
      </div>
    `;
    listEl.appendChild(div);
  });
  listEl.querySelectorAll('[data-action]').forEach(b=>{
    b.onclick = ()=> {
      const act=b.dataset.action; const id=Number(b.dataset.id);
      if(act==='plus') changeQty(id,1);
      if(act==='minus') changeQty(id,-1);
      if(act==='remove') removeFromCart(id);
    }
  });
}

/*****************************************
 * FAVORIS
 *****************************************/
function toggleFav(id){
  if(state.favs.includes(id)) state.favs=state.favs.filter(x=>x!==id);
  else state.favs.push(id);
  saveState();
  renderFavItems();
  $('#fav-count').textContent=state.favs.length;
}
function renderFavItems(){
  const el = $('#fav-items'); el.innerHTML='';
  if(state.favs.length===0){ el.innerHTML='<div style="padding:18px;color:#666">Aucun favori</div>'; return }
  state.favs.forEach(id=>{
    const p = produits.find(x=>x.id===id);
    if(!p) return;
    const node=document.createElement('div'); node.className='cart-item';
    node.innerHTML=`
      <img src="${p.image}" alt="${p.nom}">
      <div style="flex:1">
        <div style="font-weight:700">${p.nom}</div>
        <div style="color:#666">${formatPrice(p.prix)}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <button class="chip" data-add="${p.id}">Ajouter au panier</button>
        <button class="chip" data-remove="${p.id}">Retirer</button>
      </div>
    `;
    el.appendChild(node);
  });
  el.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>addToCart(Number(b.dataset.add)));
  el.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{ toggleFav(Number(b.dataset.remove)); renderProducts(); });
}

/*****************************************
 * LIGHTBOX
 *****************************************/
const lightbox = $('#lightbox');
const lbimg = $('#lb-img');
let lbIndex = 0;
function openLightboxForId(id){
  const idx = produits.findIndex(p=>p.id===id);
  if(idx<0) return;
  lbIndex = idx;
  showLB();
}
function showLB(){ const p=produits[lbIndex]; lbimg.src=p.image; lightbox.classList.add('active'); }
$('#lb-close').onclick = ()=> lightbox.classList.remove('active');
$('#lb-prev').onclick = ()=> { lbIndex = (lbIndex-1+produits.length)%produits.length; showLB(); }
$('#lb-next').onclick = ()=> { lbIndex = (lbIndex+1)%produits.length; showLB(); }
lightbox.onclick = e=> { if(e.target===lightbox) lightbox.classList.remove('active'); }

/*****************************************
 * SLIDER PROMO
 *****************************************/
const slidesEl = $('#slides');
const slideCount = slidesEl.children.length;
function showSlide(i){ state.slideIndex=(i+slideCount)%slideCount; slidesEl.style.transform=`translateX(-${state.slideIndex*100}%)`; }
$('#prev-slide').onclick = ()=> showSlide(state.slideIndex-1);
$('#next-slide').onclick = ()=> showSlide(state.slideIndex+1);
setInterval(()=> showSlide(state.slideIndex+1),6000);

/*****************************************
 * SEARCH / FILTER / SORT
 *****************************************/
$('#search').addEventListener('input', e=>{ state.query=e.target.value.trim(); renderProducts(); });
$$('#filters .chip').forEach(ch=>{
  ch.onclick = ()=> {
    $$('#filters .chip').forEach(c=>c.classList.remove('active'));
    ch.classList.add('active');
    state.filter = ch.dataset.cat;
    renderProducts();
  }
});
$('#sort-price').onclick = ()=>{
  state.sortedByPrice = !state.sortedByPrice;
  $('#sort-price').textContent = state.sortedByPrice?'Prix : bas→haut':'Trier par prix';
  renderProducts();
};
$('#clear-filters').onclick = ()=>{
  state.filter='all'; state.query=''; state.sortedByPrice=false;
  $('#search').value=''; $$('#filters .chip').forEach(c=>c.classList.remove('active'));
  $$('#filters .chip')[0].classList.add('active');
  $('#sort-price').textContent='Trier par prix';
  renderProducts();
};

/*****************************************
 * MODALS / CART / FAVS
 *****************************************/
$('#open-cart').onclick = ()=> { $('#cart-modal').classList.add('active'); renderCartItems(); $('#cart-modal').setAttribute('aria-hidden','false') }
$('#open-favs').onclick = ()=> { $('#favs-modal').classList.add('active'); renderFavItems(); $('#favs-modal').setAttribute('aria-hidden','false') }
$$('.close').forEach(b=>b.onclick=()=>{ const t=b.dataset.close;if(t) $('#'+t).classList.remove('active'); else b.closest('.modal').classList.remove('active'); });
$('#clear-cart').onclick = ()=> { state.cart=[]; saveState(); renderCartItems(); updateCartCount(); toast('Panier vidé'); }
$('#checkout').onclick = ()=>{
  if(state.cart.length===0){ toast('Votre panier est vide'); return }
  const lines = state.cart.map(it=>{ const p=produits.find(x=>x.id===it.id); return `${p.nom} x${it.qty} (${formatPrice(p.prix*it.qty)})`; });
  const total = formatPrice(cartTotal());
  const msg = `Bonjour, je souhaite commander :%0A${lines.join('%0A')}%0ATotal : ${total}`;
  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${msg}`;
  window.open(url,'_blank');
};

/*****************************************
 * THEME TOGGLE
 *****************************************/
$('#toggle-theme').onclick = ()=>{
  document.body.classList.toggle('dark');
  $('#toggle-theme').textContent = document.body.classList.contains('dark')?'☀️':'🌙';
};

/*****************************************
 * BADGES & INIT
 *****************************************/
function updateBadges(){
  $('#fav-count').textContent=state.favs.length;
  $('#cart-count').textContent=state.cart.reduce((s,i)=>s+i.qty,0);
  $('#cart-total').textContent=formatPrice(cartTotal());
}

// Initial render
renderProducts();
updateBadges();
renderCartItems();
renderFavItems();

// Accessibility: Esc pour fermer modals
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){
    $$('.modal').forEach(m=>m.classList.remove('active'));
    lightbox.classList.remove('active');
  }
});

// Sauvegarde avant unload
window.addEventListener('beforeunload', saveState);
