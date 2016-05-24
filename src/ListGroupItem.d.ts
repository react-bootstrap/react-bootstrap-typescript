// Import React
import React = require("react");

// <ListGroupItem />
// ----------------------------------------
export interface ListGroupItemProps extends React.Props<ListGroupItemClass> {
  active?: any;
  bsSize?: string;
  bsStyle?: string;
  className?: string;
  disabled?: any;
  eventKey?: any;
  header?: any; // TODO: Add more specific type
  href?: string;
  key?: any; // TODO: Add more specific type
  listItem?: boolean;
  onClick?: Function; // TODO: Add more specific type
  target?: string;
}
export interface ListGroupItem extends React.ReactElement<ListGroupItemProps> { }
export interface ListGroupItemClass extends React.ComponentClass<ListGroupItemProps> { }
export var ListGroupItem: ListGroupItemClass;
