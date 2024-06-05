import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { NewsService } from './news.service';

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @ApiResponse({ status: HttpStatus.OK, description: 'Returns all news' })
  async getAllNews() {
    return this.newsService.getAllNews();
  }

  @Get('/main')
  @ApiResponse({ status: HttpStatus.OK, description: 'Returns main news' })
  async getMainNews() {
    return this.newsService.getMainNews();
  }

  @Get('/secondary')
  @ApiResponse({ status: HttpStatus.OK, description: 'Returns secondary news' })
  async getSecondaryNews() {
    return this.newsService.getSecondaryNews();
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns specific news by ID',
  })
  async getSpecificNews(@Param('id') id: string) {
    const news = await this.newsService.getSpecificNews(id);
    if (news) {
      return news;
    } else {
      throw new HttpException('News not found', HttpStatus.NOT_FOUND);
    }
  }
}
