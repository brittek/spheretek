import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Brittek Digital",
  DESCRIPTION: "Elevate Your Digital Presence with Brittek Digital, your premier full-service digital design and development agency.",
  AUTHOR: "James Britton",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Explore the places and projects where Brittek Digital has made an impact.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Insights and articles on digital design, development, and innovation.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects and case studies by Brittek Digital.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts, projects, and services by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Contact", 
    HREF: "/contact", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "info@brittek.digital",
    HREF: "mailto:info@brittek.digital",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "brittek",
    HREF: "https://github.com/brittek"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "brittek-digital",
    HREF: "https://www.linkedin.com/company/brittek-digital/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter",
    TEXT: "brittek_dgtl",
    HREF: "https://twitter.com/brittek_dgtl",
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "brittekdgtl",
    HREF: "https://instagram.com/brittekdgtl",
  },
]