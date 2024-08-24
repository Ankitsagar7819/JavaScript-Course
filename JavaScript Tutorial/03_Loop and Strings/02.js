// Create a game where you start with any random game under game number. Ask the useer to keep guessing the game number untill the user enters the correct value



let gameNum = 25;
let userNum = prompt("Guess the game number : ");


while(userNum != gameNum){

     userNum= prompt(" You enter the wrong number. Guess  again : ");


}
console.log("Congratulations , you enter the right number");