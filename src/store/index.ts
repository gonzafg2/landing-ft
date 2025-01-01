import type { NavItem, MetaTags, HeroTexts } from "./interfaces";

export const state = (): {
  navItems: NavItem[];
  metaTags: MetaTags;
  heroTexts: HeroTexts;
} => ({
  navItems: [
    { text: "Inicio", href: "/", isExternal: false, icon: "mdi:home-outline" },
    {
      text: "Servicios",
      href: "#services",
      isExternal: false,
      icon: "mdi:cloud-outline",
    },
    {
      text: "Contáctanos",
      href: "#contact",
      isExternal: false,
      icon: "mdi:email-outline",
    },
  ],
  metaTags: {
    title: "Cloud Solutions | Fleming Technologies",
    description: "Descripción de mi sitio web",
  },
  heroTexts: {
    title: "Cloud Solutions for the Modern Era",
    subtitle:
      "Empower your business with scalable, secure, and innovative cloud services designed for the future.",
  },
});
