import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { LinkedList } from "../src/linkedList.js";

describe("LinkedList — add / addStart", () => {
  it("appends elements in order", () => {
    const list = new LinkedList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    assert.equal(list.toString(), "[1, 2, 3]");
    assert.equal(list.getLen(), 3);
  });

  it("addStart prepends elements", () => {
    const list = new LinkedList<number>();
    list.addStart(3);
    list.addStart(2);
    list.addStart(1);
    assert.equal(list.toString(), "[1, 2, 3]");
  });

  it("addStart on an empty list does not create a self-referencing node", () => {
    const list = new LinkedList<number>();
    list.addStart(1);
    // If the historical bug were present, this node would point to itself and
    // toString() would either loop forever or misbehave — so simply finishing
    // is itself part of the assertion here.
    assert.equal(list.toString(), "[1]");
    assert.equal(list.getLen(), 1);

    list.add(2);
    assert.equal(list.toString(), "[1, 2]");
  });
});

describe("LinkedList — addByPosition", () => {
  it("inserting at position 0 behaves like addStart", () => {
    const list = new LinkedList<number>();
    list.add(1);
    list.add(2);
    list.addByPosition(0, 0);
    assert.equal(list.toString(), "[0, 1, 2]");
  });

  it("inserting at position === length behaves like add", () => {
    const list = new LinkedList<number>();
    list.add(1);
    list.add(2);
    list.addByPosition(2, 3);
    assert.equal(list.toString(), "[1, 2, 3]");
  });

  it("inserting in the middle lands the new element exactly at that index", () => {
    const list = new LinkedList<number>();
    list.add(1);
    list.add(2);
    list.add(4);
    list.addByPosition(2, 3);
    assert.equal(list.toString(), "[1, 2, 3, 4]");
    assert.equal(list.searchByPosition(2), 3);
  });

  it("throws for an out-of-range position", () => {
    const list = new LinkedList<number>();
    list.add(1);
    assert.throws(() => list.addByPosition(-1, 0));
    assert.throws(() => list.addByPosition(5, 0));
  });
});

describe("LinkedList — removeFirst / removeFinal / removeByPosition", () => {
  it("removeFirst removes and returns the head", () => {
    const list = new LinkedList<number>();
    [1, 2, 3].forEach((n) => list.add(n));
    assert.equal(list.removeFirst(), 1);
    assert.equal(list.toString(), "[2, 3]");
  });

  it("removeFinal removes and returns the tail", () => {
    const list = new LinkedList<number>();
    [1, 2, 3, 4, 5].forEach((n) => list.add(n));
    assert.equal(list.removeFinal(), 5);
    assert.equal(list.removeFinal(), 4);
    assert.equal(list.toString(), "[1, 2, 3]");
  });

  it("removeFinal on a single-element list empties it correctly", () => {
    const list = new LinkedList<number>();
    list.add(1);
    assert.equal(list.removeFinal(), 1);
    assert.equal(list.getLen(), 0);
    assert.equal(list.toString(), "[]");
    // Should not throw when adding again after being fully drained.
    list.add(2);
    assert.equal(list.toString(), "[2]");
  });

  it("removeByPosition removes from the middle", () => {
    const list = new LinkedList<number>();
    [1, 2, 3, 4, 5].forEach((n) => list.add(n));
    assert.equal(list.removeByPosition(2), 3);
    assert.equal(list.toString(), "[1, 2, 4, 5]");
  });

  it("throws when removing from an empty list", () => {
    const list = new LinkedList<number>();
    assert.throws(() => list.removeFirst());
    assert.throws(() => list.removeFinal());
  });
});

describe("LinkedList — search / clean", () => {
  it("search returns the index of an element, or -1", () => {
    const list = new LinkedList<string>();
    ["a", "b", "c"].forEach((s) => list.add(s));
    assert.equal(list.search("b"), 1);
    assert.equal(list.search("z"), -1);
  });

  it("clean empties the list", () => {
    const list = new LinkedList<number>();
    [1, 2, 3].forEach((n) => list.add(n));
    list.clean();
    assert.equal(list.getLen(), 0);
    assert.equal(list.toString(), "[]");
  });
});
