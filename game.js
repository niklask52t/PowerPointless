(() => {
  const screens = {
    home: document.getElementById("home"),
    presentation: document.getElementById("presentation"),
    end: document.getElementById("end"),
  };

  const generateBtn = document.getElementById("generate-btn");
  const exitBtn = document.getElementById("exit-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const againBtn = document.getElementById("again-btn");

  const slideCounter = document.getElementById("slide-counter");
  const slideHeading = document.getElementById("slide-heading");
  const slideBullets = document.getElementById("slide-bullets");
  const endLine = document.getElementById("end-line");

  const END_LINES = [
    "Wir bewerten still. Sehr still.",
    "Niemand klatscht. Aber alle erinnern sich.",
    "Das war... eine Präsentation. Definitiv eine.",
    "Du hast etwas in uns ausgelöst. Wir hassen es nicht.",
    "Du wirst dich morgen schämen. Heute nicht.",
    "Bewerber:in der Zukunft.",
  ];

  let current = null;
  let slideIndex = 0;
  let lastTitle = null;

  function showScreen(name) {
    Object.values(screens).forEach((el) => el.classList.remove("active"));
    screens[name].classList.add("active");
  }

  function pickPresentation() {
    if (PRESENTATIONS.length === 1) return PRESENTATIONS[0];
    let next;
    do {
      next = PRESENTATIONS[Math.floor(Math.random() * PRESENTATIONS.length)];
    } while (next.title === lastTitle);
    lastTitle = next.title;
    return next;
  }

  function renderSlide() {
    const total = current.slides.length + 1;
    const slide = slideIndex === 0
      ? { heading: current.title, bullets: ["Eine Präsentation von dir. Sofort. Jetzt. Steh auf."] }
      : current.slides[slideIndex - 1];

    slideCounter.textContent = `Slide ${slideIndex + 1} / ${total}`;
    slideHeading.textContent = slide.heading;
    slideBullets.innerHTML = "";
    slide.bullets.forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      slideBullets.appendChild(li);
    });

    prevBtn.disabled = slideIndex === 0;
    nextBtn.textContent = slideIndex === total - 1 ? "Fertig ✓" : "Weiter →";
  }

  function startPresentation() {
    current = pickPresentation();
    slideIndex = 0;
    renderSlide();
    showScreen("presentation");
  }

  function next() {
    const total = current.slides.length + 1;
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

  generateBtn.addEventListener("click", startPresentation);
  againBtn.addEventListener("click", startPresentation);
  exitBtn.addEventListener("click", () => showScreen("home"));
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  document.addEventListener("keydown", (e) => {
    if (!screens.presentation.classList.contains("active")) return;
    if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "Escape") {
      showScreen("home");
    }
  });
})();
