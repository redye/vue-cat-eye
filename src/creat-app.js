import Vue from 'vue'

import App from './App.vue'
import createRouter from './router/router'

// component
import NavigationBar from './components/navigation'
import Carrousel from './components/carrousel'
import Tabs from './components/tabs'

// plugin
import VueRouter from 'vue-router'
import RouterPlugin from './plugin/router-plugin'

// filter
import filter from './utils/filter'
Vue.filter('formatURL', filter.formatURL)

Vue.use(VueRouter)
Vue.use(RouterPlugin)
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
