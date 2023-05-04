"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        let length = 1;
        if (!this.head) {
            return 0;
        }
        let tail = this.head;
        while (tail.next) {
            length++;
            tail = tail.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        let leftNode = this.at(leftIndex);
        let rightNode = this.at(rightIndex);
        return leftNode.data > rightNode.data;
    }
    swap(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        let leftNode = this.at(leftIndex);
        let rightNode = this.at(rightIndex);
        [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];
    }
    print() {
        if (!this.head) {
            console.log('List is empty');
            return;
        }
        let node = this.head;
        while (node) {
            console.log(`value: ${node.data}`);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
