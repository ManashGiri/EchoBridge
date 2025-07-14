let coords = [
    uploads.geometry.coordinates[1],
    uploads.geometry.coordinates[0],
]

const map = L.map('showmap').setView(coords, 12);
L.tileLayer( MAP_URL, {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const marker = L.marker(coords, { icon: greenIcon} ).addTo(map).bindPopup(`<h5>${uploads.owner.username} Contact Details</h5> <br>: +91 ${uploads.owner.phone}, ${uploads.owner.email}`).openPopup();

 needs.forEach(need => {
    if (need.geometry && need.geometry.type === "Point") {
      const [lng, lat] = need.geometry.coordinates;

      L.circleMarker([lat, lng], {
        radius: 6,
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.6
      }).addTo(map)
        .bindPopup(`<b>${need.location}</b> <br> ${need.owner.username} needs ${need.category} <br> ${need.description} <br> Contact: +91 ${need.owner.phone}, ${need.owner.email} <br>`);
    }
  });
