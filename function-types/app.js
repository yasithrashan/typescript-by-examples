"use strict";
function add(x, y) {
    if (x == 0) {
        return "invalid";
    }
    return x + y;
}
const result = add(5, 10);
console.log(`The result is: ${result}`);
function makeName(firstName, lastName, middleName) {
    if (middleName) {
        return `${firstName} ${middleName} ${lastName}`;
    }
    return `${firstName} ${lastName}`;
}
const fullName = makeName("Yasith", "Perera", "Rashan");
const fullName2 = makeName("Yasith", "Perera");
console.log(`Full Name: ${fullName}`);
console.log(`Full Name 2: ${fullName2}`);
function callFunc(func, param1, param2) {
    func(param1, param2);
    console.log(`Function called with parameters: ${param1} and ${param2}`);
}
callFunc(makeName, "Yasith", "Perera");
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function applyFunc(funcs, values) {
    const results = [];
    for (let i = 0; i < funcs.length; i++) {
        const args = values[i];
        const result = funcs[i](args[0], args[1]);
        results.push(result);
    }
    return results;
}
applyFunc([mul, div], [[10, 5], [10, 5]]);
console.log(applyFunc([mul, div], [[10, 5], [10, 5]]));
