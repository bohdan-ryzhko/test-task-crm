import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { ContentWrapper } from './ContentWrapper';
import { ContentWrapperProps } from '../../interfaces/ContentWrapperProps';

export default {
	title: 'Components/ContentWrapper',
	component: ContentWrapper,
	argTypes: {
		setToggleMenu: { action: 'setToggleMenu' },
	},
} as Meta;

const Template: Story<ContentWrapperProps> = (args) => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return <ContentWrapper {...args} setToggleMenu={setToggleMenu} />;
};

export const Default = Template.bind({});
Default.args = {
	children: <div>Somethink children...</div>,
};
