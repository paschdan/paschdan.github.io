<template>
    <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
            <q-btn flat to="/">{{ $site.title }}</q-btn>
            <q-space/>
            <q-tabs align="center" dense>
                <q-route-tab v-for="item in userLinks" :key="item.link" :to="item.link">{{item.text}}</q-route-tab>
                <q-route-tab to="/tag/">Tag</q-route-tab>
            </q-tabs>
        </q-toolbar>
    </q-header>
</template>

<script>
  import { resolveNavLinkItem } from '../util'

  export default {
    name: 'Header',
    computed: {
      userNav () {
        return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
      },

      nav () {
        return this.userNav
      },
      userLinks () {
        return (this.nav || []).map(link => {
          return Object.assign(resolveNavLinkItem(link), {
            items: (link.items || []).map(resolveNavLinkItem),
          })
        })
      },
    },
  }
</script>
