// Import React
import React = require("react");

// <Well />
// ----------------------------------------
export interface WellProps extends React.Props<WellClass> {
  bsSize?: string;
  bsStyle?: string;
  className?: string;
}
export interface Well extends React.ReactElement<WellProps> { }
export interface WellClass extends React.ComponentClass<WellProps> { }
export var Well: WellClass;
