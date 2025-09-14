// --- Global Variable (School Name) ---
let schoolName = "Sunrise High School";

// Function with parameter + return value
function calculateGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

// Function demonstrating scope
function showGrade(score) {
  let grade = calculateGrade(score); // local scope
  document.getElementById("grade-output").textContent =
    schoolName + " Result: Score " + score + " = Grade " + grade;
}

// Toggle Notice Popup (CSS + JS combined)
function toggleNotice() {
  let notice = document.getElementById("notice");
  notice.classList.toggle("show");
}
