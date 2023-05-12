import sass from "./SearchInput.module.scss";
import { FC } from "react";
import { CiSearch } from 'react-icons/ci';
import { sizeSearchIcon } from "../../constants/sizeSearchIcon";

export const SearchInput: FC = () => {
	return (
		<div className={sass.searchInput}>
			<CiSearch size={sizeSearchIcon.size} />
			<input type="text" placeholder="Search"/>
		</div>
	)
};
