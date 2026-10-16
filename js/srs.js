/*
 * מערכת חזרות חכמה (שיטת "קופסאות" בסגנון לייטנר).
 * כל מילה נמצאת בקופסה 0–6. תשובה נכונה מעבירה לקופסה הבאה ומרחיקה את החזרה הבאה;
 * טעות מחזירה את המילה לתחילת הדרך, כך שמילים קשות חוזרות לעיתים קרובות.
 */
(function () {
  const DAY = 24 * 60 * 60 * 1000;
  // אחרי כמה זמן חוזרים על מילה בכל קופסה
  const INTERVALS = [0, 1 * DAY, 2 * DAY, 4 * DAY, 8 * DAY, 16 * DAY, 32 * DAY];
  const MAX_BOX = INTERVALS.length - 1;

  const wordIndex = {};
  window.LESSONS.forEach((lesson, li) => {
    lesson.words.forEach((w) => { wordIndex[w.id] = Object.assign({ lessonId: lesson.id, lessonIndex: li }, w); });
  });

  function rec(id) { return Store.state.words[id]; }

  function introduce(id) {
    if (!Store.state.words[id]) {
      Store.state.words[id] = { box: 0, due: Date.now(), right: 0, wrong: 0, lapses: 0, seen: Date.now(), last: 0 };
      Store.save();
    }
  }

  function answer(id, correct) {
    introduce(id);
    const r = rec(id);
    const now = Date.now();
    r.last = now;
    if (correct) {
      r.right++;
      r.box = Math.min(r.box + 1, MAX_BOX);
      r.due = now + INTERVALS[r.box];
    } else {
      r.wrong++;
      if (r.box > 0) r.lapses++;
      r.box = 0;
      r.due = now; // חוזרת כבר בתרגול הבא
    }
    Store.markPracticeDay();
    Store.save();
  }

  function knownIds() { return Object.keys(Store.state.words).filter((id) => wordIndex[id]); }

  function dueIds() {
    const now = Date.now();
    return knownIds().filter((id) => rec(id).due <= now);
  }

  // מילה "קשה": טעו בה יותר מפעם אחת, או שהיא עדיין בתחילת הדרך אחרי טעות
  function difficulty(id) {
    const r = rec(id);
    return r.wrong * 2 + r.lapses * 3 - r.right - r.box;
  }

  /*
   * בונה רשימת מילים לתרגול: קודם מילים שהגיע זמנן (הקשות ראשונות),
   * ואז, אם צריך, מילים בקופסאות הנמוכות כדי להשלים.
   */
  function pickSession(n, pool) {
    let ids = pool ? pool.slice() : knownIds();
    if (ids.length === 0) return [];
    const now = Date.now();
    const due = ids.filter((id) => !rec(id) || rec(id).due <= now)
      .sort((a, b) => (rec(b) ? difficulty(b) : 0) - (rec(a) ? difficulty(a) : 0));
    const rest = ids.filter((id) => !due.includes(id))
      .sort((a, b) => (rec(a).box - rec(b).box) || (rec(a).due - rec(b).due));
    const chosen = due.concat(rest).slice(0, n);
    return shuffle(chosen);
  }

  function stats() {
    const ids = knownIds();
    return {
      known: ids.length,
      due: dueIds().length,
      strong: ids.filter((id) => rec(id).box >= 3).length
    };
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  window.SRS = { wordIndex, introduce, answer, knownIds, dueIds, pickSession, stats, shuffle, rec };
})();
