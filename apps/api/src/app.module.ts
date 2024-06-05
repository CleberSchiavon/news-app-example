import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import environmentConfig from './config/environment.config';
import { NewsController } from './modules/news/news.controller';
import { NewsService } from './modules/news/news.service';
import { HTTPLoggerInterceptor } from './middlewares/http.logger.middleware';
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HTTPLoggerInterceptor).forRoutes('*');
  }
}
