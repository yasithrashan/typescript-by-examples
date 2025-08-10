const METER_TO_FEET = 3.28084;
const FEET_TO_METER = 1 / METER_TO_FEET;
const CELSIUS_TO_FAHRENHEIT = (c: number) => (c * 9 / 5) + 32;
const FAHRENHEIT_TO_CELSIUS = (f: number) => (f - 32) * 5 / 9;

function convert(value: number, from: 'meters', to: 'feet'): number;
function convert(value: number, from: "feet", to: "meters"): number;
function convert(value: number, from: "celsius", to: "fahrenheit"): number;
function convert(value: number, from: "fahrenheit", to: "celsius"): number;

function convert(value: number, from: string, to: string): number {
    if (from === 'meters' && to === 'feet') {
        return value * METER_TO_FEET;
    }
    else if (from === 'feet' && to === 'meters') {
        return value * FEET_TO_METER;
    }
    else if (from === 'celsius' && to === 'fahrenheit') {
        return CELSIUS_TO_FAHRENHEIT(value);
    }
    else if (from === "fahrenheit" && to === "celsius") {
        return FAHRENHEIT_TO_CELSIUS(value)
    }
    else {
        throw new Error(`Unsupported conversion: ${from} to ${to}`);
    }
}

console.log(`10 meters = ${convert(10, "meters", "feet").toFixed(2)} feet`);
console.log(`32 feet = ${convert(32, "feet", "meters").toFixed(2)} meters`);
console.log(`0°C = ${convert(0, "celsius", "fahrenheit").toFixed(2)}°F`);
console.log(`100°F = ${convert(100, "fahrenheit", "celsius").toFixed(2)}°C`);
