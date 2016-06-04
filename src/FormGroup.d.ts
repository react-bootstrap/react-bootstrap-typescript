// Import React
import React = require("react");

// <FormGroup />
// ----------------------------------------
export interface FormGroupProps extends React.Props<FormGroupClass> {
  controlId: string;
  validationState?: string;
}
export interface FormGroup extends React.ReactElement<FormGroupProps> {}
export interface FormGroupClass extends React.ComponentClass<FormGroupProps> {}
export var FormGroup:FormGroupClass;
