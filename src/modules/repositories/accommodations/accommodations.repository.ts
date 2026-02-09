import { Injectable } from '@nestjs/common';
import { InjectDb } from '../../../common/decorators/inject-db.decorator';
import { accommodations } from '../../../db/schemas';
import { eq } from 'drizzle-orm';
import { DrizzleDb } from '../../../common/modules/drizzle/types/drizzle-module.types';
import { CreateAccommodation } from './types/accommodations-repository.types';

@Injectable()
export class AccommodationsRepository {
  constructor(@InjectDb() private readonly db: DrizzleDb) {}

  public async createAccommodation(data: CreateAccommodation) {
    const inserted = await this.db.insert(accommodations).values(data).returning({
      id: accommodations.id,
    });

    return inserted[0];
  }

  public async retrieveAccommodation(id: string) {
    return this.db.query.accommodations.findFirst({
      where: eq(accommodations.id, id),
    });
  }
}
