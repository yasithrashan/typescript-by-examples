class Dog {
    static instanceCount: number = 0;
    name: string;

    constructor(name: string) {
        Dog.instanceCount++;
        this.name = name;
    }

    static decreaseCount(): void {
        this.instanceCount--;
    }
}

const dog1 = new Dog("Buddy");
const dog2 = new Dog("Max");

console.log(Dog.instanceCount);
Dog.decreaseCount();
console.log(Dog.instanceCount);
