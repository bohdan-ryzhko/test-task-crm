import React from "react";
import { Meta } from "@storybook/react";
import { NavigationItem } from "./NavigationItem";
import { NavigationItemInterface } from "../../interfaces/NavigationItemInterface";
import { FiHome } from "react-icons/fi";

export default {
  component: NavigationItem,
  title: "Components/NavigationItem",
} as Meta;

const navigationItem: NavigationItemInterface = {
  icon: FiHome,
  text: "Home",
  id: "home",
  active: true,
};

export const ActiveNavigationItem: React.VFC<{}> = () => (
  <NavigationItem item={navigationItem} />
);

navigationItem.active = false;

export const InactiveNavigationItem: React.VFC<{}> = () => (
  <NavigationItem item={navigationItem} />
);
