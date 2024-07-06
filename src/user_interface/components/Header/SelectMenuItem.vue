<template>
  <div class="select-menu-item" v-on:click="redirect">
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
    redirectPath: {
      type: String,
      default: ""
    },
  },
  methods: {
    redirect: function () {
      this.$router.push(this.redirectPath);
    }
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
  transition: var(--color-transition-time);

  mask-image: url('~@/user_interface/assets/MenuItemt.webp');
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
  
  background: var(--degrade3);
  transition: var(--color-transition-time);

  mask-image: url('~@/user_interface/assets/MenuItemtAux1.webp');
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
  
  background: var(--degrade3);
  transition: var(--color-transition-time);

  mask-image: url('~@/user_interface/assets/MenuItemtAux2.webp');
}

.select-menu-item-text {
  position: absolute;
  color: var(--text-1);
  font-family: 'Montserrat';
  text-transform: uppercase;
  font-size: 12px;
  user-select: none;
}
</style>
