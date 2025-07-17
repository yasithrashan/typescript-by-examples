let x: any = 1;

let y: unknown = 2;

if (typeof y === 'number') {
    console.log(y + 1);
} else if (typeof y === 'string') {
    const result = y + 1;
    console.log(result);
}

// Type casting

let z: unknown = 3;

const result = (z as number) + 1
console.log(result);

function processFeedback(input: any): void {
    console.log(`Processing : ${input}`);
}

processFeedback('Great job!');
processFeedback(42);
processFeedback(new Blob());


function processFeedbackWithUnknown(input: unknown): void {
    if (typeof input === 'string' || typeof input === 'number' || input instanceof Blob) {
        console.log(`Processing : ${input}`);
    } else {
        console.error('Unsupported type');
    }
}

processFeedbackWithUnknown('Great job!');
processFeedbackWithUnknown(42);
processFeedbackWithUnknown(new Blob());
processFeedbackWithUnknown([1, 2, 3]);