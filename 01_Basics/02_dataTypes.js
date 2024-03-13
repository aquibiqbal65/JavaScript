"use strict"; // treat al JS code as newer version

//in js datatypes are not defined, it identifies itself the datatypes of the variable


//alert(3+3) //popup , only works in browser

 let name = "Aquib"
 let age = 20
 let isLoggedIn = false

 //number = 2
 //bigint
 //string = ""
 //boolean = true/false
 //null = standalone value
 // undefined = value is not yet assigned
 //symbol = unique


 console.log(typeof null);
 console.log(typeof undefined);




 //Primitive
 // 7 types : String, Number, boolean, null , Undefined, symbol, BigInt

 const score = 100;
 const score1 =100.3;

 const isLoggedin = false;
 const outside= null;
 let eamilid; // undefined

//  const id= symbol('123')
//  const anotherid =symbol('123')
//   console.log(id===anotherid)

  const bignumber = 7892468375475753n



 //Reference type/non primitive
 //Arrays, objects, Functions

 const heroes = ["shaktiman", "captainamerica", "batman"];

 let myobj = {
    name: "hitesh",
    age: 22,
 }

 const myFunction = function(){
    console.log("HelloWorld")
 }


 //=========================================================================

 // memory types

 // stack(primitive), Heap(Non-Primitive)


 //stack

 let nameone ="Aquib"
 let nametwo = nameone;

 nametwo = "iqbal"

 console.log(nameone);
 console.log(nametwo);


 //heap

 let userone = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let usertwo =userone // here the usertwo take reference from user name any changes done to usertwo will reflect in userone, this is an example of heap

 usertwo.email="usertwo@gmail.com";

 console.log(userone.email);

 