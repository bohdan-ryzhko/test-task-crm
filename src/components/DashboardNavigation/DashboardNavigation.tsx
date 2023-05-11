import sass from "./DashboardNavigation.module.scss";
import { FC } from "react";
import { navigationItems } from "../../data/navigation-items";
import { NavigationItemInterface } from "../../interfaces/NavigationItemInterface";
import { NavigationItem } from "../NavigationItem/NavigationItem";

export const DashboardNavigation: FC = () => {
	return (
		<nav className={sass.navigation}>
			<ul className={sass.navigationList}>
				{
					navigationItems.map((item: NavigationItemInterface) =>
						<li
							className={sass.navigationItem}
							key={item.id}>
							<NavigationItem item={item} />
						</li>
					)
				}
			</ul>
		</nav>
	)
}
