import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { countingSort } from "../src/countingSort.js";

function isSorted(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i]! > arr[i + 1]!) return false;
  }
  return true;
}

function sameMultiset(a: number[], b: number[]): boolean {
  const sortedA = [...a].sort((x, y) => x - y);
  const sortedB = [...b].sort((x, y) => x - y);
  return JSON.stringify(sortedA) === JSON.stringify(sortedB);
}

const cases: { input: number[]; reason: string }[] = [
  { input: [4, 2, 2, 8, 3, 3, 1], reason: "a typical unsorted array with repeats" },
  { input: [], reason: "an empty array" },
  { input: [1], reason: "a single-element array" },
  { input: [0, 0, 0], reason: "an array of all zeros" },
  { input: [1, 2, 3, 4, 5], reason: "an already-sorted array" },
  { input: [5, 4, 3, 2, 1], reason: "a reverse-sorted array" },
  { input: [0, 9, 0, 9, 5], reason: "a small array spanning a wide range of values" }
];

describe("countingSort", () => {
  for (const { input, reason } of cases) {
    it(`sorts correctly: ${reason}`, () => {
      const original = [...input];
      const result = countingSort([...input]);
      assert.ok(isSorted(result), `result ${JSON.stringify(result)} is not sorted`);
      assert.ok(
        sameMultiset(result, original),
        `result ${JSON.stringify(result)} is not a permutation of the input ${JSON.stringify(original)}`
      );
    });
  }
});
