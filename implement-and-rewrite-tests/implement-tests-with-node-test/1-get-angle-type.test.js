import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("returns Acute angle for angles between 0 and 90", () => {
  assert.strictEqual(getAngleType(45), "Acute angle");
});

test("returns Right angle for 90", () => {
  assert.strictEqual(getAngleType(90), "Right angle");
});

test("returns Obtuse angle for angles between 90 and 180", () => {
  assert.strictEqual(getAngleType(120), "Obtuse angle");
});

test("returns Straight angle for 180", () => {
  assert.strictEqual(getAngleType(180), "Straight angle");
});

test("returns Reflex angle for angles between 180 and 360", () => {
  assert.strictEqual(getAngleType(270), "Reflex angle");
});

test("returns Invalid angle for angles outside the valid range", () => {
  assert.strictEqual(getAngleType(0), "Invalid angle");
  assert.strictEqual(getAngleType(360), "Invalid angle");
});
