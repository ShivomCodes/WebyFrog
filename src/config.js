export const siteConfig = {
  social: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/webyfrog",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/webyfrog",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/webyfrog",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/webyfrog",
  },
  contact: {
    email: process.env.NEXT_PUBLIC_SECURE_EMAIL || "hello@webyfrog.agency",
    hqBase: process.env.NEXT_PUBLIC_HQ_BASE || "NYC / Berlin",
  },
};
