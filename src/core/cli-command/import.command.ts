import { TSVFileReader } from '../file-reader/tsv-file-reader.js';
import { CliCommandInterface } from './cli-command.interface';
import { Command } from './command.js';
import { getErrorMessage, getConnectionString } from '../helpers/common.js';
import { createOffer } from '../helpers/offers.js';
import chalk from 'chalk';
import { UserServiceInterface } from '../../modules/user/user-service.interface.js';
import { OfferServiceInterface } from '../../modules/offer/offer-service.interface.js';
import { LoggerType } from '../logger/logger.type';
import { ConsoleLoggerService } from '../logger/console.logger.service.js';
import OfferService from '../../modules/offer/offer.service.js';
import { OfferModel } from '../../modules/offer/offer.entity.js';
import UserService from '../../modules/user/user.service.js';
import { UserModel } from '../../modules/user/user.entity.js';
import { Offer } from '../../types/offer.type';
import { MongoClientService } from '../database-client/mongo-client.service.js';
import { DatabaseClient } from '../database-client/database-client.type';
import { DEFAULT_USER_PASSWORD, DEFAULT_DB_PORT } from '../../constants/database.js';
import { CommentService } from '../../modules/comment/comment.service';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = Command.Import;
  private userService!: UserServiceInterface;
  private offerService!: OfferServiceInterface;
  private databaseService!: DatabaseClient;
  private commentService!: CommentService;
  private readonly logger: LoggerType;
  private salt!: string;

  public async execute(...parameters: string[]): Promise<void> {
    const [filename, login, password, host, dbname, salt] = parameters;
    const uri = getConnectionString(login, password, host, DEFAULT_DB_PORT, dbname);
    this.salt = salt;

    await this.databaseService.connect(uri);
    if (!filename) {
      console.log(chalk.red('Filename required'));
      return;
    }

    const fileReader = new TSVFileReader(filename.trim());

    fileReader.on('line', this.onLine);
    fileReader.on('end', this.onComplete);

    try {
      await fileReader.read();
    } catch (err) {
      this.logger.error(`${chalk.redBright(`Не вышло прочитать файл. Ошибка: ${getErrorMessage(err)}`)}`);
    }
  }

  constructor() {
    this.logger = new ConsoleLoggerService();
    this.offerService = new OfferService(this.logger, OfferModel, this.commentService);
    this.userService = new UserService(this.logger, UserModel);
    this.databaseService = new MongoClientService(this.logger);
  }

  private async saveOffer(offer: Offer) {
    const user = await this.userService.findOrCreate({
      ...offer.author,
      password: DEFAULT_USER_PASSWORD
    }, this.salt);

    await this.offerService.create({
      ...offer,
      userId: user.id,
    });
  }

  private readonly onLine = async(line: string, resolve: () => void) => {
    const offer = createOffer(line);
    await this.saveOffer(offer);
    resolve();
  };

  private readonly onComplete = (count: number) => {
    this.logger.info(`${count} строк импортировано`);
    this.databaseService.disconnect();
  };
}
