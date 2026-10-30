<script setup>
import { ref, computed } from 'vue'

// --- Estado del Acordeón "¿Por qué CENSITEC?" (Estilo Open English) ---
const activeWhyIndex = ref(0)
const whyPanels = [
  {
    shortTitle: 'Tradición 1990',
    title: '35 Años de Tradición y Prestigio Académico (Desde 1990)',
    subtitle: 'Nuestra trayectoria garantiza planes de estudio sólidos reconocidos por la industria.',
    badge: 'Pioneros en Educación Técnica',
    icon: '🏛️',
    highlight: 'Más de 45,000 egresados insertados en tecnología, desarrollo de software e ingeniería.',
    image: '/images/hero-student.jpg',
    imagePosition: 'center 25%'
  },
  {
    shortTitle: 'Docentes Expertos',
    title: 'Docentes Especialistas e Investigadores de la Industria',
    subtitle: 'Aprende directamente de ingenieros, científicos de datos y arquitectos cloud activos.',
    badge: '100% Docentes Certificados',
    icon: '👨‍🏫',
    highlight: 'Profesores certificados en AWS, Cisco, Microsoft, Scrum Alliance y Arduino.',
    image: '/images/profesor-carlos.jpg',
    imagePosition: 'center 20%'
  },
  {
    shortTitle: 'Laboratorios Reales',
    title: 'Laboratorios de Alta Tecnología y Equipamiento Real',
    subtitle: 'Estaciones individuales de cómputo de alto rendimiento y hardware de última generación.',
    badge: 'Infraestructura Moderna',
    icon: '⚙️',
    highlight: 'Kits individuales de robótica con Arduino, Raspberry Pi, brazos robóticos y PLC.',
    image: '/images/modalidad-presencial.jpg',
    imagePosition: 'center center'
  },
  {
    shortTitle: 'Flexibilidad 24/7',
    title: 'Flexibilidad Total: Modalidad Presencial y Virtual 24/7',
    subtitle: 'Estudia a tu propio ritmo con transmisiones en vivo Full HD y acceso permanente a grabaciones.',
    badge: 'Campus Virtual Cloud 24/7',
    icon: '☁️',
    highlight: 'Laboratorios en la nube accesibles sin requerir equipos costosos ni software pesado.',
    image: '/images/modalidad-virtual.jpg',
    imagePosition: 'center center'
  }
]

// --- Catálogo de Cursos y Filtro por Categorías ---
const activeCategory = ref('todos')
const coursesData = [
  {
    id: 'fullstack-web',
    code: 'TI-PRO-01',
    title: 'Desarrollo Web Full Stack Moderno',
    category: 'adultos',
    categoryLabel: 'Adultos',
    badge: 'Alta Demanda',
    hours: '120 horas',
    modality: 'Presencial / Virtual',
    description: 'Domina frontend y backend desde cero: JavaScript moderno, Vue.js 3, Node.js, bases de datos y despliegue cloud en AWS.',
    image: '/images/courses-adultos.jpg',
    syllabus: [
      'Módulo 1: Arquitectura Web, Git y GitHub profesional para equipos',
      'Módulo 2: Frontend reactivo con Vue 3, Vite, TailwindCSS y Pinia',
      'Módulo 3: Backend REST API con Node.js, Express y autenticación JWT',
      'Módulo 4: PostgreSQL, MongoDB y modelado de datos para producción',
      'Módulo 5: CI/CD, Docker básico y despliegue en servicios cloud'
    ]
  },
  {
    id: 'ia-python',
    code: 'TI-PRO-02',
    title: 'Inteligencia Artificial & Ciencia de Datos con Python',
    category: 'adultos',
    categoryLabel: 'Adultos',
    badge: 'Nuevo 2026',
    hours: '90 horas',
    modality: 'Virtual en Vivo',
    description: 'Aprende Machine Learning, redes neuronales, análisis predictivo con Pandas y desarrollo de agentes inteligentes con LLMs.',
    image: '/images/hero-student.jpg',
    syllabus: [
      'Módulo 1: Python avanzado para ingeniería de datos y NumPy',
      'Módulo 2: Análisis exploratorio y visualización con Seaborn y Matplotlib',
      'Módulo 3: Modelos de clasificación y regresión con Scikit-Learn',
      'Módulo 4: Redes neuronales convolucionales y procesamiento de lenguaje natural',
      'Módulo 5: Creación de agentes de IA y consumo de APIs de modelos generativos'
    ]
  },
  {
    id: 'robotica-arduino-jovenes',
    code: 'ROB-TEEN-01',
    title: 'Robótica Aplicada & Sensores IoT con Arduino',
    category: 'adolescentes',
    categoryLabel: 'Adolescentes',
    badge: '12 a 17 años',
    hours: '60 horas',
    modality: 'Presencial',
    description: 'Construye robots móviles, sensores inteligentes, sistemas domóticos y aprende programación en C++ aplicada al mundo físico.',
    image: '/images/courses-adolescentes.jpg',
    syllabus: [
      'Módulo 1: Electrónica básica, protoboards y leyes de circuitos',
      'Módulo 2: Programación de microcontroladores Arduino en C++',
      'Módulo 3: Integración de servomotores, sensores ultrasonido y bluetooth',
      'Módulo 4: Fabricación de un robot seguidor de línea y evasor de obstáculos',
      'Módulo 5: Conectividad Wi-Fi (ESP32) para proyectos de Internet de las Cosas'
    ]
  },
  {
    id: 'videojuegos-adolescentes',
    code: 'GMS-TEEN-02',
    title: 'Desarrollo de Videojuegos 2D & 3D con Unity',
    category: 'adolescentes',
    categoryLabel: 'Adolescentes',
    badge: 'Creatividad & Lógica',
    hours: '75 horas',
    modality: 'Presencial / Virtual',
    description: 'Crea tus propios videojuegos desde la idea hasta la publicación: diseño de niveles, física, lógica en C# y animación gráfica.',
    image: '/images/courses-adolescentes.jpg',
    syllabus: [
      'Módulo 1: Fundamentos del motor Unity y scripting en C#',
      'Módulo 2: Física 2D, colisiones, movimientos de plataformas y puntajes',
      'Módulo 3: Iluminación, cámaras cinemáticas y controladores en entornos 3D',
      'Módulo 4: Diseño de sonido, interfaces UI y guardado de partidas',
      'Módulo 5: Exportación para PC, Android y publicación web'
    ]
  },
  {
    id: 'robotica-kids',
    code: 'ROB-KIDS-01',
    title: 'Robótica Creativa & Electrónica Lúdica Kids',
    category: 'ninos',
    categoryLabel: 'Niños',
    badge: '7 a 11 años',
    hours: '40 horas',
    modality: 'Presencial',
    description: 'Estimula el pensamiento crítico y la motricidad fina armando mecanismos, circuitos con LEDs, motores y pequeños robots interactivos.',
    image: '/images/courses-ninos.jpg',
    syllabus: [
      'Módulo 1: Descubriendo la energía, conductores y circuitos seguros',
      'Módulo 2: Montaje de mecanismos con engranajes, poleas y motores DC',
      'Módulo 3: Sensores de luz y sonido: robots que reaccionan al entorno',
      'Módulo 4: Proyecto final: creación de una criatura robótica personalizada'
    ]
  },
  {
    id: 'programacion-scratch-kids',
    code: 'DEV-KIDS-02',
    title: 'Programación Visual con Scratch & Creador Digital',
    category: 'ninos',
    categoryLabel: 'Niños',
    badge: 'Lógica Computacional',
    hours: '40 horas',
    modality: 'Virtual en Vivo / Presencial',
    description: 'Aprende conceptos clave de programación creando historias interactivas, animaciones coloridas y juegos arcade mediante bloques visuales.',
    image: '/images/courses-ninos.jpg',
    syllabus: [
      'Módulo 1: Exploración del entorno Scratch y personajes animados',
      'Módulo 2: Eventos, bucles, secuencias y lógica de movimiento',
      'Módulo 3: Variables, contadores y toma de decisiones interactivas',
      'Módulo 4: Diseño y presentación del primer videojuego propio'
    ]
  }
]

const filteredCourses = computed(() => {
  if (activeCategory.value === 'todos') {
    return coursesData
  }
  return coursesData.filter(c => c.category === activeCategory.value)
})

function setCategory(category) {
  activeCategory.value = category
}

// --- Modal de Temario ---
const selectedCourse = ref(null)
const isModalOpen = ref(false)

function openCourseModal(course) {
  selectedCourse.value = course
  isModalOpen.value = true
}

function closeCourseModal() {
  isModalOpen.value = false
  selectedCourse.value = null
}

// --- Acordeón de Preguntas Frecuentes (FAQ) ---
const activeFaqIndex = ref(0)
const faqs = [
  {
    question: '¿Qué tipo de certificación otorga CENSITEC al finalizar un curso?',
    answer: 'Al aprobar satisfactoriamente el curso con una nota mínima aprobatoria y asistencia requerida, recibirás una Certificación Oficial emitida por CENSITEC (con 35 años de trayectoria institucional desde 1990). El certificado incluye código QR de validación digital y detalle de horas pedagógicas válidas para tu CV.'
  },
  {
    question: '¿Se necesitan conocimientos previos para inscribirse en los cursos de adultos?',
    answer: 'Nuestros cursos de nivel inicial están estructurados pedagógicamente para llevarte de cero a profesional sin requerir experiencia previa. Contamos además con cursos avanzados para personas con bases previas. Nuestros asesores te orientarán según tu perfil.'
  },
  {
    question: '¿Cómo funciona la modalidad virtual y qué ocurre si falto a una clase?',
    answer: 'Las clases virtuales se transmiten en vivo mediante salas interactivas de alta definición con docentes en tiempo real. Todas las sesiones quedan grabadas y se suben al Campus Virtual CENSITEC el mismo día, disponibles las 24 horas para que puedas repasarlas cuando lo desees.'
  },
  {
    question: '¿Qué facilidades de pago o cuotas están disponibles?',
    answer: 'Ofrecemos planes de pago flexibles en cuotas sin intereses para cursos integrales, así como un 15% de descuento especial por pago anticipado. Aceptamos transferencias bancarias, tarjetas de débito/crédito y billeteras digitales.'
  },
  {
    question: '¿Los niños y adolescentes reciben los materiales de robótica en el aula?',
    answer: 'Sí. En los cursos presenciales para niños y adolescentes, CENSITEC suministra los kits de robótica, herramientas y componentes durante las sesiones de laboratorio en nuestras sedes físicas.'
  }
]

function toggleFaq(index) {
  activeFaqIndex.value = activeFaqIndex.value === index ? null : index
}

// --- Formulario de Registro / Inscripción ---
const formData = ref({
  nombre: '',
  email: '',
  telefono: '',
  categoria: 'adultos',
  modalidad: 'presencial',
  politica: true
})
const formSubmitted = ref(false)
const isSubmitting = ref(false)

function handleFormSubmit() {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    formSubmitted.value = true
  }, 800)
}

function resetForm() {
  formSubmitted.value = false
  formData.value = {
    nombre: '',
    email: '',
    telefono: '',
    categoria: 'adultos',
    modalidad: 'presencial',
    politica: true
  }
}
</script>

<template>
  <div class="home-page">

    <!-- HERO SECTION TIPO OPEN ENGLISH CON FORMULARIO INTEGRADO -->
    <section class="section-hero">
      <div class="container hero-grid">
        
        <!-- Contenido Izquierdo del Hero -->
        <div class="hero-content">
          <span class="hero-tag">
            <span>●</span> Admisiones Abiertas Ciclo 2026-II
          </span>

          <h1 class="hero-title">
            Aprende Tecnología con Propósito Humano y <span class="highlight">Futuro Real</span>
          </h1>

          <p class="hero-subtitle">
            Desde 1990 impulsando la ciencia y la innovación en el Perú. Programas prácticos para adultos, adolescentes y niños en modalidad presencial y virtual con certificación oficial.
          </p>

          <div class="hero-checklist">
            <div class="hero-check-item">
              <span class="check-icon">✓</span>
              <span><strong>35+ Años</strong> de Trayectoria (1990–2026)</span>
            </div>
            <div class="hero-check-item">
              <span class="check-icon">✓</span>
              <span><strong>Doble Certificación</strong> Oficial y QR Digital</span>
            </div>
            <div class="hero-check-item">
              <span class="check-icon">✓</span>
              <span><strong>Bolsa de Empleo</strong> y Laboratorios Modernos</span>
            </div>
          </div>

          <div class="hero-image-wrap">
            <img src="/images/hero-student.jpg" alt="Estudiante en laboratorio CENSITEC" class="hero-image" />
            <div class="hero-image-badge">
              <span>🎓</span> +45,000 Egresados insertados con éxito en la industria
            </div>
          </div>
        </div>

        <!-- Formulario Derecho Lead Capture de Open English -->
        <div class="hero-form-card" id="formulario-inscripcion">
          <div v-if="!formSubmitted">
            <div class="form-header">
              <span class="form-badge-discount">Cupos Limitados</span>
              <h3 class="form-title">¡Inicia Hoy tu Futuro en CENSITEC!</h3>
              <p class="form-subtitle">Déjanos tus datos para enviarte el catálogo completo, promociones y asesoría sin costo.</p>
            </div>

            <form @submit.prevent="handleFormSubmit" class="lead-form">
              <div class="form-group">
                <label for="lead-nombre" class="form-label">Nombre y Apellidos *</label>
                <input
                  id="lead-nombre"
                  v-model="formData.nombre"
                  type="text"
                  required
                  class="form-control"
                  placeholder="Ej. Carlos Martínez"
                />
              </div>

              <div class="form-group">
                <label for="lead-email" class="form-label">Correo Electrónico *</label>
                <input
                  id="lead-email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="form-control"
                  placeholder="ejemplo@correo.com"
                />
              </div>

              <div class="form-group">
                <label for="lead-telefono" class="form-label">Teléfono o WhatsApp *</label>
                <input
                  id="lead-telefono"
                  v-model="formData.telefono"
                  type="tel"
                  required
                  class="form-control"
                  placeholder="999 123 456"
                />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="lead-categoria" class="form-label">Programa</label>
                  <select id="lead-categoria" v-model="formData.categoria" class="form-control form-select">
                    <option value="adultos">Adultos (Profesional / TI)</option>
                    <option value="adolescentes">Adolescentes (12 a 17 años)</option>
                    <option value="ninos">Niños (7 a 11 años)</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="lead-modalidad" class="form-label">Modalidad</label>
                  <select id="lead-modalidad" v-model="formData.modalidad" class="form-control form-select">
                    <option value="presencial">Presencial (Sedes)</option>
                    <option value="virtual">Virtual (Online 24/7)</option>
                    <option value="ambas">Ambas modalidades</option>
                  </select>
                </div>
              </div>

              <button type="submit" class="btn-form-submit" :disabled="isSubmitting">
                <span v-if="!isSubmitting">¡Quiero Recibir Información y Descuentos! →</span>
                <span v-else>Enviando solicitud...</span>
              </button>

              <p class="form-privacy">
                🔒 Tus datos están protegidos bajo estricta confidencialidad. No enviamos spam.
              </p>
            </form>
          </div>

          <!-- Pantalla de Éxito al Enviar -->
          <div v-else class="form-success-box">
            <div class="success-icon">🎉</div>
            <h3 style="color:var(--c-secondary);margin-bottom:8px;">¡Solicitud Recibida con Éxito!</h3>
            <p style="color:var(--c-text-body);font-size:0.95rem;line-height:1.5;">
              Muchas gracias, <strong>{{ formData.nombre }}</strong>. Un asesor académico de CENSITEC se comunicará contigo vía WhatsApp o teléfono con la información de tu programa.
            </p>
            <button class="btn-secondary" @click="resetForm" style="margin-top:20px;">
              Enviar otra consulta
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- BARRA DE ESTADÍSTICAS Y CREDIBILIDAD -->
    <section class="section-stats">
      <div class="container stats-grid">
        <div class="stat-card">
          <div class="stat-number">35+</div>
          <div class="stat-label">Años de Trayectoria (Desde 1990)</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">+45,000</div>
          <div class="stat-label">Egresados en el Sector Productivo</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">98%</div>
          <div class="stat-label">Índice de Satisfacción Estudiantil</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">100%</div>
          <div class="stat-label">Laboratorios Prácticos & Clases en Vivo</div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN INTERACTIVA "¿POR QUÉ CENSITEC?" (ACORDEÓN EXPANDIBLE ESTILO OPEN ENGLISH) -->
    <section class="section-why" id="por-que-cencitec">
      <div class="container">
        
        <h2 class="primary-title">¿Por qué Elegir a <span class="subtitle-underline">CENSITEC</span>?</h2>
        <p class="primary-subtitle">
          Nuestra institución combina más de tres décadas de experiencia académica con tecnología de última generación para ofrecerte una educación práctica, orientada a resultados y con impacto real.
        </p>

        <!-- Acordeón interactivo horizontal/vertical tipo Open English -->
        <div class="accordion-why-container">
          <div
            v-for="(panel, index) in whyPanels"
            :key="index"
            :class="['why-panel', { active: activeWhyIndex === index }]"
            @click="activeWhyIndex = index"
          >
            <!-- Cabecera de panel colapsado -->
            <div class="why-panel-header">
              <div class="why-number">0{{ index + 1 }}</div>
              <div class="why-title-collapsed">{{ panel.shortTitle }}</div>
              <div class="why-panel-play">▶</div>
            </div>

            <!-- Cuerpo del panel expandido -->
            <div class="why-panel-body">
              <div class="why-body-header">
                <span class="why-body-tag">{{ panel.badge }}</span>
                <h3 class="why-body-title">{{ panel.title }}</h3>
                <p class="why-body-desc">{{ panel.subtitle }}</p>
              </div>

              <div class="why-body-card">
                <div class="why-card-icon">{{ panel.icon }}</div>
                <div class="why-card-text">{{ panel.highlight }}</div>
              </div>

              <div style="margin-top: 14px; margin-bottom: 24px; border-radius: var(--radius-md); overflow: hidden; height: 210px; box-shadow: var(--shadow-sm); flex-shrink: 0;">
                <img
                  :src="panel.image"
                  :alt="panel.title"
                  :style="{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: panel.imagePosition || 'center top'
                  }"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- SECCIÓN DE CATÁLOGO DE CURSOS CON PESTAÑAS Y MODAL DE TEMARIO -->
    <section class="section-courses" id="cursos">
      <div class="container">
        
        <h2 class="primary-title">Cursos Especializados para <span class="subtitle-underline">Cada Etapa</span></h2>
        <p class="primary-subtitle">
          Explora nuestros programas diseñados a la medida para adultos que buscan acelerar su carrera, adolescentes apasionados por crear tecnología y niños dando sus primeros pasos lógicos.
        </p>

        <!-- Filtros de Pestaña -->
        <div class="courses-filter-bar">
          <button
            type="button"
            :class="['course-filter-btn', { active: activeCategory === 'todos' }]"
            @click="setCategory('todos')"
          >
            Todos los Cursos
          </button>
          <button
            type="button"
            :class="['course-filter-btn', { active: activeCategory === 'adultos' }]"
            @click="setCategory('adultos')"
          >
            🎓 Adultos (Profesionales)
          </button>
          <button
            type="button"
            :class="['course-filter-btn', { active: activeCategory === 'adolescentes' }]"
            @click="setCategory('adolescentes')"
          >
            🚀 Adolescentes (12-17 años)
          </button>
          <button
            type="button"
            :class="['course-filter-btn', { active: activeCategory === 'ninos' }]"
            @click="setCategory('ninos')"
          >
            🤖 Niños (7-11 años)
          </button>
        </div>

        <!-- Cuadrícula de Tarjetas de Curso -->
        <div class="courses-grid">
          <div
            v-for="course in filteredCourses"
            :key="course.id"
            class="course-card"
          >
            <div class="course-card-thumb">
              <img :src="course.image" :alt="course.title" />
              <span class="course-target-tag">{{ course.categoryLabel }}</span>
              <span class="course-modality-badge">{{ course.badge }}</span>
            </div>

            <div class="course-card-content">
              <div class="course-code">{{ course.code }}</div>
              <h3 class="course-title">{{ course.title }}</h3>
              <p class="course-desc">{{ course.description }}</p>

              <div class="course-features-list">
                <div class="course-feature-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Modalidad: {{ course.modality }}</span>
                </div>
                <div class="course-feature-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Certificación Oficial CENSITEC</span>
                </div>
              </div>

              <div class="course-card-footer">
                <div class="course-duration">
                  <span class="duration-label">Duración</span>
                  <span class="duration-val">{{ course.hours }}</span>
                </div>
                <button
                  class="btn-course-details"
                  @click="openCourseModal(course)"
                >
                  Ver Temario →
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- MODAL DE TEMARIO COMPLETO DEL CURSO -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeCourseModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close-btn" @click="closeCourseModal" aria-label="Cerrar">&times;</button>
        
        <span class="modal-tag">{{ selectedCourse?.categoryLabel }}</span>
        <h3 class="modal-title">{{ selectedCourse?.title }}</h3>
        
        <div class="modal-info-row">
          <div><strong>Código:</strong> {{ selectedCourse?.code }}</div>
          <div><strong>Duración:</strong> {{ selectedCourse?.hours }}</div>
          <div><strong>Modalidad:</strong> {{ selectedCourse?.modality }}</div>
        </div>

        <h4 style="margin: 18px 0 10px; color: var(--c-secondary);">Plan Curricular del Curso:</h4>
        <div class="syllabus-list">
          <div
            v-for="(item, index) in selectedCourse?.syllabus"
            :key="index"
            class="syllabus-item"
          >
            <div class="syllabus-item-num">{{ index + 1 }}</div>
            <div class="syllabus-item-text">{{ item }}</div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--c-border-light);">
          <span style="font-size:0.88rem;color:var(--c-text-muted);">¿Listo para inscribirte en este programa?</span>
          <router-link
            to="/#formulario-inscripcion"
            class="btn-header-cta"
            @click="closeCourseModal"
          >
            Inscribirme Ahora
          </router-link>
        </div>
      </div>
    </div>

    <!-- SECCIÓN COMPARATIVA DE MODALIDADES (PRESENCIAL VS VIRTUAL) -->
    <section class="section-modality" id="modalidad">
      <div class="container">
        
        <h2 class="primary-title">Flexibilidad Total: <span class="subtitle-underline">Presencial y Virtual</span></h2>
        <p class="primary-subtitle">
          Ambas modalidades cuentan con la misma exigencia académica, docentes de primer nivel y certificación oficial reconocida nacionalmente.
        </p>

        <div class="modality-container">
          
          <!-- Modalidad Presencial -->
          <div class="modality-card">
            <div class="modality-card-thumb">
              <img src="/images/modalidad-presencial.jpg" alt="Laboratorio presencial CENSITEC" />
              <span class="modality-floating-badge">Sedes Físicas</span>
            </div>
            <div class="modality-card-body">
              <h3 class="modality-card-title">Modalidad Presencial</h3>
              <p class="modality-card-desc">
                Ideal para quienes valoran la interacción cara a cara y el trabajo directo con hardware, robots físicos e infraestructura de laboratorio.
              </p>
              <div class="modality-perks-list">
                <div class="modality-perk">
                  <span class="perk-check">✓</span>
                  <span>Laboratorios climatizados con computadoras individuales</span>
                </div>
                <div class="modality-perk">
                  <span class="perk-check">✓</span>
                  <span>Prácticas en bancos reales con Arduino, sensores y circuitos</span>
                </div>
                <div class="modality-perk">
                  <span class="perk-check">✓</span>
                  <span>Trabajo en equipo, networking e integración estudiantil</span>
                </div>
                <div class="modality-perk">
                  <span class="perk-check">✓</span>
                  <span>Asistencia personalizada de profesores en taller</span>
                </div>
              </div>
              <router-link to="/modalidad/presencial" class="btn-modality-action">
                Ver Sedes y Horarios →
              </router-link>
            </div>
          </div>

          <!-- Modalidad Virtual -->
          <div class="modality-card">
            <div class="modality-card-thumb">
              <img src="/images/modalidad-virtual.jpg" alt="Estudiante en campus virtual CENSITEC" />
              <span class="modality-floating-badge">Campus Cloud 24/7</span>
            </div>
            <div class="modality-card-body">
              <h3 class="modality-card-title">Modalidad Virtual</h3>
              <p class="modality-card-desc">
                Aprende desde la comodidad de tu hogar o lugar de trabajo con acceso permanente a nuestra plataforma LMS de última generación.
              </p>
              <div class="modality-perks-list">
                <div class="modality-perk">
                  <span class="perk-check">✓</span>
                  <span>Clases en vivo por streaming HD con interacción directa</span>
                </div>
                <div class="modality-perk">
                  <span class="perk-check">✓</span>
                  <span>Grabaciones de todas las sesiones disponibles 24/7</span>
                </div>
                <div class="modality-perk">
                  <span class="perk-check">✓</span>
                  <span>Laboratorios en la nube sin instalaciones complejas</span>
                </div>
                <div class="modality-perk">
                  <span class="perk-check">✓</span>
                  <span>Foros de debate y consultas directas al docente</span>
                </div>
              </div>
              <router-link to="/modalidad/virtual" class="btn-modality-action">
                Explorar Campus Virtual →
              </router-link>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- CUERPO DOCENTE DESTACADO (PROFESORES) -->
    <section class="section-faculty">
      <div class="container">
        
        <h2 class="primary-title">Docentes <span class="subtitle-underline">Especialistas e Investigadores</span></h2>
        <p class="primary-subtitle">
          Profesionales en constante ejercicio en empresas tecnológicas que transmiten conocimientos actualizados y metodologías prácticas.
        </p>

        <div class="faculty-grid">
          <div class="faculty-card">
            <div class="faculty-avatar-wrap">
              <img src="/images/profesor-carlos.jpg" alt="Ing. Carlos Mendoza" class="faculty-avatar" />
            </div>
            <h3 class="faculty-name">Ing. Carlos Mendoza</h3>
            <div class="faculty-role">Robótica & Mecatrónica</div>
            <p class="faculty-bio">
              Ingeniero Mecatrónico egresado de la UNI con más de 12 años liderando proyectos de automatización e IoT.
            </p>
            <div class="faculty-skills">
              <span class="skill-tag">Arduino</span>
              <span class="skill-tag">PLC</span>
              <span class="skill-tag">IoT</span>
            </div>
          </div>

          <div class="faculty-card">
            <div class="faculty-avatar-wrap">
              <img src="/images/profesora-elena.jpg" alt="Mg. Elena Vásquez" class="faculty-avatar" />
            </div>
            <h3 class="faculty-name">Mg. Elena Vásquez</h3>
            <div class="faculty-role">Arquitectura Web & Cloud</div>
            <p class="faculty-bio">
              Consultora de tecnologías web en el sector fintech. Especialista en Vue.js, Node.js y cloud computing.
            </p>
            <div class="faculty-skills">
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">Node</span>
              <span class="skill-tag">AWS</span>
            </div>
          </div>

          <div class="faculty-card">
            <div class="faculty-avatar-wrap">
              <img src="/images/profesor-carlos.jpg" alt="Ing. Roberto Silva" class="faculty-avatar" />
            </div>
            <h3 class="faculty-name">Ing. Roberto Silva</h3>
            <div class="faculty-role">Automatización Industrial</div>
            <p class="faculty-bio">
              Especialista en líneas de manufactura 4.0, protocolos SCADA y programación de controladores lógicos.
            </p>
            <div class="faculty-skills">
              <span class="skill-tag">Siemens</span>
              <span class="skill-tag">SCADA</span>
              <span class="skill-tag">Ladder</span>
            </div>
          </div>

          <div class="faculty-card">
            <div class="faculty-avatar-wrap">
              <img src="/images/profesora-elena.jpg" alt="Lic. Andrea Morales" class="faculty-avatar" />
            </div>
            <h3 class="faculty-name">Lic. Andrea Morales</h3>
            <div class="faculty-role">Pedagogía STEAM & Kids</div>
            <p class="faculty-bio">
              Educadora especializada en robótica educativa lúdica y desarrollo del pensamiento algorítmico infantil.
            </p>
            <div class="faculty-skills">
              <span class="skill-tag">STEAM</span>
              <span class="skill-tag">Scratch</span>
              <span class="skill-tag">Kids</span>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:36px;">
          <router-link to="/profesores" class="btn-secondary">
            Conoce a Todo el Cuerpo Docente de CENSITEC →
          </router-link>
        </div>

      </div>
    </section>

    <!-- PREGUNTAS FRECUENTES (FAQ) -->
    <section class="section-faq" id="faq">
      <div class="container">
        
        <h2 class="primary-title">Preguntas <span class="subtitle-underline">Frecuentes</span></h2>
        <p class="primary-subtitle">
          Todo lo que necesitas saber antes de iniciar tu preparación en CENSITEC.
        </p>

        <div class="faq-wrapper">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            :class="['faq-item', { active: activeFaqIndex === index }]"
          >
            <div class="faq-header" @click="toggleFaq(index)">
              <span class="faq-question">{{ faq.question }}</span>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-body">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- BANNER FINAL DE LLAMADO A LA ACCIÓN (CTA BANNER TIPO OPEN ENGLISH) -->
    <section class="section-cta-banner">
      <div class="container">
        <div class="cta-banner-box">
          <div class="cta-banner-text">
            <span class="cta-badge">Ciclo 2026-II</span>
            <h2 class="cta-title">
              ¿Listo para Impulsar tu Futuro en la Ciencia y Tecnología?
            </h2>
            <p class="cta-desc">
              Aprovecha los descuentos de hasta 50% por aniversario institucional. Reserva tu vacante hoy mismo y da el primer paso hacia tu crecimiento profesional.
            </p>
          </div>
          <router-link to="/#formulario-inscripcion" class="cta-btn-action">
            ¡Inscríbete Hoy en Línea! →
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>
