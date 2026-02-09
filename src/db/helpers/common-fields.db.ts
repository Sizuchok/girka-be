import { timestamp, uuid } from 'drizzle-orm/pg-core';

export const commonFields = {
  id: uuid().notNull().primaryKey().defaultRandom(),

  createdAt: timestamp({
    withTimezone: true,
    mode: 'string',
  })
    .defaultNow()
    .notNull(),

  updatedAt: timestamp({
    withTimezone: true,
    mode: 'string',
  })
    .defaultNow()
    .$onUpdate(() => new Date().toISOString())
    .notNull(),
};
