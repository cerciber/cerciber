<template>
  <div v-show="!disableBack" class="photo-shape-back-curve">
  </div>
  <div class="photo-shape-picture-external-shpere-space">
    <div class="photo-shape-picture-external-shpere">
    </div>
    <div class="photo-shape-picture-internal-shpere" @click="show">
      <div class="photo-shape-picture-photo">
        <img :src="pathImage" class="photo-shape-picture-photo-content">
      </div>
      <div v-show="title" class="photo-shape-picture-title">
        <h1>{{title}}</h1>
      </div>
    </div>
  </div>
  <div class="overlay" v-if="showPopup" @click="hide">
    <div class="content"  @click="stopPropagation">
      <carousel :items-to-show="1">
        <slide v-for="(element, index) in images" :key="index">
          <video v-if="isVideo(element)" autoplay loop muted playbackRate="1.5" class="image">
            <source :src="element" type="video/mp4">
          </video>
          <img v-else :src="element" class="image">
        </slide>
        <template #addons>
          <navigation/>
        </template>
      </carousel>
    </div>
</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  name: 'headerComponent',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    pathImage: {
      type: String,
      default: ""
    },
    disableBack: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    images: {
      type: Array
    },
  },
  data() {
    return {
      showPopup: false,
      products: [
      {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bamboo Watch',
          description: 'Product Description',
          image: 'bamboo-watch.jpg',
          price: 65,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
      }
      ],
      responsiveOptions: [
          {
              breakpoint: '1400px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '1199px',
              numVisible: 3,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '575px',
              numVisible: 1,
              numScroll: 1
          }
      ]
    };
  },
  mounted() {
    
  },
  methods: {
    show() {
      this.showPopup = true
    },
    hide() {
      this.showPopup = false
    },
    stopPropagation(event) {
      event.stopPropagation();
    },
    isVideo(path) {
      const regex = /\.mp4$/i;
      return regex.test(path)
    }
  }
}
</script>

<style scoped>
.photo-shape-back-curve {
  min-width: 200%;
  max-width: 200%;
  mask-size: 100%;
  height: 200%;
  margin-top: 0%;
  margin-left: -50%;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  
  background: var(--degrade1);
  background: linear-gradient(63deg, var(--degrade1) 0%, var(--degrade2) 70%);

  mask-image: url('~@/user_interface/assets/Curve.png');
  z-index: -1;

  shape-outside: url('~@/user_interface/assets/Curve.png');
  shape-image-threshold: 0.5;
  shape-margin: 20px;
  float: left;
}

.photo-shape-picture-external-shpere-space {
  position: relative;
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 50%;
  width: 50%;
  height: 100%;
}
.photo-shape-picture-external-shpere {
  position: absolute;
  min-width: 550px;
  max-width: 550px;
  mask-size: 550px;
  height: 550px;
  margin-top: 0%;
  margin-left: 0%;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  
  background: var(--back-bar2);
  mask-image: url('~@/user_interface/assets/BackgroundSphere.png');
}

.photo-shape-picture-internal-shpere {
  position: absolute;
  display: flex;
  justify-content: center; 
  align-items: center;

  min-width: 400px;
  max-width: 400px;
  mask-size: 400px;
  height: 400px;
  margin-top: 50px;
  margin-left: -50px;

  border:10px solid var(--degrade3);    
  border-radius:50%;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  transition: 0.3s;
  
}

.photo-shape-picture-internal-shpere:hover {
  scale: 1.03;
  cursor: pointer;
}

.photo-shape-picture-photo {
  display: flex;
  justify-content: center; 
  align-items: center;
  min-width: 402px;
  max-width: 402px;
  height: 402px;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
}

.photo-shape-picture-photo-content {
  height: 100%;
}

.photo-shape-picture-title {
  position: absolute;
  margin-top: 375px;
  background-color: white;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 50px;
  border:5px solid var(--degrade3); 
}

.photo-shape-picture-title h1 {
  color: var(--degrade3);
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

/* Estilo para el contenido dentro del div */
.content {
  max-width: 100%;
  max-height: calc(60vh + 50px);
  min-width: 100%;
  min-height: calc(60vh + 50px);
  width: 100%;
  height: calc(60vh + 50px);
  color: white;
  text-align: center;
  font-size: 24px;
  pointer-events: all;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  background-color: rgba(0, 0, 0, 0.5)
}

.image {
  width: auto;
  height: 60vh;
  display: inline;
}

</style>
