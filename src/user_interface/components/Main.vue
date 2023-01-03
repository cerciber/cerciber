<template>
  <main>
    <div class="main-content">
      <router-view></router-view>
    </div>
    
  </main>
</template>

<script>
export default {
  name: 'mainComponent'
}
</script>

<style scoped>

main {
  display: flex;
  justify-content: center; 
  align-items: center;
}

.main-content {
  position: absolute;
  z-index: -2;
  top: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

</style>
