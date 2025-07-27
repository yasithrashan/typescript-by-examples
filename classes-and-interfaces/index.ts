interface Animal {
    speak(): void;
}

class Dog implements Animal {
    private name: string;
    private color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    speak(): void {
        console.log(`${this.name} barks!`);
    }

    test() {
        return 1;
    }
}

const myDog: Animal = new Dog("Buddy", "Brown");
myDog.speak();

class Cat implements Animal {
    speak(): void {
        console.log('meows!');
    }
}

const dog = new Dog("Rex", "Black");
const cat = new Cat();
const animals: Animal[] = [dog, cat];

function makeSound(animal: Animal): void {
    animal.speak();
}

makeSound(dog);
makeSound(cat);