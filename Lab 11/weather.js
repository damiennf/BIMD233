var avgHighTemp, avgLowTemp, fiveDayAverage, day;

var highs = [82, 75, 69, 69, 69];
var lows = [55, 52, 52, 48, 51];
var allTemps = [82, 55, 75, 52, 69, 52, 69, 48, 69, 51];


function Day(day) {
    this.day = day;
}

var day1 = new Day('Friday');
var day2 = new Day('Saturday');
var day3 = new Day('Sunday');
var day4 = new Day('Monday');
var day5 = new Day('Tuesday');

var days = [day1, day2, day3, day4, day5];

function getSum(total, num) {
    return total + num;
}

function calculateAverageHigh() {
    return Math.floor((highs.reduce(getSum)) / 5);
}

function calculateAverageLow() {
    return Math.floor((lows.reduce(getSum)) / 5);
}

function calculateAverage() {
    return Math.floor((allTemps.reduce(getSum)) / 10);
}

var weatherTable = document.getElementById('table_data');

weatherTable.innerHTML += "<tr><td colspan='3'> Average High: " + calculateAverageHigh() + "</td></tr>";

weatherTable.innerHTML += "<tr><td colspan='3'> Average Low: " + calculateAverageLow() + "</td></tr>";

weatherTable.innerHTML += "<tr><td colspan='3'> Average Temperature: " + calculateAverage() + "</td></tr>";