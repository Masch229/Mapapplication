 import H from '@here/maps-api-for-javascript';

 // Initialize the platform object:
 var platform = new H.service.Platform({
 'apikey': '{YOUR_API_KEY}'
 });

 // Obtain the default map types from the platform object
 var maptypes = platform.createDefaultLayers();

 // Instantiate (and display) a map object:
 var map = new H.Map(
 document.getElementById('mapContainer'),
 maptypes.vector.normal.map,
 {
     zoom: 10,
     center: { lng: 9.01, lat: 48.81 }
 });
