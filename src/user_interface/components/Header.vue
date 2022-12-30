<template>
  <header>
    <div class="header-middle-block"></div>
    <div class="header-back-sphere header-back-sphere1"></div>
    <div class="header-back-sphere header-back-sphere2"></div>
    <div class="header-back-sphere header-back-sphere3"></div>
    <nav class="header-nav">
      <div class="header-nav-logo">
        <Logo/>
      </div>
      <div class="header-nav-items">
        <ul class="header-nav-items-ul"> 
          <SelectMenuItem  contentText = "Who am I" redirectPath="/whoami"/>
        </ul>
        <ul class="header-nav-items-ul"> 
          <SelectMenuItem  contentText = "Portfolio" redirectPath="/portfolio" :activeAux1 = "true"/>
        </ul>
        <ul class="header-nav-items-ul"> 
          <SelectMenuItem  contentText = "CV" redirectPath="/cv"/>
        </ul>
        <ul class="header-nav-items-ul"> 
          <SelectMenuItem  contentText = "Pillars" redirectPath="/pillars" :activeAux2 = "true"/>
        </ul>
      </div>
      <div class="header-nav-contact-me">
        <Button1 :contentText = "'Contact me'" redirectPath="/contactme"/>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from './Header/Logo.vue'
import SelectMenuItem from './Header/SelectMenuItem.vue'
import Button1 from './Header/Button1.vue'

export default {
  name: 'headerComponent',
  components: {
    Logo,
    SelectMenuItem,
    Button1
  }
}
</script>

<style scoped>

header {
  position: relative;
  height: 80px;
  width: 100%;
}

.header-middle-block {
  position: absolute;
  height: 43px;
  width: 100%;
  background-color: var(--back-bar);
  z-index: -1;
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

  mask-image: url('~@/user_interface/assets/BackgroundSphere.png');
  
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

.header-nav {
  float: left;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.header-nav-logo {
  float: left;
  height: 100%;
  min-width: 160px;
  max-width: 160px;
}

.header-nav-items {
  float: left;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
}

.header-nav-contact-me {
  float: left;
  height: 100%;
  width: 250px;
} 

.header-nav-items-ul {
  float: left;
  height: 100%;
  width: 80px;
  margin: 0px;
  padding: 0px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 3px;
}

</style>
