//Creating a Greeting Function
function greetkaro(start){
    return function(name){
        console.log(`${start}`,`${name}`)
    }
}
 var greets=greetkaro("Hello");
 greets("Sagar");
 greets("Uday");

 //Create a Function that can be only once
 function oneCall(fn){
    var executes=false;
    return function(){
        if(!executes){
            fn();
            executes=true;
        }else{
            console.error("Already Called")
        }
    }
 }

var ans= oneCall(function a(){
    console.log("calling...")
 })

 ans();
 ans();


//Make A function that will only run with a gap of 5 seconds

function throt(fn,delay){
    var time=0;
    return function(){
        var currentTime=Date.now();
        if(currentTime-time>=delay){
            time=currentTime;
            fn();
        }
    }
}

var delaytime=throt(function a(){
    console.log("Wait 5 seconds...")
},3000)
delaytime();
// delaytime();