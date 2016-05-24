// Import React
import React = require("react");

// <NavItem />
// ----------------------------------------
export interface NavItemProps extends React.Props<NavItemClass> {
  active?: boolean;
  brand?: any; // TODO: Add more specific type
  bsSize?: string;
  bsStyle?: string;
  className?: string;
  componentClass?: any; // TODO: Add more specific type
  defaultNavExpanded?: boolean;
  disabled?: boolean;
  eventKey?: any;
  fixedBottom?: boolean;
  fixedTop?: boolean;
  fluid?: boolean;
  href?: string;
  inverse?: boolean;
  linkId?: string;
  navExpanded?: boolean;
  onClick?: Function;
  onSelect?: Function;
  onToggle?: Function;
  role?: string;
  staticTop?: boolean;
  target?: string;
  title?: string;
  toggleButton?: any; // TODO: Add more specific type
  toggleNavKey?: string | number;
}
export interface NavItem extends React.ReactElement<NavItemProps> { }
export interface NavItemClass extends React.ComponentClass<NavItemProps> { }
export var NavItem: NavItemClass;
