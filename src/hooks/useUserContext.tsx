import { useContext } from "react";
import { UserContext } from "../components/UserContext/UserContext";

export const useUserContext = () => useContext(UserContext);
