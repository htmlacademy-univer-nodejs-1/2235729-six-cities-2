import { Container } from 'inversify';
import { LoggerType } from '../core/logger/logger.type';
import { ConfigType, ConfigSchema } from '../config/config.type';
import { Component } from '../types/component.type';
import Application from './application.js';
import { Logger } from '../core/logger/logger.js';
import { Config } from '../config/config.js';
import { DatabaseClient } from '../core/database-client/database-client.type';
import { MongoClientService } from '../core/database-client/mongo-client.service';

export function createApplicationContainer() {
  const applicationContainer = new Container();
  applicationContainer.bind<Application>(Component.Application).to(Application).inSingletonScope();
  applicationContainer.bind<LoggerType>(Component.Logger).to(Logger).inSingletonScope();
  applicationContainer.bind<ConfigType<ConfigSchema>>(Component.Config).to(Config).inSingletonScope();
  applicationContainer.bind<DatabaseClient>(Component.DatabaseClient).to(MongoClientService).inSingletonScope();

  return applicationContainer;
}
