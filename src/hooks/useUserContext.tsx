import { useContext } from "react";
import { UserContext } from "./UserContext";
import { UserInfoInterface } from "../interfaces/UserInfoInterface";

export const useUserContext = () => useContext<UserInfoInterface>(UserContext);
