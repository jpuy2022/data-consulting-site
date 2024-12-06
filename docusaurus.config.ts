import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Proyecto McDonald’s',
  tagline: 'Soluciones basadas en datos para el retail',
  favicon: 'img/favicon.ico',
  url: 'https://tu-sitio-ejemplo.com',
  baseUrl: '/',
  organizationName: 'tu-usuario', // Cambia esto por tu usuario de GitHub
  projectName: 'mcdonalds-project', // Cambia esto por el nombre del repo
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/tu-usuario/mcdonalds-project/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Proyecto McDonald’s',
      logo: {
        alt: 'Data Consulting',
        src: 'img/logoup.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: 'https://github.com/tu-usuario/mcdonalds-project',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Recursos',
          items: [
            {
              label: 'Reporte Tableau',
              href: 'https://public.tableau.com/app/profile/daniel.cardozo4509/viz/Pre-entre-integrador/Dashboard1',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tu-usuario/mcdonalds-project',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Proyecto McDonald’s.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
