import sass from "./UserInfo.module.scss";
import { FC } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { sizeAvatar } from "../../constants/sizeAvatar";

export const UserInfo: FC = () => {
	const user = useUserContext();
	return (
		<div className={sass.userInfo}>
			<div className={sass.userAvatar}>
				<img width={sizeAvatar.width} height={sizeAvatar.height} src={user.avatar} alt={user.name} />
			</div>
			<div className={sass.userDescription}>
				<p className={sass.userName}>{user.name}</p>
				<p className={sass.userPosition}>{user.position}</p>
			</div>
		</div>
	)
}
