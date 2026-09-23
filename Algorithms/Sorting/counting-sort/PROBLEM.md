# Counting Sort

**Topics:** Sorting, Non-comparison-based

## Description

Given an array of **non-negative integers**, sort it in ascending order using **Counting Sort**.

Unlike Bubble/Insertion/Selection/Merge/Quick Sort, Counting Sort never compares two elements against each other. Instead, it counts how many times each distinct value appears, then uses those counts to figure out directly where each value belongs in the final sorted array. This makes it linear time — but only works well when the range of possible values is small relative to the number of elements, and it assumes non-negative integers (or a known offset to shift negatives into that range).

```ts
function countingSort(arr: number[]): number[]
```

## Examples

### Example 1

```text
Input: arr = [4, 2, 2, 8, 3, 3, 1]
Output: [1, 2, 2, 3, 3, 4, 8]
```

### Example 2

```text
Input: arr = []
Output: []
```

## Constraints

- All elements of `arr` are non-negative integers.

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

Complete `countingSort` in `src/countingSort.ts`. The suite in `tests/countingSort.test.ts` checks that the result is sorted and that it's a valid permutation of the input. The starter implementation deliberately returns the array unchanged, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Find the maximum value in `arr` (call it `max`). Create a `count` array of size `max + 1`, all zeros. Walk through `arr` once, and for each value `v`, increment `count[v]`. Now `count[v]` tells you how many times `v` appeared. Finally, walk through `count` from index `0` to `max`, and for each index `v` with `count[v] > 0`, append `v` to the result `count[v]` times.

</details>

## Expected complexity

- Time: `O(n + k)`, where `n` is the array length and `k` is the range of input values (`max` value + 1)
- Auxiliary space: `O(n + k)`
- Stable: yes (when implemented with a cumulative-count / prefix-sum placement pass)
