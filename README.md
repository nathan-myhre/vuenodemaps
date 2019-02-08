# Project vuenodemaps


## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Ensure the following dependencies are installed:
* [git](https://www.atlassian.com/git/tutorials/install-git)
* [npm](https://www.npmjs.com/get-npm)
* [node](https://nodejs.org/)

#### Live link to the app
https://vuenodemaps.herokuapp.com/

### Installing: 

Clone the repo and navigate into the project folder
```
git clone https://github.com/nathan-myhre/vuenodemaps.git vuenodemaps
cd vuenodemaps
```

Install dependancies
```
npm install
```

Build the app, this uses the `vue-cli-service` to create a `/dist` directory and minify JS/CSS/HTML
```
npm run build
```

Run the app locally
```
node server.js
```

The default port is set to 80, but the port can be changed within the server.js file
```
http://localhost
```

### Built with:
* [Expressjs](http://expressjs.com/)
* [Vue.js](https://vuejs.org/)
* [Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/api/)
