<template>

  <footer>

    <div class="footerWrapper">
      <div class="footerAbsolute">

        <div>Футер</div>

      </div>
    </div>

  </footer>

</template>

<script>

export default {
  name: 'CustomFooter',

  setup() {

    return { }
  }
}
</script>

<style scoped>

.footerWrapper {
  background: #f3f3f3;
  /* background: #ffffff; */
}

.footerAbsolute {
  z-index: 999;
  max-width: 1200px;
  margin: 0 auto;
  background: #f3f3f3;
  /* background: #ffffff; */
  padding: 20px 60px;
}


</style>
