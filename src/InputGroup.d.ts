// Import React
import React = require("react");
import { InputGroupAddonClass } from './InputGroupAddon';
import { InputGroupButtonClass } from './InputGroupButton';

// <InputGroup />
// ----------------------------------------
export interface InputGroupProps extends React.Props<InputGroupClass> {

}
export interface InputGroup extends React.ReactElement<InputGroupProps> {}
export interface InputGroupClass extends React.ComponentClass<InputGroupProps> {
  Addon: InputGroupAddonClass;
  Button: InputGroupButtonClass;
}
export var InputGroup:InputGroupClass;
