import { CustomersInterface } from "../interfaces/CustomersInterface";

export const getFilteredCustomers = (filteredValue: string, filteredArray: CustomersInterface[]) => {
	const normalizeFilter = filteredValue.toLowerCase();
	return filteredArray.filter((customer: CustomersInterface) =>
		customer.company.toLowerCase().includes(normalizeFilter));
}