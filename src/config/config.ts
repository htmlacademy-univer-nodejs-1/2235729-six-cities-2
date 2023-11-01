import { config } from 'dotenv';
import { inject, injectable } from 'inversify';
import { configSchema } from './schema.js';
import { Component } from '../types/component.type.js';
import { ConfigSchema, ConfigType } from './config.type.js';
import { LoggerType } from '../core/logger/logger.type.js';

@injectable()
export class Config implements ConfigType<ConfigSchema> {
  private readonly config: ConfigSchema;

  constructor(
    @inject(Component.Logger) private readonly log: LoggerType
  ) {
    const configOutput = config();

    if (configOutput.error) {
      throw new Error('Ошибка при чтении .env файла');
    }

    configSchema.load({});
    configSchema.validate({ allowed: 'strict', output: this.log.info });

    this.config = configSchema.getProperties();
    this.log.info('.env файл успешно найден');
  }

  public get<T extends keyof ConfigSchema>(key: T): ConfigSchema[T] {
    return this.config[key];
  }
}
