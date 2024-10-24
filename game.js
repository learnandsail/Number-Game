function getRandom(max, min) {
    return (Math.random() * (max - min) + min).toFixed(0)
}

function mainGame() {
    Level.textContent = level
    document.getElementById("score").textContent=score
    if (level <= 4) {
        if (operation.textContent == "+") {
            qns1.textContent = getRandom(99, 0)
            qns2.textContent = getRandom(99, 0)
            total = Number(qns1.textContent) + Number(qns2.textContent)
        } else if (operation.textContent == "-") {
            qns1.textContent = getRandom(99, 0)
            qns2.textContent = getRandom(99, 0)
            while (Number(qns1.textContent) < Number(qns2.textContent)) {
                qns1.textContent = getRandom(99, 0)
                qns2.textContent = getRandom(99, 0)
            }
            total = Number(qns1.textContent) - Number(qns2.textContent)
        } else if (operation.textContent == "*") {
            qns1.textContent = getRandom(9, 1)
            qns2.textContent = getRandom(9, 1)
            total = Number(qns1.textContent) * Number(qns2.textContent)
        } else if (operation.textContent == "/") {
            qns1.textContent = getRandom(99, 10)
            qns2.textContent = getRandom(9, 1)
            total = (Number(qns1.textContent) / Number(qns2.textContent)).toFixed(0)
        }
    } else {
        if (operation.textContent == "+") {
            qns1.textContent = getRandom(99, 0)
            qns2.textContent = getRandom(99, 0)
            qns3.textContent = getRandom(99, 0)
            total = Number(qns1.textContent) + Number(qns2.textContent) + Number(qns3.textContent)
        } else if (operation.textContent == "-") {
            qns1.textContent = getRandom(99, 51)
            qns2.textContent = getRandom(50, 31)
            qns3.textContent = getRandom(30, 0)
            while (Number(qns1.textContent) < Number(qns2.textContent) && Number(qns2.textContent) < Number(qns3.textContent)) {
                qns1.textContent = getRandom(99, 51)
                qns2.textContent = getRandom(50, 31)
                qns3.textContent = getRandom(30, 0)
            }
            total = Number(qns1.textContent) - Number(qns2.textContent) - Number(qns3.textContent)
        } else if (operation.textContent == "*") {
            qns1.textContent = getRandom(9, 1)
            qns2.textContent = getRandom(5, 1)
            qns3.textContent = getRandom(3, 1)
            total = Number(qns1.textContent) * Number(qns2.textContent) * Number(qns2.textContent)
        }
    }

    console.log(total)

    var checkAnsIsSetOrNot = [0, 0, 0, 0]
    var checkAnsIsSetOrNotObject = ["first", "second", "third", "fourth"]
    var checkAnsIsSetOrNotSelector = getRandom(3, 0)

    if (checkAnsIsSetOrNotSelector == 0) {
        document.getElementById("first").textContent = total
        checkAnsIsSetOrNot[0] = 1
    } else if (checkAnsIsSetOrNotSelector == 1) {
        document.getElementById("second").textContent = total
        checkAnsIsSetOrNot[1] = 1
    } else if (checkAnsIsSetOrNotSelector == 2) {
        document.getElementById("third").textContent = total
        checkAnsIsSetOrNot[2] = 1
    } else if (checkAnsIsSetOrNotSelector == 3) {
        document.getElementById("fourth").textContent = total
        checkAnsIsSetOrNot[3] = 1
    }

    for (var item in checkAnsIsSetOrNot) {
        if (checkAnsIsSetOrNot[item] == 0) {
            document.getElementById(checkAnsIsSetOrNotObject[item]).textContent = operation.textContent == "/" ? getRandom(20, 1) : getRandom(total + 15, total - 15)
        }
    }

}


function checkGameOver() {
    if (Heart == 0) {
        document.querySelector(".main").classList.add("blur");
        document.getElementById("overlayGameOver").style.display = "flex"
        document.getElementById("finalScore").textContent=score
        document.getElementById("home").addEventListener("click",()=>{
            location.href="profile.html"
        })
        document.getElementById("restart").addEventListener("click",()=>{
            location.href="game.html"
        })
    }
    if (level > 11) {
        document.querySelector(".main").classList.add("blur");
        document.getElementById("wonthegame").style.display = "flex"
        setTimeout(() => {
            location.href="profile.html"
        }, 1500);
    }
}

function timeout(timetag, timeLimit) {
    if (tl) {
        clearInterval(tl)
    }
    tl = setInterval(() => {
        timeLimit--
        timetag.textContent = timeLimit
        if (timeLimit == 0) {
            Heart = 0
            checkGameOver()
            clearInterval(tl)
        }
    }, 1000)
}

function levelAssign(level) {
    if (level <= 4) {
        timer = 31
    } else if (level <= 8) {
        timer = 21
    } else if (level <= 12) {
        timer = 11
    }
    if (level > 4) {
        document.getElementById("question").style.width="50%"
        for(var i=0;i<document.querySelectorAll(".card").length;i++){
            document.querySelectorAll(".card")[i].style.width="20%"
        }
        document.querySelector(".card1").style.width="20%"
        document.querySelector(".cardop").style.width="10%"
        document.querySelector(".cardop1").style.width="10%"
        cardop1.style.display = "flex"
        card1.style.display = "flex"
    }

    if (level <= 4) {
        if (level == 1) {
            operation.textContent = "+"
        } else if (level == 2) {
            operation.textContent = "-"
        } else if (level == 3) {
            operation.textContent = "*"
        } else if (level == 4) {
            operation.textContent = "/"
        }
    } else {
        if (level == 5 || level == 8) {
            operation.textContent = "+"
            operation1.textContent = "+"
        } else if (level == 6 || level == 9) {
            operation.textContent = "-"
            operation1.textContent = "-"
        } else if (level == 7 || level == 10) {
            operation.textContent = "*"
            operation1.textContent = "*"
        }
    }

}

function levelUpgrade() {
    if (rightAnswer == 3) {
        level++
        document.querySelector(".main").classList.add("blur");
        document.getElementById("overlay").style.display = "flex"
        setTimeout(() => {
            document.querySelector(".main").classList.remove("blur");
            document.getElementById("overlay").style.display = "none"
        }, 1000)
        Level.textContent = level
        levelAssign(level)
        rightAnswer = 0
        clearInterval(tl)
        timeout(Time, timer)
    }
}

function setHighScoreAndScore(){
    score++
    if(playerData.highscore<score){
        playerData.highscore=score
        localStorage.setItem(localStorage.getItem("email"),JSON.stringify(playerData))
    }
}

function allCheck() {
    levelUpgrade()
    mainGame()
    checkGameOver()
}


var qns1 = document.getElementById("qns1")
var qns2 = document.getElementById("qns2")
var qns3 = document.getElementById("qns3")
var cardop1 = document.getElementsByClassName("cardop1")[0]
var card1 = document.getElementsByClassName("card1")[0]
var operation = document.getElementById("operation")
var operation1 = document.getElementById("operation1")
var Level = document.getElementById("level")
var playerData=JSON.parse(localStorage.getItem(localStorage.getItem("email")))
var total = 0
var Heart = 3
var rightAnswer = 0
var level = 1
var tl
var timer = 30
var score=0
var heart = document.getElementById("heart")
heart.textContent = Heart
var firstbtn = document.getElementById("first")
var secondbtn = document.getElementById("second")
var thirdbtn = document.getElementById("third")
var fourthbtn = document.getElementById("fourth")
var Time = document.getElementById("time")
cardop1.style.display = "none"
card1.style.display = "none"




mainGame()

timeout(Time, timer)

firstbtn.addEventListener("click", () => {
    if (firstbtn.textContent == total) {
        rightAnswer++
        setHighScoreAndScore()
    } else {
        Heart--
        heart.textContent = Heart
    }
    allCheck()
})
secondbtn.addEventListener("click", () => {
    if (secondbtn.textContent == total) {
        rightAnswer++
        setHighScoreAndScore()
    } else {
        Heart--
        heart.textContent = Heart

    }
    allCheck()
})
thirdbtn.addEventListener("click", () => {
    if (thirdbtn.textContent == total) {
        rightAnswer++
        setHighScoreAndScore()
    } else {
        Heart--
        heart.textContent = Heart
    }
    allCheck()
})
fourthbtn.addEventListener("click", () => {
    if (fourthbtn.textContent == total) {
        rightAnswer++
        setHighScoreAndScore()
    } else {
        Heart--
        heart.textContent = Heart
    }
    allCheck()
})

document.getElementById("profile").addEventListener("click",()=>{
    location.href="profile.html"
})