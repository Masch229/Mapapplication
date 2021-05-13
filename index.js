import(/* webpackChunkName: "mapsjs" */ '@here/maps-api-for-javascript').then(
    ({ default: H }) => {
        var platform = new H.service.Platform({
        'apikey': '{2vrpDEAl6OdUnsU44hp2}'
        });
   
        // Obtain the default map types from the platform object
        var maptypes = platform.createDefaultLayers();
   
        // Instantiate (and display) a map object:
        var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.vector.normal.map,
        {
            zoom: 10,
            center: { lng: 13.4, lat: 52.51 }
        });
    }
    ).catch(error => console.log(error));
   