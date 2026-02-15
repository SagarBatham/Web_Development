// var boxy=document.querySelector("#box");
var boxy=document.getElementById("box");
boxy.style.backgroundColor="green";
boxy.innerHTML="<h1>Html Code</h1>";
boxy.textContent="<h1>As it is Text</h1>";

var b=document.querySelector("button");
document.addEventListener("click",function(){
    b.style.backgroundColor="red";
    b.textContent="Already Clicked";
    boxy.style.backgroundColor='Yellow';
})