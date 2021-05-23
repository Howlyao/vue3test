import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/subpage',
    name: 'Subpage',
    component:  () => import('../SubPage.vue'),
    children: [
      {
        path: '/',
        name: 'TestMultiPages',
        component: () => import('../views/TestMultiPages.vue')
      }
    ] 
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
