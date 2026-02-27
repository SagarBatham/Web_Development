function PartOne(){
    return new Promise(function(res,rej){
        console.log("Part_1");
        res();
    })  
      
}

function PartTwo(){
    return new Promise(function(res,rej){
        console.log("Part_2");
        res();
    })
    
}

function PartThree(){
    return new Promise(function(res,rej){
        console.log("Part_3");
        res();
    })
    
}

PartOne()
.then(PartTwo)
.then(PartThree).then(()=>{
    console.log("All Part Executed")
})
