import { FC } from "react";
import { navigationItems } from "../../data/navigation-items";
import { NavigationItemInterface } from "../../interfaces/NavigationItemInterface";
import { NavigationItem } from "../NavigationItem/NavigationItem";

export const DashboardNavigation: FC = () => {
	return (
		<nav>
			<ul>
				{
					navigationItems.map((item: NavigationItemInterface) =>
						<li key={item.id}>
							<NavigationItem item={item} />
						</li>
					)
				}
			</ul>
		</nav>
	)
}