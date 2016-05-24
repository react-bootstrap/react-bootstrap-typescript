// Import React
import React = require("react");

// <SplitButton />
// ----------------------------------------
export interface SplitButtonProps extends React.Props<SplitButtonClass>{
  bsStyle?: string;
  bsSize?: string;
  className?: string;
  disabled?: boolean;
  dropdownTitle?: any; // TODO: Add more specific type
  dropup?: boolean;
  href?: string;
  id?: string;
  onClick?: Function;  // TODO: Add more specific type
  onSelect?: Function; // TODO: Add more specific type
  pullRight?: boolean;
  target?: string;
  title?: any; // TODO: Add more specific type
}
export interface SplitButton extends React.ReactElement<SplitButtonProps> { }
export interface SplitButtonClass extends React.ComponentClass<SplitButtonProps> { }
export var SplitButton: SplitButtonClass;
