// declare and initialize variables
let a = 5; 
let b = 10; 

// Perform arithmetic operations
let sum = a + b; 
let difference = a - b ;
let product = a * b;
let quotient = a /b ;

// Output the results of the aithmetic operations 
console.log("Sum: ", sum);
console.log("Difference: ", difference);
console.log("Product: ", product);
console.log("Quotient: ", quotient);

// Intentionally add an error
// This line will couse an error because... ? 
// To fix this error we need to define the "undefinedValue"
let undefinedValue = 1;
console.log("Fixed Error example: ", sum + undefinedValue);