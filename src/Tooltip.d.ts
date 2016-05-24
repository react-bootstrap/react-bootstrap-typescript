// Import React
import React = require("react");

// <Tooltip />
// ----------------------------------------
export interface TooltipProps extends React.Props<TooltipClass> {
  // Optional
  arrowOffsetLeft?: number | string;
  arrowOffsetTop?: number | string;
  bsSize?: string;
  bsStyle?: string;
  className?: string;
  id?: string;
  placement?: string;
  positionLeft?: number;
  positionTop?: number;
  title?: any; // TODO: Add more specific type
}
export interface Tooltip extends React.ReactElement<TooltipProps> { }
export interface TooltipClass extends React.ComponentClass<TooltipProps> { }
export var Tooltip: TooltipClass;
