"use strict";
// Literals
let direction;
direction = "north";
let responseCode = 200 | 404 | 400;
responseCode = 200;
// Enums - numeric enums
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var size;
size = Size.Small;
size = 2;
if (size === Size.Medium) {
    console.log("Size is Medium");
}
// Enums - string enums
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
var color;
color = Color.Red;
console.log(color);
