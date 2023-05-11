import sass from "./Logo.module.scss";
import { FC } from "react";
import logo from "../../images/dashboard/logo.svg";
import { sizeLogo } from "../../constants/sizeLogo";

export const Logo: FC = () => {
	return (
		<div className={sass.logo}>
			<a className={sass.logoLink} href="/">
				<div className={sass.logoImg}>
					<img width={sizeLogo.width} height={sizeLogo.height} src={logo} alt="Logo" />
				</div>
				<span className={sass.logoName}>Dashboard</span>
			</a>
		</div>
	)
}
