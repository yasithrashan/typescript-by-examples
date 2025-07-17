const arr = [{ name: "Yasith" }, { name: "John" }];
const arr2 = [[{ name: "Yasith" }]];

const el = arr.pop()?.name;
const el2 = arr2.pop()!.pop()!.name;

