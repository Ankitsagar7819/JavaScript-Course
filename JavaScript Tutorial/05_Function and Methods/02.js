//  Create a function using the function keywords that takes a String as an argument and returns the numbernof vowels in the strings

function count_vowels(str){
    let count = 0;
    for(const char of str){
        if(
          char === "a" ||
           char === "e" || 
          char === "i" ||
           char === "o" || 
          char === "u" 
           ){
            count ++;
           }
         }
         return count ;
}



// Create an arrow function to perform the same task.

 countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }
    return count;
}
