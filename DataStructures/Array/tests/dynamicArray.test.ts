import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { DynamicArray } from "../src/dynamicArray.js";

describe("DynamicArray — add / length / showAt", () => {
  it("adds elements and reports the correct length", () => {
    const arr = new DynamicArray<number>();
    arr.add(1);
    arr.add(2);
    arr.add(3);
    assert.equal(arr.length(), 3);
    assert.equal(arr.showAt(0), 1);
    assert.equal(arr.showAt(2), 3);
  });

  it("grows past its initial capacity", () => {
    const arr = new DynamicArray<number>(2);
    for (let i = 0; i < 10; i++) {
      arr.add(i);
    }
    assert.equal(arr.length(), 10);
    for (let i = 0; i < 10; i++) {
      assert.equal(arr.showAt(i), i);
    }
  });

  it("throws when reading an out-of-range position", () => {
    const arr = new DynamicArray<number>();
    arr.add(1);
    assert.throws(() => arr.showAt(-1));
    assert.throws(() => arr.showAt(1));
  });
});

describe("DynamicArray — addAt", () => {
  it("inserts in the middle, shifting later elements right", () => {
    const arr = new DynamicArray<number>();
    arr.add(1);
    arr.add(2);
    arr.add(4);
    arr.addAt(3, 2);
    assert.equal(arr.toString(), "[1, 2, 3, 4]");
  });

  it("inserts at the very start", () => {
    const arr = new DynamicArray<number>();
    arr.add(2);
    arr.add(3);
    arr.addAt(1, 0);
    assert.equal(arr.toString(), "[1, 2, 3]");
  });

  it("inserts at the very end (position === length)", () => {
    const arr = new DynamicArray<number>();
    arr.add(1);
    arr.add(2);
    arr.addAt(3, 2);
    assert.equal(arr.toString(), "[1, 2, 3]");
  });

  it("throws for a negative or too-large position", () => {
    const arr = new DynamicArray<number>();
    arr.add(1);
    assert.throws(() => arr.addAt(0, -1));
    assert.throws(() => arr.addAt(0, 2));
  });
});

describe("DynamicArray — removeAt / remove", () => {
  it("removes by position, shifting later elements left", () => {
    const arr = new DynamicArray<number>();
    [1, 2, 3, 4].forEach((n) => arr.add(n));
    const removed = arr.removeAt(1);
    assert.equal(removed, 2);
    assert.equal(arr.toString(), "[1, 3, 4]");
  });

  it("removes by value", () => {
    const arr = new DynamicArray<string>();
    ["a", "b", "c"].forEach((s) => arr.add(s));
    const removed = arr.remove("b");
    assert.equal(removed, "b");
    assert.equal(arr.toString(), "[a, c]");
  });

  it("throws when removing a value that isn't present", () => {
    const arr = new DynamicArray<string>();
    arr.add("a");
    assert.throws(() => arr.remove("z"));
  });
});

describe("DynamicArray — search", () => {
  it("finds the index of an element, or -1 when absent", () => {
    const arr = new DynamicArray<string>();
    ["a", "b", "c"].forEach((s) => arr.add(s));
    assert.equal(arr.search("b"), 1);
    assert.equal(arr.search("z"), -1);
  });
});
