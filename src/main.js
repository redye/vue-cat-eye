// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import createApp from './creat-app'

const { app, router } = createApp()

router.onReady(() => {
  app.$mount('#root')
})
