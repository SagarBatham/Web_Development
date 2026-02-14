//DOM-Document Object Model
//Frontend kii JavaScript

//4 Pillars of JavaSript
/* - Selection of Element
   -Changing HTML
   -Changing CSS
   -Event Listener*/
   
var h=document.querySelector("h1")

h.innerHTML="Badal Gya"

h.style.color="red"

h.style.backgroundColor="Blue"

h.addEventListener("click",function(){
    h.innerHTML="Firse Badal Gya aur Bada ho Gya"
    h.style.color="blue"
    h.style.backgroundColor="red"
    h.style.fontSize="50px"
    console.log("Hey Guys")
})