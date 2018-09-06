const parseRoute = (route) => {
  if (route.query) {
    return route.query
  }
  return route.params
}

export default [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home-view" */ '../pages/home/home.vue')
  }, {
    path: '/movie',
    name: 'movie',
    props: parseRoute,
    component: () => import(/* webpackChunkName: "movie-view" */ '../pages/movie/movie.vue')
  }, {
    path: '/web',
    name: 'web',
    props: parseRoute,
    component: () => import(/* webpackChunkName: "web-view" */ '../pages/web/web.vue')
  }
]
