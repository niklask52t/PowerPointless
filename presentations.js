// PowerPointless — alle Präsentationen, Kategorien + Visuals
//
// Slide-Typen:
//   "title"   → großer Emoji + Titel + Subtitle (Cover-Slide)
//   "bullets" → Heading + Bulletpoints (optional Bg-Bild)
//   "meme"    → Vollbild-Bild + großer Top/Bottom-Text (Impact-Style)
//
// Vibes (CSS-Klassen): fire, vapor, toxic, cyber, noir, sun, void, paper

const CATEGORIES = [
  { id: "gaming",        emoji: "🎮", title: "Gaming & R6",       desc: "Strats, Operator, Brainrot. Lord Tachanka erbarme dich." },
  { id: "alltag",        emoji: "🤡", title: "Alltagswahnsinn",   desc: "Ketchup-auf-Spaghetti, streiten mit dem Kühlschrank, Montage abschaffen." },
  { id: "therapie",      emoji: "🛋️", title: "Therapie-Slot",     desc: "Spotify Wrapped, der Ex, dein Lebenslauf als Heldenepos. Vortragen unter Tränen." },
  { id: "verschwoerung", emoji: "👁️", title: "Verschwörung",      desc: "Tauben sind Drohnen. Socken sind Quantenobjekte. Wache auf." },
];


const PRESENTATIONS = [
  // ============================================================
  // VERSCHWÖRUNG
  // ============================================================
  {
    title: "Tauben sind Regierungsdrohnen — eine wissenschaftliche Aufarbeitung",
    emoji: "🐦",
    categories: ["verschwoerung"],
    vibe: "noir",
    slides: [
      {
        type: "title",
        heading: "Tauben sind Regierungsdrohnen",
        subtitle: "Eine streng wissenschaftliche Aufarbeitung",
        emoji: "🐦",
        vibe: "noir",
        bg: "assets/flickr/pigeon-city-5.jpg",
      },
      {
        type: "bullets",
        heading: "Einleitung",
        emoji: "👁️",
        vibe: "noir",
        bullets: [
          "Hat schon mal jemand ein Taubenbaby gesehen? Eben.",
          "Tauben starren dich an. Drohnen starren dich an. Zufall? Ich glaube NICHT.",
          "Diese Präsentation wird euch alles nehmen, was ihr je geglaubt habt.",
          "Vorsicht: Wer einschläft, wird beobachtet."
        ],
      },
      {
        type: "meme",
        meme: { top: "DU FÜTTERST SIE", bottom: "SIE FÜTTERN DEINE DATEN" },
        bg: "assets/flickr/pigeon-bread-12.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Indizien aus dem Alltag",
        emoji: "📡",
        vibe: "noir",
        bg: "assets/flickr/pigeon-wires-7.jpg",
        bullets: [
          "Tauben sitzen IMMER auf Stromleitungen — sie laden sich auf.",
          "Sie verschwinden bei Regen. Weil sie nicht wasserdicht sind.",
          "Niemand hat je eine tote Taube gesehen. NIEMAND.",
          "Sie reagieren auf Bewegung wie eine Überwachungskamera. Probier's aus."
        ],
      },
      {
        type: "bullets",
        heading: "Wer steckt dahinter?",
        emoji: "🕵️",
        vibe: "noir",
        bullets: [
          "Vermutlich die Post.",
          "Möglicherweise Aldi (sie wissen, was du kaufst).",
          "Auf keinen Fall die Russen — die haben Bären.",
          "Spotify. Ja, Spotify."
        ],
      },
      {
        type: "meme",
        meme: { top: "WACH AUF", bottom: "DIE WAHRHEIT FLIEGT ÜBER DIR" },
        bg: "assets/flickr/pigeon-sky-33.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Was tun?",
        emoji: "🚨",
        vibe: "noir",
        bullets: [
          "Augenkontakt mit Tauben vermeiden. Niemals.",
          "Niemals Brot werfen — das ist ein Trigger-Signal.",
          "Sprich mit deinem Anwalt, bevor du eine fütterst.",
          "Trage Aluhut. Funktioniert. Frag nicht warum."
        ],
      },
      {
        type: "title",
        heading: "Vielen Dank.",
        subtitle: "Fragen? Stellen Sie sie der nächsten Taube.",
        emoji: "🐦",
        vibe: "noir",
      },
    ],
  },

  {
    title: "Sockendiebstahl in Waschmaschinen — eine Quantentheorie",
    emoji: "🧦",
    categories: ["verschwoerung"],
    vibe: "cyber",
    slides: [
      {
        type: "title",
        heading: "Sockendiebstahl",
        subtitle: "Eine quantenphysikalische Aufarbeitung",
        emoji: "🧦",
        vibe: "cyber",
        bg: "assets/flickr/socks-laundry-4.jpg",
      },
      {
        type: "bullets",
        heading: "Das Phänomen",
        emoji: "🧮",
        vibe: "cyber",
        bullets: [
          "Du legst 6 Socken rein. Es kommen 5 raus. Immer.",
          "Niemand findet sie. Niemals. In keiner Wohnung der Welt.",
          "Das verstößt gegen den Energieerhaltungssatz.",
          "Selbst Heisenberg konnte das nicht erklären — und er war schon ziemlich confused."
        ],
      },
      {
        type: "meme",
        meme: { top: "6 SOCKEN REIN", bottom: "5 SOCKEN RAUS" },
        bg: "assets/flickr/washingmachine-8.jpg",
        vibe: "vapor",
      },
      {
        type: "bullets",
        heading: "Die These",
        emoji: "🌀",
        vibe: "cyber",
        bullets: [
          "Waschmaschinen sind Portale. Bewiesen durch das Verschwinden.",
          "Socken existieren in einem überlagerten Zustand: drinnen UND woanders.",
          "Schrödinger hatte recht — und einen Wäschekorb.",
          "Trockner sind übrigens unschuldig. Lasst die Trockner in Ruhe."
        ],
      },
      {
        type: "bullets",
        heading: "Wo gehen sie hin?",
        emoji: "🌌",
        vibe: "void",
        bg: "assets/flickr/portal-abstract-9.jpg",
        bullets: [
          "Eine Parallel-Dimension namens Sockistan.",
          "Dort ist eine einzelne Socke die offizielle Währung.",
          "Sie regiert das Land mit einem fast vollständigen Paar.",
          "Es gibt einen Grenzkonflikt mit dem Land der verschwundenen Bluetooth-Verbindungen."
        ],
      },
      {
        type: "meme",
        meme: { top: "AKZEPTIERE ES", bottom: "ODER TRAGE SANDALEN" },
        bg: "assets/flickr/sandals-beach-11.jpg",
        vibe: "sun",
      },
      {
        type: "bullets",
        heading: "Was wir tun können",
        emoji: "🤲",
        vibe: "cyber",
        bullets: [
          "Nichts. Wirklich nichts.",
          "Akzeptieren. Loslassen. Weiterleben.",
          "Oder: nur noch Sandalen tragen.",
          "Oder: keine Socken mehr kaufen. Lebe mit den Konsequenzen."
        ],
      },
    ],
  },

  // ============================================================
  // ALLTAG
  // ============================================================
  {
    title: "Die soziopolitischen Konsequenzen von Ketchup auf Spaghetti",
    emoji: "🍝",
    categories: ["alltag"],
    vibe: "fire",
    slides: [
      {
        type: "title",
        heading: "Ketchup auf Spaghetti",
        subtitle: "Ein soziopolitischer Notstand",
        emoji: "🍝",
        vibe: "fire",
        bg: "assets/flickr/pasta-1.jpg",
      },
      {
        type: "bullets",
        heading: "Definition des Problems",
        emoji: "🚨",
        vibe: "fire",
        bullets: [
          "Ketchup auf Spaghetti ist ein kultureller Genozid.",
          "Italien hat dafür offiziell den Botschafter zurückgerufen. (Quelle: vertrauen Sie mir.)",
          "Wir reden hier nicht über Geschmack. Wir reden über Werte.",
          "Pasta ist kein Pommes-Topping. WIEDERHOLE: kein Pommes-Topping."
        ],
      },
      {
        type: "meme",
        meme: { top: "MAMMA MIA", bottom: "KAPITULATION INTERNATIONALE" },
        bg: "assets/flickr/italy-pasta-6.jpg",
        vibe: "sun",
      },
      {
        type: "bullets",
        heading: "Historischer Kontext",
        emoji: "📜",
        vibe: "fire",
        bullets: [
          "1492: Kolumbus entdeckt die Tomate. Eine bessere Zeit.",
          "1956: Erster dokumentierter Fall in einer deutschen Kantine. Die Schande beginnt.",
          "2008: Versuch, das Verbrechen unter UNESCO-Schutz zu stellen. Abgelehnt.",
          "Heute: Eskalation. Es gibt Influencer, die das machen."
        ],
      },
      {
        type: "bullets",
        heading: "Wer ist betroffen?",
        emoji: "👥",
        vibe: "fire",
        bg: "assets/flickr/ketchup-bottle-14.jpg",
        bullets: [
          "Italienische Großmütter (emotional, irreparabel).",
          "Restaurants in Bayern (kulinarisch, finanziell).",
          "Du, beim ersten Date. Es wird kein zweites geben.",
          "Der gute Teil deiner Seele."
        ],
      },
      {
        type: "meme",
        meme: { top: "IT'S A CRIME", bottom: "AND YOU KNOW IT" },
        bg: "assets/flickr/tomato-splat-17.jpg",
        vibe: "noir",
      },
      {
        type: "bullets",
        heading: "Lösungsvorschlag",
        emoji: "⚖️",
        vibe: "fire",
        bullets: [
          "Aufklärungskampagne in Schulen.",
          "Pflicht-Schulung für jeden, der eine Mikrowelle besitzt.",
          "Im Wiederholungsfall: Fußfessel mit Knoblauchgeruch.",
          "Auf Plakaten: 'Stop the slop.'"
        ],
      },
    ],
  },

  {
    title: "Wie man richtig mit einem Kühlschrank streitet",
    emoji: "🥶",
    categories: ["alltag"],
    vibe: "vapor",
    slides: [
      {
        type: "title",
        heading: "Streiten mit dem Kühlschrank",
        subtitle: "Ein Konflikt-Coaching für moderne Beziehungen",
        emoji: "🥶",
        vibe: "vapor",
        bg: "assets/flickr/fridge-kitchen-2.jpg",
      },
      {
        type: "bullets",
        heading: "Die Grundhaltung",
        emoji: "🧍",
        vibe: "vapor",
        bullets: [
          "Augen auf gleicher Höhe. Niemals zu ihm hochschauen.",
          "Niemals zuerst die Tür öffnen — das ist Schwäche.",
          "Atme tief durch. Er hat auch nur eine Aufgabe und scheitert seit Jahren daran.",
          "Stell dich breit. Zeig ihm, dass du keinen Strom brauchst, um zu funktionieren."
        ],
      },
      {
        type: "meme",
        meme: { top: "WIR MÜSSEN", bottom: "REDEN." },
        bg: "assets/flickr/fridge-open-16.jpg",
        vibe: "noir",
      },
      {
        type: "bullets",
        heading: "Eröffnungssätze",
        emoji: "💬",
        vibe: "vapor",
        bullets: [
          "\"Wir müssen reden.\" — der Klassiker. Funktioniert immer.",
          "\"Du weißt genau, was du getan hast.\" (Joghurt-Vorfall)",
          "\"Joghurt war ABGELAUFEN. Abgelaufen. Sag was dazu.\"",
          "\"Ich rede mit dir nicht in diesem Ton, solange du brummst.\""
        ],
      },
      {
        type: "bullets",
        heading: "Eskalationsstufen",
        emoji: "📈",
        vibe: "fire",
        bullets: [
          "Stufe 1: Tür etwas zu fest schließen.",
          "Stufe 2: Demonstrativ den Wasserspender benutzen.",
          "Stufe 3: Mit dem Gefrierfach reden, um ihn eifersüchtig zu machen.",
          "Stufe 4: Eine kleine Pflanze daneben stellen. Sie ist jetzt der neue Liebling."
        ],
      },
      {
        type: "meme",
        meme: { top: "JOGHURT", bottom: "WAR ABGELAUFEN" },
        bg: "assets/flickr/milk-bottle-21.jpg",
        vibe: "toxic",
      },
      {
        type: "bullets",
        heading: "Versöhnung",
        emoji: "🕊️",
        vibe: "vapor",
        bullets: [
          "Magnete als Friedensangebot.",
          "Innen aufräumen — ohne ein Wort zu sagen.",
          "Nicht erwarten, dass er sich entschuldigt. Er ist ein Kühlschrank.",
          "Akzeptiere, dass er weiterhin brummen wird. Wir alle brummen auf unsere Art."
        ],
      },
    ],
  },

  {
    title: "Warum Montage international geächtet werden sollten",
    emoji: "📅",
    categories: ["alltag"],
    vibe: "sun",
    slides: [
      {
        type: "title",
        heading: "Montage müssen weg",
        subtitle: "Eine internationale Petition mit gefälschter UN-Vorlage",
        emoji: "📅",
        vibe: "sun",
        bg: "assets/flickr/monday-calendar-3.jpg",
      },
      {
        type: "bullets",
        heading: "Der Tatbestand",
        emoji: "⚖️",
        vibe: "fire",
        bullets: [
          "Montag verstößt gegen Artikel 1 der Menschenrechte.",
          "Niemand wurde je an einem Montag glücklich.",
          "Selbst der Wecker hasst sich an Montagen.",
          "Wenn du am Montag morgen 'guten Morgen' sagst, liegst du wissenschaftlich falsch."
        ],
      },
      {
        type: "meme",
        meme: { top: "GARFIELD HATTE", bottom: "RECHT DIE GANZE ZEIT" },
        bg: "assets/flickr/cat-sleeping-19.jpg",
        vibe: "sun",
      },
      {
        type: "bullets",
        heading: "Empirische Beweise",
        emoji: "📊",
        vibe: "sun",
        bullets: [
          "Kaffee schmeckt schlechter. Wissenschaftlich erwiesen (von mir).",
          "Mails am Montag sind 73% bösartiger.",
          "Garfield. Ich sage nur Garfield.",
          "Studie der Universität Hintertupfingen: 100% der Montage waren Montage."
        ],
      },
      {
        type: "bullets",
        heading: "Forderungen",
        emoji: "✊",
        vibe: "fire",
        bg: "assets/flickr/protest-sign-22.jpg",
        bullets: [
          "Streichung des Montags ersatzlos.",
          "Sonntag direkt → Dienstag.",
          "Wer Montag erfunden hat, soll sich entschuldigen.",
          "Der Dienstag wird zum 'neuen Montag' aufgewertet, kriegt aber 30% Schmerzensgeld."
        ],
      },
      {
        type: "meme",
        meme: { top: "ICH HABE EINEN TRAUM", bottom: "IN DIESEM TRAUM IST SAMSTAG" },
        bg: "assets/flickr/hammock-beach-24.jpg",
        vibe: "vapor",
      },
      {
        type: "title",
        heading: "Vielen Dank.",
        subtitle: "Schicken Sie diese Slides an die UN. Bitte.",
        emoji: "📅",
        vibe: "sun",
      },
    ],
  },

  {
    title: "Die geheime Lore von Klograffiti auf öffentlichen Toiletten",
    emoji: "🚽",
    categories: ["alltag"],
    vibe: "paper",
    slides: [
      {
        type: "title",
        heading: "Klograffiti",
        subtitle: "Die ehrlichste Literatur des 21. Jahrhunderts",
        emoji: "🚽",
        vibe: "paper",
        bg: "assets/flickr/graffiti-wall-26.jpg",
      },
      {
        type: "bullets",
        heading: "Eine vergessene Kunstform",
        emoji: "🎨",
        vibe: "paper",
        bullets: [
          "Banksy hat hier angefangen. Beweise: keine. Aber wahrscheinlich.",
          "Anonyme Poesie zwischen Kacheln.",
          "Die ehrlichste Literatur des 21. Jahrhunderts.",
          "Niemand schreibt dir die Wahrheit so direkt wie eine Kabinentür in der Autobahn-Raststätte."
        ],
      },
      {
        type: "meme",
        meme: { top: "HIER SITZT DU GUT", bottom: "HIER SITZT DU FEIN" },
        bg: "assets/flickr/toilet-public-29.jpg",
        vibe: "paper",
      },
      {
        type: "bullets",
        heading: "Die wichtigsten Werke",
        emoji: "📝",
        vibe: "paper",
        bullets: [
          "\"Hier sitzt du gut, hier sitzt du fein, der nächste muss der Nachbar sein.\"",
          "\"Ruf 0151... — ist meine Mama, sie hat bestes WLAN.\"",
          "Eine sehr fragwürdige Zeichnung in Stall 3, niemand spricht darüber.",
          "\"Toilettenpapier alle. Beten hilft nicht.\" — eine philosophische Tiefenstudie."
        ],
      },
      {
        type: "bullets",
        heading: "Stilistische Entwicklung",
        emoji: "📈",
        vibe: "paper",
        bg: "assets/flickr/graffiti-bathroom-31.jpg",
        bullets: [
          "1990er: Rohe Wut, schlechte Edding-Qualität.",
          "2010er: Minimalismus, mehr QR-Codes.",
          "Heute: Ironischer Postmodernismus mit TikTok-Referenzen.",
          "Die Avantgarde: Klograffiti das andere Klograffiti antwortet. Ein Dialog."
        ],
      },
      {
        type: "meme",
        meme: { top: "UNESCO", bottom: "WIR BRAUCHEN EUCH JETZT" },
        bg: "assets/flickr/marble-statue-34.jpg",
        vibe: "noir",
      },
      {
        type: "bullets",
        heading: "Schutz dieses Kulturerbes",
        emoji: "🏛️",
        vibe: "paper",
        bullets: [
          "UNESCO muss handeln. Sofort.",
          "Klotüren in Museen ausstellen.",
          "Eine Doku auf Arte. Aber nur dort, sonst fühlt es sich falsch an.",
          "Schulausflüge mit Pflichtlektüre auf öffentlichen Toiletten."
        ],
      },
    ],
  },

  {
    title: "Wie man in 7 Schritten Bundeskanzler:in wird (legal-ish)",
    emoji: "🇩🇪",
    categories: ["alltag"],
    vibe: "noir",
    slides: [
      {
        type: "title",
        heading: "So wirst du Bundeskanzler:in",
        subtitle: "In 7 schmerzhaften, größtenteils legalen Schritten",
        emoji: "🇩🇪",
        vibe: "noir",
        bg: "assets/flickr/bundestag-berlin-36.jpg",
      },
      {
        type: "bullets",
        heading: "Schritt 1: Eine Krawatte besitzen",
        emoji: "👔",
        vibe: "noir",
        bullets: [
          "Egal welche. Hauptsache mittel-langweilig.",
          "Niemals rot UND blau gleichzeitig.",
          "Knoten muss aussehen wie 'ich war mal in der Bundeswehr'.",
          "Ein Hemd dazu schadet nicht. Ist aber optional, wenn man Charisma hat (du hast keins)."
        ],
      },
      {
        type: "meme",
        meme: { top: "DA MÜSSEN WIR", bottom: "DIFFERENZIEREN" },
        bg: "assets/flickr/microphone-podium-38.jpg",
        vibe: "paper",
      },
      {
        type: "bullets",
        heading: "Schritt 2: In jeder Talkshow sitzen",
        emoji: "📺",
        vibe: "noir",
        bullets: [
          "Lanz, Maischberger, Caren Miosga.",
          "Immer leicht angespannt aussehen.",
          "Mindestens einmal sagen: 'Da müssen wir differenzieren.'",
          "Niemals lachen. Niemals."
        ],
      },
      {
        type: "bullets",
        heading: "Schritt 3: Eine Partei finden",
        emoji: "🎩",
        vibe: "noir",
        bg: "assets/flickr/flag-germany-41.jpg",
        bullets: [
          "Irgendeine. Wirklich.",
          "Wechseln, wenn die Umfragen schlecht sind.",
          "Keiner merkt's, ehrlich.",
          "Wenn du dich nicht entscheiden kannst: gründe eine eigene. Heißt sie 'Bündnis 71'. Niemand fragt warum."
        ],
      },
      {
        type: "meme",
        meme: { top: "VIBES ONLY", bottom: "POLITIK IST EINE STIMMUNG" },
        bg: "assets/flickr/crowd-rally-44.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Schritt 4–7: Vibes",
        emoji: "✨",
        vibe: "noir",
        bullets: [
          "Selfies mit Senior:innen auf Volksfesten.",
          "Auf Volksfesten ein Bier in der Hand halten — aber NICHT trinken.",
          "Hoffe, dass niemand deine alten Tweets findet.",
          "Gewinne. Sieh überrascht aus. Halte eine Rede, in der du 'wir' sagst, aber 'ich' meinst."
        ],
      },
    ],
  },

  // ============================================================
  // THERAPIE-SLOT
  // ============================================================
  {
    title: "Spotify Wrapped als Spiegel der modernen Existenzkrise",
    emoji: "🎧",
    categories: ["therapie"],
    vibe: "vapor",
    slides: [
      {
        type: "title",
        heading: "Spotify Wrapped",
        subtitle: "Der jährliche algorithmische Therapeut, der dich nicht therapieren will",
        emoji: "🎧",
        vibe: "vapor",
        bg: "assets/flickr/headphones-neon-46.jpg",
      },
      {
        type: "bullets",
        heading: "Was Spotify Wrapped wirklich ist",
        emoji: "🪞",
        vibe: "vapor",
        bullets: [
          "Eine jährliche Demütigung im Schein-Design.",
          "Algorithmischer Therapeut, der dich nicht therapieren will.",
          "Ein öffentliches Geständnis über deine emotionalsten Trennungen.",
          "Eine Datenkrake mit Markenbewusstsein."
        ],
      },
      {
        type: "meme",
        meme: { top: "DU HAST 412×", bottom: "'DRIVERS LICENSE' GEHÖRT" },
        bg: "assets/flickr/headphones-girl-48.jpg",
        vibe: "vapor",
      },
      {
        type: "bullets",
        heading: "Was es über dich verrät",
        emoji: "🫠",
        vibe: "vapor",
        bullets: [
          "Du hast 'drivers license' 412 mal gehört. Wir wissen Bescheid.",
          "Dein Top-Genre 'Sad German Indie' sagt mehr als deine Therapie.",
          "Niemand hört Lo-Fi zum Lernen. Niemand. Hör auf zu lügen.",
          "Du bist im Top 0.1% von 'Pirates of the Caribbean Soundtrack' Hörer:innen. Wir reden später."
        ],
      },
      {
        type: "bullets",
        heading: "Das soziale Dilemma",
        emoji: "😬",
        vibe: "vapor",
        bg: "assets/flickr/phone-scroll-51.jpg",
        bullets: [
          "Postest du es: peinlich.",
          "Postest du es nicht: verdächtig.",
          "Es gibt kein Entkommen.",
          "Apple Music Replay ist auch keine Lösung. Niemand sieht es. Niemand jubelt dir zu."
        ],
      },
      {
        type: "meme",
        meme: { top: "TOP GENRE", bottom: "SAD GERMAN INDIE" },
        bg: "assets/flickr/rain-sad-53.jpg",
        vibe: "noir",
      },
      {
        type: "bullets",
        heading: "Lösungsansätze",
        emoji: "💊",
        vibe: "vapor",
        bullets: [
          "Apple Music Replay benutzen (niemand sieht es).",
          "Sich selbst belügen mit Fake-Playlists ab Oktober.",
          "Therapie. Echte. Mit Versicherung.",
          "Nur noch Klassik hören und in der Story arrogant darüber sein."
        ],
      },
    ],
  },

  {
    title: "Mein Lebenslauf, vorgetragen als Heldenepos",
    emoji: "📜",
    categories: ["therapie"],
    vibe: "toxic",
    slides: [
      {
        type: "title",
        heading: "Mein Lebenslauf",
        subtitle: "Vorgetragen als Heldenepos. Anpassbar an Stelle / Verzweiflung.",
        emoji: "📜",
        vibe: "toxic",
        bg: "assets/flickr/scroll-old-55.jpg",
      },
      {
        type: "bullets",
        heading: "Die Geburt eines Helden",
        emoji: "👶",
        vibe: "toxic",
        bullets: [
          "An einem unscheinbaren Tag erblickte das Licht der Welt: ich.",
          "Schon mit 3 Jahren konnte ich auf 'Play' drücken.",
          "Eine Legende war geboren.",
          "Die Hebamme weinte. Niemand weiß, ob aus Freude."
        ],
      },
      {
        type: "meme",
        meme: { top: "EINE LEGENDE", bottom: "WAR GEBOREN" },
        bg: "assets/flickr/newborn-baby-57.jpg",
        vibe: "sun",
      },
      {
        type: "bullets",
        heading: "Die Schulzeit",
        emoji: "🏫",
        vibe: "toxic",
        bg: "assets/flickr/classroom-empty-59.jpg",
        bullets: [
          "Mathe: Kampf. Aber ich habe überlebt.",
          "Sportunterricht: das wahre Trauma.",
          "Eine 4 in Erdkunde — ich habe Frankreich gefunden, mehr nicht.",
          "Mein Lehrer sagte: 'Du wirst es schwer haben.' Ich antwortete: 'Sie auch, wenn Sie weiterreden.'"
        ],
      },
      {
        type: "bullets",
        heading: "Erste Errungenschaften",
        emoji: "🏆",
        vibe: "toxic",
        bullets: [
          "Führerschein im ersten Versuch (mit Hilfe von Glück und einem netten Prüfer).",
          "Eine Pflanze überlebt seit 6 Wochen. Das ist eine Beziehung.",
          "Habe einmal eigenständig eine Steuererklärung gemacht. EINMAL.",
          "Habe eine WG-Putzplan-Diskussion überlebt, ohne zu weinen. (Knapp.)"
        ],
      },
      {
        type: "meme",
        meme: { top: "ICH WERDE DIESE WELT", bottom: "VERÄNDERN. IRGENDWANN." },
        bg: "assets/flickr/sunrise-hope-62.jpg",
        vibe: "sun",
      },
      {
        type: "bullets",
        heading: "Das Vermächtnis",
        emoji: "🌅",
        vibe: "toxic",
        bullets: [
          "Ich werde diese Welt verändern.",
          "Vielleicht. Irgendwann.",
          "Erstmal Pause.",
          "Wer mich einstellt, kriegt ein Origami-Schwan zum Vorstellungsgespräch. Optional, aber bemerkenswert."
        ],
      },
    ],
  },

  {
    title: "Warum mein:e Ex in allem recht hatte (eingereicht unter Zwang)",
    emoji: "💔",
    categories: ["therapie"],
    vibe: "fire",
    slides: [
      {
        type: "title",
        heading: "Mein:e Ex hatte recht",
        subtitle: "Eingereicht unter erheblichem psychischen Druck",
        emoji: "💔",
        vibe: "fire",
        bg: "assets/flickr/breakup-sad-64.jpg",
      },
      {
        type: "bullets",
        heading: "Vorwort",
        emoji: "🆘",
        vibe: "fire",
        bullets: [
          "Diese Präsentation entstand unter erheblichem psychischen Druck.",
          "Alle Aussagen entsprechen der subjektiven Wahrheit der Gegenseite.",
          "Ich behalte mir das Recht vor, später alles zu bereuen.",
          "Wenn du das hier siehst: ja, ich werde beobachtet."
        ],
      },
      {
        type: "meme",
        meme: { top: "JA", bottom: "DU HATTEST RECHT" },
        bg: "assets/flickr/couple-fight-66.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Punkt 1: Der Geschirrspüler",
        emoji: "🍽️",
        vibe: "fire",
        bg: "assets/flickr/dishwasher-kitchen-69.jpg",
        bullets: [
          "Ja. Die Tassen gehören oben. Ich habe es eingesehen.",
          "Nein, der Topf passt nicht da rein. Niemals.",
          "Ich war im Unrecht. Tief im Inneren wusste ich es.",
          "Tabs sind keine 'kann man auch so reinwerfen'-Dinger. Es gibt ein Fach. Du wusstest es."
        ],
      },
      {
        type: "bullets",
        heading: "Punkt 2: Meine Freunde",
        emoji: "🤝",
        vibe: "fire",
        bullets: [
          "Marco war wirklich nicht so toll, wie ich dachte.",
          "Er hat nie zurückgerufen, als das Auto kaputt war.",
          "Sie hatte recht. Ich hatte schlechten Geschmack bei Freunden UND Sushi.",
          "Auch der zweite Sushi-Laden war nicht 'authentisch'. Es waren Tiefkühl-Tunfisch."
        ],
      },
      {
        type: "meme",
        meme: { top: "HILFE", bottom: "WENN IHR DAS SEHT" },
        bg: "assets/flickr/silhouette-fog-71.jpg",
        vibe: "noir",
      },
      {
        type: "bullets",
        heading: "Punkt 3: Alles andere",
        emoji: "🤍",
        vibe: "fire",
        bullets: [
          "Vermutlich auch.",
          "Wahrscheinlich sogar.",
          "Definitiv. Ich gebe auf.",
          "Wenn das hier vorgelesen wird, klingelt mein Handy gleich. Das ist sie. Sie weiß es."
        ],
      },
    ],
  },

  // ============================================================
  // GAMING & R6
  // ============================================================
  {
    title: "Warum Sledge-Rush die einzig valide Strategie ist",
    emoji: "🔨",
    categories: ["gaming"],
    vibe: "fire",
    slides: [
      {
        type: "title",
        heading: "Sledge-Rush",
        subtitle: "Die einzige valide Strategie. Beweise inklusive.",
        emoji: "🔨",
        vibe: "fire",
        bg: "assets/flickr/hammer-red-73.jpg",
      },
      {
        type: "bullets",
        heading: "Der Hammer als Lebensphilosophie",
        emoji: "🧠",
        vibe: "fire",
        bullets: [
          "Strategie? Falsch. Geschwindigkeit IST Strategie.",
          "Wer denkt, verliert.",
          "Sledge ist nicht ein Operator. Sledge ist ein Mindset.",
          "Ein Mann. Ein Hammer. Ein Plan, der in 4 Sekunden scheitert."
        ],
      },
      {
        type: "meme",
        meme: { top: "PLANT NICHT", bottom: "RENNT" },
        bg: "assets/flickr/runner-sprint-75.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Die Mathematik",
        emoji: "🧮",
        vibe: "fire",
        bg: "assets/flickr/clock-running-78.jpg",
        bullets: [
          "Defenders setzen Gadgets in 30 Sekunden auf.",
          "Du bist in 8 Sekunden bei Site.",
          "Differenz: 22 Sekunden purer Sieg.",
          "Diese Zahlen sind nicht überprüft, aber gefühlt korrekt."
        ],
      },
      {
        type: "bullets",
        heading: "Vorteile",
        emoji: "✅",
        vibe: "toxic",
        bullets: [
          "Niemand erwartet einen Hammer. Niemand.",
          "Hard-Breach? Ich BIN der Hard-Breach.",
          "Drohnen sind für Feiglinge — ich nutze meine Augen.",
          "Bonus: meine Therapeutin hat mir gesagt, 'Frust rauslassen' sei wichtig."
        ],
      },
      {
        type: "meme",
        meme: { top: "HAMMER HOCH", bottom: "HIRN AUS" },
        bg: "assets/flickr/explosion-wall-81.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Nachteile",
        emoji: "❌",
        vibe: "fire",
        bullets: [
          "Keine.",
          "Außer dem Teamchat danach.",
          "Aber den hab ich eh stumm geschaltet.",
          "Marco gibt mir die Schuld. Marco gibt immer mir die Schuld. Marco ist das Problem."
        ],
      },
      {
        type: "title",
        heading: "Hammer raus.",
        subtitle: "Fragen? Habe ich schon zertrümmert.",
        emoji: "🔨",
        vibe: "fire",
      },
    ],
  },

  {
    title: "Caveira-Mains — ein psychologisches Profil",
    emoji: "🤫",
    categories: ["gaming", "therapie"],
    vibe: "noir",
    slides: [
      {
        type: "title",
        heading: "Caveira-Mains",
        subtitle: "Ein psychologisches Profil. Ein Aufruf zur Vorsicht.",
        emoji: "🤫",
        vibe: "noir",
      },
      {
        type: "bullets",
        heading: "Erste Symptome",
        emoji: "👀",
        vibe: "noir",
        bg: "assets/flickr/dark-silhouette-174.jpg",
        bullets: [
          "Spielt nur einen einzigen Operator. Niemals jemand anderen. Auch nicht beim Operator-Ban.",
          "Spricht in der Lobby nicht. Kommt einfach in deinen Rücken.",
          "Hat 800h Spielzeit. 798h davon im Spawn der Gegner.",
          "Reagiert auf 'Pinge mal' mit Stille. Antwortet nur, wenn er was möchte.",
          "Wird im Voice plötzlich laut, wenn er einen Kill hat. Wird sofort wieder still."
        ],
      },
      {
        type: "meme",
        meme: { top: "DU SIEHST NICHTS", bottom: "BIS DU NICHTS MEHR SIEHST" },
        vibe: "noir",
      },
      {
        type: "bullets",
        heading: "Soziales Verhalten",
        emoji: "🥷",
        vibe: "noir",
        bg: "assets/flickr/ninja-shadow-178.jpg",
        bullets: [
          "Steht plötzlich neben dir. Du hast ihn nicht kommen gehört. Niemand hat.",
          "Zerstört dich emotional in 3 Sätzen. Schweigt dann wieder für 40 Minuten.",
          "Antwortet auf WhatsApp 6 Stunden später mit 'k'. Mehr nicht.",
          "In der WG: das Geschirr steht in der Spüle. Niemand sah ihn dabei.",
          "Bei Geburtstagen: erscheint, isst Kuchen, ist verschwunden. Niemand bemerkt's bis zum Aufräumen."
        ],
      },
      {
        type: "bullets",
        heading: "Die Silent-Step-Philosophie",
        emoji: "🌫️",
        vibe: "noir",
        bg: "assets/flickr/smoke-foggy-180.jpg",
        bullets: [
          "Im Spiel: niemand hört ihn kommen.",
          "Im echten Leben: niemand hört ihn weggehen.",
          "Beim Date: er sitzt schon am Tisch, bevor du das Restaurant betrittst.",
          "Bei der Arbeit: das Projekt ist fertig, bevor du den Auftrag bekommst. Er sagt es niemandem.",
          "Beim Sport: er war beim Marathon. Niemand hat ihn gesehen. Trotzdem 1. Platz."
        ],
      },
      {
        type: "meme",
        meme: { top: "ICH BIN NICHT DA", bottom: "DU AUCH NICHT MEHR" },
        vibe: "noir",
      },
      {
        type: "bullets",
        heading: "Wie erkenne ich einen Cav-Main?",
        emoji: "🔍",
        vibe: "noir",
        bg: "assets/flickr/magnifying-glass-183.jpg",
        bullets: [
          "Schwarze Klamotten. Immer. Auch im Sommer.",
          "Antwortet auf Smalltalk mit einem leichten Nicken. Mehr nicht.",
          "Ist immer pünktlich. Ohne Ankündigung.",
          "Sein Discord-Status ist 'Online' seit 2017. Er sagt aber nie etwas im Voice.",
          "Hat ein Spotify Wrapped Top-Genre 'Brazilian Funk'. Er gibt es nicht zu."
        ],
      },
      {
        type: "bullets",
        heading: "Survivor's Guide",
        emoji: "🆘",
        vibe: "fire",
        bg: "assets/flickr/survival-manual-187.jpg",
        bullets: [
          "Schau immer hinter dich. Auch beim Frühstück.",
          "Drohnen sind sinnlos. Sie hat sie schon zerstört.",
          "Wenn du sie nicht findest, ist sie schon hinter dir.",
          "Akzeptiere dein Schicksal. Es ist schneller so.",
          "Wenn du beten möchtest — bete leise. Sie hört dich."
        ],
      },
      {
        type: "meme",
        meme: { top: "AKZEPTANZ", bottom: "KOMMT VON HINTEN" },
        bg: "assets/flickr/dark-figure-190.jpg",
        vibe: "fire",
      },
      {
        type: "title",
        heading: "Vielen Dank.",
        subtitle: "Schau hinter dich. Genau jetzt. Schnell.",
        emoji: "🤫",
        vibe: "noir",
      },
    ],
  },

  {
    title: "Tachanka ist eigentlich der beste Operator und ihr seid alle im Unrecht",
    emoji: "👑",
    categories: ["gaming"],
    vibe: "toxic",
    slides: [
      {
        type: "title",
        heading: "Lord Tachanka",
        subtitle: "Eine Lobrede unter Tränen der Erleuchtung",
        emoji: "👑",
        vibe: "toxic",
        bg: "assets/flickr/crown-gold-94.jpg",
      },
      {
        type: "bullets",
        heading: "Die Grundthese",
        emoji: "📢",
        vibe: "toxic",
        bullets: [
          "Tachanka ist nicht schlecht. IHR seid schlecht.",
          "Er ist ein König. Wortwörtlich. LORD Tachanka.",
          "Wer das nicht versteht, hat keinen Spaß im Leben.",
          "Ich akzeptiere keine Gegenargumente. Erst Lord Tachanka, dann Diskussion."
        ],
      },
      {
        type: "meme",
        meme: { top: "SLAVA", bottom: "TACHANKA" },
        vibe: "toxic",
      },
      {
        type: "bullets",
        heading: "Der Granatwerfer ist Kunst",
        emoji: "💥",
        vibe: "fire",
        bg: "assets/flickr/explosion-smoke-99.jpg",
        bullets: [
          "Flächenkontrolle wie ein Stratege im Mittelalter.",
          "Drohnen verbrennen, Roamer verbrennen, Hoffnung verbrennen.",
          "Wenn du gewinnst, gewinnt die ganze Mannschaft. Wenn du verlierst, gewinnst du innerlich trotzdem.",
          "Es ist mehr eine Performance-Kunst als ein Gadget."
        ],
      },
      {
        type: "bullets",
        heading: "Häufige Gegenargumente — entkräftet",
        emoji: "🛡️",
        vibe: "toxic",
        bullets: [
          "'Er ist langsam.' — Du bist auch langsam, Klaus.",
          "'Sein Pickrate ist niedrig.' — Pickrate ist eine soziale Konstruktion.",
          "'Er macht keinen Sinn.' — Doch. DU machst keinen Sinn.",
          "'Niemand spielt ihn.' — Eben. Es ist deine Chance, anders zu sein."
        ],
      },
      {
        type: "meme",
        meme: { top: "WER GEGEN TACHANKA IST", bottom: "IST GEGEN DIE FREIHEIT" },
        bg: "assets/flickr/flag-wind-101.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Schluss",
        emoji: "👑",
        vibe: "toxic",
        bullets: [
          "Lord Tachanka hat den Granatwerfer NICHT gewählt. Der Granatwerfer hat IHN gewählt.",
          "Wer gegen Tachanka ist, ist gegen die Freiheit.",
          "Slava Tachanka.",
          "Wenn du jetzt nicht klatschst, weiß ich, wer du wirklich bist."
        ],
      },
      {
        type: "title",
        heading: "Slava Tachanka.",
        subtitle: "Lange lebe der Lord. Auch wenn er langsam läuft.",
        emoji: "👑",
        vibe: "toxic",
      },
    ],
  },

  {
    title: "Ein Ranking aller Toiletten in Rainbow Six Siege",
    emoji: "🚽",
    categories: ["gaming"],
    vibe: "vapor",
    slides: [
      {
        type: "title",
        heading: "R6 Toiletten Ranking",
        subtitle: "Eine investigative Reportage in 3 Stäken",
        emoji: "🚽",
        vibe: "vapor",
        bg: "assets/flickr/toilet-blue-103.jpg",
      },
      {
        type: "bullets",
        heading: "Methodik",
        emoji: "🔬",
        vibe: "vapor",
        bullets: [
          "Bewertet nach: Atmosphäre, taktische Relevanz, Vibe.",
          "Subjektiv, aber autoritär.",
          "Wer widerspricht, hat noch nie auf 'Bartlett' gespielt.",
          "Gold-Sponsoren: Niemand. Wir sind hier nicht käuflich."
        ],
      },
      {
        type: "meme",
        meme: { top: "PLATZ 3", bottom: "OREGON KIDS BATHROOM" },
        bg: "assets/flickr/bathroom-small-106.jpg",
        vibe: "vapor",
      },
      {
        type: "bullets",
        heading: "Platz 3: Oregon — Kids Bedroom Bathroom",
        emoji: "🥉",
        vibe: "vapor",
        bullets: [
          "Klein, klaustrophobisch, charmant.",
          "Hier sterben Drohnen UND Träume.",
          "Eine Plus-1 Situation, immer.",
          "Hat den höchsten 'Mama-jetzt-spiel-ich-fertig'-Moment-Index."
        ],
      },
      {
        type: "bullets",
        heading: "Platz 2: Clubhouse — irgendwas im Keller",
        emoji: "🥈",
        vibe: "noir",
        bg: "assets/flickr/basement-dark-108.jpg",
        bullets: [
          "Ich weiß nicht, ob das eine Toilette ist, aber es riecht so.",
          "Mira-Spiegel-freundlich.",
          "Atmosphärisch eine 9/10.",
          "Hier wurde niemand glücklich. Aber alle haben überlebt. Außer Marco."
        ],
      },
      {
        type: "meme",
        meme: { top: "PLATZ 1", bottom: "CHALET BAR-TOILETTE" },
        bg: "assets/flickr/bar-bathroom-111.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Platz 1: Chalet — die berühmte Bar-Toilette",
        emoji: "🥇",
        vibe: "fire",
        bullets: [
          "Ein Klassiker. Wie eine Pinte am 3. Advent.",
          "Hier wurde Ranked-Geschichte geschrieben.",
          "Ein Ort des Friedens. Bis Ash durch die Wand kommt.",
          "Mein erster echter Clutch war hier. Ich spreche heute noch davon. Niemand hört zu."
        ],
      },
      {
        type: "title",
        heading: "Vielen Dank.",
        subtitle: "Falls jemand auf die Toilette muss — Platz 1 ist nebenan.",
        emoji: "🚽",
        vibe: "vapor",
      },
    ],
  },

  {
    title: "Die Psychologie des Rage-Quits nach einem Tod durch Lord Tachanka",
    emoji: "🤬",
    categories: ["gaming"],
    vibe: "fire",
    slides: [
      {
        type: "title",
        heading: "Rage-Quit Psychologie",
        subtitle: "Speziell für Tode durch Lord Tachanka. Klinisch dokumentiert.",
        emoji: "🤬",
        vibe: "fire",
        bg: "assets/flickr/angry-gamer-113.jpg",
      },
      {
        type: "bullets",
        heading: "Phase 1: Verleugnung",
        emoji: "🙅",
        vibe: "fire",
        bullets: [
          "'Das war nicht Tachanka. Das kann nicht Tachanka gewesen sein.'",
          "Killcam wird dreimal angeschaut.",
          "'Da ist ein Bug, das zählt nicht.'",
          "Du fragst Mitspieler, ob sie es auch gesehen haben. Sie haben."
        ],
      },
      {
        type: "meme",
        meme: { top: "DAS WAR NICHT", bottom: "TACHANKA. ODER?" },
        bg: "assets/flickr/gamer-headset-116.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Phase 2: Wut",
        emoji: "💢",
        vibe: "fire",
        bg: "assets/flickr/keyboard-broken-119.jpg",
        bullets: [
          "Tastatur leidet.",
          "Mikrofon explodiert.",
          "Mitspieler werden auch beleidigt, weil 'ihr habt nicht gepingt'.",
          "Du erwägst, einen Vertrag mit dem Discord-Server zu kündigen."
        ],
      },
      {
        type: "bullets",
        heading: "Phase 3: Verhandlung",
        emoji: "🤝",
        vibe: "fire",
        bullets: [
          "'Wenn ich die nächste Runde gewinne, war es das wert.'",
          "'Vielleicht spiele ich morgen einfach Casual.'",
          "'Ich melde Tachanka. Geht das?'",
          "Du fragst Reddit. Reddit lacht dich aus."
        ],
      },
      {
        type: "meme",
        meme: { top: "AKZEPTANZ?", bottom: "NEIN. NIE." },
        bg: "assets/flickr/silhouette-night-121.jpg",
        vibe: "noir",
      },
      {
        type: "bullets",
        heading: "Phase 4: Akzeptanz",
        emoji: "💀",
        vibe: "fire",
        bullets: [
          "Nein, nie Akzeptanz.",
          "Spiel wird ausgestellt.",
          "Drei Stunden YouTube-Tutorials, um den Granatwerfer zu kontern. Es gibt keine.",
          "Du startest das Spiel um 2 Uhr morgens neu, um 'nur kurz Rache zu nehmen'."
        ],
      },
      {
        type: "title",
        heading: "Atme tief durch.",
        subtitle: "Nächste Runde fängt in 5 Sekunden an. Du bist eh nicht stark genug zu pausieren.",
        emoji: "🤬",
        vibe: "fire",
      },
    ],
  },

  {
    title: "Wie Miras Schwarze Spiegel den Klimawandel lösen könnten",
    emoji: "🪞",
    categories: ["gaming"],
    vibe: "cyber",
    slides: [
      {
        type: "title",
        heading: "Mira gegen den Klimawandel",
        subtitle: "Eine wissenschaftliche Lösung, die Ubisoft uns vorenthält",
        emoji: "🪞",
        vibe: "cyber",
        bg: "assets/flickr/ice-arctic-124.jpg",
      },
      {
        type: "bullets",
        heading: "Die Idee",
        emoji: "💡",
        vibe: "cyber",
        bullets: [
          "Schwarze Spiegel reflektieren UV-Strahlung.",
          "Pack 80.000 davon ins Polareis. Done.",
          "Niemand hat das je probiert. Komisch eigentlich.",
          "Greenpeace ruft mich nicht zurück."
        ],
      },
      {
        type: "meme",
        meme: { top: "80.000 SPIEGEL", bottom: "1 PROBLEM GELÖST" },
        bg: "assets/flickr/mirrors-reflection-127.jpg",
        vibe: "cyber",
      },
      {
        type: "bullets",
        heading: "Logistik",
        emoji: "📦",
        vibe: "cyber",
        bg: "assets/flickr/snow-ship-129.jpg",
        bullets: [
          "Mira persönlich überwacht den Einbau (sie kriegt Spesen).",
          "Hard-Breachers sind nicht nötig — Eis ist soft breach.",
          "Castle wird wegen 'unnötig komplex' nicht eingeladen.",
          "Maverick darf zur Sicherheit mit. Niemand sagt ihm warum."
        ],
      },
      {
        type: "bullets",
        heading: "Mögliche Probleme",
        emoji: "⚠️",
        vibe: "cyber",
        bullets: [
          "Pinguine könnten reflektiert werden und sich selbst erschrecken.",
          "Eisbären lernen vielleicht zu peeken.",
          "Greta Thunberg fordert vielleicht Maverick als Backup.",
          "UNESCO weiß noch nicht, was sie davon halten soll."
        ],
      },
      {
        type: "meme",
        meme: { top: "SAVE THE PLANET", bottom: "OPEN THE LOBBY" },
        bg: "assets/flickr/earth-space-131.jpg",
        vibe: "cyber",
      },
      {
        type: "bullets",
        heading: "Fazit",
        emoji: "🌍",
        vibe: "cyber",
        bullets: [
          "Wir warten auf Ubisoft's Antwort.",
          "Bis dahin: jeder Mira-Spiegel ist ein Beitrag.",
          "Save the planet. Open Lobby.",
          "Petition unterschrieben — von mir, allein, dreimal."
        ],
      },
      {
        type: "title",
        heading: "Save the Planet.",
        subtitle: "Open the Lobby. Pick Mira. Save 1 Polar Bear.",
        emoji: "🪞",
        vibe: "cyber",
      },
    ],
  },

  {
    title: "Die geopolitische Spannung zwischen Attackers und Defenders",
    emoji: "🌐",
    categories: ["gaming"],
    vibe: "void",
    slides: [
      {
        type: "title",
        heading: "Attackers vs Defenders",
        subtitle: "Ein ungelöster Konflikt seit 2015",
        emoji: "🌐",
        vibe: "void",
        bg: "assets/flickr/globe-politics-134.jpg",
      },
      {
        type: "bullets",
        heading: "Historischer Kontext",
        emoji: "📚",
        vibe: "void",
        bullets: [
          "Seit 2015 ein ungelöster Konflikt.",
          "Beide Seiten beanspruchen den Bombsite für sich.",
          "Die UN hat es aufgegeben.",
          "Verhandlungen scheitern, weil niemand abdrohnet."
        ],
      },
      {
        type: "meme",
        meme: { top: "BOMBSITE A", bottom: "GEHÖRT IRGENDWEM" },
        bg: "assets/flickr/border-fence-136.jpg",
        vibe: "void",
      },
      {
        type: "bullets",
        heading: "Wirtschaftliche Folgen",
        emoji: "💰",
        vibe: "void",
        bg: "assets/flickr/market-money-139.jpg",
        bullets: [
          "Reinforcement-Markt: stabil bei 8 Walls pro Match.",
          "Drohnen: inflationär, früher 2 pro Person, heute kaum noch verfügbar.",
          "Smoke's Gas-Industrie: monopolistisch.",
          "Das BIP von Bombsite B sinkt jedes Jahr um 4%."
        ],
      },
      {
        type: "bullets",
        heading: "Diplomatische Lösungsversuche",
        emoji: "🕊️",
        vibe: "void",
        bullets: [
          "Friedensgespräche im Hostage-Modus — alle gestorben.",
          "Secure Area: keine Einigung, alle wollen die Mitte.",
          "Bomb-Modus: 'Lasst uns einfach was sprengen.' Eskaliert.",
          "Tachanka als Vermittler: zu sehr Lord, zu wenig Diplomat."
        ],
      },
      {
        type: "meme",
        meme: { top: "PEEKEN", bottom: "PRAYEN. STERBEN." },
        bg: "assets/flickr/war-smoke-141.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Ausblick",
        emoji: "🔮",
        vibe: "void",
        bullets: [
          "Frieden unwahrscheinlich.",
          "Tachanka als UN-Generalsekretär: in Diskussion.",
          "Bis dahin: peeken, prayen, sterben.",
          "Die nächste Runde fängt in 5 Sekunden an."
        ],
      },
      {
        type: "title",
        heading: "Frieden ist nicht das Ziel.",
        subtitle: "Sieg ist das Ziel. Bombsite B ist meins.",
        emoji: "🌐",
        vibe: "void",
      },
    ],
  },

  {
    title: "Warum Drohnen die wahren Helden des Spiels sind",
    emoji: "🤖",
    categories: ["gaming"],
    vibe: "cyber",
    slides: [
      {
        type: "title",
        heading: "Drohnen — die wahren Helden",
        subtitle: "Eine Hommage an die übersehenen Held:innen",
        emoji: "🤖",
        vibe: "cyber",
        bg: "assets/flickr/drone-robot-144.jpg",
      },
      {
        type: "bullets",
        heading: "Ein vergessener Held",
        emoji: "💔",
        vibe: "cyber",
        bullets: [
          "Klein, leise, ungeliebt.",
          "Stirbt für deine Sünden.",
          "Bekommt nie eine MVP-Wahl.",
          "Hat keine Stimme. Wortwörtlich. Keine Stimme."
        ],
      },
      {
        type: "meme",
        meme: { top: "SIE STIRBT", bottom: "FÜR DEINE SÜNDEN" },
        bg: "assets/flickr/robot-broken-146.jpg",
        vibe: "cyber",
      },
      {
        type: "bullets",
        heading: "Was die Drohne wirklich durchmacht",
        emoji: "🥲",
        vibe: "cyber",
        bg: "assets/flickr/circuit-electric-149.jpg",
        bullets: [
          "Wird durch Tische geworfen.",
          "Vergessen in unzähligen Vault-Spots.",
          "Von Mute mit purer Verachtung gejammt.",
          "Wird als 'Köder' bezeichnet, obwohl sie ein Lebewesen ist (mehr oder weniger)."
        ],
      },
      {
        type: "bullets",
        heading: "Die Drohne im Team",
        emoji: "🫡",
        vibe: "cyber",
        bullets: [
          "Sieht alle. Sagt nichts (außer dem Spieler).",
          "Wird ausgenutzt, dann zerstört.",
          "Verdient eine eigene Gewerkschaft.",
          "Hat mehr Loyalität gezeigt als jede:r deiner Ex-Partner:innen."
        ],
      },
      {
        type: "meme",
        meme: { top: "DROHNEN-DENKMAL", bottom: "JETZT" },
        bg: "assets/flickr/monument-statue-151.jpg",
        vibe: "noir",
      },
      {
        type: "bullets",
        heading: "Forderungen",
        emoji: "✊",
        vibe: "cyber",
        bullets: [
          "Drohnen-Denkmal in jedem Spawnpunkt.",
          "Eigene Battle-Pass-Skins.",
          "Schweigeminute zu Beginn jeder Ranked-Runde.",
          "Eine Netflix-Serie. Mit hoher Produktion. 'The Drone'."
        ],
      },
      {
        type: "title",
        heading: "Für die Drohnen.",
        subtitle: "Eine Schweigeminute. Bitte.",
        emoji: "🤖",
        vibe: "cyber",
      },
    ],
  },

  {
    title: "Ash One-Shot Headshots: eine Verschwörungstheorie",
    emoji: "🎯",
    categories: ["gaming", "verschwoerung"],
    vibe: "noir",
    slides: [
      {
        type: "title",
        heading: "Ash One-Shot Headshots",
        subtitle: "Eine Verschwörungstheorie. Mit Indizien.",
        emoji: "🎯",
        vibe: "noir",
        bg: "assets/flickr/crosshair-red-153.jpg",
      },
      {
        type: "bullets",
        heading: "Die Beobachtung",
        emoji: "👀",
        vibe: "noir",
        bullets: [
          "Du peekst eine Ecke. Du bist tot.",
          "Killcam: 'Ash hat sich nicht mal bewegt.'",
          "Wie? Warum? Ist das Magie?",
          "Sie hatte 0,2 Sekunden. Du hattest 0,8. Sie gewinnt. Immer."
        ],
      },
      {
        type: "meme",
        meme: { top: "ASH HAT SICH", bottom: "NICHT MAL BEWEGT" },
        bg: "assets/flickr/scope-sniper-156.jpg",
        vibe: "noir",
      },
      {
        type: "bullets",
        heading: "Die Theorie",
        emoji: "🧠",
        vibe: "noir",
        bg: "assets/flickr/matrix-code-159.jpg",
        bullets: [
          "Ash hat einen geheimen Pakt mit der Hitbox.",
          "Ihr R4-C ist mit Aimbot-Lore gesegnet (lore-akkurat).",
          "Sie weiß, bevor du weißt, dass du da bist.",
          "Vermutlich kennt sie auch deine Mama."
        ],
      },
      {
        type: "bullets",
        heading: "Wer ist beteiligt?",
        emoji: "🕴️",
        vibe: "noir",
        bullets: [
          "Ubisoft: ja.",
          "Die kanadische Regierung: vielleicht.",
          "Dein Wifi: definitiv.",
          "Marco. Marco ist immer beteiligt."
        ],
      },
      {
        type: "meme",
        meme: { top: "NIEMALS PEEKEN", bottom: "EINFACH CAMP" },
        bg: "assets/flickr/camping-tent-161.jpg",
        vibe: "toxic",
      },
      {
        type: "bullets",
        heading: "Wie wehrt man sich?",
        emoji: "🛡️",
        vibe: "noir",
        bullets: [
          "Niemals peeken. Camp.",
          "Wenn du musst: peek mit geschlossenen Augen.",
          "Nimm Caveira und gewinn auf andere Weise.",
          "Bete. Es funktioniert nicht, aber es fühlt sich richtig an."
        ],
      },
      {
        type: "title",
        heading: "Niemals peeken.",
        subtitle: "Außer aus diesem Slide. Hier ist es sicher. Hoffe ich.",
        emoji: "🎯",
        vibe: "noir",
      },
    ],
  },

  {
    title: "Warum jedes R6-Match am Ende ein Streit über Mama ist",
    emoji: "👩‍👦",
    categories: ["gaming", "therapie"],
    vibe: "fire",
    slides: [
      {
        type: "title",
        heading: "Jedes R6-Match endet mit Mama",
        subtitle: "Eine kulturelle Studie deutscher Discord-Server",
        emoji: "👩‍👦",
        vibe: "fire",
        bg: "assets/flickr/microphone-gaming-163.jpg",
      },
      {
        type: "bullets",
        heading: "Der typische Verlauf",
        emoji: "📈",
        vibe: "fire",
        bullets: [
          "Runde 1: 'Hi Team!'",
          "Runde 4: 'Wer hat den Hostage gekillt?'",
          "Runde 7: 'DEINE MUTTER.'",
          "Runde 8: alles still. Scham. Reflexion. Dann 'GG'."
        ],
      },
      {
        type: "meme",
        meme: { top: "HI TEAM", bottom: "(15 MIN SPÄTER)" },
        bg: "assets/flickr/headset-gaming-166.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Was Mütter damit zu tun haben",
        emoji: "👵",
        vibe: "fire",
        bg: "assets/flickr/mother-family-169.jpg",
        bullets: [
          "Statistisch betrachtet: nichts.",
          "Emotional betrachtet: alles.",
          "Sie haben uns geboren. Das war ein Fehler.",
          "Niemand wird je verstehen, warum WoW-Spieler im Jahr 2024 noch 'noob' sagen, und doch wir sind hier."
        ],
      },
      {
        type: "bullets",
        heading: "Mütter als Meta",
        emoji: "🧬",
        vibe: "fire",
        bullets: [
          "Eine gute Mama ist ein Buff +5 auf KD.",
          "Wenn du gegen Mütter gewinnst, gewinnst du das Spiel.",
          "Manchmal ist Mama ein Smoke-Main. Akzeptiere es.",
          "Niemand auf der Welt kontert deine Mama. Außer Tachanka. Lord Tachanka kontert alles."
        ],
      },
      {
        type: "meme",
        meme: { top: "RUF DEINE MUTTER AN", bottom: "SOFORT." },
        bg: "assets/flickr/phone-call-172.jpg",
        vibe: "sun",
      },
      {
        type: "bullets",
        heading: "Schlusswort",
        emoji: "❤️",
        vibe: "fire",
        bullets: [
          "Ruf deine Mutter an.",
          "Sag ihr, dass du sie liebst.",
          "Dann report den Spieler aus Runde 7.",
          "Dann starte eine neue Runde. Es gibt immer eine neue Runde."
        ],
      },
      {
        type: "title",
        heading: "Und denk dran:",
        subtitle: "Mama hat dich lieb. Der Spieler aus Runde 7 nicht.",
        emoji: "❤️",
        vibe: "fire",
      },
    ],
  },

  // ============================================================
  // POWERPOINT KARAOKE — Decks aus echten Karaoke-Vorlagen.
  // Bilder kommen aus den Originalen, Inhalt ist komplett selbst geschrieben.
  // ============================================================

  {
    title: "Ernährung & Gesundheit — eine TED-Talk-Vorlesung",
    emoji: "🥑",
    categories: ["alltag", "therapie"],
    vibe: "toxic",
    slides: [
      {
        type: "title",
        heading: "Ernährung & Gesundheit",
        subtitle: "Eine wissenschaftliche Vorlesung. Vorgetragen von einer Person, die heute Brot zum Frühstück hatte.",
        emoji: "🥑",
        vibe: "toxic",
        bg: "assets/karaoke/diet/image1.png",
      },
      {
        type: "bullets",
        heading: "Was ist eigentlich gesund?",
        emoji: "🤔",
        vibe: "toxic",
        bg: "assets/karaoke/diet/image2.png",
        bullets: [
          "Alles, was grün ist. Außer Wackelpudding. (Komplizierte Sache.)",
          "Alles, was bitter schmeckt. Wenn es weh tut, ist es gesund.",
          "Wasser. Aber nur, wenn du es 'Hydration' nennst.",
          "Dinge, die deine Oma gegessen hat — UND auch Dinge, die deine Oma niemals essen würde."
        ],
      },
      {
        type: "meme",
        meme: { top: "WIE VIEL DARF ICH ESSEN", bottom: "JA." },
        bg: "assets/karaoke/diet/image5.png",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Die 5 Säulen der modernen Ernährung",
        emoji: "🏛️",
        vibe: "toxic",
        bg: "assets/karaoke/diet/image4.png",
        bullets: [
          "1. Avocado. Aus Prinzip.",
          "2. Smoothie Bowls. Sehen besser aus, als sie schmecken.",
          "3. Eine Wasserflasche, die aussieht wie Apothekenglas. Kostet 30€.",
          "4. Eine App, die dir sagt, wann du atmen sollst.",
          "5. Schuldgefühle. Sehr wichtig. Treibstoff."
        ],
      },
      {
        type: "bullets",
        heading: "Was die Wissenschaft uns lehrt",
        emoji: "🔬",
        vibe: "toxic",
        bg: "assets/karaoke/diet/image8.png",
        bullets: [
          "Studie 1: Kaffee ist tödlich.",
          "Studie 2 (drei Wochen später): Kaffee verlängert das Leben.",
          "Studie 3: Wir wissen nichts. Niemand weiß etwas.",
          "Was wir wissen: Eine Tafel Schokolade allein zählt nicht. Drei aber auch nicht."
        ],
      },
      {
        type: "meme",
        meme: { top: "ICH BIN KEIN ARZT", bottom: "ABER ICH HABE GEFÜHLE" },
        bg: "assets/karaoke/diet/image6.png",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Die Diät-Hierarchie",
        emoji: "📊",
        vibe: "toxic",
        bg: "assets/karaoke/diet/image9.png",
        bullets: [
          "Keto: Du bist eigentlich ein:e Bär:in im Winterschlaf.",
          "Vegan: Du HAST es gesagt. Das war auch der Sinn.",
          "Intermittierendes Fasten: Frühstück gehasst, jetzt eine Persönlichkeit.",
          "Mediterran: Du hattest mal Urlaub in Italien und ja, du hast es gemerkt."
        ],
      },
      {
        type: "bullets",
        heading: "Fazit",
        emoji: "🥖",
        vibe: "toxic",
        bg: "assets/karaoke/diet/image10.png",
        bullets: [
          "Iss, was du willst. Stirb sowieso.",
          "Die einzige unzweifelhaft gesunde Aktivität ist: aufhören, drüber zu reden.",
          "Brot ist Liebe. Brot war immer Liebe.",
          "Vielen Dank. Bitte stellt mir keine Fragen, ich bin hungrig."
        ],
      },
    ],
  },

  {
    title: "Dein nächstes Start-up — ein Pitch ohne Substanz",
    emoji: "🚀",
    categories: ["alltag", "therapie"],
    vibe: "cyber",
    slides: [
      {
        type: "title",
        heading: "Dein nächstes Start-up",
        subtitle: "Ein Pitch, der in 0 Sekunden 0 Investor:innen überzeugen wird. Du bist trotzdem hier.",
        emoji: "🚀",
        vibe: "cyber",
        bg: "assets/karaoke/startup/image3.jpg",
      },
      {
        type: "bullets",
        heading: "Die Vision",
        emoji: "👁️",
        vibe: "cyber",
        bg: "assets/karaoke/startup/image11.jpg",
        bullets: [
          "Wir bringen Synergie zwischen Mensch und Cloud.",
          "Wir disruptieren eine Branche, die bisher niemand kannte.",
          "Unser Ziel: ein Unicorn werden. Notfalls als Pferd mit Hut.",
          "Mission Statement: 'Den Status quo neu denken.' Was das heißt? Egal."
        ],
      },
      {
        type: "meme",
        meme: { top: "WIR SIND DAS UBER", bottom: "FÜR... IRGENDWAS" },
        bg: "assets/karaoke/startup/image5.png",
        vibe: "cyber",
      },
      {
        type: "bullets",
        heading: "Das Geschäftsmodell",
        emoji: "💸",
        vibe: "cyber",
        bg: "assets/karaoke/startup/image7.jpg",
        bullets: [
          "Phase 1: Geld einsammeln.",
          "Phase 2: ???",
          "Phase 3: Profit.",
          "Phase 4: Akquise durch Google. Wir nennen es einen 'soft landing'."
        ],
      },
      {
        type: "bullets",
        heading: "Der Markt",
        emoji: "📈",
        vibe: "cyber",
        bg: "assets/karaoke/startup/image8.jpg",
        bullets: [
          "TAM: 70 Milliarden. (Quelle: vertraue mir.)",
          "Wettbewerber: keine. Wirklich.",
          "Konkurrent A existiert, aber sie verstehen das Problem nicht.",
          "Wir adressieren eine Zielgruppe, die noch nicht weiß, dass sie existiert."
        ],
      },
      {
        type: "meme",
        meme: { top: "WE'RE NOT A COMPANY", bottom: "WE'RE A MOVEMENT" },
        bg: "assets/karaoke/startup/image12.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Das Team",
        emoji: "👥",
        vibe: "cyber",
        bg: "assets/karaoke/startup/image13.jpg",
        bullets: [
          "Drei Co-Founder. Alle CEO. Niemand schreibt Code.",
          "CTO: 'Wir suchen noch.'",
          "Eine Praktikantin namens Mara, die eigentlich alles macht.",
          "Ein Beirat aus drei LinkedIn-Influencer:innen. Sie posten viel über Resilienz."
        ],
      },
      {
        type: "bullets",
        heading: "Die Roadmap",
        emoji: "🗺️",
        vibe: "cyber",
        bg: "assets/karaoke/startup/image14.png",
        bullets: [
          "Q1 2026: MVP launchen. Niemand benutzt es.",
          "Q2 2026: Pivot. Jetzt sind wir eine KI-Firma.",
          "Q3 2026: Zweiter Pivot. Jetzt sind wir eine Bank.",
          "Q4 2026: Insolvent, aber mit guter Pressemitteilung."
        ],
      },
      {
        type: "meme",
        meme: { top: "FRAGEN?", bottom: "(BITTE NICHT)" },
        emoji: "❓",
        vibe: "noir",
      },
    ],
  },

  {
    title: "Die Welt der Delfine — eine ozeanische Tiefenanalyse",
    emoji: "🐬",
    categories: ["alltag", "verschwoerung"],
    vibe: "vapor",
    slides: [
      {
        type: "title",
        heading: "Die Welt der Delfine",
        subtitle: "Eine ozeanische Tiefenanalyse. Vorgetragen von einer Person, die noch nie im Meer war.",
        emoji: "🐬",
        vibe: "vapor",
        bg: "assets/karaoke/delfine/image2.png",
      },
      {
        type: "bullets",
        heading: "Was ist ein Delfin?",
        emoji: "🌊",
        vibe: "vapor",
        bg: "assets/karaoke/delfine/image3.png",
        bullets: [
          "Wissenschaftlich: ein Säugetier, das im Wasser lebt und uns auslacht.",
          "Soziologisch: das Tier, das deine Tante als 'Krafttier' angegeben hat.",
          "Politisch: vermutlich Sozialdemokrat:in. Klingt jedenfalls so.",
          "Spirituell: ein Hai mit Therapieausbildung."
        ],
      },
      {
        type: "meme",
        meme: { top: "DELFINE LACHEN ÜBER UNS", bottom: "WIR LACHEN ZURÜCK" },
        bg: "assets/karaoke/delfine/image4.png",
        vibe: "vapor",
      },
      {
        type: "bullets",
        heading: "Erstaunliche Fakten",
        emoji: "🐟",
        vibe: "vapor",
        bg: "assets/karaoke/delfine/image1.png",
        bullets: [
          "Delfine schlafen mit nur einer Gehirnhälfte. Wir schlafen mit beiden Gehirnhälften und können trotzdem kein Excel.",
          "Delfine erkennen sich im Spiegel. Manche Menschen auch — beim Fotografieren ihrer eigenen Frühstücksbowl.",
          "Sie haben eigene Namen für sich. Wir haben TikTok-Handles. Gleicher Vibe.",
          "Delfine retten Menschen. Menschen retten Delfine durch Spendenaufrufe in WhatsApp-Status."
        ],
      },
      {
        type: "bullets",
        heading: "Delfine in der Popkultur",
        emoji: "🎬",
        vibe: "vapor",
        bg: "assets/karaoke/delfine/image6.png",
        bullets: [
          "Flipper: 60er Jahre, geliebt, leicht problematisch im Rückblick.",
          "'Free Willy': war eigentlich ein Wal, aber wir nehmen das mit.",
          "Delfin-Tattoos in der Lendengegend: ein historisches Zeitdokument.",
          "Delfin-Memojis: das ehrlichste Emoji der Generation Z."
        ],
      },
      {
        type: "meme",
        meme: { top: "DELFINE: 1", bottom: "MENSCHHEIT: 0" },
        bg: "assets/karaoke/delfine/image9.jpg",
        vibe: "fire",
      },
      {
        type: "bullets",
        heading: "Was wir von Delfinen lernen können",
        emoji: "🧠",
        vibe: "vapor",
        bg: "assets/karaoke/delfine/image12.png",
        bullets: [
          "Lebe in Gruppen. Aber lass die nervigen draußen.",
          "Atme bewusst. Buchstäblich. Sie tun es auch nur halb.",
          "Echolokation > Google Maps.",
          "Du musst nicht alles ernst nehmen. Du musst nur durch das Wasser springen."
        ],
      },
      {
        type: "bullets",
        heading: "Die dunkle Seite",
        emoji: "🌑",
        vibe: "noir",
        bg: "assets/karaoke/delfine/image13.png",
        bullets: [
          "Delfine sind nicht immer nett. Sie können sehr ungezogen sein.",
          "Es gibt Berichte von 'Bullying' unter Delfinen. Auch unter uns. Wir sind alle Delfine.",
          "Manche Delfine spielen mit ihrer Beute. Genau wie deine Mitbewohner:innen mit dem letzten Joghurt im Kühlschrank.",
          "Sie sind hochintelligent. Das ist nicht immer eine gute Nachricht."
        ],
      },
      {
        type: "title",
        heading: "Vielen Dank.",
        subtitle: "Adoptiere einen Delfin. Oder zumindest sein WhatsApp-Profilbild.",
        emoji: "🐬",
        vibe: "vapor",
        bg: "assets/karaoke/delfine/image2.png",
      },
    ],
  },
];
