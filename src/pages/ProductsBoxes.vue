<template>

    <div class="products">

      <h2>Кассовые боксы</h2>

      <div class="videoWrapper">
        <video id="video-tag" width="100%" height="100%" autoplay loop muted>
          <source src="../../src/assets/video/box1.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

      <img id="img-tag" src="video.mp4"/>

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

    </div>

</template>

<script>

import {onBeforeMount, onMounted} from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
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

.block {
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  padding: 30px 20px 10px;
  margin: 40px 0;
  transition: .5s all ease-in-out;
}

.block:hover {
  transition: .5s all ease-in-out;
  -webkit-box-shadow: -1px 3px 22px -11px rgba(255,255,255,1);
  -moz-box-shadow: -1px 3px 22px -11px rgba(255,255,255,1);
  box-shadow: -1px 3px 22px -11px rgba(255,255,255,1);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.block h3 {
  padding: 20px 0 30px;
  font-weight: 300;
  font-size: 26px;
  line-height: 22px;
  color: #e6b329;
}

.block p {
  padding: 25px 0 10px;
  font-weight: 400;
  font-size: 16px;
  color: #ffffffc2;
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
