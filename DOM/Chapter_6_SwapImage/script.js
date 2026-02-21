var a=document.querySelector("#img1 img");
var b=document.querySelector("#img2 img");

var btn=document.querySelector("button");
btn.addEventListener("click",function(){
    var img1=a.getAttribute("src");
    var img2=b.getAttribute("src");
    a.setAttribute("src",img2);
    b.setAttribute("src",img1);
})