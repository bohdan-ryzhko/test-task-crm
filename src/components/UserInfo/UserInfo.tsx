import sass from "./UserInfo.module.scss";
import { FC } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { sizeAvatar } from "../../constants/sizeAvatar";

export const UserInfo: FC = () => {
	const { name, position, avatar } = useUserContext();
	return (
		<div className={sass.userInfo}>
			<div className={sass.userAvatar}>
				<img width={sizeAvatar.width} height={sizeAvatar.height} src={avatar} alt={name} />
			</div>
			<div className={sass.userDescription}>
				<p className={sass.userName}>{name}</p>
				<p className={sass.userPosition}>{position}</p>
			</div>
		</div>
	)
}
