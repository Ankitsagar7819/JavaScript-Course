// Synchronous -> 

console.log("one");
console.log("two");
console.log("three");


// Asynchronous -> 


function hello(){
    console.log("hello");
}
setTimeout(hello, 2000);  // timeout : 2s = 2000ms

console.log("ONE");
console.log("TWO");
setTimeout(() =>{
    
    console.log("hello");
}, 4000); // timeout
console.log("THREE");
console.log("FOUR");


// callback ->
function sum(a, b){
    console.log(a+b);
}
function calculator(a, b, sumCallback){
    sumCallback(a, b);

}
calculator(2, 5, sum);