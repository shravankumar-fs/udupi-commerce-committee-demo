// Real details of the Udupi Chamber of Commerce and Industry, from the Chamber's own material (logo, 2026–27 committee banner,
// past-presidents chart, photos, press cuttings) and public sources (MCA company record via Tofler, Varthabharati, Daijiworld).
export type Bi = { en: string; kn: string };

export const org = {
  name: { en: "Udupi Chamber of Commerce and Industry", kn: "ಉಡುಪಿ ಚೇಂಬರ್ ಆಫ್ ಕಾಮರ್ಸ್ ಆ್ಯಂಡ್ ಇಂಡಸ್ಟ್ರಿ" },
  short: "UCCI",
  established: 1964,
  incorporated: "2003-02-05",
  address: {
    en: "Chamber Tower, Railway Godown Road, Indrali, Udupi, 576102",
    kn: "ಚೇಂಬರ್ ಟವರ್, ರೈಲ್ವೇ ಗೋಡೌನ್ ರಸ್ತೆ, ಇಂದ್ರಾಳಿ, ಉಡುಪಿ, 576102",
  },
  phone: "82178 00763",
  email: "udupichamber@gmail.com",
};

export const stats = [
  { value: "1964", label: { en: "Year the Chamber was established", kn: "ಚೇಂಬರ್ ಸ್ಥಾಪನೆಯಾದ ವರ್ಷ" } },
  { value: "10", label: { en: "Past presidents since 1964", kn: "1964ರಿಂದ ಹಿಂದಿನ ಅಧ್ಯಕ್ಷರು" } },
  { value: "16", label: { en: "Office bearers & directors, 2026–27", kn: "ಪದಾಧಿಕಾರಿಗಳು ಮತ್ತು ನಿರ್ದೇಶಕರು, 2026–27" } },
];

export type Event = {
  slug: string;
  title: Bi;
  date: string;
  time: string;
  venue: Bi;
  type: Bi;
  summary: Bi;
  upcoming: boolean;
  photo: string;
  gallery?: string[];
  source?: { name: string; url: string };
};

export const events: Event[] = [
  {
    slug: "office-bearers-2026-27", photo: "agm-stage-group", title: { en: "Installation of Office Bearers 2026–27", kn: "2026–27ರ ಪದಾಧಿಕಾರಿಗಳ ಪದಗ್ರಹಣ" },
    date: "2026-09-29", time: "", venue: { en: "Chamber building, Railway Godown Road, Indrali, Udupi", kn: "ಚೇಂಬರ್ ಕಟ್ಟಡ, ರೈಲ್ವೇ ಗೋಡೌನ್ ರಸ್ತೆ, ಇಂದ್ರಾಳಿ, ಉಡುಪಿ" },
    type: { en: "Annual meeting", kn: "ವಾರ್ಷಿಕ ಸಭೆ" },
    summary: { en: "Nataraj Prabhu was elected unopposed as President for 2026–27 and took charge from outgoing President Ammunje Prabhakar Nayak, along with the new team of office bearers and directors.", kn: "2026–27ನೇ ಸಾಲಿಗೆ ನಟರಾಜ ಪ್ರಭು ಅವಿರೋಧವಾಗಿ ಅಧ್ಯಕ್ಷರಾಗಿ ಆಯ್ಕೆಯಾಗಿ, ನಿರ್ಗಮಿತ ಅಧ್ಯಕ್ಷ ಅಮ್ಮುಂಜೆ ಪ್ರಭಾಕರ ನಾಯಕ್ ಅವರಿಂದ ಅಧಿಕಾರ ಸ್ವೀಕರಿಸಿದರು." },
    upcoming: false,
    gallery: ["agm-stage-group", "agm-dais-1", "agm-speaker-1", "agm-handshake", "agm-felicitation", "agm-audience-1", "agm-audience-2", "agm-speaker-portrait", "agm-president-bouquet"],
    source: { name: "Varthabharati", url: "https://www.varthabharati.in/udupi/--2279217" },
  },
];

export type Post = {
  slug: string;
  kind: "circular" | "news" | "press";
  title: Bi;
  date: string;
  excerpt: Bi;
  body: Bi[];
  cutouts?: string[];
  source?: { name: string; url: string };
};

export const kinds: Record<Post["kind"], Bi> = {
  circular: { en: "Circular", kn: "ಸುತ್ತೋಲೆ" },
  news: { en: "News", kn: "ಸುದ್ದಿ" },
  press: { en: "Press release", kn: "ಪತ್ರಿಕಾ ಪ್ರಕಟಣೆ" },
};

export const posts: Post[] = [
  {
    slug: "nataraj-prabhu-president-2026-27", kind: "news",
    title: { en: "Nataraj Prabhu takes charge as President for 2026–27", kn: "2026–27ರ ಅಧ್ಯಕ್ಷರಾಗಿ ನಟರಾಜ ಪ್ರಭು ಅಧಿಕಾರ ಸ್ವೀಕಾರ" },
    date: "2026-09-29",
    cutouts: ["news-vijaya-karnataka", "news-kannada-prabha", "news-udupi-cutout"],
    excerpt: { en: "Elected unopposed, he succeeds Ammunje Prabhakar Nayak. Dr. Vijayendra Vasant Rao is Vice President and K. Vinod Pai is Treasurer.", kn: "ಅವಿರೋಧವಾಗಿ ಆಯ್ಕೆಯಾದ ಅವರು ಅಮ್ಮುಂಜೆ ಪ್ರಭಾಕರ ನಾಯಕ್ ಅವರ ಉತ್ತರಾಧಿಕಾರಿ. ಡಾ. ವಿಜಯೇಂದ್ರ ವಸಂತ ರಾವ್ ಉಪಾಧ್ಯಕ್ಷರು, ವಿನೋದ್ ಪೈ ಖಜಾಂಚಿ." },
    body: [
      { en: "Nataraj Prabhu has been elected unopposed as President of the Udupi Chamber of Commerce and Industry for 2026–27. Outgoing President Ammunje Prabhakar Nayak handed over charge at a ceremony held at the Chamber building on Railway Godown Road, Indrali.", kn: "ಉಡುಪಿ ಚೇಂಬರ್ ಆಫ್ ಕಾಮರ್ಸ್ ಆ್ಯಂಡ್ ಇಂಡಸ್ಟ್ರಿಯ 2026–27ನೇ ಸಾಲಿನ ಅಧ್ಯಕ್ಷರಾಗಿ ನಟರಾಜ ಪ್ರಭು ಅವಿರೋಧವಾಗಿ ಆಯ್ಕೆಯಾಗಿದ್ದಾರೆ. ಇಂದ್ರಾಳಿಯ ರೈಲ್ವೇ ಗೋಡೌನ್ ರಸ್ತೆಯ ಚೇಂಬರ್ ಕಟ್ಟಡದಲ್ಲಿ ನಡೆದ ಸಮಾರಂಭದಲ್ಲಿ ನಿರ್ಗಮಿತ ಅಧ್ಯಕ್ಷ ಅಮ್ಮುಂಜೆ ಪ್ರಭಾಕರ ನಾಯಕ್ ಅಧಿಕಾರ ಹಸ್ತಾಂತರಿಸಿದರು." },
      { en: "The new team: Vice President Dr. Vijayendra Vasant Rao, Hon. Secretary Sameer Mohammed, Joint Secretaries K. Aneesh Pai and Avinash Poojary, and Treasurer K. Vinod Pai, along with ten directors.", kn: "ನೂತನ ತಂಡ: ಉಪಾಧ್ಯಕ್ಷ ಡಾ. ವಿಜಯೇಂದ್ರ ವಸಂತ ರಾವ್, ಗೌರವ ಕಾರ್ಯದರ್ಶಿ ಸಮೀರ್ ಮುಹಮ್ಮದ್, ಜಂಟಿ ಕಾರ್ಯದರ್ಶಿಗಳು ಅನೀಶ್ ಪೈ ಮತ್ತು ಅವಿನಾಶ್ ಪೂಜಾರಿ, ಖಜಾಂಚಿ ವಿನೋದ್ ಪೈ ಹಾಗೂ ಹತ್ತು ನಿರ್ದೇಶಕರು." },
    ],
    source: { name: "Varthabharati", url: "https://www.varthabharati.in/udupi/--2279217" },
  },
  {
    slug: "tourism-seminar-2024", kind: "news",
    title: { en: "Chamber hosts seminar on the future of Udupi tourism", kn: "ಉಡುಪಿ ಪ್ರವಾಸೋದ್ಯಮದ ಭವಿಷ್ಯ ಕುರಿತು ಚೇಂಬರ್ ವಿಚಾರಸಂಕಿರಣ" },
    date: "2024-07-20",
    excerpt: { en: "Hotel, homestay and trade associations joined the Chamber to discuss beach, health and education tourism.", kn: "ಹೋಟೆಲ್, ಹೋಮ್‌ಸ್ಟೇ ಮತ್ತು ವ್ಯಾಪಾರಿ ಸಂಘಗಳು ಚೇಂಬರ್ ಜೊತೆ ಸೇರಿ ಪ್ರವಾಸೋದ್ಯಮ ಕುರಿತು ಚರ್ಚಿಸಿದವು." },
    body: [
      { en: "The seminar \"Udupi Tourism: Yesterday, Today and Tomorrow\" was held at the Madhavakrishna Auditorium, Kidiyoor Hotel, with the district's coastal tourism committee and the hotel owners', homestay owners' and small traders' associations. Udupi MLA Yashpal Suvarna inaugurated the event.", kn: "\"ಉಡುಪಿ ಪ್ರವಾಸೋದ್ಯಮ: ನಿನ್ನೆ, ಇಂದು, ನಾಳೆ\" ವಿಚಾರಸಂಕಿರಣವು ಕಿದಿಯೂರು ಹೋಟೆಲ್‌ನ ಮಾಧವಕೃಷ್ಣ ಸಭಾಂಗಣದಲ್ಲಿ ನಡೆಯಿತು. ಉಡುಪಿ ಶಾಸಕ ಯಶ್‌ಪಾಲ್ ಸುವರ್ಣ ಉದ್ಘಾಟಿಸಿದರು." },
    ],
    source: { name: "Daijiworld", url: "https://daijiworld.com/news/newsDisplay?newsID=1208462" },
  },
  {
    slug: "electricity-tariff-2023", kind: "press",
    title: { en: "Chamber opposes electricity tariff hike for small industries", kn: "ಸಣ್ಣ ಕೈಗಾರಿಕೆಗಳ ವಿದ್ಯುತ್ ದರ ಏರಿಕೆಗೆ ಚೇಂಬರ್ ವಿರೋಧ" },
    date: "2023-06-17",
    excerpt: { en: "Higher fixed charges hurt the district's 13,000 small-scale industries, the Chamber said, asking for lower tariffs and electricity tax.", kn: "ಹೆಚ್ಚಿನ ನಿಗದಿತ ಶುಲ್ಕ ಜಿಲ್ಲೆಯ 13,000 ಸಣ್ಣ ಕೈಗಾರಿಕೆಗಳಿಗೆ ಹೊರೆ ಎಂದು ಚೇಂಬರ್ ಹೇಳಿದೆ." },
    body: [
      { en: "Then President Andaru Deviprasad Shetty, together with the district small-scale industries association, said the increase in fixed charges on electricity bills was affecting the growth of small-scale industries, 13,000 units that employ about 1.65 lakh people in Udupi district.", kn: "ಅಂದಿನ ಅಧ್ಯಕ್ಷ ಅಂದಾರು ದೇವಿಪ್ರಸಾದ್ ಶೆಟ್ಟಿ ಅವರು ಜಿಲ್ಲಾ ಸಣ್ಣ ಕೈಗಾರಿಕಾ ಸಂಘದೊಂದಿಗೆ, ವಿದ್ಯುತ್ ಬಿಲ್‌ನ ನಿಗದಿತ ಶುಲ್ಕ ಏರಿಕೆ ಜಿಲ್ಲೆಯ 13,000 ಸಣ್ಣ ಕೈಗಾರಿಕೆಗಳ ಬೆಳವಣಿಗೆಗೆ ಅಡ್ಡಿಯಾಗಿದೆ ಎಂದರು." },
      { en: "The Chamber asked the state government to reduce tariffs and cut the electricity tax from 9% to 5%.", kn: "ದರ ಇಳಿಕೆ ಮತ್ತು ವಿದ್ಯುತ್ ತೆರಿಗೆಯನ್ನು 9%ರಿಂದ 5%ಕ್ಕೆ ಇಳಿಸುವಂತೆ ಚೇಂಬರ್ ಸರ್ಕಾರವನ್ನು ಒತ್ತಾಯಿಸಿತು." },
    ],
    source: { name: "Daijiworld", url: "https://daijiworld.com/news/newsDisplay?newsID=1091044" },
  },
];

export const albums = [
  { slug: "annual-general-meeting-2026", title: { en: "23rd Annual General Meeting", kn: "23ನೇ ವಾರ್ಷಿಕ ಮಹಾಸಭೆ" }, photos: ["agm-stage-group", "agm-dais-1", "agm-speaker-1", "agm-speaker-2", "agm-audience-1", "agm-audience-2", "agm-handshake", "agm-felicitation", "agm-president-bouquet", "agm-speaker-portrait", "committee-group"] },
  { slug: "in-the-news", title: { en: "In the news: new President", kn: "ಪತ್ರಿಕೆಗಳಲ್ಲಿ: ನೂತನ ಅಧ್ಯಕ್ಷರು" }, photos: ["news-vijaya-karnataka", "news-kannada-prabha", "news-udupi-cutout"] },
  { slug: "ceremony-and-committee", title: { en: "Ceremony & committee 2026–27", kn: "ಸಮಾರಂಭ ಮತ್ತು ಸಮಿತಿ 2026–27" }, photos: ["stage-group", "ceremony-lamp-1", "ceremony-lamp-2", "hall-audience", "committee-banner"] },
  { slug: "chamber-tower", title: { en: "Chamber Tower & flag hoisting", kn: "ಚೇಂಬರ್ ಟವರ್ ಮತ್ತು ಧ್ವಜಾರೋಹಣ" }, photos: ["office", "flag-hoisting-1", "flag-hoisting-2"] },
];

export type Person = { name: string; role: Bi; group: "officer" | "director"; company?: string; photo?: string };

// Office bearers and board of directors 2026–27 — names, firms and photos from the Chamber's official 2026–27 banner (committee-2026-27.jpeg).
const Dir: Bi = { en: "Director", kn: "ನಿರ್ದೇಶಕರು" };
export const bearers: Person[] = [
  { name: "Nataraj Prabhu", role: { en: "President", kn: "ಅಧ್ಯಕ್ಷರು" }, group: "officer", company: "Shreya Printers", photo: "/Comittee_Board_members/Nataraj_Prabhu.jpeg" },
  { name: "Dr. Vijayendra Vasant", role: { en: "Vice President", kn: "ಉಪಾಧ್ಯಕ್ಷರು" }, group: "officer", company: "Dentacare", photo: "/Comittee_Board_members/dr_vijayendra.jpeg" },
  { name: "Sameer Mohammed", role: { en: "Hon. Secretary", kn: "ಗೌರವ ಕಾರ್ಯದರ್ಶಿ" }, group: "officer", company: "Armor Kartons Pvt. Ltd.", photo: "/Comittee_Board_members/Sameer_Mohammmed.jpeg" },
  { name: "K. Aneesh Pai", role: { en: "Joint Secretary", kn: "ಜಂಟಿ ಕಾರ್ಯದರ್ಶಿ" }, group: "officer", company: "Aneesh Traders", photo: "/Comittee_Board_members/aneesh_pai.jpeg" },
  { name: "Avinash Poojary", role: { en: "Joint Secretary", kn: "ಜಂಟಿ ಕಾರ್ಯದರ್ಶಿ" }, group: "officer", company: "Indian Kitchen", photo: "/Comittee_Board_members/Avinash_Poojari.jpeg" },
  { name: "K. Vinod Pai", role: { en: "Treasurer", kn: "ಖಜಾಂಚಿ" }, group: "officer", company: "Kalsankar Silk Palace", photo: "/Comittee_Board_members/Vinod_pai.jpeg" },
  { name: "M. Nagaraj Hebbar", role: Dir, group: "director", company: "Apna Holidays", photo: "/Comittee_Board_members/Nagaraj_Hebbar.jpeg" },
  { name: "Subhas M. Kamath", role: Dir, group: "director", company: "Abharan Jewellers Pvt. Ltd.", photo: "/Comittee_Board_members/Subhas_M_Kamath.jpeg" },
  { name: "Prakashchandra Shetty", role: Dir, group: "director", company: "GM Vidyanikethan School", photo: "/Comittee_Board_members/Prakashchandra_Shetty.jpeg" },
  { name: "Walter Saldanha", role: Dir, group: "director", company: "Alwyn Bakery", photo: "/Comittee_Board_members/Walter_Saldanha.jpeg" },
  { name: "Atul Bhaktha", role: Dir, group: "director", company: "Atul Buildcon", photo: "/Comittee_Board_members/Atul_Bhakta.jpeg" },
  { name: "Sripathy Bhat", role: Dir, group: "director", company: "Shantha Electricals Pvt. Ltd.", photo: "/Comittee_Board_members/Sripathy_Bhat.jpeg" },
  { name: "Chandan Shettigar", role: Dir, group: "director", company: "Eye Tone Clinic", photo: "/Comittee_Board_members/Chandan_Shettigar.jpeg" },
  { name: "Santhosh Kumar Shetty", role: Dir, group: "director", company: "Sagar Ceramics", photo: "/Comittee_Board_members/Santhosh_Kumar_Shetty.jpeg" },
  { name: "Shivaprasad Shetty", role: Dir, group: "director", company: "Hotel Thamboolam", photo: "/Comittee_Board_members/Shivaprasad_Shetty.jpeg" },
  { name: "Anand Karnad", role: Dir, group: "director", company: "M. R. Karnad & Sons", photo: "/Comittee_Board_members/Anand_Karnad.jpeg" },
];

export const stateCommittee = { name: "Deviprasad Shetty", role: { en: "State Committee Member", kn: "ರಾಜ್ಯ ಸಮಿತಿ ಸದಸ್ಯರು" }, photo: "/past_presidents/andar-deviprasad-shetty.jpg" };

// Past presidents, from the Chamber's "Past Presidents" chart (past president.pdf).
export const presidents = [
  { name: "A. Anantha Nayak", term: "1964–66", photo: "/past_presidents/a-anantha-nayak.jpg" },
  { name: "T. Ramesh Pai", term: "1966–99", photo: "/past_presidents/t-ramesh-pai.jpg" },
  { name: "A. Dayananda Nayak", term: "1999–2004", photo: "/past_presidents/a-dayananda-nayak.jpg" },
  { name: "K. Devadas Shanbhag", term: "2004–06", photo: "/past_presidents/k-devadas-shanbhag.jpg" },
  { name: "Gujjadi Prabhakar Nayak", term: "2006–10", photo: "/past_presidents/gujjadi-prabhakar-nayak.jpg" },
  { name: "Prasadraj Kanchan", term: "2010–13", photo: "/past_presidents/prasadraj-kanchan.jpg" },
  { name: "K. V. Prabhu", term: "2013–14", photo: "/past_presidents/k-v-prabhu.jpg" },
  { name: "Srikrishna Rao Kodancha", term: "2014–21", photo: "/past_presidents/srikrishna-rao-kodancha.jpg" },
  { name: "Andar Deviprasad Shetty", term: "2021–23", photo: "/past_presidents/andar-deviprasad-shetty.jpg" },
  { name: "Ammunje Prabhakar Nayak", term: "2023–26", photo: "/past_presidents/ammunje-prabhakar-nayak.jpg" },
];

export const heroSlides: { photo: string; caption: Bi }[] = [
  { photo: "office", caption: { en: "Chamber Tower, Indrali", kn: "ಚೇಂಬರ್ ಟವರ್, ಇಂದ್ರಾಳಿ" } },
  { photo: "stage-group", caption: { en: "Office bearers and directors", kn: "ಪದಾಧಿಕಾರಿಗಳು ಮತ್ತು ನಿರ್ದೇಶಕರು" } },
  { photo: "agm-stage-group", caption: { en: "23rd Annual General Meeting", kn: "23ನೇ ವಾರ್ಷಿಕ ಮಹಾಸಭೆ" } },
  { photo: "hall-audience", caption: { en: "Members in the hall", kn: "ಸಭಾಂಗಣದಲ್ಲಿ ಸದಸ್ಯರು" } },
];

// President's message for 2026–27, from UCCI_President_Message_P_Nataraj_Prabhu_2026-27.docx (English only).
export const presidentMessage = {
  title: "Building a Stronger, More Connected and Prosperous Business Community",
  intro: [
    "It is with great honour and a deep sense of responsibility that I take over as the President of the Udupi Chamber of Commerce & Industry (UCCI) for the year 2026–27.",
    "UCCI has a proud legacy of serving the business community of Udupi since 1964. Over the decades, the Chamber has evolved alongside the changing needs of our entrepreneurs, traders, professionals and industries. Today, as Udupi enters a new phase of growth and opportunity, I believe UCCI has an even greater role to play in shaping the future of our district.",
  ],
  visionQuote: "Together, let us build a stronger business ecosystem where every entrepreneur has the opportunity to grow, every business has a voice, and Udupi emerges as a preferred destination for enterprise, investment and innovation.",
  vision: "Udupi has tremendous potential. Our strengths in education, healthcare, tourism, hospitality, agriculture, fisheries, manufacturing, retail, services and entrepreneurship provide a strong foundation for sustainable economic development. Our responsibility is to convert this potential into meaningful opportunities for our business community and our younger generation.",
  priorities: [
    "Strengthening member engagement and creating greater value for every UCCI member.",
    "Promoting entrepreneurship and MSMEs, particularly among young entrepreneurs and first-generation business owners.",
    "Encouraging women entrepreneurship and creating more platforms for women-led businesses.",
    "Supporting startups, innovation and digital transformation among local businesses.",
    "Strengthening Udupi’s tourism and hospitality ecosystem and promoting Udupi as a destination for business and tourism.",
    "Creating stronger industry–education linkages to develop skilled manpower and employment opportunities.",
    "Facilitating interaction with government authorities and taking up important business and infrastructure issues affecting our members.",
    "Creating networking and business-development opportunities through meetings, seminars, exhibitions and industry interactions.",
    "Encouraging responsible and sustainable business practices for the long-term development of Udupi.",
    "Giving greater visibility to Udupi businesses and helping local enterprises explore markets beyond the district.",
  ],
  sections: [
    { h: "A Chamber That Listens", p: [
      "A Chamber becomes truly effective when it listens to its members. I would like UCCI to be a platform where every member, whether a small trader, MSME, professional, manufacturer, service provider or large enterprise, feels heard and represented.",
      "Our strength lies in our collective voice. Therefore, I encourage every member to actively participate in UCCI activities, share ideas, raise concerns and contribute to building a stronger business community." ] },
    { h: "Working Together for Udupi", p: [
      "No single organisation can transform the business environment alone. The growth of Udupi requires collaboration between businesses, government, educational institutions, financial institutions, professionals, civil society and the younger generation.",
      "UCCI will continue to act as a bridge between these stakeholders and work towards creating an environment where businesses can operate, compete and grow with confidence.",
      "I also believe that the next generation must be at the heart of our economic journey. We must create opportunities for young people to become entrepreneurs, innovators, employers and leaders rather than merely job seekers." ] },
    { h: "Our Commitment", p: [
      "The year ahead will be a year of action, engagement and collaboration. With the support of our office bearers, Board of Directors, past presidents, members and the entire business community, I am confident that we can take UCCI to greater heights.",
      "Let us preserve the rich legacy built by those who came before us while creating a stronger foundation for those who will come after us." ] },
  ],
  closing: "Let us work together. Let us grow together. Let us build a better Udupi together.",
  thanks: "I look forward to your valuable support, participation and partnership throughout my tenure.",
  signoff: { name: "P. Nataraj Prabhu", role: "President, Udupi Chamber of Commerce & Industry (UCCI), 2026–27" },
  motto: "Together for Business. Together for Udupi.",
};

// The trades and coastal livelihoods Udupi is known for. Icons are in components/Icons.tsx.
export const sectors: { icon: "fish" | "beach" | "education" | "tech" | "industry" | "agri" | "food" | "trade"; tone: string; title: Bi; text: Bi }[] = [
  { icon: "fish", tone: "#0e7490", title: { en: "Fisheries", kn: "ಮೀನುಗಾರಿಕೆ" }, text: { en: "Malpe harbour, boats, nets and seafood trade", kn: "ಮಲ್ಪೆ ಬಂದರು, ದೋಣಿ, ಬಲೆ ಮತ್ತು ಸಮುದ್ರಾಹಾರ ವ್ಯಾಪಾರ" } },
  { icon: "beach", tone: "#0369a1", title: { en: "Coast & tourism", kn: "ಕರಾವಳಿ ಮತ್ತು ಪ್ರವಾಸೋದ್ಯಮ" }, text: { en: "Beaches, temples, hotels and homestays", kn: "ಕಡಲತೀರ, ದೇವಾಲಯ, ಹೋಟೆಲ್ ಮತ್ತು ಹೋಮ್‌ಸ್ಟೇ" } },
  { icon: "education", tone: "#4338ca", title: { en: "Education", kn: "ಶಿಕ್ಷಣ" }, text: { en: "Schools, colleges and the Manipal campus", kn: "ಶಾಲೆ, ಕಾಲೇಜು ಮತ್ತು ಮಣಿಪಾಲ ಕ್ಯಾಂಪಸ್" } },
  { icon: "tech", tone: "#1d4ed8", title: { en: "Technology & services", kn: "ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಸೇವೆಗಳು" }, text: { en: "IT, professional and business services", kn: "ಐಟಿ, ವೃತ್ತಿಪರ ಮತ್ತು ವ್ಯಾಪಾರ ಸೇವೆಗಳು" } },
  { icon: "industry", tone: "#475569", title: { en: "Industry", kn: "ಕೈಗಾರಿಕೆ" }, text: { en: "Manufacturing and small-scale units", kn: "ತಯಾರಿಕೆ ಮತ್ತು ಸಣ್ಣ ಕೈಗಾರಿಕೆಗಳು" } },
  { icon: "agri", tone: "#4d7c0f", title: { en: "Agriculture", kn: "ಕೃಷಿ" }, text: { en: "Paddy, coconut and arecanut", kn: "ಭತ್ತ, ತೆಂಗು ಮತ್ತು ಅಡಿಕೆ" } },
  { icon: "food", tone: "#b45309", title: { en: "Food & hospitality", kn: "ಆಹಾರ ಮತ್ತು ಆತಿಥ್ಯ" }, text: { en: "Udupi cuisine, restaurants and food processing", kn: "ಉಡುಪಿ ಖಾದ್ಯ, ಹೋಟೆಲ್ ಮತ್ತು ಆಹಾರ ಸಂಸ್ಕರಣೆ" } },
  { icon: "trade", tone: "#123a6b", title: { en: "Trade & commerce", kn: "ವ್ಯಾಪಾರ ಮತ್ತು ವಾಣಿಜ್ಯ" }, text: { en: "Retail, wholesale, banking and finance", kn: "ಚಿಲ್ಲರೆ, ಸಗಟು, ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಹಣಕಾಸು" } },
];
