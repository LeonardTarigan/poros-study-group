"use strict";
const formattedGreeting = (name, formatFn) => {
    console.log(`Hello ${formatFn(name)}`);
};
const formatName = (name) => name.toUpperCase();
formattedGreeting("Hadi", formatName);
