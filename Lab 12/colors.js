const pac12_data = [];

function TeamObject(college, conference, overall, last, next) {
    let obj = {
        name: college,
        conference: conference,
        overall: overall,
        last_game: last,
        next_game: next
    };
    return obj;
}

pac12_data.push(TeamObject("OREGON", "7-2", "10-4", "L 32-47", "OKLA"));
pac12_data.push(TeamObject("WASHINGTON STATE", "6-3", "7-6", "L 21-24", "CMU"));
pac12_data.push(TeamObject("OREGON STATE", "5-4", "7-6", "L 13-24", "USU"));
pac12_data.push(TeamObject("CALIFORNIA", "4-5", "5-7", "W 24-14", "USC"));
pac12_data.push(TeamObject("WASHINGTON", "3-6", "4-8", "L 13-40", "WSU"));
pac12_data.push(TeamObject("STANFORD", "2-7", "3-9", "L 14-45", "ND"));

function Logo(name, url, id) {
    const myLogo = {
        name: name,
        url: url,
        id: id
    };
    return myLogo;
}

const logos = [];

logos.push(
    Logo(
        "Oregon",
        "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-oregon-color-2019.png",
        "orducks"
    ),
    Logo(
        "Washington-State",
        "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/washington-state-logo-color-out_2.png",
        "wacougars"
    ),
    Logo(
        "Oregon-State",
        "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-oregon-state-color-2019.png",
        "orbeavers"
    ),
    Logo(
        "California",
        "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-california-color-2019.png",
        "cal"
    ),
    Logo(
        "Washington",
        "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-washington-color-2019.png",
        "wahuskies"
    ),

    Logo(
        "Stanford",
        "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-stanford-color-2019.png",
        "stanford"
    )
);

var conferenceTable = document.getElementById('table_data');
let i = 0;

//Honestly no idea what a DOM Traversal is, looked in the textbook and also the slides but there is 
//no information on the slides other than one slide that does not actually explain a traversal. 
//I'm assuming it's iteration through an array which then is linked to the HTML table.
conferenceTable.innerHTML += "<thead><tr><th scope='col' class='col-sm-2'>NORTH DIVISION</th><th scope='col' class='col-sm-3'><th scope='col' class='col-sm-1 text-center'>CONFERENCE</th><th scope='col'>OVERALL</th><th scope='col'>LAST GAME</th><th scope='col'>NEXT GAME</tr></thead>";
conferenceTable.innerHTML += "<tbody><tr id='ou'><th scope='row' class='text-center'>" + "<img src='" +  logos[i]['url'] + "' height=30px></th><td>" + pac12_data[i]['name'] + "</td><td>" + pac12_data[i]['conference'] + "</td><td text-center>" + pac12_data[i]['overall'] + "</td><td text-center>" + pac12_data[i]['last_game'] + "</td><td text-center>" + pac12_data[i]['next_game'] + "</td></tr>";
i++;
conferenceTable.innerHTML += "<tbody><tr id='wsu'><th scope='row' class='text-center'>" + "<img src='" +  logos[i]['url'] + "' height=30px></th><td>" + pac12_data[i]['name'] + "</td><td>" + pac12_data[i]['conference'] + "</td><td text-center>" + pac12_data[i]['overall'] + "</td><td text-center>" + pac12_data[i]['last_game'] + "</td><td text-center>" + pac12_data[i]['next_game'] + "</td></tr>";
i++;
conferenceTable.innerHTML += "<tbody><tr id='osu'><th scope='row' class='text-center'>" + "<img src='" +  logos[i]['url'] + "' height=30px></th><td>" + pac12_data[i]['name'] + "</td><td>" + pac12_data[i]['conference'] + "</td><td text-center>" + pac12_data[i]['overall'] + "</td><td text-center>" + pac12_data[i]['last_game'] + "</td><td text-center>" + pac12_data[i]['next_game'] + "</td></tr>";
i++;
conferenceTable.innerHTML += "<tbody><tr id='cal'><th scope='row' class='text-center'>" + "<img src='" +  logos[i]['url'] + "' height=30px></th><td>" + pac12_data[i]['name'] + "</td><td>" + pac12_data[i]['conference'] + "</td><td text-center>" + pac12_data[i]['overall'] + "</td><td text-center>" + pac12_data[i]['last_game'] + "</td><td text-center>" + pac12_data[i]['next_game'] + "</td></tr>";
i++;
conferenceTable.innerHTML += "<tbody><tr id='uw'><th scope='row' class='text-center'>" + "<img src='" +  logos[i]['url'] + "' height=30px></th><td>" + pac12_data[i]['name'] + "</td><td>" + pac12_data[i]['conference'] + "</td><td text-center>" + pac12_data[i]['overall'] + "</td><td text-center>" + pac12_data[i]['last_game'] + "</td><td text-center>" + pac12_data[i]['next_game'] + "</td></tr>";
i++;
conferenceTable.innerHTML += "<tbody><tr id='su'><th scope='row' class='text-center'>" + "<img src='" +  logos[i]['url'] + "' height=30px></th><td>" + pac12_data[i]['name'] + "</td><td>" + pac12_data[i]['conference'] + "</td><td text-center>" + pac12_data[i]['overall'] + "</td><td text-center>" + pac12_data[i]['last_game'] + "</td><td text-center>" + pac12_data[i]['next_game'] + "</td></tr>";

