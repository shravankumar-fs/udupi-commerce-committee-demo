// Real details of the Udupi Chamber of Commerce and Industry are taken from public sources
// (MCA company record via Tofler, Varthabharati, Daijiworld, Bellevision). Member listings,
// upcoming events, sample circulars and fees are DEMO content. In the real build all of this lives in Payload CMS.
export type Bi = { en: string; kn: string };

export const org = {
  name: { en: "Udupi Chamber of Commerce and Industry", kn: "ಉಡುಪಿ ಚೇಂಬರ್ ಆಫ್ ಕಾಮರ್ಸ್ ಆ್ಯಂಡ್ ಇಂಡಸ್ಟ್ರಿ" },
  short: "UCCI",
  incorporated: "2003-02-05",
  address: {
    en: "Chamber Tower, Railway Godown Road, Indrali, Udupi – 576102",
    kn: "ಚೇಂಬರ್ ಟವರ್, ರೈಲ್ವೇ ಗೋಡೌನ್ ರಸ್ತೆ, ಇಂದ್ರಾಳಿ, ಉಡುಪಿ – 576102",
  },
  phone: "+91 0820 XXX XXXX",
  whatsapp: "910000000000",
  email: "office@ucci.example",
  hours: { en: "Mon – Sat, 10:00 am – 5:30 pm", kn: "ಸೋಮ – ಶನಿ, ಬೆಳಿಗ್ಗೆ 10:00 – ಸಂಜೆ 5:30" },
};

export const stats = [
  { value: "2003", label: { en: "Registered as a not-for-profit company", kn: "ಲಾಭರಹಿತ ಸಂಸ್ಥೆಯಾಗಿ ನೋಂದಣಿ" } },
  { value: "13,000+", label: { en: "Small-scale industries in Udupi district", kn: "ಉಡುಪಿ ಜಿಲ್ಲೆಯ ಸಣ್ಣ ಕೈಗಾರಿಕೆಗಳು" } },
  { value: "1.65 lakh", label: { en: "Jobs those industries support", kn: "ಈ ಕೈಗಾರಿಕೆಗಳು ನೀಡುವ ಉದ್ಯೋಗ" } },
  { value: "12", label: { en: "Industry sectors in our directory", kn: "ಡೈರೆಕ್ಟರಿಯಲ್ಲಿನ ಉದ್ಯಮ ವಲಯಗಳು" } },
];

export const categories: { id: string; name: Bi; icon: string }[] = [
  { id: "hospitality", name: { en: "Hotels & Restaurants", kn: "ಹೋಟೆಲ್ ಮತ್ತು ರೆಸ್ಟೋರೆಂಟ್" }, icon: "🍽" },
  { id: "textiles", name: { en: "Textiles & Garments", kn: "ಜವಳಿ ಮತ್ತು ಉಡುಪು" }, icon: "🧵" },
  { id: "jewellery", name: { en: "Jewellery", kn: "ಆಭರಣ" }, icon: "💍" },
  { id: "fisheries", name: { en: "Fisheries & Seafood", kn: "ಮೀನುಗಾರಿಕೆ ಮತ್ತು ಸಮುದ್ರಾಹಾರ" }, icon: "🐟" },
  { id: "healthcare", name: { en: "Healthcare", kn: "ಆರೋಗ್ಯ ಸೇವೆ" }, icon: "⚕" },
  { id: "construction", name: { en: "Construction & Real Estate", kn: "ನಿರ್ಮಾಣ ಮತ್ತು ರಿಯಲ್ ಎಸ್ಟೇಟ್" }, icon: "🏗" },
  { id: "retail", name: { en: "Retail & Trading", kn: "ಚಿಲ್ಲರೆ ಮತ್ತು ವ್ಯಾಪಾರ" }, icon: "🛒" },
  { id: "it", name: { en: "IT & Services", kn: "ಐಟಿ ಮತ್ತು ಸೇವೆಗಳು" }, icon: "💻" },
  { id: "education", name: { en: "Education", kn: "ಶಿಕ್ಷಣ" }, icon: "🎓" },
  { id: "logistics", name: { en: "Transport & Logistics", kn: "ಸಾರಿಗೆ ಮತ್ತು ಸರಕು ಸಾಗಣೆ" }, icon: "🚚" },
  { id: "agri", name: { en: "Agri & Food Processing", kn: "ಕೃಷಿ ಮತ್ತು ಆಹಾರ ಸಂಸ್ಕರಣೆ" }, icon: "🌾" },
  { id: "finance", name: { en: "Finance & Insurance", kn: "ಹಣಕಾಸು ಮತ್ತು ವಿಮೆ" }, icon: "₹" },
];

export const areas = ["Udupi", "Manipal", "Malpe", "Kundapur", "Brahmavar", "Karkala", "Kaup"];

export type Member = {
  slug: string;
  name: string;
  owner: string;
  category: string;
  area: string;
  since: number;
  phone: string;
  whatsapp: string;
  email: string;
  website?: string;
  address: string;
  about: Bi;
  services: string[];
  hue: number;
};

export const members: Member[] = [
  { slug: "coastal-spice-restaurant", name: "Coastal Spice Restaurant", owner: "Ravi Acharya", category: "hospitality", area: "Udupi", since: 2004, phone: "+91 90000 00001", whatsapp: "919000000001", email: "hello@coastalspice.example", address: "Car Street, Udupi 576101", about: { en: "Family restaurant serving traditional Udupi vegetarian meals, tiffin and catering for functions up to 1,000 guests.", kn: "ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪಿ ಸಸ್ಯಾಹಾರಿ ಊಟ, ಉಪಹಾರ ಮತ್ತು 1,000 ಅತಿಥಿಗಳವರೆಗಿನ ಸಮಾರಂಭಗಳಿಗೆ ಕೇಟರಿಂಗ್ ಒದಗಿಸುವ ಕುಟುಂಬ ರೆಸ್ಟೋರೆಂಟ್." }, services: ["Dine-in", "Catering", "Party hall"], hue: 18 },
  { slug: "manipal-residency", name: "Manipal Residency", owner: "Sandeep Nayak", category: "hospitality", area: "Manipal", since: 2011, phone: "+91 90000 00002", whatsapp: "919000000002", email: "stay@manipalresidency.example", address: "End Point Road, Manipal 576104", about: { en: "48-room business hotel with conference hall, close to the university and hospital campus.", kn: "ವಿಶ್ವವಿದ್ಯಾಲಯ ಮತ್ತು ಆಸ್ಪತ್ರೆ ಆವರಣದ ಬಳಿ ಸಮ್ಮೇಳನ ಸಭಾಂಗಣ ಹೊಂದಿರುವ 48 ಕೊಠಡಿಗಳ ಬಿಸಿನೆಸ್ ಹೋಟೆಲ್." }, services: ["Rooms", "Conference hall", "Restaurant"], hue: 28 },
  { slug: "krishnapura-silks", name: "Krishnapura Silks", owner: "Meena Kamath", category: "textiles", area: "Udupi", since: 1988, phone: "+91 90000 00003", whatsapp: "919000000003", email: "sales@krishnapurasilks.example", address: "Kavi Muddana Marg, Udupi 576101", about: { en: "Three generations of handloom and Udupi saree retail, with direct sourcing from local weavers.", kn: "ಸ್ಥಳೀಯ ನೇಕಾರರಿಂದ ನೇರ ಖರೀದಿಯೊಂದಿಗೆ ಮೂರು ತಲೆಮಾರುಗಳ ಕೈಮಗ್ಗ ಮತ್ತು ಉಡುಪಿ ಸೀರೆ ಮಾರಾಟ." }, services: ["Udupi sarees", "Handloom", "Bridal wear"], hue: 340 },
  { slug: "brahmavar-garments", name: "Brahmavar Garments", owner: "Ashok Poojary", category: "textiles", area: "Brahmavar", since: 2009, phone: "+91 90000 00004", whatsapp: "919000000004", email: "orders@brahmavargarments.example", address: "NH 66, Brahmavar 576213", about: { en: "Uniform and corporate apparel manufacturer supplying schools, hospitals and hotels across the coast.", kn: "ಕರಾವಳಿಯಾದ್ಯಂತ ಶಾಲೆ, ಆಸ್ಪತ್ರೆ ಮತ್ತು ಹೋಟೆಲ್‌ಗಳಿಗೆ ಸಮವಸ್ತ್ರ ತಯಾರಕರು." }, services: ["School uniforms", "Corporate wear", "Bulk orders"], hue: 210 },
  { slug: "sri-lakshmi-jewellers", name: "Sri Lakshmi Jewellers", owner: "Gopal Shet", category: "jewellery", area: "Udupi", since: 1976, phone: "+91 90000 00005", whatsapp: "919000000005", email: "care@srilakshmijewellers.example", address: "Main Road, Udupi 576101", about: { en: "BIS hallmarked gold and silver jewellery, temple jewellery and custom orders.", kn: "ಬಿಐಎಸ್ ಹಾಲ್‌ಮಾರ್ಕ್ ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿ ಆಭರಣ, ದೇವಾಲಯ ಆಭರಣ ಮತ್ತು ವಿಶೇಷ ಆರ್ಡರ್‌ಗಳು." }, services: ["Gold", "Silver", "Custom design"], hue: 42 },
  { slug: "malpe-fresh-catch", name: "Malpe Fresh Catch Exports", owner: "Prakash Suvarna", category: "fisheries", area: "Malpe", since: 1999, phone: "+91 90000 00006", whatsapp: "919000000006", email: "export@malpefresh.example", address: "Fishing Harbour, Malpe 576108", about: { en: "Seafood processing and export unit with cold storage, supplying to Gulf and South-East Asian markets.", kn: "ಶೀತಲ ಸಂಗ್ರಹಣಾ ಸೌಲಭ್ಯದೊಂದಿಗೆ ಸಮುದ್ರಾಹಾರ ಸಂಸ್ಕರಣೆ ಮತ್ತು ರಫ್ತು ಘಟಕ." }, services: ["Frozen seafood", "Export", "Cold storage"], hue: 195 },
  { slug: "kaup-marine-supplies", name: "Kaup Marine Supplies", owner: "Rajesh Bangera", category: "fisheries", area: "Kaup", since: 2013, phone: "+91 90000 00007", whatsapp: "919000000007", email: "info@kaupmarine.example", address: "Beach Road, Kaup 574106", about: { en: "Nets, boat engines and spare parts for the fishing community, with on-site servicing.", kn: "ಮೀನುಗಾರರಿಗೆ ಬಲೆಗಳು, ದೋಣಿ ಎಂಜಿನ್‌ಗಳು ಮತ್ತು ಬಿಡಿಭಾಗಗಳು, ಸ್ಥಳದಲ್ಲೇ ಸರ್ವೀಸ್." }, services: ["Fishing nets", "Engines", "Servicing"], hue: 200 },
  { slug: "city-care-clinic", name: "City Care Multispeciality Clinic", owner: "Dr. Anitha Rao", category: "healthcare", area: "Udupi", since: 2015, phone: "+91 90000 00008", whatsapp: "919000000008", email: "appointments@citycare.example", address: "Kalsanka, Udupi 576102", about: { en: "Multispeciality clinic with diagnostics, pharmacy and corporate health check-up packages.", kn: "ರೋಗನಿರ್ಣಯ, ಔಷಧಾಲಯ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಆರೋಗ್ಯ ತಪಾಸಣೆ ಪ್ಯಾಕೇಜ್‌ಗಳೊಂದಿಗೆ ಬಹುವಿಶೇಷ ಚಿಕಿತ್ಸಾಲಯ." }, services: ["OPD", "Diagnostics", "Health check-ups"], hue: 160 },
  { slug: "shenoy-builders", name: "Shenoy Builders & Developers", owner: "Vinay Shenoy", category: "construction", area: "Manipal", since: 2001, phone: "+91 90000 00009", whatsapp: "919000000009", email: "projects@shenoybuilders.example", address: "Tiger Circle, Manipal 576104", about: { en: "RERA-registered developer of residential apartments and commercial complexes in Udupi district.", kn: "ಉಡುಪಿ ಜಿಲ್ಲೆಯಲ್ಲಿ ವಸತಿ ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಮತ್ತು ವಾಣಿಜ್ಯ ಸಂಕೀರ್ಣಗಳ ರೇರಾ ನೋಂದಾಯಿತ ಅಭಿವೃದ್ಧಿದಾರರು." }, services: ["Apartments", "Commercial", "Turnkey"], hue: 25 },
  { slug: "karkala-granite", name: "Karkala Granite Works", owner: "Sudhir Hegde", category: "construction", area: "Karkala", since: 1993, phone: "+91 90000 00010", whatsapp: "919000000010", email: "sales@karkalagranite.example", address: "Bypass Road, Karkala 574104", about: { en: "Granite quarrying, cutting and polishing for flooring, monuments and temple work.", kn: "ನೆಲಹಾಸು, ಸ್ಮಾರಕ ಮತ್ತು ದೇವಾಲಯ ಕೆಲಸಕ್ಕಾಗಿ ಗ್ರಾನೈಟ್ ಕತ್ತರಿಸುವಿಕೆ ಮತ್ತು ಪಾಲಿಶಿಂಗ್." }, services: ["Granite slabs", "Polishing", "Temple work"], hue: 0 },
  { slug: "kundapur-traders", name: "Kundapur Traders", owner: "Ganesh Kini", category: "retail", area: "Kundapur", since: 1982, phone: "+91 90000 00011", whatsapp: "919000000011", email: "orders@kundapurtraders.example", address: "Shastri Circle, Kundapur 576201", about: { en: "Wholesale distributor of groceries, cashew and FMCG products for the Kundapur taluk.", kn: "ಕುಂದಾಪುರ ತಾಲೂಕಿಗೆ ದಿನಸಿ, ಗೋಡಂಬಿ ಮತ್ತು ಎಫ್‌ಎಂಸಿಜಿ ಉತ್ಪನ್ನಗಳ ಸಗಟು ವಿತರಕರು." }, services: ["Wholesale", "FMCG", "Cashew"], hue: 90 },
  { slug: "udupi-electricals", name: "Udupi Electricals & Hardware", owner: "Naveen Pai", category: "retail", area: "Udupi", since: 1996, phone: "+91 90000 00012", whatsapp: "919000000012", email: "shop@udupielectricals.example", address: "Maruthi Veethika, Udupi 576101", about: { en: "Electrical goods, solar systems and hardware for homes and contractors.", kn: "ಮನೆ ಮತ್ತು ಗುತ್ತಿಗೆದಾರರಿಗೆ ವಿದ್ಯುತ್ ಸಾಮಗ್ರಿಗಳು, ಸೌರ ವ್ಯವಸ್ಥೆಗಳು ಮತ್ತು ಹಾರ್ಡ್‌ವೇರ್." }, services: ["Electricals", "Solar", "Hardware"], hue: 50 },
  { slug: "aghora-labs", name: "Aghora Labs", owner: "Shravan Kumar", category: "it", area: "Udupi", since: 2022, phone: "+91 90000 00013", whatsapp: "919000000013", email: "hello@aghoralabs.com", website: "https://aghoralabs.com", address: "Udupi 576101", about: { en: "Websites, mobile apps and custom software for businesses across coastal Karnataka.", kn: "ಕರಾವಳಿ ಕರ್ನಾಟಕದ ಉದ್ಯಮಗಳಿಗೆ ವೆಬ್‌ಸೈಟ್, ಮೊಬೈಲ್ ಆ್ಯಪ್ ಮತ್ತು ಕಸ್ಟಮ್ ಸಾಫ್ಟ್‌ವೇರ್." }, services: ["Websites", "Mobile apps", "Custom software"], hue: 260 },
  { slug: "coastal-academy", name: "Coastal Academy of Commerce", owner: "Prof. Shobha Bhat", category: "education", area: "Brahmavar", since: 2006, phone: "+91 90000 00014", whatsapp: "919000000014", email: "admissions@coastalacademy.example", address: "College Road, Brahmavar 576213", about: { en: "Coaching for CA, CS and banking exams, plus Tally and GST courses for working professionals.", kn: "ಸಿಎ, ಸಿಎಸ್ ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ಪರೀಕ್ಷೆಗಳಿಗೆ ತರಬೇತಿ, ಟ್ಯಾಲಿ ಮತ್ತು ಜಿಎಸ್‌ಟಿ ಕೋರ್ಸ್‌ಗಳು." }, services: ["CA / CS coaching", "Tally", "GST courses"], hue: 230 },
  { slug: "karavali-logistics", name: "Karavali Logistics", owner: "Dinesh Amin", category: "logistics", area: "Udupi", since: 2008, phone: "+91 90000 00015", whatsapp: "919000000015", email: "book@karavalilogistics.example", address: "Santhekatte, Udupi 576105", about: { en: "Full and part truckload transport between Udupi, Mangaluru, Bengaluru and Mumbai.", kn: "ಉಡುಪಿ, ಮಂಗಳೂರು, ಬೆಂಗಳೂರು ಮತ್ತು ಮುಂಬೈ ನಡುವೆ ಸರಕು ಸಾಗಣೆ." }, services: ["FTL / PTL", "Warehousing", "Courier"], hue: 15 },
  { slug: "hemmady-cashews", name: "Hemmady Cashew Industries", owner: "Mohan Kotian", category: "agri", area: "Kundapur", since: 1985, phone: "+91 90000 00016", whatsapp: "919000000016", email: "trade@hemmadycashew.example", address: "Hemmady, Kundapur 576230", about: { en: "Cashew processing unit producing graded whole kernels for domestic and export buyers.", kn: "ದೇಶೀಯ ಮತ್ತು ರಫ್ತು ಖರೀದಿದಾರರಿಗೆ ದರ್ಜೆಯ ಗೋಡಂಬಿ ಉತ್ಪಾದಿಸುವ ಸಂಸ್ಕರಣಾ ಘಟಕ." }, services: ["Cashew kernels", "Export", "Bulk supply"], hue: 35 },
  { slug: "udupi-cooperative-credit", name: "Udupi Traders Co-op Credit Society", owner: "Board of Directors", category: "finance", area: "Udupi", since: 1968, phone: "+91 90000 00017", whatsapp: "919000000017", email: "branch@utccs.example", address: "Court Road, Udupi 576101", about: { en: "Savings, deposits and business loans for traders and small enterprises.", kn: "ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಸಣ್ಣ ಉದ್ಯಮಗಳಿಗೆ ಉಳಿತಾಯ, ಠೇವಣಿ ಮತ್ತು ವ್ಯಾಪಾರ ಸಾಲ." }, services: ["Business loans", "Deposits", "Gold loans"], hue: 140 },
  { slug: "malpe-beach-resort", name: "Malpe Beach Resort", owner: "Kiran Karkera", category: "hospitality", area: "Malpe", since: 2017, phone: "+91 90000 00018", whatsapp: "919000000018", email: "book@malpebeachresort.example", address: "Beach Road, Malpe 576108", about: { en: "Sea-facing cottages, seafood restaurant and event lawns for weddings and corporate retreats.", kn: "ಸಮುದ್ರ ಮುಖಿ ಕಾಟೇಜ್‌ಗಳು, ಸಮುದ್ರಾಹಾರ ರೆಸ್ಟೋರೆಂಟ್ ಮತ್ತು ಮದುವೆ ಹಾಗೂ ಕಾರ್ಪೊರೇಟ್ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಹುಲ್ಲುಹಾಸು." }, services: ["Cottages", "Weddings", "Seafood"], hue: 185 },
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
  sample?: boolean;
  agenda?: { time: string; item: Bi }[];
  photo: string;
  hue: number;
  source?: { name: string; url: string };
};

export const events: Event[] = [
  {
    slug: "gst-workshop-2026", sample: true, photo: "citycentre", title: { en: "GST & E-Invoicing Workshop for Traders", kn: "ವ್ಯಾಪಾರಿಗಳಿಗೆ ಜಿಎಸ್‌ಟಿ ಮತ್ತು ಇ-ಇನ್‌ವಾಯ್ಸಿಂಗ್ ಕಾರ್ಯಾಗಾರ" },
    date: "2026-10-17", time: "10:00 am – 1:00 pm", venue: { en: "Chamber Tower Hall, Indrali, Udupi", kn: "ಚೇಂಬರ್ ಟವರ್ ಸಭಾಂಗಣ, ಇಂದ್ರಾಳಿ, ಉಡುಪಿ" },
    type: { en: "Workshop", kn: "ಕಾರ್ಯಾಗಾರ" },
    summary: { en: "Practical session on the latest GST return changes and e-invoicing rules, with a live Q&A by a practising chartered accountant.", kn: "ಇತ್ತೀಚಿನ ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ ಬದಲಾವಣೆಗಳು ಮತ್ತು ಇ-ಇನ್‌ವಾಯ್ಸಿಂಗ್ ನಿಯಮಗಳ ಕುರಿತು ಪ್ರಾಯೋಗಿಕ ಅಧಿವೇಶನ ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧಕರೊಂದಿಗೆ ಪ್ರಶ್ನೋತ್ತರ." },
    upcoming: true, hue: 20,
    agenda: [
      { time: "10:00", item: { en: "Registration & tea", kn: "ನೋಂದಣಿ ಮತ್ತು ಚಹಾ" } },
      { time: "10:30", item: { en: "GST return changes", kn: "ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ ಬದಲಾವಣೆಗಳು" } },
      { time: "11:30", item: { en: "E-invoicing walkthrough", kn: "ಇ-ಇನ್‌ವಾಯ್ಸಿಂಗ್ ಪ್ರಾತ್ಯಕ್ಷಿಕೆ" } },
      { time: "12:30", item: { en: "Open Q&A", kn: "ಮುಕ್ತ ಪ್ರಶ್ನೋತ್ತರ" } },
    ],
  },
  {
    slug: "deepavali-trade-fair", sample: true, photo: "carstreet", title: { en: "Deepavali Trade Fair", kn: "ದೀಪಾವಳಿ ವ್ಯಾಪಾರ ಮೇಳ" },
    date: "2026-11-06", time: "10:00 am – 9:00 pm (3 days)", venue: { en: "Udupi town", kn: "ಉಡುಪಿ ನಗರ" },
    type: { en: "Public exhibition", kn: "ಸಾರ್ವಜನಿಕ ಪ್ರದರ್ಶನ" },
    summary: { en: "Stalls from member businesses — textiles, jewellery, home goods and food. Stall bookings open for members first.", kn: "ಸದಸ್ಯ ಉದ್ಯಮಗಳ ಮಳಿಗೆಗಳು — ಜವಳಿ, ಆಭರಣ, ಗೃಹೋಪಯೋಗಿ ವಸ್ತುಗಳು ಮತ್ತು ಆಹಾರ." },
    upcoming: true, hue: 38,
  },
  {
    slug: "coastal-tourism-meet", sample: true, photo: "malpe", title: { en: "Coastal Tourism Follow-up Meet", kn: "ಕರಾವಳಿ ಪ್ರವಾಸೋದ್ಯಮ ಮುಂದುವರಿದ ಸಭೆ" },
    date: "2026-11-28", time: "3:00 pm – 6:00 pm", venue: { en: "Chamber Tower Hall, Indrali, Udupi", kn: "ಚೇಂಬರ್ ಟವರ್ ಸಭಾಂಗಣ, ಇಂದ್ರಾಳಿ, ಉಡುಪಿ" },
    type: { en: "Members meet", kn: "ಸದಸ್ಯರ ಸಭೆ" },
    summary: { en: "Hotels, homestays and tour operators review progress on beach, health and education tourism for Udupi district.", kn: "ಹೋಟೆಲ್, ಹೋಮ್‌ಸ್ಟೇ ಮತ್ತು ಪ್ರವಾಸ ನಿರ್ವಾಹಕರಿಂದ ಉಡುಪಿ ಜಿಲ್ಲೆಯ ಪ್ರವಾಸೋದ್ಯಮ ಪ್ರಗತಿ ಪರಿಶೀಲನೆ." },
    upcoming: true, hue: 195,
  },
  {
    slug: "msme-finance-clinic", sample: true, photo: "manipal", title: { en: "MSME Finance Clinic with Banks", kn: "ಬ್ಯಾಂಕುಗಳೊಂದಿಗೆ ಎಂಎಸ್‌ಎಂಇ ಹಣಕಾಸು ಶಿಬಿರ" },
    date: "2026-12-05", time: "11:00 am – 1:00 pm", venue: { en: "Chamber Tower Hall, Indrali, Udupi", kn: "ಚೇಂಬರ್ ಟವರ್ ಸಭಾಂಗಣ, ಇಂದ್ರಾಳಿ, ಉಡುಪಿ" },
    type: { en: "Members only", kn: "ಸದಸ್ಯರಿಗೆ ಮಾತ್ರ" },
    summary: { en: "One-to-one sessions with bank officers on working capital, MSME schemes and loan documentation.", kn: "ದುಡಿಯುವ ಬಂಡವಾಳ, ಎಂಎಸ್‌ಎಂಇ ಯೋಜನೆಗಳು ಮತ್ತು ಸಾಲ ದಾಖಲೆಗಳ ಕುರಿತು ಬ್ಯಾಂಕ್ ಅಧಿಕಾರಿಗಳೊಂದಿಗೆ ನೇರ ಚರ್ಚೆ." },
    upcoming: true, hue: 210,
  },
  {
    slug: "office-bearers-2026-27", photo: "matha", title: { en: "Installation of Office Bearers 2026–27", kn: "2026–27ರ ಪದಾಧಿಕಾರಿಗಳ ಪದಗ್ರಹಣ" },
    date: "2026-09-30", time: "—", venue: { en: "Chamber building, Railway Godown Road, Indrali, Udupi", kn: "ಚೇಂಬರ್ ಕಟ್ಟಡ, ರೈಲ್ವೇ ಗೋಡೌನ್ ರಸ್ತೆ, ಇಂದ್ರಾಳಿ, ಉಡುಪಿ" },
    type: { en: "Annual meeting", kn: "ವಾರ್ಷಿಕ ಸಭೆ" },
    summary: { en: "Nataraj Prabhu was elected unopposed as President for 2026–27 and took charge from outgoing President Ammunje Prabhakar Nayak, along with the new team of office bearers and directors.", kn: "2026–27ನೇ ಸಾಲಿಗೆ ನಟರಾಜ ಪ್ರಭು ಅವಿರೋಧವಾಗಿ ಅಧ್ಯಕ್ಷರಾಗಿ ಆಯ್ಕೆಯಾಗಿ, ನಿರ್ಗಮಿತ ಅಧ್ಯಕ್ಷ ಅಮ್ಮುಂಜೆ ಪ್ರಭಾಕರ ನಾಯಕ್ ಅವರಿಂದ ಅಧಿಕಾರ ಸ್ವೀಕರಿಸಿದರು." },
    upcoming: false, hue: 20,
    source: { name: "Varthabharati", url: "https://www.varthabharati.in/udupi/--2279217" },
  },
  {
    slug: "udupi-tourism-seminar-2024", photo: "stmarys", title: { en: "Seminar: Udupi Tourism — Yesterday, Today and Tomorrow", kn: "ವಿಚಾರಸಂಕಿರಣ: ಉಡುಪಿ ಪ್ರವಾಸೋದ್ಯಮ — ನಿನ್ನೆ, ಇಂದು, ನಾಳೆ" },
    date: "2024-07-20", time: "10:00 am", venue: { en: "Madhavakrishna Auditorium, Kidiyoor Hotel, Udupi", kn: "ಮಾಧವಕೃಷ್ಣ ಸಭಾಂಗಣ, ಕಿದಿಯೂರು ಹೋಟೆಲ್, ಉಡುಪಿ" },
    type: { en: "Seminar", kn: "ವಿಚಾರಸಂಕಿರಣ" },
    summary: { en: "Organised with the district's coastal tourism committee, hotel owners', homestay owners' and small traders' associations to discuss beach, health and education tourism. Inaugurated by Udupi MLA Yashpal Suvarna.", kn: "ಕರಾವಳಿ ಪ್ರವಾಸೋದ್ಯಮ ಸಮಿತಿ, ಹೋಟೆಲ್ ಮಾಲೀಕರ, ಹೋಮ್‌ಸ್ಟೇ ಮಾಲೀಕರ ಮತ್ತು ಸಣ್ಣ ವ್ಯಾಪಾರಿಗಳ ಸಂಘಗಳೊಂದಿಗೆ ಆಯೋಜನೆ. ಉಡುಪಿ ಶಾಸಕ ಯಶ್‌ಪಾಲ್ ಸುವರ್ಣ ಉದ್ಘಾಟಿಸಿದರು." },
    upcoming: false, hue: 195,
    source: { name: "Daijiworld", url: "https://daijiworld.com/news/newsDisplay?newsID=1208462" },
  },
];

export type Post = {
  slug: string;
  kind: "circular" | "news" | "press";
  title: Bi;
  date: string;
  excerpt: Bi;
  body: Bi[];
  attachment?: string;
  sample?: boolean;
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
    date: "2026-09-30",
    excerpt: { en: "Elected unopposed, he succeeds Ammunje Prabhakar Nayak. Dr. Vijayendra Vasant Rao is Vice President and Vinod Pai is Treasurer.", kn: "ಅವಿರೋಧವಾಗಿ ಆಯ್ಕೆಯಾದ ಅವರು ಅಮ್ಮುಂಜೆ ಪ್ರಭಾಕರ ನಾಯಕ್ ಅವರ ಉತ್ತರಾಧಿಕಾರಿ. ಡಾ. ವಿಜಯೇಂದ್ರ ವಸಂತ ರಾವ್ ಉಪಾಧ್ಯಕ್ಷರು, ವಿನೋದ್ ಪೈ ಖಜಾಂಚಿ." },
    body: [
      { en: "Nataraj Prabhu has been elected unopposed as President of the Udupi Chamber of Commerce and Industry for 2026–27. Outgoing President Ammunje Prabhakar Nayak handed over charge at a ceremony held at the Chamber building on Railway Godown Road, Indrali.", kn: "ಉಡುಪಿ ಚೇಂಬರ್ ಆಫ್ ಕಾಮರ್ಸ್ ಆ್ಯಂಡ್ ಇಂಡಸ್ಟ್ರಿಯ 2026–27ನೇ ಸಾಲಿನ ಅಧ್ಯಕ್ಷರಾಗಿ ನಟರಾಜ ಪ್ರಭು ಅವಿರೋಧವಾಗಿ ಆಯ್ಕೆಯಾಗಿದ್ದಾರೆ. ಇಂದ್ರಾಳಿಯ ರೈಲ್ವೇ ಗೋಡೌನ್ ರಸ್ತೆಯ ಚೇಂಬರ್ ಕಟ್ಟಡದಲ್ಲಿ ನಡೆದ ಸಮಾರಂಭದಲ್ಲಿ ನಿರ್ಗಮಿತ ಅಧ್ಯಕ್ಷ ಅಮ್ಮುಂಜೆ ಪ್ರಭಾಕರ ನಾಯಕ್ ಅಧಿಕಾರ ಹಸ್ತಾಂತರಿಸಿದರು." },
      { en: "The new team: Vice President Dr. Vijayendra Vasant Rao, Hon. Secretary Sameer Muhammad, Joint Secretaries Anish Pai and Avinash Poojary, and Treasurer Vinod Pai, along with ten directors.", kn: "ನೂತನ ತಂಡ: ಉಪಾಧ್ಯಕ್ಷ ಡಾ. ವಿಜಯೇಂದ್ರ ವಸಂತ ರಾವ್, ಗೌರವ ಕಾರ್ಯದರ್ಶಿ ಸಮೀರ್ ಮುಹಮ್ಮದ್, ಜಂಟಿ ಕಾರ್ಯದರ್ಶಿಗಳು ಅನೀಶ್ ಪೈ ಮತ್ತು ಅವಿನಾಶ್ ಪೂಜಾರಿ, ಖಜಾಂಚಿ ವಿನೋದ್ ಪೈ ಹಾಗೂ ಹತ್ತು ನಿರ್ದೇಶಕರು." },
    ],
    source: { name: "Varthabharati", url: "https://www.varthabharati.in/udupi/--2279217" },
  },
  {
    slug: "tourism-seminar-2024", kind: "news",
    title: { en: "Chamber hosts seminar on the future of Udupi tourism", kn: "ಉಡುಪಿ ಪ್ರವಾಸೋದ್ಯಮದ ಭವಿಷ್ಯ ಕುರಿತು ಚೇಂಬರ್ ವಿಚಾರಸಂಕಿರಣ" },
    date: "2024-07-20",
    excerpt: { en: "Hotel, homestay and trade associations joined the Chamber to discuss beach, health and education tourism.", kn: "ಹೋಟೆಲ್, ಹೋಮ್‌ಸ್ಟೇ ಮತ್ತು ವ್ಯಾಪಾರಿ ಸಂಘಗಳು ಚೇಂಬರ್ ಜೊತೆ ಸೇರಿ ಪ್ರವಾಸೋದ್ಯಮ ಕುರಿತು ಚರ್ಚಿಸಿದವು." },
    body: [
      { en: "The seminar \"Udupi Tourism — Yesterday, Today and Tomorrow\" was held at the Madhavakrishna Auditorium, Kidiyoor Hotel, with the district's coastal tourism committee and the hotel owners', homestay owners' and small traders' associations. Udupi MLA Yashpal Suvarna inaugurated the event.", kn: "\"ಉಡುಪಿ ಪ್ರವಾಸೋದ್ಯಮ — ನಿನ್ನೆ, ಇಂದು, ನಾಳೆ\" ವಿಚಾರಸಂಕಿರಣವು ಕಿದಿಯೂರು ಹೋಟೆಲ್‌ನ ಮಾಧವಕೃಷ್ಣ ಸಭಾಂಗಣದಲ್ಲಿ ನಡೆಯಿತು. ಉಡುಪಿ ಶಾಸಕ ಯಶ್‌ಪಾಲ್ ಸುವರ್ಣ ಉದ್ಘಾಟಿಸಿದರು." },
    ],
    source: { name: "Daijiworld", url: "https://daijiworld.com/news/newsDisplay?newsID=1208462" },
  },
  {
    slug: "electricity-tariff-2023", kind: "press",
    title: { en: "Chamber opposes electricity tariff hike for small industries", kn: "ಸಣ್ಣ ಕೈಗಾರಿಕೆಗಳ ವಿದ್ಯುತ್ ದರ ಏರಿಕೆಗೆ ಚೇಂಬರ್ ವಿರೋಧ" },
    date: "2023-06-17",
    excerpt: { en: "Higher fixed charges hurt the district's 13,000 small-scale industries, the Chamber said, asking for lower tariffs and electricity tax.", kn: "ಹೆಚ್ಚಿನ ನಿಗದಿತ ಶುಲ್ಕ ಜಿಲ್ಲೆಯ 13,000 ಸಣ್ಣ ಕೈಗಾರಿಕೆಗಳಿಗೆ ಹೊರೆ ಎಂದು ಚೇಂಬರ್ ಹೇಳಿದೆ." },
    body: [
      { en: "Then President Andaru Deviprasad Shetty, together with the district small-scale industries association, said the increase in fixed charges on electricity bills was affecting the growth of small-scale industries — 13,000 units that employ about 1.65 lakh people in Udupi district.", kn: "ಅಂದಿನ ಅಧ್ಯಕ್ಷ ಅಂದಾರು ದೇವಿಪ್ರಸಾದ್ ಶೆಟ್ಟಿ ಅವರು ಜಿಲ್ಲಾ ಸಣ್ಣ ಕೈಗಾರಿಕಾ ಸಂಘದೊಂದಿಗೆ, ವಿದ್ಯುತ್ ಬಿಲ್‌ನ ನಿಗದಿತ ಶುಲ್ಕ ಏರಿಕೆ ಜಿಲ್ಲೆಯ 13,000 ಸಣ್ಣ ಕೈಗಾರಿಕೆಗಳ ಬೆಳವಣಿಗೆಗೆ ಅಡ್ಡಿಯಾಗಿದೆ ಎಂದರು." },
      { en: "The Chamber asked the state government to reduce tariffs and cut the electricity tax from 9% to 5%.", kn: "ದರ ಇಳಿಕೆ ಮತ್ತು ವಿದ್ಯುತ್ ತೆರಿಗೆಯನ್ನು 9%ರಿಂದ 5%ಕ್ಕೆ ಇಳಿಸುವಂತೆ ಚೇಂಬರ್ ಸರ್ಕಾರವನ್ನು ಒತ್ತಾಯಿಸಿತು." },
    ],
    source: { name: "Daijiworld", url: "https://daijiworld.com/news/newsDisplay?newsID=1091044" },
  },
  {
    slug: "trade-licence-renewal-sample", kind: "circular", sample: true,
    title: { en: "Trade licence renewal: help desk for members", kn: "ವ್ಯಾಪಾರ ಪರವಾನಗಿ ನವೀಕರಣ: ಸದಸ್ಯರಿಗೆ ಸಹಾಯ ಕೇಂದ್ರ" },
    date: "2026-10-03",
    excerpt: { en: "Sample circular — shows how notices with a PDF attachment appear to members.", kn: "ಮಾದರಿ ಸುತ್ತೋಲೆ — ಪಿಡಿಎಫ್ ಲಗತ್ತಿನೊಂದಿಗೆ ಪ್ರಕಟಣೆಗಳು ಹೇಗೆ ಕಾಣುತ್ತವೆ ಎಂಬುದನ್ನು ತೋರಿಸುತ್ತದೆ." },
    body: [
      { en: "This is a sample circular for the demo. The office posts government notices like this from the admin panel in English and Kannada, attaches the PDF, and it reaches members on WhatsApp the same day.", kn: "ಇದು ಡೆಮೊಗಾಗಿ ಮಾದರಿ ಸುತ್ತೋಲೆ. ಕಚೇರಿಯು ಇಂತಹ ಸರ್ಕಾರಿ ಪ್ರಕಟಣೆಗಳನ್ನು ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಪ್ರಕಟಿಸಿ, ಪಿಡಿಎಫ್ ಲಗತ್ತಿಸುತ್ತದೆ." },
    ],
    attachment: "Sample-Circular.pdf",
  },
];

export const albums = [
  { slug: "krishna-matha-car-street", title: { en: "Sri Krishna Matha & Car Street", kn: "ಶ್ರೀ ಕೃಷ್ಣ ಮಠ ಮತ್ತು ರಥಬೀದಿ" }, photos: ["chariots", "matha", "pond", "carstreet"] },
  { slug: "malpe-harbour", title: { en: "Malpe harbour & fisheries", kn: "ಮಲ್ಪೆ ಬಂದರು ಮತ್ತು ಮೀನುಗಾರಿಕೆ" }, photos: ["offload", "trawlers", "harbour", "boats", "malpeboats"] },
  { slug: "industries", title: { en: "Industries of Udupi", kn: "ಉಡುಪಿಯ ಉದ್ಯಮಗಳು" }, photos: ["cashew", "tiles", "bank", "hospital", "dosa", "station", "nh66"] },
  { slug: "manipal", title: { en: "Manipal — education & health", kn: "ಮಣಿಪಾಲ — ಶಿಕ್ಷಣ ಮತ್ತು ಆರೋಗ್ಯ" }, photos: ["university", "mitplaza", "hospital", "manipal", "bank"] },
  { slug: "farms", title: { en: "Farms & countryside", kn: "ಕೃಷಿ ಮತ್ತು ಗ್ರಾಮೀಣ" }, photos: ["paddy", "coconut", "karkala", "kundapura"] },
  { slug: "coast", title: { en: "Beaches & islands", kn: "ಕಡಲತೀರ ಮತ್ತು ದ್ವೀಪಗಳು" }, photos: ["malpe", "sunrise", "stmarys", "kaup", "kodi"] },
  { slug: "culture", title: { en: "Culture of the coast", kn: "ಕರಾವಳಿ ಸಂಸ್ಕೃತಿ" }, photos: ["yakshagana", "chariots", "matha", "parashurama"] },
];

export type Person = { name: string; role: Bi; group: "officer" | "director" };

// Office bearers 2026–27 as reported by Varthabharati (30 Sep 2026). Spellings transliterated from Kannada — verify with the Chamber.
export const bearers: Person[] = [
  { name: "Nataraj Prabhu", role: { en: "President", kn: "ಅಧ್ಯಕ್ಷರು" }, group: "officer" },
  { name: "Dr. Vijayendra Vasant Rao", role: { en: "Vice President", kn: "ಉಪಾಧ್ಯಕ್ಷರು" }, group: "officer" },
  { name: "Sameer Muhammad", role: { en: "Hon. Secretary", kn: "ಗೌರವ ಕಾರ್ಯದರ್ಶಿ" }, group: "officer" },
  { name: "Anish Pai", role: { en: "Joint Secretary", kn: "ಜಂಟಿ ಕಾರ್ಯದರ್ಶಿ" }, group: "officer" },
  { name: "Avinash Poojary", role: { en: "Joint Secretary", kn: "ಜಂಟಿ ಕಾರ್ಯದರ್ಶಿ" }, group: "officer" },
  { name: "Vinod Pai", role: { en: "Treasurer", kn: "ಖಜಾಂಚಿ" }, group: "officer" },
  ...[
    "Subhash M. Kamath", "Nagaraj Hebbar Maravanthe", "Prakash Chandra Shetty", "Sripath Bhat", "Walter Saldanha",
    "Santhosh Shetty", "Atul Bhakt", "Anand Karnad", "Chandan Shetty", "Shivaprasad Shetty Tallur",
  ].map((name) => ({ name, role: { en: "Director", kn: "ನಿರ್ದೇಶಕರು" }, group: "director" as const })),
];

export const stateCommittee = { name: "Deviprasad Shetty", role: { en: "State Committee Member", kn: "ರಾಜ್ಯ ಸಮಿತಿ ಸದಸ್ಯರು" } };

// Presidents found in news reports — not a complete list; founders were not found in public sources.
export const presidents = [
  { name: "Prasadraj Kanchan", note: { en: "Re-elected President, September 2012", kn: "ಸೆಪ್ಟೆಂಬರ್ 2012ರಲ್ಲಿ ಪುನರಾಯ್ಕೆ" }, source: "https://www.bellevision.com/?action=topnews&type=4629" },
  { name: "Andaru Deviprasad Shetty", note: { en: "President (in office in 2023)", kn: "ಅಧ್ಯಕ್ಷರು (2023ರಲ್ಲಿ)" }, source: "https://daijiworld.com/news/newsDisplay?newsID=1091044" },
  { name: "Ammunje Prabhakar Nayak", note: { en: "President until September 2026", kn: "ಸೆಪ್ಟೆಂಬರ್ 2026ರವರೆಗೆ ಅಧ್ಯಕ್ಷರು" }, source: "https://daijiworld.com/news/newsDisplay?newsID=1208462" },
  { name: "Nataraj Prabhu", note: { en: "President, 2026–27", kn: "ಅಧ್ಯಕ್ಷರು, 2026–27" }, source: "https://www.varthabharati.in/udupi/--2279217" },
];

export const plans = [
  { id: "ordinary", name: { en: "Ordinary Member", kn: "ಸಾಮಾನ್ಯ ಸದಸ್ಯತ್ವ" }, price: "₹2,500", per: { en: "/ year", kn: "/ ವರ್ಷ" }, points: [
    { en: "Listing in member directory", kn: "ಸದಸ್ಯರ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಪಟ್ಟಿ" },
    { en: "Voting rights at AGM", kn: "ಮಹಾಸಭೆಯಲ್ಲಿ ಮತದಾನದ ಹಕ್ಕು" },
    { en: "Circulars on WhatsApp & email", kn: "ವಾಟ್ಸಾಪ್ ಮತ್ತು ಇಮೇಲ್‌ನಲ್ಲಿ ಸುತ್ತೋಲೆಗಳು" },
  ] },
  { id: "life", name: { en: "Life Member", kn: "ಆಜೀವ ಸದಸ್ಯತ್ವ" }, price: "₹25,000", per: { en: "one time", kn: "ಒಂದು ಬಾರಿ" }, featured: true, points: [
    { en: "Everything in Ordinary", kn: "ಸಾಮಾನ್ಯ ಸದಸ್ಯತ್ವದ ಎಲ್ಲಾ ಸೌಲಭ್ಯಗಳು" },
    { en: "Featured directory listing", kn: "ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ವಿಶೇಷ ಪಟ್ಟಿ" },
    { en: "Priority stall booking at fairs", kn: "ಮೇಳಗಳಲ್ಲಿ ಮಳಿಗೆ ಆದ್ಯತೆ" },
  ] },
  { id: "associate", name: { en: "Associate Member", kn: "ಸಹ ಸದಸ್ಯತ್ವ" }, price: "₹1,500", per: { en: "/ year", kn: "/ ವರ್ಷ" }, points: [
    { en: "For professionals & startups", kn: "ವೃತ್ತಿಪರರು ಮತ್ತು ಸ್ಟಾರ್ಟ್‌ಅಪ್‌ಗಳಿಗೆ" },
    { en: "Directory listing", kn: "ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಪಟ್ಟಿ" },
    { en: "Access to workshops", kn: "ಕಾರ್ಯಾಗಾರಗಳಿಗೆ ಪ್ರವೇಶ" },
  ] },
];

export const catName = (id: string) => categories.find((c) => c.id === id)?.name ?? { en: id, kn: id };

// "Industries of Udupi" carousel — photos are stand-ins from Wikimedia Commons (see /credits).
export const industries: { id: string; cat: string; photo: string; title: Bi; text: Bi }[] = [
  { id: "fisheries", cat: "fisheries", photo: "offload", title: { en: "Fisheries & seafood", kn: "ಮೀನುಗಾರಿಕೆ ಮತ್ತು ಸಮುದ್ರಾಹಾರ" }, text: { en: "Malpe harbour is the heart of Udupi's fishing, processing and seafood export trade.", kn: "ಮಲ್ಪೆ ಬಂದರು ಉಡುಪಿಯ ಮೀನುಗಾರಿಕೆ, ಸಂಸ್ಕರಣೆ ಮತ್ತು ರಫ್ತು ವ್ಯಾಪಾರದ ಕೇಂದ್ರ." } },
  { id: "banking", cat: "finance", photo: "bank", title: { en: "Banking & finance", kn: "ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಹಣಕಾಸು" }, text: { en: "Udupi is where Corporation Bank (1906) and Syndicate Bank (1925) began — a banking heritage few towns can match.", kn: "ಕಾರ್ಪೊರೇಷನ್ ಬ್ಯಾಂಕ್ (1906) ಮತ್ತು ಸಿಂಡಿಕೇಟ್ ಬ್ಯಾಂಕ್ (1925) ಆರಂಭವಾದದ್ದು ಉಡುಪಿಯಲ್ಲಿ." } },
  { id: "hospitality", cat: "hospitality", photo: "dosa", title: { en: "Hotels & Udupi cuisine", kn: "ಹೋಟೆಲ್ ಮತ್ತು ಉಡುಪಿ ಖಾದ್ಯ" }, text: { en: "Udupi hoteliers took the region's vegetarian cuisine to every corner of India.", kn: "ಉಡುಪಿಯ ಹೋಟೆಲ್ ಉದ್ಯಮಿಗಳು ಇಲ್ಲಿನ ಸಸ್ಯಾಹಾರಿ ಖಾದ್ಯವನ್ನು ದೇಶದಾದ್ಯಂತ ಕೊಂಡೊಯ್ದರು." } },
  { id: "health", cat: "healthcare", photo: "hospital", title: { en: "Healthcare", kn: "ಆರೋಗ್ಯ ಸೇವೆ" }, text: { en: "Manipal's hospitals draw patients from across India, powering the district's health tourism.", kn: "ಮಣಿಪಾಲದ ಆಸ್ಪತ್ರೆಗಳು ದೇಶದಾದ್ಯಂತದ ರೋಗಿಗಳನ್ನು ಆಕರ್ಷಿಸುತ್ತವೆ." } },
  { id: "education", cat: "education", photo: "university", title: { en: "Education", kn: "ಶಿಕ್ಷಣ" }, text: { en: "A university town with students from across the world — and the businesses that serve them.", kn: "ವಿಶ್ವದಾದ್ಯಂತದ ವಿದ್ಯಾರ್ಥಿಗಳಿರುವ ವಿಶ್ವವಿದ್ಯಾಲಯ ನಗರ ಮತ್ತು ಅವರಿಗೆ ಸೇವೆ ನೀಡುವ ಉದ್ಯಮಗಳು." } },
  { id: "cashew", cat: "agri", photo: "cashew", title: { en: "Cashew processing", kn: "ಗೋಡಂಬಿ ಸಂಸ್ಕರಣೆ" }, text: { en: "A long-standing coastal Karnataka industry, from raw nut to export-grade kernels.", kn: "ಕಚ್ಚಾ ಬೀಜದಿಂದ ರಫ್ತು ದರ್ಜೆಯ ಗೋಡಂಬಿಯವರೆಗೆ — ಕರಾವಳಿಯ ಹಳೆಯ ಉದ್ಯಮ." } },
  { id: "tiles", cat: "construction", photo: "tiles", title: { en: "Tiles & construction", kn: "ಹಂಚು ಮತ್ತು ನಿರ್ಮಾಣ" }, text: { en: "Clay-tile roofs, granite from Karkala and a busy construction sector.", kn: "ಮಣ್ಣಿನ ಹಂಚಿನ ಛಾವಣಿ, ಕಾರ್ಕಳದ ಗ್ರಾನೈಟ್ ಮತ್ತು ಚುರುಕಾದ ನಿರ್ಮಾಣ ವಲಯ." } },
  { id: "agri", cat: "agri", photo: "paddy", title: { en: "Agriculture", kn: "ಕೃಷಿ" }, text: { en: "Paddy, coconut and arecanut farms feed the district's food and trade economy.", kn: "ಭತ್ತ, ತೆಂಗು ಮತ್ತು ಅಡಿಕೆ ತೋಟಗಳು ಜಿಲ್ಲೆಯ ಆರ್ಥಿಕತೆಗೆ ಬಲ." } },
  { id: "logistics", cat: "logistics", photo: "station", title: { en: "Transport & logistics", kn: "ಸಾರಿಗೆ ಮತ್ತು ಸರಕು ಸಾಗಣೆ" }, text: { en: "The Konkan Railway and NH 66 connect Udupi's traders to Mumbai, Goa and Mangaluru.", kn: "ಕೊಂಕಣ ರೈಲ್ವೇ ಮತ್ತು ಎನ್‌ಎಚ್ 66 ಉಡುಪಿಯ ವ್ಯಾಪಾರಿಗಳನ್ನು ಮುಂಬೈ, ಗೋವಾ ಮತ್ತು ಮಂಗಳೂರಿಗೆ ಜೋಡಿಸುತ್ತವೆ." } },
  { id: "tourism", cat: "hospitality", photo: "stmarys", title: { en: "Tourism", kn: "ಪ್ರವಾಸೋದ್ಯಮ" }, text: { en: "Temples, beaches and islands bring visitors — and business — all year round.", kn: "ದೇವಾಲಯಗಳು, ಕಡಲತೀರಗಳು ಮತ್ತು ದ್ವೀಪಗಳು ವರ್ಷವಿಡೀ ಪ್ರವಾಸಿಗರನ್ನು ಸೆಳೆಯುತ್ತವೆ." } },
];

// Hero slideshow
export const heroSlides: { photo: string; caption: Bi }[] = [
  { photo: "chariots", caption: { en: "Car Street, Udupi", kn: "ರಥಬೀದಿ, ಉಡುಪಿ" } },
  { photo: "offload", caption: { en: "Malpe fishing harbour", kn: "ಮಲ್ಪೆ ಮೀನುಗಾರಿಕಾ ಬಂದರು" } },
  { photo: "university", caption: { en: "Manipal university town", kn: "ಮಣಿಪಾಲ ವಿಶ್ವವಿದ್ಯಾಲಯ ನಗರ" } },
  { photo: "paddy", caption: { en: "Paddy fields, Barkur", kn: "ಭತ್ತದ ಗದ್ದೆ, ಬಾರಕೂರು" } },
  { photo: "stmarys", caption: { en: "St. Mary's Island", kn: "ಸೇಂಟ್ ಮೇರೀಸ್ ದ್ವೀಪ" } },
];
