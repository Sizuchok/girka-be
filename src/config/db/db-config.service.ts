import { DbConfig } from './db-config.schema';

export class DbConfigService {
  constructor(private readonly config: DbConfig) {}

  get dbUrl() {
    return this.config.DB_URL;
  }
}
