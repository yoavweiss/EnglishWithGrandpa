/*
 * אנגלית בנחת — הלוגיקה הראשית: ניווט בין מסכים, שיעורים, תרגול ושיחות.
 * בלי ספריות חיצוניות. כל מסך הוא פונקציה שמציירת HTML ומגדירה פעולות לכפתורים.
 */
(function () {
  const $app = document.getElementById("app");
  const $homeBtn = document.getElementById("homeBtn");
  const S = () => Store.state;
  let actions = {};       // הפעולות של המסך הנוכחי (לפי data-act)
  let screenId = 0;       // מתחלף בכל מעבר מסך — כדי שפעולות ישנות לא יציירו על מסך חדש

  /* ---------- כלים ---------- */
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const W = (id) => SRS.wordIndex[id];
  const go = (route) => { location.hash = route; };

  const ICONS = {
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5Z"/><path d="M12 6.5v13"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="12" height="15" rx="2"/><path d="M8.5 5V4a1 1 0 0 1 1-1H19a1.5 1.5 0 0 1 1.5 1.5V16a1 1 0 0 1-1 1h-1"/><path d="m6.8 13 2 2 3.5-4"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5Z"/><path d="M8 9h8M8 12h5"/></svg>',
    speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3l4.5-4v13L7 14.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11 12 4l8 7"/><path d="M6 9.5V20h12V9.5"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9a2.1 2.1 0 0 0-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Z"/><path d="M5 19 13 11"/></svg>'
  };
  const icon = (n) => ICONS[n] || "";

  function sayBtn(text, label, opts) {
    opts = opts || {};
    const cls = opts.mini ? "mini-speak" : (opts.cls || "btn btn-secondary");
    return `<button class="${cls}" data-say="${esc(text)}"${opts.slow ? " data-slow" : ""} aria-label="השמע: ${esc(text)}">${icon("speaker")}${label ? `<span>${label}</span>` : ""}</button>`;
  }

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3200);
  }

  function speakAuto(text) {
    if (S().settings.autoSpeak && Speech.supported) Speech.speak(text);
  }

  function applySettings() {
    document.documentElement.dataset.size = S().settings.textSize;
  }

  function greeting() {
    const h = new Date().getHours();
    let g = "לילה טוב";
    if (h >= 5 && h < 12) g = "בוקר טוב";
    else if (h >= 12 && h < 17) g = "צהריים טובים";
    else if (h >= 17 && h < 22) g = "ערב טוב";
    const n = S().settings.name.trim();
    return n ? `${g}, ${n}` : g;
  }

  function lessonIndex(id) { return LESSONS.findIndex((l) => l.id === id); }
  function lessonState(id) { return S().lessons[id] || { pos: 0, done: false }; }

  // השיעור המומלץ: האחרון שלא הושלם, או הראשון שעוד לא הושלם
  function nextLessonId() {
    const last = S().last;
    if (last && LESSONS[lessonIndex(last.lessonId)] && !lessonState(last.lessonId).done) return last.lessonId;
    const l = LESSONS.find((x) => !lessonState(x.id).done);
    return l ? l.id : null;
  }

  function render(html, acts) {
    actions = acts || {};
    $app.innerHTML = `<div class="screen">${html}</div>`;
    window.scrollTo(0, 0);
    const focusEl = $app.querySelector("[data-autofocus]");
    if (focusEl) focusEl.focus({ preventScroll: true });
  }

  /* ---------- מסך ראשי ---------- */
  function homeScreen() {
    const st = SRS.stats();
    const nid = nextLessonId();
    let cont = "";
    if (nid) {
      const L = LESSONS[lessonIndex(nid)];
      const ls = lessonState(nid);
      const started = ls.pos > 0;
      const where = started
        ? (ls.pos >= L.words.length ? "נשאר רק תרגול קצר לסיום" : `מילה ${ls.pos + 1} מתוך ${L.words.length}`)
        : `${L.words.length} מילים חדשות`;
      cont = `
        <section class="continue">
          <div>
            <div class="label">${started ? "להמשיך מאיפה שעצרת" : (S().last ? "השיעור הבא" : "מתחילים?")}</div>
            <div class="what">שיעור ${lessonIndex(nid) + 1} · ${esc(L.title)}</div>
            <div class="where">${where}</div>
          </div>
          <button class="btn btn-big" data-act="continue" data-autofocus>${started ? "להמשיך" : "להתחיל"} ${icon("next")}</button>
        </section>`;
    } else {
      cont = `<section class="continue"><div><div class="label">כל השיעורים הושלמו</div><div class="what">כל הכבוד!</div><div class="where">כדאי להמשיך לתרגל כדי שהמילים יישארו בזיכרון</div></div><button class="btn btn-big" data-act="practice">לתרגול</button></section>`;
    }

    render(`
      <div class="hello">
        <h1>${esc(greeting())}</h1>
        <p>כמה דקות של אנגלית, בקצב שלך.</p>
      </div>
      ${cont}
      <div class="tiles">
        <button class="tile learn" data-act="learn">
          <span class="tile-icon">${icon("book")}</span>
          <h2>לומדים</h2>
          <p>שיעורים קצרים עם מילים חדשות, משפטים והגייה</p>
        </button>
        <button class="tile practice" data-act="practice">
          ${st.due > 0 ? `<span class="badge">${st.due} לחזרה</span>` : ""}
          <span class="tile-icon">${icon("target")}</span>
          <h2>מתרגלים</h2>
          <p>משחקי זיכרון רגועים, בלי לחץ ובלי שעון</p>
        </button>
        <button class="tile speak" data-act="speak">
          <span class="tile-icon">${icon("chat")}</span>
          <h2>מדברים</h2>
          <p>שיחות קצרות מהחיים — שומעים ואומרים בקול</p>
        </button>
        <button class="tile write" data-act="write">
          <span class="tile-icon">${icon("pen")}</span>
          <h2>כותבים</h2>
          <p>כותבים משפטים באנגלית. מילה בעברית? נתרגם אותה</p>
        </button>
      </div>
      ${st.known > 0 ? `<div class="stats">
        <span>מילים שלמדת: <strong>${st.known}</strong></span>
        <span>מילים שכבר זוכרים היטב: <strong>${st.strong}</strong></span>
        <span>ימי לימוד: <strong>${S().days.length}</strong></span>
      </div>` : ""}
      <div class="home-foot"><button class="btn btn-quiet" data-act="settings">${icon("gear")} הגדרות</button></div>
      ${!Store.available ? `<p class="notice" style="margin-top:1rem">שימו לב: הדפדפן לא מאפשר לשמור התקדמות. ההתקדמות תישמר רק עד סגירת החלון.</p>` : ""}
    `, {
      continue: () => nid ? go("#/lesson/" + nid) : go("#/practice"),
      learn: () => go("#/learn"),
      practice: () => go("#/practice"),
      speak: () => go("#/speak"),
      write: () => go("#/write"),
      settings: () => go("#/settings")
    });
  }

  /* ---------- רשימת שיעורים ---------- */
  const LEVEL_NAMES = { 1: "שלב א׳ · חוזרים לכושר", 2: "שלב ב׳ · שיחות מהחיים", 3: "שלב ג׳ · להביע את עצמך", 4: "שלב ד׳ · אנגלית מתקדמת", 5: "שלב ה׳ · דיוק וניסוח" };

  function learnScreen() {
    const nid = nextLessonId();
    let html = `<div class="screen-head"><h1>לומדים</h1><p class="muted">אפשר לבחור כל שיעור. מומלץ ללכת לפי הסדר.</p></div>`;
    let level = 0;
    LESSONS.forEach((L, i) => {
      if (L.level !== level) {
        if (level) html += `</div>`;
        level = L.level;
        html += `<h2 class="level-title">${LEVEL_NAMES[level] || ""}</h2><div class="lesson-list">`;
      }
      const ls = lessonState(L.id);
      const isNext = L.id === nid;
      let status = `<span class="status">${L.words.length} מילים</span>`;
      if (ls.done) status = `<span class="status done">הושלם ✓</span>`;
      else if (ls.pos > 0) status = `<span class="status next">בתהליך</span>`;
      else if (isNext) status = `<span class="status next">הבא בתור</span>`;
      html += `
        <button class="lesson-row ${ls.done ? "done" : ""} ${isNext ? "next" : ""}" data-act="open" data-arg="${L.id}">
          <span class="lesson-num">${ls.done ? icon("check") : i + 1}</span>
          <span><span class="t">${esc(L.title)}</span><br><span class="s">${esc(L.subtitle)}</span></span>
          ${status}
        </button>`;
    });
    html += `</div>`;
    render(html, { open: (id) => go("#/lesson/" + id) });
  }

  /* ---------- שיעור: כרטיסיות מילים ---------- */
  function lessonScreen(id) {
    const li = lessonIndex(id);
    if (li < 0) return go("#/learn");
    const L = LESSONS[li];
    const ls = Object.assign({ pos: 0, done: false }, S().lessons[id]);
    let pos = ls.done && ls.pos >= L.words.length ? 0 : Math.min(ls.pos || 0, L.words.length);

    function savePos() {
      S().lessons[id] = Object.assign({}, S().lessons[id], { pos, done: !!(S().lessons[id] && S().lessons[id].done) });
      S().last = { lessonId: id, pos };
      Store.save();
    }

    function showCard() {
      if (pos >= L.words.length) { savePos(); return startCheck(); }
      const w = L.words[pos];
      SRS.introduce(w.id);
      Store.markPracticeDay();
      savePos();
      const pct = Math.round(((pos + 1) / L.words.length) * 100);
      render(`
        <div class="progress-line">
          <span><strong>שיעור ${li + 1}</strong> · ${esc(L.title)}</span>
          <span>מילה ${pos + 1} מתוך ${L.words.length}</span>
        </div>
        <div class="bar" aria-hidden="true"><span style="width:${pct}%"></span></div>
        <article class="card word-card">
          <div class="word-en">${esc(w.en)}</div>
          ${S().settings.showSay ? `<div class="word-say">הגייה: ${esc(w.say)}</div>` : ""}
          <div class="speak-row">
            ${sayBtn(w.en, "השמע", { cls: "btn btn-primary" })}
            ${sayBtn(w.en, "לאט", { slow: true })}
          </div>
          <div class="word-he">${esc(w.he)}</div>
          <div class="divider"></div>
          <div class="example">
            <div class="ex-line"><span class="ex-en">${esc(w.ex)}</span>${sayBtn(w.ex, "", { mini: true })}</div>
            <div class="ex-he">${esc(w.exHe)}</div>
          </div>
        </article>
        <div class="nav-row">
          <button class="btn btn-secondary btn-big" data-act="prev" ${pos === 0 ? "disabled" : ""}>${icon("back")} הקודם</button>
          <button class="btn btn-primary btn-big" data-act="next" data-autofocus>${pos === L.words.length - 1 ? "לתרגול קצר" : "הבא"} ${icon("next")}</button>
        </div>
      `, {
        next: () => { pos++; showCard(); },
        prev: () => { if (pos > 0) { pos--; showCard(); } }
      });
      speakAuto(w.en);
    }

    function startCheck() {
      const ids = SRS.shuffle(L.words.map((w) => w.id)).slice(0, Math.min(4, L.words.length));
      const types = ["meaning", "reverse", "listen", "meaning"];
      const items = ids.map((wid, i) => ({ wordId: wid, type: types[i % types.length] }));
      runSession({
        title: `שיעור ${li + 1} · בדיקה קצרה`,
        items,
        pool: L.words.map((w) => w.id),
        onDone: (summary) => finishLesson(summary),
        onQuit: () => go("#/learn")
      });
    }

    function finishLesson(summary) {
      S().lessons[id] = { pos: 0, done: true, doneAt: Date.now() };
      const nextL = LESSONS[li + 1];
      S().last = nextL ? { lessonId: nextL.id, pos: 0 } : { lessonId: id, pos: 0 };
      Store.save();
      render(`
        <section class="card summary">
          <div class="seal">${icon("leaf")}</div>
          <h2>סיימת את השיעור "${esc(L.title)}"</h2>
          <p>${L.words.length} מילים חדשות נכנסו לחזרות. נחזור עליהן בימים הקרובים, כדי שיישארו בזיכרון.</p>
          ${summary.again.length ? `<p>המילים שכדאי לחזק:</p><div class="word-chips">${summary.again.map((w) => `<span class="chip again en">${esc(W(w).en)}</span>`).join("")}</div>` : ""}
          <div class="btn-row" style="justify-content:center;margin-top:.5rem">
            ${nextL ? `<button class="btn btn-primary btn-big" data-act="next" data-autofocus>לשיעור הבא: ${esc(nextL.title)} ${icon("next")}</button>` : ""}
            <button class="btn btn-secondary btn-big" data-act="home">${icon("home")} למסך הראשי</button>
          </div>
        </section>
      `, {
        next: () => go("#/lesson/" + nextL.id),
        home: () => go("#/")
      });
    }

    showCard();
  }

  /* ---------- מנוע שאלות (משמש גם בשיעורים וגם בתרגול) ---------- */
  const PRAISE = ["נכון!", "מצוין!", "יפה מאוד!", "בדיוק!", "כל הכבוד!"];
  const GENTLE = ["לא נורא.", "זה בסדר — ככה לומדים.", "לא נורא, זה חלק מהלמידה."];
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  // סוגי שאלות שבהם מילה שטעו בה חוזרת באותו סוג (ולא כשאלת "מה הפירוש")
  const SAME_TYPE_RETRY = ["builder", "typing", "translate", "listenSentence", "write"];
  // השוואה סלחנית: בלי אותיות גדולות, סימני פיסוק וגרשים
  const norm = (s) => String(s).toLowerCase().replace(/[’‘`']/g, "").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
  function editDistance(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++)
      for (let j = 1; j <= b.length; j++)
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }

  function distractors(word, n, field, pool) {
    const same = word.lessonIndex >= 0 ? LESSONS[word.lessonIndex].words.map((w) => w.id) : [];
    const order = SRS.shuffle(pool || []).concat(SRS.shuffle(same), SRS.shuffle(Object.keys(SRS.wordIndex)));
    const out = [], seenText = new Set([word[field]]);
    for (const id of order) {
      const w = W(id);
      if (!w || !w[field] || seenText.has(w[field])) continue;
      seenText.add(w[field]);
      out.push(id);
      if (out.length >= n) break;
    }
    return out;
  }

  function blankSentence(w) {
    const re = new RegExp("\\b" + w.en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
    if (!re.test(w.ex)) return null;
    const [before, after] = w.ex.split(re);
    return `${esc(before)}<span class="blank">&nbsp;</span>${esc(after)}`;
  }

  function runSession(cfg) {
    const items = cfg.items.slice();
    const pool = cfg.pool;
    let idx = 0;
    const firstTry = {};   // wordId -> true/false (התוצאה בניסיון הראשון)
    const requeued = new Set();

    function header() {
      const total = items.length;
      const pct = Math.round(((idx + 1) / total) * 100);
      return `
        <div class="progress-line"><span><strong>${esc(cfg.title)}</strong></span><span>${idx + 1} מתוך ${total}</span></div>
        <div class="bar" aria-hidden="true"><span style="width:${pct}%"></span></div>`;
    }

    function record(wordId, correct) {
      if (!(wordId in firstTry)) {
        firstTry[wordId] = correct;
        SRS.answer(wordId, correct);
      }
      if (!correct && !requeued.has(wordId)) {
        // מילה שהתבלבלו בה חוזרת שוב בהמשך אותו תרגול
        requeued.add(wordId);
        const cur = items[idx].type;
        const type = cur === "flash" ? "flash" : (SAME_TYPE_RETRY.includes(cur) ? cur : "meaning");
        items.splice(Math.min(idx + 3, items.length), 0, { wordId, type, retry: true });
      }
    }

    function nextItem() {
      idx++;
      if (idx >= items.length) return finish();
      show();
    }

    function finish() {
      const ids = Object.keys(firstTry);
      const summary = { total: ids.length, right: ids.filter((i) => firstTry[i]).length, again: ids.filter((i) => !firstTry[i]) };
      if (cfg.onDone) return cfg.onDone(summary);
      sessionSummary(summary, cfg);
    }

    function feedbackHtml(ok, w, sentence, title) {
      // במשחקי משפטים מציגים את המשפט המלא; בשאר — את המילה
      const en = sentence ? w.ex : w.en, he = sentence ? w.exHe : w.he;
      return ok
        ? `<div class="feedback ok" role="status"><div><div class="fb-title">${title || pick(PRAISE)}</div><div class="fb-sub"><span class="en">${esc(en)}</span> = ${esc(he)}</div></div><button class="btn btn-primary" data-act="cont" id="contBtn">המשך ${icon("next")}</button></div>`
        : `<div class="feedback gentle" role="status"><div><div class="fb-title">${pick(GENTLE)}</div><div class="fb-sub">התשובה הנכונה: <span class="en"><strong>${esc(en)}</strong></span> = ${esc(he)}. נחזור על זה עוד מעט.</div></div><button class="btn btn-primary" data-act="cont" id="contBtn">המשך ${icon("next")}</button></div>`;
    }

    function quitAct() { return cfg.onQuit ? cfg.onQuit() : finish(); }
    const quitRow = `<div class="btn-row" style="margin-top:1rem"><button class="btn btn-quiet" data-act="quit">סיום התרגול</button></div>`;

    /* ---- בניית משפט: מסדרים מילים מבולבלות לפי הסדר ---- */
    function showBuilder(w) {
      const tokens = w.ex.split(/\s+/).filter(Boolean);
      let order = SRS.shuffle(tokens.map((_, i) => i));
      for (let t = 0; t < 5 && order.every((v, i) => v === i); t++) order = SRS.shuffle(order);
      let placed = [];
      let done = false;

      render(`
        ${header()}
        <article class="card question">
          <div class="q-prompt">סדרו את המילים למשפט באנגלית:</div>
          <div class="q-main he q-he-sentence">${esc(w.exHe)}</div>
          <div class="build-line en" id="line" aria-label="המשפט שנבנה"></div>
          <div class="token-bank en" id="bank"></div>
          <div class="btn-row" style="justify-content:center;margin-top:1rem" id="bctl">
            <button class="btn btn-primary btn-big" data-act="check" id="checkBtn" disabled>${icon("check")} בדיקה</button>
            <button class="btn btn-secondary" data-act="clear">ניקוי</button>
            <button class="btn btn-quiet" data-act="giveup">הראה לי</button>
          </div>
          <div id="fb"></div>
        </article>
        ${quitRow}
      `, {
        place: (i) => { if (done) return; placed.push(+i); paint(); },
        unplace: (i) => { if (done) return; placed = placed.filter((p) => p !== +i); paint(); },
        clear: () => { if (done) return; placed = []; paint(); },
        check: () => finishBuild(norm(placed.map((i) => tokens[i]).join(" ")) === norm(w.ex)),
        giveup: () => finishBuild(false),
        cont: nextItem,
        quit: quitAct
      });

      function paint() {
        document.getElementById("line").innerHTML = placed.length
          ? placed.map((i) => `<button class="token placed" data-act="unplace" data-arg="${i}">${esc(tokens[i])}</button>`).join("")
          : `<span class="faint build-hint">לחצו על המילים לפי הסדר</span>`;
        document.getElementById("bank").innerHTML = order.filter((i) => !placed.includes(i))
          .map((i) => `<button class="token" data-act="place" data-arg="${i}">${esc(tokens[i])}</button>`).join("");
        document.getElementById("checkBtn").disabled = placed.length !== tokens.length;
      }

      function finishBuild(ok) {
        done = true;
        document.getElementById("bctl").hidden = true;
        document.getElementById("bank").innerHTML = "";
        document.getElementById("line").classList.add(ok ? "ok" : "gentle");
        if (!ok) document.getElementById("line").innerHTML = tokens.map((t) => `<span class="token shown">${esc(t)}</span>`).join("");
        $app.querySelectorAll("#line .token").forEach((b) => { b.disabled = true; });
        record(w.id, ok);
        document.getElementById("fb").innerHTML = feedbackHtml(ok, w, true);
        document.getElementById("contBtn").focus();
        if (Speech.supported) Speech.speak(w.ex);
      }
      paint();
    }

    /* ---- כתיבה: מקלידים את המילה באנגלית ---- */
    function showTyping(w) {
      let hints = 0;
      render(`
        ${header()}
        <article class="card question">
          <div class="q-prompt">כתבו באנגלית:</div>
          <div class="q-main he">${esc(w.he)}</div>
          <div class="q-hint" style="margin-bottom:1rem">${esc(w.exHe || "")}</div>
          <input type="text" id="typeIn" class="type-input" dir="ltr" lang="en" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" aria-label="התשובה באנגלית" data-autofocus>
          <div class="hint-line en" id="hintLine" aria-live="polite"></div>
          <div class="btn-row" style="justify-content:center;margin-top:1rem" id="tctl">
            <button class="btn btn-primary btn-big" data-act="check">${icon("check")} בדיקה</button>
            <button class="btn btn-secondary" data-act="hint">רמז</button>
            <button class="btn btn-quiet" data-act="giveup">הראה לי</button>
          </div>
          <div id="fb"></div>
        </article>
        ${quitRow}
      `, {
        check: () => {
          const said = norm(document.getElementById("typeIn").value);
          if (!said) { document.getElementById("typeIn").focus(); return; }
          const target = norm(w.en);
          if (said === target) return done(true);
          if (target.length >= 5 && editDistance(said, target) <= 1) return done(true, "כמעט מושלם! שימו לב לאיות:");
          done(false);
        },
        hint: () => {
          hints++;
          document.getElementById("hintLine").textContent = w.en.split(" ").map((word) => word.slice(0, hints) + "·".repeat(Math.max(0, word.length - hints))).join("  ");
          document.getElementById("typeIn").focus();
        },
        giveup: () => done(false),
        cont: nextItem,
        quit: quitAct
      });
      const inp = document.getElementById("typeIn");
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); actions.check && actions.check(); } });

      function done(ok, title) {
        actions.check = null;
        inp.disabled = true;
        inp.classList.add(ok ? "ok" : "gentle");
        document.getElementById("tctl").hidden = true;
        record(w.id, ok);
        document.getElementById("fb").innerHTML = feedbackHtml(ok, w, false, title);
        document.getElementById("contBtn").focus();
        if (Speech.supported) Speech.speak(w.en);
      }
    }

    /* ---- כתיבת משפט שלם: משפט בעברית → כותבים באנגלית ---- */
    function showWrite(w) {
      const tokens = w.ex.split(/\s+/).filter(Boolean);
      let hints = 0, usedHelp = false, finished = false;
      render(`
        ${header()}
        <article class="card question write-q">
          <div class="q-prompt">כתבו את המשפט באנגלית:</div>
          <div class="q-main he q-he-sentence">${esc(w.exHe)}</div>
          <div class="key-phrase">ביטוי מפתח: <span class="en"><b>${esc(w.en)}</b></span> · ${esc(w.he)} ${sayBtn(w.en, "", { mini: true })}</div>
          <textarea id="writeIn" class="write-input" dir="ltr" lang="en" spellcheck="true" rows="3" aria-label="המשפט שלך באנגלית" data-autofocus></textarea>
          <div class="he-help" id="heHelp" hidden aria-live="polite"></div>
          <div id="hintArea" class="hint-area"></div>
          <div class="btn-row" style="justify-content:center;margin-top:1rem" id="wctl">
            <button class="btn btn-primary btn-big" data-act="check">${icon("check")} בדיקה</button>
            <button class="btn btn-secondary" data-act="hint" id="hintBtn">רמז</button>
            <button class="btn btn-quiet" data-act="giveup">הראה לי</button>
          </div>
          <p class="faint small write-tip" id="wtip">לא יודעים מילה? כתבו אותה בעברית ונתרגם. מילה עם קו אדום — כנראה שגיאת כתיב.</p>
          <div id="fb"></div>
        </article>
        ${quitRow}
      `, {
        check: () => check(),
        hint: () => giveHint(),
        word: (t) => { usedHelp = true; Writing.insertAtCursor(inp, t); },
        giveup: () => reveal(),
        heReplace: () => helper.replace(),
        mine: () => finishWith(true),
        again: () => finishWith(false),
        cont: nextItem,
        quit: quitAct
      });
      const inp = document.getElementById("writeIn");
      const helper = Writing.hebrewHelper(inp, document.getElementById("heHelp"));
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); if (!finished) check(); } });

      function giveHint() {
        hints++; usedHelp = true;
        const area = document.getElementById("hintArea");
        if (hints === 1) {
          area.innerHTML = `<div class="lbl-small">המילים של המשפט (לחיצה מוסיפה אותן):</div>
            <div class="chip-group en">${SRS.shuffle(tokens).map((t) => `<button class="chip-btn" data-act="word" data-arg="${esc(t)}">${esc(t)}</button>`).join("")}</div>`;
        } else if (hints === 2) {
          area.insertAdjacentHTML("beforeend", `<div class="lbl-small" style="margin-top:.6rem">האות הראשונה של כל מילה, לפי הסדר:</div>
            <div class="hint-line en">${tokens.map((t) => esc(t[0]) + "·".repeat(Math.max(0, t.replace(/[^A-Za-z']/g, "").length - 1))).join("  ")}</div>`);
        } else {
          area.insertAdjacentHTML("beforeend", `<div style="margin-top:.6rem">${sayBtn(w.ex, "להקשיב למשפט", { slow: true })}</div>`);
          document.getElementById("hintBtn").disabled = true;
        }
        inp.focus();
      }

      async function check() {
        const text = inp.value.trim();
        if (!text) { inp.focus(); return; }
        if (Translate.hasHebrew(text)) {
          await helper.run(true);
          toast("יש במשפט מילים בעברית — אפשר להחליף אותן באנגלית בלחיצה.");
          return;
        }
        if (helper.state.used) usedHelp = true;
        const c = Writing.compare(text, w.ex);
        finished = true;
        inp.disabled = true;
        document.getElementById("wctl").hidden = true;
        document.getElementById("wtip").hidden = true;
        document.getElementById("hintArea").innerHTML = "";
        const marks = (list) => list.map((t) => `<span class="tk tk-${t.status}">${esc(t.text)}</span>`).join(" ");
        if (c.exact) {
          inp.classList.add("ok");
          record(w.id, !usedHelp);
          const typoNote = c.typos.length
            ? `<div class="fb-sub">שימו לב לאיות: ${c.typos.map(([a, b]) => `<span class="en"><s>${esc(a)}</s> → <b>${esc(b)}</b></span>`).join(", ")}</div>` : "";
          document.getElementById("fb").innerHTML = `
            <div class="feedback ok" role="status"><div>
              <div class="fb-title">${usedHelp ? "נכון! כתבת את זה בעזרת רמז — נחזור על המשפט שוב בהמשך." : pick(PRAISE)}</div>
              <div class="fb-sub"><span class="en">${esc(w.ex)}</span></div>${typoNote}
            </div><button class="btn btn-primary" data-act="cont" id="contBtn">המשך ${icon("next")}</button></div>`;
          document.getElementById("contBtn").focus();
          if (Speech.supported) Speech.speak(w.ex);
          return;
        }
        const close = c.recall >= 0.7 && c.precision >= 0.6;
        document.getElementById("fb").innerHTML = `
          <div class="compare" role="status">
            <div class="fb-title">${close ? "קרוב מאוד! הנה ההבדלים:" : "בואו נשווה:"}</div>
            <div class="cmp-row"><span class="cmp-lbl">כתבת:</span><span class="en cmp-text">${marks(c.answer)}</span></div>
            <div class="cmp-row"><span class="cmp-lbl">תשובה אפשרית:</span><span class="en cmp-text">${marks(c.target)} ${sayBtn(w.ex, "", { mini: true })}</span></div>
            <div class="cmp-legend"><span class="tk tk-extra">צהוב</span> — מילה שונה או מיותרת · <span class="tk tk-missing">ירוק</span> — מילה שחסרה · <span class="tk tk-typo">קו</span> — שגיאת כתיב קטנה</div>
            <div class="cmp-back" id="backTr"></div>
            <p class="cmp-q">אפשר לומר דבר אחד בכמה דרכים. אם המשפט שלך אומר את אותו הדבר — הוא נכון.</p>
            <div class="btn-row">
              <button class="btn btn-primary" data-act="mine" id="mineBtn">${icon("check")} התכוונתי לאותו דבר</button>
              <button class="btn btn-secondary" data-act="again">נחזור על זה בהמשך</button>
            </div>
          </div>`;
        document.getElementById("mineBtn").focus();
        if (Speech.supported) Speech.speak(w.ex);
        // תרגום חוזר של המשפט שלו לעברית — כדי לראות אם המשמעות נכונה
        Translate.translate(text, "en", "he").then((r) => {
          const el = document.getElementById("backTr");
          if (el) el.innerHTML = `<span class="cmp-lbl">כך המשפט שלך נשמע בעברית:</span> <span>${esc(r.text)}</span>`;
        }).catch(() => {});
      }

      function finishWith(ok) {
        record(w.id, ok && !usedHelp);
        nextItem();
      }

      function reveal() {
        finished = true;
        inp.disabled = true;
        document.getElementById("wctl").hidden = true;
        document.getElementById("wtip").hidden = true;
        record(w.id, false);
        document.getElementById("fb").innerHTML = feedbackHtml(false, w, true);
        document.getElementById("contBtn").focus();
        if (Speech.supported) Speech.speak(w.ex);
      }
    }

    function show() {
      const it = items[idx];
      const w = W(it.wordId);
      let type = it.type;
      if (w.custom && ["sentence", "translate", "listenSentence", "builder"].includes(type)) type = "meaning";
      if (w.custom && type === "write") type = "typing";
      if (type === "sentence" && !blankSentence(w)) type = "meaning";
      if (type === "listen" && !Speech.supported) type = "meaning";

      if (type === "builder" && w.ex.split(/\s+/).length > 11) type = "translate";
      if (type === "listenSentence" && !Speech.supported) type = "translate";

      if (type === "flash") return showFlash(w);
      if (type === "builder") return showBuilder(w);
      if (type === "typing") return showTyping(w);
      if (type === "write") return showWrite(w);

      // שדה התשובה והשאלה לפי סוג
      const field = { meaning: "he", translate: "ex", listenSentence: "exHe" }[type] || "en";
      const isSentence = field === "ex" || field === "exHe";
      const ltr = field === "en" || field === "ex";
      const opts = SRS.shuffle([w.id].concat(distractors(w, 3, field, pool)));
      let prompt = "", main = "", extra = "";
      if (type === "meaning") {
        prompt = "מה הפירוש?";
        main = `<div class="q-main en">${esc(w.en)}</div><div class="speak-row">${sayBtn(w.en, "השמע")}</div>`;
      } else if (type === "reverse") {
        prompt = "איך אומרים באנגלית?";
        main = `<div class="q-main he">${esc(w.he)}</div>`;
      } else if (type === "listen") {
        prompt = "הקשיבו — מה נאמר?";
        main = `<div class="speak-row">${sayBtn(w.en, "השמע שוב", { cls: "btn btn-primary btn-big" })}${sayBtn(w.en, "לאט", { slow: true, cls: "btn btn-secondary btn-big" })}</div>`;
      } else if (type === "sentence") {
        prompt = "מה חסר במשפט?";
        main = `<div class="q-sentence">${blankSentence(w)}</div>`;
        extra = `<div class="q-hint">${esc(w.exHe)}</div>`;
      } else if (type === "translate") {
        prompt = "איך אומרים את המשפט באנגלית?";
        main = `<div class="q-main he q-he-sentence">${esc(w.exHe)}</div>`;
      } else if (type === "listenSentence") {
        prompt = "הקשיבו למשפט — מה פירושו?";
        main = `<div class="speak-row">${sayBtn(w.ex, "השמע שוב", { cls: "btn btn-primary btn-big" })}${sayBtn(w.ex, "לאט", { slow: true, cls: "btn btn-secondary btn-big" })}</div>`;
      }

      render(`
        ${header()}
        <article class="card question">
          <div class="q-prompt">${prompt}</div>
          ${main}${extra}
          <div class="options ${isSentence ? "single" : ""}" role="group" aria-label="תשובות">
            ${opts.map((oid) => `<button class="option ${isSentence ? "sentence-opt" : ""}" data-act="ans" data-arg="${oid}">${ltr ? `<span class="en">${esc(W(oid)[field])}</span>` : esc(W(oid)[field])}</button>`).join("")}
          </div>
          <div id="fb"></div>
        </article>
        <div class="btn-row" style="margin-top:1rem"><button class="btn btn-quiet" data-act="quit">סיום התרגול</button></div>
      `, {
        ans: (oid, el) => {
          const ok = oid === w.id;
          $app.querySelectorAll(".option").forEach((b) => {
            b.disabled = true;
            if (b.dataset.arg === w.id) b.classList.add("correct");
          });
          if (!ok) el.classList.add("gentle");
          record(w.id, ok);
          document.getElementById("fb").innerHTML = feedbackHtml(ok, w, isSentence);
          document.getElementById("contBtn").focus();
          if (Speech.supported) Speech.speak(isSentence ? w.ex : w.en);
        },
        cont: nextItem,
        quit: quitAct
      });

      if (type === "listen") setTimeout(() => Speech.speak(w.en), 250);
      else if (type === "listenSentence") setTimeout(() => Speech.speak(w.ex), 250);
      else if (type === "meaning") speakAuto(w.en);
    }

    function showFlash(w) {
      render(`
        ${header()}
        <article class="card question">
          <div class="q-prompt">זוכרים מה זה?</div>
          <div class="q-main en">${esc(w.en)}</div>
          <div class="speak-row">${sayBtn(w.en, "השמע")}</div>
          <div id="reveal" class="reveal-box">
            <button class="btn btn-primary btn-big" data-act="reveal" data-autofocus>הצג תרגום</button>
          </div>
        </article>
        <div class="btn-row" style="margin-top:1rem"><button class="btn btn-quiet" data-act="quit">סיום התרגול</button></div>
      `, {
        reveal: () => {
          document.getElementById("reveal").innerHTML = `
            <div class="word-he">${esc(w.he)}</div>
            ${w.ex ? `<div class="example" style="margin-top:.8rem"><div class="ex-line"><span class="ex-en">${esc(w.ex)}</span>${sayBtn(w.ex, "", { mini: true })}</div><div class="ex-he">${esc(w.exHe)}</div></div>` : ""}
            <p class="muted" style="margin-top:1.2rem">ידעת?</p>
            <div class="btn-row" style="justify-content:center;margin-top:.6rem">
              <button class="btn btn-primary btn-big" data-act="knew" id="knewBtn">${icon("check")} ידעתי</button>
              <button class="btn btn-secondary btn-big" data-act="notyet">עוד לא — נחזור על זה</button>
            </div>`;
          document.getElementById("knewBtn").focus();
        },
        knew: () => { record(w.id, true); nextItem(); },
        notyet: () => { record(w.id, false); nextItem(); },
        quit: () => (cfg.onQuit ? cfg.onQuit() : finish())
      });
      speakAuto(w.en);
    }

    if (!items.length) return finish();
    show();
  }

  function sessionSummary(sum, cfg) {
    const allRight = sum.again.length === 0;
    render(`
      <section class="card summary">
        <div class="seal">${icon("leaf")}</div>
        <h2>${sum.total ? (allRight ? "מצוין!" : "יפה מאוד!") : "נתראה בפעם הבאה"}</h2>
        <p>${sum.total ? `תרגלת ${sum.total} מילים, ${sum.right} מהן נכונות כבר בפעם הראשונה.` : ""}
        ${sum.again.length ? " המילים שהתבלבלת בהן יחזרו בתרגול הבא — ככה בדיוק זוכרים." : (sum.total ? " כל המילים יחזרו בעוד כמה ימים, לחיזוק." : "")}</p>
        ${sum.again.length ? `<div class="word-chips">${sum.again.map((id) => `<span class="chip again"><span class="en">${esc(W(id).en)}</span> · ${esc(W(id).he)}</span>`).join("")}</div>` : ""}
        <div class="btn-row" style="justify-content:center;margin-top:.5rem">
          <button class="btn btn-primary btn-big" data-act="again" data-autofocus>עוד סיבוב</button>
          <button class="btn btn-secondary btn-big" data-act="menu">${cfg.menu === "#/write" ? "למסך הכתיבה" : "לתפריט התרגול"}</button>
          <button class="btn btn-quiet btn-big" data-act="home">${icon("home")} למסך הראשי</button>
        </div>
      </section>
    `, {
      again: () => { if (cfg.restart) cfg.restart(); },
      menu: () => go(cfg.menu || "#/practice"),
      home: () => go("#/")
    });
  }

  /* ---------- מסך תרגול ---------- */
  const MIXED_TYPES = ["flash", "meaning", "listen", "reverse", "sentence", "translate", "listenSentence", "builder"];
  const GAMES = {
    review:   { title: "חזרה חכמה", desc: "המילים שהגיע זמנן — ובמיוחד אלה שקשה לזכור", types: MIXED_TYPES },
    meaning:  { title: "מה הפירוש?", desc: "רואים ביטוי באנגלית ובוחרים את התרגום", types: ["meaning"] },
    listen:   { title: "מה שמעת?", desc: "מקשיבים ובוחרים איך זה נכתב", types: ["listen"] },
    typing:   { title: "כתיבה", desc: "רואים בעברית וכותבים באנגלית, עם רמזים", types: ["typing"] },
    match:    { title: "התאמת זוגות", desc: "מחברים כל ביטוי באנגלית לתרגום שלו", types: [] },
    sentence: { title: "השלמת משפט", desc: "בוחרים מה חסר במשפט", types: ["sentence"] },
    translate:{ title: "תרגום משפטים", desc: "משפט בעברית — בוחרים איך אומרים אותו באנגלית", types: ["translate"] },
    listenSentence: { title: "הבנת הנשמע", desc: "שומעים משפט שלם ובוחרים את פירושו", types: ["listenSentence"] },
    builder:  { title: "בניית משפט", desc: "מסדרים מילים מבולבלות למשפט נכון", types: ["builder"] }
  };

  // בונה רשימת שאלות באורך שנבחר בהגדרות; אם אין מספיק מילים — כל מילה מופיעה עד פעמיים, בסוג אחר
  function buildItems(ids, types, randomTypes) {
    const len = S().settings.sessionLength || 10;
    const chosen = SRS.pickSession(len, ids);
    let list = chosen.slice();
    if (list.length < len && chosen.length) list = list.concat(SRS.shuffle(chosen)).slice(0, Math.min(len, chosen.length * 2));
    return list.map((id, i) => ({
      wordId: id,
      type: randomTypes ? types[Math.floor(Math.random() * types.length)] : types[i % types.length]
    }));
  }

  function practicePool() {
    const known = SRS.knownIds();
    if (known.length >= 4) return { ids: known, starter: false };
    return { ids: LESSONS[0].words.map((w) => w.id), starter: true };
  }

  function practiceScreen() {
    const st = SRS.stats();
    const { starter } = practicePool();
    const card = (key, featured) => {
      const g = GAMES[key];
      const meta = key === "review" ? (st.due > 0 ? `${st.due} מילים מחכות לחזרה` : "אין מילים שממתינות — אפשר לחזק בכל זאת") : "";
      return `<button class="game-card ${featured ? "featured" : ""}" data-act="play" data-arg="${key}">
        <span class="gt">${g.title}</span><span class="gd">${g.desc}</span>${meta ? `<span class="gm">${meta}</span>` : ""}
      </button>`;
    };
    render(`
      <div class="screen-head"><h1>מתרגלים</h1><p class="muted">אין שעון ואין ניקוד. טעות היא פשוט סימן שכדאי לחזור על המילה. כל תרגול: ${S().settings.sessionLength || 10} שאלות (אפשר לשנות בהגדרות).</p></div>
      ${starter ? `<p class="notice" style="margin-bottom:1rem">עוד לא נלמדו מספיק מילים, אז התרגול יהיה על מילות השיעור הראשון. כדאי להתחיל ב"לומדים".</p>` : ""}
      <div class="practice-grid">
        ${card("review", true)}
        <button class="game-card featured topics" data-act="topics">
          <span class="gt">תרגול לפי נושא</span><span class="gd">בוחרים שיעור — במסעדה, ניבים, רופא... — ומתרגלים רק אותו, בכל סוגי השאלות</span>
        </button>
      </div>
      <h2 class="level-title">מילים וביטויים</h2>
      <div class="practice-grid">${card("meaning")}${card("listen")}${card("typing")}${card("match")}</div>
      <h2 class="level-title">משפטים שלמים</h2>
      <div class="practice-grid">${card("sentence")}${card("translate")}${card("listenSentence")}${card("builder")}
        <button class="game-card featured topics" data-act="write"><span class="gt">כתיבת משפטים באנגלית</span><span class="gd">כותבים משפט שלם, עם רמזים ועזרה בתרגום — במסך "כותבים"</span></button>
      </div>
    `, { play: (k) => go("#/game/" + k), topics: () => go("#/topics"), write: () => go("#/write") });
  }

  function gameScreen(key) {
    const g = GAMES[key];
    if (!g) return go("#/practice");
    if (key === "match") return matchGame();
    const start = () => {
      const { ids } = practicePool();
      runSession({ title: g.title, items: buildItems(ids, g.types, key === "review"), pool: ids, restart: start });
    };
    start();
  }

  /* ---------- תרגול לפי נושא ---------- */
  function topicsScreen() {
    let html = `<div class="screen-head"><h1>תרגול לפי נושא</h1><p class="muted">אפשר לתרגל כל נושא — גם כזה שעוד לא למדת. המילים ייכנסו לחזרות.</p></div>`;
    let level = 0;
    LESSONS.forEach((L, i) => {
      if (L.level !== level) {
        if (level) html += `</div>`;
        level = L.level;
        html += `<h2 class="level-title">${LEVEL_NAMES[level] || ""}</h2><div class="lesson-list">`;
      }
      const known = L.words.filter((w) => SRS.rec(w.id)).length;
      html += `
        <button class="lesson-row" data-act="open" data-arg="${L.id}">
          <span class="lesson-num">${i + 1}</span>
          <span><span class="t">${esc(L.title)}</span><br><span class="s">${esc(L.subtitle)}</span></span>
          <span class="status ${known === L.words.length ? "done" : ""}">${known ? `${known}/${L.words.length} נלמדו` : "חדש"}</span>
        </button>`;
    });
    html += `</div>`;
    const mine = S().custom || [];
    if (mine.length) {
      html += `<h2 class="level-title">שלי</h2><div class="lesson-list">
        <button class="lesson-row" data-act="open" data-arg="mine">
          <span class="lesson-num">★</span>
          <span><span class="t">המילים שלי</span><br><span class="s">ביטויים ששמרת מהמתרגם</span></span>
          <span class="status">${mine.length} ביטויים</span>
        </button></div>`;
    }
    render(html, { open: (id) => go("#/topic/" + id) });
  }

  function topicGame(id) {
    if (id === "mine") {
      const ids = (S().custom || []).map((c) => c.id);
      if (!ids.length) return go("#/topics");
      const start = () => runSession({ title: "המילים שלי", items: buildItems(ids, ["flash", "meaning", "reverse", "listen", "typing"], true), pool: ids, restart: start });
      return start();
    }
    const L = LESSONS[lessonIndex(id)];
    if (!L) return go("#/topics");
    const ids = L.words.map((w) => w.id);
    const start = () => runSession({ title: L.title, items: buildItems(ids, MIXED_TYPES, true), pool: ids, restart: start });
    start();
  }

  /* ---------- התאמת זוגות ---------- */
  function matchGame() {
    const { ids } = practicePool();
    // מילים שונות זו מזו בתרגום, כדי שלא יהיה בלבול
    const chosen = [];
    const heSeen = new Set();
    for (const id of SRS.pickSession(ids.length, ids)) {
      if (heSeen.has(W(id).he)) continue;
      heSeen.add(W(id).he); chosen.push(id);
      if (chosen.length >= 5) break;
    }
    const left = SRS.shuffle(chosen), right = SRS.shuffle(chosen);
    const matched = new Set(), mistakes = new Set();
    let sel = null; // { side, id, el }

    render(`
      <div class="progress-line"><span><strong>התאמת זוגות</strong></span><span id="mcount">0 מתוך ${chosen.length}</span></div>
      <div class="bar" aria-hidden="true"><span id="mbar" style="width:0%"></span></div>
      <article class="card">
        <p class="muted" style="text-align:center">בוחרים מילה באנגלית, ואז את התרגום שלה בעברית.</p>
        <div class="match-cols">
          <div class="match-col">${right.map((id) => `<button class="option match-item" data-act="pick" data-arg="he:${id}">${esc(W(id).he)}</button>`).join("")}</div>
          <div class="match-col">${left.map((id) => `<button class="option match-item" data-act="pick" data-arg="en:${id}"><span class="en">${esc(W(id).en)}</span></button>`).join("")}</div>
        </div>
      </article>
      <div class="btn-row" style="margin-top:1rem"><button class="btn btn-quiet" data-act="quit">סיום התרגול</button></div>
    `, {
      pick: (arg, el) => {
        const [side, id] = arg.split(":");
        if (matched.has(id) && el.classList.contains("matched")) return;
        if (side === "en") Speech.speak(W(id).en);
        if (!sel || sel.side === side) {
          if (sel) sel.el.classList.remove("selected");
          sel = { side, id, el };
          el.classList.add("selected");
          return;
        }
        // שתי בחירות מצדדים שונים
        const enId = side === "en" ? id : sel.id;
        if (sel.id === id) {
          matched.add(id);
          [sel.el, el].forEach((b) => { b.classList.remove("selected"); b.classList.add("matched"); b.disabled = true; });
          if (!mistakes.has(id)) SRS.answer(id, true);
          sel = null;
          document.getElementById("mcount").textContent = `${matched.size} מתוך ${chosen.length}`;
          document.getElementById("mbar").style.width = Math.round(matched.size / chosen.length * 100) + "%";
          if (matched.size === chosen.length) setTimeout(done, 700);
        } else {
          if (!mistakes.has(enId)) { mistakes.add(enId); SRS.answer(enId, false); }
          const a = sel.el;
          [a, el].forEach((b) => { b.classList.remove("selected"); b.classList.add("nudge"); setTimeout(() => b.classList.remove("nudge"), 400); });
          sel = null;
        }
      },
      quit: () => go("#/practice")
    });

    function done() {
      sessionSummary({ total: chosen.length, right: chosen.length - mistakes.size, again: Array.from(mistakes) }, { restart: matchGame });
    }
  }

  /* ---------- מדברים: רשימת שיחות ---------- */
  function speakScreen() {
    render(`
      <div class="screen-head"><h1>מדברים</h1>
        <p class="muted">שיחות קצרות מהחיים. האפליקציה אומרת שורה באנגלית, ואז תורך לענות בקול.${Speech.canListen() ? " אפשר ללחוץ על המיקרופון והאפליקציה תקשיב." : ""}</p>
      </div>
      <div class="lesson-list">
        ${DIALOGUES.map((d, i) => {
          const done = S().dialogues[d.id] && S().dialogues[d.id].done;
          return `<button class="lesson-row ${done ? "done" : ""}" data-act="open" data-arg="${d.id}">
            <span class="lesson-num">${done ? icon("check") : i + 1}</span>
            <span><span class="t">${esc(d.title)}</span><br><span class="s">${esc(d.subtitle)}</span></span>
            <span class="status ${done ? "done" : ""}">${done ? "הושלמה ✓" : d.lines.length + " שורות"}</span>
          </button>`;
        }).join("")}
      </div>
    `, { open: (id) => go("#/dialogue/" + id) });
  }

  /* ---------- מדברים: שיחה ---------- */
  function dialogueScreen(id) {
    const d = DIALOGUES.find((x) => x.id === id);
    if (!d) return go("#/speak");
    const provider = Conversation.create("scripted", d);
    const transcript = [];
    let turn = null;
    let heard = null;      // { text, score }
    let listening = false;
    const myScreen = ++screenId;
    const alive = () => screenId === myScreen;

    function bubble(line, who) {
      return `<div class="bubble ${who}">
        <div class="b-head"><span>${who === "app" ? "האפליקציה" : "אתה"}</span>${sayBtn(line.en, "", { mini: true })}</div>
        <div class="b-en">${esc(line.en)}</div>
        <div class="b-he">${esc(line.he)}</div>
      </div>`;
    }

    function draw() {
      let panel = "";
      if (turn && turn.you) {
        const y = turn.you;
        let heardHtml = "";
        if (listening) heardHtml = `<div class="heard"><span class="listening"><span class="dot"></span> מקשיבה... אפשר לדבר</span></div>`;
        else if (heard) {
          const good = heard.score >= 0.7, close = heard.score >= 0.4;
          heardHtml = `<div class="feedback ${good ? "ok" : "gentle"} heard" role="status"><div>
            <div class="fb-title">${good ? pick(PRAISE) : (close ? "קרוב מאוד!" : "לא הצלחתי לשמוע היטב.")}</div>
            <div class="fb-sub">שמעתי: <span class="en">"${esc(heard.text)}"</span>${good ? "" : " — אפשר לנסות שוב, או פשוט להמשיך."}</div>
          </div></div>`;
        }
        panel = `
          <article class="card your-turn">
            <div class="yt-label">התור שלך — אמור בקול באנגלית:</div>
            <div class="yt-en">${esc(y.en)}</div>
            <div class="yt-he">${esc(y.he)}</div>
            <div class="btn-row">
              ${sayBtn(y.en, "שמע איך אומרים")}
              ${sayBtn(y.en, "לאט", { slow: true })}
              ${Speech.canListen() ? `<button class="btn btn-warm" data-act="listen" ${listening ? "disabled" : ""}>${icon("mic")} ${heard ? "לנסות שוב" : "לדבר עכשיו"}</button>` : ""}
              <button class="btn btn-primary" data-act="said" data-autofocus>${icon("check")} ${heard ? "המשך" : "אמרתי"}</button>
            </div>
            ${heardHtml}
          </article>`;
      } else if (turn && turn.done) {
        panel = `<section class="card summary">
          <div class="seal">${icon("leaf")}</div>
          <h2>השיחה הושלמה</h2>
          <p>דיברת אנגלית! כדאי לחזור על אותה שיחה עוד פעם, הפעם בלי להציץ בתרגום.</p>
          <div class="btn-row" style="justify-content:center">
            <button class="btn btn-primary btn-big" data-act="restart" data-autofocus>שוב מההתחלה</button>
            <button class="btn btn-secondary btn-big" data-act="list">לשיחות נוספות</button>
          </div>
        </section>`;
      }
      render(`
        <div class="screen-head"><h2>${esc(d.title)}</h2><p class="muted">${esc(d.subtitle)}</p></div>
        <div class="chat">${transcript.map((t) => bubble(t.line, t.who)).join("")}</div>
        ${panel}
      `, {
        said: advance,
        listen: doListen,
        restart: () => { Speech.stop(); dialogueScreen(id); },
        list: () => go("#/speak")
      });
      const last = $app.querySelector(".your-turn, .summary");
      if (last && transcript.length > 1) last.scrollIntoView({ block: "end" });
    }

    async function show(t) {
      turn = t; heard = null;
      if (t.app) transcript.push({ who: "app", line: t.app });
      if (t.done) {
        S().dialogues[id] = { done: true };
        Store.markPracticeDay();
        Store.save();
      }
      draw();
      if (t.app && Speech.supported && alive()) await Speech.speak(t.app.en);
    }

    async function advance() {
      if (!turn || !turn.you) return;
      transcript.push({ who: "you", line: turn.you });
      const said = heard ? heard.text : turn.you.en;
      const t = await provider.reply(said);
      if (alive()) show(t);
    }

    async function doListen() {
      Speech.stop();
      listening = true; heard = null; draw();
      const res = await Speech.listen();
      if (!alive()) return;
      listening = false;
      if (res.ok) {
        const target = turn.you.en;
        let best = { text: res.alternatives[0], score: 0 };
        res.alternatives.forEach((a) => { const s = Speech.similarity(a, target); if (s > best.score) best = { text: a, score: s }; });
        heard = best;
      } else if (!Speech.canListen()) {
        toast("המיקרופון לא זמין כרגע. אפשר לומר בקול וללחוץ \"אמרתי\".");
      } else {
        toast("לא שמעתי. אפשר לנסות שוב, קרוב יותר למיקרופון.");
      }
      draw();
    }

    provider.start().then(show);
  }

  /* ---------- הגדרות ---------- */
  function settingsScreen() {
    const s = S().settings;
    const voices = Speech.voices;
    const current = Speech.pickVoice();
    const seg = (act, val, label, on) => `<button data-act="${act}" data-arg="${val}" aria-pressed="${on}">${label}</button>`;
    render(`
      <div class="screen-head"><h1>הגדרות</h1></div>
      <section class="card">
        <div class="setting">
          <label for="nameInput">איך לפנות אליך?</label>
          <input id="nameInput" type="text" value="${esc(s.name)}" placeholder="למשל: סבא משה" maxlength="30">
          <span class="help">השם יופיע בברכה במסך הראשי.</span>
        </div>
        <div class="setting">
          <span class="lbl">גודל הכתב</span>
          <div class="seg">
            ${seg("size", "normal", "רגיל", s.textSize === "normal")}
            ${seg("size", "large", "גדול", s.textSize === "large")}
            ${seg("size", "xlarge", "גדול מאוד", s.textSize === "xlarge")}
          </div>
        </div>
        <div class="setting">
          <span class="lbl">מהירות ההקראה באנגלית</span>
          <div class="seg">
            ${seg("rate", "0.65", "איטית", s.speechRate === 0.65)}
            ${seg("rate", "0.8", "נינוחה", s.speechRate === 0.8)}
            ${seg("rate", "0.95", "רגילה", s.speechRate === 0.95)}
          </div>
        </div>
        <div class="setting">
          <span class="lbl">אורך כל תרגול</span>
          <div class="seg">
            ${[[6, "קצר"], [10, "רגיל"], [15, "ארוך"], [20, "ארוך מאוד"]].map(([n, l]) => seg("len", n, `${l} (${n} שאלות)`, (s.sessionLength || 10) === n)).join("")}
          </div>
        </div>
        <div class="setting">
          <label for="voiceSel">הקול באנגלית</label>
          ${Speech.supported ? (voices.length ? `
            <select id="voiceSel">
              <option value="">בחירה אוטומטית${current ? ` (${esc(current.name)})` : ""}</option>
              ${voices.map((v) => `<option value="${esc(v.voiceURI)}" ${v.voiceURI === s.voiceURI ? "selected" : ""}>${esc(v.name)} · ${esc(v.lang)}</option>`).join("")}
            </select>
            <div>${sayBtn("Hello! How are you today?", "לשמוע דוגמה")}</div>
            <span class="help">בדפדפן Edge יש קולות טבעיים במיוחד (שמם מסתיים ב-Online).</span>`
            : `<span class="help">לא נמצאו קולות באנגלית במחשב הזה. ב-Windows אפשר להוסיף: הגדרות ← זמן ושפה ← דיבור ← הוספת קולות.</span>`)
            : `<span class="help">הדפדפן הזה לא תומך בהקראה. מומלץ Edge או Chrome.</span>`}
        </div>
        <div class="setting">
          <label class="toggle"><input type="checkbox" id="autoSpeak" ${s.autoSpeak ? "checked" : ""}> להקריא כל מילה חדשה אוטומטית</label>
          <label class="toggle"><input type="checkbox" id="showSay" ${s.showSay ? "checked" : ""}> להציג הגייה באותיות עבריות</label>
        </div>
      </section>

      <h2 class="level-title">גיבוי ההתקדמות</h2>
      <section class="card">
        <div class="setting">
          <span class="help">ההתקדמות נשמרת אוטומטית במחשב. אפשר גם לשמור קובץ גיבוי — למשל לפני החלפת מחשב.</span>
          <div class="btn-row">
            <button class="btn btn-secondary" data-act="export">שמירת קובץ גיבוי</button>
            <button class="btn btn-secondary" data-act="import">טעינת קובץ גיבוי</button>
            <input type="file" id="importFile" accept="application/json,.json" hidden>
          </div>
        </div>
        <div class="setting">
          <button class="btn btn-quiet" data-act="reset">מחיקת כל ההתקדמות והתחלה מחדש</button>
        </div>
      </section>
    `, {
      size: (v) => { s.textSize = v; Store.save(); applySettings(); settingsScreen(); },
      rate: (v) => { s.speechRate = parseFloat(v); Store.save(); settingsScreen(); Speech.speak("This is the new speed."); },
      len: (v) => { s.sessionLength = parseInt(v, 10); Store.save(); settingsScreen(); },
      export: () => {
        const blob = new Blob([Store.exportJSON()], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "english-progress-" + new Date().toISOString().slice(0, 10) + ".json";
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 2000);
        toast("קובץ הגיבוי נשמר בתיקיית ההורדות.");
      },
      import: () => document.getElementById("importFile").click(),
      reset: () => {
        if (confirm("למחוק את כל ההתקדמות? אי אפשר לבטל את הפעולה.")) {
          Store.reset(); SRS.registerCustom(); applySettings(); toast("ההתקדמות נמחקה."); go("#/");
        }
      }
    });
    const nameInput = document.getElementById("nameInput");
    nameInput.addEventListener("input", () => { s.name = nameInput.value; Store.save(); });
    const vs = document.getElementById("voiceSel");
    if (vs) vs.addEventListener("change", () => { s.voiceURI = vs.value; Store.save(); Speech.speak("Hello! How are you today?"); });
    document.getElementById("autoSpeak").addEventListener("change", (e) => { s.autoSpeak = e.target.checked; Store.save(); });
    document.getElementById("showSay").addEventListener("change", (e) => { s.showSay = e.target.checked; Store.save(); });
    document.getElementById("importFile").addEventListener("change", (e) => {
      const f = e.target.files[0];
      if (!f) return;
      f.text().then((txt) => {
        try { Store.importJSON(txt); SRS.registerCustom(); applySettings(); toast("ההתקדמות נטענה בהצלחה."); go("#/"); }
        catch (err) { toast("הקובץ הזה לא נראה כמו קובץ גיבוי של האפליקציה."); }
      });
    });
  }

  /* ---------- ניווט ---------- */
  function route() {
    Speech.stop();
    screenId++;
    const parts = (location.hash || "#/").replace(/^#\/?/, "").split("/");
    const [name, arg] = parts;
    $homeBtn.hidden = !name;
    switch (name) {
      case "": case undefined: return homeScreen();
      case "learn": return learnScreen();
      case "lesson": return lessonScreen(arg);
      case "practice": return practiceScreen();
      case "game": return gameScreen(arg);
      case "topics": return topicsScreen();
      case "topic": return topicGame(arg);
      case "write":
        if (arg === "guided") return Writing.screens.guided();
        if (arg === "topics") return Writing.screens.topics();
        if (arg === "topic") return Writing.screens.guided(parts[2]);
        if (arg === "free") return parts[2] ? Writing.screens.freeEditor(parts[2]) : Writing.screens.freeList();
        return Writing.screens.hub();
      case "journal": return Writing.screens.journal();
      case "translate": return Writing.screens.translator();
      case "speak": return speakScreen();
      case "dialogue": return dialogueScreen(arg);
      case "settings": return settingsScreen();
      default: return homeScreen();
    }
  }

  document.addEventListener("click", (e) => {
    const sayEl = e.target.closest("[data-say]");
    if (sayEl) {
      e.preventDefault();
      if (!Speech.supported) { toast("ההקראה לא נתמכת בדפדפן הזה. מומלץ Edge או Chrome."); return; }
      Speech.speak(sayEl.dataset.say, { slow: sayEl.hasAttribute("data-slow") });
      return;
    }
    const el = e.target.closest("[data-act]");
    if (el && actions[el.dataset.act] && !el.disabled) {
      e.preventDefault();
      actions[el.dataset.act](el.dataset.arg, el, e);
    }
  });

  // אם רשימת הקולות נטענת מאוחר — לרענן את מסך ההגדרות
  if (window.speechSynthesis && window.speechSynthesis.addEventListener) {
    window.speechSynthesis.addEventListener("voiceschanged", () => { if (location.hash === "#/settings") settingsScreen(); });
  }

  // כלים למודול הכתיבה (writing.js)
  Writing.setup({
    render, esc, icon, sayBtn, go, toast, S, runSession, practicePool, LEVEL_NAMES,
    writeLen: () => Math.max(4, Math.round((S().settings.sessionLength || 10) / 2))
  });

  window.addEventListener("hashchange", route);
  applySettings();
  route();
})();
