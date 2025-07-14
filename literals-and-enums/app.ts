// Literals
let direction: "north" | "south" | "east" | "west";
direction = "north";


let responseCode = 200 | 404 | 400;
responseCode = 200;

// Enums - numeric enums
enum Size {
  Small =1,
  Medium,
  Large
}

var size: Size;
size = Size.Small;
size = 2;

if(size === Size.Medium) {
  console.log("Size is Medium");
}

// Enums - string enums
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
var color: Color;
color = Color.Red;

console.log(color);