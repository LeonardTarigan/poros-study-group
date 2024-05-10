"use strict";
var DrinkSize;
(function (DrinkSize) {
    DrinkSize["SMALL"] = "small";
    DrinkSize["MEDIUM"] = "medium";
    DrinkSize["LARGE"] = "large";
})(DrinkSize || (DrinkSize = {}));
const order = {
    id: "bjsnc01ke",
    name: "Matcha Latte",
    price: 15000,
    size: DrinkSize.MEDIUM,
};
console.table(order);
