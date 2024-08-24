//Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again.
let modeBtn =  document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "Light"; // dark

modeBtn.addEventListener("click", ()=>{
   if(currMode === "Light"){
    currMode = "dark";
    body.classList.add("dark") ;
    body.classList.remove("Light") ;
   } else{
    currMode = "Light";
  body.classList.add("Light");
  body.classList.remove("dark");
   }

   console.log(currMode);
});