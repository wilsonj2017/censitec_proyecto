<script setup>
const timeline = [
  {
    year: '1990',
    title: 'Fundación de CENSITEC',
    desc: 'Nace la institución con el propósito de democratizar el acceso a la formación técnica y computacional de vanguardia en el país, guiada por el lema "Ciencia y Tecnología para el Desarrollo de la Humanidad".'
  },
  {
    year: '2002',
    title: 'Expansión de Laboratorios Físicos',
    desc: 'Inauguración de modernos talleres de ensamblaje, telecomunicaciones y redes informáticas con alianzas estratégicas tecnológicas.'
  },
  {
    year: '2015',
    title: 'Lanzamiento del Programa Robótica Kids & Teens',
    desc: 'Pioneros en introducir robótica educativa con microcontroladores Arduino y metodología STEAM para niños y adolescentes.'
  },
  {
    year: '2020',
    title: 'Despliegue del Campus Virtual Cloud 24/7',
    desc: 'Adaptación integral a entornos digitales con aulas virtuales de alta definición, laboratorios remotos y alumnos a nivel nacional e internacional.'
  },
  {
    year: '2026',
    title: '35+ Años y Vanguardia en IA y Automatización',
    desc: 'Más de 45,000 egresados con programas enfocados en Inteligencia Artificial, Cloud Computing, Ciberseguridad e Industria 4.0.'
  }
]
</script>

<template>
  <div class="page-container">

    <!-- Encabezado de Página -->
    <header class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Ruta de navegación">
          <router-link to="/">Inicio</router-link>
          <span>/</span>
          <span>Quiénes somos</span>
        </nav>
        <h1 class="page-hero-title">Quiénes Somos</h1>
        <p class="page-hero-sub">
          Más de 35 años formando líderes tecnológicos capaces de transformar la sociedad mediante la ciencia aplicada y el conocimiento.
        </p>
      </div>
    </header>

    <!-- Simbolismo del Escudo y Lema -->
    <section class="section-padding">
      <div class="container">
        <div class="brand-story-grid">
          <div class="crest-showcase">
            <div class="crest-frame">
              <img src="/images/logo-cencitec.png" alt="Escudo Institucional CENSITEC 1990" class="crest-large" />
            </div>
            <div class="crest-caption">
              <strong>Escudo Oficial CENSITEC</strong>
              <small>Emblema de excelencia técnica y compromiso humano fundado en 1990</small>
            </div>
          </div>

          <div class="story-content">
            <span class="subheading-pill">Nuestra Identidad</span>
            <h2 class="section-heading">Ciencia y Tecnología para el Desarrollo de la Humanidad</h2>
            <p class="paragraph-lead">
              Desde su fundación en 1990, CENSITEC ha sostenido una premisa inquebrantable: el avance tecnológico no tiene sentido si no sirve para mejorar la calidad de vida, crear oportunidades y promover el bienestar de las personas.
            </p>
            <p>
              Nuestro escudo encarna esta vocación: el átomo como origen de la ciencia, el engranaje como motor de la técnica e innovación, los laureles como testimonio del rigor académico y la cinta roja que simboliza el compromiso con el desarrollo del país.
            </p>
            
            <div class="shield-elements-grid">
              <div class="shield-element-box">
                <span class="element-icon">⚛️</span>
                <h4>El Átomo</h4>
                <p>La investigación pura y las leyes de la ciencia moderna.</p>
              </div>
              <div class="shield-element-box">
                <span class="element-icon">⚙️</span>
                <h4>El Engranaje</h4>
                <p>La ingeniería práctica y el dominio de la tecnología.</p>
              </div>
              <div class="shield-element-box">
                <span class="element-icon">🌿</span>
                <h4>Los Laureles</h4>
                <p>El mérito, la perseverancia y la excelencia académica.</p>
              </div>
              <div class="shield-element-box">
                <span class="element-icon">🎗️</span>
                <h4>La Cinta 1990</h4>
                <p>Más de 35 años de historia ininterrumpida y confianza.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Misión, Visión y Valores -->
    <section class="section-padding" style="background-color: var(--c-surface-blue);">
      <div class="container">
        <div class="mv-grid">
          
          <div class="mv-card">
            <div class="mv-icon">🎯</div>
            <h3 class="mv-title">Nuestra Misión</h3>
            <p class="mv-text">
              Brindar educación técnica y científica de vanguardia a niños, jóvenes y adultos, combinando rigor metodológico, laboratorios reales y valores éticos para formar personas capaces de liderar la transformación digital con sentido humano.
            </p>
          </div>

          <div class="mv-card">
            <div class="mv-icon">🔭</div>
            <h3 class="mv-title">Nuestra Visión</h3>
            <p class="mv-text">
              Ser el referente educativo líder en ciencia, tecnología y robótica a nivel nacional e internacional, reconocido por la excelencia de sus egresados, la continua modernización de su oferta formativa y su aporte al desarrollo social.
            </p>
          </div>

        </div>

        <!-- Valores Institucionales -->
        <div style="margin-top: 48px;">
          <h3 style="text-align:center;font-size:1.6rem;color:var(--c-navy);margin-bottom:24px;">Valores que Guían Nuestra Comunidad</h3>
          <div class="values-grid">
            <div class="value-item">
              <strong>Innovación Constante:</strong> Adaptación inmediata a los avances tecnológicos.
            </div>
            <div class="value-item">
              <strong>Humanismo Tecnológico:</strong> Uso ético y responsable de la ciencia.
            </div>
            <div class="value-item">
              <strong>Rigor y Calidad:</strong> Docentes capacitados y programas exigentes.
            </div>
            <div class="value-item">
              <strong>Inclusión Educativa:</strong> Cursos accesibles desde la infancia hasta el profesional sénior.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Línea de Tiempo Histórica -->
    <section class="section-padding">
      <div class="container">
        <div class="section-title-wrap">
          <span class="subheading-pill">35+ Años de Progreso</span>
          <h2 class="section-heading">Nuestra Trayectoria Histórica</h2>
          <p class="section-subtext">Hitos que han consolidado a CENSITEC como una institución de referencia nacional.</p>
        </div>

        <div class="timeline-container">
          <div v-for="(item, idx) in timeline" :key="idx" class="timeline-row">
            <div class="timeline-year-badge">{{ item.year }}</div>
            <div class="timeline-card">
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-banner-section">
      <div class="container cta-banner-box">
        <div class="cta-banner-content">
          <h2 class="cta-banner-title">Sé Parte de la Familia CENSITEC</h2>
          <p class="cta-banner-sub">Conoce nuestros programas y sé parte de la siguiente generación de líderes en tecnología.</p>
          <div class="cta-banner-btns">
            <router-link to="/cursos/adultos" class="btn-banner-primary">Ver Cursos Disponibles →</router-link>
            <router-link to="/contacto" class="btn-banner-secondary">Contáctanos</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.brand-story-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 48px;
  align-items: center;
}

.crest-showcase {
  text-align: center;
  background: white;
  padding: 36px 24px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-md);
}

.crest-frame {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  background: var(--c-surface-blue);
  border-radius: 50%;
  margin-bottom: 20px;
}

.crest-large {
  max-width: 170px;
  max-height: 170px;
  object-fit: contain;
}

.crest-caption strong {
  display: block;
  font-size: 1.15rem;
  color: var(--c-navy);
  margin-bottom: 4px;
}

.crest-caption small {
  color: var(--c-gray-muted);
  font-size: 0.85rem;
}

.paragraph-lead {
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--c-navy);
  line-height: 1.6;
  margin-bottom: 16px;
}

.shield-elements-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 24px;
}

.shield-element-box {
  background: white;
  padding: 16px;
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--c-primary);
  box-shadow: var(--shadow-sm);
}

.shield-element-box h4 {
  font-size: 0.95rem;
  color: var(--c-navy);
  margin: 6px 0 4px;
}

.shield-element-box p {
  font-size: 0.85rem;
  color: var(--c-gray-muted);
  margin: 0;
}

.mv-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.mv-card {
  background: white;
  padding: 36px 30px;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
}

.mv-icon {
  font-size: 2.2rem;
  margin-bottom: 14px;
}

.mv-title {
  font-size: 1.35rem;
  color: var(--c-navy);
  margin-bottom: 12px;
}

.mv-text {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--c-text);
  margin: 0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 16px;
}

.value-item {
  background: white;
  padding: 18px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--c-border);
  font-size: 0.9rem;
  color: var(--c-text);
}

.timeline-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-left: 32px;
  border-left: 3px solid var(--c-primary-light);
}

.timeline-row {
  position: relative;
  margin-bottom: 32px;
}

.timeline-year-badge {
  position: absolute;
  left: -54px;
  top: 0;
  background: var(--c-primary);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: 999px;
  box-shadow: var(--shadow-sm);
}

.timeline-card {
  background: white;
  padding: 22px 24px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
}

.timeline-title {
  font-size: 1.15rem;
  color: var(--c-navy);
  margin-bottom: 6px;
}

.timeline-desc {
  font-size: 0.92rem;
  color: var(--c-text-muted);
  margin: 0;
  line-height: 1.55;
}

@media (max-width: 900px) {
  .brand-story-grid {
    grid-template-columns: 1fr;
  }
  .mv-grid {
    grid-template-columns: 1fr;
  }
  .shield-elements-grid {
    grid-template-columns: 1fr;
  }
}
</style>
