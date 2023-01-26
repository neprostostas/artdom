<template>

    <div class="products">

      <h2>Холодильное оборудование</h2>

      <div>
        <div class="imageGroupOne">
          <img src="../../src/assets/img/fridge1.jpg" alt="fridge1">
        </div>
        <p class="text">Современные и экологически безопасные вертикальные многоярусные витрины COOLES DECK, отвечающие последним тенденциям рынка, а также требованиям ЕС по энергоэффективности, Подходят для всех типов магазинов.</p>
      </div>

      <h3 class="projects p-tb">Проекты</h3>

      <div>
        <div class="imageGroupOne">
          <img src="../../src/assets/img/fridge3.png" alt="fridge3">
          <img src="../../src/assets/img/fridge2.png" alt="fridge2">
        </div>

        <div class="imageGroupOne">
          <img src="../../src/assets/img/fridge4.png" alt="fridge4">
          <img src="../../src/assets/img/fridge5.png" alt="fridge5">
        </div>

        <div class="imageGroupOne">
          <img src="../../src/assets/img/fridge6.png" alt="fridge6">
          <img src="../../src/assets/img/fridge7.png" alt="fridge7">
        </div>

        <div class="imageGroupTwo">
          <div class="part">
            <img src="../../src/assets/img/fridge8.png" alt="fridge8">
            <img src="../../src/assets/img/fridge9.png" alt="fridge9">
          </div>
          <div class="part">
            <img src="../../src/assets/img/fridge10.png" alt="fridge10">
            <img src="../../src/assets/img/fridge11.png" alt="fridge11">
          </div>
        </div>

        <div class="imageGroupOne">
          <img src="../../src/assets/img/fridge12.png" alt="fridge12">
        </div>

      </div>

    </div>

</template>

<script>

import {onBeforeMount} from "vue";

export default {
  name: 'Products',

  setup() {

    onBeforeMount(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    })

    return { }
  }
}
</script>

<style scoped>

.projects {
  font-size: 1.8em;
  line-height: 30px;
  color: #f3f3f3b0;
}

.p-tb {
  padding: 40px 0 30px;
}

.imageGroupOne {
  padding: 20px 0;
}

.imageGroupOne img {
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
}

.imageGroupTwo {
  display: grid;
  padding: 20px 0;
  gap: 30px;
}

.imageGroupTwo img {
  width: 100%;
}

.part {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
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

@media screen and (max-width: 825px) {
  .part {
    grid-template-columns: auto;
  }
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

</style>
