class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}
const arr = new ArrayOfAnything<string>(['a', 'b']);

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let string of arr) {
    console.log(string);
  }
}
function printNumbers(arr: number[]): void {
  for (let string of arr) {
    console.log(string);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

// Generic constraints

class Car {
  print() {
    console.log("I'm a car");
  }
}

class House {
  print() {
    console.log("I'm a house");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let item of arr) {
    item.print();
  }
}
