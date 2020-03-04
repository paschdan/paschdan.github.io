<template>
    <q-footer elevated class="bg-grey-8 text-white">
        <q-toolbar>
            <q-toolbar-title>
                <q-chip icon="fab fa-github" clickable @click="openGithub"> Github</q-chip>
                Powered by VuePress
            </q-toolbar-title>
        </q-toolbar>
    </q-footer>
</template>

<script>
    import { openURL } from 'quasar'

    export default {
      methods: {
        openGithub: () => {
          openURL('https://github.com/paschdan/paschdan.github.io')
        }
      }
    }
</script>
