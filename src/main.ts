import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { cleanupOpenApiDoc } from 'nestjs-zod';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Girka')
    .setDescription('The Girka API description.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const documentFactory = () => cleanupOpenApiDoc(SwaggerModule.createDocument(app, config));

  SwaggerModule.setup('swagger', app, documentFactory, {
    jsonDocumentUrl: 'swagger/json',
  });

  app.use(
    '/reference',
    apiReference({
      content: documentFactory(),
      theme: 'deepSpace',
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
