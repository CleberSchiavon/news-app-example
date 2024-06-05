import { Test, TestingModule } from '@nestjs/testing';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewsMock } from '~/mocks/newsMock';
import { NewsType } from 'types/News';

describe('NewsController', () => {
  let controller: NewsController;
  let service: NewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsController],
      providers: [NewsService],
    }).compile();

    controller = module.get<NewsController>(NewsController);
    service = module.get<NewsService>(NewsService);
  });

  it('should return all news', async () => {
    const news = await controller.getAllNews();
    expect(news).toEqual(NewsMock);
  });

  it('should return main news', async () => {
    const mainNews = await controller.getMainNews();
    expect(mainNews).toEqual(
      NewsMock.filter((newsItem) => newsItem.type === NewsType.MAIN),
    );
  });

  it('should return secondary news', async () => {
    const secondaryNews = await controller.getSecondaryNews();
    expect(secondaryNews).toEqual(
      NewsMock.filter((newsItem) => newsItem.type === NewsType.SECONDARY),
    );
  });

  it('should return specific news', async () => {
    const specificNews = await controller.getSpecificNews(
      '4c28b43d-1a1f-409c-adc8-101afa60d713',
    );
    expect(specificNews).toEqual(
      NewsMock.find(
        (newsItem) => newsItem.id === '4c28b43d-1a1f-409c-adc8-101afa60d713',
      ),
    );
  });
});
