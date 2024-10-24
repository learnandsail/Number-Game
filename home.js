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

var getstarted = document.getElementById("getstart");
var email = document.getElementById("playerEmail");
var playerpass = document.getElementById("playerpass");
var overlay = document.getElementById("overlay");

getstarted.addEventListener("click", () => {
    var playerData = JSON.parse(localStorage.getItem(email.value));
    
    if (email.value == "") {
        email.style.border = "2px solid red";
        setTimeout(() => {
            email.style.border = "2px solid rgb(0, 221, 63)";
        }, 1500);
        return;
    } 
    else if (!validateEmail(email.value)) {
        email.style.border = "2px solid red";
        setTimeout(() => {
            email.style.border = "2px solid rgb(0, 221, 63)";
        }, 1500);
        return;
    }

    if (playerpass.value == "") {
        playerpass.style.border = "2px solid red";
        setTimeout(() => {
            playerpass.style.border = "2px solid rgb(0, 221, 63)";
        }, 2000);
        return;
    }

    if (playerData && playerpass.value === playerData.password) {
        localStorage.setItem("email", email.value);
        document.querySelector(".main").classList.add("blur");
        overlay.style.display = "flex";
        setTimeout(() => {
            location.href = "game.html";
        }, 1500);
    } 
    else {
        playerpass.style.border = "2px solid red";
        setTimeout(() => {
            playerpass.style.border = "2px solid rgb(0, 221, 63)";
        }, 2000);
    }
});
