interface User {
  readonly id: string; // cannot be reassigned
  name: string;
  balance: number;
  addBalance(amount: number): void; // function
}

let appUser: User = {
  id: "uusdo2d",
  name: "Julie",
  balance: 500_000,
  addBalance(amount) {
    this.balance += amount;
  },
};

appUser.name = "Juliete";
// appUser.id = 'ksadas91' // ! error

console.table(appUser);
appUser.addBalance(500_000);
console.table(appUser);

interface Member extends User {
  memberPoint: number;
}

let memberUser: Member = {
  id: "maskd02d",
  name: "Jordy",
  balance: 1_000_000,
  memberPoint: 10,
  addBalance(amount) {
    this.balance += amount;
    this.memberPoint++;
  },
};

console.table(appUser);
memberUser.addBalance(500_000);
console.table(appUser);

console.table(memberUser);
