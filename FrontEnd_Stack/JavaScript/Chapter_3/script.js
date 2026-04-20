// String Functions
let str='apple';
console.log(str);

var a=str.slice(2,4);
console.log(a);

let str2=`apple is of ${12+2}`;   //template string or literal
console.log(str2);

let str3="Hello Kaisei Ho iAap";
var b=str3.split('i');
console.log(b);

let str4="Hello Kaise Ho iAiap";
var c=str4.replace('i','j');
var d=str4.replaceAll('i','j');
console.log(c);
console.log(d);

let str5="JavScript";
var e=str5.includes("Java");
console.log(e);

//Switch Cases
var sw=Number(prompt("Enter a Number"));
switch (sw) {
    case 1:
        console.log("It is 2");
        break;
    case 2:
        console.log("It is 4");
        break;
    default:
        console.log("It is Default");
        break;
}
