import { TSVFileReader } from '../file-reader/tsv-file-reader.js';
import { CliCommandInterface } from './cli-command.interface';
import { Command } from './command.js';
import chalk from 'chalk';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = Command.Import;
  public execute(filename: string): void {
    if (!filename) {
      console.log(chalk.red('Filename required'));
      return;
    }

    const fileReader = new TSVFileReader(filename.trim());

    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch (err) {

      if (!(err instanceof Error)) {
        throw err;
      }

      console.log(err.message);
    }
  }
}
