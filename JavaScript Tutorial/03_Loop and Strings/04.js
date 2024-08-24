// Promot the user to enter thair full name . Genrate a username for them based on the input start username with @ , followed by thair full name and ending with the fullname length.

// user name = "Ankitkumar", username should be  @Ankitkumar10


let fullName = prompt("enter your fullName without spaces");
let username = "@" + fullName + fullName.length;


console.log(username);