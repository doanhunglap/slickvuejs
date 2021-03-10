<template>
  <div>
    <VueSlickCarousel v-bind="carouselSettings">
      <div v-for="n in number" :key='n'>
          <h1>{{n}}</h1>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      number: [1, 2, 3, 4, 5, 6, 7,8,9,10,11],
      carouselSettings: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        touchThreshold: 5,
      },
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: red;
  height: 150px;
}
</style>
