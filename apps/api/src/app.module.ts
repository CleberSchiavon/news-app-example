import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import environmentConfig from './config/environment.config';
import { NewsController } from './modules/news/news.controller';
import { NewsService } from './modules/news/news.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environmentConfig],
      cache: true,
      isGlobal: true,
    }),
  ],
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
