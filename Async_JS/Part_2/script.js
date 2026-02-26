//sync -> call stack -> main thread execution
//async -> webAPI -> callBack Queue -> (call Stack Empty) -> Call Stack -> Main thread

function getDetails(uername,cb){
    setTimeout(function(){
        console.log("Sending The Request to Instagram...")
    },1000);
    setTimeout(function(){
        console.log("Fetching Data...")
    }, 5000);
    setTimeout(function(){
        cb();
    },9000)
}

getDetails("VanshHardam",function(){
    console.log("Data Saved in Gallery.")
});