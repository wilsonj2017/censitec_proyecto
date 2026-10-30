<script setup>
import { ref } from 'vue'

const isVisible = ref(true)

function closePromo() {
  isVisible.value = false
}
</script>

<template>
  <div v-if="isVisible" class="promo-topbar" role="region" aria-label="Aviso de promoción">
    <div class="container">
      <span class="promo-badge">¡OFERTA ESPECIAL 2026!</span>
      <span><strong>HASTA 50% DE DESCUENTO</strong> en matrícula por Aniversario Institucional. Cupos limitados.</span>
      <router-link to="/#formulario-inscripcion" class="promo-btn">Quiero la oferta &rarr;</router-link>
    </div>
    <button class="promo-close" aria-label="Cerrar promoción" @click="closePromo">&times;</button>
  </div>
</template>
