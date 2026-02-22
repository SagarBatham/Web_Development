var a=[1,2,3,4,6];
// console.log(a[0]);
a.forEach(function(elem,idx){
    console.log(elem,idx);
})

//Array of Objects

var arr=[{
    name:"Sagar",
    age:20,
} ,{
    name:"Shiva",
    age:21,
},{
    name:"ShivSagar",
    age:23,
}]

var sum=0;
console.log(arr[0].name);
console.log(arr[0].age);

arr.forEach(function(ele){
    console.log(ele.age);
    sum=sum+ele.age;
})

console.log(sum);