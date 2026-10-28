import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)

describe("Ace cards", () => {
  test("Should return 11 when given and ace card", () => {
    expect(getCardValue("A♠")).toEqual(11);
  });
});

describe("Number cards (2-10)", () => {
  test("Should return the number for a number card", () => {
    expect(getCardValue("2♠")).toEqual(2);
    expect(getCardValue("5♠")).toEqual(5);
    expect(getCardValue("10♠")).toEqual(10);
  });
});

describe("Face cards (J, Q, K)", () => {
  test("Should return 10 for face cards", () => {
    expect(getCardValue("J♠")).toEqual(10);
    expect(getCardValue("Q♠")).toEqual(10);
    expect(getCardValue("K♠")).toEqual(10);
  });
});

describe("Invalid cards", () => {
  test("Should throw an error for an invalid card", () => {
    expect(() => getCardValue("invalid")).toThrow();
  });

  test("Should throw an error when the suit is missing", () => {
    expect(() => getCardValue("A")).toThrow();
  });

  test("Should throw an error for an invalid rank", () => {
    expect(() => getCardValue("X♠")).toThrow();
  });

  test("Should throw an error for an empty string", () => {
    expect(() => getCardValue("")).toThrow();
  });
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
