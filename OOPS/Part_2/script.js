function Toffee(name){
    this.name=name;
}

Toffee.prototype.price=10;

let t1=new Toffee("Pulse");
let t2=new Toffee("Dairy Milk");
console.log(t1);
console.log(t2); 


function Human(name,age,isHandsome){
    this.name=name;
    this.age=age;
    this.isHandsome=isHandsome;

    // this.sayHello=function(){
    //     console.log("Hello");
    // };
}
Human.prototype.sayHello=function(){
    console.log('Hello');
}
let h1=new Human("Sagar",21,false);
console.log(h1);

