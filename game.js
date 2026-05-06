(() => {
  const screens = {
    home:             document.getElementById("home"),
    categories:       document.getElementById("categories"),
    presentationList: document.getElementById("presentation-list"),
    presentation:     document.getElementById("presentation"),
    end:              document.getElementById("end"),
  };

  const startBtn      = document.getElementById("start-btn");
  const backHomeBtn   = document.getElementById("back-home-btn");
  const backCatBtn    = document.getElementById("back-cat-btn");
  const catGrid       = document.getElementById("cat-grid");
  const presGrid      = document.getElementById("pres-grid");
  const listTitle     = document.getElementById("list-title");
  const listSubtitle  = document.getElementById("list-subtitle");
  const randomCatBtn  = document.getElementById("random-from-cat");
  const exitBtn       = document.getElementById("exit-btn");
  const prevBtn       = document.getElementById("prev-btn");
  const nextBtn       = document.getElementById("next-btn");
  const againBtn      = document.getElementById("again-btn");
  const endListBtn    = document.getElementById("end-list-btn");
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
        <div class="cat-title">${escape(cat.title)}</div>
        <div class="cat-desc">${escape(cat.desc)}</div>
        <div class="cat-count">${count} Präsentation${count === 1 ? "" : "en"}</div>
      `;
      card.addEventListener("click", () => {
        currentCategory = cat.id;
        openPresentationList();
      });
      catGrid.appendChild(card);
    });
  }

  /* ---------------- PRESENTATION LIST ---------------- */
  function openPresentationList() {
    const cat = CATEGORIES.find((c) => c.id === currentCategory);
    const pool = presentationsFor(currentCategory);

    listTitle.textContent = cat ? `${cat.emoji} ${cat.title}` : "Wähle eine Präsentation";
    listSubtitle.textContent = cat ? cat.desc : "";

    presGrid.innerHTML = "";
    pool.forEach((pres) => {
      const card = document.createElement("button");
      card.className = "pres-card";
      const slideCount = pres.slides.length;
      card.innerHTML = `
        <div class="pres-emoji">${pres.emoji || "📊"}</div>
        <div class="pres-info">
          <div class="pres-title">${escape(pres.title)}</div>
          <div class="pres-meta">${slideCount} Slide${slideCount === 1 ? "" : "s"}</div>
        </div>
      `;
      card.addEventListener("click", () => startWithPresentation(pres));
      presGrid.appendChild(card);
    });

    showScreen("presentationList");
  }

  /* ---------------- PRESENTATION FLOW ---------------- */
  function pickRandomPresentation() {
    const pool = presentationsFor(currentCategory);
    if (pool.length === 0) return null;
    if (pool.length === 1) return pool[0];
    let next;
    do {
      next = pool[Math.floor(Math.random() * pool.length)];
    } while (next.title === lastTitle);
    return next;
  }

  function startWithPresentation(pres) {
    if (!pres) return;
    currentPres = pres;
    lastTitle = pres.title;
    slideIndex = 0;
    renderSlide();
    showScreen("presentation");
  }

  function startRandom() {
    startWithPresentation(pickRandomPresentation());
  }

  /* ---------------- SLIDE RENDERING ---------------- */
  function renderSlide() {
    const slide = currentPres.slides[slideIndex];
    const total = currentPres.slides.length;
    const vibe  = slide.vibe || currentPres.vibe || "noir";

    slideCounter.textContent = `Slide ${slideIndex + 1} / ${total} · ${currentPres.emoji || ""} ${currentPres.title}`;

    slideEl.className = "slide";
    slideEl.classList.add(`vibe-${vibe}`);
    slideEl.classList.add(`layout-${slide.type || "bullets"}`);
    slideEl.innerHTML = "";

    const bgEl = document.createElement("div");
    bgEl.className = "slide-bg";
    if (slide.bg) bgEl.style.backgroundImage = `url("${slide.bg}")`;
    slideEl.appendChild(bgEl);

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
  startBtn.addEventListener("click",      () => showScreen("categories"));
  backHomeBtn.addEventListener("click",   () => showScreen("home"));
  backCatBtn.addEventListener("click",    () => showScreen("categories"));
  randomCatBtn.addEventListener("click",  startRandom);
  exitBtn.addEventListener("click",       openPresentationList);
  nextBtn.addEventListener("click",       next);
  prevBtn.addEventListener("click",       prev);
  againBtn.addEventListener("click",      startRandom);
  endListBtn.addEventListener("click",    openPresentationList);
  endCatBtn.addEventListener("click",     () => showScreen("categories"));

  document.addEventListener("keydown", (e) => {
    if (!screens.presentation.classList.contains("active")) return;
    if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "Escape") {
      openPresentationList();
    }
  });

  /* ---------------- BOOT ---------------- */
  buildCategoryGrid();
})();
