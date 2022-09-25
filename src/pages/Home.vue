<template>

  <div class="carouselWrapper">
    <Carousel
      :navigation="false"
      :pagination="false"
      :startAutoPlay="true"
      :timeout="3000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`../assets/${slide}.jpg`)" alt="" />
        </div>
      </Slide>
    </Carousel>
    <p>WE CREATE RETAIL NEW</p>
  </div>

  <div class="home">

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, qui numquam vitae blanditiis sed cupiditate pariatur. Recusandae laboriosam ea cumque dolore officia rerum aspernatur nam, vitae labore necessitatibus fugiat neque iste minus dolorem deserunt in nesciunt aut, fuga ab animi cupiditate quia eaque provident optio. Recusandae reprehenderit accusantium velit rerum consectetur sunt voluptatum voluptatem, qui aperiam veniam cumque optio veritatis mollitia labore quam maxime ullam eligendi magni quaerat repudiandae saepe culpa perspiciatis? Laudantium voluptatum consectetur, corporis voluptate vero ipsa sit doloremque soluta autem facilis hic quae ipsam omnis ipsum alias aspernatur maiores. Itaque optio eveniet ut numquam fuga rem. Nulla.</p>

  </div>

</template>

<script>

import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home',
  components: {
    Carousel,
    Slide
  },


  setup() {
    const carouselSlides = ["img-1", "img-2", "img-3"];
    return {
      carouselSlides
    }
  }
}
</script>

<style lang="scss" scoped>

.home {
  padding: 120px 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.carouselWrapper {
  position: relative;
}

.carouselWrapper p {
  font-size: 100px;
  line-height: 120px;
  max-width: 300px;
  font-weight: 800;
  color: #FFFFFF;
  z-index: 9;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -30%);
}

.carousel {
  position: relative;
  top: 60px;
  max-height: 100%;
  height: 100vh;

  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;

    img {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 700px) {
  .carousel {
    height: 600px;

    .slide-info {

      img {
        height: 600px;
      }
    }
  }

  .carouselWrapper p {
    font-size: 50px;
    line-height: 70px;
    max-width: 200px;
    font-weight: 700;
  }

}

@media screen and (max-width: 490px) {
  .carouselWrapper p {
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

</style>
