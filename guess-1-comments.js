// Generates a random number between 0 and 1, then converts to an integer by rounding up
var Answer = Math.round(Math.random()*100);
// Sets the Turn variable to 0, initializing the variable 
// A variable to set that amount of turns to 0
var Turns=0;
// Initializing the boolean variable Correct, setting the value to False
var Correct=false;
// Adds 1 to the variable "Turns"
Turns++;
while (Correct==false) {
    var Guess = prompt("Guess my integer (between 0 and 100)!");
    if (Guess == Answer) {
        alert("CORRECT! You guessed it in "+Turns+" turns.");
        Correct = true;
    }
    else if (Guess > Answer) {
        alert("Hint: Try a lower number!");
    }
    else if (Guess < Answer) {
        alert("Hint: Try a higher number!");
    }
    Turns++;
}
alert("Thank you for playing.");
