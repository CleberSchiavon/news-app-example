export enum NewsType {
  MAIN = "main",
  SECONDARY = "secondary",
}
export type News = {
  id: string;
  title: string;
  description: string;
  category: string;
  type: NewsType;
  content: string;
  publishDate: string;
  writer: string;
  articleImageUrl: string;
};
