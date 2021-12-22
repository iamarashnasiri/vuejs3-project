<template>
  <Carousel />
  <HomeBody />
  <Footer />
</template>

<script>
import Carousel from "./Carousel.vue";
import HomeBody from "./HomeBody.vue";
import Footer from "./Footer.vue";
import { ref } from "@vue/reactivity";
import { provide } from "@vue/runtime-core";
export default {
  components: {
    Carousel,
    HomeBody,
    Footer
  },
  setup() {
    const carouselCaption = ref("welcome to vue.js v.3 project");
    provide("carouselCaption", carouselCaption);
    return {
      carouselCaption,
    };
  },
};
</script>

<style>
</style>