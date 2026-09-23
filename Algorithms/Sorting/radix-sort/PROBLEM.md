# Radix Sort

**Topics:** Sorting, Non-comparison-based

## Description

Given an array of **non-negative integers**, sort it in ascending order using **Radix Sort** (LSD variant — Least Significant Digit first).

Radix Sort is another non-comparison sort. Instead of comparing whole numbers, it sorts the numbers digit by digit, starting from the least significant digit (the ones place) and working up to the most significant. Each digit-pass is itself a stable sort by that single digit (Counting Sort is the classic choice, since digits only range from 0-9).

```ts
function radixSort(arr: number[]): number[]
```

## Examples

### Example 1

```text
Input: arr = [170, 45, 75, 90, 802, 24, 2, 66]
Output: [2, 24, 45, 66, 75, 90, 170, 802]
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

Complete `radixSort` in `src/radixSort.ts`. The suite in `tests/radixSort.test.ts` checks that the result is sorted and that it's a valid permutation of the input. The starter implementation deliberately returns the array unchanged, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Find the maximum value in `arr` to know how many digits you need to process. Then, for each digit position (ones, tens, hundreds, ...), do a **stable** counting-sort-style pass on `arr` using only that digit (`Math.floor(num / place) % 10`) to decide each element's bucket. After processing every digit position up through the max value's digit count, the array is fully sorted. The key requirement is that each digit-pass must be stable — otherwise ordering decided by a less-significant digit gets undone by a later pass.

</details>

## Expected complexity

- Time: `O(d · (n + k))`, where `d` is the number of digits in the largest number, `n` is the array length, and `k` is the base (10, for decimal digits)
- Auxiliary space: `O(n + k)`
- Stable: yes (as long as each digit-pass is implemented as a stable sort)
