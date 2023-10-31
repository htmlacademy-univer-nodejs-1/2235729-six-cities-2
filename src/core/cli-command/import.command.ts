import { TSVFileReader } from '../file-reader/tsv-file-reader.js';
import { CliCommandInterface } from './cli-command.interface';
import { Command } from './command.js';
import { createOffer } from '../helpers/offers.js';
import chalk from 'chalk';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = Command.Import;
  public async execute(filename: string): Promise<void> {
    if (!filename) {
      console.log(chalk.red('Filename required'));
      return;
    }

    const fileReader = new TSVFileReader(filename.trim());

    fileReader.on('line', ImportCommand.onLine);
    fileReader.on('end', ImportCommand.onComplete);

    try {
      fileReader.read();
    } catch (err) {

      if (!(err instanceof Error)) {
        throw err;
      }

      console.log(err.message);
    }
  }

  private static onLine(line: string) {
    console.log(createOffer(line));
  }

  private static onComplete(count: number) {
    console.log(`${count} rows imported.`);
  }
}
