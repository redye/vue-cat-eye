import URL from './URL'

import { scheme } from '../../app.config'

// filter
const filter = {
  formatURL: function (url) {
    if (!url) {
      return '/'
    }
    if (url.indexOf(scheme) === 0) {
      const __url = new URL(url)
      let path = __url.path
      const query = __url.query
      if (query) {
        path = path + '?' + query
      }
      return path
    }
    return url
  }
}

export default filter
