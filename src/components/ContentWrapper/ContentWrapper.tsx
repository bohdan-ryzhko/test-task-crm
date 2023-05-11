import sass from "./ContentWrapper.module.scss";
import { FC } from "react";
import { ContentWrapperProps } from "../../interfaces/ContentWrapperProps";

export const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
	return (
		<section className={sass.section}>
			{children}
		</section>
	)
}
