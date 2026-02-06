//What Is Function
//Function ko call karke chala skte h which is block of code which can you reuse any time.

function greet() {
    console.log("Hello");
}

greet();

//There is 6 types for Function Declaration
//1.Fnc Statement
function abcd(){
    console.log("First Type");
}
abcd();

//2.Variable Func Expression
var a=function(){
    console.log("Second Type");
}
a();

//3.Anonymous Func` 
// function(){

// }

//4.Fat Arrow Function ()=>
// ()=>
let gfh=(a)=>{

}


//5.Fat Arrow Function with One Parameter ()=>
// ()=>
let afh=a=>{
    console.log(a," One Para")
}
afh(12);

//6.Fat Arrow with Implicit return
var abcde=()=>12;

var b=abcde();
console.log(b)

//Rest Operator
function abc1(a,b,c,...rest){
    console.log(a,b,c,rest)
}
abc1(1,2,3,4,5,6,7,8);