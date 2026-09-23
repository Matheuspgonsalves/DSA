/**
 * A generic dynamic array — grows automatically as elements are added.
 */
export class DynamicArray<T> {
  private array: (T | undefined)[];
  private len: number;

  constructor(initialCapacity: number = 10) {
    this.array = new Array<T | undefined>(initialCapacity);
    this.len = 0;
  }

  /** Appends `element` to the end, growing the underlying array if needed. */
  add(element: T): void {
    this.growIfFull();
    this.array[this.len] = element;
    this.len++;
  }

  /**
   * Inserts `element` at `position`, shifting everything from `position` onward
   * one slot to the right. `position` may range from `0` to `length()` (inclusive),
   * where `length()` behaves the same as `add(element)`.
   */
  addAt(element: T, position: number): void {
    if (position < 0 || position > this.len) {
      throw new RangeError("Invalid position");
    }

    this.growIfFull();

    for (let i = this.len; i > position; i--) {
      this.array[i] = this.array[i - 1];
    }

    this.array[position] = element;
    this.len++;
  }

  /** Removes and returns the element at `position`, shifting later elements left. */
  removeAt(position: number): T {
    if (position < 0 || position >= this.len) {
      throw new RangeError("Invalid position");
    }

    const removed = this.array[position] as T;

    for (let i = position; i < this.len - 1; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.array[this.len - 1] = undefined;
    this.len--;
    return removed;
  }

  /** Finds `element`, removes its first occurrence, and returns it. Throws if not found. */
  remove(element: T): T {
    const foundIndex = this.search(element);

    if (foundIndex === -1) {
      throw new RangeError("Element not found");
    }

    return this.removeAt(foundIndex);
  }

  /** Returns the index of the first occurrence of `element`, or -1 if not found. */
  search(element: T): number {
    for (let i = 0; i < this.len; i++) {
      if (this.array[i] === element) return i;
    }
    return -1;
  }

  showAt(position: number): T {
    if (position < 0 || position >= this.len) {
      throw new RangeError("Invalid position");
    }
    return this.array[position] as T;
  }

  length(): number {
    return this.len;
  }

  private growIfFull(): void {
    if (this.len === this.array.length) {
      const newArray = new Array<T | undefined>(this.array.length * 2 || 1);
      for (let i = 0; i < this.array.length; i++) {
        newArray[i] = this.array[i];
      }
      this.array = newArray;
    }
  }

  toString(): string {
    const items: T[] = [];
    for (let i = 0; i < this.len; i++) {
      items.push(this.array[i] as T);
    }
    return `[${items.join(", ")}]`;
  }
}
