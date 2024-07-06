<template>
  <div class="pillars">
    <div class="pillars-content">
      <div class="pillars-content-item">
        <div class="pillars-content-item-icon">🙇🏻‍♂️</div>
        <br>
        <p>Constantly reflect and make decisions.</p>
      </div> 
      <div class="pillars-content-item">
        <div class="pillars-content-item-icon">💭</div>
        <br>
        <p>The tips are to contrast them with our ideas.</p>
      </div> 
      <div class="pillars-content-item">
        <div class="pillars-content-item-icon">👫</div>
        <br>
        <p>Our freedom reaches as far as the freedom of others.</p>
      </div> 
      <div class="pillars-content-item">
        <div class="pillars-content-item-icon">📈</div>
        <br>
        <p>You succeed by maximizing what makes you unique.</p>
      </div> 
      <div class="pillars-content-item">
        <div class="pillars-content-item-icon">😁</div>
        <br>
        <p>Strive to be happy and live in peace with you and your community!!</p>
      </div> 
      <div class="pillars-content-item">
        <div class="pillars-content-item-icon">⚖️</div>
        <br>
        <p>Give value to all aspects of your life.</p>
      </div> 
    </div>
    <div class="pillars-shape-back-curve">
    </div>
  </div>
</template>

<script>
export default {
  name: 'pillarsView'
}
</script>

<style scoped>
.pillars {
  width: 100%;
  height: 100%;
  overflow: scroll;

  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
}

.pillars-content {
  flex-flow: wrap;
  padding-top: 100px;
  padding-bottom: 50px;
  width: 100%;
  z-index: 100;
}

.pillars-content-item {
  text-align: center;
  z-index: 100;
  margin: 50px;
  padding: 30px;
  line-height: 35px;
  background-color: white;
  border: 3px solid var(--degrade3);    
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  min-width: calc(100% - 300px);
  transition: var(--transition-time);
}

.pillars-content-item:hover {
  scale: 1.03;
}

.pillars-content-item-icon {
  display: flex;
  justify-content: center; 
  align-items: center;
  font-size: 80px;
  margin-top: -50px;
  transition: var(--transition-time);
}

.pillars-content-item-icon:hover {
  scale: 1.1;
}

.pillars-shape-back-curve {
  position: absolute;
  min-width: 300%;
  max-width: 300%;
  mask-size: 40%;
  height: 200%;
  margin-top: 80%;
  margin-left: 80%;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  
  background: var(--degrade1);
  transition: var(--color-transition-time);

  mask-image: url('~@/user_interface/assets/Curve.webp');
  z-index: -1;

  shape-outside: url('~@/user_interface/assets/Curve.webp');
  shape-image-threshold: 0.5;
  shape-margin: 20px;
  float: left;
}

</style>
