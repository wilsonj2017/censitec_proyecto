<template>
  <div class="global-top-nav">
    <div class="container">
      <div class="segment-tabs">
        <router-link to="/cursos/adultos" class="segment-tab">Adultos</router-link>
        <router-link to="/cursos/adolescentes" class="segment-tab">Adolescentes</router-link>
        <router-link to="/cursos/ninos" class="segment-tab">Niños</router-link>
        <router-link to="/modalidad/presencial" class="segment-tab">Presencial</router-link>
        <router-link to="/modalidad/virtual" class="segment-tab">Virtual</router-link>
      </div>
      <div class="top-nav-right">
        <a href="tel:+18002367483" class="top-phone-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>(01) 800-CENSITEC</span>
        </a>
        <router-link to="/modalidad/virtual" class="top-campus-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>
          </svg>
          <span>Campus Virtual</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
