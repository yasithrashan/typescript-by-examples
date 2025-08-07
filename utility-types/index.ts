interface Todo {
    title: string;
    description: string;
}

interface PageInfo {
    title: string;
}

const updateTodo = (todo: Partial<Todo>) => {
    todo.title = todo.title || "Default Title";
    todo.description = todo.description || "Default Description";
    return todo;
}

const myTodo: Readonly<Todo> = {
    title: "Learn TypeScript",
    description: "Understand utility types in TypeScript"
};

const pages: Record<string, PageInfo> = {
    home: { title: "Home Page" },
    about: { title: "About Page" },
    contact: { title: "Contact Page" }
};

type TodoPreview = Pick<Todo, "title">;

const todo: TodoPreview = {
    title: "Learn TypeScript"
};

type TodoPrev = Omit<Todo, "description">;

const todoPrev: TodoPrev = {
    title: "Learn TypeScript",
};
