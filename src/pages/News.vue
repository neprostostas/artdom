<template>

  <div class="news">

    <h2>Новости</h2>

    <div class="videoWrapper">
      <video id="video-tag" playsinline autoplay loop muted>
        <source src="../../src/assets/video/news1.mp4" type="video/mp4">
      </video>
    </div>

  </div>

</template>

<script>

import { onBeforeMount } from "vue";

export default {
  name: 'News',

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

.news {
  padding: 120px 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.news p {
  font-size: 20px;
  line-height: 30px;
  color: #f3f3f3b0;
}

.news h2  {
  padding: 15px 0;
  font-size: 60px;
  line-height: 80px;
  color: #ffffffc2;
}

@media screen and (max-width: 800px) {

  .news {
    padding: 80px 20px 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .news h2  {
    padding: 15px 0;
    font-size: 35px;
    line-height: 40px;
    color: #ffffffc2;
  }
}

</style>
