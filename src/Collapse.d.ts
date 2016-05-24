// Import React
import React = require("react");

// <Collapse />
// ----------------------------------------
export interface CollapseProps extends React.Props<CollapseClass> {
  className?:string;
  dimension?:string;
  in?:boolean;
  role?:string;
  timeout?:number;
  transitionAppear?:boolean;
  unmountonExit?:boolean;
  getDimensionValue?:Function;
  onEnter?:Function;
  onEntered?:Function;
  onEntering?:Function;
  onExit?:Function;
  onExited?:Function;
  onExiting?:Function;
}
export interface Collapse extends React.ReactElement<CollapseProps> {}
export interface CollapseClass extends React.ComponentClass<CollapseProps> {}
export var Collapse:CollapseClass;
