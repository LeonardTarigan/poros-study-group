"use strict";
let appUser = {
    id: "uusdo2d",
    name: "Julie",
    balance: 500000,
    addBalance(amount) {
        this.balance += amount;
    },
};
appUser.name = "Juliete";
// appUser.id = 'ksadas91' // ! error
console.table(appUser);
appUser.addBalance(500000);
console.table(appUser);
let memberUser = {
    id: "maskd02d",
    name: "Jordy",
    balance: 1000000,
    memberPoint: 10,
    addBalance(amount) {
        this.balance += amount;
        this.memberPoint++;
    },
};
console.table(appUser);
memberUser.addBalance(500000);
console.table(appUser);
console.table(memberUser);
