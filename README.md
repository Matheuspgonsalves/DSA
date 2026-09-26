# Data Structures & Algorithms

A hands-on study repository for learning the foundations of computer science by implementing data structures and algorithms from scratch in TypeScript.

The roadmap loosely follows the chronology of PUC Minas' AEDS2 course while remaining language-independent. Every implementation lives in an isolated project with its own source code, tests, and TypeScript configuration.

## Study roadmap

Legend: ✅ studied and implemented · 🚧 in progress · ⬜ not started

### Algorithms

| Topic | What it covers | Status |
|---|---|---|
| [Sorting](./Algorithms/Sorting) | Comparison and non-comparison sorting algorithms | 🚧 In progress (3 / 8) |
| [Search](./Algorithms/Search) | Linear, binary, and advanced search strategies | ⬜ Not started |
| [Recursion](./Algorithms/Recursion) | Base cases, recursive decomposition, and call stacks | ⬜ Not started |
| [Divide and Conquer](./Algorithms/DivideAndConquer) | Breaking problems into smaller independent subproblems | ⬜ Not started |
| [Tree and Graph Traversal](./Algorithms/TreeAndGraphTraversal) | BFS, DFS, and topological traversal | ⬜ Not started |
| [Dynamic Programming](./Algorithms/DynamicProgramming) | Memoization, tabulation, and state transitions | ⬜ Not started |
| [Backtracking](./Algorithms/Backtracking) | Exhaustive search, constraints, and pruning | ⬜ Not started |
| [Greedy Algorithms](./Algorithms/GreedyAlgorithms) | Locally optimal choices and greedy strategies | ⬜ Not started |

#### Algorithm submodules

<details open>
<summary><strong>Sorting — 3 / 8</strong></summary>

- [x] [Bubble Sort](./Algorithms/Sorting/bubble-sort)
- [x] [Insertion Sort](./Algorithms/Sorting/insertion-sort)
- [x] [Selection Sort](./Algorithms/Sorting/selection-sort)
- [ ] [Merge Sort](./Algorithms/Sorting/merge-sort)
- [ ] [Quick Sort](./Algorithms/Sorting/quick-sort)
- [ ] [Heap Sort](./Algorithms/Sorting/heap-sort)
- [ ] [Counting Sort](./Algorithms/Sorting/counting-sort)
- [ ] [Radix Sort](./Algorithms/Sorting/radix-sort)

</details>

<details>
<summary><strong>Search — 0 / 5</strong></summary>

- [ ] Search in a rotated sorted array
- [ ] Search in an infinite or unbounded array
- [ ] Exponential Search
- [ ] Interpolation Search
- [ ] Ternary Search

</details>

<details>
<summary><strong>Recursion — 0 / 6</strong></summary>

- [ ] Factorial
- [ ] Fibonacci
- [ ] Sum of digits
- [ ] Power / exponentiation
- [ ] Reverse a string recursively
- [ ] Tower of Hanoi

</details>

<details>
<summary><strong>Divide and Conquer — 0 / 5</strong></summary>

- [ ] Maximum subarray
- [ ] Closest pair of points
- [ ] Fast exponentiation
- [ ] Majority element
- [ ] Karatsuba multiplication

</details>

<details>
<summary><strong>Tree and Graph Traversal — 0 / 9</strong></summary>

- [ ] Pre-order traversal
- [ ] In-order traversal
- [ ] Post-order traversal
- [ ] Level-order traversal
- [ ] Depth-first search (DFS)
- [ ] Breadth-first search (BFS)
- [ ] Connected components
- [ ] Cycle detection
- [ ] Topological sort

</details>

<details>
<summary><strong>Dynamic Programming — 0 / 5</strong></summary>

- [ ] Fibonacci with memoization
- [ ] Knapsack
- [ ] Longest Common Subsequence
- [ ] Coin Change
- [ ] Longest Increasing Subsequence

</details>

<details>
<summary><strong>Backtracking — 0 / 6</strong></summary>

- [ ] N-Queens
- [ ] Permutations
- [ ] Subsets
- [ ] Sudoku Solver
- [ ] Word Search
- [ ] Combination Sum

</details>

<details>
<summary><strong>Greedy Algorithms — 0 / 5</strong></summary>

- [ ] Activity / interval selection
- [ ] Fractional Knapsack
- [ ] Greedy Coin Change
- [ ] Huffman Coding
- [ ] Dijkstra's shortest path

</details>

### Data structures

| Topic | What it covers | Status |
|---|---|---|
| [Dynamic Array](./DataStructures/Array) | Resizable sequential storage | ✅ Studied and implemented |
| [Stack](./DataStructures/Stack) | LIFO operations | ✅ Studied and implemented |
| [Queue](./DataStructures/Queue) | FIFO operations | ✅ Studied and implemented |
| [Linked List](./DataStructures/LinkedList) | Nodes, links, insertion, and removal | ✅ Studied and implemented |
| [Tree](./DataStructures/Tree) | Hierarchical structures and traversal | ⬜ Not started |
| [Heap](./DataStructures/Heap) | Priority-based complete binary trees | ⬜ Not started |
| [Hash Table](./DataStructures/HashTable) | Hashing, buckets, and collision handling | ⬜ Not started |
| [Graph](./DataStructures/Graph) | Vertices, edges, and graph representations | ⬜ Not started |

## Progress

- **Main topics explored:** 5 / 16
- **Implementations completed:** 7
- **Algorithms completed:** 3 / 8 planned sorting algorithms
- **Data structures completed:** 4 / 8

## Repository structure

```text
DSA/
├── Algorithms/
│   ├── Sorting/
│   ├── Search/
│   ├── Recursion/
│   ├── DivideAndConquer/
│   ├── TreeAndGraphTraversal/
│   ├── DynamicProgramming/
│   ├── Backtracking/
│   └── GreedyAlgorithms/
└── DataStructures/
    ├── Array/
    ├── Stack/
    ├── Queue/
    ├── LinkedList/
    ├── Tree/
    ├── Heap/
    ├── HashTable/
    └── Graph/
```

## Running the tests

Each implementation is an independent TypeScript project:

```bash
cd <topic-or-algorithm-folder>
npm install
npm test
```

Some projects also provide `npm run test:watch` and `npm run typecheck`; check the local README or `package.json` for the available scripts.
