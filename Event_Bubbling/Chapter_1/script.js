var arr=[{
    name:"Sagar",
    age:20,
    img:"https://images.unsplash.com/photo-1515041219749-89347f83291a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"
    ,place:"Etawah"
    ,marr:false
} ,{
    name:"Shiva",
    age:21,
    img:"https://images.unsplash.com/photo-1531214159280-079b95d26139?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnRvb258ZW58MHx8MHx8fDA%3D"
    ,place:"Noida"
    ,marr:false
},{
    name:"ShivSagar",
    age:23,
    img:"https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"
    ,place:"Delhi"
    ,marr:false
}]

var sum="";
var main=document.querySelector("#main");
arr.forEach(function(elem,idxe,dets){
    sum=sum+ `<div class="card">
        <img src=${elem.img} alt="">
        <h1>${elem.name}</h1>
        <h5>${elem.age}</h5>
        <h4>${elem.place}</h4>
        <h3>Married:${elem.marr}</h3>
        <h4>Stranger</h4>
        <button>Add Friend</button>
    </div>`
    console.log(dets);
})

main.innerHTML=sum;
