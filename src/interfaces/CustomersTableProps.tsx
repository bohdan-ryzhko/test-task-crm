import { CustomersInterface } from "./CustomersInterface";
import { CustomersTitlesInterface } from "./CustomersTitlesInterface";

export interface CustomersTableProps {
	customersTitles: CustomersTitlesInterface[];
	customers: CustomersInterface[];
}