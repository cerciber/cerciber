<template>
  <div class="header-back-sphere header-back-sphere1"></div>
  <div class="header-back-sphere header-back-sphere2"></div>
  <div class="header-back-sphere header-back-sphere3"></div>
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

  --green-back-bar: #18aa883b;
  --green-back-sphere: #18aa880f;
  --green-degrade1: rgba(24, 170, 136, 0.7);
  --green-degrade2: rgba(118,199,147, 0.7);

  --blue-back-bar: #1c5cff21;
  --blue-back-sphere: #184baa0a;
  --blue-degrade1: #0238c2b0;
  --blue-degrade2: #38B6FFb0;

  --orange-back-bar: #aa52181e;
  --orange-back-sphere: #f076130e;
  --orange-degrade1: #D8561Db0;
  --orange-degrade2: #f5994eb0;

  --purple-back-bar: #3f18aa33;
  --purple-back-sphere: #2218aa0a;
  --purple-degrade1: rgb(34, 24, 170, 0.7);
  --purple-degrade2: rgb(133, 118, 199, 0.7);

  --red-back-bar: #aa181833;
  --red-back-sphere: #aa18180a;
  --red-degrade1: rgb(170, 24, 24, 0.7);
  --red-degrade2: rgb(199, 118, 118, 0.7);

  --gray-back-bar: #b1b1b133;
  --gray-back-sphere: #8b8b8b0a;
  --gray-degrade1: rgba(93, 93, 93, 0.7);
  --gray-degrade2: rgba(111, 111, 111, 0.7);

  --yellow-back-bar: #a8aa1833;
  --yellow-back-sphere: #aaa0180a;
  --yellow-degrade1: rgba(121, 119, 16, 0.7);
  --yellow-degrade2: rgba(197, 194, 68, 0.7);

  /* General colors */
  --back-bar: var(--green-back-bar);
  --back-sphere: var(--green-back-sphere);
  --degrade1: var(--green-degrade1);
  --degrade2: var(--green-degrade2);

  --back-bar2: var(--green-back-bar);
  --back-sphere2: var(--green-back-sphere);
  --degrade3: var(--green-degrade1);
  --degrade4: var(--green-degrade2);

  --button-back-1: #313e50d7;
  --gray-back-1: #313e5048;
  --text-1: #ffffff;
  --text-2: #313e50f4;
  --white-back: #f3f2f2;

  --transition-time: 0.3s;
  --color-transition-time: 3s;

  animation: colorTransition 60s infinite;

}

@keyframes colorTransition {
  0% {
    --back-bar: var(--green-back-bar);
    --back-sphere: var(--green-back-sphere);
    --degrade1: var(--green-degrade1);
    --degrade2: var(--green-degrade2);
    --back-bar2: var(--green-back-bar);
    --back-sphere2: var(--green-back-sphere);
    --degrade3: var(--green-degrade1);
    --degrade4: var(--green-degrade2);
  }
  14.28% {
    --back-bar: var(--blue-back-bar);
    --back-sphere: var(--blue-back-sphere);
    --degrade1: var(--blue-degrade1);
    --degrade2: var(--blue-degrade2);
    --back-bar2: var(--blue-back-bar);
    --back-sphere2: var(--blue-back-sphere);
    --degrade3: var(--blue-degrade1);
    --degrade4: var(--blue-degrade2);
  }
  28.57% {
    --back-bar: var(--orange-back-bar);
    --back-sphere: var(--orange-back-sphere);
    --degrade1: var(--orange-degrade1);
    --degrade2: var(--orange-degrade2);
    --back-bar2: var(--orange-back-bar);
    --back-sphere2: var(--orange-back-sphere);
    --degrade3: var(--orange-degrade1);
    --degrade4: var(--orange-degrade2);
  }
  42.85% {
    --back-bar: var(--purple-back-bar);
    --back-sphere: var(--purple-back-sphere);
    --degrade1: var(--purple-degrade1);
    --degrade2: var(--purple-degrade2);
    --back-bar2: var(--purple-back-bar);
    --back-sphere2: var(--purple-back-sphere);
    --degrade3: var(--purple-degrade1);
    --degrade4: var(--purple-degrade2);
  }
  57.14% {
    --back-bar: var(--red-back-bar);
    --back-sphere: var(--red-back-sphere);
    --degrade1: var(--red-degrade1);
    --degrade2: var(--red-degrade2);
    --back-bar2: var(--red-back-bar);
    --back-sphere2: var(--red-back-sphere);
    --degrade3: var(--red-degrade1);
    --degrade4: var(--red-degrade2);
  }
  71.42% {
    --back-bar: var(--gray-back-bar);
    --back-sphere: var(--gray-back-sphere);
    --degrade1: var(--gray-degrade1);
    --degrade2: var(--gray-degrade2);
    --back-bar2: var(--gray-back-bar);
    --back-sphere2: var(--gray-back-sphere);
    --degrade3: var(--gray-degrade1);
    --degrade4: var(--gray-degrade2);
  }
  85.71% {
    --back-bar: var(--yellow-back-bar);
    --back-sphere: var(--yellow-back-sphere);
    --degrade1: var(--yellow-degrade1);
    --degrade2: var(--yellow-degrade2);
    --back-bar2: var(--yellow-back-bar);
    --back-sphere2: var(--yellow-back-sphere);
    --degrade3: var(--yellow-degrade1);
    --degrade4: var(--yellow-degrade2);
  }
  100% {
    --back-bar: var(--green-back-bar);
    --back-sphere: var(--green-back-sphere);
    --degrade1: var(--green-degrade1);
    --degrade2: var(--green-degrade2);
    --back-bar2: var(--green-back-bar);
    --back-sphere2: var(--green-back-sphere);
    --degrade3: var(--green-degrade1);
    --degrade4: var(--green-degrade2);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


@keyframes fadeOutRight {
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  100% {
    opacity: 0;
    transform: translateX(20px);
  }
}

@keyframes fadeOutCenter {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInCenter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

body {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

h1 {
  font-family: 'Lato';
  font-size: 40px;
  font-weight: 400;
  margin: 0px;
  color: var(--text-2);
}

h2 {
  font-family: 'Lato';
  font-size: 27px;
  font-weight: 400;
  margin: 0px;
  color: var(--text-2);
}

h2 b {
  font-family: 'Lato';
  font-size: 27px;
  font-weight: 900;
}

h3 {
  font-family: 'Montserrat';
  margin: 0px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-2);
}

p, li {
  font-family: 'Montserrat';
  margin: 0px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-2);
  line-height : 25px;
}

.header-back-sphere {
  position: absolute;
  z-index: -100;
  width: 800px;

  min-width: 800px;
  max-width: 800px;
  mask-size: 100%;
  height: 800px;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  
  background: var(--back-sphere2);

  mask-image: url('~@/user_interface/assets/BackgroundSphere.webp');
  overflow: hidden;
  
}

.header-back-sphere1 {
  margin-left: -0px;
  margin-top: -300px;
}

.header-back-sphere2 {
  margin-left: -200px;
  margin-top: -300px;
}

.header-back-sphere3 {
  margin-left: -400px;
  margin-top: -300px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 0px;
  background: transparent;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--degrade3); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--degrade3); 
}

::-webkit-scrollbar-corner {
  background: var(--degrade3); 
}

</style>
