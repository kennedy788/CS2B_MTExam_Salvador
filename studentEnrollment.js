let DSA = [];
let PL = [];
let Networks = [];
function enrollStudent(subjectArray) {
  let studentName = prompt("Enter the student's name to enroll:");
  subjectArray.push(studentName);
  console.log(`${studentName} has been enrolled in the subject.`);
}
function unenrollStudent(subjectArray) {
  if (subjectArray.length === 0) {
    console.log("No students are currently enrolled in this subject.");
    return;
  }
  console.log("Currently enrolled students: " + subjectArray.join(", "));
  let studentName = prompt("Enter the name of the student to unenroll:");
  let index = subjectArray.indexOf(studentName);
  if (index !== -1) {
    subjectArray.splice(index, 1);
    console.log(`${studentName} has been unenrolled from the subject.`);
  } else {
    console.log("Student not found in the list.");
  }
}
while (true) {
  let subjectChoice = prompt(
    "Choose a subject:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit"
  ).toUpperCase();
  
  let subjectArray;
  if (subjectChoice === "A") subjectArray = DSA;
  else if (subjectChoice === "B") subjectArray = PL;
  else if (subjectChoice === "C") subjectArray = Networks;
  else if (subjectChoice === "D") {
    console.log("Final student lists:");
    console.log("DSA:", DSA);
    console.log("PL:", PL);
    console.log("Networks:", Networks);
    break;
  } else {
    console.log("Invalid subject choice. Please try again.");
    continue;
  }
  let operation = prompt(
    "Choose an action:\n(A) Enroll\n(B) Unenroll\n(C) Choose Another Subject\n(D) Exit"
  ).toUpperCase();

  if (operation === "A") enrollStudent(subjectArray);
  else if (operation === "B") unenrollStudent(subjectArray);
  else if (operation === "C") continue; 
  else if (operation === "D") {
    console.log("Final student lists:");
    console.log("DSA:", DSA);
    console.log("PL:", PL);
    console.log("Networks:", Networks);
    break;
  } else {
    console.log("Invalid operation. Please try again.");
  }
}
