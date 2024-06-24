import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

import { AdBanner } from './index';
import AdImage from '../../assets/images/ad-image.jpg'

const meta: Meta<typeof AdBanner> = {
  title: "Components/AdBanner",
  component: AdBanner,
};

export default meta;
type Story = StoryObj<typeof AdBanner>;

export const AdBannerWithoutContent: Story = {
  args: {
    onClickBanner: undefined
  },
};

export const AddBannerWithContent:Story = {
  args: {
    content: <img src={AdImage} />,
    onClickBanner: undefined
  }
}

export const AddBannerWithContentAndClick:Story = {
  args: {
    content: <img src={AdImage} />,
    onClickBanner: () => console.log('Oi')
  }
}
