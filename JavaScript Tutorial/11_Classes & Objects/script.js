// Classes and objects


const student = {
    fullName : 'Ankit Kumar', 
    marks : 76, 
    printMarks : function(){
    console.log("marks =",this.marks); // student.marks
    },
};



let employee  ={
    calcTax(){
        console.log("tax rate is 10%");
    },
   
};


const karanArjun ={
    salary : 41000,
    calcTax(){
        console.log('tax rate is 20%');
    },
};
// const karanArjun2 ={
//     salary : 42000,
// };
// const karanArjun3 ={
//     salary : 43000,
// };
// const karanArjun4 ={
//     salary : 44000,
// };

karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;