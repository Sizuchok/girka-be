import {
  check,
  integer,
  pgEnum,
  pgTable,
  real,
  smallint,
  text,
  varchar,
} from 'drizzle-orm/pg-core';
import { commonFields } from '../helpers/common-fields.db';
import { sql } from 'drizzle-orm';

export const AccommodationType = {
  Cabin: 'Cabin',
  Room: 'Room',
} as const;

export const accommodationType = pgEnum('accommodation-type', [
  AccommodationType.Cabin,
  AccommodationType.Room,
]);

export const accommodations = pgTable(
  'accommodations',
  {
    ...commonFields,
    title: varchar({ length: 100 }).notNull(),
    type: accommodationType().notNull(),
    capacity: smallint().notNull(),
    price: integer().notNull(),
    rating: real(),
    description: text().notNull(),
    photos: varchar().array().notNull(),
  },
  (table) => [
    check('min_title_length', sql`char_length(${table.title}) >= 3`),
    check('capacity_positive', sql`${table.capacity} > 1 AND ${table.capacity} <= 100`),
    check('price_positive', sql`${table.price} > 0`),
    check(
      'rating_valid',
      sql`${table.rating} IS NULL OR (${table.rating} >= 0 AND ${table.rating} <= 5)`,
    ),
  ],
);
