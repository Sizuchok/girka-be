import { timestamp, uuid } from 'drizzle-orm/pg-core';

export const commonFields = {
  id: uuid().notNull().primaryKey().defaultRandom(),

  createdAt: timestamp({
    withTimezone: true,
    mode: 'date',
  })
    .defaultNow()
    .notNull(),

  updatedAt: timestamp({
    withTimezone: true,
    mode: 'date',
  })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
};
