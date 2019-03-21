import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

import { AppModule } from './app.module';

async function bootstrap() {
  const server = express();
  // const app = await NestFactory.create(AppModule);
  // await app.listen(AppModule.nestServerPort);

  const app = await NestFactory.create(AppModule, server);

  const options = new DocumentBuilder()
    .setTitle('Api metadata')
    .setDescription('Api metadata specification')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  server.get('/swagger/json', (req, res) => {
    res.json(document);
  });

  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}

bootstrap();
