// Promise Chaining

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("success");

        }, 3000);
    });
}



getData(1).then((res) => {
    return getData(2);
}).then((res) => {

    return getData(3);
})
    .then((res) => {
        console.log(res);
    });







// Callback hell


//     console.log("fetching data1.........");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);

// });
// console.log("fetching data2.........");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);

// });
