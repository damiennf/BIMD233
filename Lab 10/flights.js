var airline, number, origin, destination, dep_time, arrival_time, flight_duration;

function Flight(airline, number, origin, destination, dep_time, arrival_time) {
    this.airline = airline;
    this.number = number;
    this.origin = origin;
    this.destination = destination;
    this.dep_time = dep_time;
    this.arrival_time = arrival_time;
    this.flight_duration = FlightDuration(dep_time, arrival_time);
}

function FlightDuration(dep_time, arrival_time) {
    var t1 = new Date('January 1, 2023 ' + dep_time);
    var t2 = new Date('January 1, 2023 ' + arrival_time);
    var diff = t2.getTime() - t1.getTime();
    var hours = Math.floor(diff / 3600000);
    var minutes = (diff % 3600000) / 60000;
    var duration = `${hours.toFixed(0)} hours, ${minutes.toFixed(0)} minutes`;
    return duration;
}

var flight1 = new Flight('Alaskan Airlines', '1077', 'Washington Dulles Intl (KIAD)', 'San Francisco Intl (KSFO)', '07:32:00 EST', '10:10:00 PST');
var flight2 = new Flight('Alaskan Airlines', '1088', 'San Francisco Intl (KSFO)', 'Washington Dulles Intl (KIAD)', '03:58:00 PST', '11:28:00 EST');
var flight3 = new Flight('Alaskan Airlines', '1097', 'Washington Dulles Intl (KIAD)', 'Los Angeles Intl (KIAD)', '05:06:00 EST', '07:24:00 PST');
var flight4 = new Flight('Alaskan Airlines', '11', 'Newark Liberty Intl (KEWR)', 'Seattle Tacoma Intl (KSEA)', '05:00:00 EST', '07:27:00 PST');
var flight5 = new Flight('Alaskan Airlines', '1113', 'Will Rogers World (KOKC)', 'Seattle Tacoma Intl (KSEA)', '05:40:00 CST', '07:11:00 PST');

var flights = [flight1, flight2, flight3, flight4, flight5];

var flightsTable = document.getElementById('table_data');

flightsTable.innerHTML = "<th>Airline</th> <th>Number</th> <th>Origin</th> <th>Destination</th> <th>Departure Time</th> <th>Arrival Time</th> <th>Flight Duration</th>";
var i = 0;

flightsTable.innerHTML += "<tr><td>" + flights[i]['airline'] + "</td><td>" + flights[i]['number'] + "</td><td>" 
                    + flights[i]['origin'] + "</td><td>" + flights[i]['destination'] + "</td><td>" + flights[i]['dep_time']
                    + "</td><td>" + flights[i]['arrival_time'] + "</td><td>" + flights[i]['flight_duration'] + "</td></tr>";

var i = 1;
flightsTable.innerHTML += "<tr><td>" + flights[i]['airline'] + "</td><td>" + flights[i]['number'] + "</td><td>" 
                    + flights[i]['origin'] + "</td><td>" + flights[i]['destination'] + "</td><td>" + flights[i]['dep_time']
                    + "</td><td>" + flights[i]['arrival_time'] + "</td><td>" + flights[i]['flight_duration'] + "</td></tr>";

var i = 2;
flightsTable.innerHTML += "<tr><td>" + flights[i]['airline'] + "</td><td>" + flights[i]['number'] + "</td><td>" 
                                        + flights[i]['origin'] + "</td><td>" + flights[i]['destination'] + "</td><td>" + flights[i]['dep_time']
                                        + "</td><td>" + flights[i]['arrival_time'] + "</td><td>" + flights[i]['flight_duration'] + "</td></tr>";

var i = 3;
flightsTable.innerHTML += "<tr><td>" + flights[i]['airline'] + "</td><td>" + flights[i]['number'] + "</td><td>" 
                    + flights[i]['origin'] + "</td><td>" + flights[i]['destination'] + "</td><td>" + flights[i]['dep_time']
                    + "</td><td>" + flights[i]['arrival_time'] + "</td><td>" + flights[i]['flight_duration'] + "</td></tr>";

var i = 4;
flightsTable.innerHTML += "<tr><td>" + flights[i]['airline'] + "</td><td>" + flights[i]['number'] + "</td><td>" 
                                        + flights[i]['origin'] + "</td><td>" + flights[i]['destination'] + "</td><td>" + flights[i]['dep_time']
                                        + "</td><td>" + flights[i]['arrival_time'] + "</td><td>" + flights[i]['flight_duration'] + "</td></tr>";