 var clicked=true;
document.addEventListener("click", function () {
    if (clicked) {
        var a = document.querySelector(".box h3");
        a.innerHTML = "Now We Are Friends"
        var b = document.querySelector(".box button");
        b.innerHTML = "Remove Friend";
        b.style.backgroundColor = "green";
        clicked=false;
        console.log("Click 1")
    }else{
        var a = document.querySelector(".box h3");
        a.innerHTML = "You want to be Friend"
        var b = document.querySelector(".box button");
        b.innerHTML = "Accept Request";
        b.style.backgroundColor = "red";
        clicked=true;
        console.log("Click 2")
    }
    })