const publicToken =
  "pk.eyJ1IjoiYXJub2xkcm96b24iLCJhIjoiY2p0YW02cDlpMGNsdDQ0cDdqaWZia29yMCJ9.pRRQbG5ebhZ_YSz8-an7jw";
const coords = {
  lat: 41.8756,
  lon: -87.6245
};
const mapOptions = {
  id: "{id}",
  z: "{z}",
  x: "{x}",
  y: "{y}",
  r: "{r}"
};
const { id, z, x, y, r } = mapOptions;
const chiMap = L.map("chiMap").setView([coords.lat, coords.lon], 13);
const onMapClick = e => {
  alert("You clicked the map at " + e.latlng);
};

L.tileLayer(
  `https://api.mapbox.com/styles/v1/arnoldrozon/cjtamryrf1c651fsf16g24hl2/tiles/256/${z}/${x}/${y}@2x?access_token=${publicToken}`,
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: publicToken
  }
).addTo(chiMap);

chiMap.on("click", onMapClick);
