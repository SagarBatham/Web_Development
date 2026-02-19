var load=document.querySelector("#growth");
var per=document.querySelector("h3");


var btn=document.querySelector("button");
btn.addEventListener('click',function(){
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

    }, 50);
    setTimeout(() => {
        clearInterval(l);
    }, 5000);
})