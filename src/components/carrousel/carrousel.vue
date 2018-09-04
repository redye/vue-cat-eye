<template>
  <div class="banner-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in carrousels" :key="index">
        <img class="car-image" :src="slide.image" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: "Carrousel",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    carrousels: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        autoplay: true
      }
    }
  },
  methods: {
    onClick: function (index) {
      console.log(`onTap ==> ${index}`)
    }
  }
}
</script>

<style lang="scss">

@import '../../assets/style/layout.scss';

.banner-container {
  .car-image {
    width: 100%;
    height: 10.625rem;
  }
}
.swiper-pagination-bullet {
  height: 0.32rem;
  width: 1.2rem;
  @include borderRadius(0.16rem);
  background-color: #807f80;
}
.swiper-pagination-bullet-active {
  background-color: #fff;
  opacity: .7;
}
</style>

