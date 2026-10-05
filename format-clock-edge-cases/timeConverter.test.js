import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can convert morning time from 08:00 to 08:00 am", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("correctly convert time after 12:00 ", function () {
  assert.equal(formatAs12HourClock("14:00"), "02:00 pm");
});

test("correctly convert time after 12:00 ", function () {
  assert.equal(formatAs12HourClock("21:00"), "09:00 pm");
});

test("correctly convert time after 12:00 ", function () {
  assert.equal(formatAs12HourClock("16:00"), "04:00 pm");
});

test("correctly convert time after 12:00 ", function () {
  assert.equal(formatAs12HourClock("19:00"), "07:00 pm");
});

test("converts 23:59 to 11:59 ", function () {
  assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
});

test("converts 12:01 to 12:01 ", function () {
  assert.equal(formatAs12HourClock("12:01"), "12:01 pm");
});
