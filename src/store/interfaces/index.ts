export interface NavItem {
  text: string;
  href: string;
  icon?: string;
  isExternal?: boolean;
}

export interface MetaTags {
  title: string;
  description: string;
}

export interface HeroTexts {
  title: string;
  subtitle: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Plan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface WhatsApp {
  phone: string;
  message: string;
  floating?: boolean;
  position?: string;
  icon?: string;
  style?: any;
}
