var dta = fetch("https://api.github.com/users/SagarBatham")
.then((data)=>{
    return data.json();
})
.then(function(data){
    console.log(data);
})