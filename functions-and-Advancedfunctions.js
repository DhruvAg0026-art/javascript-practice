1. /*
Function kya hota hai?
Maan le tujhe 10 baar do numbers ka sum calculate karna hai.

Without function:
let a = 10, b = 20;
console.log(a + b);

let c = 30, d = 40;
console.log(c + d);

Aise code baar-baar likhna padega.

Solution: Function!
Function ek reusable block of code hai jo particular task perform karta hai.

function add(a, b) {
    let sum = a + b;
    console.log(sum);
}

add(10, 20);
add(30, 40);
add(50, 60);

Output:
30
70
110

Yahan:
- function — keyword
- add — function name
- a, b — parameters
- sum — function ke andar variable
- add(10, 20) — function call
- 10, 20 — arguments
*/

console.log("=== Function basics ===");
function add(a, b) {
  let sum = a + b;
  console.log(sum);
}

add(10, 20);
add(30, 40);
add(50, 60);

// 2. Parameters vs Arguments
function multiply(a, b) {
  console.log(a * b);
}

multiply(5, 4);

// 3. Return vs console.log
function addWithReturn(a, b) {
  return a + b;
}

let result = addWithReturn(10, 20);
console.log(result);
console.log(addWithReturn(5, 5));

function addWithoutReturn(a, b) {
  console.log(a + b);
}

let result2 = addWithoutReturn(10, 20);
console.log(result2);

// 4. Function Declaration vs Function Expression
function greetDeclaration() {
  console.log("Hello Bhai!");
}

greetDeclaration();

const greetExpression = function () {
  console.log("Hello Bhai!");
};

greetExpression();

// 5. Arrow Functions
function squareNormal(n) {
  return n * n;
}

const square = (n) => {
  return n * n;
};

console.log(square(5));
console.log(squareNormal(5));

const squareShort = n => n * n;
console.log(squareShort(5));

const addArrow = (a, b) => a + b;
console.log(addArrow(10, 20));

const greetArrow = () => "Hello";
console.log(greetArrow());

// 6. Default Parameters
function greetUser(name = "Guest") {
  console.log("Hello " + name);
}

greetUser("Dhruv");
greetUser();

function calculatePrice(price, tax = 18) {
  return price + (price * tax) / 100;
}

console.log(calculatePrice(1000));
console.log(calculatePrice(1000, 5));

// 7. Scope
let globalName = "Dhruv";

function showName() {
  console.log(globalName);
}

showName();
console.log(globalName);

function testScope() {
  let age = 20;
  console.log(age);
}

testScope();

if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}

console.log(z);

// 8. Callback Functions
function greetWithCallback(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greetWithCallback("Dhruv", sayBye);

// 9. Higher-Order Functions
function calculate(a, b, operation) {
  return operation(a, b);
}

function addValues(x, y) {
  return x + y;
}

function multiplyValues(x, y) {
  return x * y;
}

console.log(calculate(5, 3, addValues));
console.log(calculate(5, 3, multiplyValues));

// 10. Closures
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter();
counter();
counter();

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

let counter2 = createCounter();
console.log(counter2());

// 11. Recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

/*
Samajh:
1. greet() call hua.
2. "Dhruv" aur sayBye function pass hua.
3. Pehle Hello print hua.
4. Phir callback() execute hua.
5. sayBye() execute ho gaya.
Important difference:
greet("Dhruv", sayBye);   // Function pass
greet("Dhruv", sayBye()); // Function immediately execute

Dono same nahi hain.
*/

// More examples for advanced function concepts
console.log("=== Higher-Order Functions ===");
function calculate(a, b, operation) {
  return operation(a, b);
}

function addValues(x, y) {
  return x + y;
}

function multiplyValues(x, y) {
  return x * y;
}

console.log(calculate(5, 3, addValues));
console.log(calculate(5, 3, multiplyValues));

/*
10. Closures — Advanced JavaScript ka favourite
Closure tab banta hai jab inner function apne outer function ke lexical scope ko remember karta hai,
 even after outer function finish ho gaya ho.
*/
console.log("=== Closures ===");
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const outerCounter = outer();
outerCounter();
outerCounter();
outerCounter();

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let counterOne = createCounter();
console.log(counterOne());
console.log(counterOne());
console.log(counterOne());

let counterTwo = createCounter();
console.log(counterTwo());

/*
11. Recursion — Function calling itself
Example: Factorial.
5! = 5 x 4 x 3 x 2 x 1 = 120
*/
console.log("=== Recursion ===");
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

// Important notes:
// 1. Base Case: Recursion ko stop karta hai.
// 2. Recursive Case: Function ko dobara call karta hai.
// Base case nahi hoga toh infinite recursion aur stack overflow ho sakta hai.