enum DrinkSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

type DrinkOrder = {
  id: string;
  name: string;
  price: number;
  size: DrinkSize;
};

const order: DrinkOrder = {
  id: "bjsnc01ke",
  name: "Matcha Latte",
  price: 15_000,
  size: DrinkSize.MEDIUM,
};

console.table(order);
