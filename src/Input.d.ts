// Import React
import React = require("react");

// <Input />
// ----------------------------------------
export interface InputProps extends React.Props<InputClass> {
  defaultValue?:string;
  addonAfter?: any; // TODO: Add more specific type
  addonBefore?: any; // TODO: Add more specific type
  bsSize?: string;
  bsStyle?: string;
  buttonAfter?: any; // TODO: Add more specific type
  buttonBefore?: any; // TODO: Add more specific type
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  feedbackIcon?: any; // TODO: Add more specific type
  groupClassName?: string;
  hasFeedback?: boolean;
  help?: any; // TODO: Add more specific type
  id?: string | number;
  label?: any; // TODO: Add more specific type
  labelClassName?: string;
  multiple?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  type?: string;
  onChange?: Function; // TODO: Add more specific type
  onKeyDown?: Function; // TODO: Add more specific type
  onKeyUp?: Function; // TODO: Add more specific type
  onKeyPress?: Function; // TODO: Add more specific type
  value?: any; // TODO: Add more specific type
  wrapperClassName?: string;
}
export interface Input extends React.ReactElement<InputProps> { }
export interface InputClass extends React.ComponentClass<InputProps> { }
export var Input: InputClass;
