<template>
    <div>
        <template v-if="$pagination">
            <h2>My Blog</h2>
            <q-list separator>
                <q-item v-for="page in $pagination.pages" :to="page.path" clickable class="q-item-division">
                    <q-item-label header> {{ page.title }}</q-item-label>
                </q-item>
            </q-list>
        </template>
        <Page v-if="$page.frontmatter.page"/>
    </div>
</template>
<script>
  import Page from '@theme/components/Page.vue'

  export default {
    name: 'Layout',

    components: {
      Page,
    },
  }

</script>
