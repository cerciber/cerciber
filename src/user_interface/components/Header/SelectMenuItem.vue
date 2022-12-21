<template>
  <div class="select-menu-item">
    <img src="../../assets/MenuItemt.png" class="select-menu-item-background">
    <img src="../../assets/MenuItemtAux1.png" class="select-menu-item-aux1" v-show="activeAux1">
    <img src="../../assets/MenuItemtAux2.png" class="select-menu-item-aux2" v-show="activeAux2">
  </div>
</template>

<script>
export default {
  name: 'selectMenuItemComponent',
  props: {
    activeAux1: {
      type: Boolean,
      default: false
    },
    activeAux2: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style scoped>
.select-menu-item {
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
}

.select-menu-item-background {
  width: 100px;
}

.select-menu-item-aux1 {
  position: absolute;
  width: 25px;
  margin-left: -89px;
  margin-top: 58px;
}

.select-menu-item-aux2 {
  position: absolute;
  width: 15px;
  margin-left: 110px;
  margin-top: -50px;
}
</style>
