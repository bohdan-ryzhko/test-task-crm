import userAvatar from "../../images/user-info/avatar.png";
import { UserInfo } from "./UserInfo";
import { FC, ReactNode } from "react";
import { UserContext } from "../../hooks/UserContext";

export default {
  title: "Components/UserInfo",
  component: UserInfo,
};

export const Default = () => <UserInfo />;

interface ContentWrapperProps {
  children: ReactNode;
}

const MockedUserProvider: FC<ContentWrapperProps> = ({ children }) => (
  <UserContext.Provider value={{ name: "John Smith", position: "Developer", avatar: userAvatar }}>
    {children}
  </UserContext.Provider>
);

export const WithAvatar = () => (
  <MockedUserProvider>
    <UserInfo />
  </MockedUserProvider>
);
