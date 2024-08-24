// Create a new class called Admin which inherit from user. Add a new method called editData to Admin that allows is to edit website data.

let DATA = "secret information";
class user {
    constructor(name, email){
        this.name =  name;
        this.email = email;
    }
    viewData(){
        console.log("data =", DATA);
    }

}

class Admin extends user{
    constructor(name, email){
        super(name,email);

    }
    editData(){
        DATA = "some new value"
    }

}

const admin1 = new Admin('John Doe', 'john.doe@example.com')





let student1 = new user("Ankit", "ankit87@gmail.com");
let student2 = new user("Kumar", "sagar@gmail.com");


let teacher1 = new user("dean", "dean@67gmail.com");