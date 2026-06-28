import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/styleguide',
    },
    {
      path: '/styleguide',
      name: 'StyleGuide',
      component: () => import('../views/StyleGuide.vue'),
    },
  ],
})

export default router
