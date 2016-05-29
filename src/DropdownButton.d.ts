// Import React
import React = require("react");

// <DropdownButton />
// ----------------------------------------
export interface DropdownButtonProps extends React.Props<DropdownButtonClass> {
  bsStyle?: string;
  bsSize?: string;
  buttonClassName?: string;
  componentClass?: any;
  className?: string;
  dropup?: boolean;
  href?: string;
  id?: string | number;
  navItem?: boolean;
  noCaret?: boolean;
  onClick?: Function;  // TODO: Add more specifc type
  onSelect?: Function; // TODO: Add more specific type
  pullRight?: boolean;
  title?: any; // TODO: Add more specific type
}
export interface DropdownButton extends React.ReactElement<DropdownButtonProps> { }
export interface DropdownButtonClass extends React.ComponentClass<DropdownButtonProps> { }
export var DropdownButton: DropdownButtonClass;
