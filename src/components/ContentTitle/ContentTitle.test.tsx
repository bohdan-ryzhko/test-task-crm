import { render, screen } from '@testing-library/react';
import { ContentTitle } from './ContentTitle';

describe('ContentTitle', () => {
	it('renders the title and subtitle', () => {
		const title = 'This is Title';
		const subtitle = 'Subtitle';

		render(<ContentTitle title={title} subtitle={subtitle} />);

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(subtitle)).toBeInTheDocument();
	});
});
