<template>
  <div class="whoami">
    <div class="whoami-part1">
      <section class="whoami-part1-section1">
        <article>
          <p>🖱️ I consider myself a person who is very passionate about technology. I believe that programming has a great capacity to change the world and I want to be part of that change by creating incredible products that contribute to a fairer and more balanced world in all aspects of life ⚖️.</p>
          <br>
          <p>👨🏻 I got into programming for more than 8 years where I have learned to develop video games, desktop applications, web applications and servers, as well as to work as a team, be patient, analytical and I have acquired all kinds of good practices to be efficient, organized and coordinate with others 🖥️.</p>
          <br>
          <p>🌐 I am currently very interested in expanding my <b>web development</b> skills by contributing to interesting and innovative projects with <b>Vue.js</b> and <b>Node.js</b>, as well as teaching others that software is something fascinating, exciting and that we can really all create amazing things with it. just one PC 💭.</p>
        </article>
      </section>
    </div>
    <div class="whoami-part2">
      <PhotoShape pathImage = "@/user_interface/assets/Foto.jpg"></PhotoShape>
    </div>
  </div>
</template>

<script>
import PhotoShape from '../components/Main/PhotoShape.vue'

export default {
  name: 'whoAmI',
  components: {
    PhotoShape
  }
}
</script>

<style scoped>
.whoami{
  display: flex;
  width: 100%;
  height: 100%;
}

.whoami-part1 {
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 50%;
  height: 100%;
}

.whoami-part1-section1 {
  z-index: 100;
  padding: 20px;
  margin-top: 30%;
  margin-bottom: 30%;
  margin-left: 50px;
  line-height : 35px;
  background-color: white;
  border: 3px solid var(--degrade3);    
  border-radius: 20px;
}

.whoami-part2 {
  display: flex;
  width: 50%;
  height: 100%;
}
</style>
