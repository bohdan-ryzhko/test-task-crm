import sass from "./MainContent.module.scss";
import { ContentTitle } from "../ContentTitle/ContentTitle";
import { ChangeEvent, FC, useState } from "react";
import { SearchInput } from "../SearchInput/SearchInput";
import { CustomersTable } from "../CustomersTable/CustomersTable";

import { customersTitles } from "../../data/customersTitles";
import { customers } from "../../data/customers";

import { getFilteredCustomers } from "../../services/getFilteredCustomers";

export const MainContent: FC = () => {
	//state filtered value
	const [searchValue, setSearchValue] = useState<string>("");

	// handle filtered value
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	}

	// search customers by company name
	const filteredCustomers = getFilteredCustomers(searchValue, customers);

	return (
		<main className={sass.mainContent}>
			<div className={sass.mainContainer}>
				<div className={sass.mainInner}>
					<div className={sass.mainContentTop}>
						<ContentTitle title="All Customers" subtitle="Active Members" />
						<SearchInput value={searchValue} onChange={handleChange} />
					</div>
				</div>
			</div>
			<div className={sass.customersBoard}>
				<CustomersTable customers={filteredCustomers} customersTitles={customersTitles} />
			</div>
		</main>
	)
}
