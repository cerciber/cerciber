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

  --green-back-bar: #18AA8933;
  --green-degrade1: rgba(24,170,137,1);
  --green-degrade2: rgba(118,199,147,1);

  --blue-back-bar: #182eaa33;
  --blue-degrade1: rgb(24, 87, 170);
  --blue-degrade2: rgb(118, 162, 199);

  --purple-back-bar: #3f18aa33;
  --purple-degrade1: rgb(34, 24, 170);
  --purple-degrade2: rgb(133, 118, 199);

  --back-bar: var(--green-back-bar);
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
