// Import React
import React = require("react");

// <OverlayTrigger />
// ----------------------------------------
export interface OverlayTriggerProps extends React.Props<OverlayTriggerClass> {
  // Required
  overlay: any; // TODO: Add more specific type

  // Optional
  animation?: any; // TODO: Add more specific type
  container?: any; // TODO: Add more specific type
  containerPadding?: number;
  defaultOverlayShown?: boolean;
  delay?: number;
  delayHide?: number;
  delayShow?: number;
  onEnter?: Function;
  onEntered?: Function;
  onEntering?: Function;
  onExit?: Function;
  onExited?: Function;
  onExiting?: Function;
  placement?: string;
  rootClose?: boolean;
  trigger?: string;
}
export interface OverlayTrigger extends React.ReactElement<OverlayTriggerProps> { }
export interface OverlayTriggerClass extends  React.ComponentClass<OverlayTriggerProps> { }
export var OverlayTrigger: OverlayTriggerClass;
