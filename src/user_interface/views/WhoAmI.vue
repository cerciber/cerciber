<template>
  <div class="whoami">
    <div class="whoami-part1">
      <section class="whoami-part1-section1">
        <article>
          <p>🖱️ Me considero una persona muy apasionada por la tecnología. Creo que la programación tiene una gran capacidad para cambiar el mundo y quiero ser parte de ese cambio creando productos increíbles que contribuyan a un mundo más justo y equilibrado en todos los aspectos de la vida ⚖️.</p>
          <br>
          <p>👨🏻‍💻 Me adentré en la programación desde hace mas de 8 años en donde he aprendido a desarrollar videojuegos, aplicaciones de escritorio, aplicaciones web y servidores, asi como a trabajar en equipo, ser paciente, analítico y he adquirido todo tipo de buenas practicas para ser eficiente, organizado y coordinar con otros  🖥️.</p>
          <br>
          <p>🌐 Actualmente estoy muy interesado en expandir mis habilidades de desarrollo web contribuyendo en proyectos interesantes e innovadores con Vue.js y Node.js,  así como en enseñarle a otros que el software es algo fascinante, apasionante y que realmente todos podemos crear cosas increíbles con solo un pc 💭.</p>
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
