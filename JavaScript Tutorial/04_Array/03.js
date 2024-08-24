// Array Methods

// 1- Push()- add to end 


let items = ["tomato", "potato", "Litchi", "apple"];

items.push("chips", "Paneer", "burger");

console.log(items);

// 2- Pop()- delete from end & return

let foodItems = ["tomato", "potato", "Litchi", "apple"];

console.log(foodItems);
let deletedItems = foodItems.pop();
console.log(foodItems);
console.log("deleted", deletedItems)


// 3- toString()- Convert array to string

let marks = [23, 34, 56, 67];
console.log(marks.toString());



let item = ["tomato", "potato", "Litchi", "apple"];
console.log(item.toString());


// 4- concat() - Joins Multiple arrays and returns results

let marvelHeroes = ["thor", "spidermen", "ironmen"];
let dcHeroes = ["supermen", "batmen"];
let indianHeroes = ["shaktiman", "Krish"];
let heroes = dcHeroes.concat(marvelHeroes, indianHeroes);
console.log(heroes);


// 5- unshift() - add to start

let men = ["thor", "spidermen", "ironmen"];
men.unshift("antmen");
console.log(men);


// 6- shift() - delete from start and return 

let val = [23, 34, 56, 78, 89];
let newVal = val.shift();
console.log("deleted", newVal);


// 7- Slice()- return a piece of the array 
// slice (startidx, endidx)

let superHeroes = ["thor", "spidermen", "ironmen", "supermen", "batmen"];
console.log(superHeroes);
console.log(superHeroes.slice(1, 3));


// 8- Splice()- change original array (add, remove, replace)
// splice(startIdx, delCount, newElements(1........))

let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);

//  Add Element

//arr.splice(2, 0, 102);

// delete Elements

// arr.splice(3, 1);

// Replace Items

arr.splice(3, 1, 102);









