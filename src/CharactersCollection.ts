import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const prefix = this.data.substring(0, leftIndex);
    const suffix = this.data.substring(rightIndex + 1);
    this.data = prefix + this.data[rightIndex] + this.data[leftIndex] + suffix;
  }
}