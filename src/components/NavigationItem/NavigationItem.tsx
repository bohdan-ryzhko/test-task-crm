import sass from "./NavigationItem.module.scss";
import { FC } from "react";
import { NavigationItemInterface } from "../../interfaces/NavigationItemInterface";

interface NavigationItemProps {
  item: NavigationItemInterface;
}

export const NavigationItem: FC<NavigationItemProps> = ({ item }) => {
	return (
		<a className={item.active ? sass.navigationLinkActive : sass.navigationLink} href="/">
			<item.icon style={{ marginRight: 16 }} />
			<p>{item.text}</p>
		</a>
	)
}
