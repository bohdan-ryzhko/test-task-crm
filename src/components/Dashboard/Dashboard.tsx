import sass from "./Dashboard.module.scss";
import { DashboardNavigation } from "../DashboardNavigation/DashboardNavigation";
import { Logo } from "../Logo/Logo";
import { UserInfo } from "../UserInfo/UserInfo";
import { FC } from "react";
import { DashboardProps } from "../../interfaces/DashboardProps";

import { MdClose } from 'react-icons/md';

export const Dashboard: FC<DashboardProps> = ({ toggleMenu, setToggleMenu }) => {
	return (
		<>
			<div data-testid="dashboard-backdrop" onClick={() => setToggleMenu(prev => !prev)} className={toggleMenu ? sass.backdropActive : sass.backdrop}></div>
			<aside data-testid="dashboard-container" className={toggleMenu ? sass.dashboardActive : sass.dashboard}>
				<div className={sass.dashboardContainer}>
					<div className={sass.dashboardInner}>
						<button data-testid='close-button' onClick={() => setToggleMenu(prev => !prev)} className={sass.closeMenu}>
							<MdClose size={30}/>
						</button>
						<Logo />
						<DashboardNavigation />
						<UserInfo />
					</div>
				</div>
			</aside>
		</>
	)
}
