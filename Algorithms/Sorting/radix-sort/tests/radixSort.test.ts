import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { radixSort } from "../src/radixSort.js";

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
  { input: [170, 45, 75, 90, 802, 24, 2, 66], reason: "a typical unsorted array with mixed digit counts" },
  { input: [], reason: "an empty array" },
  { input: [1], reason: "a single-element array" },
  { input: [0, 0, 0], reason: "an array of all zeros" },
  { input: [5, 4, 3, 2, 1], reason: "a reverse-sorted single-digit array" },
  { input: [1000, 1, 100, 10], reason: "numbers with very different digit counts" },
  { input: [9, 9, 9, 8, 8], reason: "an array with duplicate values" }
];

describe("radixSort", () => {
  for (const { input, reason } of cases) {
    it(`sorts correctly: ${reason}`, () => {
      const original = [...input];
      const result = radixSort([...input]);
      assert.ok(isSorted(result), `result ${JSON.stringify(result)} is not sorted`);
      assert.ok(
        sameMultiset(result, original),
        `result ${JSON.stringify(result)} is not a permutation of the input ${JSON.stringify(original)}`
      );
    });
  }
});
