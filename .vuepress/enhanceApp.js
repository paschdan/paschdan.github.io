import Quasar, { Loading } from 'quasar'

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
  }
}
