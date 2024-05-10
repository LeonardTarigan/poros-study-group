"use strict";
function sayHello(name) {
    if (name) {
        console.log(`Hello ${name}`);
    }
    else {
        console.log("Hello, who are you?");
    }
}
sayHello("Hadi");
sayHello();
