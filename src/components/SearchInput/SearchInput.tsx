import sass from "./SearchInput.module.scss";
import { FC } from "react";
import { CiSearch } from 'react-icons/ci';
import { sizeSearchIcon } from "../../constants/sizeSearchIcon";
import { SearchInputProps } from "../../interfaces/SearchInputProps";

export const SearchInput: FC<SearchInputProps> = ({ onChange }) => {
	return (
		<div className={sass.searchInput}>
			<CiSearch size={sizeSearchIcon.size} />
			<input type="text" placeholder="Search" onChange={onChange} />
		</div>
	)
};
