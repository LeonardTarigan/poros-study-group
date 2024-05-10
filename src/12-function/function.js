"use strict";
function sayNameFn(name) {
    return `Your name is ${name}`;
}
console.log(sayNameFn("Hadi"));
callUserFn();
callUserFn("Hadi");
function callUserFn(name = "Guest") {
    console.log(`Hello, is this ${name}?`);
}
