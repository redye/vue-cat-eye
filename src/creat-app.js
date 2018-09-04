import Vue from 'vue'
import VueRouter from 'vue-router'

import NavigationBar from './components/navigation'
import Carrousel from './components/carrousel'
import Tabs from './components/tabs'

import App from './App.vue'
import createRouter from './router/router'

Vue.use(VueRouter)
Vue.use(NavigationBar)
Vue.use(Carrousel)
Vue.use(Tabs)

export default () => {
  const router = createRouter()

  const app = new Vue({
    router,
    render: (h) => h(App)
  })

  return { app, router }
}
