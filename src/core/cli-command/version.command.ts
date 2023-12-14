import { readFileSync } from 'node:fs';
import path from 'node:path';
import chalk from 'chalk';
import { CliCommandInterface } from './cli-command.interface.js';
import { Command } from './command.js';

export default class VersionCommand implements CliCommandInterface {
  public readonly name = Command.Version;

  private readVersion(): string {
    const contentPageJSON = readFileSync(path.resolve('./package.json'), 'utf-8');
    const content = JSON.parse(contentPageJSON);
    return content.version;
  }

  public async execute(): Promise<void> {
    const version = this.readVersion();
    console.log(chalk.bgBlack.white(version));
  }
}
