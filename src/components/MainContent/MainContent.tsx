import sass from "./MainContent.module.scss";
import { ContentTitle } from "../ContentTitle/ContentTitle";
import { FC } from "react";
import { SearchInput } from "../SearchInput/SearchInput";
import { CustomersTable } from "../CustomersTable/CustomersTable";

import { customersTitles } from "../../data/customersTitles";
import { customers } from "../../data/customers";


export const MainContent: FC = () => {
	return (
		<main className={sass.mainContent}>
			<div className={sass.mainContainer}>
				<div className={sass.mainInner}>
					<div className={sass.mainContentTop}>
						<ContentTitle title="All Customers" subtitle="Active Members" />
						<SearchInput />
					</div>
				</div>
			</div>
			<div className={sass.customersBoard}>
				<CustomersTable customers={customers} customersTitles={customersTitles} />
			</div>
		</main>
	)
}
