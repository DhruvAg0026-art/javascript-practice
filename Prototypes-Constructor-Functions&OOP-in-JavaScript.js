/*
 * Lesson 5: Prototypes, Constructor Functions & OOP in JavaScript
 *
 * Is lesson mein `this`, constructor functions, `new`, prototypes,
 * prototype chains, inheritance, Object.create(), classes, aur ek
 * practical employee-management example cover kiya gaya hai.
 *
 * Run this file with Node.js:
 *   node "Prototypes-Constructor-Functions&OOP-in-JavaScript.js"
 */

console.log("Lesson 5 - Prototypes, Constructor Functions & OOP in JavaScript");

// 1. `this` keyword
// `this` ka value normal function mein call karne ke tareeke par depend karta hai.
// Object method ko object ke through call karne par `this` us object ko refer karta hai.
function demonstrateThis() {
    const student = {
        name: "Dhruv",
        age: 20,

        introduce() {
            console.log(`My name is ${this.name}`);
            console.log(`My age is ${this.age}`);
        },
    };

    student.introduce();

    const user1 = {
        name: "Aman",
        greet() {
            console.log(`Hello, ${this.name}`);
        },
    };

    const user2 = {
        name: "Rahul",
        greet() {
            console.log(`Hello, ${this.name}`);
        },
    };

    user1.greet();
    user2.greet();

    // Arrow functions apna `this` nahi banate; woh surrounding scope se `this` lete hain.
}

demonstrateThis();

// 2. Constructor functions
// Constructor function ka naam convention ke mutabik Capital Letter se shuru hota hai.
function StudentRecord(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
}

const studentAman = new StudentRecord("Aman", 20, 85);
const studentRahul = new StudentRecord("Rahul", 21, 90);
const studentNeha = new StudentRecord("Neha", 19, 95);

console.log("\nConstructor function examples:");
console.log(studentAman);
console.log(studentRahul);
console.log(studentNeha);

// 3. `new` keyword kaise work karta hai?
// Approximate steps:
// 1. Naya empty object create hota hai.
// 2. Us object ka prototype constructor ke `prototype` se link hota hai.
// 3. Constructor naye object ko `this` ke roop mein use karke chalta hai.
// 4. Agar constructor koi object explicitly return nahi karta, to naya object return hota hai.
function Car(brand) {
    this.brand = brand;
}

const car = new Car("BMW");
console.log("\n`new` keyword example:");
console.log(car.brand); // BMW

// `new` ke bina constructor normal function call ban jata hai.
// Strict mode mein `this` undefined hota hai, isliye property assign karne par error aayega.

// 4. Prototypes
// Har instance ke liye method alag banane ke bajay, shared method prototype par rakho.
function PrototypalStudent(name) {
    this.name = name;
}

PrototypalStudent.prototype.study = function study() {
    console.log(`${this.name} is studying`);
};

const prototypalStudentAman = new PrototypalStudent("Aman");
const prototypalStudentRahul = new PrototypalStudent("Rahul");

console.log("\nShared prototype method examples:");
prototypalStudentAman.study();
prototypalStudentRahul.study();
console.log(
    prototypalStudentAman.study === prototypalStudentRahul.study
); // true: dono instances same method share karte hain.

// 5. Prototype chain
// Property pehle object par, phir uske prototype par, aur aage chain mein dhoondi jaati hai.
const personObject = {
    name: "Dhruv",
};

console.log("\nPrototype chain examples:");
console.log(personObject.name); // Dhruv
console.log(typeof personObject.toString); // function: Object.prototype se milta hai
console.log(personObject.age); // undefined
console.log(Object.getPrototypeOf(personObject) === Object.prototype); // true
console.log(personObject.hasOwnProperty("name")); // true
console.log(personObject.hasOwnProperty("age")); // false
console.log(Object.getPrototypeOf(Object.prototype)); // null: chain ka end

// 6. Constructor functions ke saath inheritance
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function introduce() {
    console.log(`I am ${this.name}`);
};

function CollegeStudent(name, age, course) {
    // Parent constructor ko current student object ke context mein chalao.
    Person.call(this, name, age);
    this.course = course;
}

// Parent ke prototype methods inherit karne ke liye alag se prototype link karo.
CollegeStudent.prototype = Object.create(Person.prototype);
CollegeStudent.prototype.constructor = CollegeStudent;

const collegeStudent = new CollegeStudent("Dhruv", 20, "JavaScript");
console.log("\nConstructor function inheritance example:");
collegeStudent.introduce();
console.log(collegeStudent.course); // JavaScript

// Person.call() properties initialize karta hai; Object.create() prototype methods inherit karta hai.

// 7. Object.create()
// Isse kisi existing object ko seedha naye object ka prototype bana sakte hain.
const greeter = {
    greet() {
        console.log("Hello!");
    },
};

const objectCreatedStudent = Object.create(greeter);
objectCreatedStudent.name = "Dhruv";

console.log("\nObject.create() example:");
objectCreatedStudent.greet();
console.log(Object.getPrototypeOf(objectCreatedStudent) === greeter); // true

// 8. ES6 classes
// Classes prototype-based inheritance ke liye cleaner syntax deti hain.
class ClassStudent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }
}

const classStudent = new ClassStudent("Dhruv", 20);
console.log("\nES6 class example:");
classStudent.introduce();
console.log(
    ClassStudent.prototype.hasOwnProperty("introduce")
); // true: class methods prototype par hote hain.

// 9. Class inheritance: `extends` aur `super`
class PersonClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class CourseStudent extends PersonClass {
    constructor(name, course) {
        super(name); // Parent constructor ko call karo.
        this.course = course;
    }

    study() {
        console.log(`${this.name} is learning ${this.course}`);
    }
}

const courseStudent = new CourseStudent("Dhruv", "JavaScript");
console.log("\nClass inheritance example:");
courseStudent.greet();
courseStudent.study();
console.log(courseStudent instanceof PersonClass); // true

// `extends`: parent class se inherit karta hai.
// `super()`: parent constructor ko call karta hai.
// Derived class ke constructor mein `this` use karne se pehle `super()` zaroor call karo.

// 10. Practical project: Employee Management System
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return `${this.name} earns Rs. ${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    showDepartment() {
        return `${this.name} manages ${this.department}`;
    }
}

const employee = new Employee("Aman", 30000);
const manager = new Manager("Dhruv", 60000, "IT");

console.log("\nEmployee Management System:");
console.log(employee.getDetails());
console.log(manager.getDetails());
console.log(manager.showDepartment());
console.log(manager instanceof Employee); // true

// 11. Viva ke important questions
// - Prototype kya hai?
//   Ek object jiske through doosre objects properties aur methods inherit kar sakte hain.
// - Prototype chain kya hai?
//   Prototypes ki linked sequence, jisme JavaScript properties search karti hai.
// - `new` kya karta hai?
//   Naya object banata hai, constructor ko us object ke saath chalata hai, aur object return karta hai.
// - Constructor function kya hai?
//   Aisa function jo naye objects initialize karne ke liye use hota hai.
// - Inheritance kya hai?
//   Doosre object ya class ki properties aur methods ko reuse karna.
// - `super()` kya karta hai?
//   Derived class se parent constructor ko call karta hai.
// - Object.create() kya karta hai?
//   Diye gaye object ko prototype banakar naya object create karta hai.
// - Kya class methods share hote hain?
//   Haan. Class methods class ke prototype par define hote hain.

// 12. Practical test
// Constructor function ke saath `new` use karne par kya hota hai?
//   function QuizCar(brand) { this.brand = brand; }
//   const quizCar = new QuizCar("BMW");
// Answer: ek naya object create aur initialize hota hai.

// 13. JavaScript roadmap
// Covered: Fundamentals; Strings, Conditions & Loops; Arrays & Objects;
// Functions & Advanced Functions; Prototypes & Constructor Functions.
// Upcoming: Async JavaScript; DOM & Events; jQuery & AJAX; APIs & Fetch; React.js.
//
// Next lesson - Async JavaScript:
// Synchronous vs Asynchronous JavaScript, callbacks, callback hell, event loop,
// call stack, Web APIs, microtask queue vs callback queue, promises, promise chaining,
// async/await, aur try/catch error handling.