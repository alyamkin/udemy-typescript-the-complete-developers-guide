import { Sortable, Sorter } from './Sorter';

export class CharactersCollection extends Sorter implements Sortable {
  data: string;

  get length(): number {
    return this.data.length;
  }

  constructor(data: string) {
    super();
    this.data = data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    [characters[leftIndex], characters[rightIndex]] = [
      characters[rightIndex],
      characters[leftIndex],
    ];

    this.data = characters.join('');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }
}
