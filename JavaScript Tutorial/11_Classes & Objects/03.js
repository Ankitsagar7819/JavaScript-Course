class person {
    constructor(name){
       
        this.species = "homo sepiens";
        this.name =  name;
    }
    eat() {
        console.log("eat");
    }
}


class Engineer extends person {
    constructor(name){
    
        super(name); // To invoke parent class constructure
        
        
    }
    work() {
        super.eat();
        console.log("solve problem and building somethings");
    }
}

let engObj = new Engineer("Ankit");