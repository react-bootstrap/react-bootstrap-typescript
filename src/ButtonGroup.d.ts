// Import React
import React = require("react");

// <ButtonGroup />
// ----------------------------------------
export interface ButtonGroupProps extends React.Props<ButtonGroupClass> {
  // Optional
  block?: boolean;
  bsSize?: string;
  bsStyle?: string;
  className?: string;
  justified?: boolean;
  vertical?: boolean;
}
export interface ButtonGroup extends React.ReactElement<ButtonGroupProps> { }
export interface ButtonGroupClass extends  React.ComponentClass<ButtonGroupProps> { }
export var ButtonGroup: ButtonGroupClass;
