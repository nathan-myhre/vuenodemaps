<template>
  <div>
    <h1>{{ msg }}</h1>
    <div id="map"></div>

  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'

  export default {
  name: 'Home',
  props: {
    msg: String,
    apiKey: String
  },
  mounted() {
      this.createMap()
  },
  methods: {
      //Draw map on screen
      createMap() {
          mapboxgl.accessToken = this.apiKey
          this.map = new mapboxgl.Map({
              container: 'map',
              minzoom: 1.3,
              style: 'mapbox://styles/mapbox/streets-v9',
              center: [-123.329773, 48.4284],
              zoom: 11,
          })

      },
  }
}
</script>

<style scoped>
  #map {
    position:relative;
    top: 0;
    bottom: 0;
    width: 90%;
    height: 100vh;
    margin:0;
  }
</style>
