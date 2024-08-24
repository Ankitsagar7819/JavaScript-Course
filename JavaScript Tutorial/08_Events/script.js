// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 Was Clicked");

//     let a = 25;
//     a++;
//     console.log(a);
// }


let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);

  
}

let div = document.querySelector("div");
div.onmouseover = (evt) => {
    
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);

}