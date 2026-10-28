import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

test("should return true for a proper fraction", () => {
  expect(isProperFraction(1, 2)).toBe(true);
  expect(isProperFraction(3, 5)).toBe(true);
});

test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(2, 2)).toBe(false);
});

test("should return false when numerator is greater than denominator", () => {
  expect(isProperFraction(3, 2)).toBe(false);
});

test("should return true when numerator is zero", () => {
  expect(isProperFraction(0, 2)).toBe(true);
});

test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toBe(false);
});
