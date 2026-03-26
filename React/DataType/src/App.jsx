import React from 'react'

function App() {
  let n=12;
  let s="Hello Wolrd";
  let b=false;
  let nu=null;
  let un=undefined;
  let arr=["Hello",12,"Hii",true,null,undefined];
  let obj={
    name:"Danish",
    age:27,
  }
  return (
    <>
    <h2>Number: {n}</h2>
    <h2>String: {s}</h2>
    <h2>Boolean: {b}</h2>
    <h2>Null: {nu}</h2>
    <h2>Undefined: {un}</h2>
    <h2>Array: {arr.join(",")}</h2>
    <h2>Object: {`${obj.name}|${obj.age}`}</h2>
    </>
  )
}

export default App