export type DatabaseClient = {
  connect(uri: string): Promise<void>;
  disconnect(): Promise<void>;
}
