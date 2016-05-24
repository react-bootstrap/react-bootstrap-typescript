// Import React
import React = require("react");

// <Nav />
// ----------------------------------------
// TODO: This one turned into a union of two different types
export interface NavProps extends React.Props<NavClass> {
  // Optional
  activeHref?: string;
  activeKey?: any;
  bsSize?: string;
  bsStyle?: string;
  className?: string;
  collapsible?: boolean;
  eventKey?: any;
  expanded?: boolean;
  id?: string;
  justified?: boolean;
  navbar?: boolean;
  onSelect?: Function;
  pullRight?: boolean;
  right?: boolean;
  stacked?: boolean;
  ulClassName?: string;
  ulId?: string;
}
export interface Nav extends React.ReactElement<NavProps> { }
export interface NavClass extends  React.ComponentClass<NavProps> { }
export var Nav: NavClass;
