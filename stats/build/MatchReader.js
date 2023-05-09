"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
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
exports.MatchReader = MatchReader;
