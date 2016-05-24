// Import React
import React = require("react");

// <Label />
// ----------------------------------------
export interface LabelProps extends React.Props<LabelClass> {
  bsSize?: string;
  bsStyle?: string;
  className?: string;
}
export interface Label extends React.ReactElement<LabelProps> { }
export interface LabelClass extends React.ComponentClass<LabelProps> { }
export var Label: LabelClass;
