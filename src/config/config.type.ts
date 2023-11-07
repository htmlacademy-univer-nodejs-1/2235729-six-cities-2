export type ConfigSchema = {
  PORT: number;
  SALT: string;
  DB_HOST: string;
}

export type ConfigType<U> = {
  get<T extends keyof U>(key: T): U[T];
}
