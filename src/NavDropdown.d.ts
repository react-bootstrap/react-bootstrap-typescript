// Import React
import React = require("react");

// <NavDropdown />
// ----------------------------------------
export interface NavDropdownProps extends React.Props<NavDropdownClass> {
  className?: string;
  eventKey?: any;
  title?: string;
  id?: string;
}
export interface NavDropdown extends React.ReactElement<NavDropdownProps> { }
export interface NavDropdownClass extends  React.ComponentClass<NavDropdownProps> { }
export var NavDropdown: NavDropdownClass;
