const CATS = ["badges", "certificates", "design-digital", "emailers", "logo", "newsletter", "social-media", "standees", "team-background", "web-ads"];
const CAT_LABELS = {
  "badges": "Badges",
  "certificates": "Certificates",
  "design-digital": "Design Digital",
  "emailers": "Emailers",
  "logo": "Logo",
  "newsletter": "Newsletter",
  "social-media": "Social Media",
  "standees": "Standees",
  "team-background": "Team Background",
  "web-ads": "Web Ads"
};
const WORKS = [
  {
    "type": "image",
    "slug": "customer-excellence-champion",
    "cat": "badges",
    "title": "Customer Excellence Champion",
    "spec": "Recognition Award \u00b7 Badge",
    "w": 300,
    "h": 300
  },
  {
    "type": "image",
    "slug": "dance-club-winner",
    "cat": "badges",
    "title": "Dance Club \u2014 Event Winner",
    "spec": "Recognition Award \u00b7 Badge",
    "w": 300,
    "h": 300
  },
  {
    "type": "image",
    "slug": "creative-writing-club-winner",
    "cat": "badges",
    "title": "Creative Writing Club \u2014 Event Winner",
    "spec": "Recognition Award \u00b7 Badge",
    "w": 300,
    "h": 300
  },
  {
    "type": "image",
    "slug": "competency-excellence-leader",
    "cat": "badges",
    "title": "Competency Excellence Leader",
    "spec": "Recognition Award \u00b7 Badge",
    "w": 300,
    "h": 300
  },
  {
    "type": "image",
    "slug": "ace-project-badge",
    "cat": "badges",
    "title": "ACE Project",
    "spec": "Recognition Award \u00b7 Badge",
    "w": 300,
    "h": 300
  },
  {
    "type": "image",
    "slug": "tether-auto-logo",
    "cat": "logo",
    "title": "Tether Auto",
    "spec": "Brand Identity \u00b7 Logo Design",
    "w": 3334,
    "h": 2500
  },
  {
    "type": "image",
    "slug": "ontrack-logo",
    "cat": "logo",
    "title": "OnTrack",
    "spec": "Brand Identity \u00b7 Logo Design",
    "w": 800,
    "h": 600
  },
  {
    "type": "image",
    "slug": "bpm-l1-certificate",
    "cat": "certificates",
    "title": "BPM L1 Certification",
    "spec": "Learning & Development \u00b7 Certificate",
    "w": 792,
    "h": 612
  },
  {
    "type": "image",
    "slug": "hr-innovation-newsletter",
    "cat": "newsletter",
    "title": "HR Innovation School \u2014 Reminder",
    "spec": "Internal Comms \u00b7 Newsletter",
    "w": 785,
    "h": 1255
  },
  {
    "type": "image",
    "slug": "hpum-learning-board",
    "cat": "newsletter",
    "title": "HPUM Learning Board",
    "spec": "Learning & Development \u00b7 Newsletter Board",
    "w": 785,
    "h": 1169
  },
  {
    "type": "image",
    "slug": "hpum-learning-board-june",
    "cat": "newsletter",
    "title": "HPUM Learning Board \u2014 June",
    "spec": "Learning & Development \u00b7 Newsletter Board",
    "w": 785,
    "h": 1148
  },
  {
    "type": "image",
    "slug": "enrich-your-knowledge",
    "cat": "newsletter",
    "title": "Enrich Your Knowledge",
    "spec": "Learning Campaign \u00b7 Newsletter",
    "w": 785,
    "h": 1151
  },
  {
    "type": "image",
    "slug": "hpum-postcard",
    "cat": "emailers",
    "title": "Sales & Delivery Portal Postcard",
    "spec": "HPUM Campaign \u00b7 Emailer",
    "w": 785,
    "h": 1437
  },
  {
    "type": "image",
    "slug": "book-review-postcard",
    "cat": "emailers",
    "title": "A Book Review",
    "spec": "Employee Engagement \u00b7 Emailer",
    "w": 800,
    "h": 870
  },
  {
    "type": "image",
    "slug": "dow-csr-journey",
    "cat": "emailers",
    "title": "Dow CSR Journey",
    "spec": "Corporate Comms \u00b7 Emailer",
    "w": 1074,
    "h": 6646
  },
  {
    "type": "image",
    "slug": "external-speaker-session",
    "cat": "emailers",
    "title": "External Speaker Session",
    "spec": "Event Comms \u00b7 Emailer",
    "w": 785,
    "h": 1602
  },
  {
    "type": "image",
    "slug": "td-fault-management",
    "cat": "emailers",
    "title": "Fault Management \u2014 Living Process",
    "spec": "T&D Communications \u00b7 Emailer",
    "w": 785,
    "h": 1642
  },
  {
    "type": "image",
    "slug": "integrate-postcard",
    "cat": "emailers",
    "title": "Project Integra",
    "spec": "Programme Comms \u00b7 Emailer",
    "w": 627,
    "h": 846
  },
  {
    "type": "image",
    "slug": "ghra-launch-email",
    "cat": "emailers",
    "title": "GHRA Launch",
    "spec": "Campaign Launch \u00b7 Emailer",
    "w": 750,
    "h": 1067
  },
  {
    "type": "image",
    "slug": "emailer-01",
    "cat": "emailers",
    "title": "Emailer 01",
    "spec": "Corporate Comms \u00b7 Emailer",
    "w": 700,
    "h": 695
  },
  {
    "type": "image",
    "slug": "cto-townhall",
    "cat": "emailers",
    "title": "CTO's Office Townhall",
    "spec": "Internal Event \u00b7 Emailer",
    "w": 700,
    "h": 700
  },
  {
    "type": "image",
    "slug": "invitation-2",
    "cat": "emailers",
    "title": "Anniversary Invitation",
    "spec": "Corporate Event \u00b7 Emailer Invite",
    "w": 700,
    "h": 800
  },
  {
    "type": "image",
    "slug": "investor-conference-invite",
    "cat": "emailers",
    "title": "Investor Conference",
    "spec": "Corporate Event \u00b7 Emailer Invite",
    "w": 2917,
    "h": 2917
  },
  {
    "type": "image",
    "slug": "teaser-hr-01",
    "cat": "social-media",
    "title": "HR Campaign Teaser 01",
    "spec": "Internal Campaign \u00b7 Social Post",
    "w": 700,
    "h": 700
  },
  {
    "type": "image",
    "slug": "teaser-hr-02",
    "cat": "social-media",
    "title": "HR Campaign Teaser 02",
    "spec": "Internal Campaign \u00b7 Social Post",
    "w": 700,
    "h": 700
  },
  {
    "type": "image",
    "slug": "teaser-2-ver1",
    "cat": "social-media",
    "title": "Campaign Teaser 02",
    "spec": "Internal Campaign \u00b7 Social Post",
    "w": 700,
    "h": 700
  },
  {
    "type": "image",
    "slug": "funtastic-friday-teaser-1",
    "cat": "social-media",
    "title": "Funtastic Friday \u2014 Teaser",
    "spec": "Employee Engagement \u00b7 Social Post",
    "w": 680,
    "h": 600
  },
  {
    "type": "image",
    "slug": "funtastic-friday-craft-01",
    "cat": "social-media",
    "title": "Funtastic Friday \u2014 Craft n' Creation",
    "spec": "Employee Engagement \u00b7 Social Post",
    "w": 700,
    "h": 700
  },
  {
    "type": "image",
    "slug": "funtastic-friday-craft-02",
    "cat": "social-media",
    "title": "Funtastic Friday \u2014 Craft n' Creation v2",
    "spec": "Employee Engagement \u00b7 Social Post",
    "w": 700,
    "h": 700
  },
  {
    "type": "image",
    "slug": "social-media-post",
    "cat": "social-media",
    "title": "Social Media Post",
    "spec": "Social Media \u00b7 Square Post",
    "w": 1080,
    "h": 1080
  },
  {
    "type": "image",
    "slug": "job-post-template",
    "cat": "social-media",
    "title": "Job Post Template",
    "spec": "Recruitment Marketing \u00b7 Social Template",
    "w": 2250,
    "h": 2250
  },
  {
    "type": "image",
    "slug": "more-excitement",
    "cat": "social-media",
    "title": "More Excitement, More Surprises",
    "spec": "Campaign \u00b7 Social Post",
    "w": 850,
    "h": 828
  },
  {
    "type": "image",
    "slug": "talenthunt-winners",
    "cat": "social-media",
    "title": "Talenthunt Winners",
    "spec": "Celebration@Work \u00b7 Social Post",
    "w": 785,
    "h": 1334
  },
  {
    "type": "image",
    "slug": "theme-1",
    "cat": "social-media",
    "title": "Capability Teaser",
    "spec": "Internal Campaign \u00b7 Social Post",
    "w": 820,
    "h": 550
  },
  {
    "type": "image",
    "slug": "star-infosec-poster",
    "cat": "standees",
    "title": "STAR \u2014 InfoSec Awareness",
    "spec": "Security Awareness \u00b7 Standee",
    "w": 785,
    "h": 1023
  },
  {
    "type": "image",
    "slug": "diwali-celebrations",
    "cat": "standees",
    "title": "Diwali Celebrations",
    "spec": "Festival Campaign \u00b7 Standee",
    "w": 700,
    "h": 716
  },
  {
    "type": "image",
    "slug": "independence-day",
    "cat": "standees",
    "title": "Independence Day Celebrations",
    "spec": "Festival Campaign \u00b7 Standee",
    "w": 785,
    "h": 1106
  },
  {
    "type": "image",
    "slug": "blockchain-poster",
    "cat": "standees",
    "title": "Blockchain",
    "spec": "Tech Awareness \u00b7 Standee",
    "w": 800,
    "h": 1715
  },
  {
    "type": "image",
    "slug": "ar-vr-training",
    "cat": "standees",
    "title": "AR/VR Training",
    "spec": "Learning Campaign \u00b7 Standee",
    "w": 780,
    "h": 1144
  },
  {
    "type": "image",
    "slug": "partition-wall-design",
    "cat": "standees",
    "title": "Partition Wall Wrap",
    "spec": "Environmental Design \u00b7 516in \u00d7 108in Standee Wall",
    "w": 14999,
    "h": 3139
  },
  {
    "type": "image",
    "slug": "teams-background-01",
    "cat": "team-background",
    "title": "Virtual Meeting Background 01",
    "spec": "Digital Collateral \u00b7 Teams Background",
    "w": 1920,
    "h": 1080
  },
  {
    "type": "image",
    "slug": "teams-background-02",
    "cat": "team-background",
    "title": "Virtual Meeting Background 02",
    "spec": "Digital Collateral \u00b7 Teams Background",
    "w": 1920,
    "h": 1080
  },
  {
    "type": "image",
    "slug": "ad-175x110",
    "cat": "web-ads",
    "title": "Media & Entertainment Tech Services",
    "spec": "Advertising \u00b7 Print/Web Ad",
    "w": 2185,
    "h": 1417
  },
  {
    "type": "image",
    "slug": "web-banner",
    "cat": "web-ads",
    "title": "Site Header Banner",
    "spec": "Digital Collateral \u00b7 Web Banner Ad",
    "w": 4987,
    "h": 727
  },
  {
    "type": "pdf",
    "slug": "design-digital-booklet",
    "cat": "design-digital",
    "title": "Design Digital Booklet",
    "spec": "Design Collateral \u00b7 Booklet",
    "pages": "17",
    "size_mb": 1.4
  },
  {
    "type": "pdf",
    "slug": "interactive-pdf",
    "cat": "design-digital",
    "title": "Interactive PDF",
    "spec": "Digital Publication \u00b7 Interactive PDF",
    "pages": "14",
    "size_mb": 16.7
  },
  {
    "type": "pdf",
    "slug": "commscoe-rate-card",
    "cat": "design-digital",
    "title": "Comms CoE \u2014 Offerings Rate Card",
    "spec": "Service Collateral \u00b7 Rate Card",
    "pages": "16",
    "size_mb": 1.5
  },
  {
    "type": "pdf",
    "slug": "technology-curriculum",
    "cat": "design-digital",
    "title": "Technology Curriculum FY17",
    "spec": "Learning & Development \u00b7 Curriculum Deck",
    "pages": "84",
    "size_mb": 13.9
  },
  {
    "type": "pdf",
    "slug": "bangalore-bpo-site-visit",
    "cat": "design-digital",
    "title": "Bangalore BPO Site Visit Deck",
    "spec": "Client Collateral \u00b7 Presentation Deck",
    "pages": "35",
    "size_mb": 3.4
  },
  {
    "type": "pdf",
    "slug": "webinar-networks",
    "cat": "design-digital",
    "title": "Webinar Networks & Programmatic Platforms",
    "spec": "Marketing Deck \u00b7 Presentation",
    "pages": "33",
    "size_mb": 1.6
  },
  {
    "type": "pdf",
    "slug": "vr-industry-use-cases",
    "cat": "design-digital",
    "title": "VR Industry Use Cases \u2014 Insurance",
    "spec": "Innovation Deck \u00b7 Presentation",
    "pages": "14",
    "size_mb": 1.8
  },
  {
    "type": "pdf",
    "slug": "ms-whats-next",
    "cat": "design-digital",
    "title": "What's Next \u2014 Microsoft \u00d7 Accenture",
    "spec": "Partnership Deck \u00b7 Presentation",
    "pages": "23",
    "size_mb": 1.3
  },
  {
    "type": "pdf",
    "slug": "eala-digital-ambassador",
    "cat": "design-digital",
    "title": "EALA Digital Ambassador Connect",
    "spec": "Internal Campaign \u00b7 Presentation",
    "pages": "44",
    "size_mb": 2.1
  },
  {
    "type": "pdf",
    "slug": "technical-diagram-guideline",
    "cat": "design-digital",
    "title": "Technical Diagram Guideline",
    "spec": "Design Standards \u00b7 Guideline Deck",
    "pages": "10",
    "size_mb": 0.9
  },
  {
    "type": "pdf",
    "slug": "telia-partnership-forum",
    "cat": "design-digital",
    "title": "Telia Partnership Forum",
    "spec": "Partnership Deck \u00b7 Presentation",
    "pages": "25",
    "size_mb": 1.9
  },
  {
    "type": "pdf",
    "slug": "bmc-deck",
    "cat": "design-digital",
    "title": "BMC",
    "spec": "Client Collateral \u00b7 Presentation Deck",
    "pages": "12",
    "size_mb": 15.7
  },
  {
    "type": "pdf",
    "slug": "wa-coe-deck",
    "cat": "design-digital",
    "title": "WA CoE Deck",
    "spec": "Service Collateral \u00b7 Presentation Deck",
    "pages": "11",
    "size_mb": 0.8
  },
  {
    "type": "pdf",
    "slug": "aim-ed-04-2022",
    "cat": "newsletter",
    "title": "AI & M \u2014 Editorial 04/2022",
    "spec": "Editorial \u00b7 Newsletter Deck",
    "pages": "12",
    "size_mb": 5.5
  }
];
