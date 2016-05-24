// Import React
import React = require("react");

// <ProgressBar />
// ----------------------------------------
export interface ProgressBarProps extends React.Props<ProgressBarClass> {
  // Optional
  active?: boolean;
  bsSize?: string;
  bsStyle?: string;
  className?: string;
  interpolatedClass?: any; // TODO: Add more specific type
  label?: any; // TODO: Add more specific type
  max?: number;
  min?: number;
  now?: number;
  srOnly?: boolean;
  striped?: boolean;
}
export interface ProgressBar extends React.ReactElement<ProgressBarProps> { }
export interface ProgressBarClass extends  React.ComponentClass<ProgressBarProps> { }
export var ProgressBar: ProgressBarClass;
