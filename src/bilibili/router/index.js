import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/bilibili',
    name: 'Bilibili',
    component:  () => import('../views/Bilibili.vue'),
    children: [
      {
        path: 'main-page',
        name: 'MainPage',
        component: () => import('../views/MainPage.vue')
      },
      {
        path: 'user-info',
        name: 'UserInfo',
        component: () => import('../views/UserInfo.vue')
      },
    ] 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
