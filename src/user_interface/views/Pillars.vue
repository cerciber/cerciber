<template>
  <div class="pillars">
    <section class="pillars-content">
      <div class="pillars-content-item">
        <div class="pillars-content-item-icon">🙇🏻‍♂️</div>
        <br>
        <p>Reflexiona y toma decisiones constantemente.</p>
      </div> 
      <div class="pillars-content-item">
        <div class="pillars-content-item-icon">💭</div>
        <br>
        <p>Los consejos están para contrastarlos con nuestras ideas.</p>
      </div> 
      <div class="pillars-content-item">
        <div class="pillars-content-item-icon">👫</div>
        <br>
        <p>Nuestra libertad llega hasta donde está la libertad de los demás.</p>
      </div> 
      <div class="pillars-content-item">
        <div class="pillars-content-item-icon">📈</div>
        <br>
        <p>Triunfas al maximizar lo que te hace único/a.</p>
      </div> 
      <div class="pillars-content-item">
        <div class="pillars-content-item-icon">😁</div>
        <br>
        <p>Esfuérzate por ser feliz y vivir en paz contigo y tu comunidad!!</p>
      </div> 
      <div class="pillars-content-item">
        <div class="pillars-content-item-icon">⚖️</div>
        <br>
        <p>Dale valor a todos los aspectos de tu vida.</p>
      </div> 
    </section>
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
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%;
  height: 100%;
}

.pillars-content {
  display: flex;
  justify-content: space-evenly; 
  align-items: center;
  flex-flow: wrap;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  z-index: 100;
}

.pillars-content-item {
  background-color: blue;
  text-align: center;
  z-index: 100;
  margin: 10px;
  padding: 30px;
  line-height: 35px;
  background-color: white;
  border: 3px solid var(--degrade3);    
  border-radius: 20px;
  height: 150px;
  width: 150px;
}

.pillars-content-item-icon {
  display: flex;
  justify-content: center; 
  align-items: center;
  font-size: 60px;
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
  background: linear-gradient(63deg, var(--degrade1) 0%, var(--degrade2) 70%);

  mask-image: url('~@/user_interface/assets/Curve.png');
  z-index: -1;

  shape-outside: url('~@/user_interface/assets/Curve.png');
  shape-image-threshold: 0.5;
  shape-margin: 20px;
  float: left;
}

</style>
