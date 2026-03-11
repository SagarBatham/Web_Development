var dta = fetch("https://api.github.com/users/SagarBatham")
.then(function(raw){
    return raw.json();
})
.then(function(data){
    console.log(data.
avatar_url);
})

console.log(dta);