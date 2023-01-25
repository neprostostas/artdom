<template>

    <div class="events">

      <h2>События</h2>

      <p>Наши События</p>

    </div>

</template>

<script>

export default {
  name: 'Events',

  setup() {

    return { }
  }
}
</script>

<style scoped>

.events {
  padding: 120px 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.events p {
  font-size: 20px;
  line-height: 30px;
  color: #f3f3f3b0;
}

.events h2  {
  padding: 15px 0;
  font-size: 60px;
  line-height: 80px;
  color: #ffffffc2;
}

@media screen and (max-width: 800px) {

  .events {
    padding: 80px 20px 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .events h2  {
    padding: 15px 0;
    font-size: 35px;
    line-height: 40px;
    color: #ffffffc2;
  }
}

</style>
