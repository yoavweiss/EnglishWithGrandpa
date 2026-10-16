/*
 * שמירה מקומית של ההתקדמות (localStorage) — נשמר במחשב עצמו, בלי שרת ובלי חשבון.
 * כל השמירה עוברת דרך הקובץ הזה, כך שבעתיד אפשר להחליף אותו (למשל בקובץ במחשב
 * או בסנכרון לענן) בלי לגעת בשאר האפליקציה.
 */
(function () {
  const KEY = "englishWithGrandpa.v1";

  function defaults() {
    return {
      version: 1,
      settings: {
        name: "",
        textSize: "large",     // normal | large | xlarge
        speechRate: 0.8,       // מהירות ההקראה
        voiceURI: "",          // הקול הנבחר (ריק = בחירה אוטומטית)
        showSay: true,         // להציג הגייה באותיות עבריות
        autoSpeak: true,       // להקריא כל מילה חדשה אוטומטית
        sessionLength: 10      // מספר השאלות בכל תרגול
      },
      lessons: {},             // lessonId -> { done: bool, pos: number, doneAt }
      words: {},               // wordId -> מצב החזרות (ראו srs.js)
      last: null,              // { lessonId, pos } — השיעור האחרון
      dialogues: {},           // dialogueId -> { done: bool }
      days: []                 // תאריכים שבהם תרגלו (YYYY-MM-DD)
    };
  }

  function merge(base, saved) {
    const out = Object.assign({}, base, saved);
    out.settings = Object.assign({}, base.settings, saved && saved.settings);
    return out;
  }

  let state = defaults();
  let available = true;

  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) state = merge(defaults(), JSON.parse(raw));
  } catch (e) {
    available = false;
    console.warn("Storage unavailable:", e);
  }

  function save() {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
      return true;
    } catch (e) {
      available = false;
      console.warn("Could not save:", e);
      return false;
    }
  }

  function todayStr() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  window.Store = {
    get state() { return state; },
    get available() { return available; },
    save,
    markPracticeDay() {
      const t = todayStr();
      if (!state.days.includes(t)) { state.days.push(t); save(); }
    },
    exportJSON() { return JSON.stringify(state, null, 2); },
    importJSON(text) {
      const data = JSON.parse(text);
      if (!data || typeof data !== "object" || !data.words || !data.lessons) throw new Error("bad file");
      state = merge(defaults(), data);
      save();
    },
    reset() { state = defaults(); save(); }
  };
})();
