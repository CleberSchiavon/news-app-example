import { NewsMock } from 'mocks/newsMock';
import { NewsService } from './news.service';
import { Test } from '@nestjs/testing';
import { NewsType } from 'types/News';

describe('NewsService', () => {
  let newsService: NewsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NewsService],
    }).compile();

    newsService = module.get<NewsService>(NewsService);
  });

  it('should return all news', async () => {
    const news = await newsService.getAllNews();
    expect(news).toEqual(NewsMock);
  });

  it('should return main news', async () => {
    const mainNews = await newsService.getMainNews();
    expect(mainNews).toEqual(
      NewsMock.filter((newsItem) => newsItem.type === NewsType.MAIN),
    );
  });

  it('should return secondary news', async () => {
    const secondaryNews = await newsService.getSecondaryNews();
    expect(secondaryNews).toEqual(
      NewsMock.filter((newsItem) => newsItem.type === NewsType.SECONDARY),
    );
  });

  it('should return specific news', async () => {
    const specificNews = await newsService.getSpecificNews(
      '4c28b43d-1a1f-409c-adc8-101afa60d713',
    );
    expect(specificNews).toEqual(
      NewsMock.find(
        (newsItem) => newsItem.id === '4c28b43d-1a1f-409c-adc8-101afa60d713',
      ),
    );
  });
});
