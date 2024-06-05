import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsString,
  IsUUID,
  IsUrl,
} from 'class-validator';

export enum NewsType {
  MAIN = 'main',
  SECONDARY = 'secondary',
}

export class News {
  @ApiProperty({
    description: 'Unique identifier of a News (UUID4)',
    example: '4c28b43d-1a1f-409c-adc8-101afa60d713',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID(4)
  id: string;

  @ApiProperty({
    description: 'Title of a News',
    example: 'Breaking News',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Description of a News',
    example: 'This is a breaking news',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Category of a News',
    example: 'Politics',
  })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({
    description: 'Type of a News',
    example: NewsType.MAIN,
  })
  @IsString()
  @IsNotEmpty()
  type: NewsType;

  @ApiProperty({
    description: 'Content of a News',
    example: 'This is the content of the news',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    description: 'Publish date of a News',
    example: '2022-01-01T00:00:00.000Z',
  })
  @IsString()
  @IsNotEmpty()
  @IsDateString()
  publishDate: string;

  @ApiProperty({
    description: 'Writer of a News',
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  writer: string;

  @ApiProperty({
    description: 'Image URL of a News',
    example:
      'https://www.bloomberg.com/content/dam/bloomberg/pt/articles/2021-03-10/brazil-economy-growth-rate-gdp-forecast.jpg',
  })
  @IsString()
  @IsUrl()
  articleImageUrl: string;
}
