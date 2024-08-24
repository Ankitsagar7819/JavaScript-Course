// Some more Array Methods
// 1- MAP -> Create a new array with the results of some operation. The Value its callback its callback returns are used to form new array.

// arr.map(callBackFunction(value, index, array))

// let newArr = arr.map((val)=>{
//     return val*2;
// });

// 1- Map
let nums = [23, 46, 69];
let newArr = nums.map((val) => {
    return val * 2;
});
console.log(newArr);

// 2 -Filter

let arr = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);

// 3-  Reduce -> Performs some operations & reduce the array to a single value . it returns that single value .

// let array = [1, 2, 3 ,4];
// const output = array.reduce((res, curr)=>{
//     return res + curr ;
// });
// console.log(output);

 // Find Largest Number from arrays

let array = [10, 12, 17 ,9];
const output = array.reduce((prev, curr)=>{
    return prev > curr ? prev : curr ;
});
console.log(output);




