<template>

    <div class="products">

      <h2>Стеллажные cистемы</h2>

      <div class="videoWrapper">
        <video id="video-tag" width="100%" height="100%" autoplay loop muted>
          <source src="../../src/assets/video/stelage1.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

      <img id="img-tag" src="../../src/assets/video/stelage1.mp4" alt="img-tag"/>

      <div>
        <div class="imageGroupTwo">
          <div class="part">
            <img src="../../src/assets/img/stelage1.jpg" alt="stelage1">
            <img src="../../src/assets/img/stelage2.jpg" alt="stelage2">
          </div>
          <div class="part">
            <img src="../../src/assets/img/stelage3.jpg" alt="stelage3">
            <img src="../../src/assets/img/stelage4.jpg" alt="stelage4">
          </div>
        </div>
        <p class="text">Беспрецедентный bestseller и надежная основа нашего продуктового ассортимента - стеллажные системы в самых разнообразных их вариациях. Мы объединили лучшие мировые тенденции ритейла с собственным опытом изготовления и реализации оборудования и получили самые современные решения, удовлетворяющие всем актуальным рыночным тенденциям. Модульный дизайн систем позволяет адаптировать их к любым условиям продаж, а широкий спектр аксессуарных дополнений и возможных комбинаций позволяет превратить базовые конструкции систем на индивидуальные решения именно для вашего пространства.</p>
      </div>

    </div>

</template>

<script>

import {onBeforeMount, onMounted} from "vue";

export default {
  name: 'Products',

  setup() {

    function BrowserDetection() {

      //Check if browser is Safari, if it is, hide the <video> tag, otherwise hide the <img> tag
      if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
          document.getElementById('video-tag').style.display= "none";
      } else {
          document.getElementById('img-tag').style.display= "none";
      }               

    }

    onBeforeMount(() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    })

    onMounted(() => {
      BrowserDetection();
    })

    return { }
  }
}
</script>

<style scoped>

#img-tag {
  width: 100%;
  height: 100%;
}

.part {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
}

.imageGroupTwo {
  display: grid;
  padding: 20px 0;
  gap: 30px;
}

.imageGroupOne img {
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
}

.imageGroupTwo img {
    width: 100%;
}

.products {
  padding: 120px 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.products p {
  font-size: 20px;
  line-height: 30px;
  color: #f3f3f3b0;
}

.products h2  {
  padding: 15px 0;
  font-size: 60px;
  line-height: 80px;
  color: #ffffffc2;
}

.text {
  padding: 0 0 20px;
}

@media screen and (max-width: 800px) {

  .products {
    padding: 80px 20px 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .products h2  {
    padding: 15px 0;
    font-size: 35px;
    line-height: 40px;
    color: #ffffffc2;
  }
}

@media screen and (max-width: 825px) {
  .part {
   grid-template-columns: auto;
  }
}

@media screen and (max-width: 600px) {
  .imageGroupTwo {
    grid-template-columns: auto;
    gap: 15px;
  }
}

</style>
