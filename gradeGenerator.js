function studentGrade() {
    const studentName = "Marion"; // Assign a variable
    let studentMark = parseFloat(prompt("mark (0-100):")); // Prompt for student's mark

    // Check if the input is valid (between 0 and 100)
    if (!isNaN(studentMark) && studentMark >= 0 && studentMark <= 100) {
        if (studentMark >= 79) {
            return 'A';
        } else if (studentMark >= 60 && studentMark<=78) {
            return 'B';
        } else if (studentMark >= 50 && studentMark <= 59) {
            return 'C';
        } else if (studentMark >=40 && studentMark <=49) {
            return 'D';
        } else {
            return 'E';
        }
    } else {
        return 'Invalid input or mark out of range. Please enter a number between 0 and 100.';
    }
}

// Test Case
console.log(studentGrade()); // Example
