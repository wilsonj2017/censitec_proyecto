<script setup>
import { ref } from 'vue'

const adultCourses = [
  {
    id: 'fullstack-pro',
    title: 'Desarrollo Web Full Stack Profesional (Vue 3, Node & Cloud)',
    badge: 'Más Vendido',
    duration: '120 Horas Académicas',
    schedule: 'Sábados / Domingos o Noches (Mar y Jue)',
    modality: 'Presencial y Virtual en Vivo',
    image: '/images/courses-adultos.jpg',
    description: 'Aprende frontend moderno con Vue 3 y Vite, backend escalable con Node.js y Express, bases de datos PostgreSQL y despliegue continuo en la nube.',
    modules: [
      'Git, GitHub profesional y arquitectura web moderna',
      'Frontend reactivo: JavaScript ES6+, Vue.js 3 y TailwindCSS',
      'Backend REST API con Node.js, Express y autenticación JWT',
      'Modelado de bases de datos relacionales y no relacionales',
      'Despliegue en la nube, testing y preparación de portafolio para empleo'
    ]
  },
  {
    id: 'ai-python-data',
    title: 'Inteligencia Artificial & Ciencia de Datos con Python',
    badge: 'Vanguardia 2026',
    duration: '90 Horas Académicas',
    schedule: 'Sábados intensivo (9:00 am - 2:00 pm)',
    modality: 'Virtual en Vivo (Streaming Full HD)',
    image: '/images/hero-student.jpg',
    description: 'Domina el análisis de datos, modelos predictivos de Machine Learning, visión computacional y construcción de agentes basados en Modelos de Lenguaje.',
    modules: [
      'Programación avanzada en Python, NumPy y Pandas para Data Science',
      'Visualización interactiva de métricas con Seaborn y Plotly',
      'Algoritmos de aprendizaje supervisado y no supervisado con Scikit-Learn',
      'Introducción a Deep Learning y Redes Neuronales con PyTorch',
      'Integración de APIs generativas (OpenAI, Gemini) y RAG básico'
    ]
  },
  {
    id: 'robotica-industrial',
    title: 'Automatización Industrial, PLC & Robótica Aplicada',
    badge: 'Laboratorio Físico',
    duration: '100 Horas Académicas',
    schedule: 'Domingos (8:30 am - 1:30 pm)',
    modality: 'Presencial (Laboratorio de Control)',
    image: '/images/modalidad-presencial.jpg',
    description: 'Capacítate en programación de autómatas programables (PLC), instrumentación industrial, sensores analógicos y sistemas de control electroneumático.',
    modules: [
      'Fundamentos de instrumentación industrial y diagramas P&ID',
      'Programación de autómatas PLC (Lenguaje Ladder y FBD)',
      'Sistemas neumáticos y electroneumáticos de precisión',
      'Pantallas HMI y comunicación industrial Modbus/Ethernet',
      'Mantenimiento preventivo y diagnóstico de fallas en planta'
    ]
  },
  {
    id: 'ciberseguridad-redes',
    title: 'Ciberseguridad Defensiva & Redes Empresariales',
    badge: 'Certificación Oficial',
    duration: '80 Horas Académicas',
    schedule: 'Lunes y Miércoles (7:00 pm - 10:00 pm)',
    modality: 'Virtual en Vivo con Labs Remotos',
    image: '/images/modalidad-virtual.jpg',
    description: 'Protege infraestructuras digitales, detecta vulnerabilidades, gestiona firewalls y prepárate para los estándares internacionales de seguridad.',
    modules: [
      'Arquitectura de redes TCP/IP, subnetting y conmutación Cisco',
      'Auditoría y análisis de vulnerabilidades con Kali Linux y Nmap',
      'Seguridad en servidores Linux y Windows Server',
      'Implementación de Firewalls, VPNs y políticas de acceso zero-trust',
      'Respuesta ante incidentes y análisis forense digital'
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

    <!-- Encabezado de Categoría -->
    <header class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Ruta de navegación">
          <router-link to="/">Inicio</router-link>
          <span>/</span>
          <router-link to="/cursos/adultos">Nuestros cursos</router-link>
          <span>/</span>
          <span>Adultos</span>
        </nav>
        <span class="subheading-pill" style="background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.3);">
          Formación Profesional y Empleabilidad
        </span>
        <h1 class="page-hero-title">Cursos de Tecnología para Adultos</h1>
        <p class="page-hero-sub">
          Acelera tu carrera laboral con programas prácticos y certificados en programación, inteligencia artificial, robótica industrial y ciberseguridad. Horarios flexibles y bolsa de empleo activa.
        </p>
      </div>
    </header>

    <!-- Beneficios para Adultos -->
    <section class="section-padding" style="background:var(--c-surface-blue);">
      <div class="container">
        <div class="category-benefits-grid">
          <div class="cat-benefit-card">
            <span class="cat-benefit-icon">💼</span>
            <h4>Bolsa de Empleo y Convenios</h4>
            <p>Acceso exclusivo a vacantes laborales y asesoría para optimizar tu perfil de LinkedIn y portafolio técnico.</p>
          </div>
          <div class="cat-benefit-card">
            <span class="cat-benefit-icon">⏰</span>
            <h4>Horarios Nocturnos y Fines de Semana</h4>
            <p>Diseñados para profesionales que trabajan. Estudia sin descuidar tu jornada laboral o tus responsabilidades.</p>
          </div>
          <div class="cat-benefit-card">
            <span class="cat-benefit-icon">📜</span>
            <h4>Certificación con Respaldo de 35 Años</h4>
            <p>Título oficial CENSITEC con verificación QR y horas pedagógicas reconocidas por el sector productivo.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Catálogo de Cursos para Adultos -->
    <section class="section-padding">
      <div class="container">
        <div class="section-title-wrap">
          <h2 class="section-heading">Programas Especializados 2026</h2>
          <p class="section-subtext">Elige tu especialidad y capacítate con los instructores más destacados de la industria.</p>
        </div>

        <div class="adult-courses-list">
          <div v-for="course in adultCourses" :key="course.id" class="adult-course-item">
            <div class="course-thumb-column">
              <img :src="course.image" :alt="course.title" class="adult-course-img" />
              <span class="adult-badge">{{ course.badge }}</span>
            </div>
            
            <div class="course-detail-column">
              <div class="adult-meta-pills">
                <span class="pill-duration">⏱️ {{ course.duration }}</span>
                <span class="pill-modality">🌐 {{ course.modality }}</span>
                <span class="pill-schedule">📅 {{ course.schedule }}</span>
              </div>

              <h3 class="adult-course-heading">{{ course.title }}</h3>
              <p class="adult-course-text">{{ course.description }}</p>

              <div class="adult-modules-preview">
                <strong>Plan curricular sintetizado:</strong>
                <ul>
                  <li v-for="(mod, i) in course.modules.slice(0, 3)" :key="i">
                    ✓ {{ mod }}
                  </li>
                </ul>
              </div>

              <div class="adult-course-btns">
                <button type="button" class="btn-course-syllabus" @click="openModal(course)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  <span>Ver Plan Completo</span>
                </button>
                <router-link to="/#formulario-inscripcion" class="btn-course-enroll">
                  <span>Inscribirme en este curso</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Modal Detallado de Temario -->
    <div v-if="isModalOpen" class="modal-backdrop" @click="closeModal">
      <div class="modal-dialog" @click.stop>
        <div class="modal-header">
          <div>
            <span class="modal-tag">Programa para Adultos</span>
            <h3 class="modal-title">{{ selectedCourse?.title }}</h3>
          </div>
          <button class="modal-close-btn" @click="closeModal" aria-label="Cerrar">&times;</button>
        </div>

        <div class="modal-body">
          <div class="modal-info-row">
            <div><strong>Duración:</strong> {{ selectedCourse?.duration }}</div>
            <div><strong>Modalidad:</strong> {{ selectedCourse?.modality }}</div>
            <div><strong>Horario:</strong> {{ selectedCourse?.schedule }}</div>
          </div>

          <h4 style="margin: 18px 0 10px; color: var(--c-navy);">Estructura Curricular Detallada:</h4>
          <div class="syllabus-list">
            <div v-for="(item, idx) in selectedCourse?.modules" :key="idx" class="syllabus-item">
              <div class="syllabus-item-num">{{ idx + 1 }}</div>
              <div class="syllabus-item-text">{{ item }}</div>
            </div>
          </div>

          <div class="modal-footer-cta">
            <router-link to="/#formulario-inscripcion" class="btn-header-cta" @click="closeModal">
              ¡Inscríbete Hoy en este Curso!
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Banner Inferior de Contacto -->
    <section class="cta-banner-section">
      <div class="container cta-banner-box">
        <div class="cta-banner-content">
          <h2 class="cta-banner-title">¿Tienes dudas sobre qué curso se adapta a tu perfil?</h2>
          <p class="cta-banner-sub">Nuestros asesores vocacionales te orientarán de manera personalizada sin compromiso.</p>
          <div class="cta-banner-btns">
            <router-link to="/contacto" class="btn-banner-primary">Hablar con un Asesor →</router-link>
            <router-link to="/modalidad/virtual" class="btn-banner-secondary">Ver Modalidades</router-link>
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

.adult-courses-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.adult-course-item {
  display: grid;
  grid-template-columns: 320px 1fr;
  background: white;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.adult-course-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.course-thumb-column {
  position: relative;
  min-height: 220px;
}

.adult-course-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.adult-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: var(--c-primary);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  box-shadow: var(--shadow-sm);
}

.course-detail-column {
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.adult-meta-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 12px;
}

.pill-duration, .pill-modality, .pill-schedule {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  background: var(--c-surface-blue);
  color: var(--c-navy);
}

.adult-course-heading {
  font-size: 1.35rem;
  color: var(--c-navy);
  margin-bottom: 8px;
}

.adult-course-text {
  font-size: 0.93rem;
  color: var(--c-text);
  line-height: 1.6;
  margin-bottom: 14px;
}

.adult-modules-preview {
  background: var(--c-surface-blue);
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  margin-bottom: 20px;
  font-size: 0.85rem;
}

.adult-modules-preview strong {
  display: block;
  margin-bottom: 6px;
  color: var(--c-navy);
}

.adult-modules-preview ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--c-text-muted);
}

.adult-course-btns {
  display: flex;
  gap: 14px;
}

@media (max-width: 900px) {
  .category-benefits-grid {
    grid-template-columns: 1fr;
  }
  .adult-course-item {
    grid-template-columns: 1fr;
  }
  .course-thumb-column {
    height: 200px;
  }
  .adult-course-btns {
    flex-direction: column;
  }
}
</style>
