import { Sortable, Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter implements Sortable {
  head: Node | null = null;

  add(data: number): void {
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

  get length(): number {
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

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);

    return leftNode.data > rightNode.data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      throw new Error('List is empty');
    }

    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);

    [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];
  }

  print(): void {
    if (!this.head) {
      console.log('List is empty');
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(`value: ${node.data}`);
      node = node.next;
    }
  }
}
