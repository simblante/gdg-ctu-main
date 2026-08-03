// =====================================
// YEAR SELECTOR - OFFICERS
// =====================================

document.addEventListener("DOMContentLoaded", function () {
  const yearButtons = document.querySelectorAll(".year-btn");
  const yearGroups = document.querySelectorAll(".year-group");

  if (yearButtons.length === 0) {
    return;
  }

  const defaultYear = "2025-2026";
  showYear(defaultYear);

  yearButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const year = this.dataset.year;
      yearButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      showYear(year);
    });
  });

  function showYear(year) {
    yearGroups.forEach((group) => {
      if (group.dataset.year === year) {
        group.style.display = "block";
        group.classList.add("active");
        group.style.opacity = "0";
        group.style.transform = "translateY(20px)";
        setTimeout(() => {
          group.style.opacity = "1";
          group.style.transform = "translateY(0)";
        }, 50);
      } else {
        group.style.display = "none";
        group.classList.remove("active");
      }
    });
  }
});

// =====================================
// OFFICERS - DYNAMIC FROM DATABASE
// =====================================

let officersData = {};
let currentYear = "2025-2026";

// =====================================
// API CONFIGURATION
// =====================================
const API_BASE = "admin/api/";
const API_GET = API_BASE + "get-data.php";
const API_SAVE = API_BASE + "save-data.php";

const BASE_URL = "";

console.log("🌐 BASE_URL:", BASE_URL);
console.log("📡 API_GET:", API_GET);

// =====================================
// LOAD OFFICERS FROM DATABASE
// =====================================

async function loadOfficers() {
  try {
    console.log("📡 Loading officers from:", API_GET);
    const response = await fetch(API_GET);
    if (response.ok) {
      const result = await response.json();
      console.log("📦 Full data received:", result);

      if (result.success && result.data && result.data.officers) {
        officersData = result.data.officers;

        if (result.data.settings && result.data.settings.currentYear) {
          currentYear = result.data.settings.currentYear;
        } else {
          const years = Object.keys(officersData).sort((a, b) =>
            b.localeCompare(a),
          );
          currentYear = years.length > 0 ? years[0] : "2025-2026";
        }

        console.log("Officers loaded successfully");
        console.log("Current Year from DB:", currentYear);
        console.log("All Years:", Object.keys(officersData));

        generateYearSelector();
        renderAllOfficers();
        updateYearSelectorActive(currentYear);
        return;
      }
    }
    throw new Error("Failed to load from database");
  } catch (e) {
    console.log("Error loading from database:", e);
    try {
      const saved = localStorage.getItem("gdgWebsiteData");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.officers) {
          officersData = data.officers;
          currentYear = data.currentYear || "2025-2026";
          console.log("Officers loaded from localStorage");
          generateYearSelector();
          renderAllOfficers();
          updateYearSelectorActive(currentYear);
          return;
        }
      }
    } catch (e2) {}

    officersData = {};
    currentYear = "2025-2026";
    generateYearSelector();
    renderAllOfficers();
  }
}

// ==========================================
// UPDATE YEAR SELECTOR ACTIVE
// ==========================================

function updateYearSelectorActive(year) {
  const yearBtns = document.querySelectorAll(".year-btn");
  yearBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.year === year);
  });
}

// ==========================================
// GENERATE YEAR SELECTOR
// ==========================================

function generateYearSelector() {
  const yearSelector = document.getElementById("yearSelector");
  if (!yearSelector) return;

  const years = Object.keys(officersData || {}).sort((a, b) =>
    b.localeCompare(a),
  );

  if (years.length === 0) {
    yearSelector.innerHTML = `
            <button class="year-btn active" data-year="2026-2027">
                <span class="year-label">2026 - 2027</span>
                <span class="year-badge">Previous</span>
            </button>
            <button class="year-btn active" data-year="2025-2026">
                <span class="year-label">2025 - 2026</span>
                <span class="year-badge">Current</span>
            </button>
            <button class="year-btn" data-year="2024-2025">
                <span class="year-label">2024 - 2025</span>
                <span class="year-badge">Previous</span>
            </button>
            <button class="year-btn" data-year="2023-2024">
                <span class="year-label">2023 - 2024</span>
                <span class="year-badge">Previous</span>
            </button>
            <button class="year-btn" data-year="2022-2023">
                <span class="year-label">2022 - 2023</span>
                <span class="year-badge">Previous</span>
            </button>
        `;
    const firstBtn = yearSelector.querySelector(".year-btn");
    if (firstBtn) firstBtn.classList.add("active");
    attachYearEvents();
    return;
  }

  let html = "";
  const activeYear = currentYear || years[0];

  years.forEach((year) => {
    const isCurrent = year === activeYear;
    const badge = isCurrent ? "Current" : "Previous";
    const activeClass = isCurrent ? "active" : "";
    const displayYear = year.replace("-", " - ");

    html += `
            <button class="year-btn ${activeClass}" data-year="${year}">
                <span class="year-label">${displayYear}</span>
                <span class="year-badge">${badge}</span>
            </button>
        `;
  });

  yearSelector.innerHTML = html;
  attachYearEvents();

  if (activeYear) {
    showYear(activeYear);
  }
}

function attachYearEvents() {
  const yearButtons = document.querySelectorAll(".year-btn");

  yearButtons.forEach((button) => {
    button.removeEventListener("click", button._yearHandler);

    const handler = function () {
      const year = this.dataset.year;
      yearButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      showYear(year);
    };

    button._yearHandler = handler;
    button.addEventListener("click", handler);
  });
}

function showYear(year) {
  const yearGroups = document.querySelectorAll(".year-group");

  yearGroups.forEach((group) => {
    if (group.dataset.year === year) {
      group.style.display = "block";
      group.classList.add("active");
      group.style.opacity = "0";
      group.style.transform = "translateY(20px)";
      setTimeout(() => {
        group.style.opacity = "1";
        group.style.transform = "translateY(0)";
      }, 50);
    } else {
      group.style.display = "none";
      group.classList.remove("active");
    }
  });
}

// =====================================
// RENDER ALL OFFICERS
// =====================================

function renderAllOfficers() {
  const yearGroups = document.querySelectorAll(".year-group");

  yearGroups.forEach((group) => {
    group.style.display = "none";
    group.classList.remove("active");

    const grids = group.querySelectorAll(".officers-grid");
    grids.forEach((grid) => {
      grid.innerHTML = "";
    });
  });

  const years = Object.keys(officersData || {}).sort((a, b) =>
    b.localeCompare(a),
  );
  console.log("Rendering years:", years);
  console.log("Current year:", currentYear);

  if (years.length === 0) {
    yearGroups.forEach((group) => {
      if (group.dataset.year === "2025-2026") {
        group.style.display = "block";
        group.classList.add("active");
        const grids = group.querySelectorAll(".officers-grid");
        grids.forEach((grid) => {
          grid.innerHTML = `
                        <div class="officers-empty" style="grid-column:1/-1;">
                            <div class="empty-content">
                                <i class="fas fa-users-slash"></i>
                                <h3>No Officers Yet</h3>
                                <p>Leadership team members will be announced soon.</p>
                            </div>
                        </div>
                    `;
        });
      }
    });
    return;
  }

  years.forEach((year) => {
    yearGroups.forEach((group) => {
      if (group.dataset.year === year) {
        group.style.display = "block";
        group.classList.add("active");

        const departments = officersData[year] || {};
        const grids = group.querySelectorAll(".officers-grid");

        grids.forEach((grid) => {
          grid.innerHTML = "";

          const header = grid
            .closest(".department-group")
            ?.querySelector(".department-header h3");
          let deptKey = "";

          if (header) {
            const deptText = header.textContent.trim().toLowerCase();
            if (deptText.includes("executive")) deptKey = "executive_board";
            else if (deptText.includes("operations")) deptKey = "operations";
            else if (deptText.includes("technology")) deptKey = "technology";
            else if (deptText.includes("community")) deptKey = "community";
            else if (deptText.includes("creatives")) deptKey = "creatives";
            else if (deptText.includes("finance")) deptKey = "finance";
          }

          const officers = departments[deptKey] || [];
          console.log(
            `👥 ${deptKey} has ${officers.length} officers for ${year}`,
          );
          renderOfficerGrid(grid, officers, year);
        });
      }
    });
  });

  updateYearSelectorActive(currentYear);

  yearGroups.forEach((group) => {
    if (group.dataset.year === currentYear) {
      group.style.display = "block";
      group.classList.add("active");
    }
  });
}

// =====================================
// RENDER OFFICER GRID
// =====================================

function renderOfficerGrid(grid, officers, year) {
  if (!grid) return;

  if (officers.length === 0) {
    grid.innerHTML = `
            <div class="officers-empty" style="grid-column:1/-1;">
                <div class="empty-content">
                    <i class="fas fa-users-slash"></i>
                    <h3>No Officers Available</h3>
                    <p>Leadership team members will be announced soon.</p>
                </div>
            </div>
        `;
    return;
  }

  let html = "";

  officers.forEach((officer) => {
    let image = officer.image || "";

    if (!image || image === "") {
      image =
        "https://ui-avatars.com/api/?name=" +
        encodeURIComponent(officer.name) +
        "&background=4285F4&color=fff&size=300&bold=true";
    } else if (image.startsWith("http://") || image.startsWith("https://")) {
      // Keep as is
    } else if (image.startsWith("data:")) {
      // Keep as is
    } else {
      image = image.replace(/^\.\.?\//, "");
      image = image.replace(/^\//, "");

      if (!image.includes("includes/images/officers/")) {
        if (!image.includes("/")) {
          image = "includes/images/officers/" + image;
        } else {
          let filename = image.split("/").pop();
          image = "includes/images/officers/" + filename;
        }
      }

      image = BASE_URL + image;
    }

    html += `
            <div class="officer-card" data-officer="${officer.id}">
                <div class="officer-image-wrapper">
                    <img src="${image}" alt="${officer.name}" class="officer-photo" onerror="this.style.display='none'">
                    <div class="placeholder-blur" style="background: linear-gradient(135deg, #4285F4, #5F5CFF);"></div>
                    <div class="officer-hover-info">
                        <div class="hover-content">
                            <span class="hover-role">${officer.role}</span>
                            <h4>${officer.name}</h4>
                            <p><i class="fas fa-calendar-alt"></i> ${officer.sy || year}</p>
                            <div class="hover-socials">
                                <a href="${officer.fb || "#"}"><i class="fab fa-facebook-f"></i></a>
                                <a href="${officer.twitter || "#"}"><i class="fab fa-twitter"></i></a>
                                <a href="${officer.linkedin || "#"}"><i class="fab fa-linkedin-in"></i></a>
                                <a href="${officer.github || "#"}"><i class="fab fa-github"></i></a>
                            </div>
                            <span class="hover-click"><i class="fas fa-mouse-pointer"></i> View Profile</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });

  grid.innerHTML = html;
  attachOfficerEvents();
}

// =====================================
// OFFICER CARD EVENTS
// =====================================

function attachOfficerEvents() {
  const officerCards = document.querySelectorAll(".officer-card");

  officerCards.forEach((card) => {
    card.removeEventListener("click", card._handler);

    const handler = function (e) {
      const officerKey = this.dataset.officer;
      openOfficerProfile(officerKey);
    };

    card._handler = handler;
    card.addEventListener("click", handler);
  });
}

// =====================================
// OPEN OFFICER PROFILE MODAL
// =====================================

function openOfficerProfile(officerKey) {
  let officerData = null;

  for (const year in officersData) {
    for (const dept in officersData[year]) {
      const found = officersData[year][dept].find((o) => o.id === officerKey);
      if (found) {
        officerData = found;
        break;
      }
    }
    if (officerData) break;
  }

  if (!officerData) {
    console.error("Officer not found:", officerKey);
    return;
  }

  const modal = document.getElementById("officerModal");
  if (!modal) return;

  let image = officerData.image || "";

  if (!image || image === "") {
    image =
      "https://ui-avatars.com/api/?name=" +
      encodeURIComponent(officerData.name) +
      "&background=4285F4&color=fff&size=300&bold=true";
  } else if (image.startsWith("http://") || image.startsWith("https://")) {
    // Keep as is
  } else if (image.startsWith("data:")) {
    // Keep as is
  } else {
    image = image.replace(/^\.\.?\//, "");
    image = image.replace(/^\//, "");

    if (!image.includes("includes/images/officers/")) {
      if (!image.includes("/")) {
        image = "includes/images/officers/" + image;
      } else {
        let filename = image.split("/").pop();
        image = "includes/images/officers/" + filename;
      }
    }

    image = BASE_URL + image;
  }

  document.getElementById("modalImage").src = image;
  document.getElementById("modalImage").alt = officerData.name;
  document.getElementById("modalBadge").textContent =
    officerData.department || "";
  document.getElementById("modalName").textContent = officerData.name;
  document.getElementById("modalRole").textContent = officerData.role;
  document.getElementById("modalSY").textContent = officerData.sy || "";
  document.getElementById("modalBirthday").textContent =
    officerData.birthday || "Not specified";
  document.getElementById("modalResponsibilities").textContent =
    officerData.responsibilities || "";
  document.getElementById("modalEmail").textContent = officerData.email || "";

  document.getElementById("modalFb").href = officerData.fb || "#";
  document.getElementById("modalTwitter").href = officerData.twitter || "#";
  document.getElementById("modalLinkedin").href = officerData.linkedin || "#";
  document.getElementById("modalGithub").href = officerData.github || "#";

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// =====================================
// OFFICER MODAL CLOSE
// =====================================

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("officerModal");
  const closeBtn = document.getElementById("modalClose");
  const overlay = document.querySelector(".modal-overlay");

  function closeModal() {
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeModal();
    }
  });
});

// =====================================
// SCROLL SPY - ACTIVE NAV LINK
// =====================================

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a, .dropdown-menu a");

  function updateActiveLink() {
    let currentSection = "";
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => link.classList.remove("active"));

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
});

// ==========================================
// GALLERY
// ==========================================

let galleryData = [];
let galleryFilter = "all";

async function loadGallery() {
  try {
    const response = await fetch(API_GET);
    if (response.ok) {
      const result = await response.json();
      if (result.success && result.data && result.data.gallery) {
        galleryData = result.data.gallery;
        console.log("✅ Gallery loaded:", galleryData.length, "items");
        renderGallery(galleryFilter);
        return;
      }
    }
  } catch (e) {
    try {
      const saved = localStorage.getItem("gdgWebsiteData");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.gallery) {
          galleryData = data.gallery;
          renderGallery(galleryFilter);
          return;
        }
      }
    } catch (e2) {}
    galleryData = [];
    renderGallery(galleryFilter);
  }
}

function renderGallery(filter = "all") {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  let filtered = galleryData;
  if (filter !== "all") {
    filtered = galleryData.filter((item) => item.category === filter);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
            <div class="gallery-empty">
                <i class="fas fa-images"></i>
                <h3>No Photos Available</h3>
                <p>Gallery content will be available soon.</p>
            </div>
        `;
    return;
  }

  let html = "";
  filtered.forEach((item, index) => {
    const label =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);

    html += `
            <div class="gallery-card ${item.category}" data-index="${index}">
                <div class="gallery-card-image">
                    <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/600x400/4285F4/FFFFFF?text=' + encodeURIComponent(item.title)">
                    <div class="gallery-card-overlay">
                        <div class="gallery-card-content">
                            <span class="gallery-card-category">${label}</span>
                            <h3>${item.title}</h3>
                            <p>${item.description ? item.description.substring(0, 80) + (item.description.length > 80 ? "..." : "") : ""}</p>
                            <div class="gallery-card-meta">
                                <span><i class="fas fa-calendar-alt"></i> ${item.date || ""}</span>
                            </div>
                            <button class="gallery-card-btn" data-index="${index}">
                                <span>View Details</span>
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="gallery-card-footer">
                    <span class="card-title">${item.title}</span>
                    <span class="card-category">${label}</span>
                </div>
            </div>
        `;
  });

  grid.innerHTML = html;

  document.querySelectorAll(".gallery-card-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const index = parseInt(this.dataset.index);
      const data = filtered[index];
      if (data) openGalleryModal(data);
    });
  });

  document.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", function () {
      const index = parseInt(this.dataset.index);
      const data = filtered[index];
      if (data) openGalleryModal(data);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      galleryFilter = this.dataset.filter;
      renderGallery(galleryFilter);
    });
  });
  loadGallery();
});

function openGalleryModal(data) {
  const modal = document.getElementById("galleryModal");
  if (!modal) return;

  document.getElementById("galleryModalImage").src = data.image;
  document.getElementById("galleryModalTitle").textContent = data.title;
  document.getElementById("galleryModalDescription").textContent =
    data.description || "";
  document.getElementById("galleryModalCategory").textContent = data.category
    ? data.category.charAt(0).toUpperCase() + data.category.slice(1)
    : "";
  document.getElementById("galleryModalDate").textContent = data.date || "";
  document.getElementById("galleryModalVenue").textContent = data.venue || "";
  document.getElementById("galleryModalDateDetail").textContent =
    data.date || "";
  document.getElementById("galleryModalVenueDetail").textContent =
    data.venue || "";
  document.getElementById("galleryModalTypeDetail").textContent = data.category
    ? data.category.charAt(0).toUpperCase() + data.category.slice(1)
    : "";
  document.getElementById("galleryModalDescDetail").textContent =
    data.description || "";

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("galleryModalClose");
  const modal = document.getElementById("galleryModal");
  const overlay = document.querySelector(".gallery-modal-overlay");

  if (closeBtn) closeBtn.addEventListener("click", closeGalleryModal);
  if (overlay) overlay.addEventListener("click", closeGalleryModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeGalleryModal();
  });
});

// ==========================================
// EVENTS DATA
// ==========================================

let eventData = [];

async function loadEvents() {
  try {
    const response = await fetch(API_GET);
    if (response.ok) {
      const result = await response.json();
      if (result.success && result.data && result.data.events) {
        eventData = result.data.events;
        console.log("✅ Events loaded:", eventData.length, "items");
        renderEvents();
        return;
      }
    }
  } catch (e) {
    try {
      const saved = localStorage.getItem("gdgWebsiteData");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.events) {
          eventData = data.events;
          renderEvents();
          return;
        }
      }
    } catch (e2) {}
    eventData = [];
    renderEvents();
  }
}

// ==========================================
// RENDER EVENTS
// ==========================================

function renderEvents() {
  const grid = document.getElementById("eventsGrid");
  if (!grid) return;

  if (eventData.length === 0) {
    grid.innerHTML = `
            <div class="gallery-empty" style="grid-column:1/-1;">
                <i class="fas fa-calendar-alt"></i>
                <h3>No Events Scheduled</h3>
                <p>Upcoming events will be announced soon.</p>
            </div>
        `;
    return;
  }

  const statusColors = {
    ongoing: "#34A853",
    upcoming: "#4285F4",
    past: "#888",
  };
  const statusLabels = {
    ongoing: "Ongoing",
    upcoming: "Upcoming",
    past: "Finished",
  };

  const venueIcons = {
    online: "fa-wifi",
    offline: "fa-map-marker-alt",
    hybrid: "fa-globe",
  };

  let html = "";
  eventData.forEach((item, index) => {
    const speakers = item.speakers || [];
    let speakersHtml = "";
    if (speakers.length > 0) {
      speakersHtml = speakers
        .map(
          (s) =>
            `<span class="speaker-tag">${s.name}${s.role ? " · " + s.role : ""}</span>`,
        )
        .join("");
    } else if (item.speaker) {
      speakersHtml = `<span class="speaker-tag">${item.speaker}${item.speakerRole ? " · " + item.speakerRole : ""}</span>`;
    }

    const venueType = item.venue_type || "offline";
    const venueIcon = venueIcons[venueType] || "fa-map-marker-alt";
    const venueLabel =
      venueType === "online"
        ? "Online"
        : venueType === "hybrid"
          ? "Hybrid"
          : "In-Person";

    html += `
            <div class="event-card" data-status="${item.status || "upcoming"}" data-index="${index}">
                <div class="event-card-inner">
                    <div class="event-banner">
                        <img src="${item.image || "https://via.placeholder.com/600x400/4285F4/FFFFFF?text=Event"}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/600x400/4285F4/FFFFFF?text=' + encodeURIComponent(item.title)">
                        <span class="event-badge ${item.status || "upcoming"}" style="background:${statusColors[item.status] || "#4285F4"}">
                            <i class="fas ${item.status === "ongoing" ? "fa-circle" : item.status === "upcoming" ? "fa-calendar-alt" : "fa-check-circle"}"></i> 
                            ${statusLabels[item.status] || "Upcoming"}
                        </span>
                        <span class="event-venue-badge" style="position:absolute;bottom:14px;right:14px;padding:4px 12px;border-radius:50px;background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);color:#fff;font-size:10px;font-weight:500;display:flex;align-items:center;gap:6px;z-index:2;">
                            <i class="fas ${venueIcon}"></i> ${venueLabel}
                        </span>
                        <div class="event-hover-info">
                            <div class="event-hover-content">
                                <span class="event-category">
                                    <i class="fas ${item.category === "Workshop" ? "fa-code" : item.category === "Hackathon" ? "fa-laptop-code" : item.category === "Tech Talk" ? "fa-cloud" : "fa-users"}"></i> 
                                    ${item.category || "Event"}
                                </span>
                                <h3>${item.title}</h3>
                                <p>${item.description || ""}</p>
                                ${speakersHtml ? `<div class="event-speakers" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;">${speakersHtml}</div>` : ""}
                                <div class="event-meta">
                                    <span><i class="fas fa-calendar-alt"></i> ${item.date || ""}</span>
                                    <span><i class="fas fa-clock"></i> ${item.time || ""}</span>
                                    <span><i class="fas ${venueIcon}"></i> ${item.venue || item.online_link || "TBA"}</span>
                                    <span><i class="fas fa-users"></i> ${item.slots || "Unlimited"}</span>
                                </div>
                                <div style="display:flex;gap:10px;flex-wrap:wrap;">
                                    ${
                                      item.registration_link
                                        ? `<a href="${item.registration_link}" target="_blank" class="event-btn" style="text-decoration:none;">
                                        ${item.status === "past" ? "View Recap" : "Register Now"} 
                                        <i class="fas fa-arrow-right"></i>
                                    </a>`
                                        : ""
                                    }
                                    ${
                                      item.online_link &&
                                      item.venue_type !== "offline"
                                        ? `<a href="${item.online_link}" target="_blank" class="event-btn" style="background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);text-decoration:none;">
                                        <i class="fas fa-video"></i> Join Online
                                    </a>`
                                        : ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });

  grid.innerHTML = html;

  // Add click event to open modal
  document.querySelectorAll(".event-card").forEach((card) => {
    card.addEventListener("click", function () {
      const index = parseInt(this.dataset.index);
      openEventModal(index);
    });
  });
}

// ==========================================
// OPEN EVENT MODAL - UPDATED
// ==========================================

function openEventModal(index) {
  const data = eventData[index];
  if (!data) return;

  const modal = document.getElementById("eventModal");
  if (!modal) return;

  // Set main image
  document.getElementById("eventModalImage").src =
    data.image ||
    "https://via.placeholder.com/600x400/4285F4/FFFFFF?text=Event";
  document.getElementById("eventModalImage").alt = data.title;

  // Set status badge
  const badge = document.getElementById("eventModalBadge");
  const statusColors = {
    ongoing: "#34A853",
    upcoming: "#4285F4",
    past: "#888",
  };
  const statusLabels = {
    ongoing: "Ongoing",
    upcoming: "Upcoming",
    past: "Finished",
  };
  badge.textContent = statusLabels[data.status] || "Upcoming";
  badge.style.background = statusColors[data.status] || "#4285F4";

  // Set venue type badge
  const venueType = data.venue_type || "offline";
  const venueIcons = {
    online: "fa-wifi",
    offline: "fa-map-marker-alt",
    hybrid: "fa-globe",
  };
  const venueLabels = {
    online: "Online",
    offline: "In-Person",
    hybrid: "Hybrid",
  };
  const venueIconEl = document.getElementById("eventModalVenueIcon");
  const venueTypeEl = document.getElementById("eventModalVenueType");
  const venueBadgeEl = document.getElementById("eventModalVenueBadge");

  if (venueIconEl)
    venueIconEl.className =
      "fas " + (venueIcons[venueType] || "fa-map-marker-alt");
  if (venueTypeEl)
    venueTypeEl.textContent = venueLabels[venueType] || "In-Person";
  if (venueBadgeEl) venueBadgeEl.style.display = "flex";

  // Set category
  document.getElementById("eventModalCategory").textContent =
    data.category || "Event";

  // Set title
  document.getElementById("eventModalTitle").textContent = data.title;

  // Set description
  document.getElementById("eventModalDescription").textContent =
    data.description || "No description available.";

  // Set date
  document.getElementById("eventModalDate").textContent = data.date || "TBA";

  // Set time
  document.getElementById("eventModalTime").textContent = data.time || "TBA";

  // Set venue
  let venueDisplay = data.venue || "TBA";
  if (venueType === "online" && data.online_link) {
    venueDisplay = "Online Event";
  } else if (venueType === "hybrid") {
    venueDisplay = data.venue ? data.venue + " + Online" : "Hybrid Event";
  }
  document.getElementById("eventModalVenue").textContent = venueDisplay;

  // Set slots
  document.getElementById("eventModalSlots").textContent =
    data.slots || "Unlimited";

  // --- ONLINE LINK ---
  const onlineBox = document.getElementById("eventModalOnlineBox");
  const onlineLink = document.getElementById("eventModalOnlineLink");
  if (onlineBox && onlineLink) {
    if (data.online_link && venueType !== "offline") {
      onlineBox.style.display = "block";
      onlineLink.innerHTML = `<a href="${data.online_link}" target="_blank" style="color:#4285F4;text-decoration:none;">${data.online_link}</a>`;
    } else {
      onlineBox.style.display = "none";
    }
  }

  // --- REGISTRATION LINK ---
  const regBox = document.getElementById("eventModalRegBox");
  const regLink = document.getElementById("eventModalRegLink");
  const registerBtn = document.getElementById("eventRegisterBtn");
  if (regBox && regLink && registerBtn) {
    if (data.registration_link) {
      regBox.style.display = "block";
      regLink.innerHTML = `<a href="${data.registration_link}" target="_blank" style="color:#4285F4;text-decoration:none;">Register Here</a>`;
      registerBtn.href = data.registration_link;
      registerBtn.style.display = "flex";
    } else {
      regBox.style.display = "none";
      registerBtn.style.display = "none";
    }
  }

  // --- SPEAKERS ---
  const speakersContainer = document.getElementById("eventSpeakersContainer");
  const speakerSingle = document.getElementById("eventSpeakerSingle");
  const speakersSection = document.getElementById("eventSpeakersSection");

  const speakers = data.speakers || [];

  if (speakersContainer && speakersSection && speakerSingle) {
    if (speakers.length > 0) {
      speakersSection.style.display = "block";
      speakerSingle.style.display = "none";

      let speakersHtml = "";
      speakers.forEach((s) => {
        const imgSrc =
          s.image ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=4285F4&color=fff&size=200&bold=true`;
        speakersHtml += `
                    <div class="speaker-item-modal" style="display:flex;align-items:center;gap:16px;padding:12px 16px;background:rgba(255,255,255,0.04);border-radius:12px;border:1px solid rgba(255,255,255,0.04);margin-bottom:10px;">
                        <img src="${imgSrc}" alt="${s.name}" style="width:50px;height:50px;border-radius:50%;object-fit:cover;border:2px solid #4285F4;flex-shrink:0;" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=4285F4&color=fff&size=200&bold=true'">
                        <div>
                            <h4 style="color:#fff;font-size:16px;font-weight:600;margin:0;">${s.name}</h4>
                            <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:0;">${s.role || "Speaker"}</p>
                        </div>
                    </div>
                `;
      });
      speakersContainer.innerHTML = speakersHtml;
    } else if (data.speaker) {
      // Single speaker (fallback)
      speakersSection.style.display = "none";
      speakerSingle.style.display = "flex";
      const speakerImg = document.getElementById("eventSpeakerImage");
      const speakerName = document.getElementById("eventSpeakerName");
      const speakerRole = document.getElementById("eventSpeakerRole");
      if (speakerImg)
        speakerImg.src =
          data.speakerImg ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(data.speaker)}&background=4285F4&color=fff&size=200&bold=true`;
      if (speakerName) speakerName.textContent = data.speaker;
      if (speakerRole)
        speakerRole.textContent = data.speakerRole || "Guest Speaker";
    } else {
      // No speakers
      speakersSection.style.display = "none";
      speakerSingle.style.display = "none";
    }
  }

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ==========================================
// EVENT MODAL CLOSE
// ==========================================

function closeEventModal() {
  const modal = document.getElementById("eventModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("eventModalClose");
  const modal = document.getElementById("eventModal");
  const overlay = document.querySelector(".event-modal-overlay");

  if (closeBtn) closeBtn.addEventListener("click", closeEventModal);
  if (overlay) overlay.addEventListener("click", closeEventModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeEventModal();
    }
  });

  // Share button
  document
    .getElementById("eventShareBtn")
    ?.addEventListener("click", function () {
      const title =
        document.getElementById("eventModalTitle")?.textContent ||
        "GDG CTU Event";
      if (navigator.share) {
        navigator
          .share({
            title: title,
            text: "Check out this GDG CTU event!",
            url: window.location.href,
          })
          .catch(() => {});
      } else {
        navigator.clipboard
          ?.writeText(window.location.href)
          .then(() => {
            showNotification("✅ Link copied to clipboard!", "success");
          })
          .catch(() => {
            alert("Share this event: " + window.location.href);
          });
      }
    });

  loadEvents();
});

// ==========================================
// FAQ
// ==========================================

let faqData = [];
let faqFilter = "all";

async function loadFAQ() {
  try {
    const response = await fetch(API_GET);
    if (response.ok) {
      const result = await response.json();
      if (result.success && result.data && result.data.faq) {
        faqData = result.data.faq;
        console.log("✅ FAQ loaded:", faqData.length, "items");
        renderFAQ(faqFilter);
        return;
      }
    }
  } catch (e) {
    try {
      const saved = localStorage.getItem("gdgWebsiteData");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.faq) {
          faqData = data.faq;
          renderFAQ(faqFilter);
          return;
        }
      }
    } catch (e2) {}
    faqData = [];
    renderFAQ(faqFilter);
  }
}

function renderFAQ(filter = "all") {
  const grid = document.getElementById("faqGrid");
  if (!grid) return;

  let filtered = faqData;
  if (filter !== "all") {
    filtered = faqData.filter((item) => item.category === filter);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
            <div class="faq-empty">
                <i class="fas fa-question-circle"></i>
                <h3>No FAQ Available</h3>
                <p>Frequently asked questions will be posted soon.</p>
            </div>
        `;
    return;
  }

  let html = "";
  filtered.forEach((item, index) => {
    const label =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    html += `
            <div class="faq-item" data-category="${item.category}">
                <div class="faq-question" data-index="${index}">
                    <div class="faq-question-left">
                        <span class="faq-category-tag">${label}</span>
                        <h3>${item.question}</h3>
                    </div>
                    <div class="faq-question-right">
                        <i class="fas fa-chevron-down faq-arrow"></i>
                    </div>
                </div>
                <div class="faq-answer">
                    <p>
                        <i class="fas fa-check-circle faq-check"></i>
                        ${item.answer}
                    </p>
                </div>
            </div>
        `;
  });

  grid.innerHTML = html;

  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const parent = this.closest(".faq-item");
      const isActive = parent.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach((other) => {
        if (other !== parent) {
          other.classList.remove("active");
        }
      });

      if (!isActive) {
        parent.classList.add("active");
      } else {
        parent.classList.remove("active");
      }
    });
  });

  if (filter === "all" && document.querySelectorAll(".faq-item").length > 0) {
    document.querySelectorAll(".faq-item")[0].classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".faq-filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      faqFilter = this.dataset.filter;
      renderFAQ(faqFilter);
    });
  });
  loadFAQ();
});

// ==========================================
// MERCH
// ==========================================

let merchData = [];

async function loadMerch() {
  try {
    const response = await fetch(API_GET);
    if (response.ok) {
      const result = await response.json();
      if (result.success && result.data && result.data.merch) {
        merchData = result.data.merch;
        console.log("Merch loaded:", merchData.length, "items");
        renderMerch();
        return;
      }
    }
  } catch (e) {
    try {
      const saved = localStorage.getItem("gdgWebsiteData");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.merch) {
          merchData = data.merch;
          renderMerch();
          return;
        }
      }
    } catch (e2) {}
    merchData = [];
    renderMerch();
  }
}

function renderMerch() {
  const grid = document.getElementById("merchGrid");
  if (!grid) return;

  if (merchData.length === 0) {
    grid.innerHTML = `
            <div class="gallery-empty" style="grid-column:1/-1;">
                <i class="fas fa-shopping-bag"></i>
                <h3>No Merchandise Available</h3>
                <p>Official merchandise will be available soon.</p>
            </div>
        `;
    return;
  }

  let html = "";
  merchData.forEach((item) => {
    html += `
            <div class="merch-card">
                <div class="merch-photo">
                    <img src="${item.image || "https://via.placeholder.com/400x400/4285F4/FFFFFF?text=Merch"}" alt="${item.name}">
                    ${item.badge ? `<span class="merch-badge">${item.badge}</span>` : ""}
                </div>
                <div class="merch-overlay">
                    <h3>${item.name}</h3>
                    <p>${item.description || ""}</p>
                    <span class="price">${item.price || "₱0"}</span>
                    <a href="${item.orderLink || "#"}" target="_blank" class="order-btn">
                        Order Now
                    </a>
                </div>
            </div>
        `;
  });

  grid.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
  loadMerch();
});

// ==========================================
// PARTNERS
// ==========================================

let partnerData = [];

async function loadPartners() {
  try {
    const response = await fetch(API_GET);
    if (response.ok) {
      const result = await response.json();
      if (result.success && result.data && result.data.partners) {
        partnerData = result.data.partners;
        console.log("Partners loaded:", partnerData.length, "items");
        renderPartners();
        return;
      }
    }
  } catch (e) {
    try {
      const saved = localStorage.getItem("gdgWebsiteData");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.partners) {
          partnerData = data.partners;
          renderPartners();
          return;
        }
      }
    } catch (e2) {}
    partnerData = [];
    renderPartners();
  }
}

function renderPartners() {
  const grid = document.getElementById("partnersGrid");
  if (!grid) return;

  if (partnerData.length === 0) {
    grid.innerHTML = `
            <div class="gallery-empty" style="grid-column:1/-1;">
                <i class="fas fa-handshake"></i>
                <h3>No Partners Yet</h3>
                <p>Partnership announcements coming soon.</p>
            </div>
        `;
    return;
  }

  let html = "";
  partnerData.forEach((item) => {
    html += `
            <div class="partner-card">
                <div class="partner-image">
                    <img src="${item.image || "https://via.placeholder.com/200x200/4285F4/FFFFFF?text=Partner"}" alt="${item.name}">
                </div>
                <div class="partner-overlay">
                    <h3>${item.name}</h3>
                    <p>${item.role || ""}</p>
                </div>
            </div>
        `;
  });

  grid.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
  loadPartners();
});

// ==========================================
// LOADING SCREEN
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");
  const loadingStatus = document.getElementById("loadingStatus");
  const loadingError = document.getElementById("loadingError");
  const retryBtn = document.getElementById("retryBtn");

  let hideTimeout = null;
  let isOnline = navigator.onLine;

  function checkInternet() {
    isOnline = navigator.onLine;
    if (!isOnline) {
      showNoInternet();
    } else {
      hideLoading();
    }
  }

  function showNoInternet() {
    loadingStatus.style.display = "none";
    loadingError.classList.add("show");
    loadingScreen.classList.remove("hide");
  }

  function hideLoading() {
    loadingError.classList.remove("show");
    loadingStatus.style.display = "block";
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(function () {
      loadingScreen.classList.add("hide");
      if (mainContent) {
        mainContent.classList.add("show");
      }
    }, 500);
  }

  function retryConnection() {
    loadingError.classList.remove("show");
    loadingStatus.style.display = "block";
    loadingStatus.textContent = "Reconnecting...";
    setTimeout(function () {
      if (navigator.onLine) {
        loadingStatus.textContent = "Connected!";
        setTimeout(hideLoading, 500);
      } else {
        loadingStatus.textContent = "Loading...";
        showNoInternet();
      }
    }, 1000);
  }

  window.addEventListener("online", function () {
    loadingStatus.textContent = "Connected!";
    setTimeout(hideLoading, 500);
  });
  window.addEventListener("offline", showNoInternet);

  if (retryBtn) {
    retryBtn.addEventListener("click", retryConnection);
  }

  checkInternet();

  window.addEventListener("load", function () {
    if (
      navigator.onLine &&
      loadingScreen &&
      !loadingScreen.classList.contains("hide")
    ) {
      setTimeout(hideLoading, 500);
    }
  });

  setInterval(function () {
    if (loadingScreen && !loadingScreen.classList.contains("hide")) {
      checkInternet();
    }
  }, 5000);
});

// ==========================================
// LOAD ALL DATA
// ==========================================

async function loadAllData() {
  console.log("🔄 Loading all data from database...");

  try {
    const response = await fetch(API_GET);
    if (response.ok) {
      const result = await response.json();
      if (result.success && result.data) {
        const data = result.data;

        if (data.officers) {
          officersData = data.officers;
          if (data.settings && data.settings.currentYear) {
            currentYear = data.settings.currentYear;
          } else {
            const years = Object.keys(officersData).sort((a, b) =>
              b.localeCompare(a),
            );
            currentYear = years.length > 0 ? years[0] : "2025-2026";
          }
          generateYearSelector();
          renderAllOfficers();
        }

        if (data.gallery) {
          galleryData = data.gallery;
          renderGallery(galleryFilter || "all");
        }

        if (data.events) {
          eventData = data.events;
          renderEvents();
        }

        if (data.faq) {
          faqData = data.faq;
          renderFAQ(faqFilter || "all");
        }

        if (data.merch) {
          merchData = data.merch;
          renderMerch();
        }

        if (data.partners) {
          partnerData = data.partners;
          renderPartners();
        }

        if (data.settings) {
          const s = data.settings;
          const hero = document.querySelector(".hero-left");
          if (hero) {
            const badge = hero.querySelector(".badge");
            if (badge) badge.textContent = s.heroBadge || "Welcome to";
            const h1 = hero.querySelector("h1");
            if (h1) {
              const span = h1.querySelector("span");
              if (span) span.textContent = s.heroHighlight || "CTU";
              const textBefore = h1.childNodes[0];
              if (textBefore) {
                textBefore.textContent =
                  s.heroTitle || "Google Developer Groups ";
              }
            }
            const p = hero.querySelector("p");
            if (p && s.heroDescription) {
              p.innerHTML = s.heroDescription;
            }
          }
        }

        updateStats();

        console.log("All data loaded successfully from database!");
        return;
      }
    }
    throw new Error("Failed to load from database");
  } catch (e) {
    console.log("Error loading from database, using fallback...");
    try {
      const saved = localStorage.getItem("gdgWebsiteData");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.officers) {
          officersData = data.officers;
          if (data.currentYear) {
            currentYear = data.currentYear;
          }
          generateYearSelector();
          renderAllOfficers();
        }
        if (data.gallery) {
          galleryData = data.gallery;
          renderGallery(galleryFilter || "all");
        }
        if (data.events) {
          eventData = data.events;
          renderEvents();
        }
        if (data.faq) {
          faqData = data.faq;
          renderFAQ(faqFilter || "all");
        }
        if (data.merch) {
          merchData = data.merch;
          renderMerch();
        }
        if (data.partners) {
          partnerData = data.partners;
          renderPartners();
        }
        updateStats();
        console.log("Data loaded from localStorage (fallback)");
      }
    } catch (e3) {
      console.error("Error loading from localStorage:", e3);
    }
  }
}

// ==========================================
// UPDATE STATISTICS
// ==========================================

function updateStats() {
  const members = document.getElementById("statMembers");
  if (members) {
    let count = 0;
    for (const year in officersData) {
      for (const dept in officersData[year]) {
        count += officersData[year][dept].length;
      }
    }
    members.textContent = count || "0";
  }

  const eventsCount = document.getElementById("statEventsCount");
  if (eventsCount) {
    eventsCount.textContent = eventData?.length || "0";
  }

  const projects = document.getElementById("statProjects");
  if (projects) {
    projects.textContent = "15+";
  }

  const growthMembers = document.getElementById("growthMembers");
  if (growthMembers) {
    growthMembers.textContent = "150+";
  }

  const growthWorkshops = document.getElementById("growthWorkshops");
  if (growthWorkshops) {
    growthWorkshops.textContent = "25+";
  }

  const growthMeetups = document.getElementById("growthMeetups");
  if (growthMeetups) {
    growthMeetups.textContent = "12+";
  }

  const growthTrained = document.getElementById("growthTrained");
  if (growthTrained) {
    growthTrained.textContent = "300+";
  }

  const growthPartners = document.getElementById("growthPartners");
  if (growthPartners) {
    growthPartners.textContent = "8+";
  }

  const membersNow = document.getElementById("membersNow");
  if (membersNow) {
    membersNow.textContent = "150+";
  }
}

// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(loadAllData, 600);
});

// ==========================================
// AUTO-RELOAD FROM ADMIN
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("Auto-reload active");
  let lastUpdate = localStorage.getItem("gdgDataUpdated") || "0";

  setInterval(function () {
    const current = localStorage.getItem("gdgDataUpdated") || "0";
    if (current !== lastUpdate) {
      console.log("Update detected, reloading data...");
      lastUpdate = current;
      loadAllData();
    }
  }, 3000);
});

document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    console.log("Page visible, checking for updates...");
    loadAllData();
  }
});

window.reloadAll = loadAllData;

// ==========================================
// THEME TOGGLE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  if (!themeToggle) return;

  const savedTheme = localStorage.getItem("gdgTheme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateIcon(savedTheme);

  themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("gdgTheme", newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    if (theme === "dark") {
      themeIcon.className = "fa-solid fa-sun";
      themeToggle.title = "Switch to Light Mode";
    } else {
      themeIcon.className = "fa-solid fa-moon";
      themeToggle.title = "Switch to Dark Mode";
    }
  }
});

// ==========================================
// HAMBURGER MENU TOGGLE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }
});
