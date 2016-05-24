// Import React
import React = require("react");

// <Col />
// ----------------------------------------
export interface ColProps extends React.Props<ColClass> {
  className?: string;
  componentClass?: any; // TODO: Add more specific type
  lg?: number;
  lgOffset?: number;
  lgPull?: number;
  lgPush?: number;
  md?: number;
  mdOffset?: number;
  mdPull?: number;
  mdPush?: number;
  sm?: number;
  smOffset?: number;
  smPull?: number;
  smPush?: number;
  xs?: number;
  xsOffset?: number;
  xsPull?: number;
  xsPush?: number;
}
export interface Col extends React.ReactElement<ColProps> { }
export interface ColClass extends React.ComponentClass<ColProps> { }
export var Col: ColClass;
