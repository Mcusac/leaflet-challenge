function createFeatures(earthquakeData) {

    function onEachFeature(feature, layer) {
    
        layer.biindPopup(`<h3>${feature.properties.place}</h3><hr>`)
    }
    function changeColor(feature) {
        if (feature.properties.mag > 2)
        return 'black'
        else if (feature.properties.mag > 1)
        return 'orange'
        else
        return 'red'
    }
    function geojsonMarkerOptions(feature) {
        return {
            radius: feature.geometry.coordinates[2],
            fillColor: changeColor(feature),
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8

        }
    }
}