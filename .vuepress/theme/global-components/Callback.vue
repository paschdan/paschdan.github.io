<template>
  <p>Checking Authentication...</p>
</template>

<script>
export default {
  async beforeMount() {
    // Process the auth tokens
    const handleAuth = await this.$auth.handleAuthentication();
    console.log(handleAuth)
  }
}
</script>
