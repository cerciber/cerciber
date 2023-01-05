<template>
  <div class="logo" v-on:click="redirect">
    <div class="logo-mask"></div>
    <img src="../../assets/LogoText.png" class="logo-text">
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
  transition: 0.3s;
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
  background: linear-gradient(63deg, var(--degrade1) 10%, var(--degrade2) 30%);

  mask-image: url('~@/user_interface/assets/LogoMask.png');
}

.logo-text {
  position: absolute;
  width: 130px;
}
</style>
