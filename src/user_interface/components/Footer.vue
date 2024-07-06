<template>
  <footer>
    <div class="footer-items">
        <ul  class="footer-items-ul"> 
          <ExternalLink imageLogo="linkedin" v-on:goTo="goToLinkedIn"/>
        </ul>
        <ul  class="footer-items-ul"> 
          <ExternalLink imageLogo="github" v-on:goTo="goToGitHub"/>
        </ul>
        <ul  class="footer-items-ul"> 
          <ExternalLink imageLogo="twitter" v-on:goTo="goToTwitter"/>
        </ul>
        <ul  class="footer-items-ul"> 
          <ExternalLink imageLogo="tiktok" v-on:goTo="goToTikTok"/>
        </ul>
        <ul  class="footer-items-ul"> 
          <ExternalLink imageLogo="mail" v-on:goTo="goToMail"/>
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
  },
  methods: {
    goToLinkedIn: function () {
      window.open('https://www.linkedin.com/in/cerciber/', '_blank', 'noreferrer');
    },
    goToGitHub: function () {
      window.open('https://github.com/cerciber', '_blank', 'noreferrer');
    },
    goToTwitter: function () {
      window.open('https://twitter.com/cerciber', '_blank', 'noreferrer');
    },
    goToTikTok: function () {
      window.open('https://www.tiktok.com/@cerciber', '_blank', 'noreferrer');
    },
    goToMail: function () {
      var emailTo = 'cerdiber@hotmail.com'
      var emailCC = ''
      var emailSub = ''
      var emailBody = ''
      window.open('mailto:'+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody, '_self');
    }
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
  transition: var(--color-transition-time);
  z-index: -1;

  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
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
  transition: var(--transition-time);
  cursor: pointer;
}

.footer-items-ul:hover {
  scale: 1.1;
}

</style>
