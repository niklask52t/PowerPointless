# Changelog

Alle nennenswerten Änderungen an PowerPointless landen hier.

## [0.3.0] — 2026-05-06

### PowerPoint Karaoke Edition

- Neue Kategorie **🎤 PowerPoint Karaoke** für Decks, die aus echten Karaoke-PowerPoint-Vorlagen importiert wurden
- 3 neue Präsentationen mit ~9 Slides je Deck:
  - **Ernährung & Gesundheit** — TED-Talk-Style-Vorlesung über Diäten, Avocados und Schuldgefühle
  - **Dein nächstes Start-up** — Ein Pitch ohne Substanz mit allen Buzzwords (TAM, Pivot, Synergie)
  - **Die Welt der Delfine** — Ozeanische Tiefenanalyse, vorgetragen von einer Person ohne Meereskontakt
- Bilder aus den Originalvorlagen unter `assets/karaoke/{diet,startup,delfine}/` als Slide-Hintergründe
- Alle Bullet-Texte und Meme-Captions sind 100% selbstgeschrieben im Game-Stil

## [0.2.0] — 2026-05-06

### Major Visual Overhaul

- **Kategorien-Auswahl** als eigener Screen mit 5 Kategorien:
  - 🎲 Komplett Random
  - 🎮 Gaming & R6
  - 🤡 Alltagswahnsinn
  - 🛋️ Therapie-Slot
  - 👁️ Verschwörung
- **Vollbild-Präsentationen** — jede Slide nimmt das ganze Viewport ein
- **3 Slide-Layouts**: `title` (Cover), `bullets` (Content), `meme` (Klassisches Top/Bottom-Meme mit Impact-Style-Typografie)
- **8 Vibes** als CSS-Themen: fire, vapor, toxic, cyber, noir, sun, void, paper — jede Slide kann einen eigenen Vibe haben
- **Echte Bilder aus dem Internet** via LoremFlickr (CC-Bilder von Flickr) als Slide-Hintergründe — topisch wo's passt
- **Anton-Font** als Display-Schrift für maximale Meme-Energie
- **Floating Title-Slide-Emoji**, Bullet-Slide mit großem Seiten-Emoji, Meme-Slides mit klassischer weiß-mit-schwarzem-Stroke-Optik
- Über 120 Slides quer durch alle 20 Präsentationen, mit zusätzlichen Meme- und Title-Slides für visuelle Vielfalt
- Navigations-Overlay mit transparenter Topbar/Footer, blendet sich nicht in den Content ein

### Tech

- Schema-Update in `presentations.js`: `categories[]`, `vibe`, `slides[].type`, `slides[].emoji`, `slides[].bg`, `slides[].meme`
- Renderer in `game.js` schaltet pro Slide zwischen Layouts
- Kategorienscreen wird dynamisch aus `CATEGORIES` + Counts gebaut
- Esc → zurück zur Kategorie-Auswahl statt zur Home-Screen

## [0.1.0] — 2026-05-06

### Initial Release

- Browser-basiertes Präsentationsspiel — keine Installation, einfach `index.html` öffnen
- 20 absurde Präsentationen mit jeweils 4–5 Slides
  - 10 Themen aus dem Alltagswahnsinn (Tauben-Drohnen, Sockenquantenphysik, Klograffiti, etc.)
  - 10 Gaming / Rainbow Six Siege Themen (Sledge-Rush, Tachanka-Lobgesang, Mira-Klimawandel, R6-Toiletten-Ranking, etc.)
- Tastatursteuerung: ← / → / Leertaste / Enter / Esc
- Title-Slide + Content-Slides + Outro-Screen mit zufälligem End-Spruch
- Vermeidet die zuletzt gezeigte Präsentation, damit nicht zweimal hintereinander dasselbe kommt
- Pures Vanilla HTML / CSS / JS — kein Build, kein Framework
