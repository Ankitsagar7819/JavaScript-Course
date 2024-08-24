// Create an array to store companies -> "Bloomberg", "Microsoft", "Uber" "Google", "IBM", "Netflix"
// 1. Remove the firts Company from the arrya

 let companies = ["Bloomberg", "Microsoft", "Uber" ,"Google", "IBM", "Netflix"];
// let val = companies.shift();
// console.log("deleted", val);

// 2. Remove Uber and Add Ola in its place

companies.splice(2, 1, "OLA");

// 3. Add Amazon at the end

companies.push("AMAZON");