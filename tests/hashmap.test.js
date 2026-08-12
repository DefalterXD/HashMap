import { HashMap } from "./hashmap.js";

describe('Return hash code form the key', () => {
    const hashMap = new HashMap();

    test("Return hash code form the key 'Alice'", () => {
        expect(hashMap.hash('Alice')).toBe(0);
    });

    test("Return hash code form the key '0'", () => {
        expect(hashMap.hash('0')).toBe(0);
    });
});

describe('Get value form the key', () => {
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

describe('Has a key in the HashMap', () => {
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

describe('Return length of the empty hash map', () => {
    const hashMap = new HashMap();

    test("Return the number of empty entries in hash map", () => {
        expect(hashMap.length()).toBe(0);
    });
});

describe('Clear the entire Hash Map entries', () => {
    const hashMap = new HashMap();

    hashMap.set('Alice', 'I am');
    hashMap.set('Bob', 'the');
    hashMap.set('Charlie', 'old');
    hashMap.set('Steve', 'value');
    hashMap.set('Drake', 'I am the old value');
    hashMap.set('0', 'The value');

    test("Return the number of empty entries in hash map after 'clear'", () => {
        hashMap.clear();
        expect(hashMap.length()).toBe(0);
    });
});
