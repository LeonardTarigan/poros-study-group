const sayNameArFn = (name: string) => `Your name is ${name}`;

console.log(sayNameArFn("Hadi"));

// callUserArFn(); // ! error

const callUserArFn = (name: string = "Guest") => {
  console.log(`Hello, is this ${name}?`);
};

callUserArFn("Hadi");
