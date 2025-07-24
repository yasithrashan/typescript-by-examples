function sum(...numbers: number[]){
}

sum(1, 2, 3);
sum();

// overload function
function getItemLength(names :string): number;
function getItemLength(names: string[]): number;
function getItemLength(nameOrNames : unknown): unknown {
    if(typeof nameOrNames === "string"){
        return nameOrNames.length
    }else if(Array.isArray(nameOrNames)){
        return "Hello World"
    }
    return 0;
}

