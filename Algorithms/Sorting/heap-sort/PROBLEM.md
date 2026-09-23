# Heap Sort

**Topics:** Sorting, Heap

## Description

Given an array of numbers, sort it in ascending order using **Heap Sort**.

Heap Sort works in two phases. First, it rearranges the array in-place into a **max-heap** (a binary tree, stored as an array, where every parent is greater than or equal to its children — so the largest element ends up at index `0`). Second, it repeatedly swaps the root (the current maximum) with the last element of the still-unsorted portion, shrinks the heap by one, and "sifts down" the new root to restore the heap property — placing each maximum in its final sorted position, from the end of the array backwards.

```ts
function heapSort(arr: number[]): number[]
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

Complete `heapSort` in `src/heapSort.ts`. The suite in `tests/heapSort.test.ts` checks that the result is sorted and that it's a valid permutation of the input. The starter implementation deliberately returns the array unchanged, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Represent the heap directly inside `arr` (no separate tree structure needed). For a node at index `i`: its children are at `2i + 1` and `2i + 2`, and its parent is at `Math.floor((i - 1) / 2)`.

Step 1 — build the max-heap: starting from the last **non-leaf** node (`Math.floor(arr.length / 2) - 1`) and walking backwards to index `0`, "sift down" each node — compare it with its children and swap with the larger child if the node is smaller, repeating until the subtree satisfies the heap property.

Step 2 — sort: for `end` from `arr.length - 1` down to `1`, swap `arr[0]` (the current max) with `arr[end]`, then sift down the new `arr[0]` within the shrunk heap (size `end`, since everything from `end` onward is already in its final sorted position).

</details>

## Expected complexity

- Time (worst/average/best case): `O(n log n)`
- Auxiliary space: `O(1)` (in-place)
- Stable: no (swaps during heapify/sift-down can reorder equal elements)
