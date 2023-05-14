import { Story, Meta } from '@storybook/react';
import { Dashboard } from './Dashboard';
import { DashboardProps } from '../../interfaces/DashboardProps';

export default {
	title: 'Components/Dashboard',
	component: Dashboard,
} as Meta;

const Template: Story<DashboardProps> = (args) => <Dashboard {...args} />;

export const Default = Template.bind({});
Default.args = {
	toggleMenu: false,
	setToggleMenu: () => {},
};

export const Active = Template.bind({});
Active.args = {
	toggleMenu: true,
	setToggleMenu: () => {},
};
