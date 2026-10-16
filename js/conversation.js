/*
 * מנוע השיחה של מסך "מדברים".
 *
 * המסך לא יודע מאיפה מגיעות השורות — הוא רק מדבר עם "ספק שיחה" (provider).
 * כרגע יש ספק אחד: ScriptedProvider, שמריץ שיחה מוכנה מתוך data.js.
 * בהמשך אפשר להוסיף AIProvider עם אותו ממשק בדיוק, והמסך יעבוד בלי שינוי.
 *
 * הממשק של ספק:
 *   start()            -> Promise<Turn>          פותח את השיחה
 *   reply(userText)    -> Promise<Turn>          מקבל את מה שהמשתמש אמר ומחזיר את התור הבא
 *
 * Turn = {
 *   app:  { en, he } | null     מה שהאפליקציה אומרת (יוקרא בקול)
 *   you:  { en, he } | null     המשפט שמציעים למשתמש לומר (בשיחה חופשית יכול להיות null)
 *   done: boolean               האם השיחה הסתיימה
 * }
 *
 * דוגמה לספק AI עתידי נמצאת בסוף הקובץ ובקובץ docs/AI-CONVERSATIONS.md.
 */
(function () {
  class ScriptedProvider {
    constructor(dialogue) {
      this.lines = dialogue.lines;
      this.i = 0;
    }
    _next() {
      const turn = { app: null, you: null, done: false };
      // אוספים שורת "app" (אם יש) ואת שורת ה-"you" שאחריה
      if (this.i < this.lines.length && this.lines[this.i].who === "app") {
        turn.app = this.lines[this.i];
        this.i++;
      }
      if (this.i < this.lines.length && this.lines[this.i].who === "you") {
        turn.you = this.lines[this.i];
        this.i++;
      }
      turn.done = !turn.you && this.i >= this.lines.length;
      return turn;
    }
    async start() { return this._next(); }
    async reply(/* userText */) { return this._next(); }
  }

  /*
   * שלד לספק AI עתידי (לא פעיל). הרעיון:
   * שרת קטן במחשב (או בענן) מחזיק את מפתח ה-API — לעולם לא בתוך הדפדפן —
   * והאפליקציה שולחת אליו את היסטוריית השיחה.
   *
   * class AIProvider {
   *   constructor(endpoint, topic) { this.endpoint = endpoint; this.history = []; this.topic = topic; }
   *   async start() { return this._ask(null); }
   *   async reply(userText) { return this._ask(userText); }
   *   async _ask(userText) {
   *     if (userText) this.history.push({ role: "user", content: userText });
   *     const res = await fetch(this.endpoint, {
   *       method: "POST", headers: { "Content-Type": "application/json" },
   *       body: JSON.stringify({ topic: this.topic, history: this.history })
   *     });
   *     const data = await res.json();      // { en, he, suggestion: {en, he}, done }
   *     this.history.push({ role: "assistant", content: data.en });
   *     return { app: { en: data.en, he: data.he }, you: data.suggestion || null, done: !!data.done };
   *   }
   * }
   */

  window.Conversation = {
    providers: { scripted: (dialogue) => new ScriptedProvider(dialogue) },
    create(kind, arg) { return this.providers[kind](arg); }
  };
})();
