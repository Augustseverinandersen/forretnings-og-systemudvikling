class Student {
    constructor({studentID, age, givenNames, lastName, isGraduated, registeredCourses}) {
        this.studentID = studentID
        this.age = age
        this.givenNames = givenNames
        this.lastName = lastName
        this.isGraduated = isGraduated
        this.registeredCourses = registeredCourses
    }

    //1
    firstName() {
        return this.givenNames[0]
    }

    toString() {
        return this.firstName()
    }
}

let students = [
    new Student({studentID: 12974, age: 24, givenNames: ["Juan","Pepe"], lastName: "Gonzales", isGraduated: true, registeredCourses:["BSD"]}),
    new Student({studentID: 12975, age: 23, givenNames: ["Maria"], lastName: "Andersen", isGraduated: false, registeredCourses:["BSD","Pottery"]}),
    new Student({studentID: 12976, age: 24, givenNames: ["Mai-Britt"], lastName: "Christensen", isGraduated: false, registeredCourses:["BSD","Pottery"]}),
    new Student({studentID: 42, age: 25, givenNames: ["Morten"], lastName: "Mortensen", isGraduated: false, registeredCourses:["BSD"]}),
]


//1
console.log("\nResult of point 1")
console.log(students[0].firstName())

//2

console.log("\nResult of point 2")
console.log(students.map((student) => student.studentID))

//Long version
/*
function callback(student) {
    return student.studentID
}
console.log(students.map(callback))
*/

//3

console.log("\nResult of point 3")
console.log(students.filter((student) => student.isGraduated))

/* Long version

function callback(student) {
    return student.isGraduated
}

students.filter(callback)
*/

//4

console.log("\nResult of point 4")
let graduatedStudents = students.filter((student) => student.isGraduated)
console.log("Amount of graduated students: " + graduatedStudents.length)

//5

console.log("\nResult of point 5")

let uniqueCourses = new Set()

students.forEach((student) => 
    student.registeredCourses.forEach((aCourse) =>
        uniqueCourses.add(aCourse)
    )
)

console.log("Amount of unique courses: " + uniqueCourses.size)

/* With reduce 
let uniqueCourses = new Set()
students.reduce((accumCourses,student) => student.registeredCourses.forEach(aCourse => accumCourses.add(aCourse)),uniqueCourses)
console.log("Amount of unique courses: " + uniqueCourses.size)
*/
//6
console.log("\nResult of point 6")
console.log("Students before removing studentID 42: " + students.length)
let indexToRemove = students.findIndex((student) => student.studentID == 42)

if (indexToRemove < 0) {
   return //Not in the array
} else {
    students.splice(indexToRemove,1)
}

console.log("Students after removing studentID 42: " + students.length)

//7

console.log("\nResult of point 7")
let ageSum = students.reduce((accumAge,student) => accumAge + student.age)
console.log("Average age: " + ageSum / students.length)
