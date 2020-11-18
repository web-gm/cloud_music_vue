export default {
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
}
