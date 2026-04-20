var a=document.querySelector("h1");
var b=a.getAttribute("id");
a.setAttribute("id","heroine")
console.log(a);
console.log(b);

var b=document.createElement("h1");
b.innerHTML="Hello Kaise Ho";
var body=document.querySelector("body");
body.appendChild(b);
