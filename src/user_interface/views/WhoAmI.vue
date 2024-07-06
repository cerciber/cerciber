<template>
  <div class="whoami">
    <div class="whoami-part1">
      <section class="whoami-part1-section1">
        <h3><b>Who am I</b></h3>
        <br>
        <article>
          <p>🖱️ I consider myself a person who is very passionate about technology. I believe that programming has a great capacity to change the world and I want to be part of that change by creating incredible products that contribute to a fairer and more balanced world in all aspects of life ⚖️.</p>
          <br>
          <p>👨🏻 I got into programming for more than 8 years where I have developed web applications, servers, desktop applications and mobile applications, as well as to work as a team, be patient, analytical and I have acquired all kinds of good practices to be efficient, organized and coordinate with others 🖥️.</p>
          <br>
          <p>🌐 I am currently very interested in expanding my <b>web development</b> skills by contributing to interesting and innovative projects with <b>Node.js (JavaScript / TypeScript)</b>, <b>Express.js</b>, <b>React.js</b> and <b>Vue.js</b>, as well as teaching others that software is something fascinating, exciting and that we can really all create amazing things with just one PC 💭.</p>
        </article>
      </section>
    </div>
    <div class="whoami-part2">
      <PhotoShape pathImage = "Foto.webp"></PhotoShape>
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
  margin-left: 10%;
  margin-right: 10%;
  line-height : 35px;
  max-height: calc(100% - 300px);
  background-color: white;
  border: 3px solid var(--degrade3);    
  border-radius: 10px;
  overflow: auto;
  text-align: center;
}

.whoami-part2 {
  display: flex;
  width: 50%;
  height: 100%;
}

@media only screen and ((max-width: 700px) or (max-height: 600px)) {
  .whoami-part1 {
    min-width: 100%;
    max-width: 100%;
  }

  .whoami-part2 {
    visibility: hidden;
  }
}
</style>
