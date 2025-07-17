function add(x: number, y: number): number | string {
    if (x == 0) {
        return "invalid";
    }
    return x + y;
}

const result = add(5, 10);
console.log(`The result is: ${result}`);

function makeName(firstName: string, lastName: string, middleName?: string) {
    if (middleName) {
        return `${firstName} ${middleName} ${lastName}`;
    }
    return `${firstName} ${lastName}`;
}

const fullName = makeName("Yasith", "Perera", "Rashan");
const fullName2 = makeName("Yasith", "Perera");

console.log(`Full Name: ${fullName}`);
console.log(`Full Name 2: ${fullName2}`);

function callFunc(func: (f: string, l: string, m?: string) => string, param1: string, param2: string) {
    func(param1, param2);
    console.log(`Function called with parameters: ${param1} and ${param2}`);

}

callFunc(makeName, "Yasith", "Perera");


function mul(x: number, y: number): number {
    return x * y;
}
function div(x: number, y: number): number {
    return x / y;
}

function applyFunc(funcs: ((a: number, b: number) => number)[], values: [number, number][]): number[] {
    const results: number[] = [];
    for (let i = 0; i < funcs.length; i++) {
        const args = values[i];
        const result = funcs[i](args[0], args[1]);
        results.push(result);
    }
    return results;
}

applyFunc([mul, div], [[10, 5], [10, 5]]);
console.log(applyFunc([mul, div], [[10, 5], [10, 5]]));
