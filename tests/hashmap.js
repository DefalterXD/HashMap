class Node {
    constructor(key = null, value = null, nextNode = null) {
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.elements = [];
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }


    set(key, value) {
        const limitCapacity = this.capacity * this.loadFactor;
        if (this.#checkEntries(limitCapacity)) this.capacity *= 2;
        const index = this.hash(key);
        const hashItem = new Node(key, value);
        if (index < 0 || index >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }

        const currEl = this.elements[index];

        if (currEl) {
            if (currEl.key !== key) {
                let ptrTrav = currEl;
                while (ptrTrav.nextNode !== null) {
                    if (ptrTrav.key === key) {
                        ptrTrav.nextNode = hashItem;
                        break;
                    }

                    ptrTrav = ptrTrav.nextNode;
                }

                if (ptrTrav.key === key) {
                    ptrTrav.value = hashItem.value;
                    return;
                }

                ptrTrav.nextNode = hashItem;
            }
        } else {
            this.elements[index] = hashItem;
        }
    }

    get(key) {
        const index = this.hash(key);
        const foundedList = this.elements[index];
        if (!foundedList) {
            return null;
        } else {
            let ptrTrav = foundedList;
            while (ptrTrav !== null) {
                if (ptrTrav.key === key) return ptrTrav.value;
                ptrTrav = ptrTrav.nextNode;
            }
            if (ptrTrav.key === key) return ptrTrav.value;
        }
    }

    has(key) {
        const index = this.hash(key);
        const foundedEl = this.elements[index];
        if (foundedEl) {
            let ptrTrav = foundedEl;
            while (ptrTrav !== null) {
                if (ptrTrav.key === key) return true;
                ptrTrav = ptrTrav.nextNode;
            }
        } else {
            return false;
        }
    }

    length() {

        let entryCounter = 0;
        for (let i = 0; i < this.capacity; i++) {
            if (this.elements[i]) {
                let ptrTrav = this.elements[i];
                while (ptrTrav !== null) {
                    entryCounter++;
                    ptrTrav = ptrTrav.nextNode;
                }
            }
        }

        return entryCounter;
    }

    clear() {
        this.elements = [];
    }

    keys() {
        const keys = [];

         for (let i = 0; i < this.capacity; i++) {
            if (this.elements[i]) {
                let ptrTrav = this.elements[i];
                while (ptrTrav !== null) {
                    keys.push(ptrTrav.key);
                    ptrTrav = ptrTrav.nextNode;
                }
            }
        }

        return keys;

    }
}
