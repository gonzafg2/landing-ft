import type { NavItem, MetaTags, HeroTexts, Service, Feature, Plan, WhatsApp } from '@/store/interfaces';

export const state = (): {
  navItems: NavItem[];
  metaTags: MetaTags;
  heroTexts: HeroTexts;
  services: Service[];
  features: Feature[];
  plans: Plan[];
  whatsapp: WhatsApp;
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
    title: 'Soluciones en la nube para la Era Moderna',
    subtitle:
      'Impulsa tu empresa con Servicios en Cloud escalables, seguros e innovadores diseñados para el futuro digital',
  },
  services: [
    {
      title: 'Infraestructura Cloud',
      description: 'Construye y escala tus sistemas con nuestras soluciones cloud de grade empresarial.',
      icon: 'mdi:rocket-outline',
    },
    {
      title: 'Soluciones de Hosting',
      description: 'Alojamiento web confiable y escalable para tu negocio.',
      icon: 'mdi:server',
    },
    {
      title: 'Correo Corporativo',
      description: 'Servicios de correo electrónico profesional para tu empresa.',
      icon: 'mdi:email-outline',
    },
    // {
    // title: 'Consultoría Empresarial',
    // description: 'Asesoramiento experto para optimizar tus procesos y estrategias de negocio.',
    // icon: 'mdi:briefcase-outline',
    // },
    {
      title: 'Desarrollo de Software',
      description: 'Soluciones de software a medida para satisfacer las necesidades de tu empresa.',
      icon: 'mdi:code-braces',
    },
  ],
  features: [
    {
      title: 'Seguridad Avanzada',
      description: 'Protege tus datos y sistemas con las últimas tecnologías de seguridad.',
      icon: 'mdi:shield-check-outline',
    },
    {
      title: 'Soporte 24/7',
      description: 'Nuestro equipo de expertos está disponible para ayudarte en cualquier momento.',
      icon: 'mdi:headset',
    },
    {
      title: 'Escalabilidad',
      description: 'Aumenta o disminuye los recursos según las necesidades de tu empresa.',
      icon: 'mdi:arrow-expand-horizontal',
    },
    {
      title: 'Alta Disponibilidad',
      description: 'Garantizamos la disponibilidad de tus servicios con un SLA del 99.9%.',
      icon: 'mdi:clock-time-four-outline',
    },
    {
      title: 'Backup Automático',
      description: 'Realizamos copias de seguridad diarias para proteger tus datos.',
      icon: 'mdi:database-refresh',
    },
    {
      title: 'Facilidad de Uso',
      description: 'Nuestras soluciones son fáciles de usar y configurar, sin complicaciones.',
      icon: 'mdi:account-check-outline',
    },
  ],
  plans: [
    {
      name: 'Starter',
      price: '4.990',
      features: [
        '1 CPU Core',
        '1 GB RAM',
        '15 GB SSD',
        '500 GB/mes Transferencia',
        '24/7 Soporte Básico',
        '1 Dominio',
        'Subdominios Ilimitados',
        'Certificado SSL Gratis',
        'Base de Datos Ilimitadas',
        'Cuentas de Correo Ilimitadas',
      ],
    },
    {
      name: 'Professional',
      price: '19.990',
      features: [
        '2 CPU Cores',
        '2 GB RAM',
        '100 GB SSD',
        '1 TB/mes Transferencia',
        '24/7 Soporte Prioritario',
        '2 Dominios',
        'Subdominios Ilimitados',
        'Certificado SSL Gratis',
        'Base de Datos Ilimitadas',
        'Cuentas de Correo Ilimitadas',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '49.990',
      features: [
        '4 CPU Cores',
        '4 GB RAM',
        '250 GB SSD',
        '5 TB/mes Transferencia',
        '24/7 Soporte Premium',
        '5 Dominios',
        'Subdominios Ilimitados',
        'Certificado SSL Gratis',
        'Base de Datos Ilimitadas',
        'Cuentas de Correo Ilimitadas',
      ],
    },
  ],
  whatsapp: {
    phone: '+56921218604',
    message: 'Hola, me gustaría obtener más información sobre sus servicios.',
    floating: true,
    position: 'right', // 'right' o 'left'
    icon: 'mdi:whatsapp',
    style: {
      backgroundColor: '#25D366',
      color: '#FFFFFF',
      borderRadius: '50%',
      padding: '12px',
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
      boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
      cursor: 'pointer',
    },
  },
});
