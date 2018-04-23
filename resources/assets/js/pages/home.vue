<template>
  <card :title="$t('home')">
    <p>Welcome to Students Application</p>
  </card>
</template>

<script>
export default {
  middleware: 'auth',

  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
