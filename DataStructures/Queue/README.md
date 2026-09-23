# Data Structures — Queue

A TypeScript implementation of **Queue**, on a manually managed circular buffer (same style as `DynamicArray`: a plain backing array with hand-rolled index bookkeeping, no native `push`/`shift`), which keeps `enqueue`/`dequeue` O(1).

- Implementation: [`src/queue.ts`](./src/queue.ts)
- Tests: [`tests/`](./tests)

```bash
npm install
npm test
```
