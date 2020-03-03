<template>
    <div>
        <RouterLink to="/">{{ $site.title }}</RouterLink>
        <RouterLink v-for="item in userLinks" :key="item.link" :to="item.link">{{item.text}}</RouterLink>
        <RouterLink to="/tag/">Tag</RouterLink>
    </div>
</template>

<script>
  import { resolveNavLinkItem } from '../util'
  export default {
    name: 'NavLinks',

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
            items: (link.items || []).map(resolveNavLinkItem)
          })
        })
      },
    },
  }
</script>
