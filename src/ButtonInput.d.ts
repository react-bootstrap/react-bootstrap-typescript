// Import React
import React = require("react");

// <ButtonInput />
// ----------------------------------------
export interface ButtonInputProps extends React.Props<ButtonInputClass> {
  addonAfter?: any; // TODO: Add more specific type
  addonBefore?: any; // TODO: Add more specific type
  bsSize?: string;
  bsStyle?: string;
  buttonAfter?: any; // TODO: Add more specific type
  buttonBefore?: any; // TODO: Add more specific type
  className?: string;
  disabled?: boolean;
  feedbackIcon?: any; // TODO: Add more specific type
  groupClassName?: string;
  hasFeedback?: boolean;
  help?: any; // TODO: Add more specific type
  id?: string | number;
  label?: any; // TODO: Add more specific type
  labelClassName?: string;
  multiple?: boolean;
  onClick?: Function; // TODO: Add more specific type
  type?: string;
  value?: any; // TODO: Add more specific type
  wrapperClassName?: string;
}
export interface ButtonInput extends React.ReactElement<ButtonInputProps> { }
export interface ButtonInputClass extends React.ComponentClass<ButtonInputProps> { }
export var ButtonInput: ButtonInputClass;
