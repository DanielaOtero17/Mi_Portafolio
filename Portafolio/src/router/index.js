import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import AboutMe from '@/views/AboutMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
    {
      path: '/aboutme',
      name: 'about',
      component: AboutMe,
    },
  ],
})

export default router
