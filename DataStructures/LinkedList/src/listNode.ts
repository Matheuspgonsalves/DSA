/** A single node of a singly linked list. */
export class ListNode<T> {
  element: T;
  next: ListNode<T> | null;

  constructor(element: T, next: ListNode<T> | null = null) {
    this.element = element;
    this.next = next;
  }
}
