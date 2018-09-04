export default [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home-view" */ '../pages/home/home.vue')
  }
]
