<script setup>
import { ref } from 'vue'

const kidsCourses = [
  {
    id: 'robotica-kids-creativa',
    title: 'Robótica Creativa & Circuitos Divertidos',
    badge: '7 a 11 años',
    duration: '40 Horas de Taller',
    modality: 'Presencial (Kits incluidos)',
    image: '/images/courses-ninos.jpg',
    description: 'Los pequeños aprenden armando mecanismos con engranajes, poleas, motores seguros y luces LED mientras descubren cómo funcionan las máquinas de su entorno.',
    syllabus: [
      'Descubriendo la energía, baterías seguras y conexiones con plastilina conductora',
      'Construcción de pequeños autómatas con motores vibratorios y hélices',
      'Sensores mágicos: robots que encienden luces en la oscuridad y responden a sonidos',
      'Desafío final: Construcción y decoración de una mascota robótica'
    ]
  },
  {
    id: 'scratch-programacion-kids',
    title: 'Programación Visual con Scratch & Creador Digital',
    badge: 'Lógica Computacional',
    duration: '40 Horas de Taller',
    modality: 'Presencial y Virtual en Vivo',
    image: '/images/courses-ninos.jpg',
    description: 'Aprende a programar sin frustraciones mediante bloques de colores. Crea animaciones con sonido, historias interactivas y tus propios juegos arcade.',
    syllabus: [
      'Conociendo a Scratch: diseño de personajes, escenarios y disfraces',
      'Movimientos, rebotes y secuencias lógicas paso a paso',
      'Juegos de atrapar objetos con contadores de puntos y vidas',
      'Presentación y juego compartido con los compañeros de clase'
    ]
  },
  {
    id: 'inventores-steam-kids',
    title: 'Pequeños Inventores: Taller STEAM Integral',
    badge: 'Estimulación Temprana',
    duration: '35 Horas de Taller',
    modality: 'Presencial',
    image: '/images/courses-ninos.jpg',
    description: 'Combina ciencia, arte y tecnología resolviendo retos divertidos como construir puentes resistentes, autos propulsados por aire y hologramas sencillos.',
    syllabus: [
      'Física divertida: palancas, catapultas y estructuras geométricas',
      'Óptica y luz: caleidoscopios y proyectores caseros',
      'Electricidad mágica y tarjetas electrónicas pop-up para regalar',
      'Feria de proyectos: demostración final para los padres de familia'
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
          <router-link to="/cursos/ninos">Nuestros cursos</router-link>
          <span>/</span>
          <span>Niños</span>
        </nav>
        <span class="subheading-pill" style="background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.3);">
          Edades: 7 a 11 años
        </span>
        <h1 class="page-hero-title">Robótica y Tecnología para Niños</h1>
        <p class="page-hero-sub">
          Aprender jugando es la mejor forma de despertar el talento. Talleres lúdicos de robótica, programación con bloques y creatividad STEAM en ambientes 100% seguros y estimulantes.
        </p>
      </div>
    </header>

    <!-- Beneficios para Niños y Familias -->
    <section class="section-padding" style="background:var(--c-surface-blue);">
      <div class="container">
        <div class="category-benefits-grid">
          <div class="cat-benefit-card">
            <span class="cat-benefit-icon">🧩</span>
            <h4>Aprendizaje Lúdico Sin Pantallas Excesivas</h4>
            <p>Fomentamos el armado táctil de piezas, circuitos seguros y trabajo manual que aleja la adicción pasiva a los celulares.</p>
          </div>
          <div class="cat-benefit-card">
            <span class="cat-benefit-icon">🛡️</span>
            <h4>Kits Seguros e Instructores Especializados</h4>
            <p>Utilizamos componentes de bajo voltaje y herramientas adaptadas a la motricidad infantil con docentes de gran paciencia pedagógica.</p>
          </div>
          <div class="cat-benefit-card">
            <span class="cat-benefit-icon">🎨</span>
            <h4>Desarrollo de Creatividad y Autoestima</h4>
            <p>Cada niño experimenta el orgullo de construir un proyecto propio que funciona y que puede mostrar a su familia.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Catálogo de Cursos para Niños -->
    <section class="section-padding">
      <div class="container">
        <div class="section-title-wrap">
          <h2 class="section-heading">Talleres Diseñados para los Más Pequeños</h2>
          <p class="section-subtext">Cupos reducidos (máximo 12 niños por aula) para garantizar una atención personalizada.</p>
        </div>

        <div class="kids-grid">
          <div v-for="course in kidsCourses" :key="course.id" class="course-card">
            <div class="course-image-wrapper">
              <img :src="course.image" :alt="course.title" class="course-thumb" />
              <div class="course-badge">{{ course.badge }}</div>
            </div>

            <div class="course-body">
              <div class="course-meta">
                <span class="course-tag">Niños Kids</span>
                <span class="course-hours">⏱️ {{ course.duration }}</span>
              </div>

              <h3 class="course-card-title">{{ course.title }}</h3>
              <p class="course-card-desc">{{ course.description }}</p>

              <div class="course-card-actions">
                <button type="button" class="btn-course-syllabus" @click="openModal(course)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  <span>Ver Qué Aprenderá</span>
                </button>
                <router-link to="/#formulario-inscripcion" class="btn-course-enroll">
                  <span>Inscribir a mi Hijo/a</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal de Temario para Niños -->
    <div v-if="isModalOpen" class="modal-backdrop" @click="closeModal">
      <div class="modal-dialog" @click.stop>
        <div class="modal-header">
          <div>
            <span class="modal-tag">Taller Infantil</span>
            <h3 class="modal-title">{{ selectedCourse?.title }}</h3>
          </div>
          <button class="modal-close-btn" @click="closeModal" aria-label="Cerrar">&times;</button>
        </div>

        <div class="modal-body">
          <div class="modal-info-row">
            <div><strong>Duración:</strong> {{ selectedCourse?.duration }}</div>
            <div><strong>Modalidad:</strong> {{ selectedCourse?.modality }}</div>
            <div><strong>Materiales:</strong> 100% Incluidos en el taller</div>
          </div>

          <h4 style="margin: 18px 0 10px; color: var(--c-navy);">Contenido Pedagógico del Taller:</h4>
          <div class="syllabus-list">
            <div v-for="(item, idx) in selectedCourse?.syllabus" :key="idx" class="syllabus-item">
              <div class="syllabus-item-num">{{ idx + 1 }}</div>
              <div class="syllabus-item-text">{{ item }}</div>
            </div>
          </div>

          <div class="modal-footer-cta">
            <router-link to="/#formulario-inscripcion" class="btn-header-cta" @click="closeModal">
              ¡Reservar Vacante para mi Pequeño!
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Final -->
    <section class="cta-banner-section">
      <div class="container cta-banner-box">
        <div class="cta-banner-content">
          <h2 class="cta-banner-title">¡Convierte la Curiosidad de tus Hijos en Genialidad!</h2>
          <p class="cta-banner-sub">Conoce los horarios de fin de semana y los talleres de vacaciones útiles en CENSITEC.</p>
          <div class="cta-banner-btns">
            <router-link to="/#formulario-inscripcion" class="btn-banner-primary">Inscribirse Ahora →</router-link>
            <router-link to="/contacto" class="btn-banner-secondary">Conversar por WhatsApp</router-link>
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

.kids-grid {
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
