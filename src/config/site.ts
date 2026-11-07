/**
 * ONE PLACE FOR EVERYTHING YOU MIGHT NEED TO CHANGE.
 *
 * Edit the values below and every page updates on the next build.
 * Values in [SQUARE BRACKETS] are placeholders waiting for Sarah's confirmation.
 * Any social link left as a placeholder (or empty) is hidden automatically.
 */

export const site = {
  name: 'Thehraav Counselling',
  tagline: 'Online counselling for women, in English and Hindi',

  // Live address. Change this when you move to a custom domain (or set SITE_URL on Railway).
  url: 'https://thehraav.up.railway.app',

  // The logo is referenced only here. To swap in the final logo, replace public/assets/logo.svg.
  // For a PNG, drop it in public/assets/ and change `src` below. The box size stays fixed, so the layout won't move.
  logo: {
    src: '/assets/logo.svg',
    alt: 'Thehraav Counselling',
  },

  psychologist: {
    name: 'Sarah Shaikh',
    role: 'Counselling psychologist',
    qualifications: [
      'M.A. in Counselling Psychology, Mumbai University',
      'Diploma in Cognitive Behavioural Therapy (CBT)',
    ],
    languages: ['English', 'Hindi'],
    // Soft placeholder until Sarah's photo arrives. Replace the file and keep the name, or change the path.
    photo: '/images/sarah-placeholder.webp',
    photoAlt: 'Portrait of Sarah Shaikh, counselling psychologist',
  },

  contact: {
    email: 'thehraavcounselling@outlook.com',
    // Digits only, with country code, e.g. '919876543210'. Used for wa.me links.
    whatsapp: '[WHATSAPP NUMBER]',
    whatsappMessage: "Hi Sarah, I found your website and I'd like to know more about sessions.",
  },

  social: {
    instagram: '[INSTAGRAM URL]',
    linkedin: '[LINKEDIN URL]',
  },

  sessions: {
    // Recommended defaults (best guesses), confirm with Sarah.
    fee: '₹1,200',
    length: '50 minutes',
    freeFirstLength: '20 minutes',
    lateCancelCharge: 'half',
    hours: 'Monday to Friday, 10 am to 7 pm IST',
  },

  booking: {
    // Cal ID event paths ('username/event-slug'), from https://cal.id/username/event-slug.
    // Filled in during Cal ID setup.
    base: 'https://cal.id',
    // Set to true once both event types exist in Cal ID. Until then /book shows a friendly "coming soon" note.
    live: false,
    freeEvent: 'thehraav/free-first-session',
    regularEvent: 'thehraav/individual-session',
  },

  // Formspree form ID, e.g. 'xyzabcd' from https://formspree.io/f/xyzabcd
  formspreeId: '[FORMSPREE FORM ID]',

  // Shows a "draft, review before launch" banner on the Privacy and Terms pages. Set to false once reviewed.
  legalDraft: true,
  legalUpdated: '7 November 2026',
  legalDetails: {
    retention: 'three years after your last session',
    responseTime: '30 days',
    minimumAge: '18',
    jurisdiction: 'Mumbai, India',
    intakeFormService: 'Google Forms',
    videoService: 'Google Meet',
  },

  emergency: {
    line: 'Tele-MANAS',
    number: '14416',
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

/** Everything shown in the footer lives here. */
export const footer = {
  quickLinks: [...nav, { label: 'Book a session', href: '/book' }],
  legalLinks: [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
  emergency: {
    heading: 'This website is not for emergencies.',
    before: "If you're in crisis, please call",
    after: '(free, 24/7) or your nearest emergency service.',
  },
  copyrightHolder: 'Thehraav Counselling',
};

/* ---------- helpers (no need to edit) ---------- */

/** True when a value has been filled in (not empty and not a [PLACEHOLDER]). */
export const isFilled = (v?: string) => !!v && !/^\[.*\]$/.test(v.trim());

export const whatsappHref = () => {
  const n = site.contact.whatsapp.replace(/\D/g, '');
  const text = encodeURIComponent(site.contact.whatsappMessage);
  return n ? `https://wa.me/${n}?text=${text}` : `https://wa.me/?text=${text}`;
};

export const socialLinks = () =>
  [
    { label: 'Instagram', href: site.social.instagram },
    { label: 'LinkedIn', href: site.social.linkedin },
  ].filter((s) => isFilled(s.href));
