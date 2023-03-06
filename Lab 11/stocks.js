var companyName, marketCap, sales, profit, numberOfEmployees;

class Company {
    constructor(companyName, marketCap, sales, profit, numOfEmployees) {
        this.companyName = companyName;
        this.marketCap = marketCap;
        this.sales = sales;
        this.profit = profit;
        this.numberOfEmployees = numOfEmployees;
    }
}

var Microsoft = new Company('Microsoft', '$381.7B', '$86.8B', '$26.7B', '128,000');
var Symetra = new Company('Symetra Financial', '$2.7B', '$2.2B', '$978.3M', '1,400');
var Micron = new Company('Micron Technology', '$37.6B', '$16.4B', '$3.0B', '30,400');
var F5 = new Company('F5 Networks', '$9.5B', '$1.7B', '$526.3M', '3,834');
var Expedia = new Company('Expedia', '$10.8B', '$5.8B', '1.0B', '18,210');

var companies = [Microsoft, Symetra, Micron, F5, Expedia];

var table = document.getElementById("table_data");
table.innerHTML = "<th>Company</th> <th>Market Cap</th> <th>Sales</th> <th>Profit</th> <th>Number of Employees</th>";
companies.forEach(listInTable);

function listInTable(item) {
    table.innerHTML = table.innerHTML + "<tr><td>" + item.companyName + "</td><td>" + item.marketCap + "</td><td>" + item.sales
                        + "</td><td>" + item.profit + "</td><td>" + item.numberOfEmployees + "</td></tr>";
}
