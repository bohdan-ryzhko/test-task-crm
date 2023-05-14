import { Meta, Story } from '@storybook/react';
import { MainContent } from './MainContent';

export default {
  component: MainContent,
  title: 'Components/MainContent',
} as Meta;

const Template: Story = () => <MainContent />;

export const Default = Template.bind({});
