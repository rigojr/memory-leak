import { createRouter, createWebHistory } from 'vue-router'
import HealthyView from '../views/HealthyView.vue'
import UnhealthyView from '../views/UnhealthyView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'healthy memory consumption',
      component: HealthyView
    },
    {
      path: '/unhealthy',
      name: 'unhealthy memory consumption',
      component: UnhealthyView
    }
  ]
})

export default router
