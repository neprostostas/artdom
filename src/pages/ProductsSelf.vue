<template>

    <div class="products">

      <h2>Оборудование для самообслуживания</h2>

      <div>
        <div class="imageGroupOne">
            <img src="../../src/assets/img/self1.jpg" alt="self1">
        </div>
        <p class="text">Самообслуживание и создание новых возможностей с помощью цифровых технологий - приоритетные направления совершенствования современного ритейла. Кассы самообслуживания SELINE OT Modern Expo предоставляют покупателям удобные и эффективные инструменты для совершения покупок и улучшают качество покупок с помощью цифровых технологий.</p>
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

.imageGroupOne {
  padding: 20px 0;
}

.imageGroupOne img {
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
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

</style>
