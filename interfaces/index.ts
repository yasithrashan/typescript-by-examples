interface Person {
    name: string;
    age: number;
}

interface Person2 {
    name: string;
    age: number;
    isActive?: boolean;
    hello: () => void;
}

interface Manager extends Person , Person{
    employee: Person[]
}

const person: Person2 = {
    name: 'Yasith',
    age: 21,
    hello: () => {
        console.log('Hello world');
    }
}

person.hello();

interface Employee extends Person {
    employeeId: number;
}

const employee: Employee = {
    name: 'John',
    age: 30,
    employeeId: 12345,
}

const manager: Manager = {
    name: 'Jane',
    age: 40,
    employee: [employee],
}

manager.employee.push((employee));

console.log(manager.employee);

function getPerson(p:Person): Person {
    return {
        name: p.name,
        age: p.age,
    }
}

console.log(getPerson(person));