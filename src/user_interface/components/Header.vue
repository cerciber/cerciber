<template>
  <header>
    <div class="header-middle-block">
    </div>
      <nav class="header-nav">
        <div class="header-nav-logo">
          <Logo/>
        </div>
        <div class="header-nav-items">
          <ul  class="header-nav-items-ul"> 
            <SelectMenuItem/>
          </ul>
          <ul  class="header-nav-items-ul"> 
            <SelectMenuItem :activeAux1 = "true"/>
          </ul>
          <ul  class="header-nav-items-ul"> 
            <SelectMenuItem/>
          </ul>
          <ul  class="header-nav-items-ul"> 
            <SelectMenuItem :activeAux2 = "true"/>
          </ul>
        </div>
        <div class="header-nav-contact-me">
          ContactMe
        </div>
      </nav>
  </header>
</template>

<script>
import Logo from './Header/Logo.vue'
import SelectMenuItem from './Header/SelectMenuItem.vue'

export default {
  name: 'headerComponent',
  components: {
    Logo,
    SelectMenuItem
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
  background-color:  var(--green1);
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
  width: 250px;
  background-color:  var(--test-color2);
} 

.header-nav-items-ul {
  float: left;
  height: 100%;
  width: 80px;
  margin: 0px;
  padding: 0px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
}

</style>
