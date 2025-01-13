import type { NavItem, MetaTags, HeroTexts, Service, Feature, Plan } from '@/store/interfaces';

export const state = (): {
  navItems: NavItem[];
  metaTags: MetaTags;
  heroTexts: HeroTexts;
  services: Service[];
  features: Feature[];
  plans: Plan[];
} => ({
  navItems: [
    { text: 'Inicio', href: '/', isExternal: false, icon: 'mdi:home-outline' },
    {
      text: 'Servicios',
      href: '#services',
      isExternal: false,
      icon: 'mdi:cloud-outline',
    },
    {
      text: 'Contáctanos',
      href: '#contact',
      isExternal: false,
      icon: 'mdi:email-outline',
    },
  ],
  metaTags: {
    title: 'Cloud Solutions | Fleming Technologies',
    description: 'Descripción de mi sitio web',
  },
  heroTexts: {
    title: 'Cloud Solutions for the Modern Era',
    subtitle: 'Empower your business with scalable, secure, and innovative cloud services designed for the future.',
  },
  services: [
    {
      title: 'Cloud Infrastructure',
      description: 'Build and scale your infrastructure with our enterprise-grade cloud solutions.',
      icon: 'mdi:rocket-outline',
    },
    {
      title: 'DevOps Automation',
      description: 'Streamline your development pipeline with automated workflows and CI/CD.',
      icon: 'mdi:robot-outline',
    },
    {
      title: 'Security Solutions',
      description: 'Protect your data with advanced security measures and compliance frameworks.',
      icon: 'mdi:lock-outline',
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs.',
      icon: 'mdi:code-braces',
    },
  ],
  features: [
    {
      title: 'High Performance',
      description: 'Lightning-fast infrastructure optimized for maximum performance and reliability.',
      icon: 'mdi:speedometer',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock expert support to keep your systems running smoothly.',
      icon: 'mdi:headset',
    },
    {
      title: 'Global Network',
      description: 'Distributed infrastructure across multiple regions for optimal latency.',
      icon: 'mdi:earth',
    },
  ],
  plans: [
    {
      name: 'Starter',
      price: '49',
      features: ['2 CPU Cores', '4GB RAM', '100GB SSD Storage', '1TB Transfer', '24/7 Support'],
    },
    {
      name: 'Professional',
      price: '99',
      features: [
        '4 CPU Cores',
        '8GB RAM',
        '250GB SSD Storage',
        '2TB Transfer',
        'Priority Support',
        'Advanced Security',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '199',
      features: [
        '8 CPU Cores',
        '16GB RAM',
        '500GB SSD Storage',
        '5TB Transfer',
        '24/7 Premium Support',
        'Advanced Security',
        'Dedicated Resources',
      ],
    },
  ],
});
