import { NodePgClient, NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../../../../db/schemas';

export type DrizzleDb = NodePgDatabase<typeof schema> & {
  $client: NodePgClient;
};
