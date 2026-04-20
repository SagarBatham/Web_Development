function stepOne(cb) {
    console.log("Step_1")
    cb();
}
function stepTwo(cb) {
    console.log("Step_2")
    cb();
}
function stepThree(cb) {
    console.log("Step_3")
    cb();
}

stepOne(() => {
    stepTwo(() => {
        stepThree(() => {
            console.log("All Steps Called...");
        })
    });
});


//Promises
const pr=new Promise(function(res,rej){
    console.log("Instagram par Jao Data laooo");
    console.log("Instagram main data collect ho rha h");
    console.log("Instagram main data collect main error aaya");
    res();
})

pr.then(function(){
    console.log("Resolved")
}).catch(function(){
    console.log("Rejected")
});