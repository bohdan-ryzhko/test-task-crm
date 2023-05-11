import sass from "./NavigationItem.module.scss";
import { FC } from "react";
import { NavigationItemInterface } from "../../interfaces/NavigationItemInterface";
import { RiArrowRightSLine } from "react-icons/ri";
import { secondaryColor } from "../../constants/setColors";

interface NavigationItemProps {
  item: NavigationItemInterface;
}

export const NavigationItem: FC<NavigationItemProps> = ({ item }) => {
	return (
		<a className={item.active ? sass.navigationLinkActive : sass.navigationLink} href="/">
			<item.icon style={{ marginRight: 16 }} />
			<p>{item.text}</p>
			<RiArrowRightSLine style={{ marginLeft: "auto" }} color={secondaryColor} />
		</a>
	)
}
