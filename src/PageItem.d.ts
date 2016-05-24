// Import React
import React = require("react");

// <PageItem />
// ----------------------------------------
export interface PageItemProps extends React.Props<PageItemClass> {
  className?: string;
  disabled?: boolean;
  eventKey?: any;
  href?: string;
  next?: boolean;
  onSelect?: Function;
  previous?: boolean;
  target?: string;
  title?: string;
}
export interface PageItem extends React.ReactElement<PageItemProps> { }
export interface PageItemClass extends React.ComponentClass<PageItemProps> { }
export var PageItem: PageItemClass;
