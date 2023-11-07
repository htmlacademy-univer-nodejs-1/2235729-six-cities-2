import convict from 'convict';
import validator from 'convict-format-with-validator';
import { ConfigSchema } from './config.type';

convict.addFormats(validator);

export const configSchema = convict<ConfigSchema>({
  PORT: {
    doc: 'Номер порта, на котором приложение ожидает подключений',
    format: 'port',
    env: 'PORT',
    default: 1337
  },
  SALT: {
    doc: 'Соль',
    format: String,
    env: 'SALT',
    default: '0'
  },
  DB_HOST: {
    doc: 'Адрес сервера',
    format: 'ipaddress',
    env: 'DB_HOST',
    default: '127.0.0.1'
  }
});
