let age = 30;

const stringvar ="Variables";
let name = "Wangui";

let isStudent = true;
const booleanvar = false;

const nullvar = null;

let x;

let Student = {firstname: "Lia", age: 15};

const mySymbol = Symbol("my unique symbol");

console.log("Age:", age);
console.log("String:", stringvar);
console.log("Name:", name);
console.log("Boolean1:", isStudent);
console.log("Boolean2:", booleanvar);
console.log("Null:", nullvar);
console.log("Undefined:", x);
console.log("Student:", Student);
console.log(mySymbol);


const number = [15,20,14,1,7];


const multipliednumbers = [15, 20, 14, 1, 7].map(num => num * 2);
console.log("Multiplied numbers:", multipliednumbers);


const filterednumbers = [15, 20, 14, 1, 7].filter(num => num > 10);
console.log("Numbers greater than 10:", filterednumbers);


const sum = [15, 20, 14, 1, 7].reduce((acc, num) => acc+num, 0);
console.log("Sum of all the numbers:", sum);


console.log("Each number in the array:");
[15, 20, 14, 1, 7].forEach(num => console.log(num));


function greet(name) {
    console.log("Hello, " + name + " How are you?");
}
greet("Wangui");

function sumArray(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
const numbers = [5,4,3,2,1];
const result = sumArray(numbers);
console.log(result);


function findMax(arr) {
    return Math.max(...arr);
}
console.log("Max number in array:", findMax([12,30,20,4,7]));
