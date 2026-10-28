import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});

test("Ace should return 11", () => {
  assert.equal(getCardValue("A♠"), 11);
});

test("Face cards should return 10", () => {
  assert.equal(getCardValue("J♠"), 10);
  assert.equal(getCardValue("Q♠"), 10);
  assert.equal(getCardValue("K♠"), 10);
});

test("Number cards should return their numeric value", () => {
  assert.equal(getCardValue("2♠"), 2);
  assert.equal(getCardValue("10♠"), 10);
});

test("Should throw an error for a missing suit", () => {
  assert.throws(() => getCardValue("A"), Error);
});

test("Should throw an error for an invalid rank", () => {
  assert.throws(() => getCardValue("X♠"), Error);
});

test("Should throw an error for an empty string", () => {
  assert.throws(() => getCardValue(""), Error);
});
