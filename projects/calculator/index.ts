import readlineSync from 'readline-sync';

type Operations = 'add' | 'subtract' | 'multiply' | 'divide' | 'power' | 'modulus' | 'sqrt';

function calculator(a: number, b: number, operator: Operations): number {
    switch (operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) throw new Error("Division by zero is not allowed");
            return a / b;
        case 'power':
            return Math.pow(a, b);
        case 'modulus':
            if (b === 0) throw new Error("Modulus by zero is not allowed");
            return a % b;
        case 'sqrt':
            if (a < 0) throw new Error("Square root of negative number is not allowed");
            return Math.sqrt(a);
        default:
            throw new Error("Invalid operator");
    }
}

const num1 = readlineSync.questionFloat('Enter the first number: ');
let num2 = 0;

const operator = readlineSync.question(
    'Enter the operator (add, subtract, multiply, divide, power, modulus, sqrt): '
).toLowerCase() as Operations;

if (operator !== 'sqrt') {
    num2 = readlineSync.questionFloat('Enter the second number: ');
}

try {
    const result = calculator(num1, num2, operator);
    console.log(`Result: ${result}`);
} catch (error) {
    console.error(`Error: ${(error as Error).message}`);
}
