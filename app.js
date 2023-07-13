//  functions



// function declaration ... not industry standard
function namedFunction() {
    console.log("NAME")
}


// arrow function with parameters ... is industry standard
const addTwoNumbers = (x, y) => {
    console.log( x + y )
}

// purpose to add two numbers

addTwoNumbers(2,2)
addTwoNumbers(7,9)
addTwoNumbers(1000,10)


//  can also have functions without parameters

//  i think these are called anonymous functions
const addTwo = () => {

}



//  SCOPE
    // - access to variables and their values


let school = "perscholas"
// globally accessible... can access anywhere in code


const gradeAssignment = () => {
    let studentGPA = "3.0"
    console.log(studentGPA)
    console.log(school) // globally accessible variable so this works
}

// console.log(studentGPA) // throws a reference error "studentGPA not defined"
//  why? because studentGPA is a local variable!!!

gradeAssignment()