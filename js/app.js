// GreenConnect Nigeria - Client Application Logic

const providers = [
  {
    id: "solartech-nigeria",
    name: "SolarTech Nigeria",
    rating: "★★★★★",
    service: "Solar Installation",
    location: "Lagos State",
    startingPrice: "₦250,000",
    phone: "080-12345678",
    email: "info@solartech.ng",
    services: [
      "Solar Installation",
      "Battery Backup",
      "Inverter Systems"
    ],
    description: "Reliable residential and commercial solar installations across Lagos State with certified warranty support."
  },
  {
    id: "green-energy-africa",
    name: "Green Energy Africa",
    rating: "★★★★☆",
    service: "Battery Solutions",
    location: "Abuja",
    startingPrice: "₦320,000",
    phone: "080-98765432",
    email: "contact@greenenergy.africa",
    services: [
      "Lithium Battery Upgrades",
      "Battery Backup",
      "Inverter Maintenance"
    ],
    description: "Specialists in long-life lithium battery storage systems and inverter upgrades for homes and offices in Abuja."
  },
  {
    id: "ecogrid-africa",
    name: "EcoGrid Africa",
    rating: "★★★★★",
    service: "Mini-Grid Solutions",
    location: "Port Harcourt",
    startingPrice: "₦450,000",
    phone: "081-23456789",
    email: "support@ecogrid.ng",
    services: [
      "Commercial Solar",
      "Mini-Grid Setup",
      "Inverter Systems"
    ],
    description: "Custom renewable mini-grid and commercial power solutions for institutions and communities in Rivers State."
  },
  {
    id: "sunray-power",
    name: "SunRay Power",
    rating: "★★★★☆",
    service: "Inverter Systems",
    location: "Ibadan",
    startingPrice: "₦180,000",
    phone: "080-33445566",
    email: "hello@sunraypower.ng",
    services: [
      "Pure Sine Inverters",
      "Solar Panel Upgrades",
      "System Maintenance"
    ],
    description: "Affordable and durable pure sine wave inverter setups and solar panels for homes and schools in Oyo State."
  }
];

// Helper: Build a clean provider card HTML string
function buildCard(p) {
  return `
    <div class="card">
      <span class="card-tag">${p.service}</span>
      <h3>${p.name}</h3>
      <div class="card-stars">${p.rating}</div>
      <p style="color: var(--muted); font-size: 0.85rem; margin-bottom: 8px;">📍 ${p.location}</p>
      <p>${p.description}</p>
      <div class="card-price">Starting from ${p.startingPrice}</div>
      <div style="display: flex; gap: 8px;">
        <a href="details.html?id=${p.id}" class="btn btn-outline btn-sm" style="flex: 1;">View Details</a>
        <a href="booking.html?provider=${encodeURIComponent(p.name)}" class="btn btn-primary btn-sm" style="flex: 1;">Book</a>
      </div>
    </div>
  `;
}

// 1. Navigation Active State Helper
function setupNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// 2. Home Page: Load Featured Providers
function initHome() {
  const container = document.getElementById("featured-providers");
  if (!container) return;
  container.innerHTML = providers.slice(0, 3).map(buildCard).join("");
}

// 3. Providers Page: Dynamic search & render
function initProviders() {
  const list = document.getElementById("provider-list");
  if (!list) return;

  const searchInput = document.getElementById("search");
  const serviceFilter = document.getElementById("service-filter");

  function render() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const service = serviceFilter ? serviceFilter.value : "all";

    const filtered = providers.filter(p => {
      const matchesQuery = p.name.toLowerCase().includes(query) ||
                            p.location.toLowerCase().includes(query) ||
                            p.service.toLowerCase().includes(query);
      const matchesService = service === "all" || p.service.toLowerCase().includes(service.toLowerCase());
      return matchesQuery && matchesService;
    });

    if (filtered.length === 0) {
      list.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: var(--muted); padding: 40px 0;">
          <p style="margin-bottom: 12px; font-size: 1.05rem;">No providers found matching "${query}".</p>
          <button type="button" id="clear-search" class="btn btn-outline btn-sm">Clear Filter</button>
        </div>
      `;
      const clearBtn = document.getElementById("clear-search");
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          if (searchInput) searchInput.value = "";
          if (serviceFilter) serviceFilter.value = "all";
          render();
        });
      }
    } else {
      list.innerHTML = filtered.map(buildCard).join("");
    }
  }

  if (searchInput) searchInput.addEventListener("input", render);
  if (serviceFilter) serviceFilter.addEventListener("change", render);
  render();
}

// 4. Provider Details Page
function initDetails() {
  const container = document.getElementById("provider-details");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const provider = providers.find(p => p.id === id) || providers[0];

  container.innerHTML = `
    <div class="details-layout">
      <div>
        <span class="card-tag">${provider.service}</span>
        <h1 style="font-size: 2rem; margin: 8px 0 4px; letter-spacing: -0.01em;">${provider.name}</h1>
        <div class="card-stars" style="font-size: 1.1rem; margin-bottom: 12px;">${provider.rating}</div>
        <p style="color: var(--muted); margin-bottom: 20px;">📍 ${provider.location}</p>
        
        <p style="font-size: 1.05rem; margin-bottom: 24px; color: var(--slate);">${provider.description}</p>

        <h3 style="margin-bottom: 12px;">Services:</h3>
        <ul class="checklist">
          ${provider.services.map(s => `<li>✓ ${s}</li>`).join("")}
        </ul>
      </div>

      <aside>
        <div class="card" style="position: sticky; top: 80px;">
          <h3 style="margin-bottom: 4px;">Starting Price:</h3>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary); margin-bottom: 16px;">
            ${provider.startingPrice}
          </div>

          <p style="margin-bottom: 4px; font-weight: 600; font-size: 0.9rem;">Contact:</p>
          <p style="color: var(--slate); font-size: 1.1rem; margin-bottom: 20px;">
            <a href="tel:${provider.phone}">${provider.phone}</a>
          </p>

          <a href="booking.html?provider=${encodeURIComponent(provider.name)}" class="btn btn-primary btn-block">
            Book Consultation
          </a>
        </div>
      </aside>
    </div>
  `;
}

// 5. Booking Page: Form Validation & Success Modal
function initBooking() {
  const form = document.getElementById("booking-form");
  if (!form) return;

  const providerSelect = document.getElementById("provider");
  if (providerSelect) {
    providerSelect.innerHTML = `<option value="">-- Any Available Provider --</option>` +
      providers.map(p => `<option value="${p.name}">${p.name} (${p.location})</option>`).join("");

    const params = new URLSearchParams(window.location.search);
    const selected = params.get("provider");
    if (selected) providerSelect.value = selected;
  }

  const modal = document.getElementById("success-modal");
  const modalClose = document.getElementById("modal-close");

  function closeModal() {
    if (modal) modal.classList.remove("active");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const fields = ["name", "email", "phone", "location", "service"];
    fields.forEach(id => {
      const el = document.getElementById(id);
      const err = document.getElementById(id + "-err");
      if (!el.value.trim()) {
        el.classList.add("is-invalid");
        if (err) err.classList.add("visible");
        isValid = false;
      } else {
        el.classList.remove("is-invalid");
        if (err) err.classList.remove("visible");
      }
    });

    // Email format validation
    const emailEl = document.getElementById("email");
    const emailErr = document.getElementById("email-err");
    if (emailEl.value.trim() && !emailEl.value.includes("@")) {
      emailEl.classList.add("is-invalid");
      if (emailErr) {
        emailErr.textContent = "Please enter a valid email address.";
        emailErr.classList.add("visible");
      }
      isValid = false;
    }

    if (!isValid) return;

    // Show confirmation modal
    if (modal) modal.classList.add("active");
    form.reset();
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  initHome();
  initProviders();
  initDetails();
  initBooking();
});
