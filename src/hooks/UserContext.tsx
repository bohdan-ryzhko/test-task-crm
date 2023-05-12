import { createContext } from "react";
import { UserInfoInterface } from "../interfaces/UserInfoInterface";
import { userInfo } from "../stateUser/userInfo";

export const UserContext = createContext<UserInfoInterface>(userInfo);