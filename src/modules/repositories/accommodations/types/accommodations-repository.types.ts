import { accommodations } from '../../../../db/schemas';

export type CreateAccommodation = Pick<
  typeof accommodations.$inferInsert,
  'title' | 'capacity' | 'price' | 'type' | 'rating' | 'description'
>;
