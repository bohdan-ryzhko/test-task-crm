import { Meta } from '@storybook/react';
import { ContentTitle } from './ContentTitle';

export default {
	title: 'Components/ContentTitle',
	component: ContentTitle,
} as Meta;

export const Default = () => (
	<ContentTitle title="This is Title" subtitle="Subtitle" />
);

export const LongTitle = () => (
	<ContentTitle
		title="This is a very long title that will be truncated"
		subtitle="Subtitle"
	/>
);
