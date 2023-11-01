import 'reflect-metadata';
import { Logger } from './core/logger/logger.js';
import { LoggerType } from './core/logger/logger.type.js';
import { Component } from './types/component.type.js';
import Application from './app/application.js';
import { ConfigType, ConfigSchema } from './config/config.type';
import { Config } from './config/config.js';
import { Container } from 'inversify';


const container = new Container();
container.bind<Application>(Component.Application).to(Application).inSingletonScope();
container.bind<LoggerType>(Component.Logger).to(Logger).inSingletonScope();
container.bind<ConfigType<ConfigSchema>>(Component.Config).to(Config).inSingletonScope();

const application = container.get<Application>(Component.Application);
await application.init();
