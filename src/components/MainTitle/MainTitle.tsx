import sass from "./MainTitle.module.scss";
import { FC } from "react";
import { useUserContext } from "../../hooks/useUserContext";

export const MainTitle: FC = () => {
	const { name } = useUserContext();
	return (
		<h1 className={sass.title}>Hello, {name} 👋🏼</h1>
	)
}
