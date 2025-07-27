class DataStore<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getItem(index: number): T | undefined {
        return this.items[index];
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    getAllItems(): T[] {
        return this.items;
    }
}

interface User {
    name: string;
    id: number;
}

const data = new DataStore<number>();
data.addItem(10);

const data2 = new DataStore<User>();
data2.addItem({ name: "Alice", id: 1 });

console.log(data.getItem(0));
console.log(data2.getItem(0));

function getValue<K, V>(key: K, value1: V, value2: V): V {
    if (key) {
        return value1;
    }
    return value2;
}

const n1: number = 1;
const n2: number = 2;

console.log(getValue<string, number>('hello', n1, n2));
