// You are creating a website for your college. create a class user with 2 properties name and email. it also has a method called viewData() that allows user to view website data.
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


let student1 = new user("Ankit", "ankit87@gmail.com");
let student2 = new user("Kumar", "sagar@gmail.com");


let teacher1 = new user("dean", "dean@67gmail.com");