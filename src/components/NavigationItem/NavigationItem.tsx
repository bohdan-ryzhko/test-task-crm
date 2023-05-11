import { FC } from "react";
import { NavigationItemInterface } from "../../interfaces/NavigationItemInterface";
import { RiArrowRightSLine } from "react-icons/ri";
import { secondaryColor } from "../../constants/setColors";

interface NavigationItemProps {
  item: NavigationItemInterface;
}

export const NavigationItem: FC<NavigationItemProps> = ({ item }) => {
	return (
		<>
			<item.icon />
			<p>{item.text}</p>
			<RiArrowRightSLine color={secondaryColor} />
		</>
	)
}
