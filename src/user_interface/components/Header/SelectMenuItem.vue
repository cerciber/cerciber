<template>
  <div class="select-menu-item">
    <div class="select-menu-item-background"></div>
    <div class="select-menu-item-aux1" v-show="activeAux1"></div>
    <div class="select-menu-item-aux2" v-show="activeAux2"></div>
    <div class="select-menu-item-text" > {{ contentText }} </div>
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
    contentText: {
      type: String,
      default: ""
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
  min-width: 100px;
  max-width: 100px;
  mask-size: 100%;
  height: 100%;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  
  background: var(--degrade1);
  background: linear-gradient(63deg, var(--degrade1) 0%, var(--degrade2) 80%);

  mask-image: url('~@/user_interface/assets/MenuItemt.png');
}

.select-menu-item-aux1 {
  position: absolute;
  margin-left: -89px;
  margin-top: 58px;

  min-width: 25px;
  max-width: 25px;
  mask-size: 100%;
  height: 100%;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  
  background: var(--degrade1);
  background: linear-gradient(0deg, var(--degrade1) 0%, var(--degrade2) 60%);

  mask-image: url('~@/user_interface/assets/MenuItemtAux1.png');
}

.select-menu-item-aux2 {
  position: absolute;
  margin-left: 110px;
  margin-top: -50px;

  min-width: 15px;
  max-width: 15px;
  mask-size: 100%;
  height: 100%;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  
  background: var(--degrade1);
  background: linear-gradient(63deg, var(--degrade1) 0%, var(--degrade2) 70%);

  mask-image: url('~@/user_interface/assets/MenuItemtAux2.png');
}

.select-menu-item-text {
  position: absolute;
  color: var(--text-1);
  font-family: 'Montserrat';
  text-transform: uppercase;
  font-size: 12px;
}
</style>
