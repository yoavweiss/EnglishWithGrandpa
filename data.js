/*
 * תוכן השיעורים והשיחות — רמה בינונית עד מתקדמת (B1–C1), למי שכבר מכיר את המילים הבסיסיות.
 * כדי להוסיף שיעור: מוסיפים אובייקט חדש למערך LESSONS באותו מבנה.
 * לכל פריט: id ייחודי, en (אנגלית — בלי סימן שאלה/נקודה בסוף), he (עברית),
 * say (הגייה באותיות עבריות), ex (משפט דוגמה שמכיל את en בדיוק), exHe (תרגום המשפט).
 */
window.LESSONS = [
  /* ---------- שלב א׳ · חוזרים לכושר ---------- */
  {
    id: "small-talk",
    title: "שיחת חולין",
    subtitle: "ביטויים שחוזרים בכל שיחה",
    level: 1,
    words: [
      { id: "how-have-you-been", en: "How have you been", he: "מה שלומך מאז? (מה נשמע?)", say: "הַאוּ הֶב יוּ בִּין", ex: "It's good to see you again. How have you been?", exHe: "טוב לראות אותך שוב. מה שלומך מאז?" },
      { id: "its-been-a-while", en: "It's been a while", he: "עבר הרבה זמן", say: "אִיטס בִּין אֶ וַוייל", ex: "It's been a while since we last met.", exHe: "עבר הרבה זמן מאז שנפגשנו." },
      { id: "by-the-way", en: "By the way", he: "דרך אגב", say: "בַּאי דֶ'ה וֵויי", ex: "By the way, how is your daughter?", exHe: "דרך אגב, מה שלום הבת שלך?" },
      { id: "never-mind", en: "Never mind", he: "לא חשוב, עזוב", say: "נֶבֶר מַיינד", ex: "Never mind, it's not important.", exHe: "עזוב, זה לא חשוב." },
      { id: "that-makes-sense", en: "That makes sense", he: "זה הגיוני", say: "דֶ'ט מֵייקס סֶנס", ex: "Oh, now I understand. That makes sense.", exHe: "אה, עכשיו אני מבין. זה הגיוני." },
      { id: "what-do-you-mean", en: "What do you mean", he: "למה אתה מתכוון?", say: "וָוט דוּ יוּ מִין", ex: "What do you mean by that?", exHe: "למה אתה מתכוון בזה?" },
      { id: "im-not-sure", en: "I'm not sure", he: "אני לא בטוח", say: "אַיים נוֹט שוּר", ex: "I'm not sure what time it starts.", exHe: "אני לא בטוח באיזו שעה זה מתחיל." },
      { id: "sounds-good", en: "Sounds good", he: "נשמע טוב", say: "סַאוּנדז גוּד", ex: "Dinner on Friday? Sounds good to me.", exHe: "ארוחת ערב ביום שישי? נשמע לי טוב." }
    ]
  },
  {
    id: "useful-verbs",
    title: "פעלים שימושיים",
    subtitle: "מעבר למילים הבסיסיות",
    level: 1,
    words: [
      { id: "remember", en: "Remember", he: "לזכור", say: "רִימֶמבֶּר", ex: "Do you remember the old cinema on Allenby Street?", exHe: "אתה זוכר את הקולנוע הישן ברחוב אלנבי?" },
      { id: "forget", en: "Forget", he: "לשכוח", say: "פוֹרגֶט", ex: "Don't forget to take your keys.", exHe: "אל תשכח לקחת את המפתחות." },
      { id: "explain", en: "Explain", he: "להסביר", say: "אִיקספּלֵיין", ex: "Can you explain it again, slowly?", exHe: "אתה יכול להסביר את זה שוב, לאט?" },
      { id: "decide", en: "Decide", he: "להחליט", say: "דִיסַייד", ex: "We need to decide where to go on holiday.", exHe: "אנחנו צריכים להחליט לאן לנסוע בחופשה." },
      { id: "agree", en: "Agree", he: "להסכים", say: "אֶגְרִי", ex: "I agree with you completely.", exHe: "אני מסכים איתך לגמרי." },
      { id: "borrow", en: "Borrow", he: "לשאול (חפץ), ללוות", say: "בּוֹרוֹאוּ", ex: "Can I borrow your pen for a moment?", exHe: "אפשר לשאול את העט שלך לרגע?" },
      { id: "recommend", en: "Recommend", he: "להמליץ", say: "רֶקוֹמֶנד", ex: "Which restaurant would you recommend?", exHe: "איזו מסעדה היית ממליץ?" },
      { id: "appreciate", en: "Appreciate", he: "להעריך, להוקיר", say: "אֶפּרִישִיאֵייט", ex: "I really appreciate your help.", exHe: "אני מאוד מעריך את העזרה שלך." }
    ]
  },
  {
    id: "character",
    title: "תכונות אופי",
    subtitle: "לתאר אנשים",
    level: 1,
    words: [
      { id: "generous", en: "Generous", he: "נדיב", say: "ג'ֶנֶרֶס", ex: "My neighbor is very generous with his time.", exHe: "השכן שלי נדיב מאוד בזמן שלו." },
      { id: "patient", en: "Patient", he: "סבלני", say: "פֵּיישֶנט", ex: "Thank you for being so patient with me.", exHe: "תודה שאתה כל כך סבלני איתי." },
      { id: "stubborn", en: "Stubborn", he: "עקשן", say: "סְטָאבֶּרן", ex: "My brother is as stubborn as a mule.", exHe: "אחי עקשן כמו פרד." },
      { id: "honest", en: "Honest", he: "ישר, כן", say: "אוֹנֶסט (בלי ה׳)", ex: "He is an honest man.", exHe: "הוא אדם ישר." },
      { id: "curious", en: "Curious", he: "סקרן", say: "קְיוּרִיאֶס", ex: "Children are curious about everything.", exHe: "ילדים סקרנים לגבי הכול." },
      { id: "reliable", en: "Reliable", he: "אמין", say: "רִילַייאֶבּל", ex: "My old car is still very reliable.", exHe: "המכונית הישנה שלי עדיין אמינה מאוד." },
      { id: "cheerful", en: "Cheerful", he: "עליז, שמח", say: "צִ'ירפוּל", ex: "She is always cheerful in the morning.", exHe: "היא תמיד עליזה בבוקר." },
      { id: "polite", en: "Polite", he: "מנומס", say: "פּוֹלַייט", ex: "It is polite to say thank you.", exHe: "זה מנומס להגיד תודה." }
    ]
  },
  {
    id: "doctor",
    title: "אצל הרופא",
    subtitle: "לתאר מה מרגישים",
    level: 1,
    words: [
      { id: "appointment", en: "Appointment", he: "תור, פגישה", say: "אֶפּוֹינטמֶנט", ex: "I'd like to make an appointment with Dr. Levy.", exHe: "הייתי רוצה לקבוע תור לד״ר לוי." },
      { id: "prescription", en: "Prescription", he: "מרשם", say: "פְּרִיסקְרִיפּשֶן", ex: "The doctor gave me a prescription.", exHe: "הרופא נתן לי מרשם." },
      { id: "symptoms", en: "Symptoms", he: "תסמינים", say: "סִימפּטוֹמְז", ex: "What are your symptoms?", exHe: "מה התסמינים שלך?" },
      { id: "recover", en: "Recover", he: "להחלים", say: "רִיקָאבֶר", ex: "It took me two weeks to recover.", exHe: "לקח לי שבועיים להחלים." },
      { id: "blood-pressure", en: "Blood pressure", he: "לחץ דם", say: "בְּלָאד פְּרֶשֶר", ex: "The nurse checked my blood pressure.", exHe: "האחות בדקה לי את לחץ הדם." },
      { id: "allergic", en: "Allergic", he: "אלרגי", say: "אֶלֶרג'יק", ex: "Are you allergic to any food?", exHe: "אתה אלרגי למזון כלשהו?" },
      { id: "side-effects", en: "Side effects", he: "תופעות לוואי", say: "סַייד אִיפֶקטס", ex: "Does this medicine have any side effects?", exHe: "יש לתרופה הזו תופעות לוואי?" },
      { id: "feel-better", en: "Feel better", he: "להרגיש טוב יותר", say: "פִיל בֶּטֶר", ex: "I hope you feel better soon.", exHe: "מקווה שתרגיש טוב יותר בקרוב." }
    ]
  },

  {
    id: "home-errands",
    title: "בבית ובסידורים",
    subtitle: "תיקונים, קניות וסידורים",
    level: 1,
    words: [
      { id: "repair", en: "Repair", he: "לתקן; תיקון", say: "רִיפֶּר", ex: "Can you repair my washing machine?", exHe: "אתה יכול לתקן את מכונת הכביסה שלי?" },
      { id: "plumber", en: "Plumber", he: "אינסטלטור", say: "פְּלָאמֶר (בלי ב׳)", ex: "We need to call a plumber.", exHe: "אנחנו צריכים להזמין אינסטלטור." },
      { id: "leak", en: "Leak", he: "נזילה; לדלוף", say: "לִיק", ex: "There is a leak under the sink.", exHe: "יש נזילה מתחת לכיור." },
      { id: "errands", en: "Errands", he: "סידורים", say: "אֶרֶנדְז", ex: "I have some errands to run this morning.", exHe: "יש לי כמה סידורים לעשות הבוקר." },
      { id: "groceries", en: "Groceries", he: "מצרכים, קניות למטבח", say: "גְרוֹסֶרִיז", ex: "I buy groceries every Thursday.", exHe: "אני קונה מצרכים כל יום חמישי." },
      { id: "laundry", en: "Laundry", he: "כביסה", say: "לוֹנדְרִי", ex: "I do the laundry on Sundays.", exHe: "אני עושה כביסה בימי ראשון." },
      { id: "neighborhood", en: "Neighborhood", he: "שכונה", say: "נֵייבּוֹרהוּד", ex: "It's a quiet neighborhood.", exHe: "זו שכונה שקטה." },
      { id: "tidy", en: "Tidy", he: "מסודר; לסדר", say: "טַיידִי", ex: "My kitchen is always tidy.", exHe: "המטבח שלי תמיד מסודר." }
    ]
  },
  {
    id: "technology",
    title: "טכנולוגיה ביומיום",
    subtitle: "הטלפון, המחשב והאינטרנט",
    level: 1,
    words: [
      { id: "password", en: "Password", he: "סיסמה", say: "פַּאסוֶורד", ex: "I forgot my password again.", exHe: "שכחתי שוב את הסיסמה שלי." },
      { id: "download", en: "Download", he: "להוריד (קובץ, אפליקציה)", say: "דַאוּנלוֹאוּד", ex: "How do I download this app?", exHe: "איך מורידים את האפליקציה הזו?" },
      { id: "charge", en: "Charge", he: "להטעין", say: "צָ'ארג'", ex: "I need to charge my phone.", exHe: "אני צריך להטעין את הטלפון." },
      { id: "battery", en: "Battery", he: "סוללה", say: "בֶּטֶרִי", ex: "The battery is almost empty.", exHe: "הסוללה כמעט ריקה." },
      { id: "update", en: "Update", he: "עדכון; לעדכן", say: "אָפּדֵייט", ex: "The computer is installing an update.", exHe: "המחשב מתקין עדכון." },
      { id: "screen", en: "Screen", he: "מסך", say: "סְקְרִין", ex: "The letters on the screen are too small.", exHe: "האותיות על המסך קטנות מדי." },
      { id: "video-call", en: "Video call", he: "שיחת וידאו", say: "וִידִיאוֹ קוֹל", ex: "Let's have a video call on Sunday.", exHe: "בוא נעשה שיחת וידאו ביום ראשון." },
      { id: "send-a-message", en: "Send a message", he: "לשלוח הודעה", say: "סֶנד אֶ מֶסֶג'", ex: "I'll send a message to the family group.", exHe: "אשלח הודעה לקבוצה המשפחתית." }
    ]
  },
  {
    id: "time-planning",
    title: "זמן ותכנון",
    subtitle: "מתי, כמה זמן ובאיזו תדירות",
    level: 1,
    words: [
      { id: "schedule", en: "Schedule", he: "לוח זמנים", say: "סְקֶג'וּל", ex: "What is your schedule for next week?", exHe: "מה לוח הזמנים שלך לשבוע הבא?" },
      { id: "in-advance", en: "In advance", he: "מראש", say: "אִין אֶדוַונס", ex: "Please book the tickets in advance.", exHe: "בבקשה תזמין את הכרטיסים מראש." },
      { id: "on-time", en: "On time", he: "בזמן", say: "אוֹן טַיים", ex: "The train arrived on time.", exHe: "הרכבת הגיעה בזמן." },
      { id: "as-soon-as-possible", en: "As soon as possible", he: "בהקדם האפשרי", say: "אֶז סוּן אֶז פּוֹסִיבּל", ex: "Please call me back as soon as possible.", exHe: "בבקשה תחזור אליי בהקדם האפשרי." },
      { id: "from-time-to-time", en: "From time to time", he: "מדי פעם", say: "פְרוֹם טַיים טוּ טַיים", ex: "From time to time, I visit my old school.", exHe: "מדי פעם אני מבקר בבית הספר הישן שלי." },
      { id: "lately", en: "Lately", he: "לאחרונה", say: "לֵייטְלִי", ex: "I haven't slept well lately.", exHe: "לא ישנתי טוב לאחרונה." },
      { id: "for-a-while", en: "For a while", he: "לזמן מה", say: "פוֹר אֶ וַוייל", ex: "Let's sit here for a while.", exHe: "בוא נשב כאן לזמן מה." },
      { id: "in-the-meantime", en: "In the meantime", he: "בינתיים", say: "אִין דֶ'ה מִינטַיים", ex: "The doctor is late. In the meantime, let's read.", exHe: "הרופא מאחר. בינתיים, בוא נקרא." }
    ]
  },

  /* ---------- שלב ב׳ · שיחות מהחיים ---------- */
  {
    id: "phrasal-1",
    title: "פעלים עם מילת יחס (א)",
    subtitle: "Phrasal verbs — הלב של האנגלית המדוברת",
    level: 2,
    words: [
      { id: "find-out", en: "Find out", he: "לגלות, לברר", say: "פַיינד אַאוּט", ex: "I called to find out when the train leaves.", exHe: "התקשרתי לברר מתי הרכבת יוצאת." },
      { id: "give-up", en: "Give up", he: "לוותר, להפסיק", say: "גִיב אָפּ", ex: "Don't give up, you are doing great.", exHe: "אל תוותר, אתה מצליח מצוין." },
      { id: "look-after", en: "Look after", he: "להשגיח על, לטפל ב-", say: "לוּק אַפטֶר", ex: "Can you look after the dog this weekend?", exHe: "אתה יכול להשגיח על הכלב בסוף השבוע?" },
      { id: "look-forward-to", en: "Look forward to", he: "לחכות בקוצר רוח ל-", say: "לוּק פוֹרוֶורד טוּ", ex: "I look forward to seeing you.", exHe: "אני מחכה לראות אותך." },
      { id: "get-along", en: "Get along", he: "להסתדר (עם מישהו)", say: "גֶט אֶלוֹנג", ex: "I get along well with my neighbors.", exHe: "אני מסתדר טוב עם השכנים שלי." },
      { id: "turn-down", en: "Turn down", he: "להנמיך; לסרב", say: "טֶרן דַאוּן", ex: "Please turn down the radio.", exHe: "בבקשה תנמיך את הרדיו." },
      { id: "carry-on", en: "Carry on", he: "להמשיך", say: "קֶרִי אוֹן", ex: "Sorry for interrupting, please carry on.", exHe: "סליחה שהפרעתי, בבקשה תמשיך." },
      { id: "figure-out", en: "Figure out", he: "להבין, לפענח", say: "פִיגְיֶר אַאוּט", ex: "I can't figure out how this phone works.", exHe: "אני לא מצליח להבין איך הטלפון הזה עובד." }
    ]
  },
  {
    id: "phrasal-2",
    title: "פעלים עם מילת יחס (ב)",
    subtitle: "עוד צירופים שימושיים",
    level: 2,
    words: [
      { id: "pick-up", en: "Pick up", he: "לאסוף", say: "פִּיק אָפּ", ex: "I will pick up my granddaughter from school.", exHe: "אני אאסוף את הנכדה שלי מבית הספר." },
      { id: "run-out-of", en: "Run out of", he: "שייגמר (מלאי)", say: "רָאן אַאוּט אוֹב", ex: "We have run out of milk.", exHe: "נגמר לנו החלב." },
      { id: "put-off", en: "Put off", he: "לדחות", say: "פּוּט אוֹף", ex: "Don't put off until tomorrow what you can do today.", exHe: "אל תדחה למחר את מה שאפשר לעשות היום." },
      { id: "come-across", en: "Come across", he: "להיתקל ב-", say: "קָאם אֶקרוֹס", ex: "You may come across some old photos in the box.", exHe: "אולי תיתקל בכמה תמונות ישנות בקופסה." },
      { id: "show-up", en: "Show up", he: "להופיע, להגיע", say: "שוֹאוּ אָפּ", ex: "He didn't show up to the meeting.", exHe: "הוא לא הגיע לפגישה." },
      { id: "catch-up", en: "Catch up", he: "להתעדכן; להשלים פער", say: "קֶץ' אָפּ", ex: "Let's meet for coffee and catch up.", exHe: "בוא ניפגש לקפה ונתעדכן." },
      { id: "take-care-of", en: "Take care of", he: "לטפל ב-, לדאוג ל-", say: "טֵייק קֶר אוֹב", ex: "I can take care of it myself.", exHe: "אני יכול לטפל בזה בעצמי." },
      { id: "set-up", en: "Set up", he: "להתקין, לארגן", say: "סֶט אָפּ", ex: "My grandson helped me set up the new computer.", exHe: "הנכד שלי עזר לי להתקין את המחשב החדש." }
    ]
  },
  {
    id: "airport",
    title: "בשדה התעופה",
    subtitle: "מהצ׳ק־אין ועד המטוס",
    level: 2,
    words: [
      { id: "departure", en: "Departure", he: "המראה, יציאה", say: "דִיפָּארצ'ֶר", ex: "The departure time is 6:40.", exHe: "שעת היציאה היא 6:40." },
      { id: "delay", en: "Delay", he: "עיכוב", say: "דִילֵיי", ex: "There is a two-hour delay.", exHe: "יש עיכוב של שעתיים." },
      { id: "luggage", en: "Luggage", he: "מטען, מזוודות", say: "לָאגֶ'ג'", ex: "How many pieces of luggage do you have?", exHe: "כמה פריטי מטען יש לך?" },
      { id: "boarding-pass", en: "Boarding pass", he: "כרטיס עלייה למטוס", say: "בּוֹרדינג פֶּס", ex: "Please show me your boarding pass.", exHe: "בבקשה הראה לי את כרטיס העלייה למטוס." },
      { id: "reservation", en: "Reservation", he: "הזמנה (של מקום)", say: "רֶזֶרוֵיישֶן", ex: "I have a reservation under the name Cohen.", exHe: "יש לי הזמנה על השם כהן." },
      { id: "aisle-seat", en: "Aisle seat", he: "מושב ליד המעבר", say: "אַייל סִיט (בלי ס׳ באמצע)", ex: "I prefer an aisle seat, please.", exHe: "אני מעדיף מושב ליד המעבר, בבקשה." },
      { id: "customs", en: "Customs", he: "מכס", say: "קָאסטֶמְז", ex: "We went through customs quickly.", exHe: "עברנו את המכס מהר." },
      { id: "souvenir", en: "Souvenir", he: "מזכרת", say: "סוּבֶנִיר", ex: "I bought a small souvenir for my grandchildren.", exHe: "קניתי מזכרת קטנה לנכדים שלי." }
    ]
  },
  {
    id: "shopping",
    title: "כסף וקניות",
    subtitle: "בחנות ובמסעדה",
    level: 2,
    words: [
      { id: "receipt", en: "Receipt", he: "קבלה", say: "רִיסִיט (בלי פ׳)", ex: "Can I have a receipt, please?", exHe: "אפשר לקבל קבלה, בבקשה?" },
      { id: "discount", en: "Discount", he: "הנחה", say: "דִיסקַאוּנט", ex: "Is there a discount for pensioners?", exHe: "יש הנחה לגמלאים?" },
      { id: "refund", en: "Refund", he: "החזר כספי", say: "רִיפָאנד", ex: "I would like a refund for this shirt.", exHe: "הייתי רוצה החזר כספי על החולצה הזו." },
      { id: "afford", en: "Afford", he: "להרשות לעצמו (כספית)", say: "אֶפוֹרד", ex: "We can't afford a new car this year.", exHe: "אנחנו לא יכולים להרשות לעצמנו מכונית חדשה השנה." },
      { id: "bargain", en: "Bargain", he: "מציאה", say: "בָּארגֶן", ex: "Only fifty shekels? That's a bargain!", exHe: "רק חמישים שקל? זו מציאה!" },
      { id: "worth-it", en: "Worth it", he: "שווה את זה", say: "ווֶרת' אִיט", ex: "It was expensive, but it was worth it.", exHe: "זה היה יקר, אבל זה היה שווה את זה." },
      { id: "bill", en: "Bill", he: "חשבון", say: "בִּיל", ex: "Could we have the bill, please?", exHe: "אפשר לקבל את החשבון, בבקשה?" },
      { id: "change-money", en: "Change", he: "עודף; שינוי", say: "צֵ'יינג'", ex: "Here is your change.", exHe: "הנה העודף שלך." }
    ]
  },
  {
    id: "news",
    title: "חדשות ואקטואליה",
    subtitle: "להבין מה קורה בעולם",
    level: 2,
    words: [
      { id: "government", en: "Government", he: "ממשלה", say: "גָאבֶרמֶנט", ex: "The government announced a new plan.", exHe: "הממשלה הודיעה על תוכנית חדשה." },
      { id: "economy", en: "Economy", he: "כלכלה", say: "אִיקוֹנוֹמִי", ex: "The economy is growing slowly.", exHe: "הכלכלה צומחת לאט." },
      { id: "increase", en: "Increase", he: "עלייה; לעלות", say: "אִינקְרִיס", ex: "There was an increase in prices this year.", exHe: "הייתה עלייה במחירים השנה." },
      { id: "decrease", en: "Decrease", he: "ירידה; לרדת", say: "דִיקְרִיס", ex: "We saw a decrease in traffic.", exHe: "ראינו ירידה בתנועה." },
      { id: "announce", en: "Announce", he: "להודיע, להכריז", say: "אֶנַאוּנס", ex: "They will announce the results tonight.", exHe: "הם יודיעו על התוצאות הערב." },
      { id: "issue", en: "Issue", he: "נושא, סוגיה", say: "אִישוּ", ex: "Climate change is an important issue.", exHe: "שינוי האקלים הוא נושא חשוב." },
      { id: "headline", en: "Headline", he: "כותרת", say: "הֶדלַיין", ex: "Did you see the headline this morning?", exHe: "ראית את הכותרת הבוקר?" },
      { id: "weather-forecast", en: "Weather forecast", he: "תחזית מזג האוויר", say: "ווֶדֶ'ר פוֹרקַאסט", ex: "The weather forecast says it will rain.", exHe: "תחזית מזג האוויר אומרת שירד גשם." }
    ]
  },

  {
    id: "phrasal-3",
    title: "פעלים עם מילת יחס (ג)",
    subtitle: "בטלפון, בטפסים ובחיים",
    level: 2,
    words: [
      { id: "get-over", en: "Get over", he: "להתגבר על, להחלים מ-", say: "גֶט אוֹבֶר", ex: "It took me a month to get over the flu.", exHe: "לקח לי חודש להחלים מהשפעת." },
      { id: "look-up", en: "Look up", he: "לחפש (מידע)", say: "לוּק אָפּ", ex: "I'll look up the word in the dictionary.", exHe: "אחפש את המילה במילון." },
      { id: "go-through", en: "Go through", he: "לעבור על; לעבור (חוויה)", say: "גוֹאוּ ת'רוּ", ex: "Let's go through the list together.", exHe: "בוא נעבור על הרשימה ביחד." },
      { id: "end-up", en: "End up", he: "למצוא את עצמך בסוף (עושה משהו)", say: "אֶנד אָפּ", ex: "Be careful, or you will end up paying more.", exHe: "תיזהר, אחרת בסוף תשלם יותר." },
      { id: "bring-up", en: "Bring up", he: "להעלות (נושא); לגדל (ילדים)", say: "בְּרִינג אָפּ", ex: "I didn't want to bring up the subject.", exHe: "לא רציתי להעלות את הנושא." },
      { id: "hold-on", en: "Hold on", he: "רגע, חכה; להחזיק חזק", say: "הוֹלד אוֹן", ex: "Hold on, I'll get my glasses.", exHe: "רגע, אביא את המשקפיים שלי." },
      { id: "call-back", en: "Call back", he: "לחזור (בטלפון)", say: "קוֹל בֶּק", ex: "Can you call back in ten minutes?", exHe: "אתה יכול לחזור אליי בעוד עשר דקות?" },
      { id: "fill-in", en: "Fill in", he: "למלא (טופס)", say: "פִיל אִין", ex: "Please fill in this form.", exHe: "בבקשה מלא את הטופס הזה." }
    ]
  },
  {
    id: "restaurant",
    title: "במסעדה",
    subtitle: "מזמינים כמו מקומיים",
    level: 2,
    words: [
      { id: "order", en: "Order", he: "להזמין; הזמנה", say: "אוֹרדֶר", ex: "Are you ready to order?", exHe: "אתם מוכנים להזמין?" },
      { id: "starter", en: "Starter", he: "מנה ראשונה", say: "סְטָארטֶר", ex: "I'll have the soup as a starter.", exHe: "אקח את המרק כמנה ראשונה." },
      { id: "main-course", en: "Main course", he: "מנה עיקרית", say: "מֵיין קוֹרס", ex: "What do you recommend for the main course?", exHe: "מה אתה ממליץ למנה העיקרית?" },
      { id: "dessert", en: "Dessert", he: "קינוח", say: "דִיזֶרט", ex: "Let's share a dessert.", exHe: "בוא נתחלק בקינוח." },
      { id: "spicy", en: "Spicy", he: "חריף", say: "סְפַּייסִי", ex: "Is this dish very spicy?", exHe: "המנה הזו חריפה מאוד?" },
      { id: "vegetarian", en: "Vegetarian", he: "צמחוני", say: "וֶג'ֶטֶרִיאֶן", ex: "Do you have any vegetarian dishes?", exHe: "יש לכם מנות צמחוניות?" },
      { id: "tip", en: "Tip", he: "טיפ (למלצר)", say: "טִיפּ", ex: "We left a good tip for the waiter.", exHe: "השארנו טיפ טוב למלצר." },
      { id: "table-for-two", en: "Table for two", he: "שולחן לשניים", say: "טֵייבּל פוֹר טוּ", ex: "A table for two, please.", exHe: "שולחן לשניים, בבקשה." }
    ]
  },
  {
    id: "bank-post",
    title: "בבנק ובדואר",
    subtitle: "סידורים חשובים",
    level: 2,
    words: [
      { id: "account", en: "Account", he: "חשבון (בבנק)", say: "אֶקַאוּנט", ex: "I'd like to open a savings account.", exHe: "הייתי רוצה לפתוח חשבון חיסכון." },
      { id: "withdraw", en: "Withdraw", he: "למשוך (כסף)", say: "וִוידְ'דְרוֹ", ex: "I want to withdraw some cash.", exHe: "אני רוצה למשוך קצת מזומן." },
      { id: "deposit", en: "Deposit", he: "להפקיד; הפקדה", say: "דִיפּוֹזִיט", ex: "I need to deposit a check.", exHe: "אני צריך להפקיד צ׳ק." },
      { id: "fee", en: "Fee", he: "עמלה, תשלום", say: "פִי", ex: "Is there a fee for this service?", exHe: "יש עמלה על השירות הזה?" },
      { id: "branch", en: "Branch", he: "סניף", say: "בְּרֶנץ'", ex: "Which branch is closest to here?", exHe: "איזה סניף הכי קרוב לכאן?" },
      { id: "signature", en: "Signature", he: "חתימה", say: "סִיגְנֶצ'ֶר", ex: "I need your signature here.", exHe: "אני צריך את החתימה שלך כאן." },
      { id: "parcel", en: "Parcel", he: "חבילה", say: "פָּארסֶל", ex: "I'd like to send this parcel to London.", exHe: "הייתי רוצה לשלוח את החבילה הזו ללונדון." },
      { id: "stamp", en: "Stamp", he: "בול; חותמת", say: "סְטֶמפּ", ex: "How much is a stamp for a letter abroad?", exHe: "כמה עולה בול למכתב לחו״ל?" }
    ]
  },
  {
    id: "weather",
    title: "מזג אוויר וטבע",
    subtitle: "הנושא האהוב על האנגלים",
    level: 2,
    words: [
      { id: "humid", en: "Humid", he: "לח", say: "הְיוּמִיד", ex: "It's very humid in Tel Aviv in August.", exHe: "בתל אביב לח מאוד באוגוסט." },
      { id: "heatwave", en: "Heatwave", he: "גל חום", say: "הִיטוֵויב", ex: "There is a heatwave this week.", exHe: "יש גל חום השבוע." },
      { id: "breeze", en: "Breeze", he: "בריזה, משב רוח", say: "בְּרִיז", ex: "There is a nice breeze from the sea.", exHe: "יש בריזה נעימה מהים." },
      { id: "storm", en: "Storm", he: "סערה", say: "סְטוֹרם", ex: "The storm lasted all night.", exHe: "הסערה נמשכה כל הלילה." },
      { id: "cloudy", en: "Cloudy", he: "מעונן", say: "קְלַאוּדִי", ex: "It's cloudy, but it isn't raining.", exHe: "מעונן, אבל לא יורד גשם." },
      { id: "sunrise", en: "Sunrise", he: "זריחה", say: "סָאנרַייז", ex: "We woke up early to watch the sunrise.", exHe: "קמנו מוקדם לראות את הזריחה." },
      { id: "sunset", en: "Sunset", he: "שקיעה", say: "סָאנסֶט", ex: "The sunset over the sea was beautiful.", exHe: "השקיעה מעל הים הייתה יפהפייה." },
      { id: "temperature", en: "Temperature", he: "טמפרטורה", say: "טֶמפְּרֶצ'ֶר", ex: "The temperature will drop tonight.", exHe: "הטמפרטורה תרד הלילה." }
    ]
  },

  /* ---------- שלב ג׳ · להביע את עצמך ---------- */
  {
    id: "opinions",
    title: "להביע דעה",
    subtitle: "להסכים, לחלוק ולהסביר",
    level: 3,
    words: [
      { id: "in-my-opinion", en: "In my opinion", he: "לדעתי", say: "אִין מַאי אוֹפִּינְיֶן", ex: "In my opinion, the old film was better.", exHe: "לדעתי, הסרט הישן היה טוב יותר." },
      { id: "i-disagree", en: "I disagree", he: "אני לא מסכים", say: "אַיי דִיסאֶגְרִי", ex: "I'm sorry, but I disagree.", exHe: "סליחה, אבל אני לא מסכים." },
      { id: "on-the-other-hand", en: "On the other hand", he: "מצד שני", say: "אוֹן דִ'י אָדֶ'ר הֶנד", ex: "It's expensive. On the other hand, the quality is very good.", exHe: "זה יקר. מצד שני, האיכות טובה מאוד." },
      { id: "it-depends", en: "It depends", he: "זה תלוי", say: "אִיט דִיפֶּנדְז", ex: "Will I go? It depends on the weather.", exHe: "האם אלך? זה תלוי במזג האוויר." },
      { id: "as-far-as-i-know", en: "As far as I know", he: "עד כמה שידוע לי", say: "אֶז פָאר אֶז אַיי נוֹאוּ", ex: "As far as I know, the shop is closed on Saturday.", exHe: "עד כמה שידוע לי, החנות סגורה בשבת." },
      { id: "to-be-honest", en: "To be honest", he: "האמת היא, בכנות", say: "טוּ בִּי אוֹנֶסט", ex: "To be honest, I didn't like the movie.", exHe: "האמת, לא אהבתי את הסרט." },
      { id: "i-doubt-it", en: "I doubt it", he: "אני בספק", say: "אַיי דַאוּט אִיט (בלי ב׳)", ex: "Will he come on time? I doubt it.", exHe: "הוא יגיע בזמן? אני בספק." },
      { id: "exactly", en: "Exactly", he: "בדיוק", say: "אִיגזֶקטלִי", ex: "Exactly, that's what I was trying to say.", exHe: "בדיוק, זה מה שניסיתי להגיד." }
    ]
  },
  {
    id: "feelings",
    title: "רגשות ותחושות",
    subtitle: "מעבר ל״שמח״ ו״עצוב״",
    level: 3,
    words: [
      { id: "grateful", en: "Grateful", he: "אסיר תודה", say: "גְרֵייטפוּל", ex: "I am grateful for my family.", exHe: "אני אסיר תודה על המשפחה שלי." },
      { id: "disappointed", en: "Disappointed", he: "מאוכזב", say: "דִיסאֶפּוֹינטֶד", ex: "I was disappointed with the hotel.", exHe: "התאכזבתי מהמלון." },
      { id: "relieved", en: "Relieved", he: "רווח לו, הוקל לו", say: "רִילִיבְד", ex: "I was relieved to hear the good news.", exHe: "הוקל לי לשמוע את החדשות הטובות." },
      { id: "worried", en: "Worried", he: "מודאג", say: "ווֹרִיד", ex: "Don't be worried, everything is fine.", exHe: "אל תדאג, הכול בסדר." },
      { id: "proud", en: "Proud", he: "גאה", say: "פְּרַאוּד", ex: "I am very proud of my grandchildren.", exHe: "אני מאוד גאה בנכדים שלי." },
      { id: "embarrassed", en: "Embarrassed", he: "נבוך", say: "אֶמבֶּרֶסְט", ex: "I was embarrassed when I forgot his name.", exHe: "הייתי נבוך כששכחתי את השם שלו." },
      { id: "nostalgic", en: "Nostalgic", he: "נוסטלגי", say: "נוֹסטֶלְג'יק", ex: "This song makes me feel nostalgic.", exHe: "השיר הזה גורם לי להרגיש נוסטלגי." },
      { id: "confused", en: "Confused", he: "מבולבל", say: "קוֹנפְיוּזְד", ex: "I'm a little confused by these instructions.", exHe: "אני קצת מבולבל מההוראות האלה." }
    ]
  },
  {
    id: "idioms",
    title: "ניבים ושפה מדוברת",
    subtitle: "מה שהאנגלים באמת אומרים",
    level: 3,
    words: [
      { id: "piece-of-cake", en: "Piece of cake", he: "קל מאוד (״חתיכת עוגה״)", say: "פִּיס אוֹב קֵייק", ex: "The test was a piece of cake.", exHe: "המבחן היה קל מאוד." },
      { id: "break-the-ice", en: "Break the ice", he: "לשבור את הקרח", say: "בְּרֵייק דִ'י אַייס", ex: "He told a joke to break the ice.", exHe: "הוא סיפר בדיחה כדי לשבור את הקרח." },
      { id: "once-in-a-blue-moon", en: "Once in a blue moon", he: "לעיתים רחוקות מאוד", say: "וָואנס אִין אֶ בְּלוּ מוּן", ex: "We go to the theater once in a blue moon.", exHe: "אנחנו הולכים לתיאטרון לעיתים רחוקות מאוד." },
      { id: "under-the-weather", en: "Under the weather", he: "לא מרגיש טוב, קצת חולה", say: "אָנדֶר דֶ'ה ווֶדֶ'ר", ex: "I'm feeling a bit under the weather today.", exHe: "אני מרגיש קצת לא טוב היום." },
      { id: "keep-in-touch", en: "Keep in touch", he: "לשמור על קשר", say: "קִיפּ אִין טָאץ'", ex: "Let's keep in touch after the trip.", exHe: "בוא נשמור על קשר אחרי הטיול." },
      { id: "its-up-to-you", en: "It's up to you", he: "ההחלטה שלך", say: "אִיטס אָפּ טוּ יוּ", ex: "Tea or coffee? It's up to you.", exHe: "תה או קפה? ההחלטה שלך." },
      { id: "better-late-than-never", en: "Better late than never", he: "מוטב מאוחר מאשר לעולם לא", say: "בֶּטֶר לֵייט דֶ'ן נֶבֶר", ex: "I finally learned to send emails. Better late than never!", exHe: "סוף סוף למדתי לשלוח מיילים. מוטב מאוחר מאשר לעולם לא!" },
      { id: "in-the-same-boat", en: "In the same boat", he: "באותה סירה", say: "אִין דֶ'ה סֵיים בּוֹאוּט", ex: "Don't worry, we are all in the same boat.", exHe: "אל תדאג, כולנו באותה סירה." }
    ]
  },
  {
    id: "linking",
    title: "מילות קישור",
    subtitle: "לחבר משפטים כמו דובר אנגלית",
    level: 3,
    words: [
      { id: "although", en: "Although", he: "למרות ש-", say: "אוֹלדֶ'וֹאוּ", ex: "Although it was raining, we went for a walk.", exHe: "למרות שירד גשם, יצאנו לטיול." },
      { id: "however", en: "However", he: "עם זאת, אולם", say: "הַאוּאֶבֶר", ex: "The food was good. However, it was too expensive.", exHe: "האוכל היה טוב. עם זאת, הוא היה יקר מדי." },
      { id: "eventually", en: "Eventually", he: "בסופו של דבר", say: "אִיבֶנצ'וּאַלִי", ex: "Eventually, we found the right street.", exHe: "בסופו של דבר, מצאנו את הרחוב הנכון." },
      { id: "actually", en: "Actually", he: "בעצם, למעשה", say: "אֶקצ'וּאַלִי", ex: "Actually, I've been here before.", exHe: "בעצם, כבר הייתי כאן פעם." },
      { id: "apparently", en: "Apparently", he: "מסתבר ש-, כנראה", say: "אֶפֶּרֶנטלִי", ex: "Apparently, the shop closed last year.", exHe: "מסתבר שהחנות נסגרה בשנה שעברה." },
      { id: "especially", en: "Especially", he: "במיוחד", say: "אֶספֶּשֶלִי", ex: "I love fruit, especially mangoes.", exHe: "אני אוהב פירות, במיוחד מנגו." },
      { id: "unfortunately", en: "Unfortunately", he: "לצערי, למרבה הצער", say: "אָנפוֹרצֶ'נֶטלִי", ex: "Unfortunately, the flight was cancelled.", exHe: "לצערי, הטיסה בוטלה." },
      { id: "instead-of", en: "Instead of", he: "במקום", say: "אִינסְטֶד אוֹב", ex: "Let's take the train instead of the car.", exHe: "בוא ניסע ברכבת במקום במכונית." }
    ]
  },
  {
    id: "memories",
    title: "זיכרונות ועבר",
    subtitle: "לספר על פעם",
    level: 3,
    words: [
      { id: "used-to", en: "Used to", he: "(בעבר) נהגתי ל-, פעם", say: "יוּזְד טוּ", ex: "I used to work at the port in Haifa.", exHe: "פעם עבדתי בנמל בחיפה." },
      { id: "grew-up", en: "Grew up", he: "גדלתי, גדל", say: "גְרוּ אָפּ", ex: "I grew up in a small village.", exHe: "גדלתי בכפר קטן." },
      { id: "childhood", en: "Childhood", he: "ילדות", say: "צַ'יילדְהוּד", ex: "I had a happy childhood.", exHe: "הייתה לי ילדות מאושרת." },
      { id: "generation", en: "Generation", he: "דור", say: "ג'ֶנֶרֵיישֶן", ex: "Every generation has its own music.", exHe: "לכל דור יש את המוזיקה שלו." },
      { id: "nowadays", en: "Nowadays", he: "בימינו", say: "נַאוּאֶדֵייז", ex: "Nowadays, everyone has a mobile phone.", exHe: "בימינו, לכל אחד יש טלפון נייד." },
      { id: "back-then", en: "Back then", he: "באותם ימים, אז", say: "בֶּק דֶ'ן", ex: "Back then, we wrote letters by hand.", exHe: "באותם ימים, כתבנו מכתבים בכתב יד." },
      { id: "remind", en: "Remind", he: "להזכיר (למישהו)", say: "רִימַיינד", ex: "You remind me of my younger brother.", exHe: "אתה מזכיר לי את אחי הצעיר." },
      { id: "memories-word", en: "Memories", he: "זיכרונות", say: "מֶמוֹרִיז", ex: "I have wonderful memories of that trip.", exHe: "יש לי זיכרונות נפלאים מהטיול ההוא." }
    ]
  },
  {
    id: "polite",
    title: "בקשות בנימוס",
    subtitle: "לבקש, להציע ולסרב יפה",
    level: 3,
    words: [
      { id: "would-you-mind", en: "Would you mind", he: "אכפת לך ש...?", say: "וּוּד יוּ מַיינד", ex: "Would you mind opening the window?", exHe: "אכפת לך לפתוח את החלון?" },
      { id: "could-you-possibly", en: "Could you possibly", he: "תוכל אולי...?", say: "קוּד יוּ פּוֹסִיבְּלִי", ex: "Could you possibly help me with my bag?", exHe: "תוכל אולי לעזור לי עם התיק?" },
      { id: "i-was-wondering-if", en: "I was wondering if", he: "רציתי לשאול אם...", say: "אַיי ווֹז וָואנדֶרִינג אִיף", ex: "I was wondering if you are free tomorrow.", exHe: "רציתי לשאול אם אתה פנוי מחר." },
      { id: "do-you-happen-to-know", en: "Do you happen to know", he: "אתה במקרה יודע...?", say: "דוּ יוּ הֶפֶּן טוּ נוֹאוּ", ex: "Do you happen to know where the post office is?", exHe: "אתה במקרה יודע איפה הדואר?" },
      { id: "id-rather", en: "I'd rather", he: "אני מעדיף", say: "אַייד רָאדֶ'ר", ex: "I'd rather stay at home tonight.", exHe: "אני מעדיף להישאר בבית הערב." },
      { id: "im-afraid", en: "I'm afraid", he: "לצערי, אני חושש ש-", say: "אַיים אֶפְרֵייד", ex: "I'm afraid I can't come on Friday.", exHe: "לצערי אני לא אוכל לבוא ביום שישי." },
      { id: "excuse-me-for-interrupting", en: "Excuse me for interrupting", he: "סליחה שאני מפריע", say: "אִיקסְקְיוּז מִי פוֹר אִינטֶרָאפּטִינג", ex: "Excuse me for interrupting, but your phone is ringing.", exHe: "סליחה שאני מפריע, אבל הטלפון שלך מצלצל." },
      { id: "no-problem-at-all", en: "No problem at all", he: "אין שום בעיה", say: "נוֹאוּ פְּרוֹבְּלֶם אֶט אוֹל", ex: "Of course I'll help. No problem at all.", exHe: "כמובן שאעזור. אין שום בעיה." }
    ]
  },
  {
    id: "make-do",
    title: "make או do?",
    subtitle: "צירופים שכדאי לזכור בעל פה",
    level: 3,
    words: [
      { id: "make-a-decision", en: "Make a decision", he: "לקבל החלטה", say: "מֵייק אֶ דִיסִיז'ֶן", ex: "It's time to make a decision.", exHe: "הגיע הזמן לקבל החלטה." },
      { id: "make-a-mistake", en: "Make a mistake", he: "לטעות", say: "מֵייק אֶ מִיסְטֵייק", ex: "Everyone can make a mistake.", exHe: "כל אחד יכול לטעות." },
      { id: "make-an-effort", en: "Make an effort", he: "להתאמץ", say: "מֵייק אֶן אֶפֶרט", ex: "Please make an effort to come.", exHe: "בבקשה תתאמץ להגיע." },
      { id: "make-sure", en: "Make sure", he: "לוודא", say: "מֵייק שוּר", ex: "Make sure the door is locked.", exHe: "תוודא שהדלת נעולה." },
      { id: "make-progress", en: "Make progress", he: "להתקדם", say: "מֵייק פְּרוֹגְרֶס", ex: "You make progress every day.", exHe: "אתה מתקדם כל יום." },
      { id: "do-me-a-favor", en: "Do me a favor", he: "לעשות לי טובה", say: "דוּ מִי אֶ פֵייבֶר", ex: "Could you do me a favor?", exHe: "תוכל לעשות לי טובה?" },
      { id: "do-the-shopping", en: "Do the shopping", he: "לעשות קניות", say: "דוּ דֶ'ה שוֹפִּינג", ex: "I do the shopping on Friday mornings.", exHe: "אני עושה קניות בימי שישי בבוקר." },
      { id: "do-your-best", en: "Do your best", he: "לעשות כמיטב יכולתך", say: "דוּ יוֹר בֶּסט", ex: "Just do your best.", exHe: "פשוט תעשה כמיטב יכולתך." }
    ]
  },
  {
    id: "idioms-2",
    title: "ניבים (ב)",
    subtitle: "עוד ביטויים שהאנגלים אוהבים",
    level: 3,
    words: [
      { id: "cost-an-arm-and-a-leg", en: "Cost an arm and a leg", he: "לעלות הון תועפות", say: "קוֹסט אֶן אָרם אֶנד אֶ לֶג", ex: "A new car will cost an arm and a leg.", exHe: "מכונית חדשה תעלה הון תועפות." },
      { id: "a-blessing-in-disguise", en: "A blessing in disguise", he: "מזל שהתגלה בדיעבד", say: "אֶ בְּלֶסִינג אִין דִיסְגַייז", ex: "Missing the bus was a blessing in disguise.", exHe: "זה שפספסתי את האוטובוס התברר בדיעבד כמזל." },
      { id: "call-it-a-day", en: "Call it a day", he: "לסיים להיום", say: "קוֹל אִיט אֶ דֵיי", ex: "We've worked enough. Let's call it a day.", exHe: "עבדנו מספיק. בוא נסיים להיום." },
      { id: "get-the-hang-of-it", en: "Get the hang of it", he: "לתפוס את העניין, להתרגל", say: "גֶט דֶ'ה הֶנג אוֹב אִיט", ex: "It's difficult at first, but you will get the hang of it.", exHe: "בהתחלה זה קשה, אבל תתפוס את העניין." },
      { id: "on-the-tip-of-my-tongue", en: "On the tip of my tongue", he: "על קצה הלשון", say: "אוֹן דֶ'ה טִיפּ אוֹב מַאי טָאנג", ex: "His name is on the tip of my tongue.", exHe: "השם שלו על קצה הלשון שלי." },
      { id: "take-it-easy", en: "Take it easy", he: "לקחת בקלות, לנוח", say: "טֵייק אִיט אִיזִי", ex: "Take it easy, there's no hurry.", exHe: "קח את זה בקלות, אין לחץ." },
      { id: "in-a-nutshell", en: "In a nutshell", he: "בקיצור, בתמצית", say: "אִין אֶ נָאטשֶל", ex: "In a nutshell, the trip was wonderful.", exHe: "בקיצור, הטיול היה נפלא." },
      { id: "out-of-the-blue", en: "Out of the blue", he: "משום מקום, בלי הודעה מוקדמת", say: "אַאוּט אוֹב דֶ'ה בְּלוּ", ex: "My old friend called me out of the blue.", exHe: "חבר ותיק התקשר אליי משום מקום." }
    ]
  },
  {
    id: "storytelling",
    title: "לספר סיפור",
    subtitle: "מילים שמזיזות את העלילה",
    level: 3,
    words: [
      { id: "at-first", en: "At first", he: "בהתחלה", say: "אֶט פֶרסט", ex: "At first, I didn't like the city.", exHe: "בהתחלה, לא אהבתי את העיר." },
      { id: "after-that", en: "After that", he: "אחרי זה", say: "אַפטֶר דֶ'ט", ex: "We had lunch. After that, we went to the museum.", exHe: "אכלנו צהריים. אחרי זה, הלכנו למוזיאון." },
      { id: "suddenly", en: "Suddenly", he: "פתאום", say: "סָאדֶנְלִי", ex: "Suddenly, the lights went out.", exHe: "פתאום, האורות כבו." },
      { id: "later-on", en: "Later on", he: "מאוחר יותר", say: "לֵייטֶר אוֹן", ex: "Later on, we found out the truth.", exHe: "מאוחר יותר, גילינו את האמת." },
      { id: "in-the-end", en: "In the end", he: "בסוף", say: "אִין דִ'י אֶנד", ex: "In the end, everything was fine.", exHe: "בסוף, הכול היה בסדר." },
      { id: "by-the-time", en: "By the time", he: "עד ש- (עד שכבר)", say: "בַּאי דֶ'ה טַיים", ex: "By the time we arrived, the shop was closed.", exHe: "עד שהגענו, החנות כבר הייתה סגורה." },
      { id: "as-soon-as", en: "As soon as", he: "ברגע ש-", say: "אֶז סוּן אֶז", ex: "Call me as soon as you arrive.", exHe: "תתקשר אליי ברגע שאתה מגיע." },
      { id: "it-turned-out", en: "It turned out", he: "התברר ש-", say: "אִיט טֶרנְד אַאוּט", ex: "It turned out that he was right.", exHe: "התברר שהוא צדק." }
    ]
  },

  /* ---------- שלב ד׳ · אנגלית מתקדמת (B2) ---------- */
  {
    id: "phrasal-4",
    title: "פעלים עם מילת יחס (ד)",
    subtitle: "צירופים מתקדמים",
    level: 4,
    words: [
      { id: "come-up-with", en: "Come up with", he: "להמציא, להעלות (רעיון)", say: "קָאם אָפּ וִוית'", ex: "We need to come up with a better plan.", exHe: "אנחנו צריכים להמציא תוכנית טובה יותר." },
      { id: "put-up-with", en: "Put up with", he: "לסבול, להשלים עם", say: "פּוּט אָפּ וִוית'", ex: "I can't put up with this noise any longer.", exHe: "אני לא יכול לסבול את הרעש הזה יותר." },
      { id: "look-into", en: "Look into", he: "לבדוק, לחקור (עניין)", say: "לוּק אִינטוּ", ex: "The manager promised to look into the problem.", exHe: "המנהל הבטיח לבדוק את הבעיה." },
      { id: "run-into", en: "Run into", he: "להיתקל ב- (במקרה)", say: "רָאן אִינטוּ", ex: "I didn't expect to run into an old friend at the market.", exHe: "לא ציפיתי להיתקל בחבר ותיק בשוק." },
      { id: "fall-through", en: "Fall through", he: "להתבטל, לא לצאת לפועל", say: "פוֹל ת'רוּ", ex: "Our plans for the trip may fall through.", exHe: "התוכניות שלנו לטיול עלולות להתבטל." },
      { id: "live-up-to", en: "Live up to", he: "לעמוד בציפיות", say: "לִיב אָפּ טוּ", ex: "The hotel didn't live up to our expectations.", exHe: "המלון לא עמד בציפיות שלנו." },
      { id: "get-away-with", en: "Get away with", he: "לצאת פטור (בלי עונש)", say: "גֶט אֶוֵויי וִוית'", ex: "He thought he could get away with it.", exHe: "הוא חשב שיצליח לצאת מזה בלי עונש." },
      { id: "cut-down-on", en: "Cut down on", he: "לצמצם, להפחית", say: "קָאט דַאוּן אוֹן", ex: "The doctor told me to cut down on salt.", exHe: "הרופא אמר לי להפחית במלח." }
    ]
  },
  {
    id: "structures",
    title: "מבנים מתקדמים",
    subtitle: "ביטויים שמשדרגים כל משפט",
    level: 4,
    words: [
      { id: "if-i-were-you", en: "If I were you", he: "אם הייתי במקומך", say: "אִיף אַיי וֶור יוּ", ex: "If I were you, I would take the train.", exHe: "אם הייתי במקומך, הייתי נוסע ברכבת." },
      { id: "had-better", en: "Had better", he: "כדאי מאוד ש- (אחרת...)", say: "הֶד בֶּטֶר", ex: "We had better leave now, or we'll miss the bus.", exHe: "כדאי שנצא עכשיו, אחרת נפספס את האוטובוס." },
      { id: "supposed-to", en: "Supposed to", he: "אמור ל-", say: "סֶפּוֹאוּזְד טוּ", ex: "The train was supposed to arrive at noon.", exHe: "הרכבת הייתה אמורה להגיע בצהריים." },
      { id: "might-as-well", en: "Might as well", he: "אפשר באותה מידה, כבר עדיף", say: "מַייט אֶז וֶול", ex: "It's raining, so we might as well stay at home.", exHe: "יורד גשם, אז כבר עדיף שנישאר בבית." },
      { id: "no-matter-how", en: "No matter how", he: "לא משנה כמה / איך", say: "נוֹאוּ מֶטֶר הַאוּ", ex: "No matter how hard I try, I can't remember his name.", exHe: "לא משנה כמה אני מתאמץ, אני לא מצליח לזכור את השם שלו." },
      { id: "used-to-doing", en: "Used to doing", he: "רגיל ל- (לעשות משהו)", say: "יוּזְד טוּ דוּאִינג", ex: "I'm not used to doing everything on the computer.", exHe: "אני לא רגיל לעשות הכול במחשב." },
      { id: "the-more-the-better", en: "The more, the better", he: "כמה שיותר, יותר טוב", say: "דֶ'ה מוֹר, דֶ'ה בֶּטֶר", ex: "Invite the whole family. The more, the better!", exHe: "תזמין את כל המשפחה. כמה שיותר, יותר טוב!" },
      { id: "as-long-as", en: "As long as", he: "כל עוד, בתנאי ש-", say: "אֶז לוֹנג אֶז", ex: "You can borrow my car as long as you drive carefully.", exHe: "אתה יכול לשאול את המכונית שלי, כל עוד אתה נוהג בזהירות." }
    ]
  },
  {
    id: "collocations",
    title: "צירופים קבועים",
    subtitle: "מילים שתמיד באות ביחד",
    level: 4,
    words: [
      { id: "take-advantage-of", en: "Take advantage of", he: "לנצל (הזדמנות)", say: "טֵייק אֶדוַונטֶג' אוֹב", ex: "Let's take advantage of the good weather.", exHe: "בוא ננצל את מזג האוויר הטוב." },
      { id: "pay-attention-to", en: "Pay attention to", he: "לשים לב ל-", say: "פֵּיי אֶטֶנשֶן טוּ", ex: "Please pay attention to the signs.", exHe: "בבקשה שים לב לשלטים." },
      { id: "take-into-account", en: "Take into account", he: "לקחת בחשבון", say: "טֵייק אִינטוּ אֶקַאוּנט", ex: "You should take into account the cost of the hotel.", exHe: "כדאי לך לקחת בחשבון את מחיר המלון." },
      { id: "keep-an-eye-on", en: "Keep an eye on", he: "לפקוח עין על, להשגיח", say: "קִיפּ אֶן אַיי אוֹן", ex: "Could you keep an eye on my bag for a minute?", exHe: "תוכל להשגיח על התיק שלי לדקה?" },
      { id: "make-up-your-mind", en: "Make up your mind", he: "להחליט סופית", say: "מֵייק אָפּ יוֹר מַיינד", ex: "You have to make up your mind by Friday.", exHe: "אתה חייב להחליט עד יום שישי." },
      { id: "come-to-terms-with", en: "Come to terms with", he: "להשלים עם", say: "קָאם טוּ טֶרמְז וִוית'", ex: "It took time to come to terms with the change.", exHe: "לקח זמן להשלים עם השינוי." },
      { id: "lose-track-of", en: "Lose track of", he: "לאבד מעקב אחרי", say: "לוּז טְרֶק אוֹב", ex: "I always lose track of time when I read.", exHe: "אני תמיד מאבד תחושת זמן כשאני קורא." },
      { id: "take-part-in", en: "Take part in", he: "להשתתף ב-", say: "טֵייק פָּארט אִין", ex: "Many people take part in the yearly march.", exHe: "הרבה אנשים משתתפים בצעדה השנתית." }
    ]
  },
  {
    id: "health-lifestyle",
    title: "בריאות ואורח חיים",
    subtitle: "לשמור על עצמנו",
    level: 4,
    words: [
      { id: "check-up", en: "Check-up", he: "בדיקה תקופתית", say: "צֶ'ק־אָפּ", ex: "I have my yearly check-up next week.", exHe: "יש לי בדיקה שנתית בשבוע הבא." },
      { id: "work-out", en: "Work out", he: "להתאמן (כושר)", say: "וֶורק אַאוּט", ex: "I try to work out three times a week.", exHe: "אני משתדל להתאמן שלוש פעמים בשבוע." },
      { id: "balanced-diet", en: "Balanced diet", he: "תזונה מאוזנת", say: "בֶּלֶנסְט דַייאֶט", ex: "A balanced diet is important at any age.", exHe: "תזונה מאוזנת חשובה בכל גיל." },
      { id: "fresh-air", en: "Fresh air", he: "אוויר צח", say: "פְרֶש אֶר", ex: "Let's go out and get some fresh air.", exHe: "בוא נצא לנשום קצת אוויר צח." },
      { id: "stay-hydrated", en: "Stay hydrated", he: "לשתות מספיק מים", say: "סְטֵיי הַיידְרֵייטֶד", ex: "In the summer, it's important to stay hydrated.", exHe: "בקיץ חשוב לשתות מספיק מים." },
      { id: "physiotherapy", en: "Physiotherapy", he: "פיזיותרפיה", say: "פִיזִיוֹת'ֶרֶפִּי", ex: "Physiotherapy helped my back a lot.", exHe: "הפיזיותרפיה עזרה לגב שלי מאוד." },
      { id: "get-some-rest", en: "Get some rest", he: "לנוח קצת", say: "גֶט סָאם רֶסט", ex: "You look tired. Go and get some rest.", exHe: "אתה נראה עייף. לך לנוח קצת." },
      { id: "in-good-shape", en: "In good shape", he: "בכושר טוב", say: "אִין גוּד שֵייפּ", ex: "For his age, he is in good shape.", exHe: "ביחס לגילו, הוא בכושר טוב." }
    ]
  },
  {
    id: "money-advanced",
    title: "כסף וכלכלה",
    subtitle: "פנסיה, חסכונות ותקציב",
    level: 4,
    words: [
      { id: "pension", en: "Pension", he: "פנסיה, קצבה", say: "פֶּנשֶן", ex: "My pension arrives at the beginning of the month.", exHe: "הפנסיה שלי מגיעה בתחילת החודש." },
      { id: "savings", en: "Savings", he: "חסכונות", say: "סֵייבִינגְז", ex: "We used our savings to help the children.", exHe: "השתמשנו בחסכונות שלנו כדי לעזור לילדים." },
      { id: "interest-rate", en: "Interest rate", he: "שיעור ריבית", say: "אִינטְרֶסט רֵייט", ex: "The bank raised the interest rate again.", exHe: "הבנק העלה שוב את הריבית." },
      { id: "budget", en: "Budget", he: "תקציב", say: "בָּאג'ֶט", ex: "We have a budget for the holiday.", exHe: "יש לנו תקציב לחופשה." },
      { id: "inflation", en: "Inflation", he: "אינפלציה", say: "אִינפְלֵיישֶן", ex: "Inflation makes everything more expensive.", exHe: "האינפלציה מייקרת את הכול." },
      { id: "invest", en: "Invest", he: "להשקיע", say: "אִינוֶוסט", ex: "My son wants to invest in a small business.", exHe: "הבן שלי רוצה להשקיע בעסק קטן." },
      { id: "retire", en: "Retire", he: "לפרוש (לגמלאות)", say: "רִיטַאייר", ex: "I decided to retire at sixty-seven.", exHe: "החלטתי לפרוש בגיל שישים ושבע." },
      { id: "make-ends-meet", en: "Make ends meet", he: "לגמור את החודש", say: "מֵייק אֶנדְז מִיט", ex: "Many families struggle to make ends meet.", exHe: "משפחות רבות מתקשות לגמור את החודש." }
    ]
  },
  {
    id: "culture",
    title: "תרבות ובידור",
    subtitle: "סרטים, ספרים ותערוכות",
    level: 4,
    words: [
      { id: "documentary", en: "Documentary", he: "סרט תיעודי", say: "דוֹקְיוּמֶנטֶרִי", ex: "We watched a documentary about the ocean.", exHe: "צפינו בסרט תיעודי על האוקיינוס." },
      { id: "exhibition", en: "Exhibition", he: "תערוכה", say: "אֶקסִיבִּישֶן", ex: "There is a new exhibition at the museum.", exHe: "יש תערוכה חדשה במוזיאון." },
      { id: "performance", en: "Performance", he: "הופעה, ביצוע", say: "פֶּרפוֹרמֶנס", ex: "The actor gave a great performance.", exHe: "השחקן נתן הופעה נהדרת." },
      { id: "audience", en: "Audience", he: "קהל", say: "אוֹדִיאֶנס", ex: "The audience stood up and clapped.", exHe: "הקהל קם ומחא כפיים." },
      { id: "plot", en: "Plot", he: "עלילה", say: "פְּלוֹט", ex: "The plot of the book was hard to follow.", exHe: "היה קשה לעקוב אחרי העלילה של הספר." },
      { id: "review", en: "Review", he: "ביקורת (על סרט, ספר)", say: "רִיוְויוּ", ex: "I read a good review of the new play.", exHe: "קראתי ביקורת טובה על ההצגה החדשה." },
      { id: "masterpiece", en: "Masterpiece", he: "יצירת מופת", say: "מַאסטֶרפִּיס", ex: "Many people think this film is a masterpiece.", exHe: "הרבה אנשים חושבים שהסרט הזה הוא יצירת מופת." },
      { id: "sold-out", en: "Sold out", he: "אזלו הכרטיסים", say: "סוֹלד אַאוּט", ex: "The concert was sold out in one day.", exHe: "הכרטיסים להופעה אזלו ביום אחד." }
    ]
  },
  {
    id: "travel-advanced",
    title: "טיולים מתקדם",
    subtitle: "לתכנן טיול כמו מקצוען",
    level: 4,
    words: [
      { id: "itinerary", en: "Itinerary", he: "מסלול הטיול, תוכנית נסיעה", say: "אַייטִינֶרֶרִי", ex: "The travel agent sent us the itinerary.", exHe: "סוכן הנסיעות שלח לנו את מסלול הטיול." },
      { id: "accommodation", en: "Accommodation", he: "לינה, מקום מגורים", say: "אֶקוֹמוֹדֵיישֶן", ex: "The price includes flights and accommodation.", exHe: "המחיר כולל טיסות ולינה." },
      { id: "sightseeing", en: "Sightseeing", he: "סיור באתרים", say: "סַייטסִיאִינג", ex: "We spent the morning sightseeing in Rome.", exHe: "בילינו את הבוקר בסיור באתרים ברומא." },
      { id: "jet-lag", en: "Jet lag", he: "ג׳ט לג, עייפות מהפרש שעות", say: "ג'ֶט לֶג", ex: "I had terrible jet lag after the flight to New York.", exHe: "היה לי ג׳ט לג נוראי אחרי הטיסה לניו יורק." },
      { id: "guided-tour", en: "Guided tour", he: "סיור מודרך", say: "גַיידֶד טוּר", ex: "We joined a guided tour of the old city.", exHe: "הצטרפנו לסיור מודרך בעיר העתיקה." },
      { id: "travel-insurance", en: "Travel insurance", he: "ביטוח נסיעות", say: "טְרֶבֶל אִינשוּרֶנס", ex: "Don't forget to buy travel insurance.", exHe: "אל תשכח לקנות ביטוח נסיעות." },
      { id: "off-the-beaten-track", en: "Off the beaten track", he: "הרחק מהמסלול המוכר", say: "אוֹף דֶ'ה בִּיטֶן טְרֶק", ex: "We found a small village off the beaten track.", exHe: "מצאנו כפר קטן הרחק מהמסלולים המוכרים." },
      { id: "round-trip", en: "Round trip", he: "הלוך ושוב", say: "רַאוּנד טְרִיפּ", ex: "How much is a round trip ticket to Eilat?", exHe: "כמה עולה כרטיס הלוך ושוב לאילת?" }
    ]
  },
  {
    id: "discussion",
    title: "לנהל דיון",
    subtitle: "להגיב, להסכים ולהסתייג",
    level: 4,
    words: [
      { id: "i-see-your-point", en: "I see your point", he: "אני מבין את הנקודה שלך", say: "אַיי סִי יוֹר פּוֹינט", ex: "I see your point, but I still think we should wait.", exHe: "אני מבין את הנקודה שלך, אבל אני עדיין חושב שכדאי לחכות." },
      { id: "to-be-fair", en: "To be fair", he: "למען ההגינות, בהגינות", say: "טוּ בִּי פֶר", ex: "To be fair, he did try his best.", exHe: "למען ההגינות, הוא באמת עשה כמיטב יכולתו." },
      { id: "having-said-that", en: "Having said that", he: "עם זאת, ולמרות זאת", say: "הֶבִינג סֶד דֶ'ט", ex: "The hotel was expensive. Having said that, it was worth it.", exHe: "המלון היה יקר. עם זאת, הוא היה שווה את זה." },
      { id: "it-goes-without-saying", en: "It goes without saying", he: "מובן מאליו", say: "אִיט גוֹאוּז וִוידָ'אוּט סֵייאִינג", ex: "It goes without saying that family comes first.", exHe: "מובן מאליו שהמשפחה קודמת לכול." },
      { id: "the-thing-is", en: "The thing is", he: "העניין הוא ש-", say: "דֶ'ה ת'ִינג אִיז", ex: "I'd love to come. The thing is, I don't drive at night.", exHe: "אשמח לבוא. העניין הוא שאני לא נוהג בלילה." },
      { id: "as-a-matter-of-fact", en: "As a matter of fact", he: "למען האמת, בעצם", say: "אֶז אֶ מֶטֶר אוֹב פֶקט", ex: "As a matter of fact, I was born in that street.", exHe: "למען האמת, נולדתי ברחוב הזה." },
      { id: "thats-beside-the-point", en: "That's beside the point", he: "זה לא העניין", say: "דֶ'טְס בִּיסַייד דֶ'ה פּוֹינט", ex: "Yes, it's cheap, but that's beside the point.", exHe: "כן, זה זול, אבל זה לא העניין." },
      { id: "let-me-put-it-this-way", en: "Let me put it this way", he: "אנסח את זה כך", say: "לֶט מִי פּוּט אִיט דִ'יס וֵויי", ex: "Let me put it this way: I won't go there again.", exHe: "אנסח את זה כך: לא אלך לשם שוב." }
    ]
  },
  {
    id: "idioms-3",
    title: "ניבים (ג)",
    subtitle: "ביטויים צבעוניים",
    level: 4,
    words: [
      { id: "hit-the-nail-on-the-head", en: "Hit the nail on the head", he: "לקלוע בדיוק לעניין", say: "הִיט דֶ'ה נֵייל אוֹן דֶ'ה הֶד", ex: "You hit the nail on the head with that comment.", exHe: "קלעת בדיוק לעניין עם ההערה הזו." },
      { id: "the-ball-is-in-your-court", en: "The ball is in your court", he: "הכדור במגרש שלך", say: "דֶ'ה בּוֹל אִיז אִין יוֹר קוֹרט", ex: "I've made my offer. Now the ball is in your court.", exHe: "הצעתי את ההצעה שלי. עכשיו הכדור במגרש שלך." },
      { id: "bite-off-more-than-you-can-chew", en: "Bite off more than you can chew", he: "לקחת על עצמך יותר מדי", say: "בַּייט אוֹף מוֹר דֶ'ן יוּ קֶן צ'וּ", ex: "Be careful not to bite off more than you can chew.", exHe: "תיזהר לא לקחת על עצמך יותר מדי." },
      { id: "let-the-cat-out-of-the-bag", en: "Let the cat out of the bag", he: "לגלות סוד (בטעות)", say: "לֶט דֶ'ה קֶט אַאוּט אוֹב דֶ'ה בֶּג", ex: "Who let the cat out of the bag about the party?", exHe: "מי גילה את הסוד על המסיבה?" },
      { id: "a-drop-in-the-ocean", en: "A drop in the ocean", he: "טיפה בים", say: "אֶ דְרוֹפּ אִין דִ'י אוֹשֶן", ex: "The donation was just a drop in the ocean.", exHe: "התרומה הייתה רק טיפה בים." },
      { id: "beat-around-the-bush", en: "Beat around the bush", he: "לדבר מסביב, לא לגשת לעניין", say: "בִּיט אֶרַאוּנד דֶ'ה בּוּש", ex: "Please don't beat around the bush. Tell me the truth.", exHe: "בבקשה אל תדבר מסביב. תגיד לי את האמת." },
      { id: "get-cold-feet", en: "Get cold feet", he: "להתחרט ברגע האחרון, לפחד", say: "גֶט קוֹלד פִיט", ex: "He wanted to sing, but he started to get cold feet.", exHe: "הוא רצה לשיר, אבל התחיל לפחד ברגע האחרון." },
      { id: "every-cloud-has-a-silver-lining", en: "Every cloud has a silver lining", he: "בכל רע יש גם טוב", say: "אֶבְרִי קְלַאוּד הֶז אֶ סִילבֶר לַיינִינג", ex: "I missed the flight, but every cloud has a silver lining.", exHe: "פספסתי את הטיסה, אבל בכל רע יש גם טוב." }
    ]
  },
  {
    id: "complaints",
    title: "תלונות ופתרון בעיות",
    subtitle: "לעמוד על שלך, בנימוס",
    level: 4,
    words: [
      { id: "theres-been-a-mistake", en: "There's been a mistake", he: "נפלה טעות", say: "דֶ'רְז בִּין אֶ מִיסְטֵייק", ex: "I'm afraid there's been a mistake with my bill.", exHe: "אני חושש שנפלה טעות בחשבון שלי." },
      { id: "make-a-complaint", en: "Make a complaint", he: "להגיש תלונה", say: "מֵייק אֶ קוֹמפְּלֵיינט", ex: "I would like to make a complaint about the service.", exHe: "הייתי רוצה להגיש תלונה על השירות." },
      { id: "its-not-what-i-ordered", en: "It's not what I ordered", he: "זה לא מה שהזמנתי", say: "אִיטס נוֹט וָוט אַיי אוֹרדֶרְד", ex: "Excuse me, it's not what I ordered.", exHe: "סליחה, זה לא מה שהזמנתי." },
      { id: "id-appreciate-it-if", en: "I'd appreciate it if", he: "אודה לך אם", say: "אַייד אֶפּרִישִיאֵייט אִיט אִיף", ex: "I'd appreciate it if you could call me back today.", exHe: "אודה לך אם תוכל לחזור אליי היום." },
      { id: "would-it-be-possible-to", en: "Would it be possible to", he: "האם אפשר ל-", say: "וּוּד אִיט בִּי פּוֹסִיבּל טוּ", ex: "Would it be possible to change my room?", exHe: "האם אפשר להחליף את החדר שלי?" },
      { id: "sorry-to-bother-you", en: "Sorry to bother you", he: "סליחה על ההטרדה", say: "סוֹרִי טוּ בּוֹדֶ'ר יוּ", ex: "Sorry to bother you, but the heating isn't working.", exHe: "סליחה על ההטרדה, אבל החימום לא עובד." },
      { id: "speak-to-the-manager", en: "Speak to the manager", he: "לדבר עם המנהל", say: "סְפִּיק טוּ דֶ'ה מֶנֶג'ֶר", ex: "Could I speak to the manager, please?", exHe: "אפשר לדבר עם המנהל, בבקשה?" },
      { id: "out-of-order", en: "Out of order", he: "מקולקל, לא פועל", say: "אַאוּט אוֹב אוֹרדֶר", ex: "The lift is out of order again.", exHe: "המעלית שוב מקולקלת." }
    ]
  },

  /* ---------- שלב ה׳ · דיוק וניסוח (C1) ---------- */
  {
    id: "formal-email",
    title: "כותבים מייל רשמי",
    subtitle: "פתיחות, בקשות וסיומות",
    level: 5,
    words: [
      { id: "i-am-writing-to", en: "I am writing to", he: "אני כותב כדי ל-", say: "אַיי אֶם רַייטִינג טוּ", ex: "I am writing to ask about my order.", exHe: "אני כותב כדי לשאול על ההזמנה שלי." },
      { id: "please-find-attached", en: "Please find attached", he: "מצורף בזה", say: "פְּלִיז פַיינד אֶטֶצ'ְט", ex: "Please find attached a copy of the receipt.", exHe: "מצורף בזה עותק של הקבלה." },
      { id: "i-would-be-grateful-if", en: "I would be grateful if", he: "אהיה אסיר תודה אם", say: "אַיי וּוּד בִּי גְרֵייטפוּל אִיף", ex: "I would be grateful if you could reply soon.", exHe: "אהיה אסיר תודה אם תוכלו להשיב בקרוב." },
      { id: "at-your-earliest-convenience", en: "At your earliest convenience", he: "בהקדם האפשרי מבחינתך", say: "אֶט יוֹר אֶרלִיאֶסט קוֹנוִינְיֶנס", ex: "Please contact me at your earliest convenience.", exHe: "אנא צרו איתי קשר בהקדם האפשרי." },
      { id: "should-you-have-any-questions", en: "Should you have any questions", he: "אם יהיו לך שאלות", say: "שוּד יוּ הֶב אֶנִי קְוֶוסצ'ֶנְז", ex: "Should you have any questions, please let me know.", exHe: "אם יהיו לך שאלות, אנא עדכן אותי." },
      { id: "i-look-forward-to-hearing-from-you", en: "I look forward to hearing from you", he: "אני מצפה לתשובתך", say: "אַיי לוּק פוֹרוֶורד טוּ הִירִינג פְרוֹם יוּ", ex: "Thank you for your help. I look forward to hearing from you.", exHe: "תודה על עזרתך. אני מצפה לתשובתך." },
      { id: "kind-regards", en: "Kind regards", he: "בברכה", say: "קַיינד רִיגָארדְז", ex: "Kind regards, David Cohen", exHe: "בברכה, דוד כהן" },
      { id: "further-to", en: "Further to", he: "בהמשך ל-", say: "פֶרדֶ'ר טוּ", ex: "Further to our phone call, here are the details.", exHe: "בהמשך לשיחת הטלפון שלנו, הנה הפרטים." }
    ]
  },
  {
    id: "linking-advanced",
    title: "מילות קישור מתקדמות",
    subtitle: "לכתוב כמו בעיתון",
    level: 5,
    words: [
      { id: "nevertheless", en: "Nevertheless", he: "אף על פי כן", say: "נֶבֶרדֶ'לֶס", ex: "It was very cold. Nevertheless, we went swimming.", exHe: "היה קר מאוד. אף על פי כן, הלכנו לשחות." },
      { id: "whereas", en: "Whereas", he: "בעוד ש-", say: "וֶורֶאֶז", ex: "My brother loves the city, whereas I prefer the countryside.", exHe: "אחי אוהב את העיר, בעוד שאני מעדיף את הכפר." },
      { id: "furthermore", en: "Furthermore", he: "יתרה מזאת", say: "פֶרדֶ'רמוֹר", ex: "The flat is cheap. Furthermore, it is close to the sea.", exHe: "הדירה זולה. יתרה מזאת, היא קרובה לים." },
      { id: "consequently", en: "Consequently", he: "כתוצאה מכך", say: "קוֹנסֶקְוֶונטְלִי", ex: "The road was closed. Consequently, we arrived late.", exHe: "הכביש היה סגור. כתוצאה מכך, הגענו באיחור." },
      { id: "despite", en: "Despite", he: "למרות (+ שם עצם)", say: "דִיסְפַּייט", ex: "Despite the rain, the concert was wonderful.", exHe: "למרות הגשם, הקונצרט היה נפלא." },
      { id: "provided-that", en: "Provided that", he: "בתנאי ש-", say: "פְּרוֹבַיידֶד דֶ'ט", ex: "I'll come, provided that the weather is good.", exHe: "אבוא, בתנאי שמזג האוויר יהיה טוב." },
      { id: "unless", en: "Unless", he: "אלא אם כן", say: "אָנלֶס", ex: "We'll eat outside unless it rains.", exHe: "נאכל בחוץ אלא אם כן ירד גשם." },
      { id: "in-addition", en: "In addition", he: "בנוסף", say: "אִין אֶדִישֶן", ex: "In addition, the price includes breakfast.", exHe: "בנוסף, המחיר כולל ארוחת בוקר." }
    ]
  },
  {
    id: "nuanced-adjectives",
    title: "תארים מדויקים",
    subtitle: "לתאר בדיוק את מה שמתכוונים",
    level: 5,
    words: [
      { id: "thorough", en: "Thorough", he: "יסודי", say: "ת'ָארוֹ", ex: "The doctor did a thorough examination.", exHe: "הרופא ערך בדיקה יסודית." },
      { id: "reluctant", en: "Reluctant", he: "מסתייג, לא להוט", say: "רִילָאקטֶנט", ex: "He was reluctant to sell his old car.", exHe: "הוא לא היה להוט למכור את המכונית הישנה שלו." },
      { id: "vague", en: "Vague", he: "מעורפל, לא ברור", say: "וֵויג", ex: "His answer was very vague.", exHe: "התשובה שלו הייתה מעורפלת מאוד." },
      { id: "subtle", en: "Subtle", he: "עדין, מעודן (לא בולט)", say: "סָאטֶל (בלי ב׳)", ex: "There is a subtle difference between the two words.", exHe: "יש הבדל עדין בין שתי המילים." },
      { id: "inevitable", en: "Inevitable", he: "בלתי נמנע", say: "אִינֶבִיטֶבֶּל", ex: "Some changes are inevitable.", exHe: "שינויים מסוימים הם בלתי נמנעים." },
      { id: "considerable", en: "Considerable", he: "ניכר, משמעותי", say: "קוֹנסִידֶרֶבֶּל", ex: "The repair cost a considerable amount of money.", exHe: "התיקון עלה סכום כסף ניכר." },
      { id: "reasonable", en: "Reasonable", he: "סביר, הגיוני", say: "רִיזֶנֶבֶּל", ex: "The prices in this shop are reasonable.", exHe: "המחירים בחנות הזו סבירים." },
      { id: "genuine", en: "Genuine", he: "אמיתי, כן", say: "ג'ֶנְיוּאִין", ex: "She showed genuine interest in my stories.", exHe: "היא גילתה עניין אמיתי בסיפורים שלי." }
    ]
  },
  {
    id: "advanced-verbs",
    title: "פעלים מתקדמים",
    subtitle: "לבטא את עצמך בדיוק",
    level: 5,
    words: [
      { id: "acknowledge", en: "Acknowledge", he: "להכיר ב-, להודות ב-", say: "אֶקנוֹלֶג' (בלי ק׳ בהתחלה)", ex: "He refused to acknowledge his mistake.", exHe: "הוא סירב להודות בטעות שלו." },
      { id: "emphasize", en: "Emphasize", he: "להדגיש", say: "אֶמפֶסַייז", ex: "I want to emphasize how important this is.", exHe: "אני רוצה להדגיש כמה זה חשוב." },
      { id: "overcome", en: "Overcome", he: "להתגבר על", say: "אוֹבֶרקָאם", ex: "She managed to overcome many difficulties.", exHe: "היא הצליחה להתגבר על קשיים רבים." },
      { id: "pursue", en: "Pursue", he: "לרדוף אחרי (מטרה), לעסוק ב-", say: "פֶּרסוּ", ex: "It's never too late to pursue your dreams.", exHe: "אף פעם לא מאוחר מדי לרדוף אחרי החלומות שלך." },
      { id: "encourage", en: "Encourage", he: "לעודד", say: "אִינקָארֶג'", ex: "My teachers always encourage me to keep going.", exHe: "המורים שלי תמיד מעודדים אותי להמשיך." },
      { id: "postpone", en: "Postpone", he: "לדחות (מועד)", say: "פּוֹסטְפּוֹאוּן", ex: "We had to postpone the meeting until next week.", exHe: "נאלצנו לדחות את הפגישה לשבוע הבא." },
      { id: "cherish", en: "Cherish", he: "להוקיר, לשמור כאוצר", say: "צֶ'רִיש", ex: "I cherish every moment with my grandchildren.", exHe: "אני מוקיר כל רגע עם הנכדים שלי." },
      { id: "reassure", en: "Reassure", he: "להרגיע, להפיג חשש", say: "רִיאֶשוּר", ex: "The nurse tried to reassure me.", exHe: "האחות ניסתה להרגיע אותי." }
    ]
  },
  {
    id: "phrasal-5",
    title: "פעלים עם מילת יחס (ה)",
    subtitle: "החיים, המשפחה והזמן",
    level: 5,
    words: [
      { id: "brush-up-on", en: "Brush up on", he: "לרענן (ידע)", say: "בְּרָאש אָפּ אוֹן", ex: "I want to brush up on my English before the trip.", exHe: "אני רוצה לרענן את האנגלית שלי לפני הטיול." },
      { id: "keep-up-with", en: "Keep up with", he: "לעמוד בקצב של, להתעדכן", say: "קִיפּ אָפּ וִוית'", ex: "It's hard to keep up with all the new technology.", exHe: "קשה לעמוד בקצב של כל הטכנולוגיה החדשה." },
      { id: "look-back-on", en: "Look back on", he: "להביט לאחור על", say: "לוּק בֶּק אוֹן", ex: "I look back on those years with a smile.", exHe: "אני מביט לאחור על השנים ההן בחיוך." },
      { id: "settle-down", en: "Settle down", he: "להשתקע; להירגע", say: "סֶטֶל דַאוּן", ex: "After the army, he decided to settle down in Haifa.", exHe: "אחרי הצבא, הוא החליט להשתקע בחיפה." },
      { id: "take-after", en: "Take after", he: "להיות דומה ל- (קרוב משפחה)", say: "טֵייק אַפטֶר", ex: "My granddaughter seems to take after her grandmother.", exHe: "הנכדה שלי נראית דומה לסבתא שלה." },
      { id: "get-by", en: "Get by", he: "להסתדר (במינימום)", say: "גֶט בַּאי", ex: "I know enough English to get by abroad.", exHe: "אני יודע מספיק אנגלית כדי להסתדר בחו״ל." },
      { id: "make-up-for", en: "Make up for", he: "לפצות על", say: "מֵייק אָפּ פוֹר", ex: "Let's meet more often to make up for lost time.", exHe: "בוא ניפגש יותר כדי לפצות על הזמן האבוד." },
      { id: "pass-away", en: "Pass away", he: "הלך לעולמו (נפטר)", say: "פֶּס אֶוֵויי", ex: "People pass away, but memories stay with us.", exHe: "אנשים הולכים לעולמם, אבל הזיכרונות נשארים איתנו." }
    ]
  },
  {
    id: "science-nature",
    title: "מדע וסביבה",
    subtitle: "לקרוא כתבה מדעית",
    level: 5,
    words: [
      { id: "research", en: "Research", he: "מחקר", say: "רִיסֶרץ'", ex: "New research shows that walking is good for the brain.", exHe: "מחקר חדש מראה שהליכה טובה למוח." },
      { id: "evidence", en: "Evidence", he: "ראיות, הוכחות", say: "אֶבִידֶנס", ex: "There is strong evidence for this theory.", exHe: "יש ראיות חזקות לתיאוריה הזו." },
      { id: "discovery", en: "Discovery", he: "תגלית", say: "דִיסקָאבֶרִי", ex: "It was an important discovery in medicine.", exHe: "זו הייתה תגלית חשובה ברפואה." },
      { id: "experiment", en: "Experiment", he: "ניסוי", say: "אִיקספֶּרִימֶנט", ex: "The scientists repeated the experiment many times.", exHe: "המדענים חזרו על הניסוי פעמים רבות." },
      { id: "environment", en: "Environment", he: "סביבה (איכות הסביבה)", say: "אִינוַויירוֹנמֶנט", ex: "We must protect the environment for our grandchildren.", exHe: "אנחנו חייבים להגן על הסביבה למען הנכדים שלנו." },
      { id: "climate-change", en: "Climate change", he: "שינוי אקלים", say: "קְלַיימֶט צֵ'יינג'", ex: "Climate change affects the whole world.", exHe: "שינוי האקלים משפיע על העולם כולו." },
      { id: "species", en: "Species", he: "מין (בעלי חיים, צמחים)", say: "סְפִּישִיז", ex: "Many species of birds pass through Israel.", exHe: "מינים רבים של ציפורים עוברים דרך ישראל." },
      { id: "renewable-energy", en: "Renewable energy", he: "אנרגיה מתחדשת", say: "רִינְיוּאֶבֶּל אֶנֶרג'ִי", ex: "Solar power is a kind of renewable energy.", exHe: "אנרגיה סולארית היא סוג של אנרגיה מתחדשת." }
    ]
  },
  {
    id: "looking-back",
    title: "מביטים לאחור",
    subtitle: "לספר את סיפור החיים",
    level: 5,
    words: [
      { id: "looking-back", en: "Looking back", he: "במבט לאחור", say: "לוּקִינג בֶּק", ex: "Looking back, it was the best decision of my life.", exHe: "במבט לאחור, זו הייתה ההחלטה הכי טובה בחיי." },
      { id: "in-those-days", en: "In those days", he: "באותם ימים", say: "אִין דֶ'וֹאוּז דֵייז", ex: "In those days, a bus ticket cost almost nothing.", exHe: "באותם ימים, כרטיס אוטובוס עלה כמעט כלום." },
      { id: "ill-never-forget", en: "I'll never forget", he: "לעולם לא אשכח", say: "אַייל נֶבֶר פוֹרגֶט", ex: "I'll never forget the day we arrived in Israel.", exHe: "לעולם לא אשכח את היום שבו הגענו לישראל." },
      { id: "it-reminds-me-of", en: "It reminds me of", he: "זה מזכיר לי את", say: "אִיט רִימַיינדְז מִי אוֹב", ex: "This song is lovely. It reminds me of my youth.", exHe: "השיר הזה מקסים. הוא מזכיר לי את הנעורים שלי." },
      { id: "the-good-old-days", en: "The good old days", he: "הימים הטובים ההם", say: "דֶ'ה גוּד אוֹלד דֵייז", ex: "We often talk about the good old days.", exHe: "אנחנו מרבים לדבר על הימים הטובים ההם." },
      { id: "times-have-changed", en: "Times have changed", he: "הזמנים השתנו", say: "טַיימְז הֶב צֵ'יינג'ד", ex: "Times have changed, but people are still the same.", exHe: "הזמנים השתנו, אבל האנשים עדיין אותם אנשים." },
      { id: "over-the-years", en: "Over the years", he: "במהלך השנים", say: "אוֹבֶר דֶ'ה יִירְז", ex: "Over the years, we became close friends.", exHe: "במהלך השנים, נהיינו חברים קרובים." },
      { id: "from-scratch", en: "From scratch", he: "מאפס, מההתחלה", say: "פְרוֹם סְקְרֶץ'", ex: "My parents built their life here from scratch.", exHe: "ההורים שלי בנו את חייהם כאן מאפס." }
    ]
  },
  {
    id: "hedging",
    title: "לנסח בזהירות",
    subtitle: "דעה מאוזנת ומנומסת",
    level: 5,
    words: [
      { id: "it-seems-to-me", en: "It seems to me", he: "נראה לי ש-", say: "אִיט סִימְז טוּ מִי", ex: "It seems to me that the plan is too expensive.", exHe: "נראה לי שהתוכנית יקרה מדי." },
      { id: "i-tend-to-think", en: "I tend to think", he: "אני נוטה לחשוב", say: "אַיי טֶנד טוּ ת'ִינק", ex: "I tend to think that simple food is the best.", exHe: "אני נוטה לחשוב שאוכל פשוט הוא הטוב ביותר." },
      { id: "theres-no-doubt-that", en: "There's no doubt that", he: "אין ספק ש-", say: "דֶ'רְז נוֹאוּ דַאוּט דֶ'ט", ex: "There's no doubt that he is a talented musician.", exHe: "אין ספק שהוא מוזיקאי מוכשר." },
      { id: "its-hard-to-say", en: "It's hard to say", he: "קשה לומר", say: "אִיטס הָארד טוּ סֵיי", ex: "It's hard to say who will win the election.", exHe: "קשה לומר מי ינצח בבחירות." },
      { id: "to-some-extent", en: "To some extent", he: "במידה מסוימת", say: "טוּ סָאם אִיקסְטֶנט", ex: "I agree with you to some extent.", exHe: "אני מסכים איתך במידה מסוימת." },
      { id: "on-the-whole", en: "On the whole", he: "בסך הכול, באופן כללי", say: "אוֹן דֶ'ה הוֹאוּל", ex: "On the whole, the trip was a great success.", exHe: "בסך הכול, הטיול היה הצלחה גדולה." },
      { id: "arguably", en: "Arguably", he: "אפשר לטעון ש-", say: "אָרגְיוּאֶבְּלִי", ex: "This is arguably the best restaurant in town.", exHe: "אפשר לטעון שזו המסעדה הטובה ביותר בעיר." },
      { id: "im-inclined-to-agree", en: "I'm inclined to agree", he: "אני נוטה להסכים", say: "אַיים אִינקְלַיינְד טוּ אֶגְרִי", ex: "After hearing both sides, I'm inclined to agree with you.", exHe: "אחרי ששמעתי את שני הצדדים, אני נוטה להסכים איתך." }
    ]
  },
  {
    id: "regrets-wishes",
    title: "משאלות וחרטות",
    subtitle: "wish, should have, if only",
    level: 5,
    words: [
      { id: "i-wish-i-had", en: "I wish I had", he: "הלוואי שהיה לי / שהייתי", say: "אַיי וִויש אַיי הֶד", ex: "I wish I had more time to read.", exHe: "הלוואי שהיה לי יותר זמן לקרוא." },
      { id: "if-only", en: "If only", he: "אילו רק, הלוואי", say: "אִיף אוֹנְלִי", ex: "If only I could speak English like my grandson!", exHe: "אילו רק יכולתי לדבר אנגלית כמו הנכד שלי!" },
      { id: "i-should-have", en: "I should have", he: "הייתי צריך ל- (ולא עשיתי)", say: "אַיי שוּד הֶב", ex: "I should have called you yesterday.", exHe: "הייתי צריך להתקשר אליך אתמול." },
      { id: "i-could-have", en: "I could have", he: "יכולתי ל- (אבל לא)", say: "אַיי קוּד הֶב", ex: "I could have taken the earlier train.", exHe: "יכולתי לנסוע ברכבת המוקדמת יותר." },
      { id: "id-rather-you", en: "I'd rather you", he: "אני מעדיף שאתה", say: "אַייד רָאדֶ'ר יוּ", ex: "I'd rather you didn't drive in this weather.", exHe: "אני מעדיף שלא תנהג במזג האוויר הזה." },
      { id: "its-high-time", en: "It's high time", he: "הגיע הזמן (ואף מאוחר)", say: "אִיטס הַאי טַיים", ex: "It's high time we visited your sister.", exHe: "הגיע הזמן שנבקר את אחותך." },
      { id: "had-i-known", en: "Had I known", he: "אילו ידעתי", say: "הֶד אַיי נוֹאוּן", ex: "Had I known you were coming, I would have baked a cake.", exHe: "אילו ידעתי שאתה בא, הייתי אופה עוגה." },
      { id: "its-no-use", en: "It's no use", he: "אין טעם", say: "אִיטס נוֹאוּ יוּס", ex: "It's no use crying over spilled milk.", exHe: "אין טעם לבכות על חלב שנשפך." }
    ]
  },
  {
    id: "idioms-4",
    title: "ניבים (ד)",
    subtitle: "לדבר כמו יליד",
    level: 5,
    words: [
      { id: "a-piece-of-advice", en: "A piece of advice", he: "עצה (אחת)", say: "אֶ פִּיס אוֹב אֶדְוַויס", ex: "Let me give you a piece of advice.", exHe: "תן לי לתת לך עצה." },
      { id: "keep-your-chin-up", en: "Keep your chin up", he: "תחזיק מעמד, אל תתייאש", say: "קִיפּ יוֹר צִ'ין אָפּ", ex: "Keep your chin up. Things will get better.", exHe: "אל תתייאש. הדברים ישתפרו." },
      { id: "learn-the-ropes", en: "Learn the ropes", he: "ללמוד את רזי העניין", say: "לֶרן דֶ'ה רוֹאוּפְּס", ex: "It takes a few weeks to learn the ropes.", exHe: "לוקח כמה שבועות ללמוד את רזי העניין." },
      { id: "on-the-same-page", en: "On the same page", he: "תמימי דעים, מתואמים", say: "אוֹן דֶ'ה סֵיים פֵּייג'", ex: "Let's make sure we are on the same page.", exHe: "בוא נוודא שאנחנו מתואמים." },
      { id: "sleep-on-it", en: "Sleep on it", he: "לחשוב על זה עד מחר", say: "סְלִיפּ אוֹן אִיט", ex: "Don't decide now. Sleep on it.", exHe: "אל תחליט עכשיו. תחשוב על זה עד מחר." },
      { id: "a-small-world", en: "It's a small world", he: "העולם קטן", say: "אִיטס אֶ סְמוֹל וֶורלד", ex: "You know my cousin? It's a small world!", exHe: "אתה מכיר את בן הדוד שלי? העולם קטן!" },
      { id: "the-last-straw", en: "The last straw", he: "הקש ששבר את גב הגמל", say: "דֶ'ה לַאסט סְטְרוֹ", ex: "The late train was the last straw.", exHe: "הרכבת המאחרת הייתה הקש ששבר את גב הגמל." },
      { id: "time-flies", en: "Time flies", he: "הזמן טס", say: "טַיים פְלַייז", ex: "Time flies when you're having fun.", exHe: "הזמן טס כשנהנים." }
    ]
  }
];

/*
 * שיחות מודרכות למסך "מדברים".
 * who: "app" (האפליקציה אומרת) או "you" (המשתמש אומר).
 * בהמשך אפשר להחליף את השיחות המוכנות בשיחה חופשית עם AI — ראו js/conversation.js.
 */
window.DIALOGUES = [
  {
    id: "old-friend",
    title: "פגישה עם חבר ותיק",
    subtitle: "מתעדכנים אחרי שנים",
    lines: [
      { who: "app", en: "Well, look who it is! It's been ages!", he: "תראו מי פה! עבר המון זמן!" },
      { who: "you", en: "Yes, it's been a while. How have you been?", he: "כן, עבר הרבה זמן. מה שלומך מאז?" },
      { who: "app", en: "Not bad, thanks. I retired last year, so I have a lot of free time now.", he: "לא רע, תודה. יצאתי לפנסיה בשנה שעברה, אז יש לי הרבה זמן פנוי עכשיו." },
      { who: "you", en: "That sounds great. What do you do with all that time?", he: "נשמע נהדר. מה אתה עושה עם כל הזמן הזה?" },
      { who: "app", en: "I take long walks, and I've started painting.", he: "אני עושה הליכות ארוכות, והתחלתי לצייר." },
      { who: "you", en: "Good for you. We should meet for coffee and catch up.", he: "כל הכבוד לך. כדאי שניפגש לקפה ונתעדכן." },
      { who: "app", en: "I'd love that. Let's keep in touch.", he: "אשמח מאוד. בוא נשמור על קשר." }
    ]
  },
  {
    id: "doctor-visit",
    title: "אצל הרופא",
    subtitle: "מתארים תסמינים",
    lines: [
      { who: "app", en: "Good morning. What seems to be the problem?", he: "בוקר טוב. מה הבעיה?" },
      { who: "you", en: "I've had a bad cough for about a week.", he: "יש לי שיעול חזק כבר בערך שבוע." },
      { who: "app", en: "I see. Do you have any other symptoms, like a fever?", he: "אני מבין. יש לך תסמינים נוספים, כמו חום?" },
      { who: "you", en: "No fever, but I feel tired most of the day.", he: "אין חום, אבל אני מרגיש עייף רוב היום." },
      { who: "app", en: "Are you allergic to any medicine?", he: "אתה אלרגי לתרופה כלשהי?" },
      { who: "you", en: "Not as far as I know.", he: "לא, עד כמה שידוע לי." },
      { who: "app", en: "I'll give you a prescription. Come back if you don't feel better in a few days.", he: "אתן לך מרשם. תחזור אם לא תרגיש טוב יותר בעוד כמה ימים." },
      { who: "you", en: "Thank you, doctor. I appreciate it.", he: "תודה, דוקטור. אני מעריך את זה." }
    ]
  },
  {
    id: "check-in",
    title: "בדלפק הצ׳ק־אין",
    subtitle: "טיסה עם עיכוב",
    lines: [
      { who: "app", en: "Good afternoon. May I see your passport, please?", he: "צהריים טובים. אפשר לראות את הדרכון שלך, בבקשה?" },
      { who: "you", en: "Here you are. Is the flight on time?", he: "בבקשה. הטיסה בזמן?" },
      { who: "app", en: "Unfortunately, there is a delay of about two hours.", he: "לצערי, יש עיכוב של כשעתיים." },
      { who: "you", en: "Oh, that's a pity. Can I check in my luggage now?", he: "אוי, חבל. אני יכול להעביר את המזוודה עכשיו?" },
      { who: "app", en: "Of course. Would you prefer a window seat or an aisle seat?", he: "כמובן. אתה מעדיף מושב ליד החלון או ליד המעבר?" },
      { who: "you", en: "An aisle seat, please. It's easier for my legs.", he: "ליד המעבר, בבקשה. זה נוח יותר לרגליים." },
      { who: "app", en: "Here is your boarding pass. Have a pleasant flight.", he: "הנה כרטיס העלייה למטוס. טיסה נעימה." }
    ]
  },
  {
    id: "return-item",
    title: "החזרת מוצר בחנות",
    subtitle: "החלפה או החזר כספי",
    lines: [
      { who: "you", en: "Excuse me, I bought this sweater yesterday, but it's too small.", he: "סליחה, קניתי את הסוודר הזה אתמול, אבל הוא קטן מדי." },
      { who: "app", en: "I'm sorry to hear that. Do you have the receipt?", he: "צר לי לשמוע. יש לך את הקבלה?" },
      { who: "you", en: "Yes, here it is.", he: "כן, הנה היא." },
      { who: "app", en: "Would you like to exchange it for a bigger size, or get a refund?", he: "תרצה להחליף למידה גדולה יותר, או לקבל החזר כספי?" },
      { who: "you", en: "I'd prefer a bigger size, if you have one.", he: "אעדיף מידה גדולה יותר, אם יש לכם." },
      { who: "app", en: "Let me check. Yes, here you are. Is there anything else I can help you with?", he: "רגע, אבדוק. כן, הנה. יש עוד משהו שאוכל לעזור בו?" },
      { who: "you", en: "No, that's all. Thank you for your help.", he: "לא, זה הכול. תודה על העזרה." }
    ]
  },
  {
    id: "restaurant-call",
    title: "הזמנת שולחן בטלפון",
    subtitle: "ארוחה משפחתית ביום שישי",
    lines: [
      { who: "app", en: "Good evening, Bella Vista restaurant. How can I help you?", he: "ערב טוב, מסעדת בלה ויסטה. איך אפשר לעזור?" },
      { who: "you", en: "Good evening. I'd like to make a reservation for Friday night.", he: "ערב טוב. הייתי רוצה להזמין שולחן ליום שישי בערב." },
      { who: "app", en: "Certainly. For how many people?", he: "בהחלט. לכמה אנשים?" },
      { who: "you", en: "For six people, at around eight o'clock.", he: "לשישה אנשים, בסביבות שמונה." },
      { who: "app", en: "Eight o'clock is fully booked. Would half past eight be all right?", he: "בשמונה הכול מלא. שמונה וחצי יתאים?" },
      { who: "you", en: "Yes, that's fine. The reservation is under the name Cohen.", he: "כן, זה בסדר. ההזמנה על השם כהן." },
      { who: "app", en: "Perfect. We look forward to seeing you on Friday.", he: "מצוין. נשמח לראות אתכם ביום שישי." }
    ]
  },
  {
    id: "neighbor-news",
    title: "שיחה עם השכן",
    subtitle: "על החדשות ועל מזג האוויר",
    lines: [
      { who: "app", en: "Did you see the news this morning? Prices are going up again.", he: "ראית את החדשות הבוקר? המחירים עולים שוב." },
      { who: "you", en: "Yes, I saw the headline. Everything is getting more expensive.", he: "כן, ראיתי את הכותרת. הכול נהיה יקר יותר." },
      { who: "app", en: "In my opinion, someone should do something about it.", he: "לדעתי, מישהו צריך לעשות משהו בעניין." },
      { who: "you", en: "I agree. On the other hand, it's not a simple issue.", he: "אני מסכים. מצד שני, זה לא נושא פשוט." },
      { who: "app", en: "That's true. Anyway, are you going to the market tomorrow?", he: "נכון. בכל מקרה, אתה הולך מחר לשוק?" },
      { who: "you", en: "It depends on the weather. The forecast says it might rain.", he: "זה תלוי במזג האוויר. התחזית אומרת שאולי ירד גשם." }
    ]
  },
  {
    id: "grandchild-stories",
    title: "סיפורים לנכדה",
    subtitle: "איך היה פעם",
    lines: [
      { who: "app", en: "Grandpa, what was life like when you were young?", he: "סבא, איך היו החיים כשהיית צעיר?" },
      { who: "you", en: "Very different. Back then, we didn't have mobile phones.", he: "שונים מאוד. באותם ימים, לא היו לנו טלפונים ניידים." },
      { who: "app", en: "Really? So how did you talk to your friends?", he: "באמת? אז איך דיברת עם החברים שלך?" },
      { who: "you", en: "We used to meet outside and play until it got dark.", he: "היינו נפגשים בחוץ ומשחקים עד שהחשיך." },
      { who: "app", en: "That sounds like fun. Do you miss those days?", he: "נשמע כיף. אתה מתגעגע לימים ההם?" },
      { who: "you", en: "Sometimes. I have wonderful memories of my childhood.", he: "לפעמים. יש לי זיכרונות נפלאים מהילדות שלי." },
      { who: "app", en: "I love your stories. Tell me more next time!", he: "אני אוהבת את הסיפורים שלך. תספר לי עוד בפעם הבאה!" }
    ]
  },
  {
    id: "customer-service",
    title: "שירות לקוחות בטלפון",
    subtitle: "האינטרנט הפסיק לעבוד",
    lines: [
      { who: "app", en: "Thank you for calling. My name is Daniel. How can I help you today?", he: "תודה שהתקשרת. שמי דניאל. איך אפשר לעזור היום?" },
      { who: "you", en: "Hello. My internet stopped working this morning.", he: "שלום. האינטרנט שלי הפסיק לעבוד הבוקר." },
      { who: "app", en: "I'm sorry about that. Have you tried turning the router off and on again?", he: "צר לי על כך. ניסית לכבות ולהדליק מחדש את הנתב?" },
      { who: "you", en: "Yes, I tried that, but it didn't help.", he: "כן, ניסיתי, אבל זה לא עזר." },
      { who: "app", en: "Okay. I'll send a technician tomorrow between ten and twelve. Is that all right?", he: "בסדר. אשלח טכנאי מחר בין עשר לשתים עשרה. זה מתאים?" },
      { who: "you", en: "Yes, that's fine. Thank you for your patience.", he: "כן, זה בסדר. תודה על הסבלנות." },
      { who: "app", en: "You're welcome. Have a good day!", he: "בשמחה. יום טוב!" }
    ]
  },
  {
    id: "bank",
    title: "בבנק",
    subtitle: "משיכת כסף בדלפק",
    lines: [
      { who: "app", en: "Good morning. How can I help you?", he: "בוקר טוב. איך אפשר לעזור?" },
      { who: "you", en: "I'd like to withdraw five hundred shekels from my account.", he: "הייתי רוצה למשוך חמש מאות שקל מהחשבון שלי." },
      { who: "app", en: "Certainly. Could I see your ID card, please?", he: "בהחלט. אפשר לראות את תעודת הזהות שלך, בבקשה?" },
      { who: "you", en: "Here you are. Is there a fee for this?", he: "בבקשה. יש על זה עמלה?" },
      { who: "app", en: "There is a small fee at the counter. The cash machine outside is free.", he: "יש עמלה קטנה בדלפק. הכספומט בחוץ הוא בחינם." },
      { who: "you", en: "I see. I'll do it here this time, thank you.", he: "הבנתי. הפעם אעשה את זה כאן, תודה." },
      { who: "app", en: "No problem. I just need your signature here.", he: "אין בעיה. אני רק צריך את החתימה שלך כאן." }
    ]
  },
  {
    id: "restaurant-order",
    title: "מזמינים במסעדה",
    subtitle: "מנה ראשונה, עיקרית וקינוח",
    lines: [
      { who: "app", en: "Good evening. Are you ready to order?", he: "ערב טוב. אתם מוכנים להזמין?" },
      { who: "you", en: "Almost. Is the fish soup spicy?", he: "כמעט. מרק הדגים חריף?" },
      { who: "app", en: "Just a little. Would you like it as a starter?", he: "רק קצת. תרצה אותו כמנה ראשונה?" },
      { who: "you", en: "Yes, please. And what do you recommend for the main course?", he: "כן, בבקשה. ומה אתה ממליץ למנה העיקרית?" },
      { who: "app", en: "The grilled chicken is very popular tonight.", he: "העוף בגריל מאוד מבוקש הערב." },
      { who: "you", en: "Sounds good. I'll have the chicken, please.", he: "נשמע טוב. אקח את העוף, בבקשה." },
      { who: "app", en: "Excellent choice. Would you like to see the dessert menu later?", he: "בחירה מצוינת. תרצה לראות את תפריט הקינוחים אחר כך?" },
      { who: "you", en: "Maybe later, thank you.", he: "אולי אחר כך, תודה." }
    ]
  },
  {
    id: "tech-help",
    title: "הנכד עוזר עם הטלפון",
    subtitle: "עדכון, סוללה וסיסמה",
    lines: [
      { who: "you", en: "I need your help. My phone keeps asking for an update.", he: "אני צריך את העזרה שלך. הטלפון שלי כל הזמן מבקש עדכון." },
      { who: "app", en: "No problem, Grandpa. Is the battery charged?", he: "אין בעיה, סבא. הסוללה טעונה?" },
      { who: "you", en: "Not really. It's almost empty.", he: "לא ממש. היא כמעט ריקה." },
      { who: "app", en: "Then let's charge it first. Do you remember your password?", he: "אז בוא נטעין אותו קודם. אתה זוכר את הסיסמה שלך?" },
      { who: "you", en: "I think so. I wrote it down somewhere.", he: "אני חושב שכן. רשמתי אותה איפשהו." },
      { who: "app", en: "Great. The update takes about ten minutes. You'll get the hang of it!", he: "מעולה. העדכון לוקח בערך עשר דקות. אתה תתפוס את העניין!" },
      { who: "you", en: "Thank you. You are very patient with me.", he: "תודה. אתה מאוד סבלני איתי." }
    ]
  },
  {
    id: "post-office",
    title: "בדואר",
    subtitle: "שולחים חבילה לחו״ל",
    lines: [
      { who: "you", en: "Hello. I'd like to send this parcel to my granddaughter in London.", he: "שלום. הייתי רוצה לשלוח את החבילה הזו לנכדה שלי בלונדון." },
      { who: "app", en: "Of course. Please fill in this form with the address.", he: "כמובן. בבקשה מלא את הטופס הזה עם הכתובת." },
      { who: "you", en: "Here you are. How long will it take to arrive?", he: "בבקשה. כמה זמן ייקח לה להגיע?" },
      { who: "app", en: "Regular post takes about two weeks. Express takes three days.", he: "דואר רגיל לוקח בערך שבועיים. אקספרס לוקח שלושה ימים." },
      { who: "you", en: "How much is express?", he: "כמה עולה אקספרס?" },
      { who: "app", en: "It's one hundred and twenty shekels.", he: "מאה ועשרים שקל." },
      { who: "you", en: "That's a bit expensive. I'll send it by regular post.", he: "זה קצת יקר. אשלח בדואר רגיל." }
    ]
  },
  {
    id: "plumber-call",
    title: "מתקשרים לאינסטלטור",
    subtitle: "נזילה מתחת לכיור",
    lines: [
      { who: "app", en: "Hello, Avi the plumber speaking.", he: "הלו, מדבר אבי האינסטלטור." },
      { who: "you", en: "Hello. I have a leak under the kitchen sink.", he: "שלום. יש לי נזילה מתחת לכיור במטבח." },
      { who: "app", en: "Is it a big leak, or just a few drops?", he: "זו נזילה גדולה, או רק כמה טיפות?" },
      { who: "you", en: "It's getting worse. There is water on the floor.", he: "היא הולכת ומחמירה. יש מים על הרצפה." },
      { who: "app", en: "I see. I can come tomorrow morning at nine. Is that okay?", he: "הבנתי. אני יכול להגיע מחר בבוקר בתשע. זה בסדר?" },
      { who: "you", en: "Yes, that's fine. In the meantime, what should I do?", he: "כן, זה בסדר. בינתיים, מה כדאי לי לעשות?" },
      { who: "app", en: "Close the water tap under the sink. That should stop it.", he: "סגור את ברז המים מתחת לכיור. זה אמור לעצור את זה." }
    ]
  },
  {
    id: "weekend-plans",
    title: "תוכניות לסוף השבוע",
    subtitle: "חבר מציע לצאת",
    lines: [
      { who: "app", en: "I was wondering if you are free on Saturday.", he: "רציתי לשאול אם אתה פנוי בשבת." },
      { who: "you", en: "I think so. What did you have in mind?", he: "אני חושב שכן. מה חשבת?" },
      { who: "app", en: "A walk by the sea, and then lunch at a fish restaurant.", he: "הליכה ליד הים, ואחר כך ארוחת צהריים במסעדת דגים." },
      { who: "you", en: "That sounds lovely. What does the weather forecast say?", he: "נשמע מקסים. מה אומרת תחזית מזג האוויר?" },
      { who: "app", en: "It will be sunny, with a nice breeze from the sea.", he: "יהיה שמשי, עם בריזה נעימה מהים." },
      { who: "you", en: "Perfect. Would you mind picking me up at ten?", he: "מושלם. אכפת לך לאסוף אותי בעשר?" },
      { who: "app", en: "No problem at all. See you on Saturday!", he: "אין שום בעיה. נתראה בשבת!" }
    ]
  },
  {
    id: "hotel-complaint",
    title: "תלונה בקבלה של המלון",
    subtitle: "רמה מתקדמת · לעמוד על שלך בנימוס",
    lines: [
      { who: "you", en: "Sorry to bother you, but I'm afraid there's a problem with my room.", he: "סליחה על ההטרדה, אבל אני חושש שיש בעיה בחדר שלי." },
      { who: "app", en: "I'm sorry to hear that. What seems to be the problem?", he: "צר לי לשמוע. מה הבעיה?" },
      { who: "you", en: "The air conditioner is out of order, and the room is very hot.", he: "המזגן מקולקל, והחדר חם מאוד." },
      { who: "app", en: "I apologize. I'll send someone to look into it right away.", he: "אני מתנצל. אשלח מישהו לבדוק את זה מיד." },
      { who: "you", en: "Thank you. Would it be possible to change rooms if it can't be fixed tonight?", he: "תודה. האם אפשר להחליף חדר אם אי אפשר לתקן את זה הלילה?" },
      { who: "app", en: "Of course. And to make up for it, breakfast tomorrow is on us.", he: "כמובן. וכדי לפצות על כך, ארוחת הבוקר מחר על חשבוננו." },
      { who: "you", en: "That's very kind of you. I appreciate it.", he: "זה מאוד נחמד מצדך. אני מעריך את זה." }
    ]
  },
  {
    id: "film-discussion",
    title: "מדברים על סרט",
    subtitle: "רמה מתקדמת · להביע דעה",
    lines: [
      { who: "app", en: "So, what did you think of the film?", he: "נו, מה חשבת על הסרט?" },
      { who: "you", en: "On the whole, I enjoyed it, although the plot was a bit slow.", he: "בסך הכול נהניתי, אם כי העלילה הייתה קצת איטית." },
      { who: "app", en: "Really? I thought it was a masterpiece.", he: "באמת? אני חשבתי שזו יצירת מופת." },
      { who: "you", en: "I see your point. The actors were excellent, there's no doubt about that.", he: "אני מבין את הנקודה שלך. השחקנים היו מצוינים, אין ספק בזה." },
      { who: "app", en: "And the ending? Did you expect it?", he: "והסוף? ציפית לו?" },
      { who: "you", en: "To be honest, it took me completely by surprise.", he: "האמת, הוא הפתיע אותי לגמרי." },
      { who: "app", en: "Same here. Let's go to another film next week.", he: "גם אותי. בוא נלך לעוד סרט בשבוע הבא." },
      { who: "you", en: "Sounds good, as long as it's not too long!", he: "נשמע טוב, כל עוד הוא לא ארוך מדי!" }
    ]
  },
  {
    id: "travel-agent",
    title: "אצל סוכן הנסיעות",
    subtitle: "רמה מתקדמת · מתכננים טיול לחו״ל",
    lines: [
      { who: "app", en: "Good morning. How can I help you plan your trip?", he: "בוקר טוב. איך אוכל לעזור לך לתכנן את הטיול?" },
      { who: "you", en: "My wife and I would like to spend ten days in Italy in the spring.", he: "אשתי ואני רוצים לבלות עשרה ימים באיטליה באביב." },
      { who: "app", en: "Wonderful. Do you prefer guided tours, or travelling on your own?", he: "נהדר. אתם מעדיפים סיורים מודרכים, או לטייל לבד?" },
      { who: "you", en: "A bit of both. We'd also like to see some places off the beaten track.", he: "קצת מזה וקצת מזה. נרצה גם לראות כמה מקומות הרחק מהמסלול המוכר." },
      { who: "app", en: "I'll prepare an itinerary with flights and accommodation. What is your budget?", he: "אכין מסלול עם טיסות ולינה. מה התקציב שלכם?" },
      { who: "you", en: "It depends, but we'd rather not spend more than fifteen thousand shekels.", he: "זה תלוי, אבל נעדיף לא להוציא יותר מחמישה עשר אלף שקל." },
      { who: "app", en: "That's reasonable. I'll send you the details by email.", he: "זה סביר. אשלח לך את הפרטים במייל." },
      { who: "you", en: "Great. Please don't forget to include travel insurance.", he: "מצוין. בבקשה אל תשכח לכלול ביטוח נסיעות." }
    ]
  },
  {
    id: "old-days",
    title: "שיחה על פעם",
    subtitle: "רמה מתקדמת · מביטים לאחור עם חבר",
    lines: [
      { who: "app", en: "Do you remember when we used to play football in the street?", he: "אתה זוכר כששיחקנו כדורגל ברחוב?" },
      { who: "you", en: "Of course! I'll never forget the day we broke Mrs. Levy's window.", he: "בטח! לעולם לא אשכח את היום ששברנו את החלון של גברת לוי." },
      { who: "app", en: "Ha! Looking back, we were lucky she didn't tell our parents.", he: "הא! במבט לאחור, היה לנו מזל שהיא לא סיפרה להורים שלנו." },
      { who: "you", en: "Times have changed. Nowadays children play on their phones.", he: "הזמנים השתנו. בימינו ילדים משחקים בטלפונים." },
      { who: "app", en: "That's true. Do you ever miss the good old days?", he: "זה נכון. אתה מתגעגע לפעמים לימים הטובים ההם?" },
      { who: "you", en: "Sometimes. But I cherish what we have today, especially the grandchildren.", he: "לפעמים. אבל אני מוקיר את מה שיש לנו היום, במיוחד את הנכדים." },
      { who: "app", en: "Well said. Time flies, doesn't it?", he: "יפה אמרת. הזמן טס, נכון?" }
    ]
  },
  {
    id: "insurance-call",
    title: "שיחה עם חברת הביטוח",
    subtitle: "רמה מתקדמת · פתרון בעיה בטלפון",
    lines: [
      { who: "app", en: "Good afternoon, you've reached customer service. How may I help you?", he: "צהריים טובים, הגעת לשירות הלקוחות. במה אוכל לעזור?" },
      { who: "you", en: "Hello. I sent you a claim a month ago, and I haven't heard back yet.", he: "שלום. שלחתי אליכם תביעה לפני חודש, ועדיין לא קיבלתי תשובה." },
      { who: "app", en: "I'm sorry about the delay. Could you give me your policy number?", he: "אני מצטער על העיכוב. תוכל לתת לי את מספר הפוליסה שלך?" },
      { who: "you", en: "Yes, just a moment. Hold on, I'll get my glasses.", he: "כן, רק רגע. חכה, אביא את המשקפיים שלי." },
      { who: "app", en: "Take your time.", he: "קח את הזמן." },
      { who: "you", en: "Here it is. I'd appreciate it if you could look into it today.", he: "הנה הוא. אודה לך אם תוכל לבדוק את זה היום." },
      { who: "app", en: "I can see your claim. It was approved, and the money will arrive within five working days.", he: "אני רואה את התביעה שלך. היא אושרה, והכסף יגיע תוך חמישה ימי עבודה." },
      { who: "you", en: "What a relief! Thank you for your help.", he: "איזו הקלה! תודה על העזרה." }
    ]
  }
];

/*
 * נושאים לכתיבה חופשית (מסך "כותבים").
 * לכל נושא: הוראה בעברית, שאלה באנגלית, משפטי פתיחה, וביטויים שיכולים לעזור.
 */
window.WRITING_PROMPTS = [
  {
    id: "my-day", title: "היום שלי", level: 1,
    he: "ספרו בשלושה–ארבעה משפטים מה עשיתם היום.",
    en: "What did you do today?",
    starters: ["This morning, I", "In the afternoon, I", "Later on, I"],
    phrases: ["I woke up at", "I had breakfast", "I went to", "I met", "After that", "In the end"]
  },
  {
    id: "message-grandchild", title: "הודעה לנכד או לנכדה", level: 1,
    he: "כתבו הודעה קצרה ושמחה לנכד או לנכדה.",
    en: "Write a short message to your grandchild.",
    starters: ["Hi sweetheart,", "I hope you are well.", "Love, Grandpa"],
    phrases: ["I miss you", "How have you been?", "I'm proud of you", "I look forward to seeing you", "Let's meet soon", "Keep in touch"]
  },
  {
    id: "introduce-myself", title: "להציג את עצמי", level: 1,
    he: "כתבו כמה משפטים על עצמכם: מאיפה אתם, מה עשיתם בחיים, מה אתם אוהבים.",
    en: "Tell me about yourself.",
    starters: ["My name is", "I was born in", "I used to work as"],
    phrases: ["I grew up in", "I have ... grandchildren", "In my free time, I", "I really enjoy", "I'm interested in"]
  },
  {
    id: "my-neighborhood", title: "השכונה שלי", level: 2,
    he: "תארו את השכונה או העיר שבה אתם גרים.",
    en: "Describe your neighborhood.",
    starters: ["I live in", "My neighborhood is", "There is a"],
    phrases: ["It's a quiet neighborhood", "close to", "My neighbors are", "I like to walk to", "The best thing about it is"]
  },
  {
    id: "favorite-food", title: "האוכל שאני אוהב", level: 2,
    he: "כתבו על מאכל שאתם אוהבים, ומי הכין אותו.",
    en: "What is your favorite dish, and why?",
    starters: ["My favorite dish is", "My mother used to make", "It reminds me of"],
    phrases: ["It tastes like", "on Friday evenings", "the whole family", "with fresh bread", "It smells wonderful"]
  },
  {
    id: "dream-trip", title: "הטיול שאני חולם עליו", level: 3,
    he: "לאן הייתם רוצים לטוס, ולמה?",
    en: "Where would you like to travel, and why?",
    starters: ["I would love to visit", "I have always wanted to see", "If I could, I would"],
    phrases: ["for a week", "guided tour", "I'd rather", "It depends on the weather", "the old city", "beautiful views"]
  },
  {
    id: "childhood-memory", title: "זיכרון מהילדות", level: 3,
    he: "ספרו על זיכרון אחד מהילדות שאתם אוהבים.",
    en: "Tell a story from your childhood.",
    starters: ["When I was a child,", "I'll never forget", "Back then,"],
    phrases: ["We used to", "In those days", "Suddenly", "It turned out that", "Looking back"]
  },
  {
    id: "opinion-phones", title: "מה דעתך: טלפונים חכמים", level: 4,
    he: "האם הטלפונים החכמים שיפרו את החיים? כתבו את דעתכם, עם נימוק אחד בעד ואחד נגד.",
    en: "Have smartphones made our lives better?",
    starters: ["In my opinion,", "On the one hand,", "On the other hand,"],
    phrases: ["To be honest", "I see the point", "Having said that", "keep in touch with family", "It's hard to keep up with", "On the whole"]
  },
  {
    id: "complaint-email", title: "מייל תלונה", level: 4,
    he: "כתבו מייל מנומס לחנות: הזמנתם משהו והגיע מוצר פגום.",
    en: "Write a polite complaint email to a shop.",
    starters: ["Dear Sir or Madam,", "I am writing to", "Kind regards,"],
    phrases: ["I ordered", "Unfortunately", "it arrived damaged", "I would be grateful if", "a refund", "Please find attached"]
  },
  {
    id: "advice-young", title: "עצה לדור הצעיר", level: 5,
    he: "איזו עצה הייתם נותנים לאדם צעיר? הסבירו למה.",
    en: "What advice would you give to a young person?",
    starters: ["If I were you,", "Let me give you a piece of advice:", "Looking back,"],
    phrases: ["It's never too late", "Don't give up", "I wish I had", "I should have", "family comes first", "Time flies"]
  },
  {
    id: "life-lesson", title: "שיעור שלמדתי בחיים", level: 5,
    he: "ספרו על רגע או החלטה שלימדו אתכם משהו חשוב.",
    en: "Describe an experience that taught you something important.",
    starters: ["Many years ago,", "At first,", "In the end, I realized that"],
    phrases: ["It turned out", "I learned that", "Had I known", "over the years", "I'm grateful for", "every cloud has a silver lining"]
  },
  {
    id: "news-today", title: "מה קרה בחדשות", level: 5,
    he: "בחרו ידיעה מהחדשות האחרונות וכתבו עליה ועל דעתכם.",
    en: "Write about something you heard in the news.",
    starters: ["Yesterday I read that", "According to the news,", "It seems to me that"],
    phrases: ["The government announced", "prices are going up", "There's no doubt that", "To some extent", "I tend to think"]
  }
];
