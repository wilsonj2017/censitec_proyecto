<script setup>
const facilities = [
  {
    title: 'Laboratorios de Computación Avanzada',
    icon: '💻',
    desc: 'Equipos con procesadores de última generación, tarjetas gráficas dedicadas, pantallas IPS y software profesional preconfigurado (IDEs, Docker, Unity, emuladores).'
  },
  {
    title: 'Talleres de Robótica y Prototipado',
    icon: '🤖',
    desc: 'Mesas de trabajo electroestáticas, estaciones de soldadura segura, osciloscopios digitales, microcontroladores y bancos de prueba para proyectos móviles.'
  },
  {
    title: 'Laboratorio de Redes y Telecomunicaciones',
    icon: '🌐',
    desc: 'Racks de telecomunicaciones con routers y switches administrables Cisco para prácticas reales de cableado estructurado, subnetting y enrutamiento.'
  },
  {
    title: 'Áreas de Networking y Coworking',
    icon: '☕',
    desc: 'Espacios cómodos diseñados para el trabajo colaborativo en equipo, preparación de hackathons y socialización entre estudiantes e instructores.'
  }
]

const sedes = [
  {
    name: 'Sede Central - Tecnológica',
    address: 'Av. Universitaria 1420, Lima',
    hours: 'Lunes a Viernes: 8:00 am - 9:30 pm | Sábados y Domingos: 8:00 am - 6:00 pm',
    phone: '(01) 800-CENSITEC',
    highlight: 'Sede principal de Cómputo, IA y Ciberseguridad'
  },
  {
    name: 'Sede Talleres & Robótica STEAM',
    address: 'Jr. Los Ingenieros 380, San Isidro, Lima',
    hours: 'Lunes a Sábado: 8:30 am - 7:00 pm',
    phone: '(01) 800-236-7484',
    highlight: 'Especializada en Robótica Kids, Teens y Automatización PLC'
  }
]
</script>

<template>
  <div class="presencial-page">

    <!-- Encabezado de Página -->
    <header class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Ruta de navegación">
          <router-link to="/">Inicio</router-link>
          <span>/</span>
          <router-link to="/modalidad/presencial">Modalidad</router-link>
          <span>/</span>
          <span>Presencial</span>
        </nav>
        <span class="subheading-pill" style="background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.3);">
          Campus y Laboratorios Físicos
        </span>
        <h1 class="page-hero-title">Modalidad Presencial</h1>
        <p class="page-hero-sub">
          Aprende practicando directamente con hardware real, sensores y estaciones de alto rendimiento. Interacción humana cercana y asesoría continua de docentes en aula.
        </p>
      </div>
    </header>

    <!-- Showcase con Foto Principal -->
    <section class="section-padding">
      <div class="container">
        <div class="presencial-showcase-grid">
          <div>
            <span class="subheading-pill">Infraestructura de Primer Nivel</span>
            <h2 class="section-heading">Espacios Diseñados para la Innovación Práctica</h2>
            <p style="font-size:1.05rem;color:var(--c-text);line-height:1.65;margin-bottom:20px;">
              En CENSITEC creemos que la verdadera destreza técnica se forja manipulando componentes reales. Nuestras aulas y laboratorios están concebidos para replicar el ambiente de desarrollo que encontrarás en la industria.
            </p>
            <ul class="presencial-points-list">
              <li>
                <span class="check-box">✓</span>
                <div>
                  <strong>Una computadora y kit robótico por estudiante:</strong>
                  Garantizamos que trabajes de forma individual con tu propio equipo sin compartir banco.
                </div>
              </li>
              <li>
                <span class="check-box">✓</span>
                <div>
                  <strong>Docente y asistente de laboratorio permanente:</strong>
                  Resolución inmediata de errores de código o conexiones electrónicas in situ.
                </div>
              </li>
              <li>
                <span class="check-box">✓</span>
                <div>
                  <strong>Ambientes climatizados y fibra óptica simétrica:</strong>
                  Confort térmico y descargas ultrarrápidas de paquetes, contenedores y librerías.
                </div>
              </li>
            </ul>
          </div>

          <div class="presencial-img-wrapper">
            <img src="/images/modalidad-presencial.jpg" alt="Laboratorio moderno CENSITEC" class="presencial-main-img" />
            <div class="presencial-stat-card">
              <span class="stat-number-white">100%</span>
              <span class="stat-label-white">Práctica en bancos de prueba reales</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cuadrícula de Instalaciones -->
    <section class="section-padding" style="background:var(--c-surface-blue);">
      <div class="container">
        <div class="section-title-wrap">
          <h2 class="section-heading">Nuestras Instalaciones y Equipamiento</h2>
          <p class="section-subtext">Tecnología de punta disponible para tu aprendizaje desde el primer día de clases.</p>
        </div>

        <div class="facilities-grid">
          <div v-for="(fac, index) in facilities" :key="index" class="facility-card">
            <div class="facility-icon">{{ fac.icon }}</div>
            <h3 class="facility-title">{{ fac.title }}</h3>
            <p class="facility-desc">{{ fac.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nuestras Sedes Físicas -->
    <section class="section-padding">
      <div class="container">
        <div class="section-title-wrap">
          <h2 class="section-heading">Nuestras Sedes</h2>
          <p class="section-subtext">Ubicaciones céntricas con fácil acceso a transporte público y estacionamiento.</p>
        </div>

        <div class="sedes-grid">
          <div v-for="(sede, index) in sedes" :key="index" class="sede-card">
            <div class="sede-tag">{{ sede.highlight }}</div>
            <h3 class="sede-name">{{ sede.name }}</h3>
            <p class="sede-address">📍 {{ sede.address }}</p>
            <p class="sede-hours">🕒 {{ sede.hours }}</p>
            <p class="sede-phone">📞 {{ sede.phone }}</p>
            <router-link to="/contacto" class="btn-secondary" style="margin-top:14px;display:inline-block;">
              Agendar Visita Guiada →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-banner-section">
      <div class="container cta-banner-box">
        <div class="cta-banner-content">
          <h2 class="cta-banner-title">¿Listo para Vivir la Experiencia Presencial en CENSITEC?</h2>
          <p class="cta-banner-sub">Las vacantes presenciales son estrictamente limitadas a la capacidad de nuestros laboratorios.</p>
          <div class="cta-banner-btns">
            <router-link to="/#formulario-inscripcion" class="btn-banner-primary">Asegurar mi Vacante →</router-link>
            <router-link to="/modalidad/virtual" class="btn-banner-secondary">Ver Modalidad Virtual</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.presencial-showcase-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 48px;
  align-items: center;
}

.presencial-points-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.presencial-points-list li {
  display: flex;
  gap: 14px;
}

.check-box {
  width: 24px;
  height: 24px;
  background: var(--c-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.presencial-points-list strong {
  display: block;
  color: var(--c-navy);
  font-size: 1rem;
  margin-bottom: 2px;
}

.presencial-img-wrapper {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.presencial-main-img {
  width: 100%;
  height: 100%;
  max-height: 440px;
  object-fit: cover;
  display: block;
}

.presencial-stat-card {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(15, 52, 96, 0.95);
  padding: 16px 20px;
  border-radius: var(--radius-md);
  border-left: 4px solid var(--c-primary);
  backdrop-filter: blur(8px);
}

.stat-number-white {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: white;
  font-family: var(--font-display);
  line-height: 1;
}

.stat-label-white {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.82rem;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.facility-card {
  background: white;
  padding: 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
}

.facility-icon {
  font-size: 2.2rem;
  margin-bottom: 12px;
}

.facility-title {
  font-size: 1.15rem;
  color: var(--c-navy);
  margin-bottom: 8px;
}

.facility-desc {
  font-size: 0.9rem;
  color: var(--c-text);
  line-height: 1.6;
  margin: 0;
}

.sedes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
}

.sede-card {
  background: white;
  padding: 32px;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
  position: relative;
}

.sede-tag {
  display: inline-block;
  background: var(--c-surface-blue);
  color: var(--c-primary);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 14px;
}

.sede-name {
  font-size: 1.35rem;
  color: var(--c-navy);
  margin-bottom: 12px;
}

.sede-address, .sede-hours, .sede-phone {
  font-size: 0.92rem;
  color: var(--c-text);
  margin-bottom: 8px;
}

@media (max-width: 900px) {
  .presencial-showcase-grid {
    grid-template-columns: 1fr;
  }
}
</style>
