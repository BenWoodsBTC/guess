//Start the Program
//Initialize Variables
var answer = Math.round(Math.random()*100);
//console(log);
var turns = 0;
var correct = false;
// Make a while loop that runs while correct equals false
while (correct == false){
  // Ask the User to Input a Guess between 1 and 100
  var guess = prompt("Input a Guess between 1 and 100");
  // Create an if statement asking whether the guess equals the answer
  if (guess == answer){
    // If the user guessed the answer, tell the user they guessed the answer and how many turns it took
    alert("You Guessed it! It took you " +turns+ " turns to Guess the Answer.");
    // Make correct equal true after the user guessed the answer
    correct = true;
  }
  // Create an else if statement inside the while loop asking if the guess is less than the answer
  else if (guess < answer){
    // Tell the user that their guess is too low
    alert("Too Low!");
  }
  // Create an else if statement inside the while loop asking if the guess is more than the answer
  else if (guess > answer){
    // Tell the user that their guess is too high
    alert("Too High!");
  }
  // Add 1 to the turns variable
  turns++;
}
// End program
