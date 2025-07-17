"use strict";
let x = 1;
let y = 2;
if (typeof y === 'number') {
    console.log(y + 1);
}
else if (typeof y === 'string') {
    const result = y + 1;
    console.log(result);
}
// Type casting
let z = 3;
const result = z + 1;
console.log(result);
function processFeedback(input) {
    console.log(`Processing : ${input}`);
}
processFeedback('Great job!');
processFeedback(42);
processFeedback(new Blob());
function processFeedbackWithUnknown(input) {
    if (typeof input === 'string' || typeof input === 'number' || input instanceof Blob) {
        console.log(`Processing : ${input}`);
    }
    else {
        console.error('Unsupported type');
    }
}
processFeedbackWithUnknown('Great job!');
processFeedbackWithUnknown(42);
processFeedbackWithUnknown(new Blob());
processFeedbackWithUnknown([1, 2, 3]);
