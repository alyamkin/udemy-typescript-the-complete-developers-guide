import { dateStringToDate } from '../utils';
import { MatchResult } from '../MatchResult';
import { CsvFileReader } from './CsvFileReader';

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
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
  }
}
