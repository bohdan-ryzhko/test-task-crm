import { ReactNode, Dispatch, SetStateAction } from "react";

export interface ContentWrapperProps {
  children: ReactNode;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
}
