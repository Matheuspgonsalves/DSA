# Insertion Sort

**Topics:** Sorting

## Description

Given an array of numbers, sort it in ascending order using **Insertion Sort**.

Insertion Sort builds the sorted array one element at a time: it takes each element (starting from the second) and inserts it into its correct position among the already-sorted elements to its left, shifting larger elements one position to the right to make room.

```ts
function insertionSort(arr: number[]): number[]
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

Complete `insertionSort` in `src/insertionSort.ts`. The suite in `tests/insertionSort.test.ts` checks that the result is sorted and that it's a valid permutation of the input. The starter implementation deliberately returns the array unchanged, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

For each element starting from index 1, keep it as `key` and compare it against the already-sorted elements to its left. Shift every element greater than `key` one position to the right, until you find the spot where `key` belongs, then drop it there.

</details>

## Expected complexity

- Time (worst/average case): `O(n²)`
- Time (best case, nearly-sorted input): `O(n)`
- Auxiliary space: `O(1)` (in-place)
- Stable: yes
