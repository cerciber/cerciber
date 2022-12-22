<template>
  <div class="menu-button">
    <button type="button" class="menu-button-content">{{contentText}}</button>
  </div>
</template>

<script>
export default {
  name: 'headerComponent',
  props: {
    contentText: {
      type: String,
      default: ""
    },
  }
}
</script>

<style scoped>
.menu-button {
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
}

.menu-button-content{
  width: 130px;
  padding: 15px;
  border: none;
  border-radius: 50px;
  background-color: var(--button-back-1);
  color: var(--text-1);
  font-family: 'Lato';
  text-transform: uppercase;
  font-size: 12px;
}
</style>
