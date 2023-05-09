"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class CsvFileReader {
    constructor(filename) {
        this.data = [];
        this.filename = filename;
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => row.split(','))
            .map((row) => {
            const [date, homeTeam, awayTeam, homeScore, awayScore, matchResult, referee,] = row;
            return [
                (0, utils_1.dateStringToDate)(date),
                homeTeam,
                awayTeam,
                parseInt(homeScore),
                parseInt(awayScore),
                matchResult,
                referee,
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;
