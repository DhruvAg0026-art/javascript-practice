// 1. Arrays — ek variable mein multiple values
// Maan le tujhe 5 students ke marks store karne hain. Alag-alag variables
// banane ki jagah array use kar sakte hain.

const studentMarks = [85, 72, 91, 60, 45];

console.log(studentMarks[0]); // 85
console.log(studentMarks[1]); // 72
console.log(studentMarks[4]); // 45
console.log(studentMarks.length); // 5

// Golden rule: Array indexing 0 se shuru hoti hai.
// Array ka structure:
// 85 — Index 0
// 72 — Index 1
// 91 — Index 2
// 60 — Index 3
// 45 — Index 4

// 2. Array ke important methods
// Ye methods practicals aur output-based questions dono mein kaam aayenge.

const methodNumbers = [10, 20, 30];

methodNumbers.push(40); // End mein add
console.log(methodNumbers); // [10, 20, 30, 40]

methodNumbers.pop(); // Last element remove
methodNumbers.unshift(5); // Beginning mein add
methodNumbers.shift(); // First element remove

console.log(methodNumbers); // [10, 20, 30]

// Yaad rakh:
// push()     — End mein element add
// pop()      — End se element remove
// unshift()  — Beginning mein add
// shift()    — Beginning se remove
// includes() — Element present hai ya nahi
// indexOf()  — Element ka pehla index
// slice()    — Array ka portion return; original unchanged
// splice()   — Original array mein elements add/remove

// slice() vs splice() — exam trick

const sliceSpliceNumbers = [10, 20, 30, 40];

console.log(sliceSpliceNumbers.slice(1, 3));
// [20, 30]

console.log(sliceSpliceNumbers);
// [10, 20, 30, 40]

sliceSpliceNumbers.splice(1, 2);

console.log(sliceSpliceNumbers);
// [10, 40]

// slice(1, 3) index 1 aur 2 return karta hai; index 3 include nahi hota.
// splice(1, 2) original array se index 1 par shuru karke 2 elements remove karta hai.

// 3. Loops se arrays traverse karna
// Array ke har element par kaam karne ke liye loop use karte hain.

const loopMarks = [85, 72, 91, 60];

for (let index = 0; index < loopMarks.length; index++) {
    console.log(loopMarks[index]);
}

// JavaScript mein aur bhi convenient options hain.

// for...of: values milti hain
for (const mark of loopMarks) {
    console.log(mark);
}

// forEach: har element par callback chalta hai
loopMarks.forEach((mark) => {
    console.log(mark);
});

// Traditional for: index aur iteration par poora control.
// for...of: values ke liye convenient.
// forEach(): har element par operation karne ke liye.
// Important: forEach() se naya transformed array return nahi hota.
// Uske liye map() use karte hain.

// 4. Advanced array methods — map, filter, reduce
// Bhai, in teen methods ko achhe se seekh le. Ye React mein bhi bahut use honge.

// A. map() — har element ko transform karna
// Maan le marks ki list hai aur tujhe har student ke marks mein 5 add karne hain.

const originalMarks = [50, 60, 70, 80];

const updatedMarks = originalMarks.map((mark) => {
    return mark + 5;
});

console.log(updatedMarks);
// [55, 65, 75, 85]

console.log(originalMarks);
// [50, 60, 70, 80]

// map() ek naya array banata hai, jisme callback ke return values hoti hain.

// Short syntax:
const doubledNumbers = [1, 2, 3].map((number) => number * 2);
console.log(doubledNumbers); // [2, 4, 6]

// B. filter() — condition ke according elements select karna
// Maan le sirf passing students chahiye.

const candidateMarks = [25, 45, 80, 30, 90];

const passingMarks = candidateMarks.filter((mark) => {
    return mark >= 40;
});

console.log(passingMarks);
// [45, 80, 90]

// filter() condition check karke matching elements ka naya array return karta hai.

// C. reduce() — values ko ek result mein combine karna
// Maan le total marks ka sum nikalna hai.

const subjectMarks = [10, 20, 30, 40];

const subjectTotal = subjectMarks.reduce((sum, mark) => {
    return sum + mark;
}, 0);

console.log(subjectTotal); // 100

// Yahan:
// sum accumulator hai, jo running total rakhta hai.
// mark current element hai.
// 0 initial value hai.
//
// Reduce ka dry run:
// Step 1: mark 10 — 0 + 10 = 10
// Step 2: mark 20 — 10 + 20 = 30
// Step 3: mark 30 — 30 + 30 = 60
// Step 4: mark 40 — 60 + 40 = 100

// 5. Teeno methods ka difference
// map()     — Naya transformed array; jaise har price mein tax add karna
// filter()  — Naya selected array; jaise sirf passing marks nikalna
// reduce()  — Ek combined result; jaise total, sum ya count
// forEach() — undefined; jaise har item print karna

// 6. Objects — related information store karna
// Array mein hum values ko index se access karte hain.
// Object mein values ko properties ke naam se access karte hain.

const student = {
    name: "Dhruv",
    age: 20,
    marks: 85,
    isPassed: true
};

console.log(student.name); // Dhruv
console.log(student["age"]); // 20
console.log(student.marks); // 85

student.marks = 92; // Update
student.city = "Mathura"; // New property

delete student.isPassed; // Delete property

console.log(student);

// Object ke andar name, age, marks keys hain aur unki corresponding values hain.

// Object ke andar array aur method

const studentWithMethod = {
    name: "Aman",
    marks: [80, 90, 75],

    getTotal: function () {
        return this.marks.reduce((sum, mark) => sum + mark, 0);
    }
};

console.log(studentWithMethod.marks[1]); // 90
console.log(studentWithMethod.getTotal()); // 245

// this.marks current object ki marks property ko refer karta hai.
// getTotal() object ka method hai.

// 7. Destructuring aur spread operator
// Ye modern JavaScript (ES6+) ke important features hain.

// Destructuring
// Object ya array se values ko easily variables mein nikaal sakte hain.

const destructuredStudent = { name: "Dhruv", marks: 85 };

const { name: studentName, marks: destructuredMarks } = destructuredStudent;

console.log(studentName); // Dhruv
console.log(destructuredMarks); // 85

// Array destructuring:
const destructuredNumbers = [10, 20, 30];

const [firstNumber, secondNumber] = destructuredNumbers;

console.log(firstNumber); // 10
console.log(secondNumber); // 20

// Spread operator (...)
// Array ki values ko spread karne ya shallow copy banane ke liye use hota hai.

const originalArray = [1, 2, 3];
const combinedArray = [...originalArray, 4, 5];

console.log(combinedArray); // [1, 2, 3, 4, 5]
console.log(originalArray); // [1, 2, 3]

// Objects mein bhi:
const spreadStudent = { name: "Aman", marks: 80 };

const updatedStudent = { ...spreadStudent, marks: 95 };

console.log(updatedStudent);
// { name: "Aman", marks: 95 }

// Dhyaan rahe: spread se banne wali copy shallow hoti hai.
// Nested objects ya arrays ke liye ye deep copy guarantee nahi karta.

// 8. Practical project — Student Marks Manager
// Ab saare concepts ek saath use karte hain.

const students = [
    { name: "Aman", marks: 85 },
    { name: "Riya", marks: 35 },
    { name: "Dhruv", marks: 92 },
    { name: "Neha", marks: 65 }
];

// 1. Sab students ke naam print karo
students.forEach((currentStudent) => {
    console.log(currentStudent.name);
});

// 2. Passing students filter karo
const passedStudents = students.filter((currentStudent) => {
    return currentStudent.marks >= 40;
});

console.log("Passed:", passedStudents);

// 3. Sabhi students ke marks mein 5 add karo
const studentsWithUpdatedMarks = students.map((currentStudent) => {
    return { ...currentStudent, marks: currentStudent.marks + 5 };
});

console.log("Updated:", studentsWithUpdatedMarks);

// 4. Average marks calculate karo
const allStudentMarksTotal = students.reduce((sum, currentStudent) => {
    return sum + currentStudent.marks;
}, 0);

console.log("Average:", allStudentMarksTotal / students.length);

// Is project se arrays, objects, forEach, filter, map, reduce aur spread
// operator sab use ho gaye.
