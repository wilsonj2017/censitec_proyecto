<script setup>
import { ref } from 'vue'

const teenCourses = [
  {
    id: 'robotica-arduino-teens',
    title: 'Robótica Aplicada & Proyectos IoT con Arduino',
    badge: '12 a 17 años',
    duration: '60 Horas Prácticas',
    modality: 'Presencial (Laboratorio de Robótica)',
    image: '/images/courses-adolescentes.jpg',
    description: 'Aprende electrónica práctica, lógica de control en C++ y construye robots autónomos como seguidores de línea, brazos hidráulicos y estaciones meteorológicas.',
    syllabus: [
      'Conceptos básicos de electricidad, voltajes y uso seguro del multímetro',
      'Programación estructurada en microcontroladores Arduino IDE',
      'Manejo de sensores ultrasónicos, luz (LDR), temperatura y movimiento',
      'Control de motores DC y servomotores con puentes H',
      'Desafío final: Torneo de robots de rescate y laberinto'
    ]
  },
  {
    id: 'videojuegos-unity-teens',
    title: 'Desarrollo de Videojuegos 2D & 3D con Unity y C#',
    badge: 'Creatividad & Lógica',
    duration: '75 Horas Prácticas',
    modality: 'Presencial y Virtual en Vivo',
    image: '/images/courses-adolescentes.jpg',
    description: 'Convierte tus ideas en juegos reales. Domina la física de videojuegos, la creación de personajes, mecánicas de juego y publica en plataformas digitales.',
    syllabus: [
      'Entorno Unity, coordenadas espaciales y jerarquía de objetos',
      'Programación orientada a objetos básica con scripts en C#',
      'Sistemas de colisión, gravedad, puntajes y niveles interactivos',
      'Efectos visuales con partículas, música y sonidos dinámicos',
      'Empaquetado y exportación de tu videojuego ejecutable para PC y web'
    ]
  },
  {
    id: 'web-creativo-teens',
    title: 'Creadores Web: HTML5, CSS3, JavaScript y Portafolios',
    badge: 'Habilidades del Futuro',
    duration: '50 Horas Prácticas',
    modality: 'Virtual en Vivo / Presencial',
    image: '/images/hero-student.jpg',
    description: 'Diseña y programa tus propios sitios web interactivos, blogs personales y aplicaciones sencillas mientras descubres el fascinante mundo del desarrollo de software.',
    syllabus: [
      'Estructura semántica con HTML5 y diseño visual con CSS3',
      'Diseño responsivo para teléfonos y efectos modernos con flexbox',
      'Interactividad y animaciones con JavaScript en el navegador',
      'Publicación de sitios web en vivo y gratuitos con GitHub Pages'
    ]
  }
]

const selectedCourse = ref(null)
const isModalOpen = ref(false)

function openModal(course) {
  selectedCourse.value = course
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
  selectedCourse.value = null
}
</script>

<template>
  <div class="category-page">

    <!-- Encabezado de Página -->
    <header class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Ruta de navegación">
          <router-link to="/">Inicio</router-link>
          <span>/</span>
          <router-link to="/cursos/adolescentes">Nuestros cursos</router-link>
          <span>/</span>
          <span>Adolescente</span>
        </nav>
        <span class="subheading-pill" style="background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.3);">
          Edades: 12 a 17 años
        </span>
        <h1 class="page-hero-title">Cursos de Tecnología para Adolescentes</h1>
        <p class="page-hero-sub">
          Despierta tu pasión por la ingeniería, la robótica y los videojuegos. Desarrolla proyectos reales que estimulan el pensamiento lógico y te preparan para la universidad.
        </p>
      </div>
    </header>

    <!-- Beneficios STEAM para Adolescentes -->
    <section class="section-padding" style="background:var(--c-surface-blue);">
      <div class="container">
        <div class="category-benefits-grid">
          <div class="cat-benefit-card">
            <span class="cat-benefit-icon">🧠</span>
            <h4>Pensamiento Crítico y STEAM</h4>
            <p>Aprende resolviendo desafíos matemáticos y físicos aplicados a la robótica y la computación real.</p>
          </div>
          <div class="cat-benefit-card">
            <span class="cat-benefit-icon">🏆</span>
            <h4>Proyectos para Concursos</h4>
            <p>Construye robots y videojuegos que puedes presentar en ferias escolares de ciencia y competencias juveniles.</p>
          </div>
          <div class="cat-benefit-card">
            <span class="cat-benefit-icon">🎓</span>
            <h4>Orientación Vocacional Temprana</h4>
            <p>Descubre si tu vocación está en la mecatrónica, ingeniería de sistemas, ciencias de la computación o diseño digital.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Catálogo de Cursos -->
    <section class="section-padding">
      <div class="container">
        <div class="section-title-wrap">
          <h2 class="section-heading">Talleres y Especialidades para Adolescentes</h2>
          <p class="section-subtext">Clases dinámicas, trabajo en equipo y 100% enfocadas en aprender haciendo.</p>
        </div>

        <div class="teen-grid">
          <div v-for="course in teenCourses" :key="course.id" class="course-card">
            <div class="course-image-wrapper">
              <img :src="course.image" :alt="course.title" class="course-thumb" />
              <div class="course-badge">{{ course.badge }}</div>
            </div>

            <div class="course-body">
              <div class="course-meta">
                <span class="course-tag">Adolescentes</span>
                <span class="course-hours">⏱️ {{ course.duration }}</span>
              </div>

              <h3 class="course-card-title">{{ course.title }}</h3>
              <p class="course-card-desc">{{ course.description }}</p>

              <div class="course-card-actions">
                <button type="button" class="btn-course-syllabus" @click="openModal(course)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  <span>Ver Temario Completo</span>
                </button>
                <router-link to="/#formulario-inscripcion" class="btn-course-enroll">
                  <span>Inscribirse</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal de Temario -->
    <div v-if="isModalOpen" class="modal-backdrop" @click="closeModal">
      <div class="modal-dialog" @click.stop>
        <div class="modal-header">
          <div>
            <span class="modal-tag">Programa Juvenil</span>
            <h3 class="modal-title">{{ selectedCourse?.title }}</h3>
          </div>
          <button class="modal-close-btn" @click="closeModal" aria-label="Cerrar">&times;</button>
        </div>

        <div class="modal-body">
          <div class="modal-info-row">
            <div><strong>Duración:</strong> {{ selectedCourse?.duration }}</div>
            <div><strong>Modalidad:</strong> {{ selectedCourse?.modality }}</div>
            <div><strong>Materiales:</strong> Incluidos en laboratorio</div>
          </div>

          <h4 style="margin: 18px 0 10px; color: var(--c-navy);">Contenido del Taller:</h4>
          <div class="syllabus-list">
            <div v-for="(item, idx) in selectedCourse?.syllabus" :key="idx" class="syllabus-item">
              <div class="syllabus-item-num">{{ idx + 1 }}</div>
              <div class="syllabus-item-text">{{ item }}</div>
            </div>
          </div>

          <div class="modal-footer-cta">
            <router-link to="/#formulario-inscripcion" class="btn-header-cta" @click="closeModal">
              ¡Inscribir a mi Hijo/a Hoy!
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Final -->
    <section class="cta-banner-section">
      <div class="container cta-banner-box">
        <div class="cta-banner-content">
          <h2 class="cta-banner-title">Estimula el Potencial Tecnológico de tus Hijos</h2>
          <p class="cta-banner-sub">Horarios sabatinos y de verano disponibles. Reserva tu vacante con anticipación.</p>
          <div class="cta-banner-btns">
            <router-link to="/#formulario-inscripcion" class="btn-banner-primary">Inscribirse en Línea →</router-link>
            <router-link to="/contacto" class="btn-banner-secondary">Consultar con Admisiones</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.category-benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.cat-benefit-card {
  background: white;
  padding: 24px;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
}

.cat-benefit-icon {
  font-size: 2rem;
  margin-bottom: 12px;
  display: inline-block;
}

.cat-benefit-card h4 {
  font-size: 1.1rem;
  color: var(--c-navy);
  margin-bottom: 8px;
}

.cat-benefit-card p {
  font-size: 0.9rem;
  color: var(--c-text-muted);
  margin: 0;
  line-height: 1.5;
}

.teen-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
}

.course-card {
  background: #ffffff;
  border-radius: var(--radius-lg);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: var(--transition-normal);
}

.course-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
  border-color: var(--c-primary);
}

.course-image-wrapper {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.course-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.course-card:hover .course-thumb {
  transform: scale(1.05);
}

.course-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(15, 52, 96, 0.9);
  backdrop-filter: blur(6px);
  color: #ffffff;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.course-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.course-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.course-tag {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--c-primary);
  text-transform: uppercase;
  background: var(--c-primary-light);
  padding: 4px 10px;
  border-radius: var(--radius-pill);
}

.course-hours {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--c-text-muted);
}

.course-card-title {
  font-size: 1.35rem;
  color: var(--c-text-heading);
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 10px;
}

.course-card-desc {
  font-size: 0.92rem;
  color: var(--c-text-body);
  line-height: 1.55;
  margin-bottom: 20px;
  flex-grow: 1;
}

@media (max-width: 900px) {
  .category-benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
