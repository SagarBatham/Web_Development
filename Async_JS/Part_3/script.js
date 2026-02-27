function getuser(){
    return new Promise((res,rej)=>{
        res({id:1,name:"Sagar"});
    });
}

function getPosts(userId){
    return new Promise((res,rej)=>{
        res(["Title-1","Title-2"])
    })
}
function getCmnts(userId){
    return new Promise((res,rej)=>{
        res(["Hellooo","How Are You","Nice"])
    })
}



getuser().then(function(data){
    console.log(`Fetched Data: ${data.name}`);
    return getPosts(data.id);
})
.then(function(titles){
    console.log(titles);
    return getCmnts("userId");
})
.then(function(cmts){
    console.log(cmts)
})
.finally(function(){
    console.log("Successfully Executed")
})