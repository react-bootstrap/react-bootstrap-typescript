// Import React
import React = require("react");

// <Fade />
// ----------------------------------------
export interface FadeProps extends React.Props<FadeClass> {
  in?: boolean;
  onEnter?: Function;
  onEntered?: Function;
  onEntering?: Function;
  onExit?: Function;
  onExited?: Function;
  onExiting?: Function;
  timeout?: number;
  transitionAppear?: boolean;
  unmountOnExit?: boolean;
}
export interface Fade extends React.ReactElement<FadeProps> { }
export interface FadeClass extends React.ComponentClass<FadeProps> { }
export var Fade: FadeClass;
