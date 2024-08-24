// Classe is JavaScript -> class is a Program - code template for creating objects.

class ToyotaCar {
    constructor(brand, milage){
        console.log('creating new objects');
        this.brand = brand;
        this.milage = milage;
    }

    // setBrand(brand){
    //     this.brandName = brand;

    // }
    Start(){
        console.log('start');

    }
    stop(){
        console.log('stop');
    }

   

}

let fortuner = new ToyotaCar("fortuner", 10); // constructure
console.log(fortuner);

let lexus = new ToyotaCar("lexus", 12);
console.log(lexus);



// fortuner.setBrand("fortuner"); 
// lexus.setBrand('lexus');