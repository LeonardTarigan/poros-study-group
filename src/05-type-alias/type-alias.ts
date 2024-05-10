type ID = number | string;
type EmploymentType = "contract" | "fulltime" | "intern";

type Employee = {
  id: ID;
  name: string;
  employmentType: EmploymentType;
  age?: number; // optional
};

const e1: Employee = {
  id: "uuxd2739",
  name: "Hadi",
  employmentType: "fulltime",
  // salary: 10_000_000, // ! error
};

console.table(e1);
