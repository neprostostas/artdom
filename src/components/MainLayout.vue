<template>
  <div class="MainLayout">
    <CustomHeader/>
    <main>
      <router-view></router-view>
    </main>
    <CustomFooter/>
  </div>
</template>

<script>

import CustomHeader from '../components/Header.vue'
import CustomFooter from '../components/Footer.vue'

export default {
  name: 'MainLayout',
  components: {
    CustomHeader,
    CustomFooter,
  },

  setup() {

    return { }
  }

}
</script>


<style scoped>

</style>
