<script setup>
const virtualFeatures = [
  {
    icon: '📡',
    title: 'Clases en Vivo por Streaming Full HD',
    desc: 'Sesiones interactivas con pizarras digitales, resolución de dudas en tiempo real y dinámicas de programación en vivo con tu docente.'
  },
  {
    icon: '📼',
    title: 'Grabaciones Disponibles 24/7',
    desc: 'Todas las clases quedan indexadas y almacenadas en tu cuenta para que puedas repasar cuantas veces necesites desde tu computadora o celular.'
  },
  {
    icon: '☁️',
    title: 'Laboratorios Virtuales en la Nube',
    desc: 'Entornos de código preconfigurados en la nube para que no tengas que instalar software pesado ni contar con computadoras costosas.'
  },
  {
    icon: '💬',
    title: 'Tutorías y Foros con el Docente',
    desc: 'Canal directo de consultas técnicas con tu instructor y sesiones grupales de mentoría para la revisión de tus tareas y proyectos.'
  }
]

const systemRequirements = [
  { item: 'Conexión a Internet', req: 'Mínimo 15 Mbps de velocidad estable recomendada para transmisión HD.' },
  { item: 'Navegador Web', req: 'Google Chrome, Mozilla Firefox, Microsoft Edge o Safari actualizados.' },
  { item: 'Computadora / Laptop', req: 'Windows 10/11, macOS o Linux con al menos 4GB de RAM y audio/micrófono funcional.' },
  { item: 'Acceso Móvil', req: 'App móvil del Campus Virtual para visualizar clases y contenidos desde tablets o celulares.' }
]
</script>

<template>
  <div class="virtual-page">

    <!-- Encabezado de Página -->
    <header class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Ruta de navegación">
          <router-link to="/">Inicio</router-link>
          <span>/</span>
          <router-link to="/modalidad/virtual">Modalidad</router-link>
          <span>/</span>
          <span>Virtual</span>
        </nav>
        <span class="subheading-pill" style="background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.3);">
          Campus Virtual Cloud 24/7
        </span>
        <h1 class="page-hero-title">Modalidad Virtual</h1>
        <p class="page-hero-sub">
          Estudia desde cualquier ciudad del país o del mundo con la misma calidad académica, clases sincrónicas en vivo, laboratorios remotos y certificación oficial.
        </p>
      </div>
    </header>

    <!-- Showcase Virtual con Foto -->
    <section class="section-padding">
      <div class="container">
        <div class="virtual-showcase-grid">
          <div>
            <span class="subheading-pill">Flexibilidad Sin Fronteras</span>
            <h2 class="section-heading">Una Experiencia de Aprendizaje Online Inmersiva</h2>
            <p style="font-size:1.05rem;color:var(--c-text);line-height:1.65;margin-bottom:20px;">
              Nuestra plataforma virtual no es un simple repositorio de videos estáticos. Es un ecosistema interactivo donde programas en tiempo real, interactúas con compañeros y recibes retroalimentación continua de expertos.
            </p>
            <div class="virtual-stats-row">
              <div class="vstat-item">
                <span class="vstat-num">24/7</span>
                <span class="vstat-lbl">Acceso a plataforma</span>
              </div>
              <div class="vstat-item">
                <span class="vstat-num">100%</span>
                <span class="vstat-lbl">Clases con docente en vivo</span>
              </div>
              <div class="vstat-item">
                <span class="vstat-num">HD</span>
                <span class="vstat-lbl">Video y audio optimizado</span>
              </div>
            </div>
          </div>

          <div class="virtual-img-wrapper">
            <img src="/images/modalidad-virtual.jpg" alt="Estudiante en plataforma virtual CENSITEC" class="virtual-main-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- Características del Campus Virtual -->
    <section class="section-padding" style="background:var(--c-surface-blue);">
      <div class="container">
        <div class="section-title-wrap">
          <h2 class="section-heading">Ventajas de Nuestra Plataforma Virtual</h2>
          <p class="section-subtext">Diseñada para maximizar tu concentración y acelerar la retención de habilidades prácticas.</p>
        </div>

        <div class="virtual-features-grid">
          <div v-for="(feat, index) in virtualFeatures" :key="index" class="vfeat-card">
            <div class="vfeat-icon">{{ feat.icon }}</div>
            <h3 class="vfeat-title">{{ feat.title }}</h3>
            <p class="vfeat-desc">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Requerimientos Técnicos Recomendados -->
    <section class="section-padding">
      <div class="container">
        <div class="section-title-wrap">
          <h2 class="section-heading">Requisitos Técnicos Mínimos</h2>
          <p class="section-subtext">Para asegurar una experiencia fluida durante tus clases sincrónicas.</p>
        </div>

        <div class="req-table-box">
          <table class="req-table">
            <thead>
              <tr>
                <th style="width: 35%;">Componente</th>
                <th>Especificación Recomendada</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(req, idx) in systemRequirements" :key="idx">
                <td><strong>{{ req.item }}</strong></td>
                <td>{{ req.req }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-banner-section">
      <div class="container cta-banner-box">
        <div class="cta-banner-content">
          <h2 class="cta-banner-title">Empieza a Estudiar desde Donde Estés</h2>
          <p class="cta-banner-sub">Recibe tus credenciales del Campus Virtual al matricularte e inicia de inmediato.</p>
          <div class="cta-banner-btns">
            <router-link to="/#formulario-inscripcion" class="btn-banner-primary">Inscribirme en Virtual →</router-link>
            <router-link to="/cursos/adultos" class="btn-banner-secondary">Ver Catálogo de Cursos</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.virtual-showcase-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: center;
}

.virtual-stats-row {
  display: flex;
  gap: 20px;
  margin-top: 24px;
}

.vstat-item {
  background: var(--c-surface-blue);
  padding: 16px 20px;
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--c-primary);
  flex: 1;
}

.vstat-num {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--c-navy);
  font-family: var(--font-display);
}

.vstat-lbl {
  font-size: 0.8rem;
  color: var(--c-text-muted);
}

.virtual-img-wrapper {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.virtual-main-img {
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
  display: block;
}

.virtual-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.vfeat-card {
  background: white;
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
}

.vfeat-icon {
  font-size: 2.2rem;
  margin-bottom: 12px;
}

.vfeat-title {
  font-size: 1.15rem;
  color: var(--c-navy);
  margin-bottom: 8px;
}

.vfeat-desc {
  font-size: 0.9rem;
  color: var(--c-text);
  line-height: 1.6;
  margin: 0;
}

.req-table-box {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.req-table {
  width: 100%;
  border-collapse: collapse;
}

.req-table th {
  background: var(--c-navy);
  color: white;
  padding: 16px 20px;
  text-align: left;
  font-size: 0.95rem;
}

.req-table td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--c-border);
  font-size: 0.92rem;
  color: var(--c-text);
}

.req-table tr:last-child td {
  border-bottom: none;
}

@media (max-width: 900px) {
  .virtual-showcase-grid {
    grid-template-columns: 1fr;
  }
}
</style>
