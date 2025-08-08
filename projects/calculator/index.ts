import readlineSync from 'readline-sync';

type Operations = 'add' | 'subtract' | 'multiply' | 'divide';

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
        default:
            throw new Error("Invalid operator");
    }
}

const num1 = readlineSync.questionFloat('Enter the first number: ');
const num2 = readlineSync.questionFloat('Enter the second number: ');
const operator = readlineSync.question('Enter the operator (add, subtract, multiply, divide): ')
    .toLowerCase() as Operations;

try {
    const result = calculator(num1, num2, operator);
    console.log(`Result: ${result}`);
} catch (error) {
    console.error(`Error: ${(error as Error).message}`);
}
