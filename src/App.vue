<template>
  <div id="app">
    <img id="logo" src="./assets/cornell-steals-logo.png">
    <router-view/>
    <shop product_name="Bose Speaker" original_price="100.69" product_price="20.69" remaining="10"/>
    
  </div>
</template>

<script>

import shop from './views/shop.vue'
export default {
  name: 'App',
  components: {
    shop
  }
}
</script>

<style>
html {
  background-color: #2e3131;
}
#logo {
  margin-top: 20px;
  height: auto;
  width: 50vw;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
