namespace Utils {
    export function myFunction() {
        return "Hello from Utils!";
    }
    export const myConstant = 42;
}

const result = Utils.myFunction();
console.log(result);
console.log(Utils.myConstant);