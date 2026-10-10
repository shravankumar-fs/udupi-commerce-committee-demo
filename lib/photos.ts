// The Chamber's own photos, served from /public.
export type PhotoInfo = { id: string; src: string; title: string; kn: string };

export const photos: PhotoInfo[] = [
  { id: "office", src: "/office.jpeg", title: "Chamber Tower, Indrali, Udupi", kn: "ಚೇಂಬರ್ ಟವರ್, ಇಂದ್ರಾಳಿ, ಉಡುಪಿ" },
  { id: "committee-banner", src: "/committee-2026-27.jpeg", title: "New office bearers & board of directors, 2026–27", kn: "ನೂತನ ಪದಾಧಿಕಾರಿಗಳು ಮತ್ತು ನಿರ್ದೇಶಕರ ಮಂಡಳಿ, 2026–27" },
  { id: "ceremony-lamp-1", src: "/location_and_comittee_gallery/ceremony-lamp-1.jpeg", title: "Lamp-lighting and felicitation on stage", kn: "ವೇದಿಕೆಯಲ್ಲಿ ದೀಪ ಬೆಳಗುವಿಕೆ ಮತ್ತು ಸನ್ಮಾನ" },
  { id: "ceremony-lamp-2", src: "/location_and_comittee_gallery/ceremony-lamp-2.jpeg", title: "Lamp-lighting and felicitation on stage", kn: "ವೇದಿಕೆಯಲ್ಲಿ ದೀಪ ಬೆಳಗುವಿಕೆ ಮತ್ತು ಸನ್ಮಾನ" },
  { id: "stage-group", src: "/location_and_comittee_gallery/stage-group.jpeg", title: "Office bearers and directors on stage", kn: "ವೇದಿಕೆಯಲ್ಲಿ ಪದಾಧಿಕಾರಿಗಳು ಮತ್ತು ನಿರ್ದೇಶಕರು" },
  { id: "hall-audience", src: "/location_and_comittee_gallery/hall-audience.jpeg", title: "Members gathered in the hall", kn: "ಸಭಾಂಗಣದಲ್ಲಿ ಸೇರಿದ ಸದಸ್ಯರು" },
  { id: "flag-hoisting-1", src: "/location_and_comittee_gallery/flag-hoisting-1.jpeg", title: "Flag hoisting at the Chamber", kn: "ಚೇಂಬರ್‌ನಲ್ಲಿ ಧ್ವಜಾರೋಹಣ" },
  { id: "flag-hoisting-2", src: "/location_and_comittee_gallery/flag-hoisting-2.jpeg", title: "Flag hoisting at the Chamber", kn: "ಚೇಂಬರ್‌ನಲ್ಲಿ ಧ್ವಜಾರೋಹಣ" },
  { id: "committee-group", src: "/location_and_comittee_gallery/committee-group.jpeg", title: "Committee members at the Annual General Meeting", kn: "ವಾರ್ಷಿಕ ಮಹಾಸಭೆಯಲ್ಲಿ ಸಮಿತಿ ಸದಸ್ಯರು" },
  { id: "agm-stage-group", src: "/past_events/agm-stage-group.jpeg", title: "Committee members at the 23rd Annual General Meeting", kn: "23ನೇ ವಾರ್ಷಿಕ ಮಹಾಸಭೆಯಲ್ಲಿ ಸಮಿತಿ ಸದಸ್ಯರು" },
  { id: "agm-dais-1", src: "/past_events/agm-dais-1.jpeg", title: "The dais at the 23rd Annual General Meeting", kn: "23ನೇ ವಾರ್ಷಿಕ ಮಹಾಸಭೆಯ ವೇದಿಕೆ" },
  { id: "agm-audience-1", src: "/past_events/agm-audience-1.jpeg", title: "Members at the 23rd Annual General Meeting", kn: "23ನೇ ವಾರ್ಷಿಕ ಮಹಾಸಭೆಯಲ್ಲಿ ಸದಸ್ಯರು" },
  { id: "agm-audience-2", src: "/past_events/agm-audience-2.jpeg", title: "Members at the 23rd Annual General Meeting", kn: "23ನೇ ವಾರ್ಷಿಕ ಮಹಾಸಭೆಯಲ್ಲಿ ಸದಸ್ಯರು" },
  { id: "agm-speaker-1", src: "/past_events/agm-speaker-1.jpeg", title: "Addressing the 23rd Annual General Meeting", kn: "23ನೇ ವಾರ್ಷಿಕ ಮಹಾಸಭೆಯಲ್ಲಿ ಭಾಷಣ" },
  { id: "agm-speaker-2", src: "/past_events/agm-speaker-2.jpeg", title: "Addressing the 23rd Annual General Meeting", kn: "23ನೇ ವಾರ್ಷಿಕ ಮಹಾಸಭೆಯಲ್ಲಿ ಭಾಷಣ" },
  { id: "agm-handshake", src: "/past_events/agm-handshake.jpeg", title: "Office bearers greet each other at the AGM", kn: "ಮಹಾಸಭೆಯಲ್ಲಿ ಪದಾಧಿಕಾರಿಗಳ ಶುಭಾಶಯ" },
  { id: "agm-felicitation", src: "/past_events/agm-felicitation.jpeg", title: "Handing over papers at the AGM", kn: "ಮಹಾಸಭೆಯಲ್ಲಿ ದಾಖಲೆಗಳ ಹಸ್ತಾಂತರ" },
  { id: "agm-speaker-portrait", src: "/past_events/agm-speaker-portrait.jpeg", title: "Speaking at the 23rd Annual General Meeting", kn: "23ನೇ ವಾರ್ಷಿಕ ಮಹಾಸಭೆಯಲ್ಲಿ ಮಾತನಾಡುತ್ತಿರುವುದು" },
  { id: "agm-president-bouquet", src: "/news_cutouts/agm-president-bouquet.jpeg", title: "Outgoing President greets the new President at the AGM", kn: "ನಿರ್ಗಮಿತ ಅಧ್ಯಕ್ಷರು ನೂತನ ಅಧ್ಯಕ್ಷರನ್ನು ಅಭಿನಂದಿಸುತ್ತಿರುವುದು" },
  { id: "news-vijaya-karnataka", src: "/news_cutouts/news-vijaya-karnataka.jpeg", title: "Vijaya Karnataka, 30 Sep 2026: Nataraj Prabhu takes charge as President", kn: "ವಿಜಯ ಕರ್ನಾಟಕ, 30 ಸೆಪ್ಟೆಂಬರ್ 2026: ನಟರಾಜ ಪ್ರಭು ಅಧ್ಯಕ್ಷರಾಗಿ ಅಧಿಕಾರ ಸ್ವೀಕಾರ" },
  { id: "news-kannada-prabha", src: "/news_cutouts/news-kannada-prabha.jpeg", title: "Kannada Prabha, 1 Oct 2026: UCCI new President takes charge", kn: "ಕನ್ನಡಪ್ರಭ, 1 ಅಕ್ಟೋಬರ್ 2026: ಯುಸಿಸಿಐ ಅಧ್ಯಕ್ಷರಾಗಿ ಅಧಿಕಾರ ಸ್ವೀಕಾರ" },
  { id: "news-udupi-cutout", src: "/news_cutouts/news-udupi-cutout.jpeg", title: "Press report: Nataraj Prabhu takes charge as new President", kn: "ಪತ್ರಿಕಾ ವರದಿ: ನೂತನ ಅಧ್ಯಕ್ಷರಾಗಿ ನಟರಾಜ ಪ್ರಭು ಅಧಿಕಾರ ಸ್ವೀಕಾರ" },
];

export const photo = (id: string) => photos.find((p) => p.id === id)!;
