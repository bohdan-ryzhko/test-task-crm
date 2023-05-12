import { Status } from "../types/Status";

export interface CustomersInterface {
	customerName: string,
	company: string,
	phoneNumber: string,
	email: string,
	country: string,
	status: Status,
	id: string
}
