// IIFE -> Immediately Invoked Function Expression

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("success");

        }, 2000);
    });
}


// Async-Await


(async function getAllData(){
    console.log("fetching data1.........");
    await getData(1);
    console.log("fetching data2.........");
    await getData(2);
    console.log("fetching data3.........");
    await getData(3);
})();