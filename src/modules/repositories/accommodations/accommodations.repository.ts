import { Injectable } from '@nestjs/common';
import { InjectDb } from '../../../common/decorators/inject-db.decorator';
import { accommodations } from '../../../db/schemas';
import { eq } from 'drizzle-orm';
import { DrizzleDb } from '../../../common/modules/drizzle/types/drizzle-module.types';

@Injectable()
export class AccommodationsRepository {
  constructor(@InjectDb() private readonly db: DrizzleDb) {}

  public async findById(id: string) {
    return this.db.query.accommodations.findFirst({
      where: eq(accommodations.id, id),
    });
  }
}
