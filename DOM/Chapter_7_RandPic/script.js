

// var c=document.createElement("h1");
// console.log(c);
var btn=document.querySelector("button");
var body=document.querySelector("body");
btn.addEventListener("mousemove",function(){
    var up=Math.random()*100;
    var down=Math.random()*100;
    var right=Math.random()*100;
    var left=Math.random()*100;
    var a=document.createElement("img");
    a.setAttribute("id","imgCreates");
    a.setAttribute("src","ben.png");
    a.style.position="absolute";
    a.style.left=left+"%";
    a.style.top=up+"%";
    a.style.right=right+"%";
    a.style.down=down+"%";

    body.appendChild(a);
})