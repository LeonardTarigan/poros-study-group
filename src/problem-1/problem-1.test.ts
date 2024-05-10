import isPalindrome from "./problem-1";

describe("isPalindrome", () => {
  test("returns true for palindromic string", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("madam")).toBe(true);
  });

  test("returns false for non-palindromic string", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("code")).toBe(false);
  });
});
