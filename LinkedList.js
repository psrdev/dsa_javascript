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
        const newData = new Node(data);
        if (!this.head) {
            this.head = newData;
            this.tail = newData;

        }

        this.tail.next = newData;
        this.tail = newData;
        this.length++;

    }
    pop() {
        let temp = this.head;
        let prev = this.head;
        while (temp.next !== null) {
            console.log(temp.data);
            prev = temp;
            temp = temp.next;
        }

    }

}

const newLL = new LinkedList(1);
newLL.push(2);
newLL.push(3);
newLL.push(4);
newLL.push(5);
newLL.pop();
console.log(newLL);