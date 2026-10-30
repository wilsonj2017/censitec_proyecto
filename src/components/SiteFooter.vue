<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">

        <!-- Columna Marca -->
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:12px;">
            <img src="/images/logo-cencitec.png" alt="Escudo CENSITEC" class="brand-crest" style="height:56px;">
            <div>
              <div style="font-family:var(--font-display);font-size:1.4rem;font-weight:800;letter-spacing:-0.02em;">
                CENSITEC <span style="color:var(--c-primary);font-size:0.9rem;">1990</span>
              </div>
              <small style="color:rgba(255,255,255,0.7);font-size:0.75rem;">Instituto de Ciencia y Tecnología</small>
            </div>
          </div>
          <p class="footer-slogan">
            "Ciencia y Tecnología para el Desarrollo de la Humanidad". Más de 35 años capacitando a profesionales líderes en innovación y progreso.
          </p>
          <div class="footer-socials">
            <a href="https://facebook.com" class="social-btn" aria-label="Facebook" target="_blank" rel="noopener">f</a>
            <a href="https://instagram.com" class="social-btn" aria-label="Instagram" target="_blank" rel="noopener">ig</a>
            <a href="https://linkedin.com" class="social-btn" aria-label="LinkedIn" target="_blank" rel="noopener">in</a>
            <a href="https://youtube.com" class="social-btn" aria-label="YouTube" target="_blank" rel="noopener">&#9654;</a>
          </div>
        </div>

        <!-- Columna 1: Cursos -->
        <div>
          <h4 class="footer-col-title">Nuestros Cursos</h4>
          <ul class="footer-links">
            <li><router-link to="/cursos/adultos" class="footer-link">Cursos para Adultos</router-link></li>
            <li><router-link to="/cursos/adolescentes" class="footer-link">Cursos para Adolescentes</router-link></li>
            <li><router-link to="/cursos/ninos" class="footer-link">Cursos para Niños</router-link></li>
            <li><router-link to="/cursos/adultos" class="footer-link">Desarrollo Web & IA</router-link></li>
            <li><router-link to="/cursos/adultos" class="footer-link">Automatización Industrial</router-link></li>
            <li><router-link to="/cursos/adolescentes" class="footer-link">Robótica con Arduino</router-link></li>
          </ul>
        </div>

        <!-- Columna 2: Modalidad e Institucional -->
        <div>
          <h4 class="footer-col-title">Institucional</h4>
          <ul class="footer-links">
            <li><router-link to="/quienes-somos" class="footer-link">Quiénes somos</router-link></li>
            <li><router-link to="/profesores" class="footer-link">Cuerpo Docente</router-link></li>
            <li><router-link to="/modalidad/presencial" class="footer-link">Modalidad Presencial</router-link></li>
            <li><router-link to="/modalidad/virtual" class="footer-link">Modalidad Virtual</router-link></li>
            <li><router-link to="/contacto" class="footer-link">Sedes y Laboratorios</router-link></li>
          </ul>
        </div>

        <!-- Columna 3: Atención -->
        <div>
          <h4 class="footer-col-title">Atención & Ayuda</h4>
          <ul class="footer-links">
            <li><router-link to="/contacto" class="footer-link">Formulario de Contacto</router-link></li>
            <li><a href="tel:+18002367483" class="footer-link">(01) 800-CENSITEC</a></li>
            <li><a href="mailto:admisiones@cencitec.edu" class="footer-link">admisiones@cencitec.edu</a></li>
            <li><router-link to="/modalidad/virtual" class="footer-link">Acceso Campus Virtual</router-link></li>
            <li><router-link to="/#faq" class="footer-link">Preguntas Frecuentes</router-link></li>
          </ul>
        </div>

      </div>

      <!-- Pie Inferior -->
      <div class="footer-bottom">
        <div>
          &copy; 1990 - 2026 CENSITEC. Todos los derechos reservados. "Ciencia y Tecnología para el Desarrollo de la Humanidad".
        </div>
        <div class="footer-legal-links">
          <a href="#">Términos y Condiciones</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Libro de Reclamaciones</a>
        </div>
      </div>
    </div>
  </footer>
</template>
