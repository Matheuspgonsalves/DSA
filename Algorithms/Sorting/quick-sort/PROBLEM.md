# Quick Sort

**Topics:** Sorting, Recursion, Divide and Conquer

## Description

Given an array of numbers, sort it in ascending order using **Quick Sort**.

Quick Sort is a divide-and-conquer algorithm: it picks a **pivot** element and partitions the array so every element smaller than the pivot ends up to its left, and every element greater ends up to its right (the pivot itself lands in its final sorted position). It then recursively applies the same process to the two partitions.

```ts
function quickSort(arr: number[]): number[]
```

## Examples

### Example 1

```text
Input: arr = [5, 3, 8, 1, 4]
Output: [1, 3, 4, 5, 8]
```

### Example 2

```text
Input: arr = []
Output: []
```

## Running locally

Install the dependencies once:

```bash
npm install
```

Run the tests:

```bash
npm test
```

Keep the tests running while you work:

```bash
npm run test:watch
```

## Your challenge

Complete `quickSort` in `src/quickSort.ts`. The suite in `tests/quickSort.test.ts` checks that the result is sorted and that it's a valid permutation of the input. The starter implementation deliberately returns the array unchanged, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Base case: an array of length 0 or 1 is already sorted, return it as-is. Otherwise, choose a pivot (the last element is a common, simple choice), then partition the rest of the array into two groups — elements smaller than the pivot and elements greater than or equal to it. Recursively sort each group, then combine: sorted-smaller + pivot + sorted-greater-or-equal.

</details>

## Expected complexity

- Time (average case): `O(n log n)`
- Time (worst case, e.g. already-sorted input with a naive pivot choice): `O(n²)`
- Auxiliary space: `O(log n)` (recursion stack, if partitioning in place) — a simpler non-in-place version using extra arrays is `O(n)`
- Stable: no (the standard partitioning scheme can reorder equal elements)
