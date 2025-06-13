class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const data = new Node(value);
        this.head = data;
        this.tail = data;
        this.length = 1;
    }

    push(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop() {
        if (!this.head) return null; // nothing to pop

        let temp = this.head;
        let prev = this.head;

        // if only 1 element
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            while (temp.next) {
                prev = temp;
                temp = temp.next;
            }
            prev.next = null;
            this.tail = prev;
        }

        this.length--;
        return temp;
    }

    find(value) {
        let temp = this.head;
        while (temp) {
            if (temp.data === value) return temp;
            temp = temp.next;
        }
        return -1;
    }
}

const newLL = new LinkedList(1);
newLL.push(2);
newLL.push(3);
newLL.push(4);
newLL.push(5);

console.log("Popped:", newLL.pop());
console.log("Find 3:", newLL.find(3));
console.log("Find 99:", newLL.find(99)); // should return -1
console.log("Final List:", newLL);
