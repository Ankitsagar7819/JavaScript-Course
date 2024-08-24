// Array - collection of items 

let arr = ["ironmen", "hulk", "thor", "batmen"];
console.log(arr);
console.log(arr.length); // Property



let marks = [96, 75, 48, 83, 85];
console.log(marks);




let info = ["Ankit", 21, "B.Tech", "Dehli"];
console.log(info);


// Array indices

let mrk = [23, 45, 60, 56, 35, 90];
// change the value

mrk[2] = 66;
console.log(mrk);



// Looping over an array - Print all elements of an array

// Using a for loop

let heroes = ["ironmen", "hulk", "thor", "shaktiman", "spidermen"];
// for(i = 0; i < heroes.length; i++){
//     console.log(heroes[i]);
// }






// Using  a for of loop

for(let hero of heroes){
    console.log(hero);
}


let cities = ["delhi", "Pune", "Mumbai", "Hydrabad", "gurgaon"];
for(let city of cities){
    console.log(city.toUpperCase());
}



