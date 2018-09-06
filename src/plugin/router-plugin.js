import URL from '../utils/URL'

const parseURL = (URLString) => {
  const url = new URL(URLString)
  const path = url.path
  const query = url.query
  return {
    path,
    query
  }
}

const RouterPlugin = {
  install: function (Vue, options) {
    Vue.prototype.$routerV2 = (location) => {
    }
  }
}

export default RouterPlugin
