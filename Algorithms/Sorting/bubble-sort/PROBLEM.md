# Bubble Sort

**Topics:** Sorting

## Description

Given an array of numbers, sort it in ascending order using **Bubble Sort**.

Bubble Sort repeatedly walks through the array, comparing **adjacent** pairs of elements and swapping them whenever they're in the wrong order. On each full pass, the largest remaining element "bubbles up" to its final position at the end — hence the name.

```ts
function bubbleSort(arr: number[]): number[]
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

Complete `bubbleSort` in `src/bubbleSort.ts`. The suite in `tests/bubbleSort.test.ts` checks that the result is sorted and that it's a valid permutation of the input. The starter implementation deliberately returns the array unchanged, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Walk through the array repeatedly, comparing each pair of adjacent elements (`arr[j]`, `arr[j + 1]`). Whenever a pair is out of order, swap them. After each full pass, the largest remaining unsorted element has "bubbled" to its correct spot at the end, so each subsequent pass can examine one fewer position.

</details>

## Expected complexity

- Time (worst/average case): `O(n²)`
- Time (best case, unsorted-loop version without early-exit optimization): `O(n²)`
- Auxiliary space: `O(1)` (in-place)
- Stable: yes
