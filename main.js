class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class RingList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    append() {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        node.next = this.head;
        this.tail = node;
        this.length++;
    }

    insert(data, index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        const node = new Node(data);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
            this.tail = node;
        } else if (index === this.length) {
            this.tail.next = node;
            this.tail = node;
            node.next = this.head;
        } else {
            let current = this.head;
            let i = 0;
            while (i < index - 1) {
                current = current.next;
                i++;
            }
            node.next = current.next;
            current.next = node;
        }
        this.length++;
    }

    delete() {}

    deleteAll() {}

    get() {}

    clone() {}

    reverse() {}

    findFirst() {}

    findLast() {}

    clear() {}

    extend() {}
}
