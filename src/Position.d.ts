// Import React
import React = require("react");

// <Position />
// ----------------------------------------
export interface PositionProps extends React.Props<PositionClass> {
  dimension?: string | Function;
  getDimensionValue?: Function;
  in?: boolean;
  onEnter?: Function;
  onEntered?: Function;
  onEntering?: Function;
  onExit?: Function;
  onExited?: Function;
  onExiting?: Function;
  role?: string;
  timeout?: number;
  transitionAppear?: boolean;
  unmountOnExit?: boolean;
}
export interface Position extends React.ReactElement<PositionProps> { }
export interface PositionClass extends  React.ComponentClass<PositionProps> { }
export var Position: PositionClass;
