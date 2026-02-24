//Old Way to Create when Class Concept is not Introduced.
// function CupCake(){
//     this.name="Sagar";
//     this.grade="A";
// }

// let a=new CupCake();
// console.log(a);

//New Way

function Toffe(flavour,price){
    this.flavour=flavour;
    this.price=price;
}

let a=new Toffe("Pulse",2);
let b=new Toffe("Alphenlibe",1);
console.log(a);
console.log(b);


