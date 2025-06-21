import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS TRPC')
    .setDescription('NestJS TRPC API description')
    .setVersion('1.0')
    .addTag('NestJS TRPC')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 1104);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
