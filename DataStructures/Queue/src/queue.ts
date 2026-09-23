/**
 * A generic Queue (FIFO), implemented on a manually managed circular buffer —
 * same style as DynamicArray: a plain backing array plus hand-rolled index
 * bookkeeping, no native push/shift/unshift.
 *
 * A naive array-based queue that always dequeues from index 0 (shifting
 * everything left, like DynamicArray.removeAt(0) would) is O(n) per dequeue.
 * Using a `head` index that wraps around the array (mod its length) keeps
 * both enqueue and dequeue O(1), at the cost of the extra bookkeeping below.
 */
export class Queue<T> {
  private array: (T | undefined)[];
  private head: number;
  private len: number;

  constructor(initialCapacity: number = 10) {
    this.array = new Array<T | undefined>(initialCapacity);
    this.head = 0;
    this.len = 0;
  }

  /** Adds `element` to the back of the queue, growing the underlying array if needed. */
  enqueue(element: T): void {
    this.growIfFull();
    const tail = (this.head + this.len) % this.array.length;
    this.array[tail] = element;
    this.len++;
  }

  /** Removes and returns the front element, or `undefined` if the queue is empty. */
  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    const removed = this.array[this.head] as T;
    this.array[this.head] = undefined;
    this.head = (this.head + 1) % this.array.length;
    this.len--;
    return removed;
  }

  /** Returns the front element without removing it, or `undefined` if the queue is empty. */
  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.array[this.head] as T;
  }

  isEmpty(): boolean {
    return this.len === 0;
  }

  length(): number {
    return this.len;
  }

  private growIfFull(): void {
    if (this.len === this.array.length) {
      const newArray = new Array<T | undefined>(this.array.length * 2 || 1);
      for (let i = 0; i < this.len; i++) {
        newArray[i] = this.array[(this.head + i) % this.array.length];
      }
      this.array = newArray;
      this.head = 0;
    }
  }

  toString(): string {
    const items: T[] = [];
    for (let i = 0; i < this.len; i++) {
      items.push(this.array[(this.head + i) % this.array.length] as T);
    }
    return `[${items.join(", ")}]`;
  }
}
