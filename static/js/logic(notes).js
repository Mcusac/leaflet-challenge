var legend = L.control({position: 'bottomright'});
console.log(geojson.options.limits);
console.log(geojson.options.colors);
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = geojson.options.limits.map( m => Math.round(m)),
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(i) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);