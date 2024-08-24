// For-Off Loop

let str = "JavaScript";

let size = 0;

for (let val of str) {
    console.log("val=", val);
    size++;
}
console.log("string size =", size);


// For-in Loop

let student = {
    name: "Rahul kumar",
    age: 20,
    cgpa: 7.9,
    isPass: true
};
for (let key in student) {
    console.log("key=", key, "value=", student["key=", key]);
}






// Print all even number from 0 to 100

let num = 0;
for (num = 0; num <= 100; num++) {

    if(num%2===0){
        console.log("number=", num);
    } 
}


// let num = 0;

// while(num<=100){
//     console.log("number=", num);
//     num++;
// }
