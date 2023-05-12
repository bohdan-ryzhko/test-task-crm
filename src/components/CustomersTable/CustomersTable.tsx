import sass from "./CustomersTable.module.scss";
import { CustomersInterface } from "../../interfaces/CustomersInterface";
import { CustomersTitlesInterface } from "../../interfaces/CustomersTitlesInterface";
import { FC } from "react";
import { CustomersTableProps } from "../../interfaces/CustomersTableProps";

import { customersTitlesMobile } from "../../data/customersTitles";

export const CustomersTable:FC<CustomersTableProps> = ({ customersTitles, customers }) => {
	return (
		<>
			<table className={sass.customersTable}>
				<thead className={sass.customersHead}>
					<tr>
						{
							customersTitles.map((title: CustomersTitlesInterface) =>
								<th key={title.id} >{title.title}</th>)
						}
					</tr>
				</thead>
				<tbody className={sass.customersBody}>
					{
						customers.length === 0
							? <p className={sass.notFound}>Not found</p>
							: (
								customers.map((customer: CustomersInterface) =>
									<tr key={customer.id}>
										<td>{customer.customerName}</td>
										<td>{customer.company}</td>
										<td>{customer.phoneNumber}</td>
										<td>{customer.email}</td>
										<td>{customer.country}</td>
										<td className={customer.status === "Active" ? sass.Active : sass.Inactive}></td>
									</tr>
								)
							)
					}
				</tbody>
			</table>

			<table className={sass.customersTableMobile}>
					<thead className={sass.customersHead}>
					<tr>
						{
							customersTitlesMobile.map((title: CustomersTitlesInterface) =>
								<th key={title.id} >{title.title}</th>)
						}
					</tr>
				</thead>
				<tbody className={sass.customersBody}>
					{
						customers.length === 0
							? <p className={sass.notFound}>Not found</p>
							: (
								customers.map((customer: CustomersInterface) =>
									<tr className={customer.status === "Active"
											? sass.statusActive
											: sass.status}
										key={customer.id}>
										<td>{customer.customerName}</td>
										<td>{customer.company}</td>
										<td>{customer.email}</td>
									</tr>
								)
							)
					}
				</tbody>
			</table>
		</>
	)
}
