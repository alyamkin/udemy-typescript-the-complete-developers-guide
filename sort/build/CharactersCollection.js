"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    get length() {
        return this.data.length;
    }
    constructor(data) {
        super();
        this.data = data;
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        [characters[leftIndex], characters[rightIndex]] = [
            characters[rightIndex],
            characters[leftIndex],
        ];
        this.data = characters.join('');
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLocaleLowerCase() >
            this.data[rightIndex].toLocaleLowerCase());
    }
}
exports.CharactersCollection = CharactersCollection;
