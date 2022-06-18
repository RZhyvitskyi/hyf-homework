const renderMap = (latitude, longitude) => {
  var map = new ol.Map({
    target: 'map',
    controls: ol.control.defaults({
      attribution: false,
      zoom: false,
      rotate: false,
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([longitude, latitude]),
      zoom: 4,
    }),
  });

  var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([longitude, latitude])
          ),
        }),
      ],
    }),
  });
  map.addLayer(layer);
};

export default renderMap;
