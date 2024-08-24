// Function - function is a Block of code that performs a specific task, can be invoked(CALL) whenever needed. 

// function defination

//  function functionName() {
//     // do some work

//  }


function myFunction() {
    console.log("Welcome to apna college");
    console.log("We are learning js");
}

// function Call

myFunction();
myFunction();

// redundency -> repeat

function myFunction(msg, n) {
    // parameter -> input
    console.log(msg * n);

}
// Not a Number
myFunction("i love JS", 100); // argument



// function -> 2 numbers, sum
function sum(a, b) {
    // Local Variables
    sum = a + b;
    console.log(a);
    return sum;
    console.log("after return")
}

// Function -> like local variable of a function -> block scope

let val = sum(4, 3);
// console.log(a);
console.log(val);
