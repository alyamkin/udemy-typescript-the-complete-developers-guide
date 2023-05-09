import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {
  constructor(public team: string) {}
  print(report: string): void {
    console.log(`Team ${this.team} won ${report} games`);
  }
}
