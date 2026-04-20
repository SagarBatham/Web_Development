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

function Employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
}

let e1=new Employee("Raghav",23,30000);

Employee.prototype.printDetails=function(){
    console.log(`My Name is ${this.name} and my age is ${this.age} and my salary is ${this.salary}`);
};

