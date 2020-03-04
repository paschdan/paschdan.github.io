<template>
    <q-footer elevated class="bg-grey-8 text-white">
        <q-toolbar>
            <q-toolbar-title>
                <q-chip icon="fab fa-github" clickable @click="openGithub"> Github</q-chip>
                Powered by VuePress
            </q-toolbar-title>
        </q-toolbar>
            <component v-if="cookieLawComponent" :is="cookieLawComponent" buttonDecline @accept="acceptCookies" />
    </q-footer>
</template>

<script>
    import { openURL } from 'quasar'
    import CookieLaw from 'vue-cookie-law'
    import Vue from 'vue'
    import initGa from '../../initGa'

    export default {
      data () {
        return {
          cookieLawComponent: null
        }
      },
      mounted () {
        import('vue-cookie-law').then(module => {
          this.cookieLawComponent = module.default
        })
      },
      components: {
        CookieLaw
      },
      methods: {
        openGithub: () => {
          openURL('https://github.com/paschdan/paschdan.github.io')
        },
        acceptCookies: () => {
          initGa(Vue)
        }
      }
    }
</script>
