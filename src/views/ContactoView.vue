<script setup>
import { ref } from 'vue'

const contactForm = ref({
  nombre: '',
  email: '',
  telefono: '',
  departamento: 'admisiones',
  mensaje: '',
  politica: true
})

const isSending = ref(false)
const formSent = ref(false)

function submitContact() {
  isSending.value = true
  setTimeout(() => {
    isSending.value = false
    formSent.value = true
  }, 800)
}

function resetForm() {
  formSent.value = false
  contactForm.value = {
    nombre: '',
    email: '',
    telefono: '',
    departamento: 'admisiones',
    mensaje: '',
    politica: true
  }
}
</script>

<template>
  <div class="contacto-page">

    <!-- Encabezado de Página -->
    <header class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Ruta de navegación">
          <router-link to="/">Inicio</router-link>
          <span>/</span>
          <span>Contacto</span>
        </nav>
        <span class="subheading-pill" style="background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.3);">
          Atención al Estudiante y Comunidad
        </span>
        <h1 class="page-hero-title">Contáctanos</h1>
        <p class="page-hero-sub">
          Estamos listos para asesorarte sobre matrículas, planes de estudio, horarios y convenios empresariales. Comunícate con nuestros asesores académicos.
        </p>
      </div>
    </header>

    <!-- Sección de Directorio y Formulario -->
    <section class="section-padding">
      <div class="container">
        <div class="contacto-grid">
          
          <!-- Columna Información de Contacto -->
          <div class="contacto-info-column">
            <span class="subheading-pill">Canales Directos</span>
            <h2 class="section-heading" style="text-align:left;margin-bottom:20px;">
              Canales de Atención CENSITEC
            </h2>
            <p style="color:var(--c-text);line-height:1.6;margin-bottom:28px;">
              Elige el canal de tu preferencia para recibir atención inmediata o resolver cualquier consulta académica o administrativa.
            </p>

            <div class="contact-cards-list">
              
              <div class="contact-card-item">
                <div class="c-card-icon">📞</div>
                <div>
                  <strong>Central Telefónica</strong>
                  <p><a href="tel:+18002367483">(01) 800-CENSITEC (236-7483)</a></p>
                  <small>Lunes a Sábado: 8:00 am - 8:00 pm</small>
                </div>
              </div>

              <div class="contact-card-item">
                <div class="c-card-icon">💬</div>
                <div>
                  <strong>WhatsApp Admisiones</strong>
                  <p><a href="https://wa.me/51999123456" target="_blank" rel="noopener">+51 999 123 456</a></p>
                  <small>Respuesta promedio en menos de 5 minutos</small>
                </div>
              </div>

              <div class="contact-card-item">
                <div class="c-card-icon">✉️</div>
                <div>
                  <strong>Correo Electrónico Oficial</strong>
                  <p><a href="mailto:admisiones@cencitec.edu">admisiones@cencitec.edu</a></p>
                  <small>Consultas corporativas: convenios@cencitec.edu</small>
                </div>
              </div>

              <div class="contact-card-item">
                <div class="c-card-icon">🏛️</div>
                <div>
                  <strong>Sede Central y Admisiones</strong>
                  <p>Av. Universitaria 1420, Lima, Perú</p>
                  <small>Atención presencial: Lun a Vie 8:00am - 8:00pm</small>
                </div>
              </div>

            </div>
          </div>

          <!-- Columna Formulario de Contacto -->
          <div class="contacto-form-column">
            <div class="lead-form-card">
              
              <div v-if="!formSent">
                <div class="form-header">
                  <span class="form-tag">Mensaje Directo</span>
                  <h3 class="form-title">Envíanos un Mensaje</h3>
                  <p class="form-subtitle">Selecciona el área que deseas contactar y te responderemos en breve.</p>
                </div>

                <form @submit.prevent="submitContact" class="lead-form">
                  <div class="form-group">
                    <label for="contact-nombre" class="form-label">
                      Nombre y Apellidos <span class="required-mark">*</span>
                    </label>
                    <input
                      id="contact-nombre"
                      v-model="contactForm.nombre"
                      type="text"
                      required
                      class="form-input"
                      placeholder="Ej. María Fernández"
                    />
                  </div>

                  <div class="form-row">
                    <div class="form-group" style="flex:1;">
                      <label for="contact-email" class="form-label">
                        Correo <span class="required-mark">*</span>
                      </label>
                      <input
                        id="contact-email"
                        v-model="contactForm.email"
                        type="email"
                        required
                        class="form-input"
                        placeholder="tu@correo.com"
                      />
                    </div>
                    <div class="form-group" style="flex:1;">
                      <label for="contact-telefono" class="form-label">
                        Teléfono <span class="required-mark">*</span>
                      </label>
                      <input
                        id="contact-telefono"
                        v-model="contactForm.telefono"
                        type="tel"
                        required
                        class="form-input"
                        placeholder="999 123 456"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="contact-depto" class="form-label">Área de Contacto</label>
                    <select id="contact-depto" v-model="contactForm.departamento" class="form-select">
                      <option value="admisiones">Admisiones y Matrículas Nuevas</option>
                      <option value="academica">Orientación Vocacional y Cursos</option>
                      <option value="lms">Soporte Campus Virtual & Alumnos</option>
                      <option value="empresas">Capacitación a Empresas y Colegios</option>
                      <option value="docente">Postulación Docente</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="contact-mensaje" class="form-label">
                      ¿En qué podemos ayudarte? <span class="required-mark">*</span>
                    </label>
                    <textarea
                      id="contact-mensaje"
                      v-model="contactForm.mensaje"
                      required
                      rows="4"
                      class="form-input"
                      placeholder="Escribe tu consulta o curso de interés..."
                    ></textarea>
                  </div>

                  <div class="form-checkbox">
                    <input type="checkbox" id="contact-politica" v-model="contactForm.politica" required />
                    <label for="contact-politica">
                      Acepto la política de protección de datos personales.
                    </label>
                  </div>

                  <button type="submit" class="btn-form-submit" :disabled="isSending">
                    <span v-if="!isSending">Enviar Mensaje a CENSITEC →</span>
                    <span v-else>Enviando mensaje...</span>
                  </button>
                </form>
              </div>

              <!-- Pantalla de Éxito -->
              <div v-else class="form-success-box">
                <div class="success-icon">✉️</div>
                <h3>¡Mensaje Enviado con Éxito!</h3>
                <p>
                  Gracias por escribirnos, <strong>{{ contactForm.nombre }}</strong>. Tu consulta ha sido derivada al departamento de <strong>{{ contactForm.departamento }}</strong>. Te responderemos al correo {{ contactForm.email }} en las próximas 2 horas hábiles.
                </p>
                <button class="btn-secondary" @click="resetForm" style="margin-top:16px;">
                  Enviar otro mensaje
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Mapa / Ubicación de Sede Central -->
    <section class="section-padding" style="background:var(--c-surface-blue);padding-top:40px;">
      <div class="container">
        <div class="section-title-wrap">
          <h2 class="section-heading">Visítanos en Nuestra Sede Central</h2>
          <p class="section-subtext">Atención personalizada y recorrido por nuestros laboratorios de robótica y cómputo.</p>
        </div>

        <div class="map-card-box">
          <div class="map-placeholder">
            <div class="map-marker-pin">📍</div>
            <h3 style="color:var(--c-navy);margin:8px 0 4px;">CENSITEC - Sede Central Tecnológica</h3>
            <p style="color:var(--c-gray-muted);font-size:0.9rem;margin:0;">Av. Universitaria 1420, Lima, Perú</p>
            <div style="margin-top:16px;">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener"
                class="btn-secondary"
                style="display:inline-block;"
              >
                Abrir en Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.contacto-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 48px;
  align-items: start;
}

.contact-cards-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-card-item {
  display: flex;
  gap: 16px;
  background: white;
  padding: 20px;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
  align-items: flex-start;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.contact-card-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: rgba(0, 142, 224, 0.3);
}

.c-card-icon {
  font-size: 1.8rem;
  background: var(--c-surface-blue);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.contact-card-item strong {
  display: block;
  font-size: 1.05rem;
  color: var(--c-navy);
  margin-bottom: 2px;
}

.contact-card-item p {
  margin: 0 0 4px;
  font-size: 0.95rem;
  color: var(--c-text);
}

.contact-card-item a {
  color: var(--c-primary);
  text-decoration: none;
  font-weight: 600;
}

.contact-card-item a:hover {
  text-decoration: underline;
}

.contact-card-item small {
  color: var(--c-gray-muted);
  font-size: 0.8rem;
}

/* Card del Formulario de Contacto */
.lead-form-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 36px;
  border: 1px solid var(--c-border);
  box-shadow: 0 20px 45px -10px rgba(15, 52, 96, 0.12), 0 4px 16px rgba(0, 142, 224, 0.06);
  position: relative;
  overflow: hidden;
}

.lead-form-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--grad-red);
}

.form-header {
  text-align: center;
  margin-bottom: 26px;
}

.form-tag {
  display: inline-block;
  background: var(--c-primary-light);
  color: var(--c-primary);
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding: 5px 14px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(0, 142, 224, 0.2);
  margin-bottom: 10px;
}

.form-title {
  font-size: 1.75rem;
  color: var(--c-navy);
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 6px;
}

.form-subtitle {
  font-size: 0.92rem;
  color: var(--c-text-muted);
  line-height: 1.5;
  margin: 0;
}

.lead-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  display: flex;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--c-navy);
  display: flex;
  align-items: center;
  gap: 3px;
}

.required-mark {
  color: var(--c-accent-red);
  font-weight: 800;
}

.form-input,
.form-select {
  width: 100%;
  padding: 13px 16px;
  border-radius: 10px;
  border: 1.5px solid #dbe2ea;
  background-color: #f8fafc;
  font-size: 0.93rem;
  font-family: inherit;
  color: var(--c-text-heading);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast);
  box-sizing: border-box;
}

.form-input:focus,
.form-select:focus {
  background-color: #ffffff;
  border-color: var(--c-primary);
  outline: none;
  box-shadow: 0 0 0 4px rgba(0, 142, 224, 0.15);
}

.form-input::placeholder {
  color: #94a3b8;
}

.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23008ee0' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 40px;
  cursor: pointer;
}

textarea.form-input {
  min-height: 120px;
  resize: vertical;
  line-height: 1.5;
}

.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 2px 0 6px;
}

.form-checkbox input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--c-primary);
  margin-top: 2px;
  cursor: pointer;
  flex-shrink: 0;
}

.form-checkbox label {
  font-size: 0.85rem;
  color: var(--c-text);
  line-height: 1.45;
  cursor: pointer;
}

.btn-form-submit {
  width: 100%;
  background: var(--grad-red);
  color: #ffffff;
  padding: 15px 24px;
  border-radius: var(--radius-pill);
  font-weight: 800;
  font-size: 1.02rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 8px 20px rgba(217, 37, 38, 0.35);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
  letter-spacing: 0.2px;
  margin-top: 4px;
}

.btn-form-submit:hover:not(:disabled) {
  background: var(--c-accent-red-hover);
  transform: translateY(-2px);
  box-shadow: 0 12px 26px rgba(217, 37, 38, 0.45);
}

.btn-form-submit:active:not(:disabled) {
  transform: translateY(0);
}

.btn-form-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-success-box {
  text-align: center;
  padding: 30px 10px;
}

.form-success-box .success-icon {
  font-size: 3.5rem;
  margin-bottom: 16px;
}

.form-success-box h3 {
  color: var(--c-navy);
  font-size: 1.4rem;
  margin-bottom: 12px;
  font-weight: 800;
}

.form-success-box p {
  color: var(--c-text);
  font-size: 0.95rem;
  line-height: 1.6;
}

.map-card-box {
  background: white;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-sm);
  padding: 48px 24px;
  text-align: center;
}

.map-marker-pin {
  font-size: 3rem;
  animation: bounce 2s infinite ease-in-out;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@media (max-width: 900px) {
  .contacto-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .lead-form-card {
    padding: 28px 20px;
  }
  .form-row {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
