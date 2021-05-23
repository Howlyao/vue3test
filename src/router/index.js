import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

function _isMobile () {
  return navigator.userAgent.match(/(iphone|android)/i)
}

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: () => import(/* webpackChunkName: "about" */ '@/views/MainView.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      if (_isMobile()) {
        next({ name: 'MobileTest' })
      } else {
        next({ name: 'Nav' })
      }
    }
  },
  {
    path: '/Nav',
    name: 'Nav',
    component: () => import(/* webpackChunkName: "about" */ '@/components/HelloWorld.vue')
  },
  {
    path: '/AnimationTest',
    name: 'AnimationTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/AnimationTest.vue')
  },
  {
    path: '/PluginTest',
    name: 'PluginTest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/PluginTest.vue')
  },
  {
    path: '/VuexTest',
    name: 'VuexTest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/VuexTest.vue')
  },
  {
    path: '/ComponentInfoContact',
    name: 'ComponentInfoContact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/ComponentInfoContact.vue')
  },
  {
    path: '/WatchEffectTest',
    name: 'WatchEffectTest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/WatchEffectTest.vue')
  },
  {
    path: '/MobileTest',
    name: 'MobileTest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/mobile/MobileTest.vue')
  },
  {
    path: '/TweenMaxTest',
    name: 'TweenMaxTest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/pc/TweenMaxTest.vue')
  },
  {
    path: '/UserInfo',
    name: 'UserInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/pc/UserInfo.vue')
  },
  {
    path: '/LOLPage',
    name: 'LOLPage',
    component: () => import('../views/pc/LOLPage.vue')
  },
  {
    path: '/ScorllTest',
    name: 'ScorllTest',
    component: () => import('../views/pc/ScorllTest.vue')
  },
  // 
  {
    path: '/:undefineParams(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
