import { createRouter, createWebHistory } from 'vue-router'
import discover from './discover'
const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  discover,
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my/index.vue')
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import('../views/friend/index.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/store/index.vue')
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../views/download/index.vue')
  },
  {
    path: '/musicer',
    name: 'musicer',
    component: () => import('../views/musicer/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
