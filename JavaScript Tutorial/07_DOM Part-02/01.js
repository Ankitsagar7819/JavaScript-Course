let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn); // Add at the end of the node (inside)


// let div = document.querySelector("div");
// div.prepend(newBtn); // Add at the Start of the node (inside)


// let div = document.querySelector("div");
// div.before(newBtn);  // add before the node (outside)


let div = document.querySelector("div");
div.after(newBtn); // add after the node (outside)


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi, I am New</>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

newHeading.remove();



