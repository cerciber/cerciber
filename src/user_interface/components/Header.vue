<template>
  <header>
    <div class="header-middle-block">
    </div>
    <div class="header-content">
      <div class="header-content-logo">
        Cerciber
      </div>
      <nav class="header-content-nav">
        <ul  class="header-content-nav-ul"> 
					
				</ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headerComponent'
}
</script>

<style scoped>

header {
  position: relative;
  height: 80px;
  width: 100%;
  background-color:  var(--test-color1);
}

.header-middle-block {
  position: absolute;
  height: 40px;
  width: 100%;
  background-color:  var(--test-color1);
}

.header-content {
  position: absolute;
  height: 80px;
  width: 100%;
  background-color:  var(--test-color1);
}

.header-content-logo {
  float: left;
  height: 80px;
  width: 80px;
  background-color:  var(--test-color1);
}

.header-content-nav {
  float: left;
  height: 80px;
  width: calc(100% - 80px);
  background-color:  var(--test-color2);
}

.header-content-nav-ul {
  height: 80px;
  width: 80px;
  margin: 0px;
  padding: 0px;
  background-color:  var(--test-color3);
}

</style>
