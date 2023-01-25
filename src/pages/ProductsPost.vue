<template>

    <div class="products">

      <h2>Почтовые терминалы</h2>

      <div>
        <div class="imageGroupTwo">
            <img src="../../src/assets/img/post1.jpg" alt="post1">
            <img src="../../src/assets/img/post2.jpg" alt="post2">
        </div>
        <p class="text">РЕШЕНИЕ ДЛЯ ДОСТАВКИ В СЕКТОРАХ РОЗНИЧНОЙ ТОРГОВЛИ И ЛОГИСТИКИ - это часть современной экосистемы доставки от ТОО «Art Dom», объединяющей полноразмерные многофункциональные почтовые терминалы с широким спектром возможностей использования.</p>
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

@media screen and (max-width: 600px) {
  .imageGroupTwo {
    grid-template-columns: auto;
    gap: 15px;
  }
}

</style>
