<template>
  <div>
    <h1>{{ msg }}</h1>
    <div id="map"></div>

  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'
  import axios from 'axios'

  export default {
  name: 'Home',
  props: {
    msg: String,
    apiKey: String
  },
  mounted() {
      this.getPoi()
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
      //Api request for point of interests
      getPoi(){
          axios.get('http://localhost/poi')
              .then(res => {
                  //Display each poi on the map as a popup
                  res.data.poi.forEach(poi => {
                      new mapboxgl.Popup({closeButton: false, closeOnClick: false})
                          .setLngLat([poi.location[0], poi.location[1]])
                          .setHTML(poi.name+'<br>['+poi.location[0]+', '+poi.location[1]+']')
                          .addTo(this.map)
                  })


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
