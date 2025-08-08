export function add(x: number, y: number): number {
    return x + y;
}

function subtract(x: number, y: number): number {
    return x - y;
}

function multiply(x: number, y: number): number {
    return x * y;
}

export { subtract, multiply };

function test() {
    return "This is a test function";
}

export default test;