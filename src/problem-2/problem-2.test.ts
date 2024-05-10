import calculateAverage from "./problem-2";

describe("calculateAverage", () => {
  test("calculates average of numbers", () => {
    expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
  });

  test("returns 0 for empty array", () => {
    expect(calculateAverage([])).toBe(0);
  });
});
