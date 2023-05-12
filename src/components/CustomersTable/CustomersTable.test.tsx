import { render, screen } from '@testing-library/react';
import { CustomersTable } from './CustomersTable';
import { customersTitles } from '../../data/customersTitles';
import { CustomersInterface } from '../../interfaces/CustomersInterface';
import { CustomersTitlesInterface } from '../../interfaces/CustomersTitlesInterface';

describe('CustomersTable', () => {
	const mockCustomers: CustomersInterface[] = [
		{
			customerName: 'John Doe',
			company: 'Acme Inc.',
			phoneNumber: '+1234567890',
			email: 'johndoe@acme.com',
			country: 'USA',
			status: 'Active',
			id: '1',
		},
	];

	it('should have correct class on status column for mobile table data', () => {
		render(<CustomersTable customersTitles={customersTitles} customers={mockCustomers} />);

		const mobileTableRows = screen.getAllByRole('row');
		mobileTableRows.forEach((row) => {
			const statusCell = row.querySelectorAll('td')[5];
			if (statusCell) {
				expect(statusCell).toHaveClass('Active', { exact: false }); // проверяем, что у ячейки статуса есть класс "Active"
			}
		});
	});
});
