import type { NavItem, MetaTags } from "./interfaces";

export const state = (): { navItems: NavItem[]; metaTags: MetaTags } => ({
  navItems: [
    { text: "Inicio", href: "/", isExternal: false },
    { text: "Servicios", href: "#services", isExternal: false },
    { text: "Contáctanos", href: "#contact", isExternal: false },
  ],
  metaTags: {
    title: "Mi sitio web",
    description: "Descripción de mi sitio web",
  },
});
