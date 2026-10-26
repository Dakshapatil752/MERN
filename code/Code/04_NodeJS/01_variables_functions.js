const studentName = "Daksha";
const marks = 90;

function result(score) {
  return score >= 40 ? "Pass" : "Fail";
}

console.log("Student:", studentName);
console.log("Marks:", marks);
console.log("Result:", result(marks));
