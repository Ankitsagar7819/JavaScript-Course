// Asyns-Await

// asyns function always returns a Promise.


// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             console.log("Weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

//  async function getWeatherData(){
//     await api(); // 1
//     await api(); // 2
//  }





function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("success");

        }, 2000);
    });
}


// Async-Await


async function getAllData(){
    console.log("fetching data1.........");
    await getData(1);
    console.log("fetching data2.........");
    await getData(2);
    console.log("fetching data3.........");
    await getData(3);
    console.log("fetching data4.........");
    await getData(4);
    console.log("fetching data5.........");
    await getData(5);
    console.log("fetching data6.........");
    await getData(6);
    console.log("fetching data7.........");
    await getData(7);
}