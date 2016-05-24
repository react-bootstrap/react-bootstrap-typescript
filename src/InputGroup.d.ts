// Import React
import React = require("react");
import { InputGroupAddonClass } from './InputGroupAddon';

// <InputGroup />
// ----------------------------------------
export interface InputGroupProps extends React.Props<InputGroupClass> {

}
export interface InputGroup extends React.ReactElement<InputGroupProps> {}
export interface InputGroupClass extends React.ComponentClass<InputGroupProps> {
  Addon: InputGroupAddonClass;
}
export var InputGroup:InputGroupClass;
