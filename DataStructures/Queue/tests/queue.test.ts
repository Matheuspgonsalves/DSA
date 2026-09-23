import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { Queue } from "../src/queue.js";

describe("Queue", () => {
  it("starts empty", () => {
    const queue = new Queue<number>();
    assert.equal(queue.isEmpty(), true);
    assert.equal(queue.length(), 0);
  });

  it("enqueues and dequeues in FIFO order", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    assert.equal(queue.length(), 3);
    assert.equal(queue.dequeue(), 1);
    assert.equal(queue.dequeue(), 2);
    assert.equal(queue.dequeue(), 3);
    assert.equal(queue.isEmpty(), true);
  });

  it("peek returns the front element without removing it", () => {
    const queue = new Queue<string>();
    queue.enqueue("a");
    queue.enqueue("b");
    assert.equal(queue.peek(), "a");
    assert.equal(queue.length(), 2);
  });

  it("dequeue and peek return undefined on an empty queue", () => {
    const queue = new Queue<number>();
    assert.equal(queue.dequeue(), undefined);
    assert.equal(queue.peek(), undefined);
  });

  it("wraps the head index around the backing array without growing", () => {
    const queue = new Queue<number>(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    assert.equal(queue.dequeue(), 1);
    assert.equal(queue.dequeue(), 2);
    // head is now past the middle of the backing array; this enqueue must
    // wrap around to index 0 instead of growing.
    queue.enqueue(4);
    assert.equal(queue.length(), 2);
    assert.equal(queue.dequeue(), 3);
    assert.equal(queue.dequeue(), 4);
    assert.equal(queue.isEmpty(), true);
  });

  it("grows past initial capacity while preserving FIFO order", () => {
    const queue = new Queue<number>(2);
    for (let i = 0; i < 20; i++) {
      queue.enqueue(i);
    }
    assert.equal(queue.length(), 20);
    for (let i = 0; i < 20; i++) {
      assert.equal(queue.dequeue(), i);
    }
    assert.equal(queue.isEmpty(), true);
  });
});
