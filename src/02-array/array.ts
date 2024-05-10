const names: string[] = ["Adi", "Budi", "Hari"];
const grades: Array<number> = [100, 80, 90];

// read only array
let genders: ReadonlyArray<String> = ["Male", "Female"];

genders[0] = "Blabla"; // ! error
genders.push(); // ! error

// tuple
const studentData: readonly [string, number, boolean] = ["Adi", 40, false];

console.table({ names, grades, genders, studentData });
