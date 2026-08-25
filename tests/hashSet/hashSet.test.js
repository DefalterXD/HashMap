import { HashSet } from "./hashSet.js";

describe("Return hash code form the key", () => {
  const hashSet = new HashSet();

  test("Return hash code form the key 'Alice'", () => {
    expect(hashSet.hash("Alice")).toBe(0);
  });

  test("Return hash code form the key '0'", () => {
    expect(hashSet.hash("0")).toBe(0);
  });
});

describe("Return get values form the keys", () => {
  const hashSet = new HashSet();

  hashSet.set("Alice");
  hashSet.set("0");
  hashSet.set("0");

  test("Return existing value after key", () => {
    expect(hashSet.get("Alice")).toBe("Alice");
  });

  test("Return existing value after key", () => {
    expect(hashSet.get("0")).toBe("0");
  });

  test("Return null value after key", () => {
    expect(hashSet.get("Wrong")).toBe(null);
  });
});

describe("Return the hashSet which has the keys", () => {
  const hashSet = new HashSet();

  hashSet.set("Alice");
  hashSet.set("0");

  test("Return true if it find the key 'Alice'", () => {
    expect(hashSet.has("Alice")).toBe(true);
  });

  test("Return true if it find the key '0'", () => {
    expect(hashSet.has("0")).toBe(true);
  });

  test("Return false if it not find the key", () => {
    expect(hashSet.has("Bob")).toBe(false);
  });
});

describe("Return removed entry from the key in hashSet", () => {
  const hashSet = new HashSet();

  hashSet.set("Alice");
  hashSet.set("0");
  hashSet.set("elephant");
  hashSet.set("moon");

  test("Return true if it find the key '0'", () => {
    expect(hashSet.remove("0")).toBe(true);
  });

  test("Return true if it find the key 'Alice'", () => {
    expect(hashSet.remove("Alice")).toBe(true);
  });

  test("Return true if it fine the key 'elephant'", () => {
    expect(hashSet.remove("elephant")).toBe(true);
  });

  test("Return false if it not find the key", () => {
    expect(hashSet.remove("Bob")).toBe(false);
  });
});

describe("Return length of the stored keys", () => {
  const hashSet = new HashSet();

  hashSet.set("Alice");
  hashSet.set("Bob");
  hashSet.set("Charlie");
  hashSet.set("Steve");
  hashSet.set("Drake");
  hashSet.set("0");

  test("Return the number of stored keys inside the hashSet", () => {
    expect(hashSet.length()).toBe(6);
  });
});

describe("Return length of the empty hashSet", () => {
  const hashSet = new HashSet();

  test("Return the number of empty entries in hashSet", () => {
    expect(hashSet.length()).toBe(0);
  });
});

describe("Return the entire cleared hashSet entries", () => {
  const hashSet = new HashSet();

  hashSet.set("Alice", "I am");
  hashSet.set("Bob", "the");
  hashSet.set("Charlie", "old");
  hashSet.set("Steve", "value");
  hashSet.set("Drake", "I am the old value");
  hashSet.set("0", "The value");

  test("Return the number of empty entries in hashSet after 'clear'", () => {
    hashSet.clear();
    expect(hashSet.length()).toBe(0);
  });
});

describe("Return the stored keys inside hashSet", () => {
  const hashSet = new HashSet();

  hashSet.set("Alice");
  hashSet.set("Bob");
  hashSet.set("Charlie");
  hashSet.set("Steve");
  hashSet.set("Drake");
  hashSet.set("0");

  test("Return the number of empty entries in hashSet after 'clear'", () => {
    expect(hashSet.keys()).toBe("0, Alice, Bob, Charlie, Drake, Steve");
  });
});

describe("Return the stored entries inside hashSet", () => {
  const hashSet = new HashSet();

  hashSet.set("Alice", "I am");
  hashSet.set("Bob", "the");
  hashSet.set("Charlie", "old");
  hashSet.set("Steve", "value");
  hashSet.set("Drake", "I am the old value");
  hashSet.set("0", "The value");

  test("Return the number of entries in hashSet", () => {
    expect(hashSet.entries()).toEqual([
      ["Alice"],
      ["0"],
      ["Charlie"],
      ["Steve"],
      ["Bob"],
      ["Drake"],
    ]);
  });
});

describe("Return expanded capacity after limit entries is passed with mutations of the hashSet", () => {
  const hashSet = new HashSet();

  hashSet.set("apple");
  hashSet.set("banana");
  hashSet.set("carrot");
  hashSet.set("dog");
  hashSet.set("elephant");
  hashSet.set("frog");
  hashSet.set("grape");
  hashSet.set("hat");
  hashSet.set("ice cream");
  hashSet.set("jacket");
  hashSet.set("kite");
  hashSet.set("lion");

  hashSet.set("moon");

  hashSet.set("lion");

  test("Return new expanded capacity after new entry", () => {
    expect(hashSet.capacity).toBe(32);
  });

  test("Return new value from the same key", () => {
    expect(hashSet.get("lion")).toBe("lion");
  });

  test("Return new value from the same key", () => {
    expect(hashSet.remove("elephant")).toBe(true);
  });

  test("Return new value from the same key", () => {
    expect(hashSet.remove("lion")).toBe(true);
  });

  test("Return value if it had been in hashSet", () => {
    expect(hashSet.has("moon")).toBe(true);
  });

  test("Return length of mutated hashSet", () => {
    expect(hashSet.length()).toBe(11);
  });

  test("Return all mutated entries from hashSet", () => {
    expect(hashSet.entries()).toEqual([
      ["moon"],
      ["carrot"],
      ["frog"],
      ["banana"],
      ["apple"],
      ["grape"],
      ["hat"],
      ["dog"],
      ["ice cream"],
      ["jacket"],
      ["kite"],
    ]);
  });

  test("Return all mutated keys from hashSet", () => {
    expect(hashSet.keys()).toBe(
      "apple, banana, carrot, dog, frog, grape, hat, ice cream, jacket, kite, moon",
    );
  });

  test("Return length of the cleared hashSet", () => {
    hashSet.clear();
    expect(hashSet.length()).toBe(0);
  });
});
