import got from 'got';
import { CliCommandInterface } from './cli-command.interface.js';
import { MockData } from '../../types/mock-data.type.js';
import OfferGenerator from '../../modules/offer-generator/offer-generator.js';
import { TSVFileWriter } from '../file-writer/tsv-file-writer.js';
import { ConsoleLoggerService } from '../logger/console.logger.service.js';
import { LoggerType } from '../logger/logger.type';
import { Command } from './command.js';

export default class GenerateCommand implements CliCommandInterface {
  public readonly name = Command.Generate;
  private initialData!: MockData;
  private readonly logger: LoggerType;

  constructor() {
    this.logger = new ConsoleLoggerService();
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filepath, url] = parameters;
    const offerCount = Number.parseInt(count, 10);

    try {
      this.initialData = await got.get(url).json();
    } catch {
      this.logger.error(`Не получилось получить данные с ${url}`);
      return;
    }

    const offerGeneratorString = new OfferGenerator(this.initialData);
    const tsvFileWriter = new TSVFileWriter(filepath);

    for (let i = 0; i < offerCount; i++) {
      await tsvFileWriter.write(offerGeneratorString.generate());
    }

    this.logger.info(`Файл ${filepath} был успешно создан`);
  }
}
