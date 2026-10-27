import { test } from "node:test";
import { strict as assert } from "node:assert";
import { getOrdinalNumber } from "./get-ordinal-number.js";
// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  assert.equal(getOrdinalNumber(1), "1st");
  assert.equal(getOrdinalNumber(21), "21st");
  assert.equal(getOrdinalNumber(131), "131st");
});

//Test that numbers ending in 11 use "th".
test("should return 'th' for the numbers ending in 11", () => {
  assert.equal(getOrdinalNumber(11), "11th");
});

//Test that numbers ending in 2, excluding numbers ending in 12.
test("should append 'nd' for the numbers ending in 2, except those ending in 12", () => {
  assert.equal(getOrdinalNumber(2), "2nd");
  assert.equal(getOrdinalNumber(22), "22nd");
  assert.equal(getOrdinalNumber(132), "132nd");
});

//Test that numbers ending in 3, excluding numbers ending in 13.
test("should append 'rd' for the numbers ending in 3, except those ending in 13", () => {
  assert.equal(getOrdinalNumber(3), "3rd");
  assert.equal(getOrdinalNumber(33), "33rd");
  assert.equal(getOrdinalNumber(133), "133rd");
});

//Test that numbers ending in 13 use "th".
test("should return 'th' for the numbers ending in 13", () => {
  assert.equal(getOrdinalNumber(13), "13th");
  assert.equal(getOrdinalNumber(113), "113th");
});

//Test that numbers not ending in 1, 2, or 3 use "th".
test("should append 'th' for other numbers", () => {
  assert.equal(getOrdinalNumber(4), "4th");
  assert.equal(getOrdinalNumber(7), "7th");
  assert.equal(getOrdinalNumber(10), "10th");
  assert.equal(getOrdinalNumber(20), "20th");
});

//Test that larger numbers ending in 12 use "th".
test("should return 'th' for the numbers ending in 12", () => {
  assert.equal(getOrdinalNumber(12), "12th");
  assert.equal(getOrdinalNumber(112), "112th");
});

//Test that larger numbers ending in 11 use "th".
test("should return 'th' for the numbers ending in 11", () => {
  assert.equal(getOrdinalNumber(11), "11th");
  assert.equal(getOrdinalNumber(111), "111th");
});
