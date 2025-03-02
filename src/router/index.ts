import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/WatcherIntroView.vue'
import HappyBirthdayView from '@/views/HappyBirthdayView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WatcherIntro',
      component: HomeView,
    },
    {
      path: '/tesseract',
      name: 'Tesseract',
      component: () => import('../views/TesseractView.vue'),
    },
    {
      path: '/loki',
      name: 'LokiTimeline',
      component: () => import('../views/LokiTimelineView.vue'),
    },
    {
      path: '/happybirthday',
      name: 'HappyBirthDay',
      component: HappyBirthdayView,
    },
    {
      path: '/deadpool',
      name: 'DeadpoolTimeline',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DeadpoolTimelineView.vue'),
    },
  ],
})

export default router
