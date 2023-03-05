function calcCircleGeometries() {
    var radius = parseFloat(document.getElementById("radius").value);
    var area = Math.PI * radius * radius;
    var circumference = 2 * Math.PI * radius;
    var diameter = 2 * radius;
    var geometries = [area, circumference, diameter];
    document.getElementById("result").innerHTML = `Area: ${area.toFixed(3)}, Circumference: ${circumference.toFixed(3)}, Diameter: ${diameter.toFixed(2)}`;
    return geometries;
}