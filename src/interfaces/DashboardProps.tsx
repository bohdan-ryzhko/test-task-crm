import { Dispatch, SetStateAction } from "react";

export interface DashboardProps {
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
}