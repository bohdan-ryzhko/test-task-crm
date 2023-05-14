import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DashboardNavigation } from './DashboardNavigation';

export default {
  title: 'Components/DashboardNavigation',
  component: DashboardNavigation,
} as Meta;

const Template: Story = (args) => <DashboardNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {};
