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

.home-part2 {
  width: 50%;
  height: 100%;
}

.home-part1-section1 {
  padding: 50px;
  line-height : 35px;
}
</style>
