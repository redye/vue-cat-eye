import Router from 'vue-router'
import routes from './routes'

import { prefix } from '../../app.config'

export default () => {
  const router = new Router({
    routes,
    mode: 'history'
  })

  router.beforeEach((to, from, next) => {
    console.log(`to => ${to.fullPath}`)
    let path = to.path
    const loc = path.indexOf(prefix)
    if (loc !== -1) {
      path = path.substring(loc + prefix.length - 1)
      next({
        path: path,
        query: to.query
      })
    } else {
      next()
    }
  })
  return router
}
