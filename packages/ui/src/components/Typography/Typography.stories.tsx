import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

import Typography from './index';

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const TypographyExample: Story = {
  args: {
    text: 'Typography Component'
},
};

