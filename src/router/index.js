import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/discover',
    name: 'discover',
    component: () => import('../views/discover/index.vue'),
    redirect: '/discover/index',
    children: [
      {
        path: 'index',
        alias: '/',
        component: () => import('../views/discover/discover.vue')
      },
      {
        path: 'toplist',
        component: () => import('../views/discover/toplist.vue')
      },
      {
        path: 'album',
        component: () => import('../views/discover/album.vue')
      },
      {
        path: 'artist',
        component: () => import('../views/discover/artist.vue')
      },
      {
        path: 'djradio',
        component: () => import('../views/discover/djradio.vue')
      },
      {
        path: 'playlist',
        component: () => import('../views/discover/playlist.vue')
      }
    ]
  },
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
