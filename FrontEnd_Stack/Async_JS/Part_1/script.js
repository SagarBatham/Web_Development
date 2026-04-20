//These are Asyncronous part of Code
/*promise
Callbacks
setTimeout
setInterval
async await*/

// console.log("Hey");
// setTimeout(function(){
//     console.log("Sagar");
// },5000);

//Main thread- Jaha par sync code chalta hai sbse pehle
console.log("Hey1");
setTimeout(function(){
    console.log("Hey2");
},0)
Promise.resolve().then(function(){
    console.log("Hey3");
})
console.log("Hey4");