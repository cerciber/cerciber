<template>
  <div 
    :class="'external-link ' + (
      imageLogo == 'github' ? 'external-link-github' : 
      imageLogo == 'linkedin' ? 'external-link-linkedin' : 
      imageLogo == 'mail' ? 'external-link-mail' : 
      imageLogo == 'tiktok' ? 'external-link-tiktok' : 
      imageLogo == 'twitter' ? 'external-link-twitter' : ''
    )"
    
    v-on:click="goTo">
  </div>
</template>

<script>
export default {
  name: 'headerComponent',
  props: {
    imageLogo: {
      type: String,
      default: ""
    },
  },
  methods: {
    goTo: function () {
      this.$emit('goTo');
    }
  }
}
</script>

<style scoped>
.external-link {
  width: 100%;

  min-width: 100%;
  max-width: 100%;
  mask-size: 100%;
  height: 100%;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;

  background: var(--degrade1);
  background: linear-gradient(63deg, var(--degrade1) 0%, var(--degrade2) 70%);
}

.external-link-linkedin {
  mask-image: url('~@/user_interface/assets/logo-linkedin.webp');
}

.external-link-github {
  mask-image: url('~@/user_interface/assets/logo-github.webp');
}

.external-link-mail {
  mask-image: url('~@/user_interface/assets/logo-mail.webp');
}

.external-link-tiktok {
  mask-image: url('~@/user_interface/assets/logo-tiktok.webp');
}

.external-link-twitter {
  mask-image: url('~@/user_interface/assets/logo-twitter.webp');
}
</style>
