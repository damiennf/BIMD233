var make, model, color, year, price;

function Car(make, model, color, year, price) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
    this.price = price;
}

var car1 = new Car('Nissan', 'Ariya', 'Black Diamond Pearl', '2023', '$44,485');
var car2 = new Car('Jeep', 'Grand Cherokee', 'White', '2023', '$51,935');
var car3 = new Car('Ford', 'F-350 XLT', 'Race Red', '2022', '$63,113');
var car4 = new Car('Chevrolet', 'Volt LT', 'Kinetic Blue', '2018', '$15,699');
var car5 = new Car('Volkswagen', 'Beetle 2.0 TSi', 'Reef Blue', '2013', '$15,499');
var cars = [car1, car2, car3, car4, car5];


var carTable = document.getElementById('table_data');
carTable.innerHTML = "<th>Make</th> <th>Model</th> <th>Color</th> <th>Year</th> <th>Price</th>"
var i = 0;
carTable.innerHTML += "<tr><td>" + cars[i]['make'] + "</td><td>" + cars[i]['model'] + "</td><td>" 
                    + cars[i]['color'] + "</td><td>" + cars[i]['year'] + "</td><td>" + cars[i]['price']
                    + "</td></tr>";

i = 1;
carTable.innerHTML += "<tr><td>" + cars[i]['make'] + "</td><td>" + cars[i]['model'] + "</td><td>" 
                    + cars[i]['color'] + "</td><td>" + cars[i]['year'] + "</td><td>" + cars[i]['price']
                    + "</td></tr>";

i = 2;
carTable.innerHTML += "<tr><td>" + cars[i]['make'] + "</td><td>" + cars[i]['model'] + "</td><td>" 
                    + cars[i]['color'] + "</td><td>" + cars[i]['year'] + "</td><td>" + cars[i]['price']
                    + "</td></tr>";

i = 3;
carTable.innerHTML += "<tr><td>" + cars[i]['make'] + "</td><td>" + cars[i]['model'] + "</td><td>" 
                    + cars[i]['color'] + "</td><td>" + cars[i]['year'] + "</td><td>" + cars[i]['price']
                    + "</td></tr>";

i = 4;
carTable.innerHTML += "<tr><td>" + cars[i]['make'] + "</td><td>" + cars[i]['model'] + "</td><td>" 
                    + cars[i]['color'] + "</td><td>" + cars[i]['year'] + "</td><td>" + cars[i]['price']
                    + "</td></tr>";

    
    
/*
Chevrolet
Volt LT
Kinetic Blue
2018
$15,699

Volkswagen
Beetle 2.0 TSi
Reef Blue
2013
$15,499
*/