import sass from "./ContentTitle.module.scss";
import { FC } from "react";
import { ContentTitleProps } from "../../interfaces/ContentTitleProps";

export const ContentTitle: FC<ContentTitleProps> = ({ title, subtitle }) => {
	return (
		<div>
			<h2 className={sass.title}>{title}</h2>
			<span className={sass.subtitle}>{subtitle}</span>
		</div>
	)
}
