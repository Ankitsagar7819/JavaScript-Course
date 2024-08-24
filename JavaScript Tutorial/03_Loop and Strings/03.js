// String - string is a sequence of characters used to represent text.


let obj = {
    item: "pen",
    price: 10
};

// This is interpolation - to create strings by doing substitutions of placeholders

let output = `the cost of  ${obj.item} is ${obj.price} rupees`;
console.log(output);



console.log("the cost of ", obj.item, "is ", obj.price, "rupees")

// let str = "ApnaCollege";
// let str2 = 'Ankitkumar';

//  console.log(str[0]);
//  console.log(str2[1]);

// Template Literals -  A way to have embedded expression in string 
//  `this is a template literals`

let specialString = `this is a template ${1 + 2 + 2} literals`;
console.log(specialString);
console.log(typeof specialString);

// let str = "Apna\nCollege";
// let str2 = "Apna\tCollege"; 
// console.log(str);
// console.log(str2);
// console.log(str.length);


// Strings Methods- These are built -in functions to manipulate a strings

// str.toUpperCase()

// let str = "abcdefghijklmnopqrstuvwxyz";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);


// str.toLowerCase()

// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let newStr = str.toLowerCase();
// console.log(str);
// console.log(newStr);



// str.trim

// let str = "        Apna  college  js   " ;
// let newStr = str.trim();
// console.log(newStr);


// str.slice(start,end?) // Returns parts of strings 

// let str = "Hello";
// console.log(str.slice(1, 4));


// Concatination - str1.concat(str2) // joins str2 with str1

let str1 = "Ankit";
let str2 = "Kumar";
let newstr = str1.concat(str2);
console.log(newstr);
//  let res = str1 + str2;
// console.log(res);


// str.replace(searchVal, newVal)

// let str = "Hellolololo";
// console.log(str.replaceAll("lo", "P"));


// str.charAt(idx)

let str = "ILoveJs ";
console.log(str.charAt(3));









