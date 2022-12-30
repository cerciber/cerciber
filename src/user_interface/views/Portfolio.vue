<template>
  <div class="portfolio-content">
    <div class="portfolio portfolio-first">
      <div class="portfolio-part1">
        <PhotoShapeRelative pathImage = "SigmathEnviroment.png" disableBack="true" title="Sigmath"></PhotoShapeRelative>
      </div>
      <div class="portfolio-part2">
        <section class="portfolio-part2-section1">
          <article>
            <p>🔢 Sigmath is a web platform that intends to establish a close connection between computing and mathematics, allowing users to create, share, use and manipulate custom functional mathematical modules to solve real-world problems naturally and automatically in community 🤼.</p>
            <br>
            <p>📝 I completely defined and directed this project and together with a team of 5 people we created a first functional version of the platform developing a <b>REST-API</b> with <b>Node.js</b> and <b>sequelize (postgreSQL)</b>, and a <b>Web Application</b> with <b>Vue.js</b> 🌐.</p>
          </article>
        </section>
      </div>
      <div class="portfolio-shape-back-curve">
      </div>
    </div>
    <div class="portfolio">
      <div class="portfolio-part2">
        <section class="portfolio-part2-section2">
          <article>
            <p>🔢 Sigmath is a web platform that intends to establish a close connection between computing and mathematics, allowing users to create, share, use and manipulate custom functional mathematical modules to solve real-world problems naturally and automatically in community 🤼.</p>
            <br>
            <p>📝 I completely defined and directed this project and together with a team of 5 people we created a first functional version of the platform developing a <b>REST-API</b> with <b>Node.js</b> and <b>sequelize (postgreSQL)</b>, and a <b>Web Application</b> with <b>Vue.js</b> 🌐.</p>
          </article>
        </section>
      </div>
      <div class="portfolio-part1">
        <PhotoShapeRelative pathImage = "SigmathEnviroment.png" disableBack="true" title="Nullspace Page"></PhotoShapeRelative>
      </div>
    </div>
    <div class="portfolio">
      <div class="portfolio-part1">
        <PhotoShapeRelative pathImage = "CerciberEnviroment.png" disableBack="true" title="Cerciber Page"></PhotoShapeRelative>
      </div>
      <div class="portfolio-part2">
        <section class="portfolio-part2-section1">
          <article>
            <p>🔢 Sigmath is a web platform that intends to establish a close connection between computing and mathematics, allowing users to create, share, use and manipulate custom functional mathematical modules to solve real-world problems naturally and automatically in community 🤼.</p>
            <br>
            <p>📝 I completely defined and directed this project and together with a team of 5 people we created a first functional version of the platform developing a <b>REST-API</b> with <b>Node.js</b> and <b>sequelize (postgreSQL)</b>, and a <b>Web Application</b> with <b>Vue.js</b> 🌐.</p>
          </article>
        </section>
      </div>
      <div class="portfolio-shape-back-curve">
      </div>
    </div>
  </div>
</template>

<script>
import PhotoShapeRelative from '../components/Main/PhotoShapeRelative.vue'

export default {
  name: 'portfolioView',
  components: {
    PhotoShapeRelative
  }
}
</script>

<style scoped>
.portfolio {
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: -250px;
}

.portfolio-first {
  margin-top: 0px;
}

.portfolio-part1 {
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 50%;
  height: 100%;
}

.portfolio-part1-section1 {
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

.portfolio-part2 {
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 50%;
  height: 100%;
}

.portfolio-part2-section1 {
  z-index: 100;
  padding: 20px;
  margin-top: 30%;
  margin-bottom: 30%;
  margin-right: 100px;
  margin-left: -50px;
  line-height : 35px;
  background-color: white;
  border: 3px solid var(--degrade3);    
  border-radius: 20px;
}

.portfolio-part2-section2 {
  z-index: 100;
  padding: 20px;
  margin-top: 30%;
  margin-bottom: 30%;
  margin-right: -50px;
  margin-left: 100px;
  line-height : 35px;
  background-color: white;
  border: 3px solid var(--degrade3);    
  border-radius: 20px;
}

.portfolio-shape-back-curve {
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

.portfolio-content {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
