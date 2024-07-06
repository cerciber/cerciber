<template>
  <div v-show="!disableBack" class="photo-shape-back-curve">
  </div>
  <div class="photo-shape-picture-external-shpere-space">
    <div class="photo-shape-picture-external-shpere">
    </div>
    <div class="photo-shape-picture-internal-shpere">
      <div class="photo-shape-picture-photo">
        <img :src="pathImage" class="photo-shape-picture-photo-content">
      </div>
      <div v-show="title" class="photo-shape-picture-title">
        <h1>{{title}}</h1>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'headerComponent',
  props: {
    pathImage: {
      type: String,
      default: ""
    },
    disableBack: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
  }
}
</script>

<style scoped>
.photo-shape-back-curve {
  min-width: 200%;
  max-width: 200%;
  mask-size: 100%;
  height: 200%;
  margin-top: 0%;
  margin-left: -50%;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  
  background: var(--degrade2);
  transition: var(--color-transition-time);

  mask-image: url('~@/user_interface/assets/Curve.webp');
  z-index: -1;

  shape-outside: url('~@/user_interface/assets/Curve.webp');
  shape-image-threshold: 0.5;
  shape-margin: 20px;
  float: left;
}

.photo-shape-picture-external-shpere-space {
  position: absolute;
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 50%;
  width: 50%;
  height: 100%;
  transform: translateX(100px);
}
.photo-shape-picture-external-shpere {
  position: absolute;
  min-width: 550px;
  max-width: 550px;
  mask-size: 550px;
  height: 550px;
  margin-top: 0%;
  margin-left: 0%;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  
  background: var(--back-bar2);
  mask-image: url('~@/user_interface/assets/BackgroundSphere.webp');
  transition: var(--color-transition-time);
}

.photo-shape-picture-internal-shpere {
  position: absolute;
  display: flex;
  justify-content: center; 
  align-items: center;

  min-width: 400px;
  max-width: 400px;
  mask-size: 400px;
  height: 400px;
  margin-top: 50px;
  margin-left: -50px;

  border:10px solid var(--degrade3);    
  border-radius:50%;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  transition: var(--color-transition-time);
}

.photo-shape-picture-internal-shpere:hover {
  scale: 1.03;
}

.photo-shape-picture-photo {
  display: flex;
  justify-content: center; 
  align-items: center;
  min-width: 402px;
  max-width: 402px;
  height: 402px;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
}

.photo-shape-picture-photo-content {
  height: 100%;
}

.photo-shape-picture-title {
  position: absolute;
  margin-top: 375px;
  background-color: white;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 50px;
  border:5px solid var(--degrade3); 
  transition: var(--color-transition-time);
}

.photo-shape-picture-title h1 {
  color: var(--degrade3);
  transition: var(--color-transition-time);
}

</style>
