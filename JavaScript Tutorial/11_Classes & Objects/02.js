// class parent {
  
//     hello() {
//         console.log("Hello!");
//     }
// }

// class child extends parent { }
// let obj = new child();


class person {
    constructor(){
        this.species = "homo sepiens";
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing");
    }
}

class Engineer extends person {
    work() {
        console.log("solve problem and building somethings");
    }
}

class Doctor {
    work() {
        console.log("treat patient");
    }
}

let AnkitObj = new Engineer();