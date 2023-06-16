import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/waltuh',
      name: 'waltuh',
      component: () => import('../views/Waltuh.vue')
    },
    {
      path: '/character-sheet',
      name: 'character-sheet',
      component: () => import('../views/character-sheet.vue')
    }
  ]
})

export default router
