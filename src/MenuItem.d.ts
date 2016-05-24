// Import React
import React = require("react");

// <MenuItem />
// ----------------------------------------
export interface MenuItemProps extends React.Props<MenuItemClass> {
  active?: boolean;
  className?: string;
  disabled?: boolean;
  divider?: boolean;
  eventKey?: any;
  header?: boolean;
  href?: string;
  onClick?: Function;
  onKeyDown?: Function;
  onSelect?: Function;
  target?: string;
  title?: string;
}
export interface MenuItem extends React.ReactElement<MenuItemProps> { }
export interface MenuItemClass extends React.ComponentClass<MenuItemProps> { }
export var MenuItem: MenuItemClass;
