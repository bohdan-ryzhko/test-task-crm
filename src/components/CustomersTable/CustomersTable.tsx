import sass from "./CustomersTable.module.scss";
import { CustomersInterface } from "../../interfaces/CustomersInterface";
import { CustomersTitlesInterface } from "../../interfaces/CustomersTitlesInterface";
import { FC } from "react";
import { CustomersTableProps } from "../../interfaces/CustomersTableProps";

export const CustomersTable:FC<CustomersTableProps> = ({ customersTitles, customers }) => {
	return (
		<table className={sass.customersTable}>
			<thead className={sass.customersHead}>
				<tr>
					{
						customersTitles.map((title: CustomersTitlesInterface) =>
							<th>{title.title}</th>)
					}
				</tr>
			</thead>
			<tbody className={sass.customersBody}>
				{
					customers.length === 0
						? <p>Not found</p>
						: (
							customers.map((customer: CustomersInterface) =>
								<tr>
									<td>{customer.customerName}</td>
									<td>{customer.company}</td>
									<td>{customer.phoneNumber}</td>
									<td>{customer.email}</td>
									<td>{customer.country}</td>
									<td>
										<p className={customer.status === "Active"
											? sass.Active
											: sass.Inactive
										}>{customer.status}</p>
									</td>
								</tr>
							)
						)
				}
			</tbody>
		</table>
	)
}
