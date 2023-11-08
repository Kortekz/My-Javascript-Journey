// TASK 1:VARIABLES and OPERATORS
// 1. Create a variable called “language” and assign it the value “JavaScript”. Then create
// a variable called “score” and assign it the value “10”.

let language = "JavaScript"
let score = 10

// 2.Create two variables called “length” and “width”. Assign each variable a value of 10 and 5 respectfully. Use
// the variables to calculate the area of a rectangle with the length and width specified (remember area = length x width).
// Write the following to the console using CONCATENATION and BACKTICKS: 
// “The area of the rectangle is …” where … is the area you calculated.

let length = 10
let width = 5
let area = length * width
// Concatenation
console.log('This is the area of the rectangle - ' + area)
// BackTicks
console.log(`The area of the rectangle is - ${area}`)

// 3.Create two variables called “num1” and “num2.” Assign each variable a value of 10 and 4 respectfully.
// Calculate and display in the console what the remainder is if num1 is divided by num2.

let num1 = 10
let num2 = 4
let remainder = num1%num2
console.log('This is the remainder: ' + remainder)
// Another way to display:
console.log('Remainder: ' + num1%num2)

// 4.Using the variables you created in the previous step, output the results
// of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks
console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)} remainder ${remainder}`)

// B. Task 2:Data Types
// 1. Define the following data types with your own contents[ 'integer', 'decimal', 'string', 'array'(minimum: 3 items), 'Object'(minimum: 4 values)]
// 2. Once you’ve created the variables, display them to the console
let integer = 5
let decimal = 2.5
let string = "Corne"
let array = [1, 2, 3, 4]
let people = {
    firstName: "Corne",
    lastName: "Balie",
    age: "23",
    phone: "0610278132"
}
console.log("This is my integer: " +integer + " This is my Decimal: " +decimal + " This is my string: " +string + " This is my array: " +array + " This is my object: " + " FirstName:" +people.firstName + " LastName:"+people.lastName + " Age:" +people.age + " Phone:" +people.phone)

// 3. Use the ‘typeof’ function to check each variable
// Typeof
console.log(`Type of 'integer' variable: ` + typeof integer);
console.log(`Type of 'decimal' variable: ` + typeof decimal);
console.log(`Type of 'string' variable: ` + typeof string);
console.log(`Type of 'array' variable: ` + typeof array);
console.log(`Type of 'object' variable: ` + typeof people);

// 4. Create an array with numbers and strings. Comment what data type you expect this to be. 
// Then use the ‘typeof’ function on this array

let array1 = [1, "Corne" , 2 , "Balie"]
// I expect this array to be an object
console.log(typeof array1)

// 5. Create a null variable and an undefined variable
let Corne = null
let Balie = undefined