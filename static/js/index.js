var mymap = L.map('map').setView([32.9928, -117.1859], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: API_KEY
}).addTo(mymap);

d3.json("/api/locations").then(function(data) {
  // console.log(data);
  data.forEach(function(d) {
    // console.log(d);
    if (d.Avg_Speed >= 65) {
      color = 'green';
    } else if (d.Avg_Speed <= 25) {
      color = 'red';
    } else { 
      color = 'yellow';
    }
    var latsLons = [d.Latitude, d.Longitude];
    latsLons.forEach(function() {
      L.circle(latsLons, {color: color, radius: 100})
        .addTo(mymap);
      })
    })
});