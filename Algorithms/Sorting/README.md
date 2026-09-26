# Sorting

TypeScript practice environments for implementing the classic sorting algorithms from scratch — each folder is independent, with its own `PROBLEM.md`, `src/`, `tests/`, and config.

## Running an exercise

```bash
cd <algorithm-folder>
npm install
npm test
```

## Algorithms

| Algorithm | Folder | Category | Status |
|---|---|---|---|
| Bubble Sort | [`bubble-sort`](./bubble-sort) | Comparison-based, O(n²) | ✅ Implemented |
| Insertion Sort | [`insertion-sort`](./insertion-sort) | Comparison-based, O(n²) | ✅ Implemented |
| Selection Sort | [`selection-sort`](./selection-sort) | Comparison-based, O(n²) | ✅ Implemented |
| Merge Sort | [`merge-sort`](./merge-sort) | Comparison-based, Divide & Conquer, O(n log n) | ⬜ Pending |
| Quick Sort | [`quick-sort`](./quick-sort) | Comparison-based, Divide & Conquer, avg O(n log n) | ⬜ Pending |
| Heap Sort | [`heap-sort`](./heap-sort) | Comparison-based, Heap, O(n log n) | ⬜ Pending |
| Counting Sort | [`counting-sort`](./counting-sort) | Non-comparison-based, O(n + k) | ⬜ Pending |
| Radix Sort | [`radix-sort`](./radix-sort) | Non-comparison-based, O(d·(n + k)) | ⬜ Pending |

Flip the ⬜ to ✅ here as you implement and pass the tests for each folder.
