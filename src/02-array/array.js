"use strict";
const names = ["Adi", "Budi", "Hari"];
const grades = [100, 80, 90];
// read only array
let genders = ["Male", "Female"];
genders[0] = "Blabla"; // ! error
genders.push(); // ! error
// tuple
const studentData = ["Adi", 40, false];
console.table({ names, grades, genders, studentData });
