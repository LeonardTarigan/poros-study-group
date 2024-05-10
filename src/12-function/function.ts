function sayNameFn(name: string) {
  return `Your name is ${name}`;
}

console.log(sayNameFn("Hadi"));

callUserFn();
callUserFn("Hadi");

function callUserFn(name: string = "Guest") {
  console.log(`Hello, is this ${name}?`);
}
