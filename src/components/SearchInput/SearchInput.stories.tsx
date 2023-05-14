import { ChangeEvent, useState } from "react";
import { SearchInput } from "./SearchInput";

export default {
	title: "Components/SearchInput",
	component: SearchInput,
};

export const Default = () => {
	const [searchValue, setSearchValue] = useState("");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	return (
		<SearchInput value={searchValue} onChange={handleChange} />
	);
};

export const WithInitialValue = () => {
	const [searchValue, setSearchValue] = useState("Initial value");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	return (
		<SearchInput value={searchValue} onChange={handleChange} />
	);
};
