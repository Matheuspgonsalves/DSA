import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { Stack } from "../src/stack.js";

describe("Stack", () => {
  it("starts empty", () => {
    const stack = new Stack<number>();
    assert.equal(stack.isEmpty(), true);
    assert.equal(stack.length(), 0);
  });

  it("pushes and pops in LIFO order", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    assert.equal(stack.length(), 3);
    assert.equal(stack.pop(), 3);
    assert.equal(stack.pop(), 2);
    assert.equal(stack.pop(), 1);
    assert.equal(stack.isEmpty(), true);
  });

  it("peek returns the top element without removing it", () => {
    const stack = new Stack<string>();
    stack.push("a");
    stack.push("b");
    assert.equal(stack.peek(), "b");
    assert.equal(stack.length(), 2);
  });

  it("pop and peek return undefined on an empty stack", () => {
    const stack = new Stack<number>();
    assert.equal(stack.pop(), undefined);
    assert.equal(stack.peek(), undefined);
  });
});
