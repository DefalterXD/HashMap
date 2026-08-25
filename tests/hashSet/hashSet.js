class Node {
    constructor(key = null, value = null, nextNode = null) {
        this.key = key;
        this.nextNode = nextNode;
    }
}

export class HashSet {
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

    #checkEntries(limitCapacity) {
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

        if (entryCounter > limitCapacity) {
            return true;
        } else {
            return false;
        }
    }

    #findKeyIdx(key) {
        for (let i = 0; i < this.capacity; i++) {
            if (this.elements[i]) {
                let ptrTrav = this.elements[i];
                while (ptrTrav !== null) {
                    if (ptrTrav.key === key) {
                        return i;
                    }
                    ptrTrav = ptrTrav.nextNode;
                }
            }
        }
    }

    #checkForExistingEntryWithTheSameKey(key, value) {
        for (let i = 0; i < this.capacity; i++) {
            const currEl = this.elements[i];
            if (currEl) {
                if (currEl.key !== key) {
                    let ptrTrav = currEl;
                    while (ptrTrav.nextNode !== null) {
                        if (ptrTrav.key === key) {
                            return true;
                        }

                        ptrTrav = ptrTrav.nextNode;
                    }

                    if (ptrTrav.key === key) {
                        return true;
                    }
                }
            }
        }
    }

    #addNewKeyPairs(currEl, hashItem, key, index, limitCapacity) {
        if (currEl) {
            if (currEl.key !== key) {
                let ptrTrav = currEl;
                while (ptrTrav.nextNode !== null) {
                    if (ptrTrav.key === key) {
                        ptrTrav.nextNode = hashItem;
                        if (this.#checkEntries(limitCapacity)) this.capacity *= 2;
                    }

                    ptrTrav = ptrTrav.nextNode;
                }

                if (ptrTrav.key === key) {
                    ptrTrav.value = hashItem.value;
                    if (this.#checkEntries(limitCapacity)) this.capacity *= 2;
                }

                ptrTrav.nextNode = hashItem;
                if (this.#checkEntries(limitCapacity)) this.capacity *= 2;
            }
        } else {
            this.elements[index] = hashItem;
            if (this.#checkEntries(limitCapacity)) this.capacity *= 2;
        }
    }

    set(key, value) {

        const limitCapacity = this.capacity * this.loadFactor;
        const index = this.hash(key);
        const hashItem = new Node(key);
        if (index < 0 || index >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }

        if (this.#checkForExistingEntryWithTheSameKey(key)) {
            return 'The key is already there';
        } else {
            const currEl = this.elements[index];
            this.#addNewKeyPairs(currEl, hashItem, key, index, limitCapacity)
        }

    }

    get(key) {
        const index = this.#findKeyIdx(key);
        const foundedList = this.elements[index];
        if (!foundedList) {
            return null;
        } else {
            let ptrTrav = foundedList;
            while (ptrTrav !== null) {
                if (ptrTrav.key === key) return ptrTrav.key;
                ptrTrav = ptrTrav.nextNode;
            }
            if (ptrTrav.key === key) return ptrTrav.key;
        }
    }

    has(key) {
        const index = this.#findKeyIdx(key);
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

    remove(key) {
        const index = this.#findKeyIdx(key);
        const foundedEl = this.elements[index];
        if (foundedEl) {
            let ptrTrav = foundedEl;
            let indexCount = 0;
            while (ptrTrav !== null) {
                if (ptrTrav.key === key && indexCount === 0) {
                    this.elements[index] = ptrTrav.nextNode;
                    return true;
                } else if (ptrTrav.nextNode.key === key) {
                    ptrTrav.nextNode = ptrTrav.nextNode.nextNode;
                    return true;
                }
                ptrTrav = ptrTrav.nextNode;
                indexCount++;
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


        return keys.sort().join(', ');

    }

    entries() {
        const entries = [];

        for (let i = 0; i < this.capacity; i++) {
            if (this.elements[i]) {
                let ptrTrav = this.elements[i];
                while (ptrTrav !== null) {
                    const entry = [];
                    entry.push(ptrTrav.key);
                    if (!entry.includes(entry)) {
                        entries.push(entry);
                    } else {
                        break;
                    }
                    ptrTrav = ptrTrav.nextNode;
                }
            }
        }

        return entries;
    }
}
