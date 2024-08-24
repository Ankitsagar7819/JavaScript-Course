// For Each Loop in Arrays

// arr.forEach(callBackFunction)

// callBackFunction -> Here it is a function to execute for each elements in the array 
// ** A callBackFunction  passed an arguments to another function

// arr.forEach((val) =>{
//     console.log(val);
// });


// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {
//     console.log(val);
// });

let arr = ["Delhi", "Pune", "Mumbai"];
arr.forEach((val, idx, arr)=>{
    console.log(val.toUpperCase(),idx, arr);
});