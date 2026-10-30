<script setup>
const teachers = [
  {
    name: 'Ing. Carlos Mendoza',
    role: 'Coordinador de Robótica & Mecatrónica',
    image: '/images/profesor-carlos.jpg',
    specialties: ['Robótica con Arduino', 'IoT', 'Automatización'],
    experience: '12 años de experiencia profesional',
    bio: 'Ingeniero Mecatrónico egresado de la UNI con maestría en Robótica y Sistemas Autónomos. Ha dirigido proyectos de teleoperación y asesorado equipos campeones en olimpiadas de robótica juvenil.',
    certifications: ['Arduino Certified Professional', 'Certified LabVIEW Associate']
  },
  {
    name: 'Mg. Elena Vásquez',
    role: 'Líder del Área de Desarrollo de Software & Cloud',
    image: '/images/profesora-elena.jpg',
    specialties: ['Vue.js', 'Node.js', 'Cloud Architecture'],
    experience: '10 años en la industria fintech',
    bio: 'Master en Ingeniería de Software con experiencia como Tech Lead en empresas de banca y servicios en la nube. Promotora de comunidades tecnológicas y apasionada por la enseñanza práctica de Vue 3.',
    certifications: ['AWS Certified Solutions Architect', 'Scrum Alliance Certified']
  },
  {
    name: 'Ing. Roberto Silva',
    role: 'Especialista en Automatización & Control Industrial',
    image: '/images/profesor-carlos.jpg',
    specialties: ['Programación PLC', 'Sistemas SCADA', 'Neumática'],
    experience: '15 años en plantas de manufactura',
    bio: 'Ingeniero Electrónico con vasta experiencia en modernización de líneas industriales, migración a Industria 4.0 y protocolos de seguridad en plantas de procesamiento.',
    certifications: ['Siemens TIA Portal Certified', 'Rockwell Automation Specialist']
  },
  {
    name: 'Lic. Andrea Morales',
    role: 'Especialista en Pedagogía STEAM & Kids',
    image: '/images/profesora-elena.jpg',
    specialties: ['Robótica Kids', 'Scratch', 'Educación Lúdica'],
    experience: '8 años en educación STEAM',
    bio: 'Licenciada en Educación con especialización en nuevas tecnologías del aprendizaje. Diseña planes curriculares para niños que estimulan el pensamiento algorítmico y la empatía colaborativa.',
    certifications: ['Scratch Educator Network', 'Diplomado STEAM Internacional']
  }
]
</script>

<template>
  <div class="teachers-page">

    <!-- Encabezado de Página -->
    <header class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Ruta de navegación">
          <router-link to="/">Inicio</router-link>
          <span>/</span>
          <span>Profesores</span>
        </nav>
        <span class="subheading-pill" style="background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.3);">
          Cuerpo Docente de Excelencia
        </span>
        <h1 class="page-hero-title">Nuestros Profesores</h1>
        <p class="page-hero-sub">
          Aprende de ingenieros, investigadores y profesionales activos en la industria con amplia vocación pedagógica y certificaciones internacionales.
        </p>
      </div>
    </header>

    <!-- Pilares de Selección Docente -->
    <section class="section-padding" style="background:var(--c-surface-blue);">
      <div class="container">
        <div class="teacher-pillars-grid">
          <div class="pillar-card">
            <span class="pillar-icon">🏭</span>
            <h4>Experiencia Real en la Industria</h4>
            <p>Nuestros docentes trabajan activamente en empresas del sector, garantizando conocimientos aplicados y actuales.</p>
          </div>
          <div class="pillar-card">
            <span class="pillar-icon">🧑‍🏫</span>
            <h4>Metodología Práctica y Empática</h4>
            <p>Priorizamos la resolución de retos, laboratorios guiados y paciencia pedagógica para cada nivel del estudiante.</p>
          </div>
          <div class="pillar-card">
            <span class="pillar-icon">🏅</span>
            <h4>Certificaciones Internacionales</h4>
            <p>Contamos con instructores avalados por entidades globales como AWS, Cisco, Microsoft, Arduino y Scrum Alliance.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lista de Profesores -->
    <section class="section-padding">
      <div class="container">
        <div class="section-title-wrap">
          <h2 class="section-heading">Conoce a tus Mentores</h2>
          <p class="section-subtext">Profesionales dedicados a potenciar tus habilidades y guiarte paso a paso hacia el éxito.</p>
        </div>

        <div class="teachers-full-grid">
          <div v-for="(teacher, index) in teachers" :key="index" class="teacher-full-card">
            <div class="teacher-photo-col">
              <img :src="teacher.image" :alt="teacher.name" class="teacher-avatar-large" />
              <div class="experience-badge">{{ teacher.experience }}</div>
            </div>

            <div class="teacher-bio-col">
              <h3 class="teacher-card-name">{{ teacher.name }}</h3>
              <div class="teacher-card-role">{{ teacher.role }}</div>
              
              <div class="teacher-tags-row">
                <span v-for="(spec, sIdx) in teacher.specialties" :key="sIdx" class="spec-tag">
                  {{ spec }}
                </span>
              </div>

              <p class="teacher-bio-desc">{{ teacher.bio }}</p>

              <div class="certifications-box">
                <span class="cert-title">Certificaciones Destacadas:</span>
                <div class="cert-chips">
                  <span v-for="(cert, cIdx) in teacher.certifications" :key="cIdx" class="cert-chip">
                    ✓ {{ cert }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Convocatoria Docente -->
    <section class="section-padding" style="background:var(--c-surface-blue);">
      <div class="container">
        <div class="recruitment-banner">
          <div class="recruitment-content">
            <span class="subheading-pill">Trabaja con Nosotros</span>
            <h2 style="font-size:1.8rem;color:var(--c-navy);margin:12px 0;">¿Eres Profesional de la Tecnología y te Apasiona Enseñar?</h2>
            <p style="color:var(--c-text);max-width:650px;line-height:1.6;margin-bottom:20px;">
              En CENSITEC siempre estamos en búsqueda de ingenieros, científicos de datos e instructores de robótica talentosos que compartan nuestra visión humana de la educación técnica.
            </p>
            <router-link to="/contacto" class="btn-secondary">
              Postular como Docente →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-banner-section">
      <div class="container cta-banner-box">
        <div class="cta-banner-content">
          <h2 class="cta-banner-title">Aprende con los Mejores Mentores Tecnológicos</h2>
          <p class="cta-banner-sub">Inicia tu formación hoy con el respaldo y la guía cercana de nuestros docentes.</p>
          <div class="cta-banner-btns">
            <router-link to="/#formulario-inscripcion" class="btn-banner-primary">Inscribirme Hoy →</router-link>
            <router-link to="/cursos/adultos" class="btn-banner-secondary">Explorar Catálogo</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.teacher-pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.pillar-card {
  background: white;
  padding: 24px;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
}

.pillar-icon {
  font-size: 2rem;
  margin-bottom: 12px;
  display: inline-block;
}

.pillar-card h4 {
  font-size: 1.1rem;
  color: var(--c-navy);
  margin-bottom: 8px;
}

.pillar-card p {
  font-size: 0.9rem;
  color: var(--c-text-muted);
  margin: 0;
  line-height: 1.5;
}

.teachers-full-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.teacher-full-card {
  display: flex;
  background: white;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.teacher-full-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.teacher-photo-col {
  width: 200px;
  min-width: 200px;
  position: relative;
}

.teacher-avatar-large {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.experience-badge {
  position: absolute;
  bottom: 12px;
  left: 10px;
  right: 10px;
  background: rgba(15, 52, 96, 0.9);
  color: white;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  text-align: center;
  backdrop-filter: blur(4px);
}

.teacher-bio-col {
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.teacher-card-name {
  font-size: 1.25rem;
  color: var(--c-navy);
  margin-bottom: 4px;
}

.teacher-card-role {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--c-primary);
  margin-bottom: 12px;
}

.teacher-tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.spec-tag {
  background: var(--c-surface-blue);
  color: var(--c-navy);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
}

.teacher-bio-desc {
  font-size: 0.88rem;
  color: var(--c-text);
  line-height: 1.55;
  margin-bottom: 16px;
}

.certifications-box {
  margin-top: auto;
  border-top: 1px dashed var(--c-border);
  padding-top: 10px;
}

.cert-title {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--c-gray-muted);
  text-transform: uppercase;
  margin-bottom: 6px;
}

.cert-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.cert-chip {
  background: #E8F5E9;
  color: #2E7D32;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
}

.recruitment-banner {
  background: white;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  padding: 40px;
  box-shadow: var(--shadow-sm);
}

@media (max-width: 992px) {
  .teachers-full-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .teacher-full-card {
    flex-direction: column;
  }
  .teacher-photo-col {
    width: 100%;
    height: 220px;
  }
  .teacher-pillars-grid {
    grid-template-columns: 1fr;
  }
}
</style>
