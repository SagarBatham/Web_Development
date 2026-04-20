class MobileShops{
    constructor(){
        this.mobilePhones=[];
    }
    addMobile(name){
        this.mobilePhones.push(...name);
    }

    listAllMobile(){
        this.mobilePhones.forEach(function(mobiles,idx){
            console.log(`${idx+1}--${mobiles.brand}--${mobiles.model}--${mobiles.price}`);
        })
    }
}

class Mobile{
    constructor(brand,model,price,sim){
        this.brand=brand;
        this.model=model;
        this.price=price;
        this.sim=this.addSim;
    }
    addSim(name,number){
        this.name=name;
        this.number=number;
    }

    info(){
        console.log(`Mobile Brand is ${this.brand} and the model of mobile is ${this.model} and its price is ${this.price}`)
    }
}

let shop1=new MobileShops();
let m1=new Mobile("Samsung","Galaxy s23",120000);
let m2=new Mobile("Realme","Narzo",12000);
let m3=new Mobile("IPhone","15 Plus",75000);
shop1.addMobile([m1,m2,m3]);
