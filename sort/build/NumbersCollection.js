"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    get length() {
        return this.data.length;
    }
    constructor(data) {
        super();
        this.data = data;
    }
    swap(leftIndex, rightIndex) {
        [this.data[leftIndex], this.data[rightIndex]] = [
            this.data[rightIndex],
            this.data[leftIndex],
        ];
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
}
exports.NumbersCollection = NumbersCollection;
