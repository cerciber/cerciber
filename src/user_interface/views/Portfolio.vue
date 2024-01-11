<template>
  <div class="portfolio-content">
    <div class="portfolio portfolio-first">
      <div class="portfolio-part1">
        <PhotoShapeRelative pathImage = "portfolio-multimedia/main-bookxm.png" :disableBack="true" title="BookXM" 
        :images="[
          'portfolio-multimedia/main-bookxm.png',
          'portfolio-multimedia/collage-bookxm.png'
        ]"
      ></PhotoShapeRelative>
      </div>
      <div class="portfolio-part2">
        <section class="portfolio-part2-section1">
          <article>
            <h3><b>BookXM (MarketXM)</b></h3>
            <p>Creation of a platform for the management of financial credits of different types in a parametric way.</p>
            <ul class="description-lu">
                <li>Creation of functionalities in <b>Node.js</b> with <b>Javascript</b> and <b>Typescript</b>.</li>
                <li>Management of <b>Prisma ORM</b> with <b>PostgreSQL</b>.</li>
                <li>Development of <b>SPA</b> in <b>React.js</b>.</li>
                <li>Implementation of <b>API-REST</b> and <b>Microservices</b> system using <b>Clean Architecture</b> and <b>Event-Driven Architecture</b> with <b>Kafka</b>.</li>
                <li>Implementation of authentication and authorization mechanisms with <b>JWT</b>.</li>
                <li>Configuration of <b>AWS</b> services such as: <b>IAM, S3, API Gateway, Lambda and Cloud Watch</b>. </li>
            </ul>
          </article>
        </section>
      </div>
      <div class="portfolio-shape-back-curve">
      </div>
    </div>

    <div class="portfolio">
      <div class="portfolio-part1">
        <section class="portfolio-part2-section2">
          <article>
            <h3><b>CollXM (MarketXM)</b></h3>
            <p>Creation of a platform that allows the exchange of derivative financial services between different types of entities.</p>
            <ul class="description-lu">
                <li>Creation of functionalities in <b>Node.js</b> with <b>Javascript</b>.</li>
                <li>Management of <b>Sequelize ORM</b> and <b>Prisma ORM</b> with <b>PostgreSQL</b>.</li>
                <li>Development of <b>SPA</b> in <b>React.js</b>.</li>
                <li>Implementation of <b>API-REST</b> using <b>Clean Architecture</b>.</li>
                <li>Implementation of authentication and authorization mechanisms with <b>JWT</b>.</li>
            </ul>
          </article>
        </section>
      </div>
      <div class="portfolio-part2">
        <PhotoShapeRelative pathImage = "portfolio-multimedia/main-collxm.png" :disableBack="true" title="CollXM"
        :images="[
          'portfolio-multimedia/main-collxm.png',
          'portfolio-multimedia/collage-collxm.png'
        ]"
      ></PhotoShapeRelative>
      </div>
    </div>

    <div class="portfolio">
      <div class="portfolio-part1">
        <PhotoShapeRelative pathImage = "portfolio-multimedia/main-bookxm.png" :disableBack="true" title="BookXM" 
        :images="[
          'portfolio-multimedia/main-bookxm.png',
          'portfolio-multimedia/collage-bookxm.png'
        ]"
      ></PhotoShapeRelative>
      </div>
      <div class="portfolio-part2">
        <section class="portfolio-part2-section1">
          <article>
            <h3><b>BookXM (MarketXM)</b></h3>
            <p>Creation of a platform for the management of financial credits of different types in a parametric way.</p>
            <ul class="description-lu">
                <li>Creation of functionalities in <b>Node.js</b> with <b>Javascript</b> and <b>Typescript</b>.</li>
                <li>Management of <b>Prisma ORM</b> with <b>PostgreSQL</b>.</li>
                <li>Development of <b>SPA</b> in <b>React.js</b>.</li>
                <li>Implementation of <b>API-REST</b> and <b>Microservices</b> system using <b>Clean Architecture</b> and <b>Event-Driven Architecture</b> with <b>Kafka</b>.</li>
                <li>Implementation of authentication and authorization mechanisms with <b>JWT</b>.</li>
                <li>Configuration of <b>AWS</b> services such as: <b>IAM, S3, API Gateway, Lambda and Cloud Watch</b>. </li>
            </ul>
          </article>
        </section>
      </div>
      <div class="portfolio-shape-back-curve">
      </div>
    </div>

    <div class="portfolio">
      <div class="portfolio-part1">
        <section class="portfolio-part2-section2">
          <article>
            <h3><b>CollXM (MarketXM)</b></h3>
            <p>Creation of a platform that allows the exchange of derivative financial services between different types of entities.</p>
            <ul class="description-lu">
                <li>Creation of functionalities in <b>Node.js</b> with <b>Javascript</b>.</li>
                <li>Management of <b>Sequelize ORM</b> and <b>Prisma ORM</b> with <b>PostgreSQL</b>.</li>
                <li>Development of <b>SPA</b> in <b>React.js</b>.</li>
                <li>Implementation of <b>API-REST</b> using <b>Clean Architecture</b>.</li>
                <li>Implementation of authentication and authorization mechanisms with <b>JWT</b>.</li>
            </ul>
          </article>
        </section>
      </div>
      <div class="portfolio-part2">
        <PhotoShapeRelative pathImage = "portfolio-multimedia/main-collxm.png" :disableBack="true" title="CollXM"
        :images="[
          'portfolio-multimedia/main-collxm.png',
          'portfolio-multimedia/collage-collxm.png'
        ]"
      ></PhotoShapeRelative>
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
  height: 800px;
  margin-top: -250px;
}

.portfolio-first {
  margin-top: 0px;
}

.portfolio-part1 {
  display: flex;
  justify-content: right; 
  padding-right: 50px;
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
  justify-content: left; 
  padding-left: 50px;
  align-items: center;
  width: 50%;
  height: 100%;
}

.portfolio-part2-section1 {
  z-index: 100;
  padding: 20px;
  margin-top: 30%;
  margin-bottom: 30%;
  margin-right: 50px;
  margin-left: 50px;
  line-height : 35px;
  background-color: white;
  border: 3px solid var(--degrade3);    
  border-radius: 10px; 
  max-height: 250px;
  overflow: scroll;
}

.portfolio-part2-section2 {
  z-index: 100;
  padding: 20px;
  margin-top: 30%;
  margin-bottom: 30%;
  margin-right: 50px;
  margin-left: 50px;
  line-height : 35px;
  background-color: white;
  border: 3px solid var(--degrade3);    
  border-radius: 10px; 
  max-height: 250px;
  overflow: scroll;
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

@media only screen and ((max-width: 900px) or (max-height: 600px)) {

  .portfolio {
    display: block;
    margin: 0px;
    height: auto;
    padding: 0px;
  }

  .portfolio-part1 {
    visibility: hidden;
  }

  .portfolio-part2 {
    min-width: 100%;
    max-width: 100%;
    margin: 0px;
    padding: 0px;
  }

  .portfolio-part2-section1 {
    margin: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: auto;
    max-height: max-content;
  }

  .portfolio-part2-section2 {
    margin: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: auto;
    max-height: max-content;
  }

  .portfolio-content {
    padding-top: 100px;
    padding-bottom: 60px;
    height: calc(100% - 160px);
  }
}

.description-lu {
    list-style-type: none;
}

.description-lu > li {
    margin-bottom: 10px; /* Espaciado entre elementos li */
    position: relative;
}

.description-lu > li::before {
    content: "👉🏻"; /* Reemplaza el emoji por el que desees */
    display: inline-block;
    margin-right: 8px; /* Espaciado entre el emoji y el texto */
    position: absolute;
    left: -2em; /* Alinea el emoji antes del comienzo del texto */
}
</style>
