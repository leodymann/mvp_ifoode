const stores = [
  {
    id: "bytetruck",
    slug: "ByteTruck",
    name: "ByteTruck",
    category: "Hamburguer",
    meta: "22-35 min - 4,8",
    delivery: "R$ 5,99",
    image: "cardapios/fachada.jpg",
    hero: "cardapios/fachada.jpg",
    badge: "Destaque",
  },
  {
    id: "slicebyte",
    slug: "SliceByte",
    name: "Slice Byte",
    category: "Pizza",
    meta: "30-45 min - 4,7",
    delivery: "R$ 6,99",
    image: "cardapios/fachada-pizzaria.jpg",
    hero: "cardapios/fachada-pizzaria.jpg",
    badge: "Mais pedida",
  },
  {
    id: "sushikernel",
    slug: "SushiKernel",
    name: "Sushi Kernel",
    category: "Japonesa",
    meta: "35-50 min - 4,8",
    delivery: "R$ 7,99",
    image: "cardapios/fachada-sushi.jpg",
    hero: "cardapios/fachada-sushi.jpg",
    badge: "Fresca",
  },
  {
    id: "drinkhub",
    slug: "DrinkHub",
    name: "DrinkHub",
    category: "Bebidas",
    meta: "15-25 min - 4,6",
    delivery: "R$ 4,99",
    image: "cardapios/fachada-drinkhub.jpg",
    hero: "cardapios/fachada-drinkhub.jpg",
    badge: "Rapida",
  },
];

const menu = [
  {
    id: 1,
    storeId: "bytetruck",
    name: "ByteBurguer",
    description: "Burger classico",
    price: 32.9,
    tag: "combo",
    priority: true,
    image: "cardapios/ByteBurguer.jpg",
  },
  {
    id: 2,
    storeId: "bytetruck",
    name: "Combo BBurguer",
    description: "Burger + fritas",
    price: 44.9,
    tag: "combo",
    priority: true,
    recommended: true,
    image: "cardapios/combo-bburguer-fritas.jpg",
  },
  {
    id: 3,
    storeId: "bytetruck",
    name: "BQuarter Max",
    description: "Burger alto",
    price: 39.9,
    tag: "combo",
    priority: true,
    image: "cardapios/BQuarter Max.jpg",
  },
  {
    id: 4,
    storeId: "bytetruck",
    name: "XByte Common",
    description: "Queijo e molho",
    price: 29.9,
    tag: "combo",
    priority: false,
    image: "cardapios/XByte Common.jpeg",
  },
  {
    id: 5,
    storeId: "bytetruck",
    name: "3 ByteBurguers",
    description: "Pra dividir",
    price: 69.9,
    tag: "combo",
    priority: false,
    image: "cardapios/Bburguers(3 ByteBurguers).jpg",
  },
  {
    id: 6,
    storeId: "bytetruck",
    name: "Veggie Kernel",
    description: "Blend vegetal",
    price: 34.9,
    tag: "veg",
    priority: true,
    image: "cardapios/ByteBurguer.jpg",
  },
  {
    id: 7,
    storeId: "bytetruck",
    name: "Batata Deploy",
    description: "Batata crocante",
    price: 18.9,
    tag: "side",
    priority: false,
    image: "cardapios/combo-bburguer-fritas.jpg",
  },
  {
    id: 8,
    storeId: "bytetruck",
    name: "Byte Duplo",
    description: "Dois burgers",
    price: 46.9,
    tag: "combo",
    priority: false,
    image: "cardapios/BQuarter Max.jpg",
  },
  {
    id: 9,
    storeId: "bytetruck",
    name: "Bytes Fritas",
    description: "Porcao crocante",
    price: 16.9,
    tag: "side",
    priority: false,
    image: "cardapios/bytes-fritas.jpg",
  },
  {
    id: 10,
    storeId: "slicebyte",
    name: "Pepperoni Byte",
    description: "Pepperoni e queijo",
    price: 58.9,
    tag: "pizza",
    priority: true,
    recommended: true,
    image: "cardapios/pepperoni-pizza.jpg",
  },
  {
    id: 11,
    storeId: "slicebyte",
    name: "Napolitana Stack",
    description: "Tomate, queijo e oregano",
    price: 52.9,
    tag: "pizza",
    priority: true,
    image: "cardapios/napolitana-pizza.jpg",
  },
  {
    id: 12,
    storeId: "slicebyte",
    name: "Frango Deploy",
    description: "Frango cremoso",
    price: 55.9,
    tag: "pizza",
    priority: false,
    image: "cardapios/frango-pizza.jpg",
  },
  {
    id: 13,
    storeId: "sushikernel",
    name: "Sushi Kernel 10",
    description: "10 pecas variadas",
    price: 49.9,
    tag: "sushi",
    priority: true,
    recommended: true,
    image: "cardapios/sushi-10peças.jpg",
  },
  {
    id: 14,
    storeId: "sushikernel",
    name: "Sushi Kernel 8",
    description: "8 pecas selecionadas",
    price: 39.9,
    tag: "sushi",
    priority: true,
    image: "cardapios/sushi-8peças.jpg",
  },
  {
    id: 15,
    storeId: "sushikernel",
    name: "Yakissoba 3 pessoas",
    description: "Macarrao oriental",
    price: 64.9,
    tag: "hot",
    priority: false,
    image: "cardapios/yakissoba-3pessoas.jpg",
  },
  {
    id: 16,
    storeId: "drinkhub",
    name: "Copao Coca-Cola",
    description: "Copo 450ml gelado",
    price: 9.9,
    tag: "drink",
    priority: true,
    recommended: true,
    image: "cardapios/copao-450ml(coca-cola).jpg",
  },
  {
    id: 17,
    storeId: "drinkhub",
    name: "Suco de laranja",
    description: "350ml natural",
    price: 11.9,
    tag: "drink",
    priority: true,
    image: "cardapios/sucodelaranja-350ml.jpg",
  },
  {
    id: 18,
    storeId: "drinkhub",
    name: "Jarra de laranja",
    description: "1 litro para mesa",
    price: 24.9,
    tag: "drink",
    priority: false,
    image: "cardapios/jarradesucolaranja-1l.jpg",
  },
  {
    id: 19,
    storeId: "drinkhub",
    name: "Coca-Cola 350ml",
    description: "Lata gelada",
    price: 7.9,
    tag: "drink",
    priority: true,
    image: "cardapios/coca-cola350ml.jpg",
  },
  {
    id: 20,
    storeId: "drinkhub",
    name: "Copo Coca-Cola 450ml",
    description: "Copo grande para acompanhar",
    price: 10.9,
    tag: "drink",
    priority: false,
    image: "cardapios/copao-450ml(coca-cola).jpg",
  },
  {
    id: 21,
    storeId: "drinkhub",
    name: "Mykonian",
    description: "Drink autoral gelado",
    price: 24.9,
    tag: "drink",
    priority: true,
    image: "cardapios/Mykonian.jpg",
  },
  {
    id: 22,
    storeId: "drinkhub",
    name: "Shirley Temple",
    description: "Mocktail leve e doce",
    price: 18.9,
    tag: "drink",
    priority: false,
    image: "cardapios/shirley temple.jpg",
  },
  {
    id: 23,
    storeId: "drinkhub",
    name: "Skinny Bitch",
    description: "Drink refrescante",
    price: 22.9,
    tag: "drink",
    priority: false,
    image: "cardapios/skinny bitch.jpg",
  },
];

const orders = [
  {
    id: "BT-1048",
    client: "Marina",
    items: "Combo Truck",
    itemList: [
      { qty: 1, name: "Combo BBurguer", price: 44.9 },
    ],
    status: "Em preparo",
    payment: "Pix",
    priority: true,
    image: "cardapios/combo-bburguer-fritas.jpg",
    total: 44.9,
    change: "Nao precisa",
    phone: "(11) 98888-1048",
    address: "Rua MVP, 404",
    note: "Sem cebola, maionese a parte",
  },
  {
    id: "BT-1049",
    client: "Rafael",
    items: "Smash Byte",
    itemList: [
      { qty: 1, name: "Smash Byte", price: 32.9 },
    ],
    status: "Novo",
    payment: "Cartao",
    priority: true,
    image: "cardapios/ByteBurguer.jpg",
    total: 32.9,
    change: "Nao precisa",
    phone: "(11) 97777-1049",
    address: "Av. Humberto Lucena, 404",
    note: "Enviar guardanapo extra",
  },
  {
    id: "BT-1050",
    client: "Duda",
    items: "Veggie Kernel",
    itemList: [
      { qty: 1, name: "Veggie Kernel", price: 34.9 },
    ],
    status: "Entrega",
    payment: "Dinheiro",
    priority: false,
    image: "cardapios/XByte Common.jpeg",
    total: 34.9,
    change: "R$ 50,00",
    phone: "(11) 96666-1050",
    address: "Rua das APIs, 120",
    note: "Troco para R$ 50,00",
  },
  {
    id: "BT-1051",
    client: "Caio",
    items: "Batata Deploy + ByteBurguer + Refri",
    itemList: [
      { qty: 1, name: "Batata Deploy", price: 18.9 },
      { qty: 1, name: "ByteBurguer", price: 32.9 },
      { qty: 1, name: "Refri lata", price: 7.9 },
    ],
    status: "Novo",
    payment: "Pix",
    priority: false,
    image: "cardapios/combo-bburguer-fritas.jpg",
    total: 59.7,
    change: "Nao precisa",
    phone: "(11) 95555-1051",
    address: "Rua Cache, 88",
    note: "Bem crocante",
  },
];

const state = {
  cart: [],
  filter: "all",
  query: "",
  searchQuery: "",
  trackingStep: 1,
  menuLimited: true,
  cartStep: 0,
  selectedTableId: 4,
  activeStoreId: "bytetruck",
};

const tableTabs = [
  {
    id: 4,
    guest: "Rafael + 3",
    status: "Aberta",
    payment: "Pendente",
    items: [
      { menuId: 2, qty: 2 },
      { menuId: 7, qty: 1 },
      { name: "Refrigerante lata", price: 7.9, qty: 2 },
    ],
    note: "Mesa pediu ketchup e guardanapos.",
  },
  {
    id: 7,
    guest: "Marina + 1",
    status: "Pagamento",
    payment: "Aguardando",
    items: [
      { menuId: 1, qty: 1 },
      { name: "Milkshake", price: 16.9, qty: 1 },
    ],
    note: "Cliente pediu fechamento da conta.",
  },
  {
    id: 12,
    guest: "Joao + 2",
    status: "Cozinha",
    payment: "Pendente",
    items: [
      { menuId: 1, qty: 3 },
      { name: "Onion rings", price: 19.1, qty: 1 },
    ],
    note: "Preparar sem pressa, mesa ainda consumindo.",
  },
  {
    id: 15,
    guest: "Livre",
    status: "Livre",
    payment: "",
    items: [],
    note: "Abra uma comanda quando o cliente sentar.",
  },
];

const mobileMenu = window.matchMedia("(max-width: 720px)");
const compactCatalog = window.matchMedia("(max-width: 1040px)");

const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
const menuCategoryLabels = {
  combo: "Burguers e combos",
  veg: "Sem carne",
  side: "Acompanhamentos",
  pizza: "Pizzas",
  sushi: "Sushis",
  hot: "Pratos quentes",
  drink: "Bebidas",
};
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];
const setText = (selector, value) => {
  const element = qs(selector);
  if (element) element.textContent = value;
};

function showToast(message) {
  const toast = qs("#toast");
  window.clearTimeout(showToast.timer);
  toast.classList.remove("show");
  toast.innerHTML = `
    <span class="toast-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="m5 12.5 4 4L19 7"></path>
      </svg>
    </span>
    <span class="toast-message">${message}</span>
    <span class="toast-progress" aria-hidden="true"></span>
  `;
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => toast.classList.add("show"));
  });
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 3400);
}

function initSplash() {
  const splash = qs("#appSplash");
  if (!splash) return;
  window.setTimeout(() => splash.classList.add("hide"), 900);
  window.setTimeout(() => splash.remove(), 1450);
}

function initHomeFeed() {
  const feed = qs("#homeFeed");
  const cards = qsa("#homeFeed .feed-card");
  if (!feed || cards.length < 2) return;
  const indicators = qs("#homeFeedIndicators");
  let activeIndex = Math.max(0, cards.findIndex((card) => card.classList.contains("active")));
  if (indicators) {
    indicators.innerHTML = cards.map(() => "<span></span>").join("");
  }
  const bars = qsa("#homeFeedIndicators span");
  const setActiveFeedCard = () => {
    cards.forEach((card, index) => card.classList.toggle("active", index === activeIndex));
    bars.forEach((bar, index) => {
      bar.classList.remove("active", "done");
      void bar.offsetWidth;
      bar.classList.toggle("done", index < activeIndex);
      bar.classList.toggle("active", index === activeIndex);
    });
  };

  setActiveFeedCard();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  window.setInterval(() => {
    activeIndex = (activeIndex + 1) % cards.length;
    setActiveFeedCard();
  }, 4200);
}

function openCartModal() {
  const panel = qs(".order-panel");
  const backdrop = qs("#cartBackdrop");
  state.cartStep = Math.min(state.cartStep, cartSteps.length - 1);
  renderCartStep();
  if (panel) {
    panel.classList.add("open");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("role", "dialog");
  }
  if (backdrop) backdrop.classList.add("show");
  document.body.classList.add("cart-modal-open");
}

function closeCartModal() {
  const panel = qs(".order-panel");
  const backdrop = qs("#cartBackdrop");
  if (panel) {
    panel.classList.remove("open");
    panel.removeAttribute("aria-modal");
    panel.removeAttribute("role");
  }
  if (backdrop) backdrop.classList.remove("show");
  document.body.classList.remove("cart-modal-open");
}

function clearCart() {
  state.cart = [];
  state.cartStep = 0;
  renderCart();
  closeCartModal();
}

function showPopup(id, storageKey) {
  if (sessionStorage.getItem(storageKey)) return;
  qs(id)?.classList.add("show");
  qs("#promoBackdrop")?.classList.add("show");
}

function closePromos() {
  if (qs("#promoPopup")?.classList.contains("show")) {
    sessionStorage.setItem(`storePromoSeen-${state.activeStoreId}`, "true");
  }
  qs("#promoPopup")?.classList.remove("show");
  qs("#promoBackdrop")?.classList.remove("show");
}

function activeStore() {
  return stores.find((store) => store.id === state.activeStoreId) || stores[0];
}

function storeItems(storeId = state.activeStoreId) {
  return menu.filter((item) => item.storeId === storeId);
}

function renderHomeStores() {
  const list = qs("#storeList");
  if (!list) return;
  list.innerHTML = stores
    .filter((store) => store.id !== "bytetruck")
    .map(
      (store) => `
        <a class="store-card" href="#${store.slug}/Catalogo">
          <img src="${store.image}" alt="${store.name}" />
          <div>
            <strong>${store.name}</strong>
            <span>${store.category} - ${store.meta}</span>
          </div>
          <em>${store.badge}</em>
        </a>
      `,
    )
    .join("");
}

function renderCategoryFilters() {
  const row = qs("#categoryRow");
  if (!row) return;
  const tags = [...new Set(storeItems().map((item) => item.tag))];
  if (!tags.includes(state.filter)) state.filter = "all";
  row.innerHTML = [
    `<button class="${state.filter === "all" ? "active" : ""}" data-filter="all">Recomendados</button>`,
    ...tags.map(
      (tag) =>
        `<button class="${state.filter === tag ? "active" : ""}" data-filter="${tag}">${menuCategoryLabels[tag] || tag}</button>`,
    ),
  ].join("");
  qsa(".category-row button").forEach((button) => {
    button.addEventListener("click", () => {
      qsa(".category-row button").forEach((entry) =>
        entry.classList.remove("active"),
      );
      button.classList.add("active");
      state.filter = button.dataset.filter;
      renderMenu();
    });
  });
}

function renderStorePage() {
  const store = activeStore();
  const recommended =
    storeItems(store.id).find((item) => item.recommended) || storeItems(store.id)[0];
  qs("#restaurantCoverArt").style.backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.48)), url("${store.hero}")`;
  setText("#restaurantName", store.name);
  setText(
    "#restaurantDescription",
    `${store.category} - ${store.meta.split(" - ")[0]} - entrega ${store.delivery}`,
  );
  setText("#restaurantRating", store.meta.split(" - ")[1] || "4,8");
  setText("#restaurantTime", store.meta.split(" - ")[0]);
  setText("#restaurantDelivery", store.delivery);
  setText("#cartStoreName", store.name);

  if (recommended) {
    qs("#storePromoImage").src = recommended.image;
    qs("#storePromoImage").alt = recommended.name;
    setText("#storePromoTitle", recommended.name);
    setText("#storePromoText", `${recommended.description}, pronto para ir direto para sua sacola.`);
    setText("#storePromoPrice", money.format(recommended.price));
    qs("#storePromoButton").dataset.add = recommended.id;
    const popupPhoto = qs(".promo-photo");
    if (popupPhoto) {
      popupPhoto.src = recommended.image;
      popupPhoto.alt = recommended.name;
    }
    setText("#promoTitle", recommended.name);
    qs("#promoAdd").dataset.add = recommended.id;
  }
  renderCategoryFilters();
}

function visibleMenu() {
  const filtered = menu.filter((item) => {
    const matchesStore = item.storeId === state.activeStoreId;
    const matchesCategory = state.filter === "all" || item.tag === state.filter;
    const haystack = `${item.name} ${item.description}`.toLowerCase();
    const matchesQuery = haystack.includes(state.query.toLowerCase());
    return matchesStore && matchesCategory && matchesQuery;
  });

  if (compactCatalog.matches) return filtered;

  const limit = state.query || state.filter !== "all" ? 4 : 3;
  return state.menuLimited ? filtered.slice(0, limit) : filtered;
}

function renderMenu() {
  const items = visibleMenu();
  qs("#menuList").innerHTML = items.length
    ? items
        .map(
          (item) => `
    <article class="menu-card ${item.recommended ? "featured-menu-card" : ""}">
      <div class="menu-copy">
        <div class="menu-badges">
          ${item.recommended ? "<span class=\"badge live\">Mais pedido</span>" : ""}
          <span class="badge ${item.priority ? "" : "muted"}">${item.priority ? "Destaque" : "Regular"}</span>
        </div>
        <div class="menu-meta">
          <strong>${item.name}</strong>
          <span>${money.format(item.price)}</span>
        </div>
        <p>${item.description}</p>
        <button class="button primary" data-add="${item.id}">${item.recommended ? "Pedir o mais vendido" : "Adicionar"}</button>
      </div>
      <img class="food-photo" src="${item.image}" alt="${item.name}" loading="lazy" />
    </article>
  `,
        )
        .join("")
    : `
    <article class="menu-card">
      <div class="menu-copy">
        <span class="badge muted">Sem resultado</span>
        <div class="menu-meta"><strong>Nenhum item encontrado</strong></div>
        <p>Tente buscar por burger, combo ou veg.</p>
      </div>
      <div class="food-art" aria-hidden="true"></div>
    </article>
  `;
}

function addMenuItemToCart(itemId) {
  const item = menu.find((entry) => entry.id === Number(itemId));
  if (!item) return;
  state.cart.push(item);
  renderCart();
  showToast(`${item.name} adicionado a sacola.`);
}

function removeOneCartItem(itemId) {
  const index = state.cart.findIndex((item) => item.id === Number(itemId));
  if (index < 0) return;
  state.cart.splice(index, 1);
  renderCart();
}

function removeAllCartItems(itemId) {
  state.cart = state.cart.filter((item) => item.id !== Number(itemId));
  renderCart();
}

function renderSearchResults() {
  const query = state.searchQuery.toLowerCase();
  const items = query
    ? menu
        .filter((item) =>
          `${item.name} ${item.description}`.toLowerCase().includes(query),
        )
        .slice(0, 5)
    : stores
        .map((store) =>
          menu.find((item) => item.storeId === store.id && item.recommended) ||
          menu.find((item) => item.storeId === store.id),
        )
        .filter(Boolean);

  qs("#searchResults").innerHTML = items.length
    ? items
        .map(
          (item) => {
            const store = stores.find((entry) => entry.id === item.storeId) || stores[0];
            return `
    <article class="menu-card search-result-card">
      <div class="menu-copy">
        <span class="badge ${item.recommended ? "live" : ""}">${item.recommended ? "Mais pedido" : "Destaque"}</span>
        <div class="menu-meta">
          <strong>${item.name}</strong>
          <span>${money.format(item.price)}</span>
        </div>
        <p>${item.description} - ${store.name}</p>
        <a class="button primary" href="#${store.slug}/Catalogo">Ver na loja</a>
      </div>
      <img class="food-photo" src="${item.image}" alt="${item.name}" loading="lazy" />
    </article>
  `},
        )
        .join("")
    : `
    <article class="menu-card search-result-card">
      <div class="menu-copy">
        <span class="badge muted">Sem resultado</span>
        <div class="menu-meta"><strong>Nada encontrado</strong></div>
        <p>Tente buscar por burger, combo, batata ou veggie.</p>
      </div>
      <div class="food-art" aria-hidden="true"></div>
    </article>
  `;
}

function paymentFee(subtotal) {
  const payment = qs("input[name='payment']:checked").value;
  if (payment === "pix") return subtotal * 0.0199;
  if (payment === "card") return subtotal * 0.0499 + 0.49;
  return 0;
}

const cartSteps = ["items", "delivery", "payment"];

function renderCartStep() {
  const activeStep = cartSteps[state.cartStep] || "items";
  qsa("[data-cart-step]").forEach((step) => {
    step.classList.toggle("active", step.dataset.cartStep === activeStep);
  });
  const total = qs("#total")?.textContent || "R$ 0,00";
  const labels = {
    items: "Continuar",
    delivery: "Ir para pagamento",
    payment: `Revisar pedido - ${total}`,
  };
  setText("#placeOrder", labels[activeStep] || "Continuar");
}

function renderCart() {
  const cartItems = qs("#cartItems");
  document.body.classList.toggle("cart-has-items", state.cart.length > 0);
  setText(
    "#cartCount",
    `${state.cart.length} ${state.cart.length === 1 ? "item" : "itens"}`,
  );

  if (!state.cart.length) {
    cartItems.className = "cart-list empty";
    cartItems.textContent = "Sua sacola esta vazia.";
  } else {
    const groupedItems = state.cart.reduce((groups, item) => {
      if (!groups.has(item.id)) groups.set(item.id, { item, quantity: 0 });
      groups.get(item.id).quantity += 1;
      return groups;
    }, new Map());

    cartItems.className = "cart-list";
    cartItems.innerHTML = [...groupedItems.values()]
      .map(
        ({ item, quantity }) => `
      <div class="cart-item">
        <img class="cart-thumb" src="${item.image}" alt="" aria-hidden="true" />
        <div class="cart-item-copy">
          <strong>${item.name}</strong>
          <span>${item.description}</span>
        </div>
        <div class="cart-item-side">
          <strong>${money.format(item.price * quantity)}</strong>
          <div class="cart-item-controls" aria-label="Quantidade de ${item.name}">
            <button aria-label="Diminuir ${item.name}" data-cart-decrease="${item.id}" type="button">-</button>
            <span>${quantity}</span>
            <button aria-label="Adicionar ${item.name}" data-cart-increase="${item.id}" type="button">+</button>
            <button class="cart-trash" aria-label="Remover ${item.name} da sacola" data-cart-delete="${item.id}" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16"></path>
                <path d="M9 7V5h6v2"></path>
                <path d="M7 7l1 13h8l1-13"></path>
                <path d="M10 11v5"></path>
                <path d="M14 11v5"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `,
      )
      .join("");
  }

  qsa("[data-cart-decrease]").forEach((button) => {
    button.addEventListener("click", () => removeOneCartItem(button.dataset.cartDecrease));
  });

  qsa("[data-cart-increase]").forEach((button) => {
    button.addEventListener("click", () => addMenuItemToCart(button.dataset.cartIncrease));
  });

  qsa("[data-cart-delete]").forEach((button) => {
    button.addEventListener("click", () => removeAllCartItems(button.dataset.cartDelete));
  });

  const subtotal = state.cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = state.cart.length ? 5.99 : 0;
  const fee = paymentFee(subtotal);
  const total = subtotal + fee + deliveryFee;
  setText("#subtotal", money.format(subtotal));
  setText("#fee", money.format(fee));
  setText("#total", money.format(total));
  setText(
    "#cartFooterTotal",
    `${money.format(total)} / ${state.cart.length} ${
      state.cart.length === 1 ? "item" : "itens"
    }`,
  );
  setText("#mobileCartCount", state.cart.length);
  setText(
    "#mobileCartTotal",
    `${money.format(total)} / ${state.cart.length} ${
      state.cart.length === 1 ? "item" : "itens"
    }`,
  );
  const mobileThumb = qs("#mobileCartThumb");
  if (mobileThumb && state.cart[0]) mobileThumb.src = state.cart[0].image;
  renderCartStep();
}

function renderOrders() {
  const groups = [
    { name: "Novo", hint: "Confirmar" },
    { name: "Em preparo", hint: "Cozinha" },
    { name: "Entrega", hint: "Rota" },
  ];
  qs("#ordersBoard").innerHTML = groups
    .map((group) => {
      const groupOrders = orders.filter((order) => order.status === group.name);
      return `
    <div class="order-column" data-order-status="${group.name}">
      <div class="column-heading">
        <div>
          <h2>${group.name}</h2>
          <span>${group.hint}</span>
        </div>
        <strong>${groupOrders.length}</strong>
      </div>
      ${groupOrders
        .map(
          (order) => `
        <article class="order-ticket ${order.priority ? "priority-ticket" : ""}" data-order-id="${order.id}">
          <div class="ticket-top">
            <strong>#${order.id}</strong>
          </div>
          <div class="ticket-main">
            <h3>${order.client}</h3>
          </div>
          <div class="ticket-meta">
            <span>${order.payment}</span>
            ${order.priority ? "<span>Expressa</span>" : ""}
            <button class="whatsapp-icon-button" data-whatsapp="${order.id}" type="button" aria-label="Alertar no WhatsApp">
              <svg viewBox="0 0 448 512" aria-hidden="true">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101 32 1 132 1 255c0 39.3 10.2 77.6 29.6 111.4L0 480l116.1-30.5C148.7 467.4 185.5 477 223.8 477h.1c122.9 0 222.9-100 222.9-223 0-59.5-23.2-115.3-65.9-156.9zM223.9 439.6c-34.2 0-67.7-9.2-97-26.6l-7-4.2-68.8 18.1 18.4-67.1-4.6-7.3C46.8 323.7 37.3 289.9 37.3 255 37.3 152 120.9 68.4 223.9 68.4c49.8 0 96.7 19.4 132 54.7 35.9 35.8 55.6 82.8 55.6 132.9 0 103-83.7 183.6-187.6 183.6zm101.7-138c-5.6-2.8-33-16.3-38.1-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.6 21.8-3.2 3.7-6.5 4.2-12.1 1.4-33-16.5-54.7-29.5-76.5-66.9-5.8-10 5.8-9.3 16.5-30.9 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.7 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 33-13.5 37.6-26.5 4.6-13 4.6-24.1 3.2-26.5-1.3-2.4-5-3.8-10.6-6.6z"></path>
              </svg>
            </button>
          </div>
        </article>
      `,
        )
        .join("")}
    </div>
  `;
    })
    .join("");

  qsa(".order-ticket").forEach((ticket) => {
    ticket.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      openOrderModal(ticket.dataset.orderId);
    });
  });
}

function openOrderModal(orderId) {
  const order = orders.find((entry) => entry.id === orderId);
  if (!order) return;
  const nextStatus = nextOrderStatus(order.status);
  const changeNote =
    order.change === "Nao precisa"
      ? "Sem troco para este pedido"
      : `Troco solicitado para ${order.change}`;
  const orderItems = order.itemList || [
    { qty: 1, name: order.items, price: order.total },
  ];
  const hasManyItems = orderItems.length > 2;
  const itemSummary = hasManyItems
    ? `${orderItems.length} itens no pedido`
    : order.items;
  const itemListMarkup = hasManyItems
    ? `<div class="order-items-list">${orderItems
        .map(
          (item) => `
        <div>
          <strong>${item.name}</strong>
          <em>${money.format(item.price)}</em>
        </div>
      `,
        )
        .join("")}</div>`
    : "";
  const paymentIcon =
    {
      Pix: `<svg class="pix-payment-icon" viewBox="0 0 512 512" aria-hidden="true"><g fill="#4BB8A9" fill-rule="evenodd"><path d="M112.57 391.19c20.056 0 38.928-7.808 53.12-22l76.693-76.692c5.385-5.404 14.765-5.384 20.15 0l76.989 76.989c14.191 14.172 33.045 21.98 53.12 21.98h15.098l-97.138 97.139c-30.326 30.344-79.505 30.344-109.85 0l-97.415-97.416h9.232zm280.068-271.294c-20.056 0-38.929 7.809-53.12 22l-76.97 76.99c-5.551 5.53-14.6 5.568-20.15-.02l-76.711-76.693c-14.192-14.191-33.046-21.999-53.12-21.999h-9.234l97.416-97.416c30.344-30.344 79.523-30.344 109.867 0l97.138 97.138h-15.116z"></path><path d="M22.758 200.753l58.024-58.024h31.787c13.84 0 27.384 5.605 37.172 15.394l76.694 76.693c7.178 7.179 16.596 10.768 26.033 10.768 9.417 0 18.854-3.59 26.014-10.75l76.989-76.99c9.787-9.787 23.331-15.393 37.171-15.393h37.654l58.3 58.302c30.343 30.344 30.343 79.523 0 109.867l-58.3 58.303H392.64c-13.84 0-27.384-5.605-37.171-15.394l-76.97-76.99c-13.914-13.894-38.172-13.894-52.066.02l-76.694 76.674c-9.788 9.788-23.332 15.413-37.172 15.413H80.782L22.758 310.62c-30.344-30.345-30.344-79.524 0-109.868"></path></g></svg>`,
      Cartao: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="M3 10h18"></path></svg>`,
      Dinheiro: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"></rect><circle cx="12" cy="12" r="3"></circle><path d="M6 9h2M16 15h2"></path></svg>`,
    }[order.payment] ||
    `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"></rect></svg>`;
  qs("#orderDetailContent").innerHTML = `
    <div class="panel-heading order-detail-heading">
      <h2 id="orderDetailTitle">Pedido ${order.id}</h2>
      <span>${order.status}</span>
    </div>
    <div class="order-detail-product">
      <img src="${order.image}" alt="${order.items}" />
      <div>
        <span class="badge ${order.priority ? "" : "muted"}">${order.priority ? "Expressa" : "Normal"}</span>
        <strong>${itemSummary}</strong>
        <small>Total ${money.format(order.total)}</small>
        <em>${order.note}</em>
      </div>
    </div>
    ${itemListMarkup}
    <div class="order-detail-section">
      <div class="order-detail-list">
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"></path></svg>
          <strong class="buyer-contact">
            <span>${order.client}</span>
            <small>${order.phone}</small>
          </strong>
        </div>
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>
          <strong>${order.address}</strong>
        </div>
      </div>
    </div>
    <div class="order-detail-section">
      <div class="order-detail-list financial-list">
        <div>
          ${paymentIcon}
          <strong>${order.payment}</strong>
        </div>
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M17 7.5H9.5a3 3 0 0 0 0 6H14a3 3 0 0 1 0 6H6"></path></svg>
          <strong>${money.format(order.total)}</strong>
        </div>
      </div>
      <p class="change-note">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8"></circle>
          <path d="M12 8v4M12 16h.01"></path>
        </svg>
        <span>${changeNote}</span>
      </p>
    </div>
    <div class="order-detail-actions">
      <button class="button ghost modal-whatsapp-action" data-whatsapp="${order.id}" type="button">
        <svg viewBox="0 0 448 512" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101 32 1 132 1 255c0 39.3 10.2 77.6 29.6 111.4L0 480l116.1-30.5C148.7 467.4 185.5 477 223.8 477h.1c122.9 0 222.9-100 222.9-223 0-59.5-23.2-115.3-65.9-156.9zM223.9 439.6c-34.2 0-67.7-9.2-97-26.6l-7-4.2-68.8 18.1 18.4-67.1-4.6-7.3C46.8 323.7 37.3 289.9 37.3 255 37.3 152 120.9 68.4 223.9 68.4c49.8 0 96.7 19.4 132 54.7 35.9 35.8 55.6 82.8 55.6 132.9 0 103-83.7 183.6-187.6 183.6zm101.7-138c-5.6-2.8-33-16.3-38.1-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.6 21.8-3.2 3.7-6.5 4.2-12.1 1.4-33-16.5-54.7-29.5-76.5-66.9-5.8-10 5.8-9.3 16.5-30.9 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.7 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 33-13.5 37.6-26.5 4.6-13 4.6-24.1 3.2-26.5-1.3-2.4-5-3.8-10.6-6.6z"></path>
        </svg>
        Enviar
      </button>
      ${nextStatus ? `<button class="button ghost modal-move-action" data-move-order="${order.id}" data-next-status="${nextStatus}" type="button">Mover para ${nextStatus}</button>` : ""}
      <button class="button primary modal-ok-action" data-close-order-modal type="button">Ok</button>
    </div>
  `;
  qs("#orderDetailModal").classList.add("show");
  qs("#orderDetailBackdrop").classList.add("show");
}

function closeOrderModal() {
  qs("#orderDetailModal").classList.remove("show");
  qs("#orderDetailBackdrop").classList.remove("show");
}

function openTableCommandPanel() {
  if (!mobileMenu.matches) return;
  document.body.classList.add("command-panel-open");
  qs("#commandBackdrop")?.classList.add("show");
}

function closeTableCommandPanel() {
  document.body.classList.remove("command-panel-open");
  qs("#commandBackdrop")?.classList.remove("show");
}

function nextOrderStatus(status) {
  const flow = ["Novo", "Em preparo", "Entrega"];
  const index = flow.indexOf(status);
  return index >= 0 && index < flow.length - 1 ? flow[index + 1] : "";
}

function moveOrderToStatus(orderId, status) {
  const order = orders.find((entry) => entry.id === orderId);
  if (!order || order.status === status) return;
  order.status = status;
  renderOrders();
  showToast(`Pedido ${order.id} movido para ${order.status}.`);
}

function commandItemInfo(item) {
  const menuItem = menu.find((entry) => entry.id === item.menuId);
  return {
    name: item.name || menuItem?.name || "Item",
    price: item.price ?? menuItem?.price ?? 0,
    image: item.image || menuItem?.image || "cardapios/ByteBurguer.jpg",
    qty: item.qty,
  };
}

function tableTotal(table) {
  return table.items.reduce((sum, item) => {
    const info = commandItemInfo(item);
    return sum + info.price * info.qty;
  }, 0);
}

function tableStatusClass(status) {
  if (status === "Livre") return "is-free";
  if (status === "Pagamento" || status === "Pago") return "is-waiting";
  return "is-open";
}

function commandPaymentIcon(method) {
  const icons = {
    Pix: `<svg class="command-payment-icon pix" viewBox="0 0 512 512" aria-hidden="true"><g fill="#4BB8A9" fill-rule="evenodd"><path d="M112.57 391.19c20.056 0 38.928-7.808 53.12-22l76.693-76.692c5.385-5.404 14.765-5.384 20.15 0l76.989 76.989c14.191 14.172 33.045 21.98 53.12 21.98h15.098l-97.138 97.139c-30.326 30.344-79.505 30.344-109.85 0l-97.415-97.416h9.232zm280.068-271.294c-20.056 0-38.929 7.809-53.12 22l-76.97 76.99c-5.551 5.53-14.6 5.568-20.15-.02l-76.711-76.693c-14.192-14.191-33.046-21.999-53.12-21.999h-9.234l97.416-97.416c30.344-30.344 79.523-30.344 109.867 0l97.138 97.138h-15.116z"></path><path d="M22.758 200.753l58.024-58.024h31.787c13.84 0 27.384 5.605 37.172 15.394l76.694 76.693c7.178 7.179 16.596 10.768 26.033 10.768 9.417 0 18.854-3.59 26.014-10.75l76.989-76.99c9.787-9.787 23.331-15.393 37.171-15.393h37.654l58.3 58.302c30.343 30.344 30.343 79.523 0 109.867l-58.3 58.303H392.64c-13.84 0-27.384-5.605-37.171-15.394l-76.97-76.99c-13.914-13.894-38.172-13.894-52.066.02l-76.694 76.674c-9.788 9.788-23.332 15.413-37.172 15.413H80.782L22.758 310.62c-30.344-30.345-30.344-79.524 0-109.868"></path></g></svg>`,
    Cartao: `<svg class="command-payment-icon" viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="7" width="26" height="18" rx="3"></rect><path d="M3 13h26"></path><path d="M8 20h7"></path></svg>`,
    Dinheiro: `<svg class="command-payment-icon" viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="8" width="24" height="16" rx="3"></rect><circle cx="16" cy="16" r="4"></circle><path d="M8 12h2M22 20h2"></path></svg>`,
  };
  return icons[method] || "";
}

function openTableTab(tableId) {
  const table = tableTabs.find((entry) => entry.id === Number(tableId));
  if (!table || table.status !== "Livre") return;
  table.guest = `Mesa ${String(table.id).padStart(2, "0")} aberta`;
  table.status = "Aberta";
  table.payment = "Pendente";
  table.items = [];
  state.selectedTableId = table.id;
  renderTableTabs();
  showToast(`Comanda da mesa ${String(table.id).padStart(2, "0")} aberta.`);
}

function addItemToTable(tableId, itemId) {
  const table = tableTabs.find((entry) => entry.id === Number(tableId));
  const item = menu.find((entry) => entry.id === Number(itemId));
  if (!table || !item) return;
  if (table.status === "Livre") openTableTab(table.id);
  const activeTable = tableTabs.find((entry) => entry.id === Number(tableId));
  const existing = activeTable.items.find((entry) => entry.menuId === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    activeTable.items.push({ menuId: item.id, qty: 1 });
  }
  activeTable.status = "Aberta";
  activeTable.payment = "Pendente";
  state.selectedTableId = activeTable.id;
  renderTableTabs();
  showToast(`${item.name} adicionado na mesa ${String(activeTable.id).padStart(2, "0")}.`);
}

function removeItemFromTable(tableId, itemIndex) {
  const table = tableTabs.find((entry) => entry.id === Number(tableId));
  if (!table) return;
  const item = table.items[Number(itemIndex)];
  if (!item) return;
  item.qty -= 1;
  if (item.qty <= 0) table.items.splice(Number(itemIndex), 1);
  if (!table.items.length && table.status !== "Livre") table.status = "Aberta";
  table.payment = table.items.length ? "Pendente" : table.payment;
  renderTableTabs();
}

function setTablePayment(tableId, method) {
  const table = tableTabs.find((entry) => entry.id === Number(tableId));
  if (!table || table.status === "Livre" || !table.items.length) return;
  table.payment = method;
  table.status = "Pagamento";
  state.selectedTableId = table.id;
  renderTableTabs();
  showToast(`Pagamento da mesa ${String(table.id).padStart(2, "0")} marcado como ${method}.`);
}

function closeTableTab(tableId) {
  const table = tableTabs.find((entry) => entry.id === Number(tableId));
  if (!table || table.status === "Livre") return;
  if (!table.items.length) {
    table.guest = "Livre";
    table.status = "Livre";
    table.payment = "";
    renderTableTabs();
    closeTableCommandPanel();
    return;
  }
  if (!["Pix", "Cartao", "Dinheiro"].includes(table.payment)) {
    table.status = "Pagamento";
    state.selectedTableId = table.id;
    renderTableTabs();
    showToast("Escolha a forma de pagamento antes de fechar.");
    return;
  }
  const tableNumber = String(table.id).padStart(2, "0");
  table.guest = "Livre";
  table.status = "Livre";
  table.payment = "";
  table.items = [];
  table.note = "Comanda fechada. Mesa liberada.";
  renderTableTabs();
  closeTableCommandPanel();
  showToast(`Comanda da mesa ${tableNumber} fechada.`);
}

function renderTableTabs() {
  const grid = qs("#tableCommandGrid");
  const panel = qs("#waiterCommandPanel");
  if (!grid || !panel) return;

  grid.innerHTML = tableTabs
    .map((table) => {
      const total = tableTotal(table);
      const preview = table.items.length
        ? table.items
            .slice(0, 3)
            .map((item) => {
              const info = commandItemInfo(item);
              return `<span>${info.qty}x ${info.name}</span>`;
            })
            .join("")
        : `<span>${table.note}</span>`;
      const selected = table.id === state.selectedTableId;
      return `
        <article class="table-command-card ${tableStatusClass(table.status)} ${selected ? "selected" : ""}" data-table-select="${table.id}">
          <div class="command-head">
            <div>
              <span>Mesa ${String(table.id).padStart(2, "0")}</span>
              <strong>${table.guest}</strong>
            </div>
            <em>${table.status}</em>
          </div>
          <div class="command-items">${preview}</div>
          <div class="command-foot">
            <strong>${money.format(total)}</strong>
            <div class="command-actions">
              ${
                table.status === "Livre"
                  ? `<button class="button ghost small" data-table-open="${table.id}" type="button">Abrir</button>`
                  : `<button class="button primary small" data-table-add="${table.id}" type="button">Adicionar</button>
                     <button class="button ghost small" data-table-pay="${table.id}" type="button">Pagamento</button>`
              }
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  const selectedTable =
    tableTabs.find((entry) => entry.id === state.selectedTableId) || tableTabs[0];
  const isFree = selectedTable.status === "Livre";
  const total = tableTotal(selectedTable);
  const selectedItems = selectedTable.items.length
    ? selectedTable.items
        .map((item, index) => {
          const info = commandItemInfo(item);
          return `
            <div class="command-line-item">
              <img src="${info.image}" alt="" aria-hidden="true" />
              <div>
                <strong>${info.qty}x ${info.name}</strong>
                <span>${money.format(info.price * info.qty)}</span>
              </div>
              <button data-table-remove="${selectedTable.id}" data-table-item-index="${index}" type="button" aria-label="Remover ${info.name}">-</button>
            </div>
          `;
        })
        .join("")
    : `<p class="empty-command">Nenhum item na comanda.</p>`;
  const quickItems = menu
    .filter((item) => item.recommended || item.priority || item.tag === "side")
    .slice(0, 4);

  panel.innerHTML = `
    <div class="table-detail-head">
      <div>
        <span class="eyebrow">Comanda ativa</span>
        <h2>Mesa ${String(selectedTable.id).padStart(2, "0")}</h2>
      </div>
      <span class="command-status-pill">${selectedTable.status}</span>
      <button class="command-panel-close" data-command-close type="button" aria-label="Fechar comanda">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
    </div>
    <div class="table-detail-total">
      <span>Total da mesa</span>
      <strong>${money.format(total)}</strong>
      <small>${selectedTable.payment || "Sem pagamento"}</small>
    </div>
    <div class="command-detail-list">${selectedItems}</div>
    <div class="quick-add-panel">
      <strong>Adicionar item</strong>
      <div>
        ${quickItems
          .map(
            (item) => `
          <button data-table-quick-add="${selectedTable.id}" data-menu-id="${item.id}" type="button" ${isFree ? "disabled" : ""}>
            <img src="${item.image}" alt="" aria-hidden="true" />
            <span>${item.name}</span>
            <em>${money.format(item.price)}</em>
          </button>
        `,
          )
          .join("")}
      </div>
    </div>
    <div class="table-payment-panel">
      <strong>Pagamento</strong>
      <div>
        ${["Pix", "Cartao", "Dinheiro"]
          .map(
            (method) => `
          <button class="${selectedTable.payment === method ? "active" : ""}" data-table-payment="${selectedTable.id}" data-payment-method="${method}" type="button" aria-label="${method}" title="${method}" ${isFree || !selectedTable.items.length ? "disabled" : ""}>
            ${commandPaymentIcon(method)}
          </button>
        `,
          )
          .join("")}
      </div>
    </div>
    <div class="table-close-row">
      ${
        isFree
          ? `<button class="button primary" data-table-open="${selectedTable.id}" type="button">Abrir comanda</button>`
          : `<button class="button danger" data-table-close="${selectedTable.id}" type="button">Fechar comanda</button>`
      }
    </div>
  `;
}

function renderAdminMenu() {
  const source = state.menuLimited ? menu.slice(0, 6) : menu;
  const categories = [...new Set(source.map((item) => item.tag))];
  qs("#toggleMenuLimit").textContent = state.menuLimited
    ? "Ver cardapio completo"
    : "Mostrar vitrine curta";
  qs("#adminMenu").innerHTML = categories
    .map((category) => {
      const categoryItems = source.filter((item) => item.tag === category);
      return `
        <section class="admin-menu-section">
          <div class="admin-menu-section-head">
            <h3>${menuCategoryLabels[category] || "Outros itens"}</h3>
            <span>${categoryItems.length} itens</span>
          </div>
          <div class="admin-menu-grid">
            ${categoryItems
              .map(
                (item) => `
              <article class="partner-menu-card ${item.recommended ? "is-highlighted" : ""}">
                <img src="${item.image}" alt="${item.name}" loading="lazy" />
                <div class="partner-menu-copy">
                  <div>
                    <strong>${item.name}</strong>
                    <p>${item.description}</p>
                  </div>
                  <div class="partner-menu-tags">
                    ${item.recommended ? "<span>Mais pedido</span>" : ""}
                    ${item.priority ? "<span>Destaque</span>" : "<span>Regular</span>"}
                    <span>Disponivel</span>
                  </div>
                </div>
                <div class="partner-menu-side">
                  <strong>${money.format(item.price)}</strong>
                  <button class="button ghost small" type="button">Editar</button>
                  <button class="menu-pause-button" type="button">Pausar</button>
                </div>
              </article>
            `,
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function route() {
  const hash = window.location.hash.replace("#", "");
  qsa(".view").forEach((view) => view.classList.remove("active"));
  document.body.classList.remove("public-active");
  document.body.classList.remove("admin-active");
  document.body.classList.remove("store-cart-active");
  closeTableCommandPanel();
  qsa("[data-nav-route]").forEach((link) => link.classList.remove("active"));

  if (hash === "admin") {
    window.scrollTo({ top: 0, left: 0 });
    qs("#admin-view").classList.add("active");
    document.body.classList.add("admin-active");
    qs("[data-nav-route='partner']")?.classList.add("active");
  } else if (hash === "pedido") {
    qs("#tracking-view").classList.add("active");
    qs("[data-nav-route='order']")?.classList.add("active");
  } else if (hash === "pesquisa") {
    qs("#search-view").classList.add("active");
    qs("[data-nav-route='search']")?.classList.add("active");
    window.setTimeout(() => qs("#searchInput")?.focus(), 80);
  } else if (stores.some((store) => hash === `${store.slug}/Catalogo`)) {
    const store = stores.find((entry) => hash === `${entry.slug}/Catalogo`);
    state.activeStoreId = store?.id || "bytetruck";
    state.filter = "all";
    renderStorePage();
    renderMenu();
    qs("#public-view").classList.add("active");
    document.body.classList.add("public-active");
    document.body.classList.add("store-cart-active");
    qs("[data-nav-route='home']")?.classList.add("active");
    window.setTimeout(() => showPopup("#promoPopup", `storePromoSeen-${state.activeStoreId}`), 450);
  } else {
    qs("#home-view").classList.add("active");
    qs("[data-nav-route='home']")?.classList.add("active");
  }
}

function updateTracking(cancelled = false) {
  const statuses = [
    ["Recebido", "O pedido foi recebido pelo estabelecimento."],
    [
      "Preparado",
      "O ByteTruck recebeu seu pedido e a cozinha ja comecou a preparar.",
    ],
    [
      "Saindo para entrega",
      "O entregador foi alertado no WhatsApp e esta a caminho.",
    ],
    [
      "Entregue",
      "Pedido concluido. O relatorio financeiro ja considera o metodo de pagamento.",
    ],
  ];

  if (cancelled) {
    qs("#tracking-view")?.setAttribute("data-tracking-step", "cancelled");
    qs("#trackingStatus").textContent = "Cancelado";
    qsa("#timeline li").forEach((item) => (item.className = ""));
    setText("#advanceOrder", "Pedido Recebido");
    showToast("Pedido cancelado e aviso enviado ao estabelecimento.");
    return;
  }

  const [title, text] = statuses[state.trackingStep];
  qs("#tracking-view")?.setAttribute("data-tracking-step", String(state.trackingStep));
  qs("#trackingStatus").textContent = title;
  qsa("#timeline li").forEach((item, index) => {
    item.className =
      index < state.trackingStep
        ? "done"
        : index === state.trackingStep
          ? "current"
          : "";
  });
  const nextLabels = [
    "Pedido em Preparo",
    "Saindo para Entrega",
    "Pedido Entregue",
    "Pedido Entregue",
  ];
  setText("#advanceOrder", nextLabels[state.trackingStep] || "Pedido Recebido");
}

function bindEvents() {
  window.addEventListener("hashchange", route);

  document.addEventListener("click", (event) => {
    if (event.target.closest("#openCart")) {
      event.preventDefault();
      openCartModal();
    }

    if (event.target.closest("#closeCart, #cartBackdrop, #continueShopping")) {
      event.preventDefault();
      closeCartModal();
    }

    if (event.target.closest("#clearCart")) {
      event.preventDefault();
      clearCart();
    }

    if (event.target.closest("#cartBack")) {
      event.preventDefault();
      closeCartModal();
    }

    const whatsappButton = event.target.closest("[data-whatsapp]");
    if (whatsappButton) {
      event.preventDefault();
      showToast(
        `WhatsApp: alerta do pedido ${whatsappButton.dataset.whatsapp} enviado.`,
      );
      return;
    }

    const moveButton = event.target.closest("[data-move-order]");
    if (moveButton) {
      event.preventDefault();
      moveOrderToStatus(
        moveButton.dataset.moveOrder,
        moveButton.dataset.nextStatus,
      );
      closeOrderModal();
      return;
    }

    if (
      event.target.closest("[data-close-order-modal], #orderDetailBackdrop")
    ) {
      event.preventDefault();
      closeOrderModal();
    }

    if (event.target.closest("[data-close-popup], #promoBackdrop")) {
      event.preventDefault();
      closePromos();
    }

    if (event.target.closest("#promoAdd")) {
      event.preventDefault();
      const item =
        storeItems().find((entry) => entry.recommended) || storeItems()[0];
      state.cart.push(item);
      renderCart();
      closePromos();
      showToast(`${item.name} adicionado a sacola.`);
    }

    const addButton = event.target.closest("[data-add]");
    if (addButton) {
      event.preventDefault();
      addMenuItemToCart(addButton.dataset.add);
    }

  });

  qs("#searchInput").addEventListener("input", (event) => {
    state.searchQuery = event.target.value.trim();
    renderSearchResults();
  });

  qsa("input[name='payment']").forEach((input) =>
    input.addEventListener("change", renderCart),
  );

  qs("#placeOrder").addEventListener("click", () => {
    if (!state.cart.length) {
      showToast("Adicione ao menos um item para finalizar.");
      return;
    }

    if (state.cartStep < cartSteps.length - 1) {
      state.cartStep += 1;
      renderCartStep();
      return;
    }

    state.cart = [];
    renderCart();
    closeCartModal();
    showToast(
      "Pedido criado. Stripe calculado e WhatsApp enviado ao parceiro.",
    );
    window.location.hash = "pedido";
  });

  qs("#advanceOrder").addEventListener("click", () => {
    state.trackingStep = Math.min(3, state.trackingStep + 1);
    updateTracking();
    showToast("Cliente e parceiro notificados no WhatsApp.");
  });

  qs("#cancelOrder").addEventListener("click", () => updateTracking(true));
  qs("#commandBackdrop")?.addEventListener("click", closeTableCommandPanel);

  qs("#tables").addEventListener("click", (event) => {
    const closeCommandButton = event.target.closest("[data-command-close]");
    if (closeCommandButton) {
      closeTableCommandPanel();
      return;
    }

    const selectCard = event.target.closest("[data-table-select]");
    const actionButton = event.target.closest("button");

    if (selectCard && !actionButton) {
      state.selectedTableId = Number(selectCard.dataset.tableSelect);
      renderTableTabs();
      openTableCommandPanel();
      return;
    }

    const openNext = event.target.closest("[data-table-open-next]");
    if (openNext) {
      const freeTable = tableTabs.find((table) => table.status === "Livre");
      if (!freeTable) {
        showToast("Todas as mesas ja possuem comanda aberta.");
        return;
      }
      openTableTab(freeTable.id);
      openTableCommandPanel();
      return;
    }

    const openButton = event.target.closest("[data-table-open]");
    if (openButton) {
      openTableTab(openButton.dataset.tableOpen);
      openTableCommandPanel();
      return;
    }

    const addButton = event.target.closest("[data-table-add]");
    if (addButton) {
      state.selectedTableId = Number(addButton.dataset.tableAdd);
      renderTableTabs();
      openTableCommandPanel();
      showToast("Escolha um item rapido no painel da comanda.");
      return;
    }

    const payButton = event.target.closest("[data-table-pay]");
    if (payButton) {
      state.selectedTableId = Number(payButton.dataset.tablePay);
      renderTableTabs();
      openTableCommandPanel();
      showToast("Selecione Pix, Cartao ou Dinheiro para fechar.");
      return;
    }

    const quickAddButton = event.target.closest("[data-table-quick-add]");
    if (quickAddButton) {
      addItemToTable(
        quickAddButton.dataset.tableQuickAdd,
        quickAddButton.dataset.menuId,
      );
      return;
    }

    const removeButton = event.target.closest("[data-table-remove]");
    if (removeButton) {
      removeItemFromTable(
        removeButton.dataset.tableRemove,
        removeButton.dataset.tableItemIndex,
      );
      return;
    }

    const paymentButton = event.target.closest("[data-table-payment]");
    if (paymentButton) {
      setTablePayment(
        paymentButton.dataset.tablePayment,
        paymentButton.dataset.paymentMethod,
      );
      return;
    }

    const closeButton = event.target.closest("[data-table-close]");
    if (closeButton) closeTableTab(closeButton.dataset.tableClose);
  });

  qsa("[data-admin-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      qsa("[data-admin-tab]").forEach((entry) =>
        entry.classList.remove("active"),
      );
      qsa(".admin-tab").forEach((entry) => entry.classList.remove("active"));
      button.classList.add("active");
      qs(`#${button.dataset.adminTab}`).classList.add("active");
      if (button.dataset.adminTab !== "tables") closeTableCommandPanel();
    });
  });

  qs("#toggleMenuLimit").addEventListener("click", () => {
    state.menuLimited = !state.menuLimited;
    renderMenu();
    renderAdminMenu();
    showToast(
      state.menuLimited
        ? "Limite anti-escolha ativado."
        : "Cardapio completo liberado.",
    );
  });
}

initSplash();
initHomeFeed();
renderHomeStores();
renderStorePage();
renderMenu();
renderSearchResults();
renderCart();
renderOrders();
renderAdminMenu();
renderTableTabs();
updateTracking(false);
bindEvents();
route();

if (mobileMenu.addEventListener) {
  mobileMenu.addEventListener("change", renderMenu);
} else {
  mobileMenu.addListener(renderMenu);
}

if (compactCatalog.addEventListener) {
  compactCatalog.addEventListener("change", renderMenu);
} else {
  compactCatalog.addListener(renderMenu);
}
:root {
  --bg: #ffffff;
  --surface: #ffffff;
  --ink: #252525;
  --muted: #717171;
  --soft: #f7f7f7;
  --line: #eeeeee;
  --brand: #ea1d2c;
  --brand-dark: #c41522;
  --green: #2e8b57;
  --orange: #f6a800;
  --purple: #6b42c4;
  --shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  color: var(--ink);
  background: var(--bg);
  padding-bottom: 76px;
}

.app-splash {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: grid;
  place-items: center;
  gap: 18px;
  align-content: center;
  background: var(--brand);
  color: #fff;
  animation: splashSettle 0.82s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  pointer-events: none;
}

.app-splash.hide {
  animation: splashLeave 0.46s ease forwards;
}

.splash-logo {
  font-size: clamp(46px, 12vw, 88px);
  font-weight: 950;
  letter-spacing: 0;
}

.splash-loader {
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
}

.splash-loader span {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  animation: splashDot 0.72s ease-in-out infinite;
}

.splash-loader span:nth-child(2) {
  animation-delay: 0.1s;
}
.splash-loader span:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes splashSettle {
  from {
    opacity: 0;
    transform: scale(1.04);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes splashLeave {
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.98);
    visibility: hidden;
  }
}

@keyframes splashDot {
  0%,
  100% {
    opacity: 0.4;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-5px);
  }
}

@keyframes feedProgress {
  to {
    transform: scaleX(1);
  }
}

a {
  color: inherit;
  text-decoration: none;
}
button,
input {
  font: inherit;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  align-items: center;
  padding: 14px clamp(18px, 5vw, 72px);
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(16px);
}

.wordmark {
  color: var(--brand);
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0;
  white-space: nowrap;
}

.wordmark span {
  display: block;
  transform: translateY(-1px);
}
.delivery-address,
.user-address {
  display: grid;
  gap: 4px;
  color: #3f3f3f;
  font-size: 14px;
}

.user-address {
  min-width: 0;
}

.user-address strong {
  color: var(--ink);
  font-size: 16px;
}

.address-line {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.address-line .fi {
  flex: 0 0 auto;
  color: var(--brand);
  font-size: 17px;
  line-height: 1;
}

.address-line span:last-child {
  overflow: hidden;
  color: var(--muted);
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 8px;
  background: var(--soft);
}

.search-box .fi {
  flex: 0 0 auto;
  color: #8a8a8a;
  font-size: 18px;
  line-height: 1;
}

.search-box input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--ink);
}

.nav-icon::before {
  content: none;
  display: none;
}

.nav-icon svg,
.nav-icon > .fi {
  width: 21px;
  height: 21px;
  display: grid;
  place-items: center;
  font-size: 21px;
  line-height: 1;
}

.nav-icon svg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.3;
}

.home-icon::before {
  clip-path: polygon(
    50% 8%,
    92% 42%,
    82% 42%,
    82% 90%,
    60% 90%,
    60% 62%,
    40% 62%,
    40% 90%,
    18% 90%,
    18% 42%,
    8% 42%
  );
}

.order-icon::before {
  clip-path: polygon(22% 8%, 78% 8%, 86% 92%, 14% 92%);
}

.partner-icon::before {
  clip-path: polygon(
    18% 18%,
    82% 18%,
    82% 84%,
    18% 84%,
    18% 18%,
    30% 18%,
    30% 8%,
    70% 8%,
    70% 18%,
    58% 18%,
    58% 14%,
    42% 14%,
    42% 18%
  );
}

.bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 70;
  display: grid;
  grid-template-columns: repeat(4, minmax(58px, 76px));
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-height: calc(64px + env(safe-area-inset-bottom));
  padding: 7px 14px calc(7px + env(safe-area-inset-bottom));
  border-top: 1px solid #eeeeee;
  background: #fff;
  box-shadow: 0 -4px 18px rgba(0, 0, 0, 0.06);
  backdrop-filter: none;
  transition: gap 0.24s ease;
}

body.admin-active .bottom-nav {
  display: none;
}

body.admin-active .topbar {
  display: none;
}

body.admin-active .view.active {
  padding-top: clamp(18px, 4vw, 32px);
}

.bottom-nav a,
.bottom-nav button {
  position: relative;
  display: grid;
  grid-template-rows: 24px auto;
  place-items: center;
  width: 100%;
  height: 50px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: #555;
  cursor: pointer;
  transition:
    color 0.16s ease,
    background 0.16s ease,
    transform 0.16s ease;
}

.bottom-nav a:hover,
.bottom-nav button:hover,
.bottom-nav a.active {
  color: var(--brand);
  background: transparent;
}

.bottom-nav a:active,
.bottom-nav button:active {
  transform: translateY(1px) scale(0.98);
}

.bottom-nav a span,
.bottom-nav button span {
  display: block;
  max-width: 100%;
  overflow: hidden;
  font-size: 10px;
  font-weight: 800;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.search-nav-icon::before,
.search-nav-icon::after {
  content: none;
  display: none;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 800;
}

.button.primary {
  background: var(--brand);
  color: #fff;
}
.button.primary:hover {
  background: var(--brand-dark);
}
.button.ghost {
  background: #fff;
  border-color: var(--line);
  color: var(--brand);
}
.button.danger {
  background: #fff;
  border-color: #ffc4c9;
  color: var(--brand-dark);
}
.button.full {
  width: 100%;
}
.button.small {
  min-height: 34px;
  padding: 0 12px;
  font-size: 13px;
}

.view {
  display: none;
  padding: clamp(18px, 4vw, 36px) clamp(18px, 5vw, 72px);
}
.view.active {
  display: block;
}

.public-shell {
  max-width: 1180px;
  margin: 0 auto;
}

.home-shell {
  max-width: 980px;
  margin: 0 auto;
}

.search-shell {
  max-width: 720px;
  margin: 0 auto;
}

.search-page {
  display: grid;
  gap: 18px;
}

.search-page-box {
  position: sticky;
  top: 78px;
  z-index: 20;
  min-height: 52px;
  border: 1px solid var(--line);
  background: #fff;
  box-shadow: var(--shadow);
}

.search-results {
  border-top: 0;
}

.search-result-card:first-child {
  border-top: 1px solid var(--line);
}

.food-feed {
  display: grid;
  gap: 14px;
}

.food-feed .section-heading p {
  margin: 6px 0 0;
  font-size: 14px;
}

.best-heading {
  margin-top: 4px;
}

.home-red-heading {
  position: static;
  align-items: flex-start;
  margin-bottom: 0;
  padding: 13px 14px;
  border: 0;
  border-radius: 14px;
  color: #fff;
  background: linear-gradient(135deg, var(--brand), var(--brand-dark));
  box-shadow: 0 12px 26px rgba(234, 29, 44, 0.16);
  backdrop-filter: none;
}

.home-red-heading h2,
.home-red-heading p {
  color: inherit;
}

.home-red-heading p {
  max-width: 52ch;
  margin: 5px 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 750;
}

.feed-carousel {
  position: relative;
  min-height: 268px;
  overflow: hidden;
  border-radius: 14px;
}

.feed-card {
  position: absolute;
  inset: 0;
  overflow: hidden;
  min-height: 100%;
  border-radius: 14px;
  color: #fff;
  background: #252525;
  opacity: 0;
  pointer-events: none;
  transform: scale(1.01);
  transition:
    opacity 0.55s ease,
    transform 0.55s ease;
}

.feed-card.active {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
  z-index: 2;
}

.feed-indicators {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 10px;
  z-index: 5;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  gap: 5px;
  pointer-events: none;
}

.feed-indicators span {
  height: 3px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.32);
}

.feed-indicators span::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: #fff;
  transform: scaleX(0);
  transform-origin: left;
}

.feed-indicators span.done::after {
  transform: scaleX(1);
}

.feed-indicators span.active::after {
  animation: feedProgress 4.2s linear forwards;
}

.feed-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.72));
}

.feed-card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.feed-card:hover img {
  transform: scale(1.03);
}

.feed-card > div,
.feed-card .badge {
  position: absolute;
  z-index: 1;
}

.feed-card .badge {
  top: 12px;
  left: 12px;
}

.feed-card .badge.sponsored {
  color: var(--brand);
  background: rgba(255, 255, 255, 0.94);
}

.feed-card > div {
  left: 14px;
  right: 14px;
  bottom: 14px;
}

.feed-card h1,
.feed-card h2,
.feed-card p {
  color: #fff;
}

.feed-card h1 {
  margin-bottom: 6px;
  font-size: clamp(34px, 7vw, 58px);
}

.feed-card h2 {
  margin-bottom: 4px;
}

.feed-card p {
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.86);
}

.hero-feed {
  min-height: 100%;
}

.soft-ad::after {
  background: linear-gradient(
    180deg,
    rgba(234, 29, 44, 0.08),
    rgba(0, 0, 0, 0.68)
  );
}

.home-featured {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid var(--line);
  border-radius: 0;
  background: #fff;
  box-shadow: none;
}

.home-featured img {
  width: 72px;
  height: 58px;
  border-radius: 8px;
  object-fit: cover;
}

.home-featured span,
.home-featured strong,
.home-featured p {
  display: block;
}

.home-featured span {
  margin-bottom: 3px;
  color: var(--brand);
  font-size: 12px;
  font-weight: 900;
}

.home-featured strong {
  font-size: 16px;
}

.home-featured p {
  margin: 3px 0 0;
  color: var(--muted);
  font-size: 13px;
}

.home-featured em {
  padding: 6px 8px;
  border-radius: 999px;
  color: var(--brand);
  background: #fff0f1;
  font-size: 12px;
  font-style: normal;
  font-weight: 900;
}

.store-section {
  padding-top: 6px;
}

.store-section .section-heading p {
  margin: 6px 0 0;
  font-size: 14px;
}

.store-list {
  display: grid;
  gap: 10px;
}

.store-card {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid var(--line);
  background: transparent;
}

.store-card.featured-store {
  margin-bottom: 2px;
  padding: 12px;
  border: 1px solid #f2f2f2;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.045);
}

.store-card.featured-store + .store-card {
  border-top: 0;
}

.store-card img,
.store-fake {
  width: 64px;
  height: 54px;
  border: 0;
  border-radius: 8px;
  object-fit: cover;
  background: var(--soft);
}

.store-card strong,
.store-card span {
  display: block;
}

.store-card strong {
  overflow: hidden;
  font-size: 15px;
  line-height: 1.18;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.store-card span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 750;
}

.store-card em {
  justify-self: end;
  display: inline-block;
  padding: 5px 8px;
  border-radius: 999px;
  color: var(--brand);
  background: #fff0f1;
  font-size: 11px;
  font-style: normal;
  font-weight: 900;
  white-space: nowrap;
}

.store-showcase-heading {
  position: static;
  align-items: center;
  margin: 0 0 8px;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  backdrop-filter: none;
}

.store-showcase-heading h2 {
  margin: 0;
  font-size: 18px;
  line-height: 1.1;
}

.store-showcase-heading a {
  color: var(--brand);
  font-size: 12px;
  font-weight: 850;
}

.disabled-store {
  opacity: 0.72;
}

.pizza-art {
  background:
    radial-gradient(circle at 50% 50%, #ffd36a 0 38%, transparent 39%),
    conic-gradient(
      from 10deg,
      #d84f35 0 16%,
      #fff 16% 18%,
      #d84f35 18% 32%,
      #fff 32% 34%,
      #d84f35 34% 50%,
      #fff 50% 52%,
      #d84f35 52% 70%,
      #fff 70% 72%,
      #d84f35 72%
    );
}

.bowl-art {
  background:
    radial-gradient(circle at 35% 45%, #6baa4f 0 12%, transparent 13%),
    radial-gradient(circle at 55% 48%, #f0c36d 0 16%, transparent 17%),
    radial-gradient(circle at 62% 62%, #e35d4f 0 12%, transparent 13%),
    linear-gradient(135deg, #edf7ef, #d6efe0);
}

.category-row {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 0;
  scrollbar-width: none;
}

.category-row::-webkit-scrollbar {
  display: none;
}

.category-row button {
  min-height: 36px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: #fff;
  color: #4b4b4b;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
}

.category-row button.active {
  border-color: #ffd6da;
  color: var(--brand);
  background: #fff0f1;
}

.restaurant-cover {
  position: relative;
  overflow: hidden;
  border: 0;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.1);
}

.cover-art {
  position: relative;
  min-height: 310px;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.48)),
    url("cardapios/fachada.jpg") center / cover;
}

.cover-badge {
  position: absolute;
  left: 18px;
  bottom: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 0 12px;
  border-radius: 999px;
  color: #fff;
  background: rgba(16, 16, 16, 0.68);
  font-size: 13px;
  font-weight: 900;
  backdrop-filter: blur(10px);
}

.cover-badge svg {
  width: 17px;
  height: 17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.2;
}

.restaurant-summary {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 18px;
  align-items: end;
  padding: 24px 26px 26px;
}

.restaurant-title h1 {
  margin-bottom: 6px;
  font-size: clamp(36px, 6vw, 56px);
}

.restaurant-title p {
  margin-bottom: 14px;
  color: #555;
  font-weight: 700;
}

.restaurant-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.restaurant-metrics span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 34px;
  padding: 0 11px;
  border: 1px solid #f1f1f1;
  border-radius: 999px;
  color: #333;
  background: #fff;
  font-size: 13px;
  font-weight: 900;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.04);
}

.restaurant-metrics svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: var(--brand);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.2;
}

.store-promo-strip {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr) auto;
  gap: 18px;
  align-items: center;
  margin: 20px 0 24px;
  padding: 14px 16px 14px 14px;
  border: 1px solid #ffd6da;
  border-radius: 18px;
  background:
    linear-gradient(
      135deg,
      rgba(234, 29, 44, 0.1),
      rgba(255, 255, 255, 0.98) 56%
    ),
    #fff;
  box-shadow: 0 18px 38px rgba(234, 29, 44, 0.1);
}

.store-promo-strip img {
  width: 150px;
  height: 112px;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.store-promo-strip h2 {
  margin: 6px 0 4px;
  font-size: 24px;
  line-height: 1.05;
}

.store-promo-strip p {
  margin: 0;
  font-size: 13px;
}

.store-promo-strip strong {
  color: var(--brand);
  font-size: 24px;
  font-weight: 900;
  white-space: nowrap;
}

.store-promo-content {
  min-width: 0;
}

.store-promo-action {
  display: grid;
  justify-items: end;
  gap: 10px;
}

.store-promo-action .button {
  min-height: 38px;
  padding: 0 14px;
}

.eyebrow {
  margin: 0 0 6px;
  color: var(--brand);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1,
h2,
p {
  margin-top: 0;
}
h1 {
  margin-bottom: 8px;
  font-size: clamp(34px, 5vw, 48px);
  line-height: 1;
  letter-spacing: 0;
}
h2 {
  margin-bottom: 10px;
  font-size: 22px;
  letter-spacing: 0;
}
p {
  color: var(--muted);
  line-height: 1.5;
}

.priority-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 0 0 24px;
}

.priority-strip div {
  min-width: 0;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.metric-number {
  display: block;
  margin-bottom: 4px;
  color: var(--brand);
  font-size: 22px;
  font-weight: 900;
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 350px;
  gap: 28px;
  align-items: start;
}

.section-heading,
.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.section-heading.compact h2 {
  margin: 0;
}
.section-heading.compact {
  position: sticky;
  top: 12px;
  z-index: 5;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
}
.catalog-note {
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
}

.menu-list {
  display: grid;
  gap: 14px;
  border-top: 0;
}

.menu-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 154px;
  gap: 18px;
  align-items: stretch;
  min-height: 156px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.045);
  transition:
    border-color 0.16s ease,
    box-shadow 0.16s ease,
    transform 0.16s ease;
}

.menu-card:hover {
  border-color: #ffd6da;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.07);
  transform: translateY(-1px);
}

.featured-menu-card {
  border-color: #ffc4c9;
  background:
    linear-gradient(
      135deg,
      rgba(234, 29, 44, 0.08),
      rgba(255, 255, 255, 0.96) 58%
    ),
    #fff;
}

.menu-copy {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.menu-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.menu-meta {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.menu-meta strong {
  overflow: hidden;
  font-size: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.menu-meta span {
  color: var(--brand);
  font-weight: 900;
  white-space: nowrap;
}
.menu-copy p {
  max-width: 38ch;
  margin-bottom: auto;
  color: #666;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.35;
}
.menu-copy .button {
  align-self: flex-start;
  min-height: 36px;
  padding: 0 14px;
}

.food-art,
.food-photo {
  min-height: 112px;
  border-radius: 12px;
}

.food-photo {
  width: 154px;
  height: 124px;
  align-self: center;
  object-fit: cover;
  background: var(--soft);
  box-shadow:
    inset 0 0 0 1px rgba(0, 0, 0, 0.04),
    0 12px 22px rgba(0, 0, 0, 0.1);
}

.food-art {
  background:
    radial-gradient(circle at 50% 35%, #ffe2a6 0 18%, transparent 19%),
    radial-gradient(circle at 48% 52%, #74301c 0 28%, transparent 29%),
    radial-gradient(circle at 48% 65%, #ffd978 0 37%, transparent 38%),
    linear-gradient(135deg, #f6f6f6, #dedede);
}

.menu-card:nth-child(2n) .food-art {
  background:
    radial-gradient(circle at 50% 50%, #ffd45a 0 11%, transparent 12%),
    radial-gradient(circle at 62% 52%, #ffd45a 0 10%, transparent 11%),
    radial-gradient(circle at 39% 58%, #ffd45a 0 9%, transparent 10%),
    linear-gradient(135deg, #f9f0dc, #f4c26c);
}

.menu-card:nth-child(3n) .food-art {
  background:
    radial-gradient(circle at 50% 47%, #6baa4f 0 18%, transparent 19%),
    radial-gradient(circle at 55% 58%, #e8f1d1 0 31%, transparent 32%),
    linear-gradient(135deg, #e9f8ef, #c9ead5);
}

.badge {
  display: inline-flex;
  width: fit-content;
  padding: 4px 7px;
  border-radius: 999px;
  color: var(--green);
  background: #e6f6ed;
  font-size: 11px;
  font-weight: 900;
}

.badge.muted {
  color: var(--purple);
  background: #efe9ff;
}
.badge.live {
  color: var(--brand-dark);
  background: #fff0f1;
}

.order-panel,
.panel,
.tracking-card,
.campaign {
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.06);
}

.order-panel {
  position: sticky;
  top: 88px;
  padding: 18px;
  border-radius: 18px;
  overflow: hidden;
}

.cart-flow-header {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) 58px;
  align-items: center;
  margin: -4px -2px 22px;
  min-height: 48px;
}

.cart-flow-header h2 {
  margin: 0;
  text-align: center;
  font-size: 18px;
  letter-spacing: 0.02em;
}

.cart-back,
.cart-clear {
  border: 0;
  color: var(--brand);
  background: transparent;
  cursor: pointer;
  font-weight: 800;
}

.cart-back {
  display: grid;
  place-items: center;
  justify-self: start;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--soft);
}

.cart-back::before {
  display: none;
}

.cart-back svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.6;
}

.cart-back-legacy {
  display: none;
  content: "⌄";
  font-size: 32px;
  line-height: 1;
}

.cart-clear {
  justify-self: end;
  font-size: 14px;
}

.cart-back:hover {
  background: #fff0f1;
}

.cart-store-head {
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  margin-bottom: 18px;
  padding: 4px 2px 18px;
  border-bottom: 1px solid var(--line);
}

.cart-store-head img {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
}

.cart-store-head strong,
.cart-store-head button {
  display: block;
}

.cart-store-head strong {
  font-size: 21px;
}

.cart-store-head button,
.cart-add-more,
.coupon-row button,
.delivery-choice button {
  border: 0;
  color: var(--brand);
  background: transparent;
  cursor: pointer;
  font-weight: 900;
}

@media (prefers-reduced-motion: reduce) {
  .app-splash,
  .app-splash.hide,
  .splash-loader span,
  .feed-indicators span.active::after {
    animation-duration: 0.01ms;
    animation-iteration-count: 1;
  }
}

.restaurant-metrics strong {
  font: inherit;
}

.cart-step {
  display: none;
  gap: 14px;
  padding-bottom: 18px;
}

.cart-step.active {
  display: grid;
  gap: 14px;
}

.cart-section {
  display: grid;
  gap: 14px;
  padding: 0 0 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--line);
}

.cart-section.cart-step {
  display: none;
  padding-bottom: 18px;
}

.cart-section.cart-step.active {
  display: grid;
}

.cart-section h3,
.cart-step h3,
.cart-suggestion h3 {
  margin: 0;
  font-size: 17px;
  line-height: 1.1;
}

.cart-close {
  display: none;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  color: var(--ink);
  background: var(--soft);
  cursor: pointer;
  font-weight: 900;
}

.cart-list {
  display: grid;
  gap: 0;
  min-height: 58px;
  margin-bottom: 0;
}

.cart-list.empty {
  place-items: center;
  color: var(--muted);
  border: 1px dashed var(--line);
  border-radius: 12px;
  background: #fafafa;
  font-size: 14px;
}

.cart-item,
.money-row,
.admin-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  background: var(--soft);
}

.cart-list .cart-item {
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border: 0;
  border-bottom: 1px solid var(--line);
  border-radius: 0;
  background: #fff;
  box-shadow: none;
}

.cart-thumb {
  flex: 0 0 auto;
  width: 54px;
  height: 54px;
  border-radius: 12px;
  object-fit: cover;
  background: var(--soft);
}

.cart-item-copy {
  display: grid;
  gap: 4px;
  min-width: 0;
}

.cart-item-copy strong,
.cart-item-copy span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cart-item-copy strong {
  color: var(--ink);
  font-size: 15px;
  font-weight: 900;
  line-height: 1.18;
}

.cart-item-copy span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 750;
}

.cart-item-side {
  display: grid;
  justify-items: end;
  gap: 7px;
}

.cart-item-side strong {
  color: #11884a;
  font-size: 14px;
  white-space: nowrap;
}

.cart-item-controls {
  display: grid;
  grid-template-columns: 28px 24px 28px 28px;
  gap: 4px;
  align-items: center;
  padding: 4px;
  border-radius: 999px;
  background: var(--soft);
}

.cart-item-controls button,
.cart-item-controls span {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
}

.cart-item-controls button {
  border: 0;
  color: var(--brand);
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
  line-height: 1;
}

.cart-item-controls span {
  color: var(--ink);
  font-size: 13px;
  font-weight: 900;
}

.cart-item-controls .cart-trash {
  color: var(--brand);
  background: #fff0f1;
}

.cart-trash svg {
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

.cart-add-more {
  justify-self: center;
  margin-top: -4px;
  font-size: 17px;
}

.cart-suggestion {
  display: grid;
  gap: 10px;
  padding: 0 0 96px;
}

.cart-suggestion[hidden] {
  display: none;
}

.cart-suggestion-step {
  padding: 2px 0 0;
}

.cart-suggestion article {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr) 38px;
  gap: 10px;
  align-items: center;
  max-width: 360px;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #fff;
}

.cart-suggestion img {
  width: 58px;
  height: 58px;
  border-radius: 12px;
  object-fit: cover;
  background: var(--soft);
}

.cart-suggestion article strong,
.cart-suggestion article span {
  display: block;
}

.cart-suggestion article span {
  margin-top: 3px;
  color: var(--ink);
  font-weight: 900;
}

.cart-suggestion article button {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  color: #fff;
  background: var(--brand);
  box-shadow: none;
  cursor: pointer;
  font-size: 24px;
  line-height: 1;
}

.field-group {
  display: grid;
  gap: 8px;
  margin: 0 0 14px;
  padding: 0;
  border: 0;
}

.field-group legend {
  margin-bottom: 8px;
  font-weight: 900;
}

.payment-step-head {
  display: grid;
  gap: 6px;
}

.payment-step-head span {
  color: var(--muted);
  font-size: 13px;
  font-weight: 750;
}

.payment-stack {
  display: grid;
  gap: 18px;
}

.compact-payments {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #fff;
}

.compact-payments legend {
  margin-bottom: 12px;
  color: var(--ink);
  font-size: 15px;
  font-weight: 900;
}

.compact-payments legend {
  grid-column: 1 / -1;
}

.compact-payments label {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 80px;
  gap: 9px;
  padding: 12px 9px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--soft);
  font-size: 13px;
  color: var(--ink);
  cursor: pointer;
  transition:
    border-color 0.16s ease,
    background 0.16s ease,
    box-shadow 0.16s ease;
}

.compact-payments input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.compact-payments label:has(input:checked) {
  border-color: transparent;
  background: #fff0f1;
  box-shadow: inset 0 0 0 2px #ea1d2c;
}

.compact-payments label:has(input:checked)::after {
  content: "";
  position: absolute;
  top: 7px;
  right: 7px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--brand);
}

.payment-icon,
.payment-logo {
  display: block;
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
}

.payment-icon {
  color: var(--brand);
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.payment-icon path,
.payment-icon rect,
.payment-icon circle {
  vector-effect: non-scaling-stroke;
}

.payment-logo {
  object-fit: contain;
}

.pix-logo {
  width: 42px;
  height: 24px;
  fill: #4bb8a9;
}

.compact-payments strong {
  display: block;
  max-width: 100%;
  overflow: hidden;
  color: var(--ink);
  font-size: 12px;
  line-height: 1.1;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.field-group label,
.check-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 11px 0;
  color: var(--muted);
  border-bottom: 1px solid var(--line);
}

.field-group label span {
  margin-left: auto;
  color: var(--ink);
  font-weight: 800;
}
.check-row {
  justify-content: flex-start;
  padding: 14px;
  border: 0;
  border-radius: 16px;
  color: var(--ink);
  background: #fff7f8;
  font-weight: 900;
}

.check-row input {
  width: 18px;
  height: 18px;
  accent-color: var(--brand);
}

.check-row span {
  display: grid;
  gap: 3px;
}

.check-row small {
  color: var(--muted);
  font-size: 12px;
  font-weight: 750;
}

.delivery-choice,
.delivery-option,
.coupon-row {
  display: grid;
  align-items: center;
  gap: 12px;
}

.delivery-choice {
  grid-template-columns: 36px minmax(0, 1fr) auto;
  padding: 0;
}

.delivery-choice svg {
  width: 28px;
  height: 28px;
  fill: var(--ink);
  stroke: none;
}

.delivery-choice strong,
.delivery-choice span,
.delivery-option strong,
.delivery-option em {
  display: block;
}

.delivery-choice span,
.delivery-option em,
.coupon-row span {
  color: var(--muted);
  font-style: normal;
  font-weight: 700;
}

.delivery-alert {
  margin: -2px 0 18px;
  padding: 13px 14px;
  border-radius: 12px;
  color: #7a5715;
  background: #fff8e8;
  font-weight: 750;
}

.delivery-option {
  grid-template-columns: minmax(0, 1fr) auto 26px;
  min-height: 58px;
  padding: 12px;
  border: 1px solid var(--ink);
  border-radius: 14px;
  background: #fff;
}

.delivery-option > strong {
  color: #11884a;
}

.delivery-option input {
  width: 24px;
  height: 24px;
  accent-color: var(--brand);
}

.coupon-row {
  grid-template-columns: minmax(0, 1fr) auto;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: #fff;
}

.coupon-row strong,
.coupon-row span {
  grid-column: 1;
}
.field-group.compact-payments label {
  display: flex;
  border: 1px solid var(--line);
}

.field-group.compact-payments label span {
  margin-left: 0;
}

.totals {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #fff;
}
.totals h3 {
  margin-bottom: 4px;
}
.totals div {
  display: flex;
  justify-content: space-between;
}
.totals div span {
  color: var(--muted);
  font-weight: 700;
}
.totals div strong {
  color: var(--ink);
}
.totals .grand {
  padding-top: 14px;
  border-top: 1px solid var(--line);
  font-size: 20px;
  font-weight: 900;
}
.notice {
  margin: 0 0 16px;
  padding: 13px 14px;
  border-radius: 14px;
  color: #6d3d12;
  background: #fff8e8;
  font-size: 13px;
  font-weight: 750;
}
.continue-shopping {
  margin-bottom: 8px;
}

.cart-flow-footer {
  position: sticky;
  left: 0;
  right: 0;
  bottom: -18px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(168px, 1fr);
  gap: 14px;
  align-items: center;
  margin: 18px -18px -18px;
  padding: 14px 18px 18px;
  background: #fff;
  box-shadow: 0 -10px 26px rgba(0, 0, 0, 0.08);
}

.cart-flow-footer span,
.cart-flow-footer strong {
  display: block;
}

.cart-flow-footer span {
  color: var(--muted);
  font-weight: 700;
}

.cart-flow-footer strong {
  font-size: 18px;
}

.cart-flow-footer .button {
  min-height: 54px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 900;
}

.tracking-shell,
.admin-shell {
  max-width: 1240px;
  margin: 0 auto;
}
.tracking-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px;
  gap: 10px;
  max-width: 760px;
  margin: 0 auto;
  padding: clamp(14px, 3vw, 24px);
  background: linear-gradient(180deg, #fff 0, #fff8f9 100%);
}

.tracking-hero {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
}

.tracking-status-badge {
  display: inline-flex;
  width: fit-content;
  margin-top: 7px;
  padding: 7px 10px;
  border-radius: 999px;
  color: var(--brand);
  background: #fff0f1;
  font-size: 13px;
  font-weight: 950;
  line-height: 1;
}

.eta-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  min-width: 180px;
  padding: 10px 12px;
  border: 1px solid #ffd4d8;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 14px 30px rgba(234, 29, 44, 0.08);
}

.eta-card .fi {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  color: var(--brand);
  background: #fff0f1;
  font-size: 15px;
  line-height: 1;
}

.eta-card span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 900;
  white-space: nowrap;
}

.eta-card strong {
  color: var(--brand);
  font-size: 18px;
  line-height: 1;
}

.delivery-map {
  grid-column: 1;
  position: relative;
  overflow: hidden;
  min-height: 145px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background:
    radial-gradient(
      circle at 16% 78%,
      rgba(234, 29, 44, 0.12),
      transparent 22%
    ),
    radial-gradient(
      circle at 86% 18%,
      rgba(46, 139, 87, 0.14),
      transparent 24%
    ),
    linear-gradient(90deg, rgba(234, 29, 44, 0.05) 0 1px, transparent 1px 72px),
    linear-gradient(0deg, rgba(234, 29, 44, 0.05) 0 1px, transparent 1px 64px),
    #fff;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.7);
}

.delivery-map::before,
.delivery-map::after {
  content: "";
  position: absolute;
  border-radius: 999px;
  background: #f1f1f1;
  transform: rotate(-18deg);
}

.delivery-map::before {
  left: -24px;
  top: 74px;
  width: 120%;
  height: 24px;
}

.delivery-map::after {
  left: 18%;
  top: -20px;
  width: 26px;
  height: 130%;
  transform: rotate(21deg);
}

.map-route {
  position: absolute;
  left: 19%;
  top: 59%;
  width: 58%;
  height: 0;
  border-top: 5px dotted #f3a0a7;
  transform: rotate(-18deg);
  transform-origin: left center;
}

.map-route-progress {
  position: absolute;
  left: 19%;
  top: 59%;
  width: 34%;
  height: 0;
  border-top: 5px solid var(--brand);
  border-radius: 999px;
  transform: rotate(-18deg);
  transform-origin: left center;
}

.tracking-shell[data-tracking-step="0"] .map-route-progress {
  width: 12%;
}

.tracking-shell[data-tracking-step="1"] .map-route-progress {
  width: 34%;
}

.tracking-shell[data-tracking-step="2"] .map-route-progress {
  width: 52%;
}

.tracking-shell[data-tracking-step="3"] .map-route-progress {
  width: 58%;
}

.map-pin {
  position: absolute;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 3px solid #fff;
  border-radius: 50% 50% 50% 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.14);
  transform: rotate(-45deg);
}

.map-pin::before {
  content: "";
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #fff;
}

.store-pin {
  left: 15%;
  top: 56%;
  background: var(--brand);
}

.courier-pin {
  left: 48%;
  top: 41%;
  background: #252525;
}

.tracking-shell[data-tracking-step="0"] .courier-pin {
  left: 22%;
  top: 53%;
}

.tracking-shell[data-tracking-step="2"] .courier-pin {
  left: 64%;
  top: 34%;
}

.tracking-shell[data-tracking-step="3"] .courier-pin {
  left: 78%;
  top: 28%;
}

.tracking-shell[data-tracking-step="cancelled"] .map-route-progress,
.tracking-shell[data-tracking-step="cancelled"] .courier-pin {
  opacity: 0.35;
}

.home-pin {
  right: 16%;
  top: 26%;
  background: var(--green);
}

.map-label {
  position: absolute;
  z-index: 2;
  padding: 6px 9px;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  font-size: 12px;
  font-weight: 900;
}

.store-label {
  left: 9%;
  bottom: 18px;
  color: var(--brand);
}

.home-label {
  right: 13%;
  top: 18px;
  color: var(--green);
}

.timeline {
  grid-column: 1;
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.timeline li {
  position: relative;
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  align-items: center;
  min-height: 46px;
  padding: 7px 9px;
  border: 1px solid var(--line);
  border-radius: 14px;
  color: var(--muted);
  background: #fff;
  font-weight: 800;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04);
}

.timeline li::before {
  content: none;
}

.timeline-icon {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  margin: 0 auto;
  border: 1.5px solid var(--line);
  border-radius: 50%;
  color: var(--muted);
  background: #fff;
}

.timeline-icon svg,
.timeline-icon .fi {
  width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
}

.timeline-icon .fi::before {
  display: block;
  line-height: 1;
}

.timeline-icon svg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.4;
}

.timeline li::after {
  content: "";
  position: absolute;
  left: 23px;
  top: calc(100% - 4px);
  bottom: -12px;
  width: 2px;
  background: var(--line);
}

.timeline li:last-child::after {
  display: none;
}
.timeline li.done,
.timeline li.current {
  color: var(--ink);
}
.timeline li.done .timeline-icon {
  border-color: var(--green);
  color: #fff;
  background: var(--green);
}

.timeline li .delivery-done-icon {
  border-color: #cfeede;
  color: var(--green);
  background: #e6f6ed;
}

.timeline li.done .delivery-done-icon,
.timeline li.current .delivery-done-icon {
  border-color: var(--green);
  color: #fff;
  background: var(--green);
}
.timeline li.current {
  border-color: #ffc4c9;
  box-shadow: 0 16px 34px rgba(234, 29, 44, 0.12);
}
.timeline li.current .timeline-icon {
  border-color: var(--brand);
  color: #fff;
  background: var(--brand);
}
.timeline li.done::after {
  background: var(--green);
}

.tracking-receipt {
  grid-column: 2;
  grid-row: 2 / span 2;
  align-self: start;
  display: grid;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04);
}

.receipt-head,
.receipt-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.receipt-head {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding-bottom: 7px;
  border-bottom: 1px dashed var(--line);
}

.receipt-head img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--soft);
}

.receipt-head div {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.receipt-head span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 900;
}

.receipt-head strong {
  color: var(--brand);
  font-size: 15px;
}

.receipt-head div strong {
  overflow: hidden;
  color: var(--ink);
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.receipt-row {
  color: var(--ink);
  font-size: 12px;
  font-weight: 850;
}

.receipt-row.muted {
  color: var(--muted);
  font-weight: 750;
}

.timeline li span:last-child {
  display: grid;
  gap: 3px;
}

.timeline li strong {
  color: inherit;
  font-size: 14px;
}

.timeline li small {
  display: none;
}

.tracking-actions {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  padding: 6px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #fff;
}

.tracking-actions .button {
  min-height: 40px;
  padding: 0 12px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 900;
  white-space: normal;
}

.tracking-actions .button.danger {
  min-width: 82px;
  min-height: 34px;
  padding: 0 12px;
  color: var(--brand);
  background: #fff0f1;
  box-shadow: none;
}

.admin-shell {
  padding-left: clamp(14px, 3vw, 28px);
  padding-right: clamp(14px, 3vw, 28px);
  padding-bottom: 34px;
  background:
    radial-gradient(circle at 0 0, rgba(234, 29, 44, 0.08), transparent 240px),
    linear-gradient(180deg, #fff 0, #fff6f7 280px, #fff 100%);
}

.admin-layout {
  display: grid;
  grid-template-columns: 244px minmax(0, 1fr);
  gap: 18px;
  align-items: stretch;
  width: min(90vw, 1480px);
  max-width: none;
  margin: 0 auto;
}

.admin-side {
  align-self: stretch;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 16px;
  padding: 14px;
  border: 1px solid #d81627;
  border-radius: 16px;
  color: #fff;
  background: linear-gradient(180deg, #ef2333 0%, #d91526 48%, #b80f1e 100%);
  box-shadow: 0 18px 44px rgba(234, 29, 44, 0.22);
}

.admin-main {
  min-width: 0;
}

.partner-card {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-radius: 14px;
  color: var(--ink);
  background: #fff;
  box-shadow: 0 14px 30px rgba(143, 0, 12, 0.14);
}

.partner-card img {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  object-fit: cover;
}

.admin-wordmark {
  display: block;
  color: var(--ink);
  font-size: 20px;
  font-weight: 900;
}

.partner-card span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 800;
}

.partner-home-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  min-height: 32px;
  padding: 0;
  border-radius: 999px;
  color: var(--brand);
  background: #fff0f1;
  font-size: 16px;
  font-weight: 900;
  white-space: nowrap;
}

.partner-home-link .fi {
  display: grid;
  place-items: center;
  line-height: 1;
}

.partner-home-link:hover {
  background: #ffe1e4;
}

.side-summary span,
.side-summary small {
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  font-weight: 800;
}

.admin-tabs {
  display: grid;
  align-content: start;
  gap: 5px;
  min-height: 0;
}

.admin-tabs button {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 0 12px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: rgba(255, 255, 255, 0.78);
  cursor: pointer;
  text-align: left;
  font-weight: 900;
}

.admin-tabs button svg,
.admin-tabs button .fi {
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
}

.admin-tabs button svg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.2;
}

.admin-tabs button .fi {
  display: grid;
  place-items: center;
  font-size: 19px;
  line-height: 1;
}

.admin-tabs button span {
  display: block;
}

.admin-tabs button::after {
  content: "";
  display: inline-grid;
  place-items: center;
  width: 8px;
  height: 8px;
  margin-left: auto;
  border-radius: 10px;
  background: transparent;
}

.admin-tabs button.active {
  color: #fff;
  background: rgba(255, 255, 255, 0.18);
}

.admin-tabs button.active::after {
  background: #fff;
}

.side-summary {
  display: grid;
  gap: 4px;
  padding: 14px;
  border-radius: 12px;
  color: #fff;
  background: rgba(255, 255, 255, 0.16);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16);
}

.side-summary span,
.side-summary small {
  color: rgba(255, 255, 255, 0.78);
}

.side-summary strong {
  font-size: 28px;
  font-weight: 900;
}

.admin-tab {
  display: none;
}
.admin-tab.active {
  display: block;
}

.partner-header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 16px;
  color: var(--ink);
  background: #fff;
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.04);
}

.partner-header .eyebrow {
  color: var(--brand);
}
.partner-header h1 {
  margin: 0;
  font-size: clamp(30px, 4vw, 42px);
  letter-spacing: 0;
}
.partner-header .button.primary {
  color: #fff;
  background: var(--brand);
}

.partner-pills,
.partner-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.partner-pills {
  margin-top: 10px;
}

.partner-pills span {
  min-height: 28px;
  padding: 6px 10px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: #555;
  background: var(--soft);
  font-size: 12px;
  font-weight: 900;
}

.partner-actions {
  justify-content: flex-end;
}

.stat-grid,
.finance-grid,
.campaign-grid,
.integration-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.stat-grid article {
  position: relative;
  overflow: hidden;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.05);
}

.stat-grid article::after {
  content: "";
  position: absolute;
  right: -24px;
  top: -24px;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: #fff0f1;
}

.stat-grid span,
.stat-grid small,
.money-row em {
  display: block;
  color: var(--muted);
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
}

.stat-grid strong,
.big-number {
  display: block;
  margin-top: 6px;
  font-size: 32px;
  font-weight: 900;
}

.orders-board {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 0;
}

.partner-overview-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 12px;
}

.partner-overview-grid article,
.finance-total-card,
.finance-mini-grid span,
.metric-side span,
.integration-checks span {
  display: grid;
  gap: 3px;
  padding: 12px;
  border: 1px solid #ffe1e4;
  border-radius: 14px;
  background: #fff;
}

.partner-overview-grid article {
  border-left: 3px solid var(--brand);
  background: linear-gradient(180deg, #fff, #fff9fa);
}

.partner-overview-grid span,
.finance-total-card span,
.partner-overview-grid small,
.finance-total-card small {
  color: var(--muted);
  font-size: 12px;
  font-weight: 850;
}

.partner-overview-grid strong,
.finance-total-card strong {
  color: var(--brand);
  font-size: 24px;
  line-height: 1.1;
}

.waiter-command-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(310px, 0.75fr);
  gap: 16px;
  align-items: start;
}

.table-command-panel,
.waiter-side-panel {
  min-height: 100%;
}

.waiter-heading {
  align-items: center;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
}

.admin-inline-actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 14px;
}

.table-command-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.table-command-card {
  display: grid;
  gap: 10px;
  min-height: 158px;
  padding: 13px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #fff;
  box-shadow: none;
  transition:
    border-color 0.16s ease,
    box-shadow 0.16s ease,
    transform 0.16s ease;
}

.table-command-card:hover {
  border-color: #dedede;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04);
  transform: translateY(-1px);
}

.table-command-card.is-open {
  border-color: #ffd6da;
  background: linear-gradient(180deg, #fff, #fff9fa);
}

.table-command-card.is-waiting {
  border-color: #f6dfaf;
  background: #fff;
}

.table-command-card.is-free {
  background: var(--soft);
}

.table-command-card.selected {
  border-color: var(--brand);
  box-shadow:
    0 0 0 3px #fff0f1,
    0 12px 26px rgba(234, 29, 44, 0.08);
}

.command-head,
.command-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.command-head span,
.waiter-total span {
  display: block;
  color: var(--muted);
  font-size: 12px;
  font-weight: 900;
}

.command-head strong {
  display: block;
  margin-top: 3px;
  font-size: 17px;
}

.command-head em {
  flex: 0 0 auto;
  padding: 6px 9px;
  border-radius: 999px;
  color: var(--brand);
  background: #fff0f1;
  font-size: 11px;
  font-style: normal;
  font-weight: 900;
}

.table-command-card.is-waiting .command-head em {
  color: #8a5b05;
  background: #fff2cf;
}

.table-command-card.is-free .command-head em {
  color: var(--muted);
  background: #fff;
}

.command-items {
  display: grid;
  gap: 6px;
  min-height: 70px;
  padding: 10px;
  border: 1px solid #ffe1e4;
  border-radius: 12px;
  background: #fafafa;
}

.command-items span,
.table-command-card p,
.waiter-call span {
  color: var(--muted);
  font-size: 13px;
  font-weight: 750;
}

.command-foot {
  margin-top: auto;
}

.command-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.command-foot strong {
  font-size: 21px;
}

.waiter-side-panel {
  display: grid;
  gap: 9px;
  position: sticky;
  top: 24px;
  max-height: calc(100dvh - 48px);
  overflow: visible;
}

.table-detail-head {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 12px;
}

.command-panel-close {
  display: none;
}

.table-detail-head h2 {
  margin: 2px 0 0;
}

.command-status-pill {
  flex: 0 0 auto;
  padding: 7px 10px;
  border-radius: 999px;
  color: var(--brand);
  background: #fff0f1;
  font-size: 12px;
  font-weight: 900;
}

.table-detail-total {
  display: grid;
  gap: 2px;
  padding: 13px 14px;
  border-radius: 14px;
  color: #fff;
  background: linear-gradient(135deg, #ea1d2c, #b80f1e);
}

.table-detail-total span,
.table-detail-total small {
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  font-weight: 850;
}

.table-detail-total strong {
  font-size: 26px;
  line-height: 1.05;
}

.command-detail-list,
.quick-add-panel,
.table-payment-panel {
  display: grid;
  gap: 8px;
}

.command-line-item {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr) 28px;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid #ffe1e4;
  border-radius: 12px;
  background: #fff;
}

.command-line-item img {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  object-fit: cover;
}

.command-line-item strong,
.quick-add-panel strong,
.table-payment-panel strong {
  color: var(--ink);
  font-size: 13px;
}

.command-line-item span {
  display: block;
  margin-top: 1px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 800;
}

.command-line-item button {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 10px;
  color: var(--brand);
  background: #fff0f1;
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
}

.empty-command {
  margin: 0;
  padding: 10px;
  border-radius: 12px;
  color: var(--muted);
  background: var(--soft);
  font-weight: 800;
}

.quick-add-panel > div {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.quick-add-panel button {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 7px;
  align-items: center;
  min-height: 50px;
  padding: 7px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
  text-align: left;
  transition:
    border-color 0.16s ease,
    background 0.16s ease;
}

.quick-add-panel button:hover {
  border-color: #ffd6da;
  background: #fff8f9;
}

.quick-add-panel button:disabled,
.table-payment-panel button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.quick-add-panel img {
  grid-row: span 2;
  width: 34px;
  height: 34px;
  border-radius: 9px;
  object-fit: cover;
}

.quick-add-panel span {
  overflow: hidden;
  color: var(--ink);
  font-size: 12px;
  font-weight: 900;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.quick-add-panel em {
  color: var(--brand);
  font-size: 12px;
  font-style: normal;
  font-weight: 900;
}

.table-payment-panel > div {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 7px;
}

.table-payment-panel button {
  display: grid;
  place-items: center;
  min-height: 40px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
  color: var(--muted);
  cursor: pointer;
  font-size: 12px;
  font-weight: 900;
  transition:
    border-color 0.16s ease,
    background 0.16s ease,
    color 0.16s ease;
}

.table-payment-panel button:hover {
  border-color: #ffd6da;
  color: var(--brand);
  background: #fff8f9;
}

.command-payment-icon {
  width: 23px;
  height: 23px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.2;
}

.command-payment-icon.pix {
  width: 27px;
  height: 27px;
  fill: #4bb8a9;
  stroke: none;
}

.table-payment-panel button.active {
  border-color: transparent;
  color: var(--brand);
  background: #fff0f1;
  box-shadow: inset 0 0 0 2px var(--brand);
}

.waiter-call {
  display: grid;
  gap: 4px;
  padding: 13px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #fff;
}

.waiter-call.urgent {
  border-color: #ffd6da;
  background: #fff7f8;
}

.waiter-total {
  display: grid;
  gap: 4px;
  margin-top: 4px;
  padding: 14px;
  border-radius: 16px;
  color: #fff;
  background: #1f1f1f;
}

.waiter-total span {
  color: rgba(255, 255, 255, 0.68);
}

.waiter-total strong {
  font-size: 28px;
}

.table-close-row .button {
  width: 100%;
}

@media (min-width: 721px) {
  body.admin-active {
    overflow: hidden;
  }

  body.admin-active .admin-shell.view.active {
    position: fixed;
    inset: 0;
    width: 100%;
    max-width: none;
    height: auto;
    overflow: hidden;
    padding-top: clamp(18px, 4vw, 32px);
  }

  body.admin-active .admin-layout {
    height: calc(100dvh - clamp(18px, 4vw, 32px) - 34px);
    min-height: 0;
  }

  body.admin-active .admin-side {
    height: 100%;
    min-height: 0;
    overflow: hidden;
  }

  body.admin-active .admin-main,
  body.admin-active .admin-tab.active {
    min-height: 0;
    height: 100%;
    overflow: hidden;
  }

  body.admin-active #tables.admin-tab.active,
  body.admin-active #tables .waiter-command-shell {
    height: 100%;
    min-height: 0;
  }

  body.admin-active #tables .table-command-panel {
    min-height: 0;
    overflow: hidden;
  }

  body.admin-active #tables .table-command-grid {
    max-height: calc(100dvh - 150px);
    overflow: hidden;
  }

  body.admin-active #tables .waiter-side-panel {
    max-height: calc(100dvh - clamp(18px, 4vw, 32px) - 34px);
    overflow: hidden;
    padding-right: 12px;
  }

  body.admin-active #tables .command-detail-list {
    min-height: 0;
    max-height: clamp(118px, 24dvh, 210px);
    overflow-y: auto;
    overscroll-behavior: contain;
    padding-right: 4px;
  }

  body.admin-active #tables .command-detail-list::-webkit-scrollbar {
    width: 7px;
  }

  body.admin-active #tables .command-detail-list::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #dedede;
  }

  body.admin-active #orders .orders-board {
    height: 100%;
    min-height: 0;
  }

  body.admin-active #finance .finance-grid,
  body.admin-active #campaigns .campaign-grid,
  body.admin-active #metrics .metrics-layout,
  body.admin-active #integrations .integration-grid {
    height: 100%;
    min-height: 0;
    align-content: start;
  }
}

.order-column {
  min-height: 220px;
  padding: 12px;
  border: 1px solid #ffe1e4;
  border-radius: 14px;
  background: #fff;
  box-shadow: none;
  transition:
    border-color 0.16s ease,
    background 0.16s ease;
}

.column-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  padding: 4px 4px 10px;
  border-bottom: 1px solid var(--line);
}

.column-heading h2 {
  margin: 0 0 3px;
  font-size: 18px;
}

.column-heading span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 800;
}

.column-heading > strong {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 12px;
  color: var(--brand);
  background: #fff0f1;
  font-size: 14px;
}

.order-ticket {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  margin-top: 10px;
  padding: 10px 11px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
  box-shadow: none;
}

.priority-ticket {
  border-left: 3px solid var(--brand);
}

.ticket-top {
  display: contents;
}

.ticket-top > strong {
  color: var(--muted);
  font-size: 12px;
  font-weight: 900;
}

.ticket-main {
  min-width: 0;
}

.ticket-main,
.ticket-meta {
  grid-column: 1;
}

.order-ticket .button {
  grid-column: 2;
}

.order-ticket .button {
  grid-row: 2 / span 2;
  align-self: center;
  min-height: 28px;
  padding: 0 9px;
  font-size: 11px;
}

.ticket-main h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.order-ticket h3 {
  margin: 0;
  font-size: 15px;
}

.order-ticket small {
  color: var(--muted);
  font-weight: 800;
}

.ticket-meta,
.ticket-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.ticket-meta span {
  min-height: 24px;
  padding: 5px 8px;
  border-radius: 999px;
  color: #7c1b23;
  background: #fff3f4;
  font-size: 11px;
  font-weight: 900;
}

.ticket-actions .button {
  flex: 1 1 92px;
}

.whatsapp-icon-button {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  color: #128c7e;
  background: #e8f7f3;
  cursor: pointer;
}

.whatsapp-icon-button svg {
  width: 17px;
  height: 17px;
  fill: currentColor;
}

.whatsapp-icon-button:hover {
  color: #fff;
  background: #128c7e;
}

.status-chip {
  padding: 5px 8px;
  border-radius: 999px;
  color: var(--brand);
  background: #fff0f1;
  font-size: 11px;
  font-weight: 900;
}

.order-detail-backdrop,
.order-detail-modal {
  display: none;
}

.order-detail-backdrop.show {
  position: fixed;
  inset: 0;
  z-index: 95;
  display: block;
  background: rgba(0, 0, 0, 0.42);
  backdrop-filter: blur(2px);
}

.order-detail-modal.show {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 110;
  display: block;
  width: min(calc(100vw - 28px), 430px);
  max-height: calc(100dvh - 28px);
  overflow: auto;
  padding: 20px;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.24);
  transform: translate(-50%, -50%);
}

.modal-close {
  position: absolute;
  top: 18px;
  right: 18px;
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  color: var(--ink);
  background: var(--soft);
  cursor: pointer;
  font-weight: 900;
}

.order-detail-heading {
  padding-right: 44px;
}

.order-detail-heading h2 {
  margin: 0;
  font-size: 22px;
}

.order-detail-heading span {
  color: var(--brand);
  font-size: 13px;
  font-weight: 900;
}

.order-detail-product {
  display: grid;
  grid-template-columns: 112px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  margin-bottom: 12px;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #fff;
}

.order-detail-product img {
  width: 112px;
  height: 96px;
  border-radius: 8px;
  object-fit: cover;
  background: var(--soft);
}

.order-detail-product strong,
.order-detail-product small {
  display: block;
}

.order-detail-product strong {
  margin-top: 7px;
  font-size: 21px;
  line-height: 1.05;
}

.order-detail-product small {
  margin-top: 3px;
  color: var(--brand);
  font-size: 15px;
  font-weight: 900;
}

.order-detail-product em {
  display: block;
  margin-top: 8px;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
}

.order-items-list {
  display: grid;
  gap: 6px;
  margin: -4px 0 16px;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.order-items-list div {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  padding: 7px 0;
  border-bottom: 1px solid var(--line);
}

.order-items-list div:last-child {
  border-bottom: 0;
}

.order-items-list strong {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  font-size: 13px;
}

.order-items-list em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
}

.order-detail-section {
  margin-bottom: 16px;
}

.order-detail-section h3 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 8px;
  font-size: 14px;
}

.order-detail-section h3 svg {
  width: 17px;
  height: 17px;
  fill: none;
  stroke: var(--brand);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.2;
}

.order-detail-list {
  display: grid;
  gap: 8px;
}

.order-detail-list div {
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background: var(--soft);
}

.order-detail-list div > svg {
  width: 17px;
  height: 17px;
  fill: none;
  stroke: var(--brand);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.1;
}

.order-detail-list div > svg.pix-payment-icon {
  width: 18px;
  height: 18px;
  fill: #4bb8a9;
  stroke: none;
}

.order-detail-list span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 800;
}

.order-detail-list strong {
  color: var(--ink);
  font-size: 14px;
  text-align: left;
}

.buyer-contact {
  display: flex;
  align-items: baseline;
  gap: 8px;
  min-width: 0;
}

.buyer-contact span {
  overflow: hidden;
  color: var(--ink);
  font-size: 15px;
  font-weight: 900;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.buyer-contact small {
  color: var(--muted);
  font-size: 12px;
  font-weight: 850;
  white-space: nowrap;
}

.financial-list div:last-child {
  background: #fff0f1;
}

.financial-list div:last-child span,
.financial-list div:last-child strong {
  color: var(--brand);
  font-weight: 900;
}

.financial-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.financial-list div {
  justify-items: center;
  align-content: center;
  min-height: 54px;
  padding: 9px 10px;
  text-align: center;
}

.financial-list strong {
  font-size: 15px;
  text-align: center;
}

.financial-list div > svg {
  width: 15px;
  height: 15px;
}

.change-note {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0 0;
  padding: 10px 12px;
  border-radius: 8px;
  color: #5f4a00;
  background: #fff8df;
  font-size: 13px;
  font-weight: 800;
}

.change-note svg {
  flex: 0 0 auto;
  width: 17px;
  height: 17px;
  fill: none;
  stroke: #d19400;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.2;
}

.order-detail-actions {
  display: grid;
  grid-template-columns: minmax(92px, 0.85fr) minmax(126px, 1fr) 48px;
  gap: 8px;
}

.order-detail-actions .button {
  width: 100%;
  min-height: 40px;
  padding: 0 10px;
  font-size: 12px;
  line-height: 1.15;
  white-space: normal;
}

.modal-whatsapp-action {
  gap: 7px;
  color: #128c7e;
}

.modal-whatsapp-action svg {
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  fill: currentColor;
}

.modal-ok-action {
  min-width: 48px;
  padding: 0;
  font-size: 12px;
}

.table-panel,
.finance-grid .panel,
.integration,
.panel {
  padding: 20px;
}
.menu-admin-heading {
  align-items: end;
}

.menu-admin-heading h2 {
  margin: 2px 0 0;
}

.admin-menu-catalog {
  display: grid;
  gap: 20px;
}

.admin-menu-section {
  display: grid;
  gap: 10px;
}

.admin-menu-section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ffe1e4;
}

.admin-menu-section-head h3 {
  margin: 0;
  color: var(--brand);
  font-size: 16px;
}

.admin-menu-section-head span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 900;
}

.admin-menu-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.partner-menu-card {
  display: grid;
  grid-template-columns: 86px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 10px;
  border: 1px solid #ffe1e4;
  border-radius: 12px;
  background: #fff;
}

.partner-menu-card.is-highlighted {
  border-color: #ffc4c9;
  background: #fff7f8;
}

.finance-total-card {
  background: linear-gradient(135deg, #fff7f8, #fff);
}

.campaign.active {
  box-shadow: inset 3px 0 0 var(--brand);
}

.status-dot.connected {
  color: var(--brand);
}

.partner-menu-card img {
  width: 86px;
  height: 76px;
  border-radius: 10px;
  object-fit: cover;
}

.partner-menu-copy {
  display: grid;
  gap: 9px;
  min-width: 0;
}

.partner-menu-copy strong {
  display: block;
  overflow: hidden;
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.partner-menu-copy p {
  margin: 3px 0 0;
  color: var(--muted);
  font-size: 12px;
  font-weight: 750;
  line-height: 1.3;
}

.partner-menu-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.partner-menu-tags span {
  min-height: 22px;
  padding: 5px 7px;
  border-radius: 999px;
  color: #555;
  background: var(--soft);
  font-size: 10px;
  font-weight: 900;
}

.partner-menu-tags span:first-child {
  color: var(--brand);
  background: #fff0f1;
}

.partner-menu-side {
  display: grid;
  justify-items: end;
  gap: 6px;
}

.partner-menu-side > strong {
  color: var(--brand);
  font-size: 15px;
}

.partner-menu-side .button {
  min-height: 30px;
  padding: 0 10px;
  font-size: 11px;
}

.menu-pause-button {
  min-height: 28px;
  padding: 0;
  border: 0;
  color: var(--muted);
  background: transparent;
  cursor: pointer;
  font-size: 11px;
  font-weight: 900;
}

.admin-list {
  display: grid;
  gap: 10px;
}
.admin-item {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 10px;
  border: 1px solid #ffe1e4;
  border-radius: 14px;
}

.admin-item img {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  object-fit: cover;
}

.admin-item strong,
.admin-item span {
  display: block;
}
.admin-item small {
  color: var(--muted);
}

.finance-grid,
.integration-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.panel-subtitle {
  margin-top: -4px;
  font-size: 13px;
}
.money-row {
  align-items: center;
  margin-top: 10px;
  padding: 12px 0;
  border-bottom: 1px solid #ffe1e4;
}
.money-row:last-child {
  border-bottom: 0;
}
.money-row strong {
  white-space: nowrap;
}
.finance-breakdown {
  display: grid;
  gap: 8px;
  margin-top: 12px;
}

.finance-breakdown span {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 10px;
  border-radius: 12px;
  color: var(--muted);
  background: #fff3f4;
  font-size: 12px;
  font-weight: 850;
}

.finance-breakdown strong {
  color: var(--ink);
}

.finance-wide {
  grid-column: 1 / -1;
}

.finance-mini-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.finance-mini-grid span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 850;
}

.finance-mini-grid strong {
  display: block;
  color: var(--brand);
  font-size: 20px;
}

.campaign-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.campaign {
  display: grid;
  gap: 10px;
  padding: 20px;
}
.campaign.active {
  border-color: #ffc8cd;
  background: linear-gradient(135deg, #fff, #fff7f8);
}

.campaign-title {
  display: block;
  color: var(--ink);
  font-size: 20px;
  line-height: 1.15;
}

.settlement-meter {
  height: 10px;
  margin: 14px 0;
  overflow: hidden;
  border-radius: 999px;
  background: var(--soft);
}

.settlement-meter span {
  display: block;
  width: 82%;
  height: 100%;
  border-radius: inherit;
  background: var(--brand);
}

.metrics-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 12px;
}

.chart {
  display: flex;
  align-items: end;
  gap: 12px;
  height: 260px;
  padding: 18px;
  border-radius: 16px;
  background:
    linear-gradient(
      180deg,
      transparent 0 24%,
      rgba(0, 0, 0, 0.04) 24% 25%,
      transparent 25% 49%,
      rgba(0, 0, 0, 0.04) 49% 50%,
      transparent 50%
    ),
    var(--soft);
}

.chart span {
  position: relative;
  flex: 1;
  min-width: 36px;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, #ff4a57, var(--brand));
}

.chart b {
  position: absolute;
  left: 50%;
  bottom: -26px;
  transform: translateX(-50%);
  font-size: 12px;
}

.metric-list {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 40px;
}

.metric-list span {
  padding: 10px 12px;
  border-radius: 12px;
  color: #7c1b23;
  background: #fff3f4;
  font-weight: 800;
}

.metric-side {
  display: grid;
  gap: 10px;
  align-content: start;
}

.metric-side span,
.integration-checks span {
  color: var(--muted);
  font-size: 13px;
  font-weight: 850;
}

.metric-side strong {
  display: block;
  color: var(--ink);
  font-size: 20px;
}

.integration {
  display: grid;
  gap: 12px;
}

.integration p {
  margin: 0;
}

.integration-checks {
  display: grid;
  gap: 8px;
}

.integration-checks span {
  padding: 9px 10px;
  border-radius: 12px;
  background: #fff3f4;
}

.status-dot {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 900;
}

.status-dot::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--green);
}

.toast {
  position: fixed;
  top: 18px;
  right: 18px;
  bottom: auto;
  z-index: 130;
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  overflow: hidden;
  width: max-content;
  max-width: min(390px, calc(100vw - 36px));
  min-height: 58px;
  padding: 10px 14px 12px 10px;
  border: 1px solid rgba(234, 29, 44, 0.12);
  border-radius: 16px;
  color: var(--ink);
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 20px 52px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(18px);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-18px) scale(0.96);
  transition:
    opacity 0.24s ease,
    transform 0.24s cubic-bezier(0.2, 0.9, 0.2, 1);
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

.toast-icon {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 12px;
  color: #fff;
  background: var(--brand);
  box-shadow: 0 10px 20px rgba(234, 29, 44, 0.24);
}

.toast-icon svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
}

.toast-message {
  color: var(--ink);
  font-size: 13px;
  font-weight: 850;
  line-height: 1.25;
}

.toast-progress {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 7px;
  height: 3px;
  overflow: hidden;
  border-radius: 999px;
  background: #f1f1f1;
}

.toast-progress::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: var(--brand);
  transform-origin: left center;
}

.toast.show .toast-progress::after {
  animation: toast-progress 3.35s linear forwards;
}

@keyframes toast-progress {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .toast,
  .toast-progress::after {
    transition: none;
    animation: none;
  }
}

.mobile-cart-trigger,
.cart-backdrop,
.command-backdrop,
.promo-backdrop,
.promo-popup {
  display: none;
}

body.cart-modal-open,
body.command-panel-open {
  overflow: hidden;
}

body.store-cart-active .mobile-cart-trigger,
body.cart-has-items:not(.admin-active) .mobile-cart-trigger {
  display: none;
}

body.public-active {
  scrollbar-width: none;
}

body.public-active::-webkit-scrollbar {
  width: 0;
  height: 0;
}

body.store-cart-active .mobile-cart-trigger:active,
body.cart-has-items:not(.admin-active) .mobile-cart-trigger:active {
  transform: translateY(1px);
}

.mobile-cart-trigger small {
  position: absolute;
  top: 8px;
  right: 10px;
  display: grid;
  place-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border: 2px solid #fff;
  border-radius: 999px;
  color: #fff;
  background: #252525;
  font-size: 11px;
  font-weight: 900;
}

.mobile-cart-thumb {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--soft);
}

.mobile-cart-summary {
  display: grid;
  gap: 2px;
  min-width: 0;
  text-align: left;
}

.mobile-cart-summary span {
  overflow: hidden;
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mobile-cart-summary strong {
  overflow: hidden;
  color: var(--ink);
  font-size: 18px;
  font-weight: 900;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mobile-cart-action {
  display: grid;
  place-items: center;
  min-height: 52px;
  border-radius: 10px;
  color: #fff;
  background: var(--brand);
  font-size: 17px;
  font-weight: 900;
}

.cart-symbol {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

.cart-backdrop.show,
body.cart-modal-open .cart-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: block;
  background: rgba(0, 0, 0, 0.36);
  backdrop-filter: blur(2px);
}

.promo-backdrop.show {
  position: fixed;
  inset: 0;
  z-index: 110;
  display: block;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
}

.promo-popup.show {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 120;
  display: grid;
  overflow: hidden;
  width: min(calc(100vw - 32px), 380px);
  padding: 0;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.24);
  transform: translate(-50%, -50%);
}

.promo-photo {
  display: block;
  width: 100%;
  height: 190px;
  object-fit: cover;
  background: var(--soft);
}

.promo-content {
  display: grid;
  gap: 10px;
  padding: 18px;
}

.promo-popup h2 {
  margin: 2px 0 0;
  color: var(--brand);
}

.promo-popup p {
  margin-bottom: 2px;
}

.promo-price {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: var(--soft);
}

.fire-icon {
  width: 24px;
  height: 24px;
  fill: var(--brand);
}

.promo-price strong {
  font-size: 24px;
  color: var(--ink);
}

.promo-close {
  position: absolute;
  top: 12px;
  right: 12px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 50%;
  color: #fff;
  background: rgba(0, 0, 0, 0.48);
  cursor: pointer;
  font-weight: 900;
}

body.cart-modal-open .order-panel,
.order-panel.open {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 100;
  width: min(calc(100vw - 32px), 460px);
  max-height: calc(100dvh - 32px);
  overflow: auto;
  padding: 22px 22px 0;
  border: 0;
  border-radius: 22px;
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.24);
  transform: translate(-50%, -50%);
}

@media (max-width: 1040px) {
  .topbar {
    grid-template-columns: 1fr;
  }
  .delivery-address {
    order: 3;
  }
  .search-box {
    grid-column: 1 / -1;
  }
  .content-grid,
  .admin-layout,
  .orders-board,
  .waiter-command-shell,
  .partner-overview-grid,
  .metrics-layout,
  .finance-mini-grid {
    grid-template-columns: 1fr;
  }
  .order-panel,
  .admin-side {
    position: static;
  }
  .stat-grid,
  .finance-grid,
  .campaign-grid,
  .integration-grid {
    grid-template-columns: 1fr;
  }
  .finance-wide {
    grid-column: auto;
  }
  .admin-side {
    gap: 14px;
  }
  .admin-tabs {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .partner-header {
    grid-template-columns: 1fr;
  }
  .partner-actions {
    justify-content: flex-start;
  }
}

@media (max-width: 720px) {
  body {
    padding-bottom: 92px;
  }
  body.admin-active {
    padding-bottom: 104px;
  }
  .topbar {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .user-address {
    grid-column: 1 / -1;
  }
  .search-box {
    grid-column: 1;
  }
  .nav-icon::before {
    width: 18px;
    height: 18px;
  }
  .delivery-address,
  .search-box {
    order: initial;
  }
  .view {
    padding: 14px;
  }
  .home-shell {
    max-width: 100%;
  }
  .food-feed {
    gap: 16px;
  }
  .food-feed .section-heading p,
  .store-section .section-heading p {
    font-size: 13px;
    line-height: 1.35;
  }
  .home-red-heading {
    margin-bottom: 0;
    padding: 11px 12px;
    border-radius: 12px;
  }
  .home-red-heading p {
    max-width: none;
  }
  .section-heading.compact h2 {
    font-size: 22px;
    line-height: 1.15;
  }
  .best-heading {
    margin-top: 2px;
  }
  .admin-shell {
    padding-left: 14px;
    padding-right: 14px;
  }
  .admin-layout {
    gap: 8px;
  }
  .admin-side {
    display: block;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }
  .partner-card {
    grid-template-columns: 46px minmax(0, 1fr) auto;
    padding: 12px;
    border: 1px solid #d81627;
    border-radius: 14px;
    background: linear-gradient(135deg, #ea1d2c, #b80f1e);
    box-shadow: 0 12px 28px rgba(234, 29, 44, 0.18);
  }
  .partner-card .admin-wordmark {
    color: #fff;
  }
  .partner-card span {
    color: rgba(255, 255, 255, 0.78);
  }
  .partner-card .partner-home-link {
    color: var(--brand);
    background: #fff;
  }
  #orders.admin-tab.active {
    margin-top: 0;
  }
  #orders .orders-board {
    margin-top: 0;
  }
  .partner-card img {
    width: 46px;
    height: 46px;
  }
  .partner-home-link {
    width: 32px;
    min-height: 30px;
    font-size: 15px;
  }
  .admin-tabs {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 90;
    display: grid;
    grid-template-columns: repeat(7, minmax(42px, 1fr));
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2px;
    min-height: calc(64px + env(safe-area-inset-bottom));
    padding: 7px 8px calc(7px + env(safe-area-inset-bottom));
    border-top: 1px solid #eeeeee;
    background: #fff;
    box-shadow: 0 -4px 18px rgba(0, 0, 0, 0.06);
    transform: none;
    backdrop-filter: none;
  }
  .admin-tabs button {
    display: inline-grid;
    place-items: center;
    width: 100%;
    min-width: 0;
    max-width: none;
    height: 50px;
    min-height: 50px;
    padding: 0;
    border-radius: 8px;
    color: #666;
  }
  .admin-tabs button .fi,
  .admin-tabs button svg {
    color: currentColor;
  }
  .admin-tabs button svg {
    width: 21px;
    height: 21px;
  }
  .admin-tabs button span,
  .admin-tabs button::after {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }
  .admin-tabs button.active {
    color: var(--brand);
    background: transparent;
  }
  .side-summary {
    display: none;
  }
  .partner-header {
    gap: 12px;
    padding: 14px;
    border-radius: 14px;
  }
  .partner-header h1 {
    font-size: 34px;
  }
  .partner-pills {
    gap: 6px;
    margin-top: 10px;
  }
  .partner-pills span {
    min-height: 28px;
    padding: 6px 9px;
    font-size: 11px;
  }
  .partner-actions .button {
    flex: 1 1 150px;
  }
  .table-command-grid {
    grid-template-columns: 1fr;
  }
  .table-command-card {
    min-height: 0;
    padding: 12px;
  }
  .command-backdrop.show,
  body.command-panel-open .command-backdrop {
    position: fixed;
    inset: 0;
    z-index: 104;
    display: block;
    background: rgba(0, 0, 0, 0.38);
    backdrop-filter: blur(2px);
  }
  .waiter-side-panel {
    position: fixed;
    left: 50%;
    bottom: 0;
    z-index: 112;
    display: grid;
    width: min(100vw, 430px);
    max-height: min(84dvh, 680px);
    overflow: auto;
    padding: 18px 16px calc(18px + env(safe-area-inset-bottom));
    border: 0;
    border-radius: 22px 22px 0 0;
    background: #fff;
    box-shadow: 0 -24px 70px rgba(0, 0, 0, 0.22);
    transform: translate(-50%, 110%);
    transition: transform 0.22s ease;
  }
  body.command-panel-open .waiter-side-panel {
    transform: translate(-50%, 0);
  }
  .command-panel-close {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    margin-left: auto;
    border: 0;
    border-radius: 50%;
    color: var(--brand);
    background: #fff0f1;
    cursor: pointer;
  }
  .command-panel-close svg {
    width: 22px;
    height: 22px;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2.4;
  }
  .table-detail-head {
    align-items: center;
  }
  .command-status-pill {
    margin-left: auto;
  }
  .command-head strong {
    font-size: 16px;
  }
  .command-foot strong {
    font-size: 20px;
  }
  .quick-add-panel > div {
    grid-template-columns: 1fr;
  }
  .table-payment-panel > div {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .table-payment-panel button {
    min-height: 48px;
  }
  .table-detail-total strong {
    font-size: 26px;
  }
  .command-line-item {
    grid-template-columns: 38px minmax(0, 1fr) 30px;
    gap: 8px;
    padding: 9px;
  }
  .command-line-item img {
    width: 38px;
    height: 38px;
  }
  .command-line-item button {
    width: 30px;
    height: 30px;
  }
  .admin-menu-grid {
    grid-template-columns: 1fr;
  }
  .orders-board {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    overflow: visible;
    margin: 0;
    padding: 0;
    scroll-snap-type: none;
  }
  .order-column {
    min-height: auto;
    scroll-snap-align: none;
  }
  .column-heading {
    margin: -12px -12px 10px;
    padding: 12px;
    border-radius: 14px 14px 0 0;
    background: #fff;
  }
  .order-ticket {
    cursor: pointer;
  }
  .ticket-meta {
    gap: 6px;
  }
  .whatsapp-icon-button {
    width: 32px;
    height: 32px;
  }
  .order-detail-modal.show {
    width: min(calc(100vw - 24px), 430px);
    max-height: calc(100dvh - 24px);
    padding: 16px;
    border-radius: 16px;
  }
  .modal-close {
    top: 14px;
    right: 14px;
  }
  .order-detail-heading {
    padding-right: 40px;
  }
  .order-detail-product {
    grid-template-columns: 90px minmax(0, 1fr);
  }
  .order-detail-product img {
    width: 90px;
    height: 82px;
  }
  .order-detail-product strong {
    font-size: 18px;
  }
  .order-detail-actions {
    grid-template-columns: minmax(82px, 0.85fr) minmax(112px, 1fr) 42px;
  }
  .order-detail-actions .button {
    min-height: 38px;
    padding: 0 6px;
    font-size: 11px;
  }
  .modal-whatsapp-action {
    gap: 5px;
  }
  .modal-whatsapp-action svg {
    width: 14px;
    height: 14px;
  }
  .modal-ok-action {
    min-width: 42px;
    padding: 0;
  }
  .stat-grid article,
  .order-column,
  .panel,
  .campaign {
    border-radius: 14px;
  }
  .admin-item {
    grid-template-columns: 48px minmax(0, 1fr);
  }
  .admin-item > span:last-child {
    grid-column: 2;
  }
  .menu-admin-heading {
    align-items: start;
  }
  .admin-menu-section-head {
    align-items: flex-end;
  }
  .partner-menu-card {
    grid-template-columns: 74px minmax(0, 1fr);
    gap: 10px;
  }
  .partner-menu-card img {
    width: 74px;
    height: 70px;
  }
  .partner-menu-side {
    grid-column: 1 / -1;
    grid-template-columns: minmax(0, 1fr) auto auto;
    align-items: center;
    justify-items: start;
  }
  .partner-menu-side .button,
  .menu-pause-button {
    justify-self: end;
  }
  .feed-carousel {
    min-height: 224px;
    border-radius: 12px;
  }
  .hero-feed,
  .feed-card {
    min-height: 100%;
  }
  .feed-card > div {
    left: 12px;
    right: 12px;
    bottom: 18px;
  }
  .feed-card .badge {
    top: 10px;
    left: 10px;
    max-width: calc(100% - 20px);
    font-size: 11px;
  }
  .feed-card h1 {
    max-width: 94%;
    margin-bottom: 4px;
    font-size: 32px;
    line-height: 0.98;
  }
  .feed-card h2 {
    max-width: 94%;
    font-size: 25px;
    line-height: 1.03;
  }
  .feed-card p {
    max-width: 94%;
    font-size: 13px;
    line-height: 1.3;
  }
  .feed-indicators {
    left: 10px;
    right: 10px;
    bottom: 8px;
  }
  .home-featured {
    grid-template-columns: 64px minmax(0, 1fr) auto;
    gap: 10px;
    align-items: center;
    min-width: 0;
  }
  .home-featured img {
    width: 64px;
    height: 54px;
  }
  .home-featured > div,
  .store-card > div {
    min-width: 0;
  }
  .home-featured strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .home-featured span,
  .home-featured p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .home-featured em {
    grid-column: auto;
    justify-self: end;
    width: auto;
    margin-top: 0;
    white-space: nowrap;
  }
  .store-showcase-heading {
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
  }
  .store-showcase-heading h2 {
    font-size: 14px;
  }
  .store-showcase-heading a {
    font-size: 12px;
  }
  .store-card {
    grid-template-columns: 60px minmax(0, 1fr) auto;
    gap: 10px;
    min-width: 0;
    padding: 11px 0;
  }
  .store-card img,
  .store-fake {
    width: 60px;
    height: 50px;
  }
  .store-card strong {
    font-size: 14px;
  }
  .store-card span {
    font-size: 12px;
  }
  .store-card em {
    padding: 5px 7px;
    font-size: 10px;
  }
  .restaurant-cover {
    border-radius: 12px;
  }
  .toast {
    left: 50%;
    right: auto;
    top: 12px;
    max-width: min(360px, calc(100vw - 24px));
    transform: translate(-50%, -18px) scale(0.96);
  }
  .toast.show {
    transform: translate(-50%, 0) scale(1);
  }
  .restaurant-summary {
    grid-template-columns: 1fr;
    padding: 16px;
  }
  .restaurant-summary .button {
    grid-column: 1 / -1;
  }
  .restaurant-title h1 {
    font-size: 36px;
  }
  .restaurant-metrics {
    gap: 6px;
  }
  .restaurant-metrics span {
    min-height: 32px;
    padding: 0 9px;
    font-size: 12px;
  }
  .cover-art {
    min-height: 178px;
    background-position: center;
  }
  .cover-badge {
    left: 12px;
    bottom: 12px;
  }
  .store-promo-strip {
    grid-template-columns: 96px minmax(0, 1fr);
    gap: 12px;
    margin: 14px 0 18px;
    padding: 12px;
    border-radius: 14px;
  }
  .store-promo-strip img {
    width: 96px;
    height: 96px;
  }
  .store-promo-strip h2 {
    font-size: 17px;
    line-height: 1.1;
  }
  .store-promo-strip p {
    display: none;
  }
  .store-promo-strip strong {
    font-size: 18px;
  }
  .store-promo-action {
    grid-column: 2;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    justify-items: start;
  }
  .store-promo-action .button {
    min-height: 34px;
    padding: 0 10px;
    font-size: 12px;
  }
  .priority-strip,
  .timeline {
    grid-template-columns: 1fr;
  }
  .section-heading {
    align-items: stretch;
    flex-direction: column;
  }
  .section-heading.compact {
    position: static;
    padding: 0 0 8px;
    border: 0;
    background: transparent;
    backdrop-filter: none;
  }
  .tracking-card {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 12px;
    border-radius: 16px;
  }
  .tracking-hero,
  .delivery-map,
  .timeline,
  .tracking-receipt {
    grid-column: 1;
  }
  .tracking-receipt {
    grid-row: auto;
  }
  .tracking-hero {
    grid-template-columns: 1fr;
  }
  .eta-card {
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    padding: 9px 10px;
    min-width: 0;
  }
  .delivery-map {
    min-height: 132px;
    border-radius: 14px;
  }
  .timeline li {
    grid-template-columns: 32px minmax(0, 1fr);
    min-height: 44px;
    padding: 6px 8px;
  }
  .timeline-icon {
    width: 26px;
    height: 26px;
  }
  .tracking-actions {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 6px;
  }
  .tracking-actions .button {
    min-height: 38px;
    padding: 0 8px;
    font-size: 11px;
  }
  .tracking-actions .button.danger {
    min-width: 74px;
  }
  .compact-payments {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .compact-payments label {
    min-height: 72px;
    padding: 9px 6px;
  }
  .payment-icon,
  .payment-logo {
    width: 26px;
    height: 26px;
  }
  .pix-logo {
    width: 36px;
    height: 22px;
  }
  .compact-payments strong {
    font-size: 11px;
  }
  .menu-card {
    grid-template-columns: minmax(0, 1fr) 118px;
    min-height: 136px;
    gap: 12px;
    padding: 12px;
    border-radius: 12px;
  }
  .food-art,
  .food-photo {
    width: 118px;
    min-height: 104px;
    height: 104px;
  }
  .menu-meta strong {
    font-size: 17px;
  }
  .menu-copy .button {
    min-height: 34px;
    padding: 0 12px;
    font-size: 12px;
  }
  .order-panel {
    position: fixed;
    left: 0;
    top: 18px;
    right: 0;
    bottom: 0;
    z-index: 100;
    width: auto;
    max-width: none;
    height: calc(100dvh - 18px);
    max-height: none;
    overflow: auto;
    padding: 22px 22px calc(104px + env(safe-area-inset-bottom));
    border: 0;
    border-radius: 24px 24px 0 0;
    box-shadow: none;
    transform: translateY(100%);
    transition:
      transform 0.22s ease,
      opacity 0.22s ease;
    opacity: 0;
    pointer-events: none;
  }
  .order-panel.open,
  body.cart-modal-open .order-panel {
    left: 0;
    top: 18px;
    right: 0;
    bottom: 0;
    width: auto;
    max-width: none;
    height: calc(100dvh - 18px);
    max-height: none;
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .cart-close {
    display: none;
    place-items: center;
  }
  .cart-flow-header {
    grid-template-columns: 52px minmax(0, 1fr) 62px;
  }
  .cart-step {
    min-height: 0;
  }
  .cart-list .cart-item {
    grid-template-columns: 54px minmax(0, 1fr) auto;
    padding: 10px 0;
  }
  .cart-thumb {
    width: 54px;
    height: 54px;
  }
  .cart-item-controls button {
    width: 28px;
  }
  .cart-flow-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    margin: 0;
    padding: 12px 22px calc(14px + env(safe-area-inset-bottom));
  }
  body.store-cart-active .mobile-cart-trigger,
  body.cart-has-items:not(.admin-active) .mobile-cart-trigger {
    position: fixed;
    left: 0;
    right: 0;
    bottom: calc(64px + env(safe-area-inset-bottom));
    z-index: 80;
    display: grid;
    grid-template-columns: 38px minmax(0, 1fr) minmax(116px, 38%);
    gap: 10px;
    align-items: center;
    width: 100%;
    min-height: 72px;
    padding: 9px 10px;
    border: 0;
    border-top: 1px solid var(--line);
    border-radius: 0;
    color: var(--ink);
    background: #fff;
    box-shadow: 0 -10px 26px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 0.2s ease,
      transform 0.24s cubic-bezier(0.2, 0.9, 0.2, 1),
      box-shadow 0.16s ease;
  }
  .mobile-cart-thumb {
    width: 38px;
    height: 38px;
  }
  .mobile-cart-summary strong {
    font-size: 17px;
  }
  .mobile-cart-action {
    min-height: 50px;
    font-size: 15px;
  }
}

@media (max-width: 380px) {
  .view {
    padding-left: 12px;
    padding-right: 12px;
  }
  .feed-carousel {
    min-height: 208px;
  }
  .feed-card h1 {
    font-size: 28px;
  }
  .feed-card h2 {
    font-size: 22px;
  }
  .home-featured {
    grid-template-columns: 58px minmax(0, 1fr);
    gap: 8px;
  }
  .home-featured img,
  .store-fake {
    width: 58px;
    height: 50px;
  }
  .home-featured em {
    grid-column: 2;
    justify-self: start;
    padding: 5px 7px;
    font-size: 11px;
  }
  .store-card {
    grid-template-columns: 54px minmax(0, 1fr) auto;
    padding: 10px 0;
  }
  .store-card img {
    width: 54px;
    height: 46px;
  }
  .store-card strong {
    font-size: 13px;
  }
  .store-card span {
    font-size: 11px;
  }
  .store-card em {
    padding: 4px 6px;
    font-size: 10px;
  }
}

@media (min-width: 381px) and (max-width: 520px) {
  .home-featured {
    grid-template-columns: 64px minmax(0, 1fr);
  }
  .home-featured em {
    grid-column: 3;
    justify-self: start;
    width: fit-content;
  }
}

@media (max-width: 720px) {
  body.public-active .public-shell {
    padding-left: 12px;
    padding-right: 12px;
  }
  body.public-active .restaurant-cover {
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 14px;
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
  }
  body.public-active .cover-art {
    min-height: clamp(138px, 40vw, 180px);
  }
  body.public-active .cover-badge {
    min-height: 30px;
    padding: 6px 9px;
    font-size: 11px;
  }
  body.public-active .restaurant-summary {
    gap: 12px;
    padding: 14px;
  }
  body.public-active .restaurant-title h1 {
    font-size: 30px;
    line-height: 1;
  }
  body.public-active .restaurant-title p {
    font-size: 13px;
    line-height: 1.35;
  }
  body.public-active .restaurant-metrics {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
  }
  body.public-active .restaurant-metrics span {
    justify-content: center;
    min-width: 0;
    padding: 0 6px;
  }
  body.public-active .restaurant-metrics strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  body.public-active .restaurant-summary .button {
    min-height: 38px;
  }
  body.public-active .store-promo-strip {
    grid-template-columns: 82px minmax(0, 1fr);
    gap: 10px;
    margin: 12px 0 16px;
    padding: 10px;
    border-radius: 13px;
  }
  body.public-active .store-promo-strip img {
    width: 82px;
    height: 82px;
    border-radius: 11px;
  }
  body.public-active .store-promo-strip h2 {
    margin: 5px 0 0;
    font-size: 16px;
    line-height: 1.1;
  }
  body.public-active .store-promo-strip .badge {
    min-height: 24px;
    padding: 5px 7px;
    font-size: 10px;
  }
  body.public-active .store-promo-action {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }
  body.public-active .store-promo-action strong {
    font-size: 18px;
  }
  body.public-active .catalog-section .section-heading.compact {
    gap: 8px;
  }
  body.public-active .catalog-note {
    font-size: 12px;
  }
  body.public-active .category-row {
    gap: 7px;
    margin-right: -12px;
    padding: 0 12px 2px 0;
  }
  body.public-active .category-row button {
    flex: 0 0 auto;
    min-height: 32px;
    padding: 0 11px;
    font-size: 12px;
  }
  body.public-active .menu-list {
    gap: 10px;
    padding-bottom: calc(26px + env(safe-area-inset-bottom));
  }
  body.public-active .menu-card {
    grid-template-columns: minmax(0, 1fr) 96px;
    gap: 10px;
    min-height: 0;
    padding: 10px;
    border-radius: 12px;
  }
  body.public-active .food-art,
  body.public-active .food-photo {
    width: 96px;
    height: 96px;
    min-height: 96px;
    border-radius: 10px;
  }
  body.public-active .menu-copy {
    gap: 6px;
  }
  body.public-active .menu-badges {
    gap: 4px;
  }
  body.public-active .menu-badges .badge {
    min-height: 22px;
    padding: 4px 6px;
    font-size: 10px;
  }
  body.public-active .menu-meta {
    display: grid;
    gap: 3px;
  }
  body.public-active .menu-meta strong {
    font-size: 16px;
    line-height: 1.12;
  }
  body.public-active .menu-meta span {
    font-size: 14px;
  }
  body.public-active .menu-copy p {
    display: -webkit-box;
    max-width: none;
    overflow: hidden;
    font-size: 12px;
    line-height: 1.28;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  body.public-active .menu-copy .button {
    min-height: 32px;
    padding: 0 10px;
    font-size: 11px;
  }
}

@media (max-width: 380px) {
  body.public-active .restaurant-metrics {
    grid-template-columns: 1fr;
  }
  body.public-active .store-promo-strip {
    grid-template-columns: 72px minmax(0, 1fr);
  }
  body.public-active .store-promo-strip img {
    width: 72px;
    height: 72px;
  }
  body.public-active .store-promo-action {
    align-items: stretch;
  }
  body.public-active .store-promo-action .button {
    min-width: 118px;
  }
  body.public-active .menu-card {
    grid-template-columns: minmax(0, 1fr) 82px;
    gap: 8px;
  }
  body.public-active .food-art,
  body.public-active .food-photo {
    width: 82px;
    height: 82px;
    min-height: 82px;
  }
  body.public-active .menu-copy p {
    -webkit-line-clamp: 1;
  }
}

@media (max-width: 720px) {
  body.public-active .catalog-section {
    min-width: 0;
  }
  body.public-active .catalog-section .section-heading.compact {
    position: sticky;
    top: 68px;
    z-index: 42;
    display: grid;
    grid-template-columns: 1fr;
    gap: 9px;
    margin: 0 -12px 10px;
    padding: 10px 12px 9px;
    border: 0;
    border-bottom: 1px solid var(--line);
    border-radius: 0;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(14px);
  }
  body.public-active .catalog-section .section-heading.compact > div {
    min-width: 0;
  }
  body.public-active .catalog-section .section-heading.compact h2 {
    font-size: 20px;
    line-height: 1.1;
  }
  body.public-active .catalog-note {
    margin: 3px 0 0;
    overflow: hidden;
    font-size: 12px;
    line-height: 1.25;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  body.public-active .category-row {
    width: calc(100% + 12px);
    max-width: none;
    min-width: 0;
    margin: 0;
    padding: 0 12px 1px 0;
  }
  body.public-active .category-row button {
    min-height: 31px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: 850;
  }
  body.public-active .menu-card {
    align-items: center;
  }
  body.public-active .menu-copy .button {
    width: fit-content;
    max-width: 100%;
  }
  body.public-active #catalogo {
    padding-bottom: calc(24px + env(safe-area-inset-bottom));
  }
}

@media (max-width: 380px) {
  body.public-active .catalog-section .section-heading.compact {
    top: 64px;
    padding-top: 9px;
  }
  body.public-active .catalog-section .section-heading.compact h2 {
    font-size: 18px;
  }
  body.public-active .catalog-note {
    display: none;
  }
  body.public-active .category-row button {
    min-height: 30px;
    padding: 0 9px;
    font-size: 11px;
  }
}

.home-shell .section-heading.compact.home-red-heading {
  position: static;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 2px 0 0;
  padding: 13px 14px;
  border: 0;
  border-radius: 14px;
  color: #fff;
  background: linear-gradient(135deg, var(--brand), var(--brand-dark));
  box-shadow: 0 12px 26px rgba(234, 29, 44, 0.16);
  backdrop-filter: none;
}

.home-shell .section-heading.compact.home-red-heading h2,
.home-shell .section-heading.compact.home-red-heading p {
  color: inherit;
}

.home-shell .section-heading.compact.home-red-heading p {
  max-width: 52ch;
  margin: 5px 0 0;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 750;
}

@media (max-width: 720px) {
  .home-shell .section-heading.compact.home-red-heading {
    margin: 0;
    padding: 11px 12px;
    border-radius: 12px;
  }
  .home-shell .section-heading.compact.store-showcase-heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .home-shell .section-heading.compact.store-showcase-heading h2,
  .home-shell .section-heading.compact.store-showcase-heading a {
    white-space: nowrap;
  }
}
