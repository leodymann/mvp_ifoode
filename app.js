const menu = [
  {
    id: 1,
    name: "ByteBurguer",
    description: "Burger classico",
    price: 32.9,
    tag: "combo",
    priority: true,
    image: "cardapios/ByteBurguer.jpg",
  },
  {
    id: 2,
    name: "Combo BBurguer",
    description: "Burger + fritas",
    price: 44.9,
    tag: "combo",
    priority: true,
    recommended: true,
    image: "cardapios/Combo BBurguer + Fritas.jpg",
  },
  {
    id: 3,
    name: "BQuarter Max",
    description: "Burger alto",
    price: 39.9,
    tag: "combo",
    priority: true,
    image: "cardapios/BQuarter Max.jpg",
  },
  {
    id: 4,
    name: "XByte Common",
    description: "Queijo e molho",
    price: 29.9,
    tag: "combo",
    priority: false,
    image: "cardapios/XByte Common.jpeg",
  },
  {
    id: 5,
    name: "3 ByteBurguers",
    description: "Pra dividir",
    price: 69.9,
    tag: "combo",
    priority: false,
    image: "cardapios/Bburguers(3 ByteBurguers).jpg",
  },
  {
    id: 6,
    name: "Veggie Kernel",
    description: "Blend vegetal",
    price: 34.9,
    tag: "veg",
    priority: true,
    image: "cardapios/ByteBurguer.jpg",
  },
  {
    id: 7,
    name: "Batata Deploy",
    description: "Batata crocante",
    price: 18.9,
    tag: "side",
    priority: false,
    image: "cardapios/Combo BBurguer + Fritas.jpg",
  },
  {
    id: 8,
    name: "Byte Duplo",
    description: "Dois burgers",
    price: 46.9,
    tag: "combo",
    priority: false,
    image: "cardapios/BQuarter Max.jpg",
  },
];

const orders = [
  {
    id: "BT-1048",
    client: "Marina",
    items: "Combo Truck",
    status: "Em preparo",
    payment: "Pix",
    priority: true,
    image: "cardapios/Combo BBurguer + Fritas.jpg",
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
    items: "Batata Deploy",
    status: "Novo",
    payment: "Pix",
    priority: false,
    image: "cardapios/Combo BBurguer + Fritas.jpg",
    total: 18.9,
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
};

let activeOrderDrag = null;

const mobileMenu = window.matchMedia("(max-width: 720px)");

const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];
const setText = (selector, value) => {
  const element = qs(selector);
  if (element) element.textContent = value;
};

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3200);
}

function openCartModal() {
  const panel = qs(".order-panel");
  const backdrop = qs("#cartBackdrop");
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

function showPopup(id, storageKey) {
  if (sessionStorage.getItem(storageKey)) return;
  qs(id)?.classList.add("show");
  qs("#promoBackdrop")?.classList.add("show");
}

function closePromos() {
  if (qs("#promoPopup")?.classList.contains("show")) {
    sessionStorage.setItem("storePromoSeen", "true");
  }
  qs("#promoPopup")?.classList.remove("show");
  qs("#promoBackdrop")?.classList.remove("show");
}

function visibleMenu() {
  const filtered = menu.filter((item) => {
    const matchesCategory = state.filter === "all" || item.tag === state.filter;
    const haystack = `${item.name} ${item.description}`.toLowerCase();
    const matchesQuery = haystack.includes(state.query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  if (mobileMenu.matches) return filtered;

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
        <span class="badge ${item.priority ? "" : "muted"}">${item.priority ? "Prioritario" : "Regular"}</span>
        <div class="menu-meta">
          <strong>${item.name}</strong>
          <span>${money.format(item.price)}</span>
        </div>
        <p>${item.description}</p>
        <button class="button primary" data-add="${item.id}">${item.recommended ? "Pedir este" : "Pedir"}</button>
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

  qsa("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = menu.find(
        (entry) => entry.id === Number(button.dataset.add),
      );
      state.cart.push(item);
      renderCart();
      showToast(`${item.name} adicionado a sacola.`);
    });
  });
}

function renderSearchResults() {
  const query = state.searchQuery.toLowerCase();
  const items = query
    ? menu
        .filter((item) =>
          `${item.name} ${item.description}`.toLowerCase().includes(query),
        )
        .slice(0, 5)
    : menu.filter((item) => item.recommended || item.priority).slice(0, 4);

  qs("#searchResults").innerHTML = items.length
    ? items
        .map(
          (item) => `
    <article class="menu-card search-result-card">
      <div class="menu-copy">
        <span class="badge ${item.recommended ? "live" : ""}">${item.recommended ? "Mais pedido" : "Prioritario"}</span>
        <div class="menu-meta">
          <strong>${item.name}</strong>
          <span>${money.format(item.price)}</span>
        </div>
        <p>${item.description} - ByteTruck</p>
        <a class="button primary" href="#ByteTruck/Catalogo">Ver na loja</a>
      </div>
      <img class="food-photo" src="${item.image}" alt="${item.name}" loading="lazy" />
    </article>
  `,
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

function renderCart() {
  const cartItems = qs("#cartItems");
  setText(
    "#cartCount",
    `${state.cart.length} ${state.cart.length === 1 ? "item" : "itens"}`,
  );

  if (!state.cart.length) {
    cartItems.className = "cart-list empty";
    cartItems.textContent = "Sua sacola esta vazia.";
  } else {
    cartItems.className = "cart-list";
    cartItems.innerHTML = state.cart
      .map(
        (item, index) => `
      <div class="cart-item">
        <img class="cart-thumb" src="${item.image}" alt="" aria-hidden="true" />
        <span>${item.name}</span>
        <strong>${money.format(item.price)}</strong>
        <button aria-label="Remover ${item.name}" data-remove="${index}">x</button>
      </div>
    `,
      )
      .join("");
  }

  qsa("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      state.cart.splice(Number(button.dataset.remove), 1);
      renderCart();
    });
  });

  const subtotal = state.cart.reduce((sum, item) => sum + item.price, 0);
  const fee = paymentFee(subtotal);
  setText("#subtotal", money.format(subtotal));
  setText("#fee", money.format(fee));
  setText("#total", money.format(subtotal + fee));
  setText("#mobileCartCount", state.cart.length);
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
        <article class="order-ticket ${order.priority ? "priority-ticket" : ""}" draggable="true" data-order-id="${order.id}">
          <div class="ticket-top">
            <strong>#${order.id}</strong>
            <span class="drag-handle" aria-hidden="true">::</span>
          </div>
          <div class="ticket-main">
            <h3>${order.client}</h3>
          </div>
          <div class="ticket-meta">
            <span>${order.payment}</span>
            ${order.priority ? "<span>Prioritario</span>" : ""}
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
    ticket.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button")) return;
      activeOrderDrag = {
        id: ticket.dataset.orderId,
        startX: event.clientX,
        startY: event.clientY,
        source: ticket,
        dragging: false,
      };
    });

    ticket.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", ticket.dataset.orderId);
      ticket.classList.add("dragging");
    });

    ticket.addEventListener("dragend", () => {
      ticket.classList.remove("dragging");
      qsa(".order-column").forEach((column) =>
        column.classList.remove("drop-ready"),
      );
    });
  });

  qsa(".order-column").forEach((column) => {
    column.addEventListener("dragover", (event) => {
      event.preventDefault();
      column.classList.add("drop-ready");
    });

    column.addEventListener("dragleave", () => {
      column.classList.remove("drop-ready");
    });

    column.addEventListener("drop", (event) => {
      event.preventDefault();
      moveOrderToStatus(
        event.dataTransfer.getData("text/plain"),
        column.dataset.orderStatus,
      );
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
        <span class="badge ${order.priority ? "" : "muted"}">${order.priority ? "Prioritario" : "Normal"}</span>
        <strong>${order.items}</strong>
        <small>Total ${money.format(order.total)}</small>
        <em>${order.note}</em>
      </div>
    </div>
    <div class="order-detail-section">
      <div class="order-detail-list">
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path><path d="M4 21a8 8 0 0 1 16 0"></path></svg>
          <strong>${order.client}</strong>
        </div>
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"></path></svg>
          <strong>${order.phone}</strong>
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
      <button class="button ghost full" data-whatsapp="${order.id}" type="button">Enviar WhatsApp</button>
      ${nextStatus ? `<button class="button ghost full" data-move-order="${order.id}" data-next-status="${nextStatus}" type="button">Mover para ${nextStatus}</button>` : ""}
      <button class="button primary full" data-close-order-modal type="button">Ok</button>
    </div>
  `;
  qs("#orderDetailModal").classList.add("show");
  qs("#orderDetailBackdrop").classList.add("show");
}

function closeOrderModal() {
  qs("#orderDetailModal").classList.remove("show");
  qs("#orderDetailBackdrop").classList.remove("show");
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

function renderAdminMenu() {
  const source = state.menuLimited ? menu.slice(0, 6) : menu;
  qs("#adminMenu").innerHTML = source
    .map(
      (item) => `
    <div class="admin-item">
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <span>
        <strong>${item.name}</strong>
        <small>${item.description}</small>
      </span>
      <span>
        <strong>${money.format(item.price)}</strong>
        <small>${item.priority ? "Prioritario" : "Regular"}</small>
      </span>
    </div>
  `,
    )
    .join("");
}

function route() {
  const hash = window.location.hash.replace("#", "");
  qsa(".view").forEach((view) => view.classList.remove("active"));
  document.body.classList.remove("public-active");
  document.body.classList.remove("admin-active");

  if (hash === "admin") {
    qs("#admin-view").classList.add("active");
    document.body.classList.add("admin-active");
  } else if (hash === "pedido") {
    qs("#tracking-view").classList.add("active");
  } else if (hash === "pesquisa") {
    qs("#search-view").classList.add("active");
    window.setTimeout(() => qs("#searchInput")?.focus(), 80);
  } else if (hash === "ByteTruck/Catalogo") {
    qs("#public-view").classList.add("active");
    document.body.classList.add("public-active");
    window.setTimeout(() => showPopup("#promoPopup", "storePromoSeen"), 450);
  } else {
    qs("#home-view").classList.add("active");
  }
}

function updateTracking(cancelled = false) {
  const statuses = [
    ["Recebido", "O pedido foi recebido pelo estabelecimento."],
    [
      "Em preparo",
      "O ByteTruck recebeu seu pedido e a cozinha ja comecou a preparar.",
    ],
    [
      "Saiu para entrega",
      "O entregador foi alertado no WhatsApp e esta a caminho.",
    ],
    [
      "Entregue",
      "Pedido concluido. O relatorio financeiro ja considera o metodo de pagamento.",
    ],
  ];

  if (cancelled) {
    qs("#trackingStatus").textContent = "Cancelado";
    qs("#trackingText").textContent =
      "O pedido foi cancelado e o estabelecimento recebeu o alerta.";
    qsa("#timeline li").forEach((item) => (item.className = ""));
    showToast("Pedido cancelado e aviso enviado ao estabelecimento.");
    return;
  }

  const [title, text] = statuses[state.trackingStep];
  qs("#trackingStatus").textContent = title;
  qs("#trackingText").textContent = text;
  qsa("#timeline li").forEach((item, index) => {
    item.className =
      index < state.trackingStep
        ? "done"
        : index === state.trackingStep
          ? "current"
          : "";
  });
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
      const item = menu.find((entry) => entry.recommended);
      state.cart.push(item);
      renderCart();
      closePromos();
      showToast("Combo BBurguer adicionado a sacola.");
    }

    if (event.target.closest("[data-store-disabled]")) {
      event.preventDefault();
      showToast("Loja demonstrativa. No MVP, apenas ByteTruck esta ativa.");
    }
  });

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

  document.addEventListener("pointermove", (event) => {
    if (!activeOrderDrag) return;
    const moved = Math.hypot(
      event.clientX - activeOrderDrag.startX,
      event.clientY - activeOrderDrag.startY,
    );
    if (moved < 8) return;
    activeOrderDrag.dragging = true;
    activeOrderDrag.source.classList.add("dragging");
    document.body.classList.add("order-dragging");
    qsa(".order-column").forEach((column) => {
      const box = column.getBoundingClientRect();
      const inside =
        event.clientX >= box.left &&
        event.clientX <= box.right &&
        event.clientY >= box.top &&
        event.clientY <= box.bottom;
      column.classList.toggle("drop-ready", inside);
    });
  });

  document.addEventListener("pointerup", (event) => {
    if (!activeOrderDrag) return;
    const drag = activeOrderDrag;
    activeOrderDrag = null;
    document.body.classList.remove("order-dragging");
    qsa(".order-column").forEach((column) =>
      column.classList.remove("drop-ready"),
    );
    drag.source.classList.remove("dragging");
    if (!drag.dragging) {
      openOrderModal(drag.id);
      return;
    }
    event.preventDefault();
    const target = document
      .elementFromPoint(event.clientX, event.clientY)
      ?.closest("[data-order-status]");
    if (target) moveOrderToStatus(drag.id, target.dataset.orderStatus);
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

    const quotaLeft = qs("#quotaLeft");
    if (quotaLeft && qs("#priorityToggle").checked) {
      quotaLeft.textContent = Math.max(0, Number(quotaLeft.textContent) - 1);
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

  qsa("[data-admin-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      qsa("[data-admin-tab]").forEach((entry) =>
        entry.classList.remove("active"),
      );
      qsa(".admin-tab").forEach((entry) => entry.classList.remove("active"));
      button.classList.add("active");
      qs(`#${button.dataset.adminTab}`).classList.add("active");
      qs("#adminTitle").textContent = button.dataset.adminTitle;
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

renderMenu();
renderSearchResults();
renderCart();
renderOrders();
renderAdminMenu();
bindEvents();
route();

if (mobileMenu.addEventListener) {
  mobileMenu.addEventListener("change", renderMenu);
} else {
  mobileMenu.addListener(renderMenu);
}
