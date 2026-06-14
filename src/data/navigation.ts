export interface NavItem {
  label: string;
  href: string;
  children?: NavGroup[];
}

export interface NavGroup {
  title?: string;
  items: NavLink[];
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const navigation: NavItem[] = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Fichas Clínicas',
    href: '/fichas-faciais-corporais',
    children: [
      {
        title: 'Documentação',
        items: [
          { label: 'Planejamentos Faciais', href: '/fichas-faciais-corporais' },
          { label: 'Fichas de Anamnese', href: '/anamnese-corporal-facial' },
          { label: 'Termos e Contratos', href: '/termos-clinica-estetica' },
        ],
      },
    ],
  },
  {
    label: 'Procedimentos',
    href: '/papelaria-estetica-facial',
    children: [
      {
        title: 'Estética Avançada',
        items: [
          { label: 'Papelaria Facial', href: '/papelaria-estetica-facial' },
          { label: 'Impressos Corporais', href: '/impressos-estetica-corporal' },
          { label: 'Estética Capilar', href: '/estetica-capilar' },
          { label: 'Estética Íntima', href: '/estetica-intima' },
        ],
      },
    ],
  },
  {
    label: 'Papelaria',
    href: '/papelaria-estetica',
    children: [
      {
        title: 'Essenciais',
        items: [
          { label: 'Papelaria Essencial', href: '/papelaria-estetica' },
          { label: 'Receituários', href: '/receituarios' },
          { label: 'Carteiras de Cuidados', href: '/guias-cuidados-estetica' },
        ],
      },
    ],
  },
  {
    label: 'Marketing',
    href: '/fidelidade-clinicas-estetica',
    children: [
      {
        title: 'Design e Branding',
        items: [
          { label: 'Branding', href: '/fidelidade-clinicas-estetica' },
          { label: 'Logotipos', href: '/logotipos-estetica-harmonizacao' },
          { label: 'Websites', href: '/sites-clinicas-estetica' },
        ],
      },
    ],
  },
];
