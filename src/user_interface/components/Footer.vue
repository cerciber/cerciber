<template>
  <footer>
    <div class="footer-items">
        <ul  class="footer-items-ul"> 
          <ExternalLink imageLogo="linkedin"/>
        </ul>
        <ul  class="footer-items-ul"> 
          <ExternalLink imageLogo="github"/>
        </ul>
        <ul  class="footer-items-ul"> 
          <ExternalLink imageLogo="twitter"/>
        </ul>
        <ul  class="footer-items-ul"> 
          <ExternalLink imageLogo="tiktok"/>
        </ul>
        <ul  class="footer-items-ul"> 
          <ExternalLink imageLogo="mail"/>
        </ul>
    </div>
  </footer>
</template>

<script>
import ExternalLink from './Footer/ExternalLink.vue'

export default {
  name: 'footerComponent',
  components: {
    ExternalLink
  }
}
</script>

<style scoped>

footer {
  position: absolute;
  top: calc(100% - 43px);
  height: 43px;
  width: 100%;
  background-color: var(--back-bar);
  z-index: -1;
}

.footer-items {
  display: flex;
}

.footer-items-ul {
  min-width: 44px;
  max-width: 44px;
  width: 44px;
  min-height: 44px;
  max-height: 44px;
  margin: 0px;
  padding: 0px;
  margin-top: -8px;
  margin-left: 10px;
}

</style>
