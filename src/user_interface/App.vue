<template>
  <Header></Header>
  <Main></Main>
  <Aside></Aside>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Aside from './components/Aside.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Aside,
    Footer
  }
}
</script>  

<style>

/* Style variables */
:root {
  --test-color1: #24ac783d;
  --test-color2: #ac7c2485;
  --test-color3: #245aac85;
  
  --green1: #18AA8933;
}

body {
  margin: 0px;
  padding: 0px;
}
</style>
