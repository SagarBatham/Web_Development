var load = document.querySelector("#growth");
var per = document.querySelector("#percent");
var btn = document.querySelector("#btn");

var btn=document.querySelector("button");
var flag=0;
btn.addEventListener('click',function(){
    if(flag==0){
        var grow=0;
    var interval = setInterval(function () {
        if (grow <= 100) {
            load.style.width = grow + "%";
            per.innerHTML = grow + "%";
            grow++;
        } else {
            clearInterval(interval);
            btn.innerHTML = "Downloaded";
            btn.classList.remove("bg-green-400");
            btn.classList.add("bg-gray-500");
        }
        flag=1;
    }, 50);
    }
    
})