// Import React
import React = require("react");

// <Jumbotron />
// ----------------------------------------
export interface JumbotronProps extends React.Props<JumbotronClass> {
  className?: string;
  componentClass?: any; // TODO: Add more specific type
}
export interface Jumbotron extends React.ReactElement<JumbotronProps> { }
export interface JumbotronClass extends React.ComponentClass<JumbotronProps> { }
export var Jumbotron: JumbotronClass;
