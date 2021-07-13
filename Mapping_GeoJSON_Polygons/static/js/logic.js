// Add console.log to check to see if our code is working.
//console.log("working");

//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //maxZoom: 18,
    //accessToken: API_KEY
//});
 // We create the tile layer that will be the background of our map.
// let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Create a base layer that holds both maps.
// let baseMaps = {
//     "Streets": streets,
//     "Satellite Streets": satelliteStreets
//   };
// // Create the map object with a center and zoom level.
// let map = L.map('mapid',{
//     center: [43.7, -79.3],
//     zoom: 11,
//     layers: [satelliteStreets]
// });
// // Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);

// // Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/krishnakalisarkar/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data).addTo(map);
// });
//-----------------------------------------------------------------------------------------
// Add console.log to check to see if our code is working.
console.log("working");

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
 // We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
  };
// Create the map object with a center and zoom level.
let map = L.map('mapid',{
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/krishnakalisarkar/Mapping_Earthquakes/main/torontoNeighborhoods.json";
// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 1
}
// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
 
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data,{
    style: myStyle,
    onEachFeature: function(feature,layer){
        console.log(layer);
        layer.bindPopup("<h3>Neighborhood : " + feature.properties.AREA_NAME + "</h3>");
    }
  }).addTo(map);
  });
