function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.(com|in)$/;

    if (emailPattern.test(email)) {
        console.log("Valid email");
        return true;
    } else {
        console.log("Invalid email");
        return false;
    }
}

var SignIn = document.getElementById("SignIn");
var Name = document.getElementById("playerName");
var email = document.getElementById("playerEmail");
var playerpass = document.getElementById("playerpass");
var playerrepass = document.getElementById("playerrepass");

SignIn.addEventListener("click", () => {
    var hasError = false;

    if (Name.value == "") {
        Name.style.border = "2px solid red";
        hasError = true;
        setTimeout(() => {
            Name.style.border = "2px solid rgb(0, 221, 63)";
        }, 3000);
    }

    if (email.value == "") {
        email.style.border = "2px solid red";
        hasError = true;
        setTimeout(() => {
            email.style.border = "2px solid rgb(0, 221, 63)";
        }, 3000);
    } else if (!validateEmail(email.value)) {
        email.style.border = "2px solid red";
        hasError = true;
        setTimeout(() => {
            email.style.border = "2px solid rgb(0, 221, 63)";
        }, 3000);
    }

    if (playerpass.value == "" || playerrepass.value == "" || playerpass.value != playerrepass.value) {
        playerpass.style.border = "2px solid red";
        playerrepass.style.border = "2px solid red";
        hasError = true;
        setTimeout(() => {
            playerpass.style.border = "2px solid rgb(0, 221, 63)";
            playerrepass.style.border = "2px solid rgb(0, 221, 63)";
        }, 3000);
    }

    if (hasError) return;

    var emailobj = email.value;
    var allDetail = {
        name: Name.value,
        email: email.value,
        password: playerpass.value,
        highscore: 0,
        token: (Math.random() * (9999 - 1) + 1).toFixed(0)
    };
    localStorage.setItem(emailobj, JSON.stringify(allDetail));
    window.location.href = "home.html";
});
