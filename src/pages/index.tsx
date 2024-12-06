import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Data Consulting"
      description="Soluciones inteligentes basadas en datos para potenciar tu negocio">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.heroTitle}>Data Consulting</h1>
          <p className={styles.heroSubtitle}>
            Transformamos datos en decisiones estratégicas.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/introduccion">
              Conoce más
            </Link>
          </div>
        </div>
      </header>
      <main>
        {/* Sección de características */}
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>Soluciones Personalizadas</h3>
                <p>
                  Diseñamos estrategias a medida para optimizar tu negocio y maximizar resultados.
                </p>
              </div>
              <div className="col col--4">
                <h3>Basado en Datos</h3>
                <p>
                  Utilizamos herramientas avanzadas como Geohash y Machine Learning para analizar y proyectar.
                </p>
              </div>
              <div className="col col--4">
                <h3>Resultados Garantizados</h3>
                <p>
                  Nuestro enfoque se basa en métricas comprobadas para tomar decisiones informadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Quiénes Somos */}
        <section className={styles.team}>
          <div className="container">
            <h2 className={styles.teamTitle}>Quiénes Somos</h2>
            <p className={styles.teamSubtitle}>
              Somos un equipo multidisciplinario de expertos en análisis de datos, machine learning y visualización.
            </p>
            <div className="row">
              {/* Juan */}
              <div className="col col--4">
                <img
                  src="/data-consulting-site/img/juan.jpg"
                  alt="Juan"
                  className={styles.teamImage}
                />
                <h3>Líder de Proyecto</h3>
                <p>Coordinador y estratega del equipo.</p>
              </div>
              {/* Daniel */}
              <div className="col col--4">
                <img
                  src="/data-consulting-site/img/daniel.jpeg"
                  alt="Daniel"
                  className={styles.teamImage}
                />
                <h3>Analista de Datos</h3>
                <p>Especialista en Geohash y visualización de datos.</p>
              </div>
              {/* Ricardo */}
              <div className="col col--4">
                <img
                  src="/data-consulting-site/img/ricardo.jpeg"
                  alt="Ricardo"
                  className={styles.teamImage}
                />
                <h3>Ingeniero de Machine Learning</h3>
                <p>Diseño de modelos predictivos y proyecciones.</p>
              </div>
            </div>
            <div className="row">
              {/* Deybert */}
              <div className="col col--6">
                <img
                  src="/data-consulting-site/img/deybert.jpeg"
                  alt="Deybert"
                  className={styles.teamImage}
                />
                <h3>Desarrollador Backend</h3>
                <p>Procesamiento de datos y ETL.</p>
              </div>
              {/* Felipe */}
              <div className="col col--6">
                <img
                  src="/data-consulting-site/img/felipe.jpeg"
                  alt="Felipe"
                  className={styles.teamImage}
                />
                <h3>Especialista en Visualización</h3>
                <p>Diseño de dashboards y storytelling visual.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
