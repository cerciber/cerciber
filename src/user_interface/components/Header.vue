<template>
  <header>
    <div class="header-middle-block"></div>
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
      <div class="header-nav-menu">
        <div :class="'hamburguer-icon-cover ' + (openMenu ? 'hamburguer-icon-cover-show' : '')"  v-on:click="changeMenuState">
          <div class="hamburguer-icon"></div>
        </div>
        <div :class="'header-nav-menu-list ' + (openMenu ? 'header-nav-menu-list-show' : 'header-nav-menu-list-hide')">
          <ul class="header-nav-items-ul-menu"> 
            <SelectMenuItem  contentText = "Who am I" redirectPath="/whoami"/>
          </ul>
          <ul class="header-nav-items-ul-menu"> 
            <SelectMenuItem  contentText = "Portfolio" redirectPath="/portfolio" :activeAux1 = "true"/>
          </ul>
          <ul class="header-nav-items-ul-menu"> 
            <SelectMenuItem  contentText = "CV" redirectPath="/cv"/>
          </ul>
          <ul class="header-nav-items-ul-menu"> 
            <SelectMenuItem  contentText = "Pillars" redirectPath="/pillars" :activeAux2 = "true"/>
          </ul>
          <ul class="header-nav-items-ul-menu"> 
            <SelectMenuItem  contentText = "Contact me" redirectPath="/contactme"/>
          </ul>
        </div>
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
  },
  data() {
    return {
      openMenu: false
    }
  },
  methods: {
    changeMenuState: function () {
      this.openMenu = !this.openMenu;
    }
  }
}
</script>

<style scoped>

header {
  position: relative;
  height: 80px;
  min-width: 100%;

  opacity: 0;
  animation: fadeInDown 1s ease-out forwards;
}

.header-middle-block {
  position: absolute;
  height: 43px;
  width: 100%;
  background-color: var(--back-bar);
  transition: var(--color-transition-time);
  z-index: -1;
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
  min-width: 180px;
  max-width: 180px;
} 

.header-nav-menu {
  float: left;
  height: 100%;
  min-width: 0px;
  max-width: 0px;
  visibility: hidden;
  transition: var(--transition-time);
  cursor: pointer;
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
  transition: var(--transition-time);
  cursor: pointer;
  
}

.header-nav-items-ul:hover {
  scale: 1.1;
}

.header-nav-items-ul-menu {
  float: left;
  height: 100%;
  width: 0px;
  margin: 0px;
  padding: 0px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 3px;
  transition: var(--transition-time);
  cursor: pointer;
}

.header-nav-items-ul-menu:hover {
  scale: 1.1;
}

.hamburguer-icon-cover {
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 50px;
  padding: 5px;
  margin-top: 0px;
  border-radius: 10px;
  
  background: var(--degrade1);
  transition: var(--transition-time);
}

.hamburguer-icon-cover-show {
  margin-right: 40px;
}

.hamburguer-icon {
  min-width: 100%;
  max-width: 100%;
  mask-size: 100%;
  height: 45px;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;

  background: white;

  mask-image: url('~@/user_interface/assets/Hamburger_icon.webp');
}

.header-nav-menu-list {
  visibility: hidden;
  position: absolute;
  display: grid;
  height: 500px;
  margin-top: 615px;
  margin-right: 40px;
  background-color: var(--back-bar);
  padding-top: 60px;
  border-radius: 0px 0px 10px 10px;
}

.header-nav-menu-list-show {
  visibility: visible;

  opacity: 0;
  animation: fadeInLeft 0.3s ease-out forwards;
}

.header-nav-menu-list-hide {
  visibility: hidden;
  animation: fadeOutRight 0.3s ease-out forwards;
  pointer-events: none;
}

@keyframes fadeOutRightAndTrim {
  0% {}
  100% {
    opacity: 0;
    transform: translateX(20px);
    min-width: 0px;
    max-width: 0px;
    min-width: 0px;
    width: 0px;
  }
}

@media only screen and (max-width: 900px) {
  .header-nav-items {
    visibility: hidden;
  }

  .header-nav-items-ul {
    animation: fadeOutRightAndTrim 0.3s ease-out forwards;
  }

  .header-nav-items-ul-menu {
    cursor: default;
  }

  .header-nav-contact-me {
    visibility: hidden;
    animation: fadeOutRightAndTrim 0.3s ease-out forwards;
  }

  .header-nav-menu {
    visibility: visible;
    display: flex;
    justify-content: center; 
    align-items: center;
    min-width: 100px;
    max-width: 100px;
    cursor: default;
  }

}

</style>
