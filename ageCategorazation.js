let userAge = 19; 

if (userAge < 5) {
  console.log("The user is a Toddler (under 5 years).");
} else if (userAge >= 5 && userAge <= 12) {
  console.log("The user is a Child (5-12 years).");
} else if (userAge >= 13 && userAge <= 19) {
  console.log("The user is a Teenager (13-19 years).");
} else if (userAge >= 20 && userAge <= 35) {
  console.log("The user is a Young Adult (20-35 years).");
} else if (userAge >= 36 && userAge <= 60) {
  console.log("The user is Middle-Aged (36-60 years).");
} else {
  console.log("The user is a Senior (over 60 years).");
}
