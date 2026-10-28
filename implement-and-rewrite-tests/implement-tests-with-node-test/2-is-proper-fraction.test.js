import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

// Case 1: Proper fraction
test("should return true when numerator is smaller than denominator", () => {
  assert.equal(isProperFraction(1, 2), true);
  assert.equal(isProperFraction(3, 5), true);
});

// Case 2: Numerator equals denominator
test("should return false when numerator equals denominator", () => {
  assert.equal(isProperFraction(2, 2), false);
});

// Case 3: Numerator is greater than denominator
test("should return false when numerator is greater than denominator", () => {
  assert.equal(isProperFraction(3, 2), false);
});

// Case 4: Zero numerator
test("should return true when numerator is zero", () => {
  assert.equal(isProperFraction(0, 2), true);
});

// Case 5: Negative numerator
test("should return true when numerator is negative and denominator is positive", () => {
  assert.equal(isProperFraction(-1, 2), true);
});

// Case 6: Negative denominator
test("should return false when denominator is negative", () => {
  assert.equal(isProperFraction(1, -2), false);
});

// Case 7: Zero denominator
test("should return false when denominator is zero", () => {
  assert.equal(isProperFraction(1, 0), false);
});
