var playerData=JSON.parse(localStorage.getItem(localStorage.getItem("email")))
var emailobj=playerData.email
document.getElementById("playername").textContent=playerData.name
document.getElementById("playeremail").textContent=playerData.email
document.getElementById("token").textContent=playerData.token
document.getElementById("hs").textContent=playerData.highscore
document.getElementById("return").addEventListener("click",()=>{
    window.location.href="game.html"
})
document.getElementById("editplayername").addEventListener("click",()=>{
    document.getElementById("playername").style.display="none"
    document.getElementById("newname").style.display="block"
    document.getElementById("editplayername").style.display="none"
    document.getElementById("setplayername").style.display="block"
})

document.getElementById("setplayername").addEventListener("click",()=>{
    playerData.name=document.getElementById("newname").value
    localStorage.setItem(emailobj,JSON.stringify(playerData))
    document.getElementById("playername").style.display="block"
    document.getElementById("newname").style.display="none"
    document.getElementById("editplayername").style.display="block"
    document.getElementById("setplayername").style.display="none"
    document.getElementById("playername").textContent=playerData.name
})

document.getElementById("setprofilepic").onchange=()=>{
    document.getElementById("profilepic").src=URL.createObjectURL(document.getElementById("setprofilepic").files[0])
}

document.getElementById("logout").addEventListener("click",()=>{
    location.href="home.html"
})