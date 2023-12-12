import { Container } from 'inversify';
import { LoggerType } from '../core/logger/logger.type.js';
import { ConfigType, ConfigSchema } from '../config/config.type.js';
import { Component } from '../types/component.type.js';
import Application from './application.js';
import { Logger } from '../core/logger/logger.js';
import { Config } from '../config/config.js';
import { DatabaseClient } from '../core/database-client/database-client.type.js';
import { MongoClientService } from '../core/database-client/mongo-client.service.js';
import { ExceptionFilter } from '../core/http/exception-filter.type.js';
import { AppExceptionFilter } from '../core/http/exception-filter.js';

export function createApplicationContainer() {
  const applicationContainer = new Container();
  applicationContainer.bind<Application>(Component.Application).to(Application).inSingletonScope();
  applicationContainer.bind<LoggerType>(Component.Logger).to(Logger).inSingletonScope();
  applicationContainer.bind<ConfigType<ConfigSchema>>(Component.Config).to(Config).inSingletonScope();
  applicationContainer.bind<DatabaseClient>(Component.DatabaseClient).to(MongoClientService).inSingletonScope();
  applicationContainer.bind<ExceptionFilter>(Component.ExceptionFilter).to(AppExceptionFilter).inSingletonScope();

  return applicationContainer;
}
