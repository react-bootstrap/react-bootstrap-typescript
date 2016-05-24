// Import React
import React = require("react");

// <ListGroup />
// ----------------------------------------
export interface ListGroupProps extends React.Props<ListGroupClass> {
  className?: string;
  id?: string | number;
  fill?: boolean; // TODO: Add more specific type
}
export interface ListGroup extends React.ReactElement<ListGroupProps> { }
export interface ListGroupClass extends React.ComponentClass<ListGroupProps> { }
export var ListGroup: ListGroupClass;
