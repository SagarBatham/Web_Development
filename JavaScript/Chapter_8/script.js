//Remove Duplicates only Unique

var a=[1,2,2,1,2,3,4,5,3,4,2,5,7,2,1,2,2,3,4,5,2];
a=[...new Set(a)];

//Find 2nd Largest

var arr=[2,4,2,2,3,5,1];
// arr=[...new Set(ans)];
// var ans=arr.sort(function(a,b)
//     {
//         return b-a;
//     });
// console.log("Second largest is: "+arr[1]);
console.log([...new Set(arr)].sort(function(a,b)
    {
        return b-a;
    })[1]);




//Largest Frequency Element
var b=[1,2,2,1,2,3,4,5,3,4,2,5,7,2,1,2,2,3,4,5,2];
obj={};
b.forEach(function(a) {
    obj[a]===undefined?(obj[a]=1):obj[a]++;
});
console.log(obj);