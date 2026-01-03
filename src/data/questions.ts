export interface Question {
  id: number;
  question: string;
  type: 'multiple' | 'boolean';
  options?: string[];
  correctAnswer: string | boolean;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Phishing hujumi nima?",
    type: 'multiple',
    options: [
      "Foydalanuvchilarni aldab maxfiy ma'lumotlarni olish",
      "Kompyuter viruslarini tarqatish",
      "Tarmoq ulanishini buzish",
      "Ma'lumotlar bazasini shifrlash"
    ],
    correctAnswer: "Foydalanuvchilarni aldab maxfiy ma'lumotlarni olish",
    explanation: "Phishing - bu ijtimoiy muhandislik hujumi bo'lib, foydalanuvchilarni aldab parol, kredit karta ma'lumotlari va boshqa maxfiy ma'lumotlarni olishga qaratilgan."
  },
  {
    id: 2,
    question: "HTTPS protokoli ma'lumotlarni shifrlaydi.",
    type: 'boolean',
    correctAnswer: true,
    explanation: "HTTPS (HTTP Secure) SSL/TLS orqali ma'lumotlarni shifrlaydi va xavfsiz aloqani ta'minlaydi."
  },
  {
    id: 3,
    question: "Kuchli parol qanday bo'lishi kerak?",
    type: 'multiple',
    options: [
      "Kamida 8 ta harf",
      "Faqat raqamlardan iborat",
      "Katta-kichik harflar, raqamlar va maxsus belgilar aralash, kamida 12 ta belgi",
      "Tug'ilgan sana asosida"
    ],
    correctAnswer: "Katta-kichik harflar, raqamlar va maxsus belgilar aralash, kamida 12 ta belgi",
    explanation: "Kuchli parol turli xil belgilardan iborat bo'lishi va kamida 12 ta belgidan oshishi kerak."
  },
  {
    id: 4,
    question: "Firewall faqat viruslardan himoya qiladi.",
    type: 'boolean',
    correctAnswer: false,
    explanation: "Firewall tarmoq trafikini nazorat qiladi va ruxsatsiz kirishdan himoya qiladi. Viruslardan himoya uchun antivirus dasturlari kerak."
  },
  {
    id: 5,
    question: "SQL Injection hujumida qanday zaiflik ishlatiladi?",
    type: 'multiple',
    options: [
      "Zaiflashgan parollar",
      "Foydalanuvchi kiritgan ma'lumotlarni tekshirmaslik",
      "Eskirgan operatsion tizim",
      "Shifrlash yo'qligi"
    ],
    correctAnswer: "Foydalanuvchi kiritgan ma'lumotlarni tekshirmaslik",
    explanation: "SQL Injection hujumida tajovuzkorlar foydalanuvchi kiritadigan maydonlarga zararli SQL kodlarini kiritib, ma'lumotlar bazasiga ruxsatsiz kirish oladi."
  },
  {
    id: 6,
    question: "VPN sizning IP manzilingizni yashiradi.",
    type: 'boolean',
    correctAnswer: true,
    explanation: "VPN (Virtual Private Network) sizning internet trafikingizni shifrlaydi va haqiqiy IP manzilingizni yashiradi."
  },
  {
    id: 7,
    question: "DDoS hujumi nima?",
    type: 'multiple',
    options: [
      "Ma'lumotlarni o'g'irlash",
      "Serverni ortiqcha so'rovlar bilan ishdan chiqarish",
      "Parollarni sindirish",
      "Virusni tarqatish"
    ],
    correctAnswer: "Serverni ortiqcha so'rovlar bilan ishdan chiqarish",
    explanation: "DDoS (Distributed Denial of Service) hujumida ko'p sonli kompyuterlar bir vaqtda serverga so'rov yuborib, uni ishdan chiqaradi."
  },
  {
    id: 8,
    question: "Ikki bosqichli autentifikatsiya (2FA) faqat paroldan foydalanadi.",
    type: 'boolean',
    correctAnswer: false,
    explanation: "2FA ikki xil autentifikatsiya usulidan foydalanadi: parol va qo'shimcha tekshiruv (SMS kod, autentifikator ilovasi va hokazo)."
  },
  {
    id: 9,
    question: "Ransomware qanday ishlaydi?",
    type: 'multiple',
    options: [
      "Parollarni o'g'irlaydi",
      "Fayllarni shifrlaydi va pul talab qiladi",
      "Kompyuterni sekinlashtiradi",
      "Spam xabarlar yuboradi"
    ],
    correctAnswer: "Fayllarni shifrlaydi va pul talab qiladi",
    explanation: "Ransomware foydalanuvchi fayllarini shifrlaydi va shifrni ochish uchun to'lov (odatda kriptovalyutada) talab qiladi."
  },
  {
    id: 10,
    question: "Ochiq Wi-Fi tarmoqlari har doim xavfsiz.",
    type: 'boolean',
    correctAnswer: false,
    explanation: "Ochiq Wi-Fi tarmoqlarida ma'lumotlaringiz osongina tutib olinishi mumkin. VPN dan foydalanish tavsiya etiladi."
  },
  {
    id: 11,
    question: "Social Engineering hujumi asosida nima yotadi?",
    type: 'multiple',
    options: [
      "Texnik zaifliklar",
      "Inson psixologiyasidan foydalanish",
      "Dasturiy ta'minot xatolari",
      "Apparat nosozliklari"
    ],
    correctAnswer: "Inson psixologiyasidan foydalanish",
    explanation: "Social Engineering insonlarni aldash va manipulyatsiya qilish orqali maxfiy ma'lumotlarni olishga asoslangan."
  },
  {
    id: 12,
    question: "Antivirus dasturi 100% himoya kafolati beradi.",
    type: 'boolean',
    correctAnswer: false,
    explanation: "Hech qanday antivirus to'liq himoyani kafolatlay olmaydi. Yangi tahdidlar doimo paydo bo'lib turadi."
  },
  {
    id: 13,
    question: "Zero-day zaiflik nima?",
    type: 'multiple',
    options: [
      "Eski dasturiy ta'minot xatolari",
      "Hali ochilmagan va tuzatilmagan yangi zaiflik",
      "Parol bilan bog'liq muammo",
      "Tarmoq konfiguratsiya xatosi"
    ],
    correctAnswer: "Hali ochilmagan va tuzatilmagan yangi zaiflik",
    explanation: "Zero-day zaiflik - bu dasturiy ta'minotda topilgan, lekin ishlab chiqaruvchi tomonidan hali tuzatilmagan zaiflik."
  },
  {
    id: 14,
    question: "Shifrlangan ma'lumotlarni kalit bilan ochish mumkin.",
    type: 'boolean',
    correctAnswer: true,
    explanation: "Shifrlash ma'lumotlarni maxsus kalit yordamida o'qib bo'lmaydigan ko'rinishga o'tkazadi. To'g'ri kalit bilan ularni qayta tiklash mumkin."
  },
  {
    id: 15,
    question: "Man-in-the-Middle (MITM) hujumi qanday amalga oshiriladi?",
    type: 'multiple',
    options: [
      "Tajovuzkor ikki tomon o'rtasidagi aloqani tinglaydi",
      "Serverni ortiqcha yuklash",
      "Virus yuborish",
      "Parolni taxmin qilish"
    ],
    correctAnswer: "Tajovuzkor ikki tomon o'rtasidagi aloqani tinglaydi",
    explanation: "MITM hujumida tajovuzkor ikki tomon (masalan, foydalanuvchi va server) o'rtasiga kirib, ma'lumotlarni tinglaydi yoki o'zgartiradi."
  },
  {
    id: 16,
    question: "Backup (zaxira nusxa) yaratish xavfsizlik uchun muhim emas.",
    type: 'boolean',
    correctAnswer: false,
    explanation: "Backup yaratish ransomware va boshqa ma'lumot yo'qotish holatlarda juda muhim. 3-2-1 qoidasiga amal qiling."
  },
  {
    id: 17,
    question: "Keylogger nima?",
    type: 'multiple',
    options: [
      "Klaviatura tugmalarini yozib oladigan dastur",
      "Ekranni yozib oladigan dastur",
      "Internet tezligini oshiruvchi dastur",
      "Parol menejeri"
    ],
    correctAnswer: "Klaviatura tugmalarini yozib oladigan dastur",
    explanation: "Keylogger klaviaturada bosilgan barcha tugmalarni yashirincha yozib oladi, shu jumladan parollar va shaxsiy ma'lumotlarni."
  },
  {
    id: 18,
    question: "Penetration testing nima uchun o'tkaziladi?",
    type: 'multiple',
    options: [
      "Tizim tezligini oshirish uchun",
      "Tizim zaifliklarini topish va tuzatish uchun",
      "Foydalanuvchilarni o'qitish uchun",
      "Ma'lumotlarni zaxiralash uchun"
    ],
    correctAnswer: "Tizim zaifliklarini topish va tuzatish uchun",
    explanation: "Penetration testing - bu tizimga hujum simulyatsiyasi orqali zaifliklarni topish va ularni tuzatish imkonini beruvchi jarayon."
  },
  {
    id: 19,
    question: "Xavfsiz tizim yaratish uchun faqat texnik choralar yetarli.",
    type: 'boolean',
    correctAnswer: false,
    explanation: "Xavfsizlik texnik, tashkiliy va inson omillarini o'z ichiga oladi. Xodimlarni o'qitish va xavfsizlik madaniyatini shakllantirish ham juda muhim."
  },
  {
    id: 20,
    question: "Zero Trust xavfsizlik modeli nimani anglatadi?",
    type: 'multiple',
    options: [
      "Hech kimga va hech narsaga avtomatik ravishda ishonmaslik",
      "Faqat ichki tarmoqqa ishonish",
      "Parollarni ishlatmaslik",
      "Barcha xodimlarga to'liq huquq berish"
    ],
    correctAnswer: "Hech kimga va hech narsaga avtomatik ravishda ishonmaslik",
    explanation: "Zero Trust - bu har bir foydalanuvchi va qurilmani har doim tekshirishni talab qiladigan xavfsizlik modeli. Ichki yoki tashqi farqi yo'q."
  }
];

export const securityLevels = [
  { minScore: 0, maxScore: 24, title: "Script Kiddie", description: "Hali o'rganish yo'lining boshidasiz!", icon: "👶" },
  { minScore: 25, maxScore: 44, title: "Beginner Hacker", description: "Asosiy bilimlar mavjud!", icon: "🔰" },
  { minScore: 45, maxScore: 64, title: "Intermediate Hacker", description: "Yaxshi mutaxassis bo'lishingiz mumkin!", icon: "💻" },
  { minScore: 65, maxScore: 84, title: "Advanced Hacker", description: "Kuchli bilimga egasiz!", icon: "🛡️" },
  { minScore: 85, maxScore: 99, title: "Expert Hacker", description: "Deyarli mutaxassis darajasi!", icon: "⚡" },
  { minScore: 100, maxScore: 100, title: "Elite Hacker", description: "Siz haqiqiy mutaxassissiz!", icon: "🏆" }
];

export const getSecurityLevel = (score: number) => {
  return securityLevels.find(level => score >= level.minScore && score <= level.maxScore) || securityLevels[0];
};
