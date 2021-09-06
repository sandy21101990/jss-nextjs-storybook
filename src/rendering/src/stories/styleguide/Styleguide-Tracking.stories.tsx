import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideTracking from '../../components/styleguide/Styleguide-Tracking';

export default {
  title: 'Components/styleguide/Styleguide-Tracking',
  component: StyleguideTracking,
} as ComponentMeta<typeof StyleguideTracking>;

const Template: ComponentStory<typeof StyleguideTracking> = (args) => <StyleguideTracking {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-Tracking',
  },
};