"use strict";
const result = 65;
if (result > 80) {
    console.log("Passed!");
}
else if (result > 60) {
    console.log("Need consideration!");
}
else {
    console.log("Failed!");
}
// ternary
const message = result > 60 ? "Congrats!" : "Sorry!";
console.log(message);
