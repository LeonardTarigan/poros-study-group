import orderDrink from "./problem-3";

describe("orderDrink", () => {
  test("drink order with spesific amount", () => {
    expect(orderDrink("Matcha Latte", "SMALL", 2)).toBe(
      "New order: 2x SMALL Matcha Latte"
    );
  });

  test("drink order without amount", () => {
    expect(orderDrink("Black Tea", "LARGE")).toBe(
      "New order: 1x LARGE Black Tea"
    );
  });

  test("drink order with negative amount", () => {
    expect(orderDrink("Fruit Punch", "MEDIUM", -1)).toBe(
      "The amount must be at least 1"
    );
  });

  test("drink order not in database", () => {
    expect(orderDrink("Unknown", "MEDIUM", 4)).toBe("Drink not found");
  });
});
