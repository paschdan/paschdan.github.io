<template>
    <div id="global-layout">
        <header style="background-color: #DDD">
            <NavLinks />
        </header><br>
        <DefaultGlobalLayout/><br>
        <footer style="background-color: #DDD"><a href="https://github.com/paschdan/paschdan.github.io">Github</a> · Powered by VuePress</p>
        </footer>
    </div>
</template>

<script>
  import GlobalLayout from '@app/components/GlobalLayout.vue'
  import NavLinks from '../components/NavLinks'

  export default {
    components: { DefaultGlobalLayout: GlobalLayout, NavLinks
    },
  }
</script>
