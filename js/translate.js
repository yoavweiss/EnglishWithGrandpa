/*
 * תרגום עברית ↔ אנגלית — בלי מפתח API ובלי תשלום.
 *
 * סדר הניסיונות:
 *   1. התרגום המובנה של הדפדפן (Chrome 138+ / Edge 148+), אם חבילת השפה כבר במחשב —
 *      רץ במחשב עצמו, פרטי, עובד גם בלי אינטרנט.
 *   2. שירותי תרגום חינמיים באינטרנט (Google Translate הציבורי, ואחריו MyMemory).
 *   3. אם אין אינטרנט וחבילת השפה עוד לא הורדה — מורידים אותה (פעם אחת).
 *   4. אם הכול נכשל — מציעים לפתוח את Google Translate באתר, עם הטקסט כבר בפנים.
 *   Translate.prepare() מתחיל להוריד את החבילה ברקע בלחיצה של המשתמש, כדי שבפעם הבאה התרגום יהיה במחשב.
 *
 * ממשק:
 *   Translate.translate(text, from, to) -> Promise<{ text, via }>   ("device" | "online")
 *   Translate.webLink(text, from, to)   -> כתובת לפתיחה ב-Google Translate
 *   Translate.hasHebrew(text)           -> האם יש בטקסט אותיות עבריות
 */
(function () {
  const HEB = /[֐-׿]/;
  const cache = new Map();          // תרגומים קודמים — לא מתרגמים פעמיים
  const deviceTranslators = {};     // "he>en" -> מתרגם מובנה מוכן

  function withTimeout(promise, ms) {
    return Promise.race([promise, new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms))]);
  }

  /* ---- 1. תרגום מובנה בדפדפן ---- */
  async function deviceState(from, to) {
    if (!("Translator" in self)) return "none";
    try { return await self.Translator.availability({ sourceLanguage: from, targetLanguage: to }); }
    catch (e) { return "none"; }
  }

  function deviceTranslator(from, to) {
    const key = from + ">" + to;
    if (!deviceTranslators[key]) {
      deviceTranslators[key] = self.Translator.create({
        sourceLanguage: from,
        targetLanguage: to,
        monitor(m) {
          m.addEventListener("downloadprogress", (e) => {
            if (window.Translate.onProgress) window.Translate.onProgress(e.loaded);
          });
        }
      }).catch((e) => { delete deviceTranslators[key]; throw e; });
    }
    return deviceTranslators[key];
  }

  async function viaDevice(text, from, to) {
    const t = await deviceTranslator(from, to);
    return t.translate(text);
  }

  // מתחיל להוריד את חבילת התרגום ברקע (צריך לקרוא לזה מתוך לחיצה של המשתמש)
  async function prepare(from, to) {
    const st = await deviceState(from || "he", to || "en");
    if (st === "downloadable" || st === "downloading") deviceTranslator(from || "he", to || "en").catch(() => {});
  }

  /* ---- 2. שירותים חינמיים באינטרנט ---- */
  const GCODE = { he: "iw", en: "en" };
  async function viaGoogle(text, from, to) {
    const url = "https://translate.googleapis.com/translate_a/single?client=gtx&dt=t" +
      "&sl=" + GCODE[from] + "&tl=" + GCODE[to] + "&q=" + encodeURIComponent(text);
    const res = await fetch(url);
    if (!res.ok) throw new Error("google " + res.status);
    const data = await res.json();
    const out = (data && data[0] || []).map((part) => part && part[0] || "").join("");
    if (!out.trim()) throw new Error("google empty");
    return out;
  }

  async function viaMyMemory(text, from, to) {
    const url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(text) + "&langpair=" + from + "|" + to;
    const res = await fetch(url);
    if (!res.ok) throw new Error("mymemory " + res.status);
    const data = await res.json();
    const out = data && data.responseData && data.responseData.translatedText;
    if (!out || /MYMEMORY WARNING|INVALID/i.test(out) || Number(data.responseStatus) !== 200) throw new Error("mymemory bad");
    return decodeEntities(out);
  }

  function decodeEntities(s) {
    const t = document.createElement("textarea");
    t.innerHTML = s;
    return t.value;
  }

  async function translate(text, from, to) {
    from = from || "he"; to = to || "en";
    const clean = String(text || "").trim();
    if (!clean) return { text: "", via: "none" };
    const key = from + ">" + to + ":" + clean;
    if (cache.has(key)) return cache.get(key);

    const st = await withTimeout(deviceState(from, to), 3000).catch(() => "none");
    const attempts = [];
    if (st === "available") attempts.push(["device", () => withTimeout(viaDevice(clean, from, to), 20000)]);
    attempts.push(["online", () => withTimeout(viaGoogle(clean, from, to), 8000)]);
    attempts.push(["online", () => withTimeout(viaMyMemory(clean, from, to), 8000)]);
    // אין אינטרנט, וחבילת השפה עוד לא במחשב — מנסים להוריד אותה (עם התקדמות)
    if (st === "downloadable" || st === "downloading") attempts.push(["device", () => withTimeout(viaDevice(clean, from, to), 120000)]);
    let lastErr = null;
    for (const [via, run] of attempts) {
      try {
        const out = String(await run()).trim();
        if (out) {
          const result = { text: tidy(out, to), via };
          cache.set(key, result);
          return result;
        }
      } catch (e) { lastErr = e; }
    }
    throw lastErr || new Error("translate failed");
  }

  // ניקוי קטן: בלי רווח לפני סימן פיסוק, אות ראשונה גדולה באנגלית
  function tidy(s, to) {
    s = s.replace(/\s+([,.!?;:])/g, "$1").replace(/\s+/g, " ").trim();
    if (to === "en" && s) s = s[0].toUpperCase() + s.slice(1);
    return s;
  }

  function webLink(text, from, to) {
    return "https://translate.google.com/?sl=" + (GCODE[from || "he"]) + "&tl=" + (GCODE[to || "en"]) +
      "&op=translate&text=" + encodeURIComponent(text || "");
  }

  // מחזיר את קטעי העברית בתוך טקסט מעורב, כדי לתרגם רק אותם
  function hebrewParts(text) {
    const parts = String(text || "").match(/[֐-׿][֐-׿0-9\s"'׳״,\-]*/g) || [];
    return parts.map((p) => p.replace(/[\s,\-]+$/, "").trim()).filter(Boolean);
  }

  window.Translate = {
    translate, webLink, hebrewParts, prepare,
    hasHebrew: (t) => HEB.test(String(t || "")),
    get hasDevice() { return "Translator" in self; },
    onProgress: null
  };
})();
