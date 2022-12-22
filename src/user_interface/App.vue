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

  --green-back-bar: #18AA8922;
  --green-back-sphere: #18aa880a;
  --green-degrade1: rgba(24,170,137,1);
  --green-degrade2: rgba(118,199,147,1);

  --blue-back-bar: #182eaa33;
  --blue-back-sphere: #184baa0a;
  --blue-degrade1: rgb(24, 87, 170);
  --blue-degrade2: rgb(118, 162, 199);

  --purple-back-bar: #3f18aa33;
  --purple-back-sphere: #2218aa0a;
  --purple-degrade1: rgb(34, 24, 170);
  --purple-degrade2: rgb(133, 118, 199);

  --red-back-bar: #aa181833;
  --red-back-sphere: #aa18180a;
  --red-degrade1: rgb(170, 24, 24);
  --red-degrade2: rgb(199, 118, 118);

  --gray-back-bar: #b1b1b133;
  --gray-back-sphere: #8b8b8b0a;
  --gray-degrade1: rgb(172, 172, 172);
  --gray-degrade2: rgb(204, 204, 204);

  --yellow-back-bar: #a8aa1833;
  --yellow-back-sphere: #aaa0180a;
  --yellow-degrade1: rgb(170, 168, 24);
  --yellow-degrade2: rgb(199, 198, 118);

  --back-bar: var(--green-back-bar);
  --back-sphere: var(--green-back-sphere);
  --degrade1: var(--green-degrade1);
  --degrade2: var(--green-degrade2);
  --button-back-1: #313E50;
  --text-1: #ffffff;

}

body {
  margin: 0px;
  padding: 0px;
}
</style>
