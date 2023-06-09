import sass from "./NavigationItem.module.scss";
import { FC } from "react";
import { NavigationItemProps } from "../../interfaces/NavigationItemProps";

export const NavigationItem: FC<NavigationItemProps> = ({ item }) => {
	return (
		<a className={item.active ? sass.navigationLinkActive : sass.navigationLink} href="/">
			<item.icon style={{ marginRight: 16 }} />
			<p>{item.text}</p>
		</a>
	)
}
