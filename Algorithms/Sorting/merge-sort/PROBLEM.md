# Merge Sort

**Topics:** Sorting, Recursion, Divide and Conquer

## Description

Given an array of numbers, sort it in ascending order using **Merge Sort**.

Merge Sort is a divide-and-conquer algorithm: it recursively splits the array in half until each piece has 0 or 1 elements (trivially sorted), then merges those pieces back together in sorted order, comparing the front of each pair of sub-arrays and always taking the smaller one first.

```ts
function mergeSort(arr: number[]): number[]
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

Complete `mergeSort` in `src/mergeSort.ts`. The suite in `tests/mergeSort.test.ts` checks that the result is sorted and that it's a valid permutation of the input. The starter implementation deliberately returns the array unchanged, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Write it recursively. Base case: an array of length 0 or 1 is already sorted, return it as-is. Otherwise, split the array into two halves, recursively sort each half, then merge the two sorted halves back into one: repeatedly compare the front elements of both halves and append the smaller one to the result, until one half runs out — then append whatever's left of the other.

</details>

## Expected complexity

- Time (worst/average/best case): `O(n log n)`
- Auxiliary space: `O(n)` (the merge step needs extra arrays)
- Stable: yes
