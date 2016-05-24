// Import React
import React = require("react");

import {NavbarBrandClass} from './NavbarBrand';
import {NavbarCollapseClass} from './NavbarCollapse';
import {NavbarHeaderClass} from './NavbarHeader';
import {NavbarToggleClass} from './NavbarToggle';

// <Navbar />
// ----------------------------------------
export interface NavbarProps extends React.Props<NavbarClass> {
  brand?: any; // TODO: Add more specific type
  bsSize?: string;
  bsStyle?: string;
  className?: string;
  componentClass?: any; // TODO: Add more specific type
  defaultNavExpanded?: boolean;
  fixedBottom?: boolean;
  fixedTop?: boolean;
  fluid?: boolean;
  inverse?: boolean;
  navExpanded?: boolean;
  onToggle?: Function;
  role?: string;
  staticTop?: boolean;
  toggleButton?: any; // TODO: Add more specific type
  toggleNavKey?: string | number;
}
export interface Navbar extends React.ReactElement<NavbarProps> { }
export interface NavbarClass extends React.ComponentClass<NavbarProps> {
  Brand: NavbarBrandClass;
  Collapse: NavbarCollapseClass;
  Header: NavbarHeaderClass;
  Toggle: NavbarToggleClass;
}
export var Navbar: NavbarClass;
