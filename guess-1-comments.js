// Generates a random number between 0 and 1, then converts to an integer by rounding up
var Answer = Math.round(Math.random()*100);
// A variable to set that amount of turns to 0
var Turns=0;
// Initializing the boolean variable Correct, setting the value to False
var Correct=false;
// Adds 1 to the variable "Turns"
Turns++;
while (Correct==false) {
// Initializes the variable "Guess" setting the value to user imput, telling the user what to imput
    var Guess = prompt("Guess my integer (between 0 and 100)!");
// Checks if the guess is equal to the answer
    if (Guess == Answer) {
// If equal, say "Correct" and number of turns        
        alert("CORRECT! You guessed it in "+Turns+" turns.");
// set Correct equal to true to get out of the "while loop"
        Correct = true;
    }
// check if the guess is greater than the answer    
    else if (Guess > Answer) {
// give feedback, go lower        
        alert("Hint: Try a lower number!");
// tells you if your number is lower than the answer        
    }
    else if (Guess < Answer) {
// give feedback, go higher        
        alert("Hint: Try a higher number!");
// tells you if your number is higher than the answer        
    }
    Turns++;
// adds 1 to the "Turns" variable    
}
alert("Thank you for playing.");
// the end of the program, telling the user "Thanks for playing"
