// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
// passed

function gradingStudents(grades) {
    let newGrades = [];
    for (let i = 0; i < grades.length; i++) {
        let newGrade;
        let remainder = 5 - (grades[i] % 5);
        if (grades[i] >= 38 && remainder < 3) {
            newGrade = Math.ceil(grades[i] / 5) * 5;

        } else {
            newGrade = grades[i];
        }
        newGrades.push(newGrade);
    }
    return newGrades;
}

console.log(gradingStudents([73, 67, 38, 33]));