<template>
  <div id="app">
    <Home msg="Checkout my favorite lunch spot!" api-key="pk.eyJ1IjoiZGFub2hhbW1lciIsImEiOiJjaW5jMWYza3owbzAwdTNsd29vNnozZmtsIn0.L_pKW48Ot590vIBgFemTTQ"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
