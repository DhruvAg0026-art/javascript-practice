
let name = "Dhruv";
let age = 20;
let marks = 85;

console.log(name);
console.log(age);
console.log(marks);

age = 21; // let ki value change ho sakti hai
console.log(age);


let score = 10;
score = 20; // Valid

const country = "India";
// country = "USA"; // TypeError

var city = "Dehradun";
city = "Delhi"; // Valid

//const object ya array ka matlab ye nahi ki uske andar ka data kabhi change nahi ho sakta.

const student = { name: "Aman" };
student.name = "Rahul";

console.log(student.name); // Rahul

//Object ka reference dobara assign nahi kiya, sirf uski property change ki hai.


let personName = "Dhruv"; // String
let personAge = 20;       // Number
let isStudent = true;     // Boolean
let result;               // Undefined
let value = null;         // Null
let id = 12345678901234567890n; // BigInt
let unique = Symbol("id");      // Symbol

console.log(typeof personName); // string
console.log(typeof personAge);  // number
console.log(typeof isStudent); // boolean
console.log(typeof result);    // undefined
console.log(typeof value);     // object (JavaScript quirk)
console.log(typeof id);        // bigint
console.log(typeof unique);    // symbol

//typeof null ka result "object" aata hai. Ye JavaScript ka historical quirk hai, null actual object nahi hai.

