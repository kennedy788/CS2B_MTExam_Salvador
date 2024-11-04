let favoriteNumber = 13; 

let guess = null;
while (guess !== favoriteNumber) {
  
  guess = parseInt(prompt("Guess the favorite number: "), 10);

  if (guess > favoriteNumber) {
    console.log("Your guess is too high. Try again!");
  } else if (guess < favoriteNumber) {
    console.log("Your guess is too low. Try again!");
  } else if (guess === favoriteNumber) {
    console.log("Congratulations! You guessed the correct number.");
  } else {
    console.log("Please enter a valid number.");
  }
}
