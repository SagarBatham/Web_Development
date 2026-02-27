function orderFood(){
    return new Promise(function(res,rej){
        console.log("🍕Pizza Delivered")
        res();
    })
}

setTimeout(function(){
    orderFood();
},2000);