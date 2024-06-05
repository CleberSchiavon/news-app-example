import { Injectable } from '@nestjs/common';
import { News, NewsType } from '@repo/types';
import { NewsMock } from '~/mocks/newsMock';

@Injectable()
export class NewsService {
  async getAllNews(): Promise<News[]> {
    return NewsMock;
  }

  async getMainNews(): Promise<News[]> {
    return this.getAllNews().then((news) =>
      news.filter((newsItem) => newsItem.type === NewsType.MAIN),
    );
  }

  async getSecondaryNews(): Promise<News[]> {
    return this.getAllNews().then((news) =>
      news.filter((newsItem) => newsItem.type === NewsType.SECONDARY),
    );
  }

  async getSpecificNews(id: string): Promise<News> {
    const news = await this.getAllNews().then((news) =>
      news.find((newsItem) => newsItem.id === id),
    );
    return news;
  }
}
