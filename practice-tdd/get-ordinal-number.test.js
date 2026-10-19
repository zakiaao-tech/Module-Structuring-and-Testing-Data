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
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

//Test that numbers ending in 11 use "th".
test("should return 'th' for the numbers ending in 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});

//Test that numbers ending in 2, excluding numbers ending in 12.
test("should append 'nd' for the numbers ending in 2, except those ending in 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(132)).toEqual("132nd");
});

//Test that numbers ending in 3, excluding numbers ending in 13.
test("should append 'rd' for the numbers ending in 3, except those ending in 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(33)).toEqual("33rd");
  expect(getOrdinalNumber(133)).toEqual("133rd");
});

//Test that numbers ending in 13 use "th".
test("should return 'th' for the numbers ending in 13", () => {
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(113)).toEqual("113th");
});

//Test that numbers not ending in 1, 2, or 3 use "th".
test("should append 'th' for other numbers", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(7)).toEqual("7th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(20)).toEqual("20th");
});

//Test that larger numbers ending in 12 use "th".
test("should return 'th' for the numbers ending in 12", () => {
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(112)).toEqual("112th");
});

//Test that larger numbers ending in 11 use "th".
test("should return 'th' for the numbers ending in 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(111)).toEqual("111th");
});
