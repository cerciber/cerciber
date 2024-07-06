<template>
  <div class="CV">
    <embed src="CV.pdf" type="application/pdf" width="100%" height="100%" />
  </div>
</template>

<script>

export default {
  name: 'CVView',
  components: {}
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
  background-color: var(--gray-back-1);

  opacity: 0;
  animation: fadeInCenter 1s ease-out forwards;
}
</style>
