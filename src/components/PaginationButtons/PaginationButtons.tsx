import sass from "./PaginationButtons.module.scss";
import { FC } from "react";
import prevIcon from "../../images/pagination/prev-icon.svg";
import nextIcon from "../../images/pagination/next-icon.svg";

export const PaginationButtons: FC = () => {
	return (
		<div className={sass.paginationButtonsWrapper}>
			<div className={sass.prevBtn}>
				<button className={sass.paginationBtn} type="button">
					<img width={6} height={6} src={prevIcon} alt="prev button" />
				</button>
			</div>
			<ul className={sass.paginationButtons}>
				<li>
					<button className={sass.paginationBtnActive} type="button">1</button>
				</li>
				<li>
					<button className={sass.paginationBtn} type="button">2</button>
				</li>
				<li>
					<button className={sass.paginationBtn} type="button">3</button>
				</li>
				<li>
					<button className={sass.paginationBtn} type="button">4</button>
				</li>
				<li>
					<p>...</p>
				</li>
				<li>
					<button className={sass.paginationBtn} type="button">40</button>
				</li>
			</ul>
			<div className={sass.nextBtn}>
				<button className={sass.paginationBtn} type="button">
					<img width={6} height={6} src={nextIcon} alt="next button" />
				</button>
			</div>
		</div>
	)
}
