import { HashMap } from "./hashMap.js";

describe('Return hash code form the key', () => {
    const hashMap = new HashMap();

    test("Return hash code form the key 'Alice'", () => {
        expect(hashMap.hash('Alice')).toBe(0);
    });

    test("Return hash code form the key '0'", () => {
        expect(hashMap.hash('0')).toBe(0);
    });
});

describe('Return get values form the keys', () => {
    const hashMap = new HashMap();

    hashMap.set('Alice', 'I am the old value');
    hashMap.set('0', 'I am the new value');
    hashMap.set('0', 'I am the value');



    test("Return existing value after key", () => {
        expect(hashMap.get('Alice')).toBe('I am the old value');
    });

    test("Return existing value after key", () => {
        expect(hashMap.get('0')).toBe('I am the value');
    });

    test("Return null value after key", () => {
        expect(hashMap.get('Wrong')).toBe(null);
    });
});

describe('Return the hashMap which has the keys', () => {
    const hashMap = new HashMap();

    hashMap.set('Alice', 'I am the old value');
    hashMap.set('0', 'I am the value');

    test("Return true if it find the key 'Alice'", () => {
        expect(hashMap.has('Alice')).toBe(true);
    });

    test("Return true if it find the key '0'", () => {
        expect(hashMap.has('0')).toBe(true);
    });

    test("Return false if it not find the key", () => {
        expect(hashMap.has('Bob')).toBe(false);
    });
});

describe('Return removed entry from the key in hashMap', () => {
    const hashMap = new HashMap();

    hashMap.set('Alice', 'I am the old value');
    hashMap.set('0', 'I am the value');
    hashMap.set('elephant', 'gray');
    hashMap.set('moon', 'silver');

    test("Return true if it find the key '0'", () => {
        expect(hashMap.remove('0')).toBe(true);
    });

    test("Return true if it find the key 'Alice'", () => {
        expect(hashMap.remove('Alice')).toBe(true);
    });

    test("Return true if it fine the key 'elephant'", () => {
        expect(hashMap.remove('elephant')).toBe(true);
    });

    test("Return false if it not find the key", () => {
        expect(hashMap.remove('Bob')).toBe(false);
    });
});

describe('Return length of the stored keys', () => {
    const hashMap = new HashMap();

    hashMap.set('Alice', 'I am');
    hashMap.set('Bob', 'the');
    hashMap.set('Charlie', 'old');
    hashMap.set('Steve', 'value');
    hashMap.set('Drake', 'I am the old value');
    hashMap.set('0', 'The value');



    test("Return the number of stored keys inside the hashMap", () => {
        expect(hashMap.length()).toBe(6);
    });
});

describe('Return length of the empty hashMap', () => {
    const hashMap = new HashMap();

    test("Return the number of empty entries in hashMap", () => {
        expect(hashMap.length()).toBe(0);
    });
});

describe('Return the entire cleared hashMap entries', () => {
    const hashMap = new HashMap();

    hashMap.set('Alice', 'I am');
    hashMap.set('Bob', 'the');
    hashMap.set('Charlie', 'old');
    hashMap.set('Steve', 'value');
    hashMap.set('Drake', 'I am the old value');
    hashMap.set('0', 'The value');

    test("Return the number of empty entries in hashMap after 'clear'", () => {
        hashMap.clear();
        expect(hashMap.length()).toBe(0);
    });
});

describe('Return the stored keys inside hashMap', () => {
    const hashMap = new HashMap();

    hashMap.set('Alice', 'I am');
    hashMap.set('Bob', 'the');
    hashMap.set('Charlie', 'old');
    hashMap.set('Steve', 'value');
    hashMap.set('Drake', 'I am the old value');
    hashMap.set('0', 'The value');

    test("Return the number of empty entries in hashMap after 'clear'", () => {
        expect(hashMap.keys()).toBe('0, Alice, Bob, Charlie, Drake, Steve');
    });
});

describe('Return the stored values inside hashMap', () => {
    const hashMap = new HashMap();

    hashMap.set('Alice', 'I am');
    hashMap.set('Bob', 'the');
    hashMap.set('Charlie', 'old');
    hashMap.set('Steve', 'value');
    hashMap.set('Drake', 'I am the old value');
    hashMap.set('0', 'The value');

    test("Return the number of empty entries in hashMap after 'clear'", () => {
        expect(hashMap.values()).toBe('I am, I am the old value, The value, old, the, value');
    });
});

describe('Return the stored entries inside hashMap', () => {
    const hashMap = new HashMap();

    hashMap.set('Alice', 'I am');
    hashMap.set('Bob', 'the');
    hashMap.set('Charlie', 'old');
    hashMap.set('Steve', 'value');
    hashMap.set('Drake', 'I am the old value');
    hashMap.set('0', 'The value');

    test("Return the number of entries in hashMap", () => {
        expect(hashMap.entries()).toEqual([
            ['Alice', 'I am'],
            ['0', 'The value'],
            ['Charlie', 'old'],
            ['Steve', 'value'],
            ['Bob', 'the'],
            ['Drake', 'I am the old value']
        ]);
    });
});

