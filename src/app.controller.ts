import { Controller, Get, Inject } from '@nestjs/common';
import { DrizzleDb } from './modules/drizzle/types';
import { accommodations } from './db/schemas';
import { and, eq, SQL } from 'drizzle-orm';
import { TxCallback, TxContext } from './modules/drizzle/types';
import { IN_TOKEN } from './common/const';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(@Inject(IN_TOKEN.DRIZZLE) private readonly db: DrizzleDb) {}

  // async onModuleInit() {
  //   await migrate(this.db, {
  //     migrationsFolder: join(process.cwd(), 'src/db/migrations'),
  //   });
  // }

  @Get()
  async getHello() {
    const kek = await this.db.transaction(async (tx) => {
      await this.updateCottage(
        {
          id: 'id',
        },
        {
          capacity: 1,
        },
        tx,
      );

      return this.findById('id', tx);
    });

    const txQuery: TxCallback = async (tx) => {
      await tx.setTransaction({ isolationLevel: 'serializable' });

      await this.updateCottage(
        {
          id: 'id',
        },
        {
          capacity: 1,
        },
        tx,
      );

      return tx.select().from(accommodations).where(eq(accommodations.id, 'id'));
    };

    const some = await this.executeTx(txQuery);
  }

  async findById(id: string, tx: TxContext) {
    const context = tx ?? this.db;
    const result = await context
      .select()
      .from(accommodations)
      .where(eq(accommodations.id, id))
      .execute();

    return result;
  }

  async updateCottage(
    where: { id: string; isAutoGen?: boolean; avgRating?: number },
    set: { capacity: number },
    tx: TxContext,
  ) {
    const context: DrizzleDb | TxContext = tx ?? this.db;

    const filters: SQL[] = [];

    if (where.id) {
      filters.push(eq(accommodations.id, where.id));
    }

    await context
      .update(accommodations)
      .set(set)
      .where(and(...filters));
  }

  async executeTx(tx: TxCallback) {
    return await this.db.transaction(tx);
  }
}
