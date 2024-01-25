// In JavaScript, let and var are both used for variable declaration, but they have some key differences in terms of scope and hoisting:

// Scope:

// var: Variables declared with var are function-scoped, meaning their scope is limited to the function in which they are declared. If a variable is declared with var inside a block (like an if statement or a loop), it will still be accessible outside that block.
// let: Variables declared with let are block-scoped. They are limited to the block, statement, or expression on which it is used. This helps to avoid issues related to variable scope leakage.
// Hoisting: is  behavior in JavaScript during the compilation phase where variable and function declarations are moved to the top of their containing scope.

// var: Variables declared with var are hoisted to the top of their scope during the compilation phase. This means that you can use a var variable before it's declared in the code. However, the variable will be initialized with undefined until the actual declaration is reached in the code.
// let: Variables declared with let are hoisted as well, but they are not initialized until the interpreter reaches the actual declaration in the code. Trying to access a let variable before its declaration results in a ReferenceError.
// Redeclaration:

// var: Allows redeclaration within the same scope without any error.
// let: Does not allow redeclaration of the same variable within the same scope. Attempting to do so will result in a SyntaxError.
// Here's an example to illustrate these differences:

// javascript
// Copy code
// Example with var
function exampleVar() {
  if (true) {
    var x = 10;
    console.log(x); // Outputs 10
  }
  console.log(x); // Outputs 10
}

// Example with let
function exampleLet() {
  if (true) {
    let y = 20;
    console.log(y); // Outputs 20
  }
  // console.log(y); // Error: y is not defined
}

exampleVar();
exampleLet();