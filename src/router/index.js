import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuienesSomosView from '../views/QuienesSomosView.vue'
import CursosAdultosView from '../views/CursosAdultosView.vue'
import CursosAdolescentesView from '../views/CursosAdolescentesView.vue'
import CursosNinosView from '../views/CursosNinosView.vue'
import ProfesoresView from '../views/ProfesoresView.vue'
import ModalidadPresencialView from '../views/ModalidadPresencialView.vue'
import ModalidadVirtualView from '../views/ModalidadVirtualView.vue'
import ContactoView from '../views/ContactoView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/quienes-somos', name: 'quienes-somos', component: QuienesSomosView },
  { path: '/cursos/adultos', name: 'cursos-adultos', component: CursosAdultosView },
  { path: '/cursos/adolescentes', name: 'cursos-adolescentes', component: CursosAdolescentesView },
  { path: '/cursos/ninos', name: 'cursos-ninos', component: CursosNinosView },
  { path: '/profesores', name: 'profesores', component: ProfesoresView },
  { path: '/modalidad/presencial', name: 'modalidad-presencial', component: ModalidadPresencialView },
  { path: '/modalidad/virtual', name: 'modalidad-virtual', component: ModalidadVirtualView },
  { path: '/contacto', name: 'contacto', component: ContactoView },
  // Redirecciones amigables
  { path: '/cursos', redirect: '/cursos/adultos' },
  { path: '/modalidad', redirect: '/modalidad/presencial' },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 90 }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
