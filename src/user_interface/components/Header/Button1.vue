<template>
  <div class="menu-button">
    <button type="button" class="menu-button-content"  v-on:click="redirect">{{contentText}}</button>
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
    redirectPath: {
      type: String,
      default: ""
    },
    setCustomEvent: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    redirect: function (e) {
      if (this.setCustomEvent) {
        this.$emit('customEvent', e);
      } else {
        this.$router.push(this.redirectPath);
      }
    }
  }
}
</script>

<style scoped>
.menu-button {
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
 transition: var(--transition-time);
  cursor: pointer;
}

.menu-button:hover {
  scale: 1.1;
}

.menu-button-content{
  width: 150px;
  padding: 15px;
  border: none;
  border-radius: 50px;
  background-color: var(--button-back-1);
  color: var(--text-1);
  font-family: 'Lato';
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
}
</style>
