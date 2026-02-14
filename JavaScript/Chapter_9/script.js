//Call a Function with a 3sec Delay

// function timecallout(a){
//     setInterval(a,3000);
// }

// timecallout(function a(){
//     console.log("Hey")
// });

//Make a .map for yourself
var arr=[1,2,3,4,5];
function abcd(arr,fn){
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        newarr.push(fn(arr[i]))
    }
    return newarr;
}

var ans=abcd(arr,function(val){return val+3;});

//Make a Counter
// function counter(){
//     var counts=0;
//     return function(){
//         counts++;
//         console.log(counts);
//     }
// }

// var a=counter();
// a();
// a();


//Limit the Caling of the function
function limitcall(fn,limit){
    let totalcalled=0;
    return function(){
        if(totalcalled<limit){
            totalcalled++;
            fn();
        }
    }
}

var ans=limitcall(function(){
    console.log("Heloo")
},3);

ans();
ans();
ans();


