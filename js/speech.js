/*
 * הקראה באנגלית (Text-to-Speech) וזיהוי דיבור — בעזרת היכולות המובנות של הדפדפן.
 * אין צורך במפתח API. ב-Edge ובכרום יש קולות אנגליים טובים מאוד.
 */
(function () {
  const synth = window.speechSynthesis || null;
  let voices = [];

  // קולות מועדפים — טבעיים וברורים, לפי סדר עדיפות
  const PREFERRED = [
    /Microsoft (Aria|Jenny|Guy|Ava|Andrew|Emma|Brian).*Online/i,
    /Google US English/i,
    /Microsoft (Sonia|Ryan|Libby).*Online/i,
    /Google UK English Female/i,
    /Samantha/i, /Daniel/i,
    /Microsoft (Zira|David|Mark)/i
  ];

  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices().filter((v) => /^en[-_]/i.test(v.lang));
  }
  if (synth) {
    loadVoices();
    if (typeof synth.addEventListener === "function") synth.addEventListener("voiceschanged", loadVoices);
    else synth.onvoiceschanged = loadVoices;
  }

  function pickVoice() {
    const wanted = Store.state.settings.voiceURI;
    if (wanted) {
      const v = voices.find((x) => x.voiceURI === wanted);
      if (v) return v;
    }
    for (const re of PREFERRED) {
      const v = voices.find((x) => re.test(x.name));
      if (v) return v;
    }
    return voices.find((v) => /en[-_]US/i.test(v.lang)) || voices[0] || null;
  }

  function speak(text, opts) {
    opts = opts || {};
    return new Promise((resolve) => {
      if (!synth) { resolve(false); return; }
      synth.cancel();
      const u = new SpeechSynthesisUtterance(text);
      const v = pickVoice();
      if (v) u.voice = v;
      u.lang = v ? v.lang : "en-US";
      u.rate = (opts.slow ? 0.6 : Store.state.settings.speechRate) || 0.8;
      u.pitch = 1;
      let finished = false;
      const done = () => { if (!finished) { finished = true; resolve(true); } };
      u.onend = done;
      u.onerror = done;
      // ביטחון: אם הדפדפן לא מדווח על סיום
      setTimeout(done, 1500 + text.length * 150);
      synth.speak(u);
    });
  }

  /* ---------- זיהוי דיבור ---------- */
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  let recognitionBroken = false;

  function canListen() { return !!Rec && !recognitionBroken; }

  function listen() {
    return new Promise((resolve) => {
      if (!canListen()) { resolve({ ok: false, error: "unsupported" }); return; }
      let r;
      try { r = new Rec(); } catch (e) { recognitionBroken = true; resolve({ ok: false, error: "unsupported" }); return; }
      r.lang = "en-US";
      r.interimResults = false;
      r.maxAlternatives = 3;
      let settled = false;
      const finish = (val) => { if (!settled) { settled = true; resolve(val); } };
      r.onresult = (e) => {
        const alts = [];
        for (let i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript);
        finish({ ok: true, alternatives: alts });
      };
      r.onerror = (e) => {
        if (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "network") recognitionBroken = true;
        finish({ ok: false, error: e.error });
      };
      r.onend = () => finish({ ok: false, error: "no-speech" });
      try { r.start(); } catch (e) { finish({ ok: false, error: "start-failed" }); }
      setTimeout(() => { try { r.stop(); } catch (e) {} }, 9000);
    });
  }

  // משווה בין מה שנאמר למשפט הרצוי — מחזיר ציון בין 0 ל-1
  function normalize(s) {
    return s.toLowerCase().replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  }
  function similarity(said, target) {
    const t = normalize(target), s = normalize(said);
    if (!t.length) return 0;
    const pool = s.slice();
    let hit = 0;
    t.forEach((w) => { const i = pool.indexOf(w); if (i >= 0) { hit++; pool.splice(i, 1); } });
    return hit / t.length;
  }

  window.Speech = {
    get supported() { return !!synth; },
    get voices() { return voices; },
    pickVoice, speak, listen, canListen, similarity,
    stop() { if (synth) synth.cancel(); }
  };
})();
