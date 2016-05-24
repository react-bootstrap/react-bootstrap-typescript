// Import React
import React = require("react");

// <Portal />
// ----------------------------------------
export interface PortalProps extends React.Props<PortalClass> {
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
export interface Portal extends React.ReactElement<PortalProps> { }
export interface PortalClass extends React.ComponentClass<PortalProps> { }
export var Portal: PortalClass;
