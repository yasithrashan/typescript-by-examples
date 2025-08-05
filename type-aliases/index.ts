type Coordinates = [number, number];

interface Coordinates2 {
    name: string;
    age: number;
}

function comopareCoords(
    p1: Coordinates,
    p2: Coordinates
): Coordinates {
    return [p1[0], p2[1]]
}

const coords: [number, number][] = [];