import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppLogger } from './shared/utils/AppLogger';
import { LoggerReturn, LoggerTypes } from './types/Http/Logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('News Api Swagger')
    .setDescription('Bem vindo a documentação dessa API no Swagger!')
    .setVersion('1.0')
    .setContact(
      'Cleber Henrique',
      'https://github.com/cleberschiavon',
      'cleberschiavon@outlook.com',
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  app.enableCors();
  const configService = app.get(ConfigService);
  const apiPort = configService.get<number>('port');
  await app
    .listen(apiPort || 3002)
    .then(() =>
      AppLogger({
        type: LoggerTypes.SERVER,
        logReturn: LoggerReturn.SUCCESS,
        logMessage: `Server is running on port ${apiPort}.`,
      }),
    )
    .catch((error) =>
      AppLogger({
        type: LoggerTypes.SERVER,
        logReturn: LoggerReturn.ERROR,
        logMessage: `Server error when try to run on port ${apiPort}. ${error}`,
      }),
    );
}
bootstrap();
