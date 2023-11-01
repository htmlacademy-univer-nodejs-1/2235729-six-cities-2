import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { LoggerType } from '../core/logger/logger.type.js';
import { Component } from '../types/component.type.js';
import { ConfigType, ConfigSchema } from '../config/config.type';


@injectable()
export default class Application {
  constructor(
    @inject(Component.Logger) private readonly logger: LoggerType,
    @inject(Component.Config) private readonly settings: ConfigType<ConfigSchema>,
  ) {}

  public async init() {
    this.logger.info(`PORT: ${this.settings.get('PORT')}`);
    this.logger.info('the application is initialized');
  }
}
