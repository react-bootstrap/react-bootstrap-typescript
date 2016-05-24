// Import React
import React = require("react");

// <Popover/>
// ----------------------------------------
export interface PopoverProps  extends React.Props<PopoverClass> {
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
export interface Popover extends React.ReactElement<PopoverProps> { }
export interface PopoverClass extends React.ComponentClass<PopoverProps> { }
export var Popover: PopoverClass;
