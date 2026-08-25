import { HashMap } from "./hashMap.js";

describe("Return hash code form the key", () => {
  const hashMap = new HashMap();

  test("Return hash code form the key 'Alice'", () => {
    expect(hashMap.hash("Alice")).toBe(0);
  });

  test("Return hash code form the key '0'", () => {
    expect(hashMap.hash("0")).toBe(0);
  });
});

describe("Return get values form the keys", () => {
  const hashMap = new HashMap();

  hashMap.set("Alice", "I am the old value");
  hashMap.set("0", "I am the new value");
  hashMap.set("0", "I am the value");

  test("Return existing value after key", () => {
    expect(hashMap.get("Alice")).toBe("I am the old value");
  });

  test("Return existing value after key", () => {
    expect(hashMap.get("0")).toBe("I am the value");
  });

  test("Return null value after key", () => {
    expect(hashMap.get("Wrong")).toBe(null);
  });
});

describe("Return the hashMap which has the keys", () => {
  const hashMap = new HashMap();

  hashMap.set("Alice", "I am the old value");
  hashMap.set("0", "I am the value");

  test("Return true if it find the key 'Alice'", () => {
    expect(hashMap.has("Alice")).toBe(true);
  });

  test("Return true if it find the key '0'", () => {
    expect(hashMap.has("0")).toBe(true);
  });

  test("Return false if it not find the key", () => {
    expect(hashMap.has("Bob")).toBe(false);
  });
});

describe("Return removed entry from the key in hashMap", () => {
  const hashMap = new HashMap();

  hashMap.set("Alice", "I am the old value");
  hashMap.set("0", "I am the value");
  hashMap.set("elephant", "gray");
  hashMap.set("moon", "silver");

  test("Return true if it find the key '0'", () => {
    expect(hashMap.remove("0")).toBe(true);
  });

  test("Return true if it find the key 'Alice'", () => {
    expect(hashMap.remove("Alice")).toBe(true);
  });

  test("Return true if it fine the key 'elephant'", () => {
    expect(hashMap.remove("elephant")).toBe(true);
  });

  test("Return false if it not find the key", () => {
    expect(hashMap.remove("Bob")).toBe(false);
  });
});

describe("Return length of the stored keys", () => {
  const hashMap = new HashMap();

  hashMap.set("Alice", "I am");
  hashMap.set("Bob", "the");
  hashMap.set("Charlie", "old");
  hashMap.set("Steve", "value");
  hashMap.set("Drake", "I am the old value");
  hashMap.set("0", "The value");

  test("Return the number of stored keys inside the hashMap", () => {
    expect(hashMap.length()).toBe(6);
  });
});

describe("Return length of the empty hashMap", () => {
  const hashMap = new HashMap();

  test("Return the number of empty entries in hashMap", () => {
    expect(hashMap.length()).toBe(0);
  });
});

describe("Return the entire cleared hashMap entries", () => {
  const hashMap = new HashMap();

  hashMap.set("Alice", "I am");
  hashMap.set("Bob", "the");
  hashMap.set("Charlie", "old");
  hashMap.set("Steve", "value");
  hashMap.set("Drake", "I am the old value");
  hashMap.set("0", "The value");

  test("Return the number of empty entries in hashMap after 'clear'", () => {
    hashMap.clear();
    expect(hashMap.length()).toBe(0);
  });
});

describe("Return the stored keys inside hashMap", () => {
  const hashMap = new HashMap();

  hashMap.set("Alice", "I am");
  hashMap.set("Bob", "the");
  hashMap.set("Charlie", "old");
  hashMap.set("Steve", "value");
  hashMap.set("Drake", "I am the old value");
  hashMap.set("0", "The value");

  test("Return the number of empty entries in hashMap after 'clear'", () => {
    expect(hashMap.keys()).toBe("0, Alice, Bob, Charlie, Drake, Steve");
  });
});

describe("Return the stored values inside hashMap", () => {
  const hashMap = new HashMap();

  hashMap.set("Alice", "I am");
  hashMap.set("Bob", "the");
  hashMap.set("Charlie", "old");
  hashMap.set("Steve", "value");
  hashMap.set("Drake", "I am the old value");
  hashMap.set("0", "The value");

  test("Return the number of empty entries in hashMap after 'clear'", () => {
    expect(hashMap.values()).toBe(
      "I am, I am the old value, The value, old, the, value",
    );
  });
});

describe("Return the stored entries inside hashMap", () => {
  const hashMap = new HashMap();

  hashMap.set("Alice", "I am");
  hashMap.set("Bob", "the");
  hashMap.set("Charlie", "old");
  hashMap.set("Steve", "value");
  hashMap.set("Drake", "I am the old value");
  hashMap.set("0", "The value");

  test("Return the number of entries in hashMap", () => {
    expect(hashMap.entries()).toEqual([
      ["Alice", "I am"],
      ["0", "The value"],
      ["Charlie", "old"],
      ["Steve", "value"],
      ["Bob", "the"],
      ["Drake", "I am the old value"],
    ]);
  });
});

describe("Return expanded capacity after limit entries is passed with mutations of the hashMap", () => {
  const hashMap = new HashMap();

  hashMap.set("apple", "red");
  hashMap.set("banana", "yellow");
  hashMap.set("carrot", "orange");
  hashMap.set("dog", "brown");
  hashMap.set("elephant", "gray");
  hashMap.set("frog", "green");
  hashMap.set("grape", "purple");
  hashMap.set("hat", "black");
  hashMap.set("ice cream", "white");
  hashMap.set("jacket", "blue");
  hashMap.set("kite", "pink");
  hashMap.set("lion", "golden");

  hashMap.set("moon", "silver");

  hashMap.set("lion", "yellow");

  test("Return new expanded capacity after new entry", () => {
    expect(hashMap.capacity).toBe(32);
  });

  test("Return new value from the same key", () => {
    expect(hashMap.get("lion")).toBe("yellow");
  });

  test("Return new value from the same key", () => {
    expect(hashMap.remove("elephant")).toBe(true);
  });

  test("Return new value from the same key", () => {
    expect(hashMap.remove("lion")).toBe(true);
  });

  test("Return value if it had been in hashMap", () => {
    expect(hashMap.has("moon")).toBe(true);
  });

  test("Return length of mutated hashMap", () => {
    expect(hashMap.length()).toBe(11);
  });

  test("Return all mutated entries from hashMap", () => {
    expect(hashMap.entries()).toEqual([
      ["moon", "silver"],
      ["carrot", "orange"],
      ["frog", "green"],
      ["banana", "yellow"],
      ["apple", "red"],
      ["grape", "purple"],
      ["hat", "black"],
      ["dog", "brown"],
      ["ice cream", "white"],
      ["jacket", "blue"],
      ["kite", "pink"],
    ]);
  });

  test("Return all mutated keys from hashMap", () => {
    expect(hashMap.keys()).toBe(
      "apple, banana, carrot, dog, frog, grape, hat, ice cream, jacket, kite, moon",
    );
  });

  test("Return all mutated values from hashMap", () => {
    expect(hashMap.values()).toBe(
      "black, blue, brown, green, orange, pink, purple, red, silver, white, yellow",
    );
  });

  test("Return length of the cleared hashMap", () => {
    hashMap.clear();
    expect(hashMap.length()).toBe(0);
  });
});
