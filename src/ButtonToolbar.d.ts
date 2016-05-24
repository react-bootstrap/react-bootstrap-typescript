import React = require("react");

// <ButtonToolbar />
// ----------------------------------------
export interface ButtonToolbarProps extends React.Props<ButtonToolbarClass> {

  // Optional
  block?: boolean;
  bsSize?: string;
  bsStyle?: string;
  className?: string;
  justified?: boolean;
  vertical?: boolean;
}
export interface ButtonToolbar extends React.ReactElement<ButtonToolbarProps> { }
export interface ButtonToolbarClass extends  React.ComponentClass<ButtonToolbarProps> { }
export var ButtonToolbar: ButtonToolbarClass;
