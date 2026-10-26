/*
 * כתיבה באנגלית: בדיקת משפטים סלחנית, עזרה בתרגום מעברית, והמסכים של "כותבים".
 *
 * Writing.compare(answer, target)  -> השוואה מילה־מילה (סלחנית לאותיות גדולות, פיסוק,
 *                                     קיצורים כמו I'm / I am ושגיאת הקלדה קטנה)
 * Writing.hebrewHelper(input, panel) -> מזהה עברית בתוך תיבת כתיבה ומציע תרגום והחלפה
 * Writing.setup(helpers)            -> מקבל מ-app.js את כלי הציור והניווט
 * Writing.screens.*                 -> המסכים (מופעלים מהניתוב ב-app.js)
 */
(function () {
  let H = null;
  const setup = (helpers) => { H = helpers; };

  /* ================= השוואת משפטים ================= */
  const CONTRACTIONS = {
    "i'm": "i am", "you're": "you are", "we're": "we are", "they're": "they are",
    "it's": "it is", "he's": "he is", "she's": "she is", "that's": "that is", "there's": "there is",
    "what's": "what is", "where's": "where is", "who's": "who is", "here's": "here is", "how's": "how is",
    "let's": "let us", "can't": "can not", "cannot": "can not", "won't": "will not", "shan't": "shall not"
  };
  // קיצורים שנכתבו בלי גרש (dont, Im) — נחשבים נכונים
  const NO_APOSTROPHE = {
    dont: "don't", doesnt: "doesn't", didnt: "didn't", cant: "can't", isnt: "isn't", arent: "aren't",
    wasnt: "wasn't", werent: "weren't", havent: "haven't", hasnt: "hasn't", hadnt: "hadn't",
    couldnt: "couldn't", wouldnt: "wouldn't", shouldnt: "shouldn't", im: "i'm", ive: "i've",
    youre: "you're", theyre: "they're", youve: "you've", weve: "we've", theyve: "they've",
    youll: "you'll", theyll: "they'll", thats: "that's", whats: "what's", theres: "there's",
    its: "it's", lets: "let's"
  };
  function expandWord(t) {
    if (NO_APOSTROPHE[t]) t = NO_APOSTROPHE[t];
    if (CONTRACTIONS[t]) return CONTRACTIONS[t].split(" ");
    if (/n't$/.test(t)) return [t.slice(0, -3), "not"];
    const m = t.match(/^(.+)'(ll|ve|re|d|m)$/);
    if (m) return [m[1], { ll: "will", ve: "have", re: "are", d: "would", m: "am" }[m[2]]];
    return [t.replace(/'/g, "")];
  }

  // מפרק טקסט למילים לתצוגה, ולרשימה "שטוחה" של מילים מנורמלות (כל אחת יודעת לאיזו מילת תצוגה היא שייכת)
  function tokenize(text) {
    const display = String(text || "").trim().split(/\s+/).filter(Boolean);
    const flat = [];
    display.forEach((tok, di) => {
      const t = tok.toLowerCase().replace(/[’‘`´]/g, "'").replace(/[^a-z0-9']+/g, "").replace(/^'+|'+$/g, "");
      if (!t) return;
      expandWord(t).forEach((n) => { if (n) flat.push({ n, di }); });
    });
    return { display, flat };
  }

  function editDistance(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++)
      for (let j = 1; j <= b.length; j++)
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }

  // 2 = זהה, 1 = שגיאת כתיב קטנה, 0 = שונה
  function similar(a, b) {
    if (a === b) return 2;
    const len = Math.min(a.length, b.length);
    const dist = editDistance(a, b);
    if ((len >= 4 && dist <= 1) || (len >= 8 && dist <= 2)) return 1;
    return 0;
  }

  function compare(answer, target) {
    const A = tokenize(answer), T = tokenize(target);
    const a = A.flat, t = T.flat, n = a.length, m = t.length;
    // LCS עם השוואה סלחנית
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--)
      for (let j = m - 1; j >= 0; j--)
        dp[i][j] = similar(a[i].n, t[j].n) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const aStat = new Array(n).fill("extra"), tStat = new Array(m).fill("missing"), typos = [];
    let i = 0, j = 0;
    while (i < n && j < m) {
      const s = similar(a[i].n, t[j].n);
      if (s && dp[i][j] === dp[i + 1][j + 1] + 1) {
        aStat[i] = tStat[j] = s === 2 ? "ok" : "typo";
        if (s === 1) typos.push([A.display[a[i].di], T.display[t[j].di]]);
        i++; j++;
      } else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
      else j++;
    }
    // סטטוס לכל מילת תצוגה
    const rollUp = (display, flat, stat, bad) => display.map((text, di) => {
      const mine = flat.map((f, k) => (f.di === di ? stat[k] : null)).filter(Boolean);
      let status = "ok";
      if (mine.some((s) => s === bad)) status = bad;
      else if (mine.some((s) => s === "typo")) status = "typo";
      return { text, status };
    });
    const matched = aStat.filter((s) => s !== "extra").length;
    return {
      exact: n > 0 && !aStat.includes("extra") && !tStat.includes("missing"),
      recall: m ? matched / m : 0,
      precision: n ? matched / n : 0,
      answer: rollUp(A.display, a, aStat, "extra"),
      target: rollUp(T.display, t, tStat, "missing"),
      typos
    };
  }

  /* ---- ביטויים מהשיעורים שהופיעו בטקסט (לעידוד) ---- */
  let phraseList = null;
  function phrasesUsed(text) {
    if (!phraseList) {
      phraseList = [];
      LESSONS.forEach((L) => L.words.forEach((w) => {
        const p = w.en.toLowerCase().replace(/[’']/g, "'");
        if (p.includes(" ") || p.length >= 7) phraseList.push({ p, en: w.en });
      }));
    }
    const t = " " + String(text || "").toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ") + " ";
    const found = [];
    phraseList.forEach(({ p, en }) => {
      const pp = " " + p.replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim() + " ";
      if (t.includes(pp) && !found.some((f) => f.toLowerCase() === en.toLowerCase())) found.push(en);
    });
    return found;
  }

  /* ================= עזרה בעברית בתוך תיבת כתיבה ================= */
  function hebrewHelper(input, panel, opts) {
    opts = opts || {};
    let timer = null, lastKey = "";
    const state = { used: false, pairs: [] };
    const { esc, sayBtn } = H;

    async function run(force) {
      const parts = Translate.hebrewParts(input.value);
      if (!parts.length) { panel.hidden = true; panel.innerHTML = ""; lastKey = ""; state.pairs = []; return false; }
      const key = parts.join("|");
      if (key === lastKey && !force) return true;
      lastKey = key;
      panel.hidden = false;
      panel.innerHTML = `<div class="he-help-title">כתבתם בעברית — מתרגם לאנגלית…</div>`;
      try {
        const results = [];
        for (const p of parts) results.push(Object.assign({ he: p }, await Translate.translate(p, "he", "en")));
        if (key !== lastKey) return true;
        state.pairs = results;
        panel.innerHTML = `
          <div class="he-help-title">כתבתם בעברית. כך אומרים את זה באנגלית:</div>
          ${results.map((r) => `<div class="he-pair"><span class="he-src">${esc(r.he)}</span><span class="he-arrow" aria-hidden="true">←</span><span class="en he-out">${esc(r.text)}</span>${sayBtn(r.text, "", { mini: true })}</div>`).join("")}
          <div class="btn-row" style="margin-top:.6rem"><button class="btn btn-primary" data-act="heReplace">להחליף באנגלית בתוך הטקסט</button></div>
          <div class="he-via">${results.some((r) => r.via === "online") ? "התרגום נעשה דרך האינטרנט." : "התרגום נעשה במחשב עצמו."}</div>`;
      } catch (e) {
        if (key !== lastKey) return true;
        panel.innerHTML = `
          <div class="he-help-title">כתבתם בעברית, אבל כרגע לא הצלחתי לתרגם (אולי אין חיבור לאינטרנט).</div>
          <div class="btn-row" style="margin-top:.6rem"><a class="btn btn-secondary" href="${esc(Translate.webLink(parts.join(" ... ")))}" target="_blank" rel="noopener">לפתוח בגוגל תרגום</a></div>`;
      }
      return true;
    }

    function replace() {
      let text = input.value;
      state.pairs.forEach(({ he, text: en }) => {
        const pos = text.indexOf(he);
        if (pos < 0 || !en) return;
        const before = text.slice(0, pos).trimEnd();
        const atStart = !before || /[.!?]$/.test(before);
        let out = en;
        if (!atStart && !/^I\b/.test(out)) out = out[0].toLowerCase() + out.slice(1);
        if (!/[.!?]$/.test(he)) out = out.replace(/[.]$/, "");
        text = text.slice(0, pos) + out + text.slice(pos + he.length);
      });
      input.value = text.replace(/\s{2,}/g, " ");
      state.used = true;
      panel.hidden = true; panel.innerHTML = ""; lastKey = "";
      input.dispatchEvent(new Event("input"));
      input.focus();
    }

    input.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => run(false), opts.delay || 1100);
    });
    return { run, replace, state };
  }

  /* ---- עזר: הכנסת טקסט במקום הסמן ---- */
  function insertAtCursor(input, text) {
    const s = input.selectionStart != null ? input.selectionStart : input.value.length;
    const e = input.selectionEnd != null ? input.selectionEnd : input.value.length;
    const before = input.value.slice(0, s), after = input.value.slice(e);
    const pad = before && !/\s$/.test(before) ? " " : "";
    const tail = after && !/^\s/.test(after) ? " " : (after ? "" : " ");
    input.value = before + pad + text + tail + after;
    const pos = (before + pad + text + tail).length;
    input.focus();
    try { input.setSelectionRange(pos, pos); } catch (err) { /* ignore */ }
    input.dispatchEvent(new Event("input"));
  }

  const stripHebrew = (t) => String(t || "").replace(/[֐-׿]+/g, " ").replace(/\s+/g, " ").trim();
  const wordCount = (t) => (stripHebrew(t).match(/[A-Za-z']+/g) || []).length;

  /* ================= המסכים ================= */
  const screens = {};

  /* ---- מסך הכתיבה הראשי ---- */
  screens.hub = function () {
    const { render, icon, go, S } = H;
    const n = (S().journal || []).length, mine = (S().custom || []).length;
    render(`
      <div class="screen-head"><h1>כותבים</h1>
        <p class="muted">כותבים משפטים באנגלית, צעד אחר צעד. לא יודעים איך אומרים משהו? כתבו אותו בעברית — ונתרגם לאנגלית.</p>
      </div>
      <div class="practice-grid">
        <button class="game-card featured write-main" data-act="guided">
          <span class="gt">${icon("pen")} כתיבת משפטים</span>
          <span class="gd">משפט בעברית — כותבים אותו באנגלית. יש ביטוי מפתח, רמזים, ובדיקה שמראה בדיוק מה כדאי לתקן.</span>
          <span class="gm">${H.writeLen()} משפטים בכל תרגול</span>
        </button>
        <button class="game-card" data-act="topics"><span class="gt">כתיבת משפטים לפי נושא</span><span class="gd">בוחרים שיעור וכותבים רק את המשפטים שלו</span></button>
        <button class="game-card" data-act="free"><span class="gt">כתיבה חופשית</span><span class="gd">כותבים על היום, על זיכרון, הודעה לנכדים — עם ביטויים שיעזרו</span></button>
        <button class="game-card" data-act="translator"><span class="gt">מתרגם</span><span class="gd">כותבים בעברית ומקבלים באנגלית, עם השמעה${mine ? ` · ${mine} ביטויים שמורים` : ""}</span></button>
        <button class="game-card" data-act="journal"><span class="gt">המחברת שלי</span><span class="gd">${n ? `${n} טקסטים שכתבת` : "כל מה שתכתבו בכתיבה החופשית יישמר כאן"}</span></button>
      </div>
    `, {
      guided: () => go("#/write/guided"),
      topics: () => go("#/write/topics"),
      free: () => go("#/write/free"),
      translator: () => go("#/translate"),
      journal: () => go("#/journal")
    });
  };

  /* ---- כתיבת משפטים מודרכת ---- */
  screens.guided = function (lessonId) {
    const { runSession, go, practicePool } = H;
    let ids, title;
    if (lessonId) {
      const L = LESSONS.find((x) => x.id === lessonId);
      if (!L) return go("#/write/topics");
      ids = L.words.map((w) => w.id);
      title = "כתיבה · " + L.title;
    } else {
      ids = practicePool().ids.filter((id) => !SRS.wordIndex[id].custom);
      title = "כתיבת משפטים";
    }
    const start = () => {
      const chosen = SRS.pickSession(H.writeLen(), ids);
      runSession({
        title,
        items: chosen.map((id) => ({ wordId: id, type: "write" })),
        pool: ids,
        restart: start,
        menu: "#/write"
      });
    };
    start();
  };

  screens.topics = function () {
    const { render, esc, go, LEVEL_NAMES } = H;
    let html = `<div class="screen-head"><h1>כתיבה לפי נושא</h1><p class="muted">בוחרים נושא וכותבים את המשפטים שלו באנגלית.</p></div>`;
    let level = 0;
    LESSONS.forEach((L, i) => {
      if (L.level !== level) {
        if (level) html += `</div>`;
        level = L.level;
        html += `<h2 class="level-title">${LEVEL_NAMES[level] || ""}</h2><div class="lesson-list">`;
      }
      html += `<button class="lesson-row" data-act="open" data-arg="${L.id}">
        <span class="lesson-num">${i + 1}</span>
        <span><span class="t">${esc(L.title)}</span><br><span class="s">${esc(L.subtitle)}</span></span>
        <span class="status">${L.words.length} משפטים</span></button>`;
    });
    html += `</div>`;
    render(html, { open: (id) => go("#/write/topic/" + id) });
  };

  /* ---- כתיבה חופשית: בחירת נושא ---- */
  screens.freeList = function () {
    const { render, esc, go, S } = H;
    const drafts = S().drafts || {};
    const LV = { 1: "קל", 2: "בינוני", 3: "בינוני", 4: "מתקדם", 5: "מתקדם מאוד" };
    render(`
      <div class="screen-head"><h1>כתיבה חופשית</h1><p class="muted">בוחרים נושא וכותבים כמה משפטים. אין תשובה נכונה אחת — העיקר לנסות.</p></div>
      <div class="lesson-list">
        ${WRITING_PROMPTS.map((p, i) => `
          <button class="lesson-row" data-act="open" data-arg="${p.id}">
            <span class="lesson-num">${i + 1}</span>
            <span><span class="t">${esc(p.title)}</span><br><span class="s en">${esc(p.en)}</span></span>
            <span class="status ${drafts[p.id] ? "next" : ""}">${drafts[p.id] ? "יש טיוטה" : LV[p.level]}</span>
          </button>`).join("")}
      </div>
    `, { open: (id) => go("#/write/free/" + id) });
  };

  /* ---- כתיבה חופשית: העורך ---- */
  screens.freeEditor = function (promptId) {
    const { render, esc, icon, sayBtn, go, toast, S } = H;
    const p = WRITING_PROMPTS.find((x) => x.id === promptId);
    if (!p) return go("#/write/free");
    const draft = (S().drafts || {})[p.id] || "";
    const acts = {
      chip: (txt) => insertAtCursor(ta, txt),
      read: () => {
        const t = stripHebrew(ta.value);
        if (!t) { toast("עוד אין טקסט באנגלית להקראה."); return; }
        Speech.speak(t);
      },
      back: async () => {
        const t = stripHebrew(ta.value);
        const out = document.getElementById("backOut");
        if (!t) { toast("עוד אין טקסט באנגלית."); return; }
        out.hidden = false;
        out.innerHTML = `<span class="faint">מתרגם…</span>`;
        try {
          const r = await Translate.translate(t, "en", "he");
          out.innerHTML = `<div class="lbl-small">כך הטקסט שלך נשמע בעברית:</div><div class="back-he">${esc(r.text)}</div>
            <div class="faint small">אם המשמעות יצאה כמו שהתכוונת — כתבת נכון!</div>`;
        } catch (e) {
          out.innerHTML = `<span>לא הצלחתי לתרגם כרגע.</span> <a href="${esc(Translate.webLink(t, "en", "he"))}" target="_blank" rel="noopener">לפתוח בגוגל תרגום</a>`;
        }
      },
      save: () => {
        const text = ta.value.trim();
        if (!text) { toast("עוד לא נכתב כלום."); return; }
        S().journal = S().journal || [];
        S().journal.unshift({ id: "j" + Date.now(), promptId: p.id, title: p.title, text, date: Date.now() });
        if (S().drafts) delete S().drafts[p.id];
        Store.markPracticeDay();
        Store.save();
        toast("נשמר במחברת. כל הכבוד!");
        go("#/journal");
      },
      clear: () => { if (confirm("למחוק את מה שכתבת בנושא הזה?")) { ta.value = ""; ta.dispatchEvent(new Event("input")); ta.focus(); } },
      heReplace: () => helper.replace()
    };
    render(`
      <div class="screen-head"><h2>${esc(p.title)}</h2></div>
      <article class="card prompt-card">
        <p class="prompt-he">${esc(p.he)}</p>
        <div class="prompt-en"><span class="en">${esc(p.en)}</span>${sayBtn(p.en, "", { mini: true })}</div>
        <div class="chip-group"><span class="lbl-small">אפשר להתחיל כך:</span>
          ${p.starters.map((s) => `<button class="chip-btn en" data-act="chip" data-arg="${esc(s)}">${esc(s)}</button>`).join("")}</div>
        <div class="chip-group"><span class="lbl-small">ביטויים שיכולים לעזור:</span>
          ${p.phrases.map((s) => `<button class="chip-btn en" data-act="chip" data-arg="${esc(s)}">${esc(s)}</button>`).join("")}</div>
      </article>
      <article class="card writer">
        <label for="freeIn" class="lbl-small">הטקסט שלך (באנגלית — ומילה שלא יודעים, בעברית):</label>
        <textarea id="freeIn" class="write-input big" dir="ltr" lang="en" spellcheck="true" rows="7" data-autofocus>${esc(draft)}</textarea>
        <div class="he-help" id="heHelp" hidden aria-live="polite"></div>
        <div class="write-meta" id="meta"></div>
        <div class="btn-row" style="margin-top:1rem">
          <button class="btn btn-primary btn-big" data-act="save">${icon("check")} שמירה במחברת</button>
          <button class="btn btn-secondary" data-act="read">${icon("speaker")} להקריא לי</button>
          <button class="btn btn-secondary" data-act="back">מה כתבתי? (תרגום לעברית)</button>
          <button class="btn btn-quiet" data-act="clear">ניקוי</button>
        </div>
        <div class="back-out" id="backOut" hidden aria-live="polite"></div>
        <p class="faint small" style="margin-top:.8rem">מילה עם קו אדום מתחתיה — כנראה יש בה שגיאת כתיב. קליק ימני עליה מציע תיקון.</p>
      </article>
    `, acts);
    const ta = document.getElementById("freeIn");
    const helper = hebrewHelper(ta, document.getElementById("heHelp"));
    const meta = document.getElementById("meta");
    function updateMeta() {
      S().drafts = S().drafts || {};
      if (ta.value.trim()) S().drafts[p.id] = ta.value; else delete S().drafts[p.id];
      Store.save();
      const words = wordCount(ta.value);
      const used = phrasesUsed(ta.value);
      meta.innerHTML = words
        ? `<span>${words} מילים באנגלית</span>${used.length ? `<span class="used">השתמשת בביטויים מהשיעורים: ${used.map((u) => `<b class="en">${esc(u)}</b>`).join(", ")}</span>` : ""}`
        : "";
    }
    let t2 = null;
    ta.addEventListener("input", () => { clearTimeout(t2); t2 = setTimeout(updateMeta, 400); });
    updateMeta();
    if (draft) helper.run(false);
  };

  /* ---- המחברת ---- */
  screens.journal = function () {
    const { render, esc, sayBtn, go, S } = H;
    const list = S().journal || [];
    const fmt = (d) => new Date(d).toLocaleDateString("he-IL", { day: "numeric", month: "long", year: "numeric" });
    render(`
      <div class="screen-head"><h1>המחברת שלי</h1><p class="muted">כל מה שכתבת בכתיבה החופשית. אפשר לחזור, לקרוא ולשמוע.</p></div>
      <div class="btn-row" style="margin-bottom:1rem"><button class="btn btn-primary" data-act="new">כתיבה חדשה</button></div>
      ${list.length ? list.map((e) => `
        <article class="card journal-entry">
          <div class="je-head"><strong>${esc(e.title)}</strong><span class="faint">${fmt(e.date)}</span></div>
          <p class="je-text en">${esc(e.text)}</p>
          <div class="btn-row">${sayBtn(stripHebrew(e.text), "להקריא")}<button class="btn btn-quiet" data-act="del" data-arg="${e.id}">מחיקה</button></div>
        </article>`).join("") : `<p class="notice">המחברת עוד ריקה. בחרו נושא ב"כתיבה חופשית" והתחילו לכתוב.</p>`}
    `, {
      new: () => go("#/write/free"),
      del: (id) => {
        if (!confirm("למחוק את הטקסט הזה מהמחברת?")) return;
        S().journal = list.filter((e) => e.id !== id);
        Store.save();
        screens.journal();
      }
    });
  };

  /* ---- מתרגם ---- */
  screens.translator = function (opts) {
    const { render, esc, icon, sayBtn, toast, S } = H;
    opts = opts || {};
    let dir = opts.dir || "he-en";
    const from = () => dir.split("-")[0], to = () => dir.split("-")[1];
    const recent = S().translations || [];
    const mine = S().custom || [];
    let last = null;

    render(`
      <div class="screen-head"><h1>מתרגם</h1><p class="muted">כותבים מילה, ביטוי או משפט — ומקבלים תרגום. ${Translate.hasDevice ? "התרגום נעשה במחשב עצמו כשאפשר." : "התרגום נעשה דרך האינטרנט."}</p></div>
      <article class="card">
        <div class="seg" role="group" aria-label="כיוון התרגום">
          <button data-act="dir" data-arg="he-en" aria-pressed="${dir === "he-en"}">מעברית לאנגלית</button>
          <button data-act="dir" data-arg="en-he" aria-pressed="${dir === "en-he"}">מאנגלית לעברית</button>
        </div>
        <textarea id="trIn" class="write-input" rows="3" dir="${dir === "he-en" ? "rtl" : "ltr"}" lang="${from()}" placeholder="${dir === "he-en" ? "כתבו כאן בעברית…" : "Type in English…"}" data-autofocus>${esc(opts.text || "")}</textarea>
        <div class="btn-row" style="margin-top:.8rem"><button class="btn btn-primary btn-big" data-act="go">תרגום</button></div>
        <div id="trOut" class="tr-out" aria-live="polite"></div>
      </article>
      ${mine.length ? `<h2 class="level-title">המילים שלי (${mine.length})</h2>
        <p class="muted small" style="margin:-.3rem 0 .6rem">הביטויים ששמרת נכנסים לחזרות ב"מתרגלים".</p>
        <div class="lesson-list">${mine.map((c) => `
          <div class="mine-row"><span class="en mine-en">${esc(c.en)}</span><span class="mine-he">${esc(c.he)}</span>
            ${sayBtn(c.en, "", { mini: true })}<button class="btn btn-quiet" data-act="delMine" data-arg="${c.id}">הסרה</button></div>`).join("")}</div>` : ""}
      ${recent.length ? `<h2 class="level-title">תרגומים אחרונים</h2>
        <div class="lesson-list">${recent.map((r, i) => `
          <button class="recent-row" data-act="recent" data-arg="${i}"><span class="${r.from === "en" ? "en" : ""}">${esc(r.src)}</span><span class="faint">←</span><span class="${r.to === "en" ? "en" : ""}">${esc(r.out)}</span></button>`).join("")}</div>` : ""}
    `, {
      dir: (d) => screens.translator({ dir: d, text: document.getElementById("trIn").value }),
      go: () => { Translate.prepare(from(), to()); doTranslate(); },
      save: () => {
        if (!last) return;
        const en = last.to === "en" ? last.out : last.src, he = last.to === "en" ? last.src : last.out;
        S().custom = S().custom || [];
        if (S().custom.some((c) => c.en.toLowerCase() === en.toLowerCase())) { toast("הביטוי הזה כבר שמור."); return; }
        const id = "mine-" + Date.now();
        S().custom.push({ id, en, he, added: Date.now() });
        SRS.registerCustom();
        SRS.introduce(id);
        Store.save();
        toast("נשמר ל\"מילים שלי\" — ייכנס לחזרות.");
        screens.translator({ dir, text: "" });
      },
      delMine: (id) => {
        S().custom = (S().custom || []).filter((c) => c.id !== id);
        delete S().words[id];
        SRS.registerCustom();
        Store.save();
        screens.translator({ dir, text: document.getElementById("trIn").value });
      },
      recent: (i) => {
        const r = recent[+i];
        screens.translator({ dir: r.from + "-" + r.to, text: r.src });
        setTimeout(() => document.querySelector('[data-act="go"]').click(), 0);
      }
    });
    const inp = document.getElementById("trIn");
    inp.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); doTranslate(); } });

    async function doTranslate() {
      const text = inp.value.trim();
      const out = document.getElementById("trOut");
      if (!text) { inp.focus(); return; }
      out.innerHTML = `<p class="faint" style="margin-top:1rem">מתרגם…</p>`;
      Translate.onProgress = (p) => { out.innerHTML = `<p class="faint" style="margin-top:1rem">מוריד את חבילת התרגום למחשב (פעם אחת בלבד)… ${Math.round((p || 0) * 100)}%</p>`; };
      try {
        const r = await Translate.translate(text, from(), to());
        last = { from: from(), to: to(), src: text, out: r.text };
        S().translations = [last].concat((S().translations || []).filter((x) => x.src !== text)).slice(0, 8);
        Store.save();
        const enText = to() === "en" ? r.text : text;
        const short = enText.split(/\s+/).length <= 8;
        out.innerHTML = `
          <div class="tr-result ${to() === "en" ? "en" : ""}">${esc(r.text)}</div>
          <div class="btn-row">
            ${sayBtn(enText, to() === "en" ? "השמע" : "השמע את האנגלית", { cls: "btn btn-primary" })}
            ${sayBtn(enText, "לאט", { slow: true })}
            ${short ? `<button class="btn btn-secondary" data-act="save">${icon("check")} לשמור ל"מילים שלי"</button>` : ""}
          </div>
          <p class="he-via">${r.via === "device" ? "תורגם במחשב עצמו." : "תורגם דרך האינטרנט."} תרגום אוטומטי — לפעמים לא מדויק.</p>`;
        if (to() === "en" && Speech.supported) Speech.speak(r.text);
      } catch (e) {
        out.innerHTML = `
          <p class="notice" style="margin-top:1rem">לא הצלחתי לתרגם כרגע — כנראה אין חיבור לאינטרנט.</p>
          <div class="btn-row" style="margin-top:.6rem"><a class="btn btn-secondary" href="${esc(Translate.webLink(text, from(), to()))}" target="_blank" rel="noopener">לפתוח בגוגל תרגום</a></div>`;
      } finally {
        Translate.onProgress = null;
      }
    }
    if (opts.text && !opts.noAuto) inp.setSelectionRange(inp.value.length, inp.value.length);
  };

  window.Writing = { setup, compare, tokenize, phrasesUsed, hebrewHelper, insertAtCursor, stripHebrew, screens };
})();
