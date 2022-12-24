<template>
  <div class="photo-shape-back-curve">
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit delectus inventore repellat, doloribus itaque consequatur odio temporibus, neque ratione consequuntur facilis quos architecto quisquam, a numquam! Maxime quisquam libero pariatur!
  <div class="photo-shape-picture-external-shpere-space">
    <div class="photo-shape-picture-external-shpere">
    </div>
    <div class="photo-shape-picture-internal-shpere">
      <img :src="require('@/user_interface/assets/Foto.jpg')" class="photo-shape-picture-photo">
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
    }
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
  
  background: var(--degrade1);
  background: linear-gradient(63deg, var(--degrade1) 0%, var(--degrade2) 70%);

  mask-image: url('~@/user_interface/assets/Curve.png');
  z-index: -1;

  shape-outside: url('~@/user_interface/assets/Curve.png');
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
  mask-image: url('~@/user_interface/assets/BackgroundSphere.png');
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
}

.photo-shape-picture-photo {
  min-width: 402px;
  max-width: 402px;
  height: 402px;
  border-radius: 50%;
}
</style>
