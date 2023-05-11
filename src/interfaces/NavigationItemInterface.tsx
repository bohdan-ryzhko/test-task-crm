import React from "react";

export interface NavigationItemInterface {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  id: string;
  active: boolean;
}
