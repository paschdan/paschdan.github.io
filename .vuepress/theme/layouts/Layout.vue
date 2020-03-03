<template>
    <div>
        <template v-if="$pagination">
            <ul id="default-layout">
                <li v-for="page in $pagination.pages">
                    <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
                </li>
            </ul>
            <div id="pagination">
                <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
                <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
            </div>
        </template>
        <Page v-if="$page.frontmatter.page" />
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
