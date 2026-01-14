import { Inject } from '@nestjs/common';
import { injectionToken } from '../helpers/injection-token.helper';

export const InjectDb = () => Inject(injectionToken.drizzle);
