import { Sorter } from './Sorter';
import { Sortable } from './Sorter';

export class NumbersCollection extends Sorter implements Sortable {
  data: number[];

  get length(): number {
    return this.data.length;
  }

  constructor(data: number[]) {
    super();
    this.data = data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    [this.data[leftIndex], this.data[rightIndex]] = [
      this.data[rightIndex],
      this.data[leftIndex],
    ];
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
}
