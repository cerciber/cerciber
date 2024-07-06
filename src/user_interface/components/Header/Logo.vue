<template>
  <div class="logo" v-on:click="redirect">
    <div class="logo-mask"></div>
    <img src="../../assets/LogoText.webp" class="logo-text">
  </div>
</template>

<script>
export default {
  name: 'headerComponent',
  methods: {
    redirect: function () {
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
.logo {
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
  transition: var(--transition-time);
  cursor: pointer;
}

.logo:hover {
  scale: 1.1;
}

.logo-mask {
  position: absolute;
  width: 130px;

  min-width: 130px;
  max-width: 130px;
  mask-size: 100%;
  height: 100%;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  
  background: var(--degrade1);
  transition: var(--color-transition-time);

  mask-image: url('~@/user_interface/assets/LogoMask.webp');
}

.logo-text {
  position: absolute;
  width: 130px;
}

@media only screen and (max-width: 900px) {
  .logo {
    cursor: default;
  }
}
</style>
