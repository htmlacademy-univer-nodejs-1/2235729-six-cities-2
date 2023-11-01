import { LoggerType } from './logger.type';
import { Logger as PinoLogger, pino } from 'pino';
import { injectable } from 'inversify';

@injectable()
export class Logger implements LoggerType {
  private readonly logger: PinoLogger;

  constructor() {
    this.logger = pino();
    this.logger.info('logger initialized');

  }

  public debug(message: string, ...args: unknown[]): void {
    this.logger.debug(message, ...args);
  }

  public error(message: string, ...args: unknown[]): void {
    this.logger.error(message, ...args);
  }

  public info(message: string, ...args: unknown[]): void {
    this.logger.info(message, ...args);
  }

  public warn(message: string, ...args: unknown[]): void {
    this.logger.warn(message, ...args);
  }
}
