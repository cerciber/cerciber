<template>
  <div class="home">
    <div class="home-part1">
      <section class="home-part1-section1">
        <h1>Cesar Augusto Torres Ardila</h1>
        <h2><b>Systems and Computing Engineer</b></h2>
        <h2><b>Web Developer</b></h2>
        <br/>
        <article>
          <p>🙇🏻‍♂️ Esfuérzate por ser feliz y vivir en paz contigo y tu comunidad!! 🤗.</p>
        </article>
        <br/>
        <Button1 :contentText = "'Contáctame'" redirectPath="/contactme"/>
      </section>
    </div>
    <div class="home-part2">
      <div class="home-part2-back-curve">
      </div>
      <div class="home-part2-picture-external-shpere-space">
        <div class="home-part2-picture-external-shpere">
        </div>
        <div class="home-part2-picture-internal-shpere">
          <img src="../assets/Foto.jpg" class="home-part2-picture-photo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button1 from '../components/Header/Button1.vue'

export default {
  name: 'homeView',
  components: {
    Button1
  }
}
</script>

<style scoped>
.home{
  display: flex;
  width: 100%;
  height: 100%;
}

.home-part1 {
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 50%;
  height: 100%;
}

.home-part1-section1 {
  padding: 50px;
  line-height : 35px;
}

.home-part2 {
  display: flex;
  width: 50%;
  height: 100%;
}

.home-part2-back-curve {
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
}

.home-part2-picture-external-shpere-space {
  position: absolute;
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 50%;
  width: 50%;
  height: 100%;
}
.home-part2-picture-external-shpere {
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

.home-part2-picture-internal-shpere {
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

.home-part2-picture-photo {
  min-width: 402px;
  max-width: 402px;
  height: 402px;
  border-radius: 50%;
}

</style>
