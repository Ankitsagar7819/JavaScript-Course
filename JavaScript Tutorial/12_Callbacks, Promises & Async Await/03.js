const getPromise = () =>{
    new Promise ((resolve, reject) =>{
        console.log("I am a Promise..");
        reject("some error occured");
    });
};









// function getData(dataId, getNextData) { // 2s
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//              console.log("data", dataId);
//              resolve("seccess");
//             reject("error");
//             if (getNextData) {
    
//                 getNextData();
//             }
//         }, 5000);
//     });
// }