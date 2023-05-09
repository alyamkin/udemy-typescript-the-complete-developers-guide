"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("../utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
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
    }
}
exports.MatchReader = MatchReader;
