"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReport = void 0;
class ConsoleReport {
    constructor(team) {
        this.team = team;
    }
    print(report) {
        console.log(`Team ${this.team} won ${report} games`);
    }
}
exports.ConsoleReport = ConsoleReport;
