<template>

    <div class="downloads">

      <h2>Скачать</h2>

      <p>Наши Каталоги</p>

    </div>

</template>

<script>

export default {
  name: 'Downloads',

  setup() {

    return { }
  }
}
</script>

<style scoped>

.downloads {
  padding: 120px 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.downloads p {
  font-size: 20px;
  line-height: 30px;
  color: #f3f3f3b0;
}

.downloads h2  {
  padding: 15px 0;
  font-size: 60px;
  line-height: 80px;
  color: #ffffffc2;
}

@media screen and (max-width: 800px) {

  .downloads {
    padding: 80px 20px 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .downloads h2  {
    padding: 15px 0;
    font-size: 35px;
    line-height: 40px;
    color: #ffffffc2;
  }
}

</style>
