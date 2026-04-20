function orderFood(){
    return new Promise(function(res,rej){
        res();
    })
}

function deliveryChance(){
    let per=Math.random()*100;
    return new Promise(function(res,rej){
        if(per<70){
            console.log("🍕Pizza Delivered")
            res();
        }else{
            console.log("❌Delivery Failed")
            rej();
        }
    })
}
setTimeout(function(){
    orderFood().then(deliveryChance).then(function(){
        console.log("Succesfully Delivered")
    })
    .catch(function(){
        console.log("Something Went Wrong")
    })
    
},0);