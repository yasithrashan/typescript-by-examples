// Arrays
var array = [["apple", "banana", 1, "cherry"],["date", "elderberry"]];
var newArray: (number|string)[] =[1,"hello"]

console.log(array[1].length);
console.log(newArray[1]);


// Tuples
const tuple: [string, number, boolean] = ["apple", 5, true];

console.log(tuple[2]);

const coords: [number, number][] = [
    [0, 0],
    [1, -2],
    [3, 4]
];

console.log(coords[1][1]);