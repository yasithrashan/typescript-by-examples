const sayHello = (): void => {
    console.log('Hello')
}
sayHello();

const add = (a: number, b: number): number => {
    return a + b;
}
console.log(add(10, 5));

const square = (x: number): number => x * x;
console.log(square(5));

const numbers: number[] = [1, 2, 3, 4, 5]
const double = numbers.map(num => num * 2)
console.log(double);

const names: string[] = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => console.log(`Hello ${name}`));