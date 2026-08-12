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
