//https://stackoverflow.com/questions/11071314/javascript-execute-after-all-images-have-loaded
//Took this code from an answer as half of the time the image that displayed the state machine
//Would not load before the script executed. I tried using defer, onloading, and turning the
//script into a module but none of them were consistent.

//Edit: After even more testing, this doesn't work either. I'm not well-versed enough to
//know how to fix this.

var imgs = document.images,
    len = imgs.length,
    counter = 0;

[].forEach.call( imgs, function( img ) {
    if(img.complete)
      incrementCounter();
    else
      img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
    counter++;
    if ( counter === len ) {
        console.log( 'All images loaded!' );
    }
}
//End of code snippet

//Start of my code

var state = "Idle";
var cmd = prompt('Enter an initial command (Current State: Idle): ', '');


do {
    switch(state) {
        case "Idle":
            if (cmd === "run") {
                this.state = "S1";
            }
            break;
        
        case "S1":
            if (cmd === "next") {
                this.state = "S2";
            }
            if (cmd === "skip") {
                this.state = "S3";
            }
            if (cmd === "prev") {
                this.state = "S4";
            }
            break;
        
        case "S2":
            if (cmd === "next") {
                this.state = "S3";
            }
            break;
        
        case "S3":
            if(cmd === "home") {
                this.state = "Idle";
            }
            if (cmd === "next") {
                this.state = "S4";
            }
            break;
        
        case "S4":
            if (cmd === "next") {
                this.state = "S1";
            }
            break;
    }

    cmd = getUserInput();
} while (cmd != "exit");

function getUserInput() {
    return prompt('Enter a command (Currently ' + state + '): ');
}