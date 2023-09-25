/*
class Student{
    constructor({studentID, age, givenNames, lastNames, isGraduated, registeredCourses}) {
    this.studentID = studentID
    this.age = age
    this.givenNames = givenNames
    this.lastNames = lastNames
    this.isGraduated = isGraduated
    this.registeredCourses = registeredCourses
    }

    firstName(){
        return this.givenNames[0];
    }
}


let students = [
    new Student({studentID: 1234, age: 15, givenNames: ["August", "Severin"], lastNames: "Andersen", isGraduated: false, registeredCourses: ["BSD", "Programming"]}),
    new Student({studentID: 2454, age: 30, givenNames: ["Kien"], lastNames: "Severin", isGraduated: true, registeredCourses: ["BSD"]}),
    new Student({studentID: 3786, age: 65, givenNames: ["Tommy"], lastNames: "Hyung", isGraduated: true, registeredCourses: ["BSD"]}), 
    new Student({studentID: 4676, age: 22, givenNames: ["Malthe"], lastNames: "Stig", isGraduated: false, registeredCourses: ["BSD"]})   
];
*/


let students = [
    {studentID: 1234, age: 15, givenNames: ["August", "Severin"], lastNames: "Andersen", isGraduated: false, registeredCourses: 5},
    {studentID: 2454, age: 30, givenNames: "Kien", lastNames: "Severin", isGraduated: true, registeredCourses: 5},
    {studentID: 3786, age: 65, givenNames: "Tommy", lastNames: "Hyung", isGraduated: true, registeredCourses: 6}, 
    {studentID: 4676, age: 22, givenNames: "Malthe", lastNames: "Stig", isGraduated: false, registeredCourses: 5}   
];

// Add a new method to the students to "calculate" their firstName, the firstName is the first given name 
/*
class Student {
    firstName(){
       return this.givenNames[0]
    }
}
*/

// Create a new array that only contains all the StudentIDS
let studentIDs = students.map((student) => student.studentID);
console.log(studentIDs);

// Create a new array that only contains all the students that are graduated 
let graduatedStudents = students.filter(({isGraduated}) => isGraduated === true);
//console.log(students.filter((student) => student.isGraduated));
console.log(graduatedStudents);

// Find out how many students are graduated 
console.log(graduatedStudents.length);

// Find out how many unique courses these students are regisitered to 

// remove the student with the studentID 42

// Calculate the average age of these students





