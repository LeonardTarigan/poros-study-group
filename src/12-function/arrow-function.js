"use strict";
const sayNameArFn = (name) => `Your name is ${name}`;
console.log(sayNameArFn("Hadi"));
// callUserArFn(); // ! error
const callUserArFn = (name = "Guest") => {
    console.log(`Hello, is this ${name}?`);
};
callUserArFn("Hadi");
