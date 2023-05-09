"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("./MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            const [date, homeTeam, guestTeam, homeGoals, guestGoals, winner, referee,] = match;
            if (homeTeam === this.team && winner === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            if (guestTeam === this.team && winner === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return String(wins);
    }
}
exports.WinsAnalysis = WinsAnalysis;
