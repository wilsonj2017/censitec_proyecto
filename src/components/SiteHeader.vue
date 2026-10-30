<script setup>
import { ref } from 'vue'

const isDrawerOpen = ref(false)

function toggleDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value
}

function closeDrawer() {
  isDrawerOpen.value = false
}
</script>

<template>
  <header class="site-header" id="siteHeader">
    <div class="container">

      <!-- Logo CENSITEC -->
      <router-link to="/" class="brand-logo" aria-label="Inicio CENSITEC" @click="closeDrawer">
        <img src="/images/logo-cencitec.png" alt="Escudo CENSITEC 1990" class="brand-crest" />
        <div class="brand-info">
          <div class="brand-name">
            CENSITEC <span class="brand-year">1990</span>
          </div>
          <span class="brand-slogan">Ciencia y Tecnología para el Desarrollo de la Humanidad</span>
        </div>
      </router-link>

      <!-- Menú de Navegación Principal -->
      <nav class="nav-menu" aria-label="Menú principal">
        <div class="nav-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
        </div>

        <!-- 1. Quienes somos -->
        <div class="nav-item">
          <router-link to="/quienes-somos" class="nav-link">Quiénes somos</router-link>
        </div>

        <!-- 2. Nuestros cursos -->
        <div class="nav-item">
          <span class="nav-link">
            <span>Nuestros cursos</span>
            <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
          </span>
          <div class="dropdown-menu">
            <router-link to="/cursos/adultos" class="dropdown-link">
              <div class="dropdown-icon">🎓</div>
              <div class="dropdown-text">
                <strong>Adultos</strong>
                <small>Programación, IA, Ciberseguridad & Robótica</small>
              </div>
            </router-link>
            <router-link to="/cursos/adolescentes" class="dropdown-link">
              <div class="dropdown-icon">🚀</div>
              <div class="dropdown-text">
                <strong>Adolescente</strong>
                <small>Robótica Arduino, Videojuegos y Tecnologías</small>
              </div>
            </router-link>
            <router-link to="/cursos/ninos" class="dropdown-link">
              <div class="dropdown-icon">🤖</div>
              <div class="dropdown-text">
                <strong>Niños</strong>
                <small>Robótica Kids, Scratch y Creatividad Digital</small>
              </div>
            </router-link>
          </div>
        </div>

        <!-- 3. Profesores -->
        <div class="nav-item">
          <router-link to="/profesores" class="nav-link">Profesores</router-link>
        </div>

        <!-- 4. Modalidad -->
        <div class="nav-item">
          <span class="nav-link">
            <span>Modalidad</span>
            <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
          </span>
          <div class="dropdown-menu">
            <router-link to="/modalidad/presencial" class="dropdown-link">
              <div class="dropdown-icon">🏛️</div>
              <div class="dropdown-text">
                <strong>Presencial</strong>
                <small>Laboratorios modernos equipados y talleres</small>
              </div>
            </router-link>
            <router-link to="/modalidad/virtual" class="dropdown-link">
              <div class="dropdown-icon">💻</div>
              <div class="dropdown-text">
                <strong>Virtual</strong>
                <small>Plataforma LMS 24/7 y clases en vivo</small>
              </div>
            </router-link>
          </div>
        </div>

        <!-- 5. Contacto -->
        <div class="nav-item">
          <router-link to="/contacto" class="nav-link">Contacto</router-link>
        </div>
      </nav>

      <!-- Botón de Acción Directa (Alargado, sin engrosar) -->
      <div class="header-actions">
        <router-link to="/#formulario-inscripcion" class="btn-header-cta">
          <span>¡Inscríbete Hoy!</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </router-link>

        <!-- Botón Móvil Hamburguesa -->
        <button class="menu-toggle" aria-label="Abrir menú" @click="toggleDrawer">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

    </div>
  </header>

  <!-- Menú Móvil Lateral (Drawer) -->
  <div :class="['mobile-backdrop', { open: isDrawerOpen }]" @click="closeDrawer"></div>
  <aside :class="['mobile-drawer', { open: isDrawerOpen }]" aria-label="Menú móvil">
    <div class="mobile-drawer-header">
      <div class="brand-name" style="font-size: 1.2rem;">CENSITEC <span class="brand-year">1990</span></div>
      <button class="mobile-close-btn" aria-label="Cerrar menú" @click="closeDrawer">&times;</button>
    </div>
    <ul class="mobile-nav-list">
      <li><router-link to="/" class="mobile-nav-link" @click="closeDrawer">Inicio</router-link></li>
      <li><router-link to="/quienes-somos" class="mobile-nav-link" @click="closeDrawer">Quiénes somos</router-link></li>
      <li>
        <span class="mobile-nav-link" style="color:var(--c-primary);">Nuestros cursos</span>
        <div class="mobile-submenu">
          <router-link to="/cursos/adultos" class="mobile-sublink" @click="closeDrawer">&bull; Adultos</router-link>
          <router-link to="/cursos/adolescentes" class="mobile-sublink" @click="closeDrawer">&bull; Adolescente</router-link>
          <router-link to="/cursos/ninos" class="mobile-sublink" @click="closeDrawer">&bull; Niños</router-link>
        </div>
      </li>
      <li><router-link to="/profesores" class="mobile-nav-link" @click="closeDrawer">Profesores</router-link></li>
      <li>
        <span class="mobile-nav-link" style="color:var(--c-primary);">Modalidad</span>
        <div class="mobile-submenu">
          <router-link to="/modalidad/presencial" class="mobile-sublink" @click="closeDrawer">&bull; Presencial</router-link>
          <router-link to="/modalidad/virtual" class="mobile-sublink" @click="closeDrawer">&bull; Virtual</router-link>
        </div>
      </li>
      <li><router-link to="/contacto" class="mobile-nav-link" @click="closeDrawer">Contacto</router-link></li>
      <li style="margin-top: 20px;">
        <router-link to="/#formulario-inscripcion" class="btn-header-cta mobile-drawer-cta" @click="closeDrawer">
          <span>¡Inscríbete Hoy!</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </router-link>
      </li>
    </ul>
  </aside>
</template>
