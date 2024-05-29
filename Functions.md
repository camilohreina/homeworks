## Difference Between Arrow Functions and Regular Functions

### Syntax

-   **Arrow Functions:** Introduced in ES6, have a shorter syntax.
    
    
    `const add = (a, b) => a + b;` 
    
-   **Regular Functions:** Standard way to define functions.
    

    
    `function add(a, b) {
      return a + b;
    }` 
    

### `this` Context

-   **Arrow Functions:** Do not have their own `this` context. They inherit `this` from the parent scope.
-   **Regular Functions:** Have their own `this` context.

### Arguments Object

-   **Arrow Functions:** Do not have an `arguments` object.
-   **Regular Functions:** Have access to the `arguments` object.

### Constructor

-   **Arrow Functions:** Cannot be used as constructors. Using `new` with an arrow function throws an error.
-   **Regular Functions:** Can be used as constructors.

### Hoisting

-   **Arrow Functions:** Are not hoisted.
-   **Regular Functions:** Are hoisted, meaning they can be called before they are defined in the code.

### Code Examples

#### Regular Function



`function checkNumber(num) {
  if (num % 2 === 0) {
    console.log(${num} is even);
  } else {
    console.log(${num} is odd);
  }
}`

checkNumber(4); // Output: 4 is even
checkNumber(7); // Output: 7 is odd`` 

#### Arrow Function



`const checkNumber = (num) => {
  if (num % 2 === 0) {
    console.log(${num} is even);
  } else {
    console.log(${num} is odd);
  }
}`

checkNumber(4); // Output: 4 is even
checkNumber(7); // Output: 7 is odd 

### Summary

-   Arrow functions are syntactically shorter and lexically bind the `this` value.
-   Regular functions are more versatile with their own `this` context and can be used as constructors.
-   Arrow functions are ideal for non-method functions, while regular functions are suitable for methods and constructor functions.
