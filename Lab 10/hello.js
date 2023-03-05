function getUserandPass() {
    var x = document.getElementById("myUser").value;
    var y = document.getElementById("myPsw").value;
    console.log("Username: " + x);
    console.log("Password: " + y);
    document.getElementById("user").innerHTML = "Username: " + x;
    document.getElementById("pass").innerHTML = "Password: " + y;

}
