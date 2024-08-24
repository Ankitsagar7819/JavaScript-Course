/*JavaScript is a versatile and widely-used programming language primarily known for its role in web development. It enables the creation of interactive and dynamic web pages by allowing developers to implement client-side scripts. Here are some key aspects of JavaScript:

History and Evolution:-
Created by: Brendan Eich in 1995 while working at Netscape.
Original Name: Mocha, later renamed to LiveScript, and finally JavaScript.
Standardization: JavaScript was standardized as ECMAScript (ES) by ECMA International, with the first edition published in 1997. The latest major version is ECMAScript 2022 (ES13).

Core Features:-
Interpreted Language: JavaScript code is executed line-by-line by the browser’s JavaScript engine (like V8 in Google Chrome, SpiderMonkey in Firefox).
Dynamic Typing: Variables can hold values of any type without explicit declaration.
Prototype-Based Object Orientation: Uses prototypes instead of classical inheritance.*/


//console.log("Welcome to Our First JavaScript Program");
// console.log("Ankit Kumar");
// console.log("I Love Js");

// Variables are containers for  stored data.
// 1- Variables are case sensetive; "a" and "A" is different.
// 2- only latter,  digits, underscore(_)and $ is allowed (not even space).
// 3- only a latter, underscore(_),or $ should be 1st character.
// 4- Reversed words cannot be variable names.


fullName= "Tonny Stark";
console.log(fullName); 

// age = 24;
// console.log(age);

// price = 199.99;
// console.log(price);

// X = null;
// console.log(X);

y = undefined;
console.log(y);

// JavaScript is a Dynamically Type Language.
// Boolean

isFollow = false;
console.log(isFollow);

_fullName = "Tony Stark";
console.log(_fullName);

$fullName = "Ankit Kumar";
console.log($fullName);

isFollow = true;
console.log(isFollow);

let fullNameame = "Tony Stark";
// let age = 24;
let price = 1000;
console.log(fullName);

// let age = 23;
//  age = 34;
//   age = 10;
// console.log(age);

const PI = 3.14;
console.log(PI);
let a;
a=10;
console.log(a);

const x= 34;
console.log(x);
{
    let a = 5;
     console.log(a);
}

{
    let a = 10;
    console.log(a);
}

// Data Types - Number, Strings, Undefined, Null, BigInt, Symbol.

let age = 23;
let totalPrice = 100.99;
let sirName  = "Ankit Kumar";
isFollow = false;
let b;
let c = null;
let A = BigInt("123");
let B = Symbol("Hello");

const student = {
    fullName:"Ankit Kumar",
    age:20,
    cgpa:7.6,
    isPass:true,

};
student ["age"]= student["age"]+3;
console.log(student["age"]);

student ["name"]= "Rahul Sharma";
console.log(student["name"]);



console.log(student);
console.log(student.age);
console.log(student["fullName"]);

 // Q_01. Create a Const object called product to store information .

const product = {
    title:"Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,



} ;
console.log(product);


// Q_02.Create a Const object called profile to store information . 

const profile = {
    userName : "@ankitkumar__7819",
    post: 23,
    followers: 233, 
    following: 4,
    isFollow: true,
};
console.log(profile);
console.log(typeof profile["userName"]);


