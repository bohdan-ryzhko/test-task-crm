import sass from "./ContentWrapper.module.scss";
import { FC } from "react";
import { ContentWrapperProps } from "../../interfaces/ContentWrapperProps";
import { TbMenu2 } from 'react-icons/tb';

export const ContentWrapper: FC<ContentWrapperProps> = ({ children, setToggleMenu }) => {
	return (
		<section className={sass.section}>
			<button onClick={() => setToggleMenu(true)} className={sass.openMenu} type="button">
				<TbMenu2 size={30} />
			</button>
			{children}
		</section>
	)
}
