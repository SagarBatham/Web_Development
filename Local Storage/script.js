// // localStorage.clear();
// localStorage.setItem("user","Sarthak")

// var a=localStorage.getItem("user");
// console.log(a);

// // localStorage.removeItem("user");

var people = [
  {
    name: "Sagar",
    age: 21,
    place: "Etawah"
  },
  {
    name: "Shiva",
    age: 22,
    place: "Noida"
  },
  {
    name: "Rohan",
    age: 23,
    place: "Delhi"
  }
];

var newuser=JSON.stringify(people);
console.log(newuser)
localStorage.setItem("user",newuser)

var oldUser=JSON.parse(newuser);
console.log(oldUser);

document.cookie="user=Sagar"