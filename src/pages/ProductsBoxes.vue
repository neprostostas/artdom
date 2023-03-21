<template>

    <div class="products">

      <h2>Кассовые боксы</h2>

      <div class="videoWrapper">
        <video id="video-tag" playsinline autoplay loop muted>
          <source src="../../src/assets/video/box1.mp4" type="video/mp4">
        </video>
      </div>

      <div>
        <div class="imageGroupTwo">
          <div class="part">
            <img src="../../src/assets/img/box1.jpg" alt="box1">
            <img src="../../src/assets/img/box2.jpg" alt="box2">
          </div>
          <div class="part">
            <img src="../../src/assets/img/box3.jpg" alt="box3">
            <img src="../../src/assets/img/box4.jpg" alt="box4">
          </div>
        </div>
        <p class="text">Современные покупатели в значительной степени ориентируются на опыт и желают качественного и быстрого обслуживания. Эти факторы приводят к основательным изменениям в имидже классических магазинов. Трансформация торговой площади требует эволюции оборудования и методов оплаты, внедрения новых концептов и программных средств.Кассовые боксы EVO CELINE созданы, чтобы удовлетворить ожидания самых требовательных клиентов, гарантируя скорость, удобство и персонализацию покупательского опыта.</p>
      </div>

      <h3 class="projects p-tb">Зона закассовая с гранитной столешницей, мойкой Width</h3>

      <div class="imageGroupOne">
        <img src="../../src/assets/img/box1_1.jpeg" alt="box1_1">
        <img src="../../src/assets/img/box1_2.jpeg" alt="box1_2">
        <img src="../../src/assets/img/box1_3.jpeg" alt="box1_3">
      </div>


      <h3 class="projects p-tb">Проекты</h3>

      <div>
        <div class="imageGroupOne">
          <img src="../../src/assets/img/box5.png" alt="box5">
        </div>
        <div class="imageGroupOne">
          <img src="../../src/assets/img/box6.png" alt="box6">
        </div>
      </div>


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

.projects {
  font-size: 1.8em;
  line-height: 30px;
  color: #f3f3f3b0;
}

.p-tb {
  padding: 40px 0 30px;
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

@media screen and (max-width: 825px) {
  .part {
   grid-template-columns: auto;
  }
}

</style>
