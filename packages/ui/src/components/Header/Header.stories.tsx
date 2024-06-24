import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { FiArrowLeft } from "react-icons/fi";


import {HeaderComponent} from './index'

export default {
  title: 'Components/Header',
  component: HeaderComponent,
} as Meta<typeof HeaderComponent>

export const Default: StoryFn<typeof HeaderComponent> = (args) => <HeaderComponent {...args} navText="News App" />

export const WithIcon: StoryFn<typeof HeaderComponent> = (args) => <HeaderComponent {...args} icon={<FiArrowLeft color="white" size={20} />} onClickIcon={() => console.log('Oi')} navText="News App" />
