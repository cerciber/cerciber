<template>
  <div class="CV">
    <vue-pdf-embed source="CV.pdf"></vue-pdf-embed>
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'

export default {
  name: 'CVView',
  components: {
    VuePdfEmbed
  }
}
</script>

<style scoped>
.CV {
  z-index: -10;
  padding: 100px;
  padding-left: 10%;
  padding-right: 10%;
  height: calc(100% - 175px);
  overflow: scroll;
  background-color: var(--button-back-1);
}
</style>
