import { CliCommandInterface } from './cli-command.interface.js';
import {Command} from './command.js';
import chalk from 'chalk';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = Command.Help;

  public async execute(): Promise<void> {
    console.log(`Программа для подготовки данных для REST API сервера.
Пример:
  ${chalk.green('npm run ts ./src/main.cli.ts --<command> [--arguments]')}
Команды: ${chalk.green(`
  --version:
  --help:
  --import <path>:`
  )}`);
  }
}
