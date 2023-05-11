import { useContext } from "react";
import { UserContext } from "../components/App";

export const useUserContext = () => useContext(UserContext);
