function userDetails(getDet){
    const data={
        user:["Honey","Money","Bunny"],
        post:["Hell Yeah","Nice","Very Good"]
    }

    let delay=Math.random()*2000+1000;

    return new Promise(function(res,rej){
        setTimeout(function(){
            res(data[getDet]);
        },delay)
        
    });
}

userDetails("user").then(function(data){
    console.log(data);
})

userDetails("post").then(function(data){
    console.log(data);
})