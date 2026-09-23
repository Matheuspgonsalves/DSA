import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { bubbleSort } from "../src/bubbleSort.js";

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
  { input: [5, 3, 8, 1, 4], reason: "a typical unsorted array" },
  { input: [], reason: "an empty array" },
  { input: [1], reason: "a single-element array" },
  { input: [2, 1], reason: "a two-element array out of order" },
  { input: [1, 2, 3, 4, 5], reason: "an already-sorted array" },
  { input: [5, 4, 3, 2, 1], reason: "a reverse-sorted array (worst case)" },
  { input: [3, 3, 1, 2, 3], reason: "an array with duplicate values" },
  { input: [-4, 10, -1, 0, 7], reason: "an array with negative numbers" }
];

describe("bubbleSort", () => {
  for (const { input, reason } of cases) {
    it(`sorts correctly: ${reason}`, () => {
      const original = [...input];
      const result = bubbleSort([...input]);
      assert.ok(isSorted(result), `result ${JSON.stringify(result)} is not sorted`);
      assert.ok(
        sameMultiset(result, original),
        `result ${JSON.stringify(result)} is not a permutation of the input ${JSON.stringify(original)}`
      );
    });
  }
});
