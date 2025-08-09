interface Task {
    id: number;
    description: string;
    done: boolean
}

class TodoList {
    private tasks: Task[] = [];
    private nextId: number = 1;

    addTask(description: string): void {
        this.tasks.push({
            id: this.nextId++,
            description,
            done: false
        });
        console.log(`Task added: ${description}`);
    }

    listTasks(): void {
        if (this.tasks.length === 0) {
            console.log('No task is in the list')
            return;
        }
        console.log('Tasks: ')
        this.tasks.forEach((task) => {
            console.log(`[${task.done ? "x" : " "}] (${task.id}) ${task.description}`);
        });
    }

    markDone(id: number): void {
        const task = this.tasks.find((t) => t.id === id);
        if (!task) {
            console.log(`Task with id  ${id} not found.`)
            return;
        }
        task.done = true;
        console.log(`Marked task ${id} as done.`);
    }

    deleteTask(id: number): void {
        const index = this.tasks.findIndex((t) => t.id === id);
        if (index === -1) {
            console.log(`Task with id ${id} not found.`);
            return;
        }
        this.tasks.splice(index, 1);
        console.log(`Deleted task ${id}.`);

    }
}

const todo = new TodoList();

todo.addTask("Buy groceries");
todo.addTask("Complete TypeScript project");
todo.listTasks();

todo.markDone(1);
todo.listTasks();

todo.deleteTask(2);
todo.listTasks();
