class MyArray {
    constructor() {
        this.items = {};
        this.length = 0;
    }
    push(item) {
        this.items[this.length] = item;
        this.length++;
    }
    pop() {
        if (this.length === 0) {
            return undefined; // No items to pop
        }
        this.length--;
        const item = this.items[this.length];
        delete this.items[this.length]; // Remove the item from the array
        return item;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined; // Index out of bounds
        }
        return this.items[index];
    }
    set(index, item) {
        if (index < 0 || index >= this.length) {
            return false; // Index out of bounds
        }
        this.items[index] = item;
        return true;
    }
    find(item) {
        for (let i = 0; i < this.length; i++) {
            if (this.items[i] === item) {
                return i; // Return the index of the item
            }
        }
        return -1; // Item not found
    }
    size() {
        return this.length; // Return the number of items in the array
    }
    clear() {
        this.items = {};
        this.length = 0; // Reset the array
    }
    toArray() {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(this.items[i]); // Convert to a regular array
        }
        return result;
    }


}
// Example usage
const myArray = new MyArray();
myArray.push(1);
myArray.push(2);
myArray.push(3);
console.log(myArray.toArray()); // Output: [1, 2, 3]
console.log(myArray.pop()); // Output: 3
console.log(myArray.toArray()); // Output: [1, 2]
