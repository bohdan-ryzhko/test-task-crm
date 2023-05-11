import { DashboardNavigation } from "../DashboardNavigation/DashboardNavigation";
import { Logo } from "../Logo/Logo";
import { UserInfo } from "../UserInfo/UserInfo";
import sass from "./Dashboard.module.scss";
import { FC } from "react";

export const Dashboard: FC = () => {
	return (
		<aside className={sass.dashboard}>
			<div className={sass.dashboardContainer}>
				<div className={sass.dashboardInner}>
					<Logo />
					<DashboardNavigation />
					<UserInfo />
				</div>
			</div>
		</aside>
	)
}
