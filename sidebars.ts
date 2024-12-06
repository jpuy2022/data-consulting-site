import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Configuración de la barra lateral
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Proyecto McDonald’s',
      items: [
        'introduccion', // docs/introduccion.md
        'geohash', // docs/geohash.md
        'arquitectura', // docs / aquitectura.md
        'mapas-calor', // docs/mapas-calor.md
        'machine-learning', // docs/machine-learning.md
        'dashboard', // docs/dashboard.md
        'ubicacion-recomendada', // docs/ubicacion-recomendada.md
      ],
    },
  ],
};

export default sidebars;
