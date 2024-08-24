// We are given array of marks of students . Filter out of the marks of students that scored 90+ .

let marks = [97, 64, 76, 96, 99, 86, 32];
let toppers = marks.filter((val)=>{
    return val > 90;
});

console.log(toppers);






// Take a Number n as input from user . Create an array of numbers from 1 to n .

let n = prompt("Enter a number");
let arr = [];
for (let i = 1; i <= n; i++){
    arr[i - 1] = i ;
}
console.log(arr);

// Use the reduce method to calculate sum of all numbers in the array.

// let sum = arr.reduce((res , curr) =>{
//     return res + curr;
// });
// console.log("sum =", sum);

// Use the reduce method to calculate product of all numbers in array.

let Factorial = arr.reduce((res, curr) =>{
    return res * curr ;
});


console.log("Factorial =" ,Factorial);