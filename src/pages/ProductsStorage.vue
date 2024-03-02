<template>

    <div class="products">

      <h2>Складские cтеллажные cистемы</h2>

      <div class="videoWrapper">
        <video id="video-tag" playsinline autoplay loop muted>
          <source src="../../src/assets/video/storage1.mp4" type="video/mp4">
        </video>
      </div>

      <div>
        <div class="imageGroupOne">
          <img src="../../src/assets/img/storage-1.jpg" alt="storage-1">
        </div>
      </div>
      
      <p class="text">Мы предлагаем безопасные, эффективные, модульные СКЛАДСКИЕ СТЕЛЛАЖИ для розничной торговли, производства, фулфилмент-центров, дарксторов, фармацевтических компаний, электронной коммерции, почтовых и курьерских служб.</p>
    
    </div>
    
  </template>

<script>

import { onBeforeMount } from "vue";

export default {
  name: 'Products',

  setup() {

    onBeforeMount(() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    })

    return {

    }
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

</style>
