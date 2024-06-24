import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import NewsCard from "./index";

const primaryNewsMock = {
  title: "Titulo teste",
  category: "Economia",
  type: "main",
  articleImageUrl: "https://picsum.photos/200/300",
};
const secondaryNewsMock = {
  title: "Titulo teste",
  category: "Economia",
  type: "secondary",
  articleImageUrl: "https://picsum.photos/200/300",
};
const baseNewsMock = {
  title: "Titulo teste",
  category: "Economia",
  type: "base-article",
  articleImageUrl: "https://picsum.photos/200/300",
};
const meta: Meta<typeof NewsCard> = {
  title: "Components/NewsCard",
  component: NewsCard,
};

export default meta;
type Story = StoryObj<typeof NewsCard>;

export const PrimaryNewsCard: Story = {
  args: {
    news: primaryNewsMock,
  },
};

export const SecondaryNewsCard: Story = {
  args: {
    news: secondaryNewsMock,
  },
};

export const BaseArticleCard: Story = {
  args: {
    news: baseNewsMock,
  },
};
