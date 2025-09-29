import { timestamp, uuid } from 'drizzle-orm/pg-core';

export const commonFields = {
  id: uuid().notNull().primaryKey().defaultRandom(),
  createdAt: timestamp({
    withTimezone: true,
    mode: 'date',
  }),
  updatedAt: timestamp({
    withTimezone: true,
    mode: 'date',
  }).$onUpdate(() => new Date()),
};
