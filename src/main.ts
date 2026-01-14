import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { apiConfig } from './configs/api.config';
import { runMigrations } from './db/migrate';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // if (apiConfig.isRemoteEnv) {
  //   await runMigrations();
  // }

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
