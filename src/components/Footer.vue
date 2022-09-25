<template>

  <footer>

    <div class="footerWrapper">
      <div class="footerAbsolute">

        <p>ARTDOM {{new Date().getFullYear()}}. All rights reserved.</p>

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
  /* background: #f3f3f3; */
  /* background: #ffffff; */
  background: #1c1c1c;
}

.footerAbsolute {
  z-index: 999;
  max-width: 1200px;
  margin: 0 auto;
  /* background: #f3f3f3; */
  /* background: #ffffff; */
  background: #1c1c1c;
  padding: 30px 60px;
  color: #ffffff;
}

.footerAbsolute p {
  text-align: center;
  color: #d0ca56f0;
}

@media screen and (max-width: 800px) {
  .footerAbsolute {
    padding: 20px 60px;
  }
}

</style>
