# Selection Sort

**Topics:** Sorting

## Description

Given an array of numbers, sort it in ascending order using **Selection Sort**.

Selection Sort divides the array into a sorted part (at the beginning) and an unsorted part (the rest). On each pass, it finds the **smallest** element in the unsorted part and swaps it into the next position of the sorted part — unlike Bubble Sort, it performs at most one swap per pass, only after it already knows which element is the smallest.

```ts
function selectionSort(arr: number[]): number[]
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

Complete `selectionSort` in `src/selectionSort.ts`. The suite in `tests/selectionSort.test.ts` checks that the result is sorted and that it's a valid permutation of the input. The starter implementation deliberately returns the array unchanged, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

For each position `i` from the start of the array, scan the remainder of the array (`i` to the end) to find the index of the smallest element. Once found, swap it into position `i`. Move on to `i + 1` and repeat — the sorted portion at the front grows by one element each pass.

</details>

## Expected complexity

- Time (worst/average/best case): `O(n²)` — it always scans the remaining unsorted portion fully, regardless of input order
- Auxiliary space: `O(1)` (in-place)
- Stable: no (the standard swap-based version can reorder equal elements)
