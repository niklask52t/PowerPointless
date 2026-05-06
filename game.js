(() => {
  const screens = {
    home:         document.getElementById("home"),
    categories:   document.getElementById("categories"),
    presentation: document.getElementById("presentation"),
    end:          document.getElementById("end"),
  };

  const startBtn      = document.getElementById("start-btn");
  const backHomeBtn   = document.getElementById("back-home-btn");
  const catGrid       = document.getElementById("cat-grid");
  const exitBtn       = document.getElementById("exit-btn");
  const prevBtn       = document.getElementById("prev-btn");
  const nextBtn       = document.getElementById("next-btn");
  const againBtn      = document.getElementById("again-btn");
  const endCatBtn     = document.getElementById("end-cat-btn");
  const slideEl       = document.getElementById("slide");
  const slideCounter  = document.getElementById("slide-counter");
  const endLine       = document.getElementById("end-line");

  const END_LINES = [
    "Wir bewerten still. Sehr still.",
    "Niemand klatscht. Aber alle erinnern sich.",
    "Das war... eine Präsentation. Definitiv eine.",
    "Du hast etwas in uns ausgelöst. Wir hassen es nicht.",
    "Du wirst dich morgen schämen. Heute nicht.",
    "Bewerber:in der Zukunft.",
    "TED Talk-Niveau, wenn TED in einer Keller-Bar wäre.",
    "Wir geben dir eine 4. Aber liebevoll.",
  ];

  let currentCategory = "random";
  let currentPres = null;
  let slideIndex = 0;
  let lastTitle = null;

  /* ---------------- SCREEN HANDLING ---------------- */
  function showScreen(name) {
    Object.values(screens).forEach((el) => el.classList.remove("active"));
    screens[name].classList.add("active");
  }

  /* ---------------- CATEGORIES ---------------- */
  function presentationsFor(catId) {
    if (catId === "random") return PRESENTATIONS;
    return PRESENTATIONS.filter((p) => p.categories && p.categories.includes(catId));
  }

  function buildCategoryGrid() {
    catGrid.innerHTML = "";
    CATEGORIES.forEach((cat) => {
      const count = presentationsFor(cat.id).length;
      const card = document.createElement("button");
      card.className = "cat-card";
      card.innerHTML = `
        <div class="cat-emoji">${cat.emoji}</div>
        <div class="cat-title">${cat.title}</div>
        <div class="cat-desc">${cat.desc}</div>
        <div class="cat-count">${count} Präsentation${count === 1 ? "" : "en"}</div>
      `;
      card.addEventListener("click", () => {
        currentCategory = cat.id;
        startPresentation();
      });
      catGrid.appendChild(card);
    });
  }

  /* ---------------- PRESENTATION FLOW ---------------- */
  function pickPresentation() {
    const pool = presentationsFor(currentCategory);
    if (pool.length === 0) return null;
    if (pool.length === 1) return pool[0];
    let next;
    do {
      next = pool[Math.floor(Math.random() * pool.length)];
    } while (next.title === lastTitle);
    lastTitle = next.title;
    return next;
  }

  function startPresentation() {
    const pres = pickPresentation();
    if (!pres) return;
    currentPres = pres;
    slideIndex = 0;
    renderSlide();
    showScreen("presentation");
  }

  /* ---------------- SLIDE RENDERING ---------------- */
  function renderSlide() {
    const slide = currentPres.slides[slideIndex];
    const total = currentPres.slides.length;
    const vibe  = slide.vibe || currentPres.vibe || "noir";

    slideCounter.textContent = `Slide ${slideIndex + 1} / ${total} · ${currentPres.emoji || ""} ${currentPres.title}`;

    // Reset slide element
    slideEl.className = "slide";
    slideEl.classList.add(`vibe-${vibe}`);
    slideEl.classList.add(`layout-${slide.type || "bullets"}`);
    slideEl.innerHTML = "";

    // Background layer (always present, gets vibe gradient via vibe class)
    const bgEl = document.createElement("div");
    bgEl.className = "slide-bg";
    if (slide.bg) bgEl.style.backgroundImage = `url("${slide.bg}")`;
    slideEl.appendChild(bgEl);

    // Content per type
    const content = document.createElement("div");
    content.className = "slide-content";

    if (slide.type === "title") {
      content.innerHTML = `
        ${slide.emoji ? `<div class="title-emoji">${slide.emoji}</div>` : ""}
        <h2>${escape(slide.heading)}</h2>
        ${slide.subtitle ? `<p class="subtitle">${escape(slide.subtitle)}</p>` : ""}
      `;
    } else if (slide.type === "meme") {
      const top    = slide.meme && slide.meme.top    ? `<div class="meme-text top">${escape(slide.meme.top)}</div>`    : "";
      const bottom = slide.meme && slide.meme.bottom ? `<div class="meme-text bottom">${escape(slide.meme.bottom)}</div>` : "";
      content.innerHTML = top + `<div></div>` + bottom;
    } else {
      // bullets (default)
      const emojiBlock = slide.emoji ? `<div class="bullets-emoji">${slide.emoji}</div>` : "";
      if (!slide.emoji) slideEl.classList.add("no-emoji");
      content.innerHTML = `
        ${emojiBlock}
        <div class="bullets-body">
          <h2>${escape(slide.heading)}</h2>
          <ul>
            ${slide.bullets.map((b) => `<li>${escape(b)}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    slideEl.appendChild(content);

    prevBtn.disabled = slideIndex === 0;
    nextBtn.textContent = slideIndex === total - 1 ? "Fertig ✓" : "Weiter →";
  }

  function escape(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  /* ---------------- NAVIGATION ---------------- */
  function next() {
    const total = currentPres.slides.length;
    if (slideIndex === total - 1) {
      endLine.textContent = END_LINES[Math.floor(Math.random() * END_LINES.length)];
      showScreen("end");
      return;
    }
    slideIndex++;
    renderSlide();
  }

  function prev() {
    if (slideIndex === 0) return;
    slideIndex--;
    renderSlide();
  }

  /* ---------------- EVENT WIRING ---------------- */
  startBtn.addEventListener("click",   () => showScreen("categories"));
  backHomeBtn.addEventListener("click", () => showScreen("home"));
  exitBtn.addEventListener("click",    () => showScreen("categories"));
  nextBtn.addEventListener("click",    next);
  prevBtn.addEventListener("click",    prev);
  againBtn.addEventListener("click",   startPresentation);
  endCatBtn.addEventListener("click",  () => showScreen("categories"));

  document.addEventListener("keydown", (e) => {
    if (!screens.presentation.classList.contains("active")) return;
    if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "Escape") {
      showScreen("categories");
    }
  });

  /* ---------------- BOOT ---------------- */
  buildCategoryGrid();
})();
