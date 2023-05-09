import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load() {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      const [
        date,
        homeTeam,
        awayTeam,
        homeScore,
        awayScore,
        matchResult,
        referee,
      ] = row;
      return [
        dateStringToDate(date),
        homeTeam,
        awayTeam,
        parseInt(homeScore),
        parseInt(awayScore),
        matchResult as MatchResult,
        referee,
      ];
    });
  }
}
