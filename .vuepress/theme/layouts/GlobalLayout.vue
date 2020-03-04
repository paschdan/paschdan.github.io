<template>
    <q-layout view="hHh lpR fFf">
        <Header/>
        <q-page-container>
            <q-page class="q-px-xl q-py-md flex q-mx-xl">
                <DefaultGlobalLayout/>
            </q-page>
        </q-page-container>
        <Footer/>
    </q-layout>
</template>

<script>
  import GlobalLayout from '@app/components/GlobalLayout.vue'
  import Header from '../components/Header'
  import Footer from '../components/Footer'

  export default {
    components: {
      DefaultGlobalLayout: GlobalLayout, Header, Footer,
    },
    beforeMount () {
      this.$q.loading.show({
        delay: 400, // ms
      })
    },
    mounted () {
      this.$q.loading.hide()
    }

  }
</script>
