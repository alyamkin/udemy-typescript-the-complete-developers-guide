import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';
import { Summary } from './Summary';
import { HtmlReport } from './reports/HtmlReport';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const winsAnalysis = new WinsAnalysis('Man United');
const consoleReport = new ConsoleReport('Man United');
const htmlReport = new HtmlReport();

const summary = new Summary(winsAnalysis, htmlReport);

summary.buildAndPrintReport(matchReader.matches);
