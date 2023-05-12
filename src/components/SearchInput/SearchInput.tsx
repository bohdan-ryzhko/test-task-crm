import sass from "./SearchInput.module.scss";
import { ChangeEvent, FC } from "react";
import { CiSearch } from 'react-icons/ci';
import { sizeSearchIcon } from "../../constants/sizeSearchIcon";

interface SearchInputProps {
	value: string,
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	
}

export const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
	return (
		<div className={sass.searchInput}>
			<CiSearch size={sizeSearchIcon.size} />
			<input type="text" placeholder="Search" value={value} onChange={onChange} />
		</div>
	)
};
