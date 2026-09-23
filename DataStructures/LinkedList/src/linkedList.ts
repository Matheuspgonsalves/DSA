import { ListNode } from "./listNode.js";

/**
 * A generic singly linked list.
 *
 * Two edge cases worth noting in the implementation below:
 *
 * 1. `addStart` on an empty list needs an explicit empty/non-empty branch —
 *    otherwise the new node can end up self-referencing (`node.next = node`)
 *    if `this.start` is reassigned before the new node's `next` is set from it.
 * 2. `addByPosition`'s middle-insert branch searches for the node at
 *    `position - 1` and inserts right after it (matching what `removeByPosition`
 *    does), rather than searching for the node *at* `position`, which would
 *    place the new element one slot later than intended.
 */
export class LinkedList<T> {
  private start: ListNode<T> | null = null;
  private end: ListNode<T> | null = null;
  private len: number = 0;

  private static readonly NOT_FOUND = -1;

  private isValidPosition(position: number): boolean {
    return position >= 0 && position <= this.len;
  }

  add(element: T): void {
    const node = new ListNode(element);

    if (this.len === 0) {
      this.start = node;
    } else {
      this.end!.next = node;
    }

    this.end = node;
    this.len++;
  }

  addStart(element: T): void {
    const newElement = new ListNode(element, this.start);

    if (this.len === 0) {
      this.end = newElement;
    }

    this.start = newElement;
    this.len++;
  }

  addByPosition(position: number, element: T): void {
    if (!this.isValidPosition(position)) {
      throw new RangeError("Position does not exist");
    }

    if (position === 0) {
      this.addStart(element);
    } else if (position === this.len) {
      this.add(element);
    } else {
      const prevNode = this.searchNodeByPosition(position - 1);
      const nextNode = prevNode.next;
      const newNode = new ListNode(element, nextNode);
      prevNode.next = newNode;
      this.len++;
    }
  }

  removeFirst(): T {
    if (this.len < 1) {
      throw new Error("List is empty");
    }

    const removed = this.start!.element;
    this.start = this.start!.next;
    this.len--;

    if (this.len === 0) this.end = null;

    return removed;
  }

  removeFinal(): T {
    if (this.len === 0) {
      throw new Error("List is empty");
    }
    if (this.len === 1) {
      return this.removeFirst();
    }

    const prevNode = this.searchNodeByPosition(this.len - 2);
    const removed = prevNode.next!.element;
    prevNode.next = null;
    this.end = prevNode;
    this.len--;

    return removed;
  }

  removeByPosition(position: number): T {
    if (this.len === 0) throw new Error("List is empty");
    if (!this.isValidPosition(position) || position === this.len) {
      throw new RangeError("Position does not exist");
    }

    if (position === 0) {
      return this.removeFirst();
    } else if (position === this.len - 1) {
      return this.removeFinal();
    } else {
      const prevNode = this.searchNodeByPosition(position - 1);
      const current = prevNode.next!;
      prevNode.next = current.next;
      current.next = null;
      this.len--;
      return current.element;
    }
  }

  getLen(): number {
    return this.len;
  }

  clean(): void {
    this.start = null;
    this.end = null;
    this.len = 0;
  }

  private searchNodeByPosition(position: number): ListNode<T> {
    if (!this.isValidPosition(position) || position === this.len) {
      throw new RangeError("Position does not exist");
    }

    let current = this.start!;
    for (let i = 0; i < position; i++) {
      current = current.next!;
    }
    return current;
  }

  searchByPosition(position: number): T {
    return this.searchNodeByPosition(position).element;
  }

  search(element: T): number {
    let current = this.start;
    let pos = 0;

    while (current !== null) {
      if (current.element === element) return pos;
      pos++;
      current = current.next;
    }

    return LinkedList.NOT_FOUND;
  }

  toString(): string {
    if (this.len === 0) return "[]";

    const items: T[] = [];
    let current = this.start;
    while (current !== null) {
      items.push(current.element);
      current = current.next;
    }
    return `[${items.join(", ")}]`;
  }
}
