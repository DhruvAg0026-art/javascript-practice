
let name = "Dhruv Agarwal";

console.log(name.length);         // 13
console.log(name.toUpperCase());  // DHRUV AGARWAL
console.log(name.toLowerCase());  // dhruv agarwal
console.log(name.charAt(0));      // D
console.log(name.includes("Agarwal")); // true
console.log(name.indexOf("A"));  // 6
console.log(name.slice(0, 5));   // Dhruv

//length — characters ki total count.



//toUpperCase() / toLowerCase() — case change karte hain.



//includes() — text present hai ya nahi.



//slice(start, end) — start included hota hai, end excluded.



//trim() — beginning aur end ke extra spaces remove karta hai.

//JavaScript strings immutable hoti hain. Matlab original string ko methods directly change nahi karte; aam taur par nayi string return karte hain.

let s = "hello";
s.toUpperCase();
console.log(s); // hello


let personName = "Dhruv";
let marks = 85;

//template literals (backticks) ka use karke variables ko string mein embed kar sakte hain. Isse string concatenation ka kaam asaan ho jata hai.
console.log(`My name is ${personName} and my marks are ${marks}`);//My name is Dhruv and my marks are 85

//${} ke liye backticks ` ` use hote hain, normal quotes nahi.

//Type conversion:


console.log(Number("25"));       // 25
console.log(Number("hello"));    // NaN
console.log(String(100));        // "100"
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(parseInt("42px"));   // 42
console.log(parseFloat("3.14")); // 3.14

//NaN ka matlab Not a Number.

console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log(5 + true); // 6

//"5" + 2: + strings ke saath concatenation karta hai.



//"5" - 2: subtraction ke liye string number mein convert ho jaati hai.



//5 + true: true number context mein 1 ban jaata hai.


let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

//Loops


for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/*for loop ke teen parts:
1. let i = 1 — initialization.
2. i <= 5 — condition.
3. i++ — har iteration ke baad increment.*/


let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}

let j = 5;

do {
    console.log(j);
} while (j < 5);


//while condition pehle check karta hai. do...while body kam se kam ek baar execute karta hai, chahe condition false ho.

// 6. Errors aur debugging
// Bhai, code likhte waqt errors aayenge — important ye hai ki unhe identify karna seekhe.
// Syntax Error

// Code ka grammar galat hai.
// Galat:
// if (age > 18 {
//     console.log("Adult");
// }


// ) missing hai.


// Reference Error

// Aise variable ko access karna jo available nahi hai.
console.log(userName);


// Agar userName declare nahi hai, toh ReferenceError aayega.


// Type Error

// Kisi value par unsupported operation karna.
let x = null;
x.toUpperCase();


// Isse TypeError aayega.


// Debugging ke liye console.log(), browser DevTools aur breakpoints use kar sakte hain.
// 7. Hoisting — exam ka favourite topic
// Hoisting ka matlab samajh: JavaScript code execute karne se pehle declarations ko process karti hai. Lekin var, let, const aur functions ka behaviour alag hota hai.

console.log(a);
var a = 10;



// Output: undefined

// var declaration hoist hoti hai aur initialization se pehle uski value undefined hoti hai.

// Ab doosra example:
console.log(b);
let b = 20;


// Output: ReferenceError

// let aur const declarations bhi hoist hoti hain, lekin declaration se pehle unhe access nahi kar sakte. Is period ko Temporal Dead Zone (TDZ) kehte hain.

// Function declaration ka example:
greet();

function greet() {
    console.log("Hello!");
}


// Output: Hello!

// Function declaration ko definition se pehle call kiya ja sakta hai.
// 8. Strict mode
// Strict mode JavaScript ke kuch unsafe ya confusing behaviours ko rokta hai.
"use strict";

x = 10; // ReferenceError: x declare nahi hai


// Strict mode mein undeclared variable assign karna allowed nahi hai.

