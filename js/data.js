/*
 * תוכן השיעורים והשיחות — רמה בינונית ומעלה (B1–B2), למי שכבר מכיר את המילים הבסיסיות.
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
  }
];
