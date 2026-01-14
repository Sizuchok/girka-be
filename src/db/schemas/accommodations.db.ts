import { pgEnum, pgTable, real, smallint, text, varchar } from 'drizzle-orm/pg-core';
import { commonFields } from '../helpers/common-fields.db';

export const accommodationType = pgEnum('accommodation-type', ['cabin', 'room']);

export const accommodations = pgTable('cottages', {
  ...commonFields,
  title: varchar().notNull(),
  type: accommodationType().notNull(),
  capacity: smallint().notNull(),
  price: smallint().notNull(),
  rating: real(),
  description: text().notNull(),
  photos: varchar().array().notNull(),
});
