import Quasar, { Loading } from 'quasar'
import initGa from './initGa'

export default ({
                  Vue,
                  options,
                  router,
                  siteData,
                  isServer,
                }) => {
  if (!isServer) {
    Vue.use(Quasar, {
      plugins: {
        Loading,
      },
      config: {
        loading: { /* Loading defaults */ },
      },
    })
    const cookiesAllowed = localStorage.getItem('cookie:all');
    if (cookiesAllowed === 'true') {
      initGa(Vue)
    }

  }
}
