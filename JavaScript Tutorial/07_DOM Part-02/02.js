 // 01-  Create a New Button element . give it a text "Click me " background Color of red and text color is white . Insert the button as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);


// 02- Create a <p> Tag in html . give is a class and some styling .

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

