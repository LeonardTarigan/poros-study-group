function sayHi(name?: string | null) {
  if (name) {
    console.log(`Hi ${name}`);
  } else {
    console.log("Hi, who are you?");
  }
}

sayHi("Hadi");
sayHi(null);
sayHi();
