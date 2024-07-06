<template>
  <div class="home">
    <div class="home-part1">
      <section class="home-part1-section1">
        <h1>Cesar Augusto Torres Ardila</h1>
        <h2><b>Systems and Computing Engineer</b></h2>
        <h2><b>Web Developer</b></h2>
        <br/>
        <h3>🙇🏻‍♂️ ¡Strive to be happy and live in peace with you and your community! 🤗.</h3>
        <br/>
        <Button1 :contentText = "'Contact me'" redirectPath="/contactme"/>
      </section>
    </div>
    <div class="home-part2">
      <PhotoShape pathImage = "Foto.webp"></PhotoShape>
    </div>
  </div>
</template>

<script>
import Button1 from '../components/Header/Button1.vue'
import PhotoShape from '../components/Main/PhotoShape.vue'

export default {
  name: 'homeView',
  components: {
    Button1,
    PhotoShape
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
  min-width: 50%;
  max-width: 50%;
  padding-right: 50px;
  padding-left: -50px;
  height: 100%;

  opacity: 0;
  animation: fadeInRight 1s ease-out forwards;
}

.home-part1-section1 {
  padding: 50px;
  line-height : 35px;
}

.home-part2 {
  display: flex;
  width: 50%;
  height: 100%;

  opacity: 0;
  animation: fadeInLeft 1s ease-out forwards;
}

@media only screen and ((max-width: 700px) or (max-height: 600px)) {
  .home-part1 {
    min-width: 100%;
    max-width: 100%;
  }

  .home-part2 {
    visibility: hidden;
  }
}

</style>
