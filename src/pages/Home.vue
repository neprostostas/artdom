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

    <h2>ARTDOM</h2>

    <p>Добро пожаловать в ARTDOM, ваш универсальный магазин для всех ваших потребностей в розничной выкладке и хранении. Мы специализируемся на производстве и продаже качественных стеллажей, витрин, контрольно-кассовой техники, холодильного оборудования. Благодаря широкому ассортименту товаров у нас есть что-то подходящее для любого бизнеса, будь то небольшой бутик или крупный универмаг. Наши продукты разработаны с учетом как функциональности, так и стиля, поэтому вы можете быть уверены, что получаете лучшее из обоих миров. Просмотрите нашу подборку сегодня и узнайте, как ARTDOM может помочь вам улучшить ваше торговое пространство.</p>

  </div>

</template>

<script>

import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide
  },


  setup() {
    const carouselSlides = ["img-1", "img-2", "img-3", "img-4"];
    return {
      carouselSlides
    }
  }
}
</script>

<style lang="scss" scoped>

.home {
  padding: 120px 80px 70px;
  max-width: 1200px;
  margin: 0 auto;
}

.home p {
  font-size: 20px;
  line-height: 30px;
  color: #f3f3f3b0;
}

.home h2  {
  padding: 15px 0;
  font-size: 60px;
  line-height: 80px;
  color: #ffffffc2;
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
  transition: .3s all linear;
}

.carouselWrapper p:hover {
  cursor: pointer;
  color: #e6b329;
  transition: .3s all linear;
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

@media screen and (max-width: 800px) {
  .home h2  {
    font-size: 35px;
    line-height: 40px;
    color: #ffffffc2;
  }
}

@media screen and (max-width: 675px) {

  .home {
    padding: 80px 20px 30px;
    max-width: 1200px;
    margin: 0 auto;
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
