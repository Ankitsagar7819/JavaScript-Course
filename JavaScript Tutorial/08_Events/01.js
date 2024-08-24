let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt)=>{
    console.log("button was Clicked!-handler1");
});

btn1.addEventListener("click", ()=>{
    console.log("button was Clicked!-Handler2");
   
});

const handler3 = ()=>{
    console.log("button1 was clicked - handler3");
};
btn1.addEventListener("click", handler3);



btn1.addEventListener("click", ()=>{
    console.log("button was Clicked!-Handler4");
   
});

btn1.removeEventListener("click", handler3)