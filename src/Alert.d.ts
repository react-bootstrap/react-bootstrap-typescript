// Import React
import React = require("react");

// <Alert />
// ----------------------------------------
export interface AlertProps extends React.Props<AlertClass> {
  bsSize?: string;
  bsStyle?: string;
  className?: string;
  closeLabel?: string;
  dismissAfter?: number;
  onDismiss?: Function;
}
export interface Alert extends React.ReactElement<AlertProps> { }
export interface AlertClass extends React.ComponentClass<AlertProps> { }
export var Alert: AlertClass;
