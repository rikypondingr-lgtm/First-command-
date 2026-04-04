function login(){

    const name = document.getElementById("username").value;

    if(name.trim() === ""){
        alert("Please enter your name 💖");
        return;
    }

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("lovePage").classList.remove("hidden");

    document.getElementById("greetTitle").innerHTML = "💖 Welcome " + name + " 💖";
}

function showLove(){

    document.getElementById("loveMsg").style.display="block";

}

/* Floating Hearts */

setInterval(()=>{

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),6000);

},300);

