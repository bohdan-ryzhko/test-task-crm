import { ReactComponent as icon1 } from "../images/dashboard-navigation/icon-1.svg";
import { ReactComponent as icon2 } from "../images/dashboard-navigation/icon-2.svg";
import { ReactComponent as icon3 } from "../images/dashboard-navigation/icon-3.svg";
import { ReactComponent as icon4 } from "../images/dashboard-navigation/icon-4.svg";
import { ReactComponent as icon5 } from "../images/dashboard-navigation/icon-5.svg";
import { ReactComponent as icon6 } from "../images/dashboard-navigation/icon-6.svg";

import { NavigationItemInterface } from "../interfaces/NavigationItemInterface";

export const navigationItems: NavigationItemInterface [] = [
	{ icon: icon1, text: "Dashboard", id: "id-01", active: false },
	{ icon: icon2, text: "Product", id: "id-02", active: false },
	{ icon: icon3, text: "Customers", id: "id-03", active: true },
	{ icon: icon4, text: "Income", id: "id-04", active: false },
	{ icon: icon5, text: "Promote", id: "id-05", active: false },
	{ icon: icon6, text: "Help", id: "id-06", active: false },
];
