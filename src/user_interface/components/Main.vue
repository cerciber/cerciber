<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'mainComponent'
}
</script>

<style scoped>

main {
  position: absolute;
  z-index: -2;
  top: 0px;
  height: 100%;
  width: 100%;
}

</style>
