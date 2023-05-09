import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      const [
        date,
        homeTeam,
        guestTeam,
        homeGoals,
        guestGoals,
        winner,
        referee,
      ] = match;
      if (homeTeam === this.team && winner === MatchResult.HomeWin) {
        wins++;
      }

      if (guestTeam === this.team && winner === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `${wins}`;
  }
}
