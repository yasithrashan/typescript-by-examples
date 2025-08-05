type StringOrNumber = string | number;

function add1(value: StringOrNumber): StringOrNumber {
    if (typeof value === 'string') {
        return value + '1';
    } else if (typeof value === 'number') {
        return value + 1;
    }
    throw new Error('Invalid type: value must be a string or a number');
}

class Dog {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Cat {
    firstName: string

    constructor(firstName: string) {
        this.firstName = firstName;
    }
}

function isDog(pet: Dog | Cat): pet is Dog {
    return (pet as Dog).lastName !== undefined;
}

function getName(animal: Cat | Dog) {
    if (animal instanceof Dog) {
        return animal.firstName + ' ' + animal.lastName;
    } else if (animal instanceof Cat) {
        return animal.firstName;
    }
    throw new Error('Invalid type: animal must be a Cat or a Dog');
}

function getName2(animal: Cat | Dog) {
    if (isDog(animal)) {
        return animal.firstName + ' ' + animal.lastName;
    } else if (animal instanceof Cat) {
        return animal.firstName;
    }
    throw new Error('Invalid type: animal must be a Cat or a Dog');
}

const d1 = new Dog('Rex', 'Smith');
const c1 = new Cat('Whiskers');

console.log(getName(d1));
console.log(getName(c1));
