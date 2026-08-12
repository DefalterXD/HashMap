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
