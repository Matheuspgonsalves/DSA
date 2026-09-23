/**
 * A generic Stack (LIFO), implemented on top of a plain array — it already
 * grows on its own, so there's no need for manual grow-the-backing-array logic.
 */
export class Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  /** Removes and returns the top element, or `undefined` if the stack is empty. */
  pop(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
  }

  /** Returns the top element without removing it, or `undefined` if the stack is empty. */
  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  length(): number {
    return this.items.length;
  }

  toString(): string {
    return `[${this.items.join(", ")}]`;
  }
}
