<script setup>
import PromoTopBar from './components/PromoTopBar.vue'
import GlobalTopNav from './components/GlobalTopNav.vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
</script>

<template>
  <div class="cencitec-app">
    <!-- Barra promocional superior -->
    <PromoTopBar />

    <!-- Barra de acceso rápido y switch de sedes -->
    <GlobalTopNav />

    <!-- Encabezado con logo oficial, navegación y CTA -->
    <SiteHeader />

    <!-- Vistas dinámicas del Router -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer institucional completo -->
    <SiteFooter />

    <!-- Botón flotante WhatsApp -->
    <WhatsAppFloat />
  </div>
</template>

<style>
/* Reset de layout principal para asegurar sticky footer si fuera necesario */
.cencitec-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
