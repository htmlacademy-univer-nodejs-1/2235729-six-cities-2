import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { LoggerType } from '../core/logger/logger.type.js';
import { Component } from '../types/component.type.js';
import { ConfigType, ConfigSchema } from '../config/config.type.js';
import { DatabaseClient } from '../core/database-client/database-client.type.js';
import { getConnectionString } from '../core/helpers/common.js';

@injectable()
export default class Application {
  constructor(
    @inject(Component.Logger) private readonly logger: LoggerType,
    @inject(Component.Config) private readonly settings: ConfigType<ConfigSchema>,
    @inject(Component.DatabaseClient) private readonly databaseClient: DatabaseClient,
  ) {}

  public async init() {
    this.logger.info(`PORT: ${this.settings.get('PORT')}`);
    this.logger.info('the application is initialized');

    this.logger.info('База данных инициализируется');
    const mongoUri = getConnectionString(
      this.settings.get('DB_USER'),
      this.settings.get('DB_PASSWORD'),
      this.settings.get('DB_HOST'),
      this.settings.get('DB_PORT'),
      this.settings.get('DB_NAME'),
    );

    await this.databaseClient.connect(mongoUri);
    this.logger.info('База данных инициализирована');
  }
}
