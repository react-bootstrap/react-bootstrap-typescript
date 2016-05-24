// Import React
import React = require("react");

// <Overlay />
// ----------------------------------------
export interface OverlayProps extends React.Props<OverlayClass> {
  // Optional
  animation?: any; // TODO: Add more specific type
  container?: any; // TODO: Add more specific type
  containerPadding?: number; // TODO: Add more specific type
  onEnter?: Function;
  onEntered?: Function;
  onEntering?: Function;
  onExit?: Function;
  onExited?: Function;
  onExiting?: Function;
  onHide?: Function;
  placement?: string;
  rootClose?: boolean;
  show?: boolean;
  target?: Function;
}
export interface Overlay extends React.ReactElement<OverlayProps> { }
export interface OverlayClass extends  React.ComponentClass<OverlayProps> { }
export var Overlay: OverlayClass;
