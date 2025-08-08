import test, { add, subtract, multiply } from "./util";

const result = add(5, 3);
console.log(`Addition Result: ${result}`);

const subResult = subtract(10, 4);
console.log(`Subtraction Result: ${subResult}`);

const mulResult = multiply(6, 7);
console.log(`Multiplication Result: ${mulResult}`);

console.log(test());