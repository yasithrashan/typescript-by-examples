class Person {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
    getName() {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
}

const p1 = new Person("Alice");
p1.greet();
p1.getName();
p1.setName("Bob");
p1.greet();


abstract class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} says Woof!`);
    }
}

const dog = new Dog("Rex");
dog.makeSound();
