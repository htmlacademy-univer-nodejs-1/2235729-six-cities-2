export type ConfigSchema = {
  PORT: number;
  SALT: string;
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_PORT: string;
  DB_NAME: string;
}

export type ConfigType<U> = {
  get<T extends keyof U>(key: T): U[T];
}
