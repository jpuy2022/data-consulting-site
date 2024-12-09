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
        'predicciones', // docs/prediccion.md
        'ubicacion-recomendada', // docs/ubicacion-recomendada.md
        'tiempo-preguntas', // docs/tiempo-preguntas.md
      ],
    },
  ],
};

export default sidebars;
