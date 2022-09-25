<template>
  <MainLayout/>
</template>

<script>
import MainLayout from './components/MainLayout.vue'

export default {
  name: 'App',
  components: {
    MainLayout,
  },

  setup() {

    return {
      
    }
  }
}
</script>

<style>

body {
  background: #FFFFFF;
}

body.static {
  overflow-y: hidden;
}

body, h1, h2, h3, h4, h5, p {
  margin: 0;
}

ul {
  list-style-type: none;
}

button, a {
  cursor: pointer;
}

a {
  text-decoration: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  font-family: 'DMSans', sans-serif;
  /* transition: .5s all ease-in-out; */
}

</style>
