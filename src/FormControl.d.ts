// Import React
import React = require("react");
import {FormControlFeedbackClass} from "./FormControlFeedback";

// <FormControl />
// ----------------------------------------
export interface FormControlProps extends React.Props<FormControlClass> {
  type: string;
  id?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: Function;
  onKeyPress?: Function;
  inputRef?: Function;
}
export interface FormControl extends React.ReactElement<FormControlProps> {}
export interface FormControlClass extends React.ComponentClass<FormControlProps> {
  Feedback: FormControlFeedbackClass;
}
export var FormControl:FormControlClass;
