<template>
  <div class="logo-image">
    <img :src="'cerciber-logo.png'" class="logo-image-content">
  </div>
</template>

<script>
export default {
  name: 'headerComponent'
}
</script>

<style scoped>
.logo-image {
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
}

.logo-image-content {
  width: 130px;
}
</style>
