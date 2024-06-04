import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import environmentConfig from './config/environment.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environmentConfig],
      cache: true,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
