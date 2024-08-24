// callback -> A Callback is a function passed as an argument to another function .
function sum(a, b) {
    console.log(a + b);
}
function calculator(a, b, sumCallback) {
    sumCallback(a, b);

}
calculator(2, 5, sum);


const hello = () => {
    console.log("Hello");


};
setTimeout(hello, 3000);


// Callback Hell ->
