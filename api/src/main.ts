import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 
}
  app.setGlobalPrefix('api');
  app.enableCors(corsOptions);
  await app.listen(3001);
}
bootstrap();
